import { Button, ContextMenu, ContextMenuProps, Host } from "@expo/ui/swift-ui";
import { Button as MyButton } from "@/components/Button";

interface Option {
  /**
   * The text content of the option
   */
  title: string;
  /**
   * Called when the option is chosen/clicked/pressed
   */
  onClick?: () => void;
  /**
   * Makes the item show as destructive. (Red on iOS and Andriod)
   */
  destructive?: boolean;
  /**
   * If provided, the option will only show if show is true.
   * @default true
   */
  show?: boolean;
  /**
   * @default button
   */
  type?: "button" | "submenu";
  /**
   * Only works if type is `submenu`
   */
  options?: Option[];
}

export interface MenuProps extends Omit<ContextMenuProps, "children"> {
  /**
   * The trigger for the men
   */
  trigger: React.ReactNode;
  /**
   * Options that render in the Menu
   */
  options: Option[];
  /**
   * If the Menu is disabled, the tigger will just be returned
   */
  disabled?: boolean;
}

export function Menu(props: MenuProps) {
  if (props.disabled) {
    return props.trigger;
  }

  const renderOption = (option: MenuProps["options"][number]) => {
    if (option.type === "submenu") {
      return (
        <ContextMenu key={option.title}>
          <ContextMenu.Items>
            {option.options?.map((subOption) => renderOption(subOption))}
          </ContextMenu.Items>
          <ContextMenu.Trigger>
            <Button>{option.title}</Button>
          </ContextMenu.Trigger>
        </ContextMenu>
      );
    }
    return (
      <Button
        key={option.title}
        role={option.destructive ? "destructive" : undefined}
        onPress={option.onClick}
      >
        {option.title}
      </Button>
    );
  };

  return (
    <Host matchContents={{ horizontal: true, vertical: false }}>
      <ContextMenu activationMethod={props.activationMethod ?? "singlePress"}>
        <ContextMenu.Items>
          {props.options
            .filter((option) => option.show === undefined || option.show)
            .map(renderOption)}
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <MyButton>{props.trigger}</MyButton>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
