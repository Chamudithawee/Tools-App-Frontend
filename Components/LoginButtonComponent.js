import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function LoginButton({ text }) {
    return (

        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.btnText}>{ text }</Text>
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        backgroundColor: 'white'
    },
    btnText: {
       color: '#D10036',
       textTransform: 'uppercase',
       fontSize: 35,
       textAlign: 'center' 
    },
})