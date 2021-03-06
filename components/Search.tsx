import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";
import { NewsContext } from "../api/Context";
import { Entypo } from "@expo/vector-icons";
import NewsItem from "./NewsItem";
import i18n from "i18n-js";

const Search = () => {
  const {
    news: { articles },
    darkTheme
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const search = text => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter(article => article.title.includes(text)));
  };

  const openModal = newsItem => {
    setModalVisible(true);
    setCurrentNews(newsItem);
  };
  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: darkTheme ? "black" : "lightgrey",
          color: darkTheme ? "white" : "black"
        }}
        onChangeText={text => search(text)}
        placeholder={i18n.translate("SearchForNews")}
        placeholderTextColor={darkTheme ? "white" : "black"}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map(item => (
          <TouchableOpacity
            key={item.title}
            activeOpacity={0.7}
            onPress={() => openModal(item)}
          >
            <Text
              style={{
                ...styles.searchItem,
                backgroundColor: darkTheme ? "black" : "lightgrey",
                color: darkTheme ? "white" : "black"
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Entypo name="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <NewsItem item={currentNews} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15
  },
  searchResults: {
    position: "absolute",
    zIndex: 1,
    top: 50
  },
  searchItem: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5
  },
  closeButton: {
    position: "absolute",
    zIndex: 2,
    right: 0,
    margin: 20
  },
  modalContainer: {
    height: "100%",
    transform: [{ scaleY: -1 }]
  }
});

export default Search;
