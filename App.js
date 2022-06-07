import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import LoginButton from "./Components/LoginButtonComponent.js";
import TextInputComponent from "./Components/TextInputComponent.js";

export default function App() {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.mainText}>Tools</Text>

        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInputComponent text="UserName" />
        <TextInputComponent text="Password" />

        <Text style={styles.forgotText}>Forgot My Password</Text>
      </View>

      <View style={styles.loginButtonContainer}>
        <LoginButton text="sign in" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D10036",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 140,
  },
  loginButtonContainer: {
    alignItems: "center",
    marginTop: 86,
  },
  mainText: {
    color: "white",
    fontSize: 100,
  },
  welcomeText: {
    color: "white",
    fontSize: 40,
  },
  inputBox: {
    height: 40,
    backgroundColor: "white",
    width: "60%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  forgotText: {
    color: "white",
    fontSize: 20,
    textAlign: "right",
  },
  buttonText: {
    color: "#D10036",
    fontSize: 35,
  },
});
