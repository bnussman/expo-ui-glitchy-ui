import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Menu } from "../components/Menu";
import { useState } from "react";
import { Button } from "@/components/Button";

export default function Cars() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: showMenu ? () => <Menu /> : () => null,
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
        <Button onPress={() => setShowMenu((prev) => !prev)}>
          <Text>Toggle Show Menu</Text>
        </Button>
        <Button
          onPress={() => {
            setShowMenu(false);
            router.back();
          }}
        >
          <Text>Go home</Text>
        </Button>
      </View>
    </>
  );
}
