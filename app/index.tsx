import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Cars() {
  const router = useRouter();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 16,
      }}
    >
      <Text>
        Reproduction for Expo UI causing RN components to visually glitch
      </Text>
      <Pressable
        style={{ backgroundColor: "pink", padding: 8 }}
        onPress={() => alert("Hey!")}
      >
        <Text>Button</Text>
      </Pressable>
      <Pressable
        style={{ backgroundColor: "yellow", padding: 8 }}
        onPress={() => router.navigate("/cars")}
      >
        <Text>Go to other page</Text>
      </Pressable>
    </View>
  );
}
