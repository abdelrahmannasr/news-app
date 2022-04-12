import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { NewsContext } from "../api/Context";

const Search = () => {
  const {
    news: { articles }
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
  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: "black",
          color: "white"
        }}
        onChangeText={text => search(text)}
        placeholder="Search for news"
        placeholderTextColor={"white"}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map(item => (
          <TouchableOpacity key={item.title} activeOpacity={0.7}>
            <Text
              style={{
                ...styles.searchItem,
                backgroundColor: "black",
                color: "white"
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
  }
});

export default Search;
