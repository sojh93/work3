import firebase from "firebase/app";
// app 명시해줘야함.
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCqjqeI6lxjg0YQQGHse4wtkqpeq3t43pc",
  authDomain: "image-community-d6934.firebaseapp.com",
  projectId: "image-community-d6934",
  storageBucket: "image-community-d6934.appspot.com",
  messagingSenderId: "738893838546",
  appId: "1:738893838546:web:824c58e4004be6134d550b",
  measurementId: "G-5NDGPQ5NHL",
};

firebase.initializeApp(firebaseConfig);

export const apiKey = firebaseConfig.apiKey;
export const auth = firebase.auth();

