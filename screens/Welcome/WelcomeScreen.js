import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styles from "./welcome.style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome MyBudji!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
