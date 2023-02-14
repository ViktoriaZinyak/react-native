import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY9Ngkt7tNbZHe6_k8qOD1StS00mI-w00",
  authDomain: "reactn-e1368.firebaseapp.com",
  projectId: "reactn-e1368",
  storageBucket: "reactn-e1368.appspot.com",
  messagingSenderId: "481998488523",
  appId: "1:481998488523:web:4f7c5c05ec290ae93aec4e",
  databaseURL:
    "https://reactn-e1368-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Initialize Firebase

// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAK3PJZ_JWi4_OZ6CJsoJAg4mmM59CUO4c",
//   authDomain: "myproj-351bf.firebaseapp.com",
//   projectId: "myproj-351bf",
//   storageBucket: "myproj-351bf.appspot.com",
//   messagingSenderId: "105506408135",
//   appId: "1:105506408135:web:6e9b5e03bf553ecd37e0e2",
// };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth };
