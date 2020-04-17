import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyCzgkYJRW-BDSwm5OefIJJgCEmBTzfLwsk",
  authDomain: "wily-1c5f8.firebaseapp.com",
  databaseURL: "https://wily-1c5f8.firebaseio.com",
  projectId: "wily-1c5f8",
  storageBucket: "wily-1c5f8.appspot.com",
  messagingSenderId: "110987969704",
  appId: "1:110987969704:web:0f14d21aeaaa1e76cf6e9d",
  measurementId: "G-D15S6E0NCZ"
};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()