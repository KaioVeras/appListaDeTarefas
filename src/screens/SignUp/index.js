import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";
import Logo from "../../components/Logo";
import firebase from "../../services/firebaseConnection";

export default function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureText, setSecureText] = useState(true);

  async function handleRegistrar() {
    //Cadastro do usuario
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert("Cadastro realizado com sucesso, seja bem vindo!");
        navigation.navigate("Task");
      })
      .catch((error) => {
        alert("Ops, algo de errado");
      });
  }

  function logar() {
    navigation.navigate("SignIn");
    setEmail("");
    setPassword("");
  }

  function visiblePassword() {
    setSecureText(!secureText);
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View>
        <Text style={styles.titleCreate}>Criar uma nova conta</Text>
        <Text style={styles.textCreate}>
          Crie uma conta para começar a organizar suas tarefas de maneira
          eficiente. Com o TaskMinder, você terá o controle total das suas
          atividades diárias.
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
        <TouchableOpacity style={styles.botao} onPress={handleRegistrar}>
          <Text style={styles.btnTexto}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logar}>
          <Text style={styles.botaoSignUp}>
            Já possui uma conta?{" "}
            <Text style={{ color: "#011C40", fontWeight: "bold" }}>
              Faça login aqui.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
