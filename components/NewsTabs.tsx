import React, { useState, useContext } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../api/Context";
import SettingScreen from "../screens/SettingScreen";

const NewsTabs = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
    { key: "third", title: "Settings" }
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
    third: SettingScreen
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default NewsTabs;
