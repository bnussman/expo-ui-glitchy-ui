import React from "react";
import { Host, ContextMenu, Button } from "@expo/ui/swift-ui";

export function Menu() {
  return (
    <Host style={{ width: 150, height: 50 }}>
      <ContextMenu>
        <ContextMenu.Items>
          <Button
            systemImage="person.crop.circle.badge.xmark"
            onPress={() => console.log("Pressed1")}
          >
            Hello
          </Button>
          <Button
            variant="bordered"
            systemImage="heart"
            onPress={() => console.log("Pressed2")}
          >
            Love it
          </Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          <Button variant="bordered">Show Menu</Button>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  );
}
