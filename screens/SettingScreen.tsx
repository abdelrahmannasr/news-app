import React, { useContext, useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import { NewsContext } from "../api/Context";
import i18n from "i18n-js";

const SettingScreen = () => {
  const { darkTheme, setLang, setIndex } = useContext(NewsContext);
  const [selectedValue, setSelectedValue] = useState("English");

  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: darkTheme ? "lightgrey" : "black",
          borderRadius: 10,
          margin: 10,
          marginTop: 20,
          shadowColor: darkTheme ? "lightgrey" : "black"
        }}
      >
        <Text
          style={{
            color: darkTheme ? "black" : "white",
            paddingVertical: 10,
            paddingHorizontal: 15,
            fontSize: 15
          }}
        >
          {i18n.translate("Language")}
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 50,
            width: 150,
            color: darkTheme ? "black" : "white"
          }}
          onValueChange={itemValue => {
            setLang(itemValue);
            setSelectedValue(itemValue);
            setIndex(1);
          }}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SettingScreen;
