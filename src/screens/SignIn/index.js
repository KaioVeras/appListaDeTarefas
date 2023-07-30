import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";
import firebase from "../../services/firebaseConnection";
import Logo from "../../components/Logo";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureText, setSecureText] = useState(true);

  async function handleAcessar() {
    //TODO: Acessar página taks através de login já existente
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Bem vindo de volta");
        navigation.navigate("Task");
      })
      .catch((error) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email"
        ) {
          alert("Ops, email invalido");
        }
        if (error.code === "auth/wrong-password") {
          alert("Ops, senha inválida");
        } else {
          console.log(`Erro desconhecido, ${error.code}`);
        }
        return;
      });
  }

  function criarConta() {
    navigation.navigate("SignUp");
    setEmail("");
    setPassword("");
  }

  function visiblePassword() {
    setSecureText(!secureText);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <View>
        <Text style={styles.titleWelcome}>Bem vindo de volta</Text>
        <Text style={styles.textWelcome}>
          Faça login ou crie uma conta para usar o TaskMinder e organizar suas
          tarefas de forma eficiente. Vamos começar!
        </Text>
      </View>

      <View style={styles.containerInputs}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          cursorColor="#404040"
        />
        <Feather
          name="mail"
          size={20}
          color="#404040"
          style={styles.iconEmail}
        />
      </View>
      <View style={styles.containerInputs}>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={secureText}
          cursorColor="#404040"
        />
        {password.length > "" ? (
          <TouchableOpacity style={styles.iconEmail} onPress={visiblePassword}>
            <Feather
              name={secureText == true ? "eye-off" : "eye"}
              size={20}
              color="#404040"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconEmail}>
            <Feather name="lock" size={20} color="#404040" />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.botao} onPress={handleAcessar}>
          <Text style={styles.btnTexto}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={criarConta}>
          <Text style={styles.botaoSignUp}>
            Ainda não tem uma conta?{" "}
            <Text style={{ color: "#011C40", fontWeight: "bold" }}>
              Crie uma agora!
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
