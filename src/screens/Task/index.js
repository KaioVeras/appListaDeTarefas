import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";
import firebase from "../../services/firebaseConnection";


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
};
