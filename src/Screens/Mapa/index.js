import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Map() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mapa da UTFPR-CP</Text>
            <Image source={require("../../../assets/mapa-utfpr-cp.jpg")} style={styles.image} />
            <Text>Arraste da esquerda para a direita para voltar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
});
