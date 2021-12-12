import "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCP1AMPBKGRXP0ORCCxWxXSmPY90stlui8",
  authDomain: "order-react-project.firebaseapp.com",
  projectId: "order-react-project",
  storageBucket: "order-react-project.appspot.com",
  messagingSenderId: "438461731960",
  appId: "1:438461731960:web:6a74a7ddafe10c3fb8c98d",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
