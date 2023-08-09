import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
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
import ModalLogout from "../../components/ModalLogout";

export default function Task({ route }) {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState("");

  const [visibleModalLogout, setVisibleModalLogout] = useState(false);

  const inputRef = useRef(null);

  const user = route.params?.user;

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

    if (key !== "") {
      firebase
        .database()
        .ref("tarefas")
        .child(user)
        .child(key)
        .update({
          nome: newTask,
        })
        .then(() => {
          const taskIndex = tasks.findIndex((item) => item.key === key);
          let taskClone = tasks;

          taskClone[taskIndex].nome = newTask;
          setTasks([...taskClone]);
        });

      setNewTask("");
      setKey("");
      Keyboard.dismiss();
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

  function handleDelete(key) {
    firebase
      .database()
      .ref("tarefas")
      .child(user)
      .child(key)
      .remove()
      .then(() => {
        const findTasks = tasks.filter((item) => item.key !== key);
        setTasks(findTasks);
      });
  }

  function handleEdit(data) {
    setKey(data.key);
    setNewTask(data.nome);
    inputRef.current.focus();
  }

  function handleLogout() {
    setVisibleModalLogout(true);
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
          ref={inputRef}
          cursorColor="#404040"
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Feather name="plus-circle" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList
            data={item}
            handleDelete={() => handleDelete(item.key)}
            handleEdit={() => handleEdit(item)}
          />
        )}
        user={user}
      />

      <ModalLogout
        visible={visibleModalLogout}
        visibleModalFalse={() => setVisibleModalLogout(false)}
      />
    </View>
  );
}
