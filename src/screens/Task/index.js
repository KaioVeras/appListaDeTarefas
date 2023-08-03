import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from "react-native";
import { styles } from "./styles";

import Feather from "react-native-vector-icons/Feather";
import MaterilIcon from "react-native-vector-icons/MaterialIcons";
import firebase from "../../services/firebaseConnection";
import TaskList from "../../components/TaskList";
import Logo from "../../components/Logo";
import MyModal from "../../components/MyModal";

export default function Task({ route }) {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const user = route.params?.user;

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    function getUser() {
      if (!user) {
        return;
      }

      firebase
        .database()
        .ref("tarefas")
        .child(user)
        .once("value", (snapshot) => {
          setTasks([]);
          snapshot?.forEach((childItem) => {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome,
            };

            setTasks((newTask) => [...newTask, data]);
          });
        });
    }

    getUser();
  }, [user]);

  function handleAdd() {
    if (newTask === "") {
      return;
    }

    let tarefas = firebase.database().ref("tarefas").child(user);
    let chave = tarefas.push().key;

    tarefas
      .child(chave)
      .set({
        nome: newTask,
      })
      .then(() => {
        const data = {
          key: chave,
          nome: newTask,
        };

        setTasks((newTask) => [...newTask, data]);
      });

    Keyboard.dismiss();
    setNewTask("");
  }

  async function handleLogout() {
    setVisibleModal(true);
    firebase.auth().signOut();
    //TODO:
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />

        <TouchableOpacity onPress={handleLogout}>
          <MaterilIcon
            name="exit-to-app"
            size={30}
            color="#000"
            style={styles.iconLogout}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.totalTarefas}>Total de tarefas: {tasks.length}</Text>
      <View style={styles.containerTask}>
        <TextInput
          placeholder="O que vai fazer hoje?"
          style={styles.input}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Feather name="plus-circle" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <MyModal
        visible={visibleModal}
        visibleModalFalse={() => setVisibleModal(false)}
      />
    </View>
  );
}
