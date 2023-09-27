import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6TteN6k8dllt6tHB2yIEXu3cBuatP7qg",
  authDomain: "my-nextjs-project-a539d.firebaseapp.com",
  projectId: "my-nextjs-project-a539d",
  storageBucket: "my-nextjs-project-a539d.appspot.com",
  messagingSenderId: "558758732104",
  appId: "1:558758732104:web:1de267496f294f4dd9537d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);