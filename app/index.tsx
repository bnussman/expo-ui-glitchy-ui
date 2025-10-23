import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

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
      <Button onPress={() => alert("Hey!")}>
        <Text>Button</Text>
      </Button>
      <Button onPress={() => router.push("/cars")}>
        <Text>Go to other page</Text>
      </Button>
    </View>
  );
}
