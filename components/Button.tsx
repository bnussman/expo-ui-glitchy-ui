import { Pressable, PressableProps } from "react-native";

export function Button(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "red" : "pink", padding: 8 },
      ]}
    />
  );
}
