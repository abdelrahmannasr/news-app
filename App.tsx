import { StyleSheet, Text, View, StatusBar } from "react-native";
import NewsTabs from "./components/NewsTabs";
import Context, { NewsContext } from "./api/Context";
import { useContext } from "react";

const App = () => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white"
      }}
    >
      <NewsTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

const ContextApp = () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

export default ContextApp;
