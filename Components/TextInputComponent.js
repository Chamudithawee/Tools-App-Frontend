import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function TextInputComponent({ text }) {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder={ text } />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 15,
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
  },
});
