import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export function Main() {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);

  useEffect(() => {
    navigation.addListener("focus", (e) => {
      console.log(e);
      setShow(true);
    });
    navigation.addListener("blur", (e) => {
      console.log(e);
      setShow(false);
    });
  }, []);

  if (!show) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView centerContent contentContainerStyle={{ padding: 8 }}>
        <Text>This is the "Main" page</Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <TextInput
            style={{
              backgroundColor: "gray",
              flexGrow: 1,
              borderRadius: 8,
              padding: 8,
              minWidth: 100,
            }}
          />

          <Button onPress={() => navigation.navigate("Other")}>
            <Text>Go to other page</Text>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
