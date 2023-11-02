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

// Pour recuperer les notes dans la base de donnees

let notes = []

async function refreshData() {
  const notes = []
  var queryNotes = await getDocs(collection(db, 'notes'))
  queryNotes.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() })
  })
  return notes
}

notes = refreshData()

async function addNote(note) {
  await addDoc(collection(db, 'notes'), { description: note })
  this.refreshData()
}

// Pour recuperer les emails dans la base de donnees

const emails = []

var queryEmails = await getDocs(collection(db, 'email'))

queryEmails.forEach((doc) => {
  emails.push({ id: doc.id, ...doc.data() })
})

// Pour recuperer les utilisateurs dans la base de donnees

const users = []

var queryUsers = await getDocs(collection(db, 'user'))

queryUsers.forEach((doc) => {
  users.push({ id: doc.id, ...doc.data() })
})

async function addUser(user) {
  await addDoc(collection(db, 'user'), {
    email: user.email,
    password: user.password,
    name: user.name
  })
}

export default { firebaseapp, db, notes, emails, users, addNote, addUser }
