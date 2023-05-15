import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB2cU5pwA5BVB7OASU1amg7joiiHQUmX-4",
  authDomain: "clone-9a9d0.firebaseapp.com",
  databaseURL: "https://clone-9a9d0.firebaseio.com",
  projectId: "clone-9a9d0",
  storageBucket: "clone-9a9d0.appspot.com",
  messagingSenderId: "290276326238",
  appId: "1:290276326238:web:4865f803275d348db6edcf",
  measurementId: "G-717YZMDPHF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
