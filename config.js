import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyABI8ckcz9n7tzwkSIpGGI_Qm9KReiMQ7k",
  authDomain: "project-71-2c5a2.firebaseapp.com",
  projectId: "project-71-2c5a2",
  storageBucket: "project-71-2c5a2.appspot.com",
  messagingSenderId: "604316101970",
  appId: "1:604316101970:web:170dc893c0b61c672dde8b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

