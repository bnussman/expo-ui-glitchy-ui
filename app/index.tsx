import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { Text, TextInput, View } from "react-native";

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
      <View style={{ flexDirection: "row", gap: 16 }}>
        <TextInput
          style={{
            backgroundColor: "gray",
            borderRadius: 8,
            padding: 8,
            minWidth: 100,
          }}
        />
        <Button onPress={() => alert("Hey!")}>
          <Text>Button</Text>
        </Button>
        <Button onPress={() => router.push("/cars")}>
          <Text>Go to other page</Text>
        </Button>
      </View>
    </View>
  );
}
