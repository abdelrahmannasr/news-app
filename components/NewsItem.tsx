import React from "react";
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <View style={{ ...styles.content, backgroundColor: "#282c35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.details, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          Written by: {item.author ? item.author : "unknown"}
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.imageBackground}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            {item.content ? (
              <Text style={{ fontSize: 15, color: "white" }}>
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
