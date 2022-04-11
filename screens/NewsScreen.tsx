import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  RefreshControl
} from "react-native";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import NewsItem from "../components/NewsItem";

const NewsScreen = () => {
  const {
    news: { articles },
    fetchNews
  } = useContext(NewsContext);
  const windowHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState();
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <NewsItem item={item} index={index} />
          )}
          onSnapToItem={index => setActiveIndex(index)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                fetchNews();
                setTimeout(() => {
                  setRefreshing(false);
                }, 2000);
              }}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black"
  }
});

export default NewsScreen;
