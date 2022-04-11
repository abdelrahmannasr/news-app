import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign
} from "@expo/vector-icons";
import { NewsContext } from "../api/Context";

const TopNavigation = ({ index, setIndex }) => {
  const { fetchNews } = useContext(NewsContext);

  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007fff"
            />
          </Text>
        </TouchableOpacity>
      ) : index === 1 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 2 ? 1 : 2)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
          <Text style={{ ...styles.text, color: "lightgrey" }}>All News</Text>
        </TouchableOpacity>
      )}
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ ...styles.center, color: "white" }}>
          {index === 0 ? "Discover" : index === 1 ? "All News" : "Settings"}
        </Text>
      </View>
      {index === 1 ? (
        <View>
          <TouchableOpacity
            style={styles.left}
            onPress={() => setIndex(index === 1 ? 2 : 1)}
          >
            <Text style={{ ...styles.text, color: "lightgrey" }}>Settings</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#007fff" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.right} onPress={() => fetchNews()}>
            <Text style={styles.text}>
              <AntDesign name="reload1" size={24} color="#007fff" />
            </Text>
          </TouchableOpacity> */}
        </View>
      ) : index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text style={{ ...styles.text, color: "white" }}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007fff" />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16
  },
  right: {
    width: 80,
    alignItems: "flex-end"
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007fff",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700"
  }
});

export default TopNavigation;
