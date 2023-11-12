import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Map() {
    return (
        <View style={styles.container}>
            <Text>Mapa da UTFPR-CP</Text>
            <Image source={require("../../assets/mapa-utfpr-cp.png")} />
        </View>
    );
}
