import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDahbLkNw7ts-Rc1hEWzmmQD7wRKZF3cVM",
  authDomain: "backend-project-e7868.firebaseapp.com",
  databaseURL: "https://backend-project-e7868-default-rtdb.firebaseio.com",
  projectId: "backend-project-e7868",
  storageBucket: "backend-project-e7868.appspot.com",
  messagingSenderId: "42924855209",
  appId: "1:42924855209:web:e214a64d448f4832e5feb8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
