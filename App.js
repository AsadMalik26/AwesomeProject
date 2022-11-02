import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CRUDApp from "./src/crud/CRUDApp";
// import MRM from "./src/mrm/MRM";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <MRM /> */}
      {/* <Text>Hello world</Text> */}
      <CRUDApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    // backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
