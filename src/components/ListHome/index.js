import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function List() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.list}>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Item 7</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    list: {
        paddingHorizontal: 10,
        alignItems: 'stretch',
    },
    item: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
});
