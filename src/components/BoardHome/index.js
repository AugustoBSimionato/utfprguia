import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";

export default function Board() {
    const openMoodle = () => {
        Linking.openURL('https://moodle.utfpr.edu.br/login/index.php');
    };
    const openPortal = () => {
        Linking.openURL('https://sistemas2.utfpr.edu.br/login?returnUrl=%2Fdpls%2Fsistema%2Faluno02%2Fmpmenu.inicio');
    };
    const openCalendar = () => {
        Linking.openURL('https://sei.utfpr.edu.br/sei/publicacoes/controlador_publicacoes.php?acao=publicacao_visualizar&id_documento=3396653&id_orgao_publicacao=0');
    };
    const openBiblio = () => {
        Linking.openURL('https://webapp.utfpr.edu.br/bibservices/minhaBiblioteca');
    };
    const openGrade = () => {
        Linking.openURL('https://gradenahora.com.br/utfpr/grade_na_hora.html');
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={openMoodle} style={styles.button}><Image source={require("../../../assets/moodle-logo.png")} style={{width: 80, height: 45, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>Moodle</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={openPortal} style={styles.button}><Image source={require("../../../assets/utf-logo.png")} style={{width: 80, height: 35, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>Portal Aluno</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={openCalendar} style={styles.button}><Image source={require("../../../assets/calendar.png")} style={{width: 80, height: 75, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>Calendário 2023</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={openBiblio} style={styles.button}><Image source={require("../../../assets/books.png")} style={{width: 80, height: 70, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>Bibliotech</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={openGrade} style={styles.button}><Image source={require("../../../assets/grade.png")} style={{width: 80, height: 70, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>Grade na Hora</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}><Image source={require("../../../assets/calendar.png")} style={{width: 80, height: 75, resizeMode: 'contain'}} /></TouchableOpacity>
                    <Text>...</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    buttonContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});
