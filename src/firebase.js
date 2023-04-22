import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBTDqRiWzA3qCcadB7hPk89lYgZXcOBJjo",
  authDomain: "djauth-dev.firebaseapp.com",
  projectId: "djauth-dev",
  storageBucket: "djauth-dev.appspot.com",
  messagingSenderId: "1073470494495",
  appId: "1:1073470494495:web:a0954f0a6dbec72af4422a",
});
export const auth = app.auth();
export default app;
