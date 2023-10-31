import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function List() {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { title: 'Estudantil', content: 'Conteúdo do Estudantil', link: 'https://www.example.com/estudantil' },
        { title: 'Item 2', content: 'Conteúdo do Item 2', link: 'https://www.example.com/item2' },
        { title: 'Item 3', content: 'Conteúdo do Item 3', link: 'https://www.example.com/item3' },
        
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.list}>
                {items.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.item}
                        onPress={() => setSelectedItem(selectedItem === index ? null : index)}
                    >
                        <Text style={styles.itemText}>{item.title}</Text>
                        {selectedItem === index && 
                            <View style={styles.expandedArea}>
                                <Text style={styles.itemText}>{item.content}</Text>
                                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.link)}>
                                    <Icon name="external-link-square" size={25} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        }
                    </TouchableOpacity>
                ))}
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
    expandedArea: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    button: {
        marginTop: 10,
        width: 100,
        height: 35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7E62A3',
        borderRadius:5
    },
});