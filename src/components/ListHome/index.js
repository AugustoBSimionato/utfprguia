import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function List() {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { title: 'Item 1', content: 'Conteúdo do Estudantil Conteúdo do Estudantil Conteúdo do Estudantil Estudantil Estudantil Estudantil Estudantil Estudantil Estudantil Estudantil Estudantil', link: '' },
        { title: 'Item 2', content: 'Conteúdo do Item 2', link: '' },
        { title: 'Item 3', content: 'Conteúdo do Item 3', link: '' },
        { title: 'Item 4', content: 'Conteúdo do Item 4', link: '' },
        { title: 'Item 5', content: 'Conteúdo do Item 5', link: '' },
        { title: 'Item 6', content: 'Conteúdo do Item 6', link: '' },
        { title: 'Item 7', content: 'Conteúdo do Item 7', link: '' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                indicatorStyle={'white'}
            >
                {items.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.item}
                        onPress={() => setSelectedItem(selectedItem === index ? null : index)}
                    >
                        <Text style={styles.itemText}>{item.title}</Text>
                        {selectedItem === index && 
                            <View style={styles.expandedArea}>
                                <Text style={styles.expandedAreaText}>{item.content}</Text>
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
        backgroundColor: '#4B3766',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    list: {
        paddingTop: 40,
        paddingHorizontal: 15,
        alignItems: 'stretch',
    },
    item: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
    expandedArea: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        alignItems:'center',
    },
    expandedAreaText:{
        textAlign:'center',
        fontSize: 18,
    },
    button: {
        marginTop: 10,
        width: 70,
        height: 35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7E62A3',
        borderRadius:5,
    },
});
