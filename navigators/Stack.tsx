import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { Other } from "../app/Other";
import { Menu } from "@/components/Menu";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Drawer } from "./Drawer";

const Stack = createNativeStackNavigator({
  screens: {
    Main: {
      screen: Drawer,
      options: {
        headerShown: false,
      },
    },
    Other: {
      screen: Other,
      options: {
        headerRight: () => (
          <Menu options={[{ title: "hey" }]} trigger={<Text>🧰</Text>} />
        ),
      },
    },
  },
});

type RootStackParamList = StaticParamList<typeof Stack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(Stack);
