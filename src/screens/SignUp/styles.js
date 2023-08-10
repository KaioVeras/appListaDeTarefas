import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#f2f6fc",
    },
    titleCreate: {
      fontSize: 32,
      color: "#000",
      fontWeight: "bold",
      marginLeft: 10,
      marginBottom: 2,
      marginTop: 10,
    },
    textCreate: {
      marginLeft: 10,
      color: "#011C40",
      fontWeight: "bold",
      fontSize: 15,
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#404040",
      marginTop: 30,
      width: "100%",
      fontSize: 17,
      paddingLeft: 10,
      borderRadius: 10,
    },
    containerInputs: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      position: "relative",
      paddingHorizontal: 10,
    },
    iconEmail: {
      position: "absolute",
      paddingTop: 30,
      paddingHorizontal: 20,
    },
    botao: {
      width: "95%",
      backgroundColor: "#011C40",
      marginTop: 30,
      height: 50,
      justifyContent: "center",
      borderRadius: 30,
    },
    btnTexto: {
      color: "#fff",
      textAlign: "center",
      fontSize: 20,
    },
    botaoSignUp: {
      marginTop: 10,
      fontSize: 16,
      color: "#000",
    },
  });