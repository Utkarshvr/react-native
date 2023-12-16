import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.cardContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>CARD</Text>
        </View>
      </ScrollView>
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
  container: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  cardContainer: {
    gap: 8,
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 12,

    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  cardElevated: {
    backgroundColor: "#CAD5E2",
    elevation: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#ef5354",
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
