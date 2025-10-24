import { Text, View } from "react-native";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

export function Other() {
  const navigation = useNavigation();

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
      <Text>You are on another page</Text>
      <Button onPress={() => navigation.goBack()}>
        <Text>Go home</Text>
      </Button>
    </View>
  );
}
