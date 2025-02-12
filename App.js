import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./screens/Welcome/welcome.style";

const App = () => {
  const [loaded] = useFonts({
    MBold: require("./assets/fonts/Montserrat-Bold.ttf"), // Rename font file
    MBlack: require("./assets/fonts/Montserrat-Black.ttf"),
    MSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    MMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MLight: require("./assets/fonts/Montserrat-Light.ttf"),
    MExtraLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
  });

  if (!loaded) {
    return null; // Show nothing until fonts are loaded
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "MSemiBold", fontSize: 20 }}>Welcome!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
