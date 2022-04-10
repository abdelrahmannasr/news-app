import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NewsContext } from "../api/Context";
import { Carousel } from "react-native-snap-carousel";

const NewsScreen = () => {
  const {
    news: { articles }
  } = useContext(NewsContext);
  return <View>{articles && <Carousel />}</View>;
};

export default NewsScreen;
