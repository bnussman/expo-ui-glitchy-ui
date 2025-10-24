import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export function Home() {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);

  /**
   * I know this looks stupid...
   *
   * In my real app, my React Query cache updates
   * and causes this component to render different contents.
   *
   * I'm using this to simulate that behavior...
   */
  useEffect(() => {
    navigation.addListener("focus", (e) => {
      setShow(true);
    });
    navigation.addListener("blur", (e) => {
      setShow(false);
    });
  }, []);

  if (!show) {
    return (
      <View>
        <Text>No scroll view in this UI</Text>
      </View>
    );
  }

  return (
    <ScrollView
      centerContent
      contentContainerStyle={{ padding: 8, gap: 16, alignItems: "center" }}
    >
      <Text style={{ textAlign: "center" }}>
        To reproduce the bug, click the button below, then, go back to the home
        screen, then do that one more time.
      </Text>
      <Text>You'll notice that the button is distorted.</Text>
      <Button onPress={() => navigation.navigate("Other")}>
        <Text>Go to other page</Text>
      </Button>
    </ScrollView>
  );
}
