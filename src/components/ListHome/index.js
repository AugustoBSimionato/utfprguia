import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function List() {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { title: 'Requerimentos', content: 'Solicite diversos tipos de requerimentos acadêmicos e administrativos.', link: 'https://portal.utfpr.edu.br/secretaria/requerimentos' },
        { title: 'Matrícula', content: 'Saiba mais sobre o processo de matrícula e as etapas necessárias para garantir sua vaga.', link: 'https://portal.utfpr.edu.br/secretaria/matricula/matricula' },
        { title: 'Contato/Ouvidoria', content: 'Encontre informações de contato e acesse a ouvidoria para esclarecer dúvidas e fazer sugestões.', link: 'https://portal.utfpr.edu.br/secretaria/contatos' },
        { title: 'Crachá', content: 'Obtenha informações sobre a emissão e utilização de crachás institucionais.', link: 'https://portal.utfpr.edu.br/secretaria/contatos' },
        { title: 'Geração de GRUs', content: 'Acesse o sistema para gerar Guias de Recolhimento da União (GRUs) de maneira simples e rápida.', link: 'https://sistemas2.utfpr.edu.br/dpls/sistema/gestaop00/mpgrusimples.inicio' },
        { title: 'Auxílio Estudantil', content: 'Conheça os programas de auxílio estudantil disponíveis para apoio financeiro aos alunos.', link: 'https://portal.utfpr.edu.br/alunos/bolsas/auxilio-estudantil/auxilio-estudantil' },
        { title: 'Programas de Pesquisa', content: 'Explore os programas de pesquisa e inovação disponíveis para os estudantes.', link: 'https://portal.utfpr.edu.br/alunos/bolsas/programas-de-pesquisa-e-inovacao' },
        { title: 'Dupla Diplomação/Internacional', content: 'Informações sobre oportunidades de dupla diplomação e intercâmbio internacional.', link: 'https://portal.utfpr.edu.br/internacional' },
        { title: 'Portal da Informação - UTFPR', content: 'Acesse o portal de informações da UTFPR para obter notícias, eventos e comunicados.', link: 'https://portaldeinformacao.utfpr.edu.br/' },
        { title: 'Editais', content: 'Confira os editais em aberto para participar de processos seletivos e projetos.', link: 'https://portal.utfpr.edu.br/editais#c5=abertos&b_start=0' },
        { title: 'Instagram', content: 'Siga a UTFPR no Instagram para ficar atualizado com fotos e novidades da instituição.', link: 'https://www.instagram.com/UTFPR_/' },
        { title: 'Twitter', content: 'Acompanhe as últimas notícias e atualizações da UTFPR no Twitter.', link: 'https://twitter.com/UTFPR_' },
        { title: 'Facebook', content: 'Curta a página da UTFPR no Facebook para interagir e receber atualizações.', link: 'https://www.facebook.com/UTFPR' },
        { title: 'YouTube', content: 'Assista vídeos educativos e institucionais no canal oficial da UTFPR no YouTube.', link: 'https://www.youtube.com/canaldaUTFPR' },
        { title: 'Flickr', content: 'Explore galerias de fotos da UTFPR no Flickr para visualizar eventos e atividades.', link: 'https://www.flickr.com/photos/utfpr' },
        { title: 'Linkedin', content: 'Conecte-se com a UTFPR no Linkedin para networking e oportunidades profissionais.', link: 'https://www.linkedin.com/school/utfpr-oficial/' },
        { title: 'Docentes do DACOM-CP', content: 'Conheça os docentes do Departamento Acadêmico de Computação em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-bacharelado-em-engenharia-de-software/area-academica/departamento-academico-de-computacao-dacom' },
        { title: 'Área do Curso de Bacharelado em Engenharia de Software - CP', content: 'Acesse informações específicas sobre o curso de Bacharelado em Engenharia de Software em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-bacharelado-em-engenharia-de-software' },
        { title: 'Área do Curso de Engenharia de Computação - CP', content: 'Saiba mais sobre o curso de Engenharia de Computação oferecido em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-de-computacao' },
        { title: 'Área do Curso de Engenharia de Controle e Automação - CP', content: 'Explore informações específicas sobre o curso de Engenharia de Controle e Automação em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-de-controle-e-automacao' },
        { title: 'Área do Curso de Engenharia Elétrica - CP', content: 'Acesse informações detalhadas sobre o curso de Engenharia Elétrica em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/graduacao/bacharelado/engenharia-eletrica' },
        { title: 'Área do Curso de Engenharia Mecânica - CP', content: 'Saiba mais sobre o curso de Engenharia Mecânica oferecido em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-engenharia-mecanica' },
        { title: 'Área do Curso de Licenciatura em Matemática', content: 'Acesse informações específicas sobre o curso de Licenciatura em Matemática em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-licenciatura-em-matematica' },
        { title: 'Área do Curso de Tecnologia em Análise e Desenvolvimento de Sistemas', content: 'Saiba mais sobre o curso de Tecnologia em Análise e Desenvolvimento de Sistemas em Cornélio Procópio.', link: 'https://portal.utfpr.edu.br/cursos/coordenacoes/graduacao/cornelio-procopio/cp-tecnologia-em-analise-e-desenvolvimento-de-sistema' },
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
