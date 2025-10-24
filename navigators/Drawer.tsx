import { Main } from "@/app/Main";
import { Menu } from "@/components/Menu";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const Drawer = createDrawerNavigator({
  screens: {
    Main: {
      screen: Main,
      options: {
        headerRight: () => (
          <Menu options={[{ title: "hey" }]} trigger={<Text>🧰</Text>} />
        ),
      },
    },
  },
});
