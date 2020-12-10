import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCfF2-8D3LpzJ725tyeDQejWEb6ouKUHgk",
  authDomain: "book-santa-c3455.firebaseapp.com",
  databaseURL: "https://book-santa-c3455.firebaseio.com",
  projectId: "book-santa-c3455",
  storageBucket: "book-santa-c3455.appspot.com",
  messagingSenderId: "54997547754",
  appId: "1:54997547754:web:e9fae4aae576889c5d7593",
  measurementId: "G-YRYRKWTK99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase.firestore();
