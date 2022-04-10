import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
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
  },
  image: {
    height: "45%",
    width: windowWidth,
    resizeMode: "cover"
  }
});

export default NewsItem;
