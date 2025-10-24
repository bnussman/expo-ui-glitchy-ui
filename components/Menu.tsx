import { Button, ContextMenu, Host } from "@expo/ui/swift-ui";
import { Pressable, Text } from "react-native";

export function Menu() {
  return (
    <Host matchContents>
      <ContextMenu>
        <ContextMenu.Items>
          <Button>Option 1</Button>
          <Button>Option 2</Button>
          <Button>Option 3</Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Pressable>
            <Text>Menu</Text>
          </Pressable>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
