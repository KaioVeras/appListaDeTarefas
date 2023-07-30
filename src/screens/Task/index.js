import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import firebase from "../../services/firebaseConnection";
import { useRoute } from "@react-navigation/native";

import Logo from "../../components/Logo";

export default function Task() {
  const route = useRoute();

  const [newTask, setNewTask] = useState("");

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.containerTask}>
        <TextInput
          placeholder="O que vai fazer hoje?"
          style={styles.input}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} >
          <Feather
            name="plus-circle"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f6fc",
  },
  containerTask: {
    flexDirection: "row",
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: "#404040",
    width: "85%",
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 10,
  },
  buttonAdd: {
    width: "15%",
    backgroundColor: "#011C40",
    borderRadius: 10,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
});
