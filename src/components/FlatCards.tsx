import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.strongText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.strongText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.strongText}>Blue</Text>
        </View>
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
  cardsContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cardOne: {backgroundColor: "#EF5354"},
  cardTwo: {backgroundColor: "#50DBB4"},
  cardThree: {backgroundColor: "#5DA3FA"},
});
