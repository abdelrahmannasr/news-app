import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking
} from "react-native";
import { NewsContext } from "../api/Context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsItem = ({ item, index = 0 }) => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <View
        style={{
          ...styles.content,
          backgroundColor: darkTheme ? "#282c35" : "white"
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.details, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Written by: {item.author ? item.author : "unknown"}
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.imageBackground}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            {item.content ? (
              <Text
                style={{ fontSize: 15, color: darkTheme ? "white" : "black" }}
              >
                `${item.content.slice(0, 45)}...`
              </Text>
            ) : (
              <Text></Text>
            )}
          </TouchableOpacity>
        </ImageBackground>
      </View>
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
    paddingBottom: 10
  },
  image: {
    height: "45%",
    width: windowWidth,
    resizeMode: "cover"
  },
  content: {
    padding: 15,
    flex: 1
  },
  details: {
    fontSize: 18,
    paddingBottom: 10
  },
  imageBackground: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20
  }
});

export default NewsItem;
