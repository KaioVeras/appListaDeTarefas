import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { styles } from "./styles";

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

