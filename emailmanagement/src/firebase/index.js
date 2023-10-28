// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgonVV9hQsmYFljcv3fZ_jwRuf0kHJZBw',
  authDomain: 'emailo-17239.firebaseapp.com',
  projectId: 'emailo-17239',
  storageBucket: 'emailo-17239.appspot.com',
  messagingSenderId: '594558891688',
  appId: '1:594558891688:web:7a56938454308ddbe6349d'
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseapp)

console.log(db)

export default firebaseapp
