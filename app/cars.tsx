import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Menu } from "../components/Menu";

export default function Cars() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => <Menu />,
        }}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 16,
        }}
      >
        <Text>You are on another page</Text>
        <Pressable
          style={{ backgroundColor: "blue", padding: 8 }}
          onPress={() => router.back()}
        >
          <Text>Go home</Text>
        </Pressable>
      </View>
    </>
  );
}
