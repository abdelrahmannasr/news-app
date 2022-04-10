import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { NewsContext } from "../api/Context";
import { categories, sources } from "../api/api";
import Carousel from "react-native-snap-carousel";

const DiscoverScreen = () => {
  const { setCategory } = useContext(NewsContext);
  const windowWidth = Dimensions.get("window").width;
  const slideItemWidth = Math.round(windowWidth / 3.5);
  return (
    <View style={styles.discover}>
      <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => setCategory(item.name)}
          >
            <Image style={styles.category} source={{ uri: item.pic }}></Image>
            <Text style={{ ...styles.name, color: "white" }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={slideItemWidth}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      ></Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007fff",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10
  },
  container: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  category: {
    height: "60%",
    width: "100%",
    resizeMode: "contain"
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize"
  }
});

export default DiscoverScreen;
