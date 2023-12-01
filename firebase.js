import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlKlFEi005P0SidKh8N0skO75dqpX-KF4",
  authDomain: "we-notifications.firebaseapp.com",
  projectId: "we-notifications",
  storageBucket: "we-notifications.appspot.com",
  messagingSenderId: "7833676408",
  appId: "1:7833676408:web:761bf6468e19880ca6db8d",
  measurementId: "G-VL4WGMK592",
};
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
