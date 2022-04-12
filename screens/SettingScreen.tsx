import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NewsContext } from "../api/Context";

const SettingScreen = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View>
      <Text
        style={{
          color: darkTheme ? "white" : "black",
          paddingVertical: 10,
          paddingHorizontal: 15,
          fontSize: 15
        }}
      >
        Change Language Should be here
      </Text>
    </View>
  );
};

export default SettingScreen;
