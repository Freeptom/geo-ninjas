import firebase from "firebase";
import firestore from "firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsdnEBm0-2NzmFcghapakBVAzr6GwtjZY",
  authDomain: "udemy-geo-ninjas-ba4bb.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-ba4bb.firebaseio.com",
  projectId: "udemy-geo-ninjas-ba4bb",
  storageBucket: "udemy-geo-ninjas-ba4bb.appspot.com",
  messagingSenderId: "571976982606",
  appId: "1:571976982606:web:4ae66154b7705654"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
