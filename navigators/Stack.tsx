import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Other } from "../app/Other";
import { Menu } from "@/components/Menu";
import { Home } from "@/app/Home";

const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerRight: () => <Menu />,
      },
    },
    Other: {
      screen: Other,
      options: {
        headerRight: () => <Menu />,
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
