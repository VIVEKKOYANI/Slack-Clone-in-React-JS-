import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVDlN3haHQLuylwN1dxwcmZMpCMnZQfvQ",
    authDomain: "slack-clone-4d47b.firebaseapp.com",
    databaseURL: "https://slack-clone-4d47b.firebaseio.com",
    projectId: "slack-clone-4d47b",
    storageBucket: "slack-clone-4d47b.appspot.com",
    messagingSenderId: "427271428337",
    appId: "1:427271428337:web:3ff0d14b9e10ea2ac8b150",
    measurementId: "G-9MJNK8TZ4R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
  