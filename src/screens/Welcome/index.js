import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Logo from "../../components/Logo";

export default function Welcome() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <View>
        <Text style={styles.textRecepcao}>Seja bem vindo</Text>
        <Text style={styles.recepcaoTitle}>ao TaskMinder</Text>
      </View>

      <View style={styles.containerImgMenino}>
        <Image
          source={require("../../assets/images/menino.png")}
          style={styles.imgMenino}
        />

        <Text style={styles.sobre}>
          Nunca perca uma tarefa importante novamente! Com o TaskMinder, você
          pode criar listas personalizadas de tarefas, marcar suas realizações e
          aumentar sua produtividade.
        </Text>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.btnTexto}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
    padding: 10,
  },
  textRecepcao: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 2,
    marginTop: 10,
  },
  recepcaoTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#011C40",
  },
  containerImgMenino: {
    alignItems: "center",
    marginTop: 20,
  },
  imgMenino: {
    width: 350,
    height: 350,
  },
  sobre: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    marginTop: 25,
  },
  botao: {
    width: "95%",
    backgroundColor: "#011C40",
    marginTop: 50,
    height: 50,
    justifyContent: "center",
    borderRadius: 30,
  },
  btnTexto: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
