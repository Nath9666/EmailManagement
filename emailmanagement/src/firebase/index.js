// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'

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
const auth = getAuth(firebaseapp)

function signInWithGoogle() {
  signInWithRedirect(auth, new GoogleAuthProvider())
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in')
      return user
    } else {
      console.log('User is signed out')
    }
  })
}

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

async function refreshDataEmails(user) {
  const emails = []
  var queryEmails = await getDocs(collection(db, 'email'))
  queryEmails.forEach((doc) => {
    doc.data().EmailDestination.forEach((element) => {
      if (element === user.email) emails.push({ id: doc.id, ...doc.data() })
    })
  })
  return emails
}

async function addEmail(email, user) {
  const emaildestination = []

  email.EmailDestination.forEach((element) => {
    emaildestination.push(element)
  })

  await addDoc(collection(db, 'email'), {
    description: email.description,
    object: email.object,
    sender: user.email,
    EmailDestination: emaildestination,
    sendTime: Date.now(),
    corbeille: false
  })
}

async function deleteEmail(id) {
  await deleteDoc(doc(db, 'email', id))
}

async function moveEmail(id) {
  await updateDoc(doc(db, 'email', id), {
    corbeille: true
  })
}

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
    name: user.name,
    firstname: null,
    lastname: null,
    age: null,
    sexe: null,
    adress: null,
    city: null,
    country: null,
    about: null
  })
}

async function updateUser(id, user) {
  console.log(user)
  console.log(id)
  await updateDoc(doc(db, 'user', id), {
    email: user.email,
    password: user.password,
    name: user.name,
    firstname: user.firstname,
    lastname: user.lastname,
    age: user.age,
    sexe: user.sexe,
    adress: user.adress,
    city: user.city,
    country: user.country,
    about: user.about
  })
}

async function deleteUser(id) {
  await deleteDoc(doc(db, 'user', id))
}

async function existUser(email) {
  var queryUsers = await getDocs(collection(db, 'user'))
  queryUsers.forEach((doc) => {
    if (doc.data().email === email) {
      return true
    }
  })
  return false
}

export default {
  firebaseapp,
  db,
  notes,
  refreshDataEmails,
  users,
  addNote,
  addUser,
  deleteUser,
  existUser,
  deleteEmail,
  moveEmail,
  addEmail,
  updateUser,
  signInWithGoogle
}
