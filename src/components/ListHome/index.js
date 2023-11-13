import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function List() {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { title: 'Requerimentos', link: 'https://portal.utfpr.edu.br/secretaria/requerimentos' },
        { title: 'Matrícula', link: 'https://portal.utfpr.edu.br/secretaria/matricula/matricula' },
        { title: 'Contato/Ouvidoria', link: 'https://portal.utfpr.edu.br/secretaria/contatos' },
        { title: 'Crachá', link: 'https://portal.utfpr.edu.br/secretaria/contatos' },
        { title: 'Geração de GRU’s', link: 'https://sistemas2.utfpr.edu.br/dpls/sistema/gestaop00/mpgrusimples.inicio' },
        { title: 'Auxilio Estudantil', link: 'https://portal.utfpr.edu.br/alunos/bolsas/auxilio-estudantil/auxilio-estudantil' },
        { title: 'Programas de Pesquisa', link: 'https://portal.utfpr.edu.br/alunos/bolsas/programas-de-pesquisa-e-inovacao' },
        { title: 'Dupla Diplomação/Internacional', link: 'https://portal.utfpr.edu.br/internacional' },
        { title: 'Portal da Informação - UTFPR', link: 'https://portaldeinformacao.utfpr.edu.br/' },
        { title: 'Editais', link: 'https://portal.utfpr.edu.br/editais#c5=abertos&b_start=0' },
        { title: 'Instagram', link: 'https://www.instagram.com/UTFPR_/' },
        { title: 'Twitter', link: 'https://twitter.com/UTFPR_' },
        { title: 'Facebook', link: 'https://www.facebook.com/UTFPR' },
        { title: 'YouTube', link: 'https://www.youtube.com/canaldaUTFPR' },
        { title: 'Flickr', link: 'https://www.flickr.com/photos/utfpr' },
        { title: 'Linkedin', link: 'https://www.linkedin.com/school/utfpr-oficial/' },
        { title: 'Docentes do DACOM-CP', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-bacharelado-em-engenharia-de-software/area-academica/departamento-academico-de-computacao-dacom' },
        { title: 'Área do Curso de Bacharelado em Engenharia de Software - CP', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-bacharelado-em-engenharia-de-software' },
        { title: 'Área do Curso de Engenharia de Computação - CP', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-de-computacao' },
        { title: 'Área do Curso de Engenharia de Controle e Automação - CP', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-de-controle-e-automacao' },
        { title: 'Área do Curso de Engenharia Elétrica - CP', link: 'https://portal.utfpr.edu.br/cursos/graduacao/bacharelado/engenharia-eletrica' },
        { title: 'Área do Curso de Engenharia Mecânica - CP', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-mecanica' },
        { title: 'Área do Curso de Licenciatura em Matemática', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-licenciatura-em-matematica' },
        { title: 'Área do Curso de Tecnologia em Análise e Desenvolvimento de Sistemas', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-tecnologia-em-analise-e-desenvolvimento-de-sistema' },
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
                        activeOpacity={0.8}
                        key={index}
                        style={styles.item}
                        onPress={() => setSelectedItem(selectedItem === index ? null : index)}
                    >
                        <Text style={styles.itemText}>{item.title}</Text>
                        {selectedItem === index && 
                            <View style={styles.expandedArea}>
                                {/* <Text style={styles.expandedAreaText}>{item.content}</Text> */}
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
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
    },
    list: {
        paddingTop: 30,
        paddingBottom: 40,
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
        fontWeight: '500',
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
