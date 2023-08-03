import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.500)'
    },
    containerModal: {
        backgroundColor: '#f2f6fc',
        width: '80%',
        borderRadius: 5,
        height: 150,
        alignItems: "center", 
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        color: '#000',
        fontSize: 18,
        fontWeight: "bold",
    },
    containerBotao: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 20,
    },
    botao: {
        backgroundColor: '#011C40',
        width: '40%',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    }
});