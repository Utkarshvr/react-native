import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.cardsContainer}>
        {[1, 2, 3].map(e => (
          <View key={e} style={[styles.card, styles.cardElevated]}>
            <Image
              source={{
                uri: "https://www.expedia.com/stories/wp-content/uploads/2021/09/Tenerife-Canary-Islands.png",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Hawa Mahal</Text>
              <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
              <Text style={styles.cardDesc}>
                Pink City, Jaipur, is a mesmerizing destination in the heart of
                Rajasthan, India, renowned for its vibrant culture, majestic
                architecture, and a distinct rosy hue that adorns its historic
                structures. Steeped in history, this city is a captivating blend
                of tradition and modernity.
              </Text>
              <Text style={styles.cardFooter}>12 mins away</Text>
            </View>
          </View>
        ))}
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
    // flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {borderRadius: 12, overflow: "hidden"},
  cardElevated: {
    backgroundColor: "#fff",
    elevation: 8,
    shadowOffset: {width: 1, height: 1},
  },
  cardImage: {height: 180},

  cardBody: {padding: 8},
  cardTitle: {color: "#222", fontWeight: "bold", fontSize: 16, marginBottom: 0},
  cardLabel: {color: "#333", fontWeight: "500", fontSize: 14, marginBottom: 4},
  cardDesc: {
    color: "#333",
    fontWeight: "normal",
    fontSize: 12,
    marginBottom: 8,
  },
  cardFooter: {color: "#333", fontWeight: "600", fontSize: 10},
});
