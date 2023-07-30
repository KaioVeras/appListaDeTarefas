import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3n8YzWk1T6Nx1NGMhZKKqePci9fig7x8",
  authDomain: "apptarefas-99da7.firebaseapp.com",
  projectId: "apptarefas-99da7",
  storageBucket: "apptarefas-99da7.appspot.com",
  messagingSenderId: "772782492636",
  appId: "1:772782492636:web:7415e843cd48ea0bf01d19",
  measurementId: "G-LLYN44JJXH",
};

if(!firebase.apps.length){
    //Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;