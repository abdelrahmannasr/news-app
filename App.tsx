import { StyleSheet, Text, View, StatusBar } from "react-native";
import NewsTabs from "./components/NewsTabs";
import Context from "./api/Context";

const App = () => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
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
