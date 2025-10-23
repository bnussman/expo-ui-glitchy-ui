import { Stack, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Menu } from "../components/Menu";
import { useState } from "react";
import { Button } from "@/components/Button";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function Cars() {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(true);

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
        <BottomSheet snapPoints={[200, 500]}>
          <BottomSheetView style={{ flex: 1 }}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </>
  );
}
