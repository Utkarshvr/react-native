import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(link: string) {
    Linking.openURL(link);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <TouchableOpacity
          onPress={() => openWebsite("https://reactnative.dev/docs/colors")}>
          <Text>Open Link</Text>
        </TouchableOpacity>
        <Button
          title="Follow me on IG"
          onPress={() => openWebsite("https://www.instagram.com/uv._.codes")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  strongText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  card: {},
  cardElevated: {},
});
