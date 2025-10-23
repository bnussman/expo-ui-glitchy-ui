import { Pressable, PressableProps } from "react-native";

export function Button(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={(state) => [
        { backgroundColor: state.pressed ? "red" : "pink", padding: 8 },
        typeof props.style === "function" ? props.style(state) : props.style,
      ]}
    />
  );
}
