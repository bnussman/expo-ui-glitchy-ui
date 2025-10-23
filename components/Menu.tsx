import React from "react";
import { Host, ContextMenu, Button } from "@expo/ui/swift-ui";
import { Button as MyButton } from "@/components/Button";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export function Menu() {
  const router = useRouter();

  return (
    <Host matchContents={{ horizontal: true, vertical: false }}>
      <ContextMenu>
        <ContextMenu.Items>
          <Button onPress={() => router.back()}>Go home</Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <MyButton>
            <Text>🧰</Text>
          </MyButton>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
