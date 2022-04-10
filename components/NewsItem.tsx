import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    transform: [{ scaleY: -1 }]
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white"
  }
});

export default NewsItem;
