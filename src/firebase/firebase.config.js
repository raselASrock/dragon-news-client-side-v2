// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1s5EpfrEPT2lYv0J7jbH1cZVr6X4hD0",
  authDomain: "dragon-news-8a42e.firebaseapp.com",
  projectId: "dragon-news-8a42e",
  storageBucket: "dragon-news-8a42e.appspot.com",
  messagingSenderId: "237441374129",
  appId: "1:237441374129:web:cea7919c5247ea83e38f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;