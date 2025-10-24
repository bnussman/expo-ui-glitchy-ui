import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text } from "react-native";

export function Home() {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);

  // In my real app, I update my React Query
  // cache when the user navigates back. This just
  // simulates that behavior...
  useEffect(() => {
    navigation.addListener("focus", (e) => {
      setShow(true);
    });
    navigation.addListener("blur", (e) => {
      setShow(false);
    });
  }, []);

  if (!show) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        centerContent
        contentContainerStyle={{ padding: 8, gap: 16, alignItems: "center" }}
      >
        <Text>This is the "Main" page</Text>
        <Button onPress={() => navigation.navigate("Other")}>
          <Text>Go to other page</Text>
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
