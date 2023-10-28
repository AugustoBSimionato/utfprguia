import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default function List() {
    const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
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
        backgroundColor: "#f9c2ff",
        borderRadius: 5,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
});
