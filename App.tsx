import { StyleSheet, Text, View, StatusBar } from "react-native";
import NewsTabs from "./components/NewsTabs";

const App = () => {
  return (
    <View style={styles.container}>
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

export default App;
