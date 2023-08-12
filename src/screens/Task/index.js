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
import firebase from "../../services/firebaseConnection";
import TaskList from "../../components/TaskList";
import Logo from "../../components/Logo";

export default function Task({ route }) {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState("");
  const [alertEdit, setAlertEdit] = useState(false);

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
      setAlertEdit(false);
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
    setAlertEdit(true);
  }

  function handleCancelEdit() {
    setAlertEdit(false);
    setNewTask("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Logo />

      {alertEdit == false ? (
        <Text style={styles.totalTarefas}>
          Total de tarefas: {tasks.length}
        </Text>
      ) : (
        <View style={styles.alertEdit}>
          <TouchableOpacity onPress={handleCancelEdit}>
            <Feather name="x-circle" size={20} color="#F00" />
          </TouchableOpacity>

          <Text style={styles.txtAlertEdit}>
            Você está editando uma tarefa.
          </Text>
        </View>
      )}

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
    </View>
  );
}
