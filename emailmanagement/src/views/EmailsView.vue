<script>
import firebase from '../firebase'
import { RouterLink } from 'vue-router'
import { useStore } from '../stores/user'

const store = useStore()

export default {
  name: 'EmailsView',
  components: {},
  data() {
    return {
      emails: [],
      notesLoaded: false,
      showContent: null
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleString() // Convert to local date and time
    },
    async moveCordbeille(id) {
      firebase.moveEmail(id)
      this.emails.filter((email) => email.id == id)[0].corbeille = true
      this.emails = await firebase.refreshDataEmails(store.user)
    }
  },
  async created() {
    this.emails = await firebase.refreshDataEmails(store.user)
    this.notesLoaded = true
  }
}
</script>

todo : creata form to create a new email (in a other page)

<template>
  <div class="emails">
    <h1>This is all the mails there are in the Database</h1>
    <p>All the mails</p>
    <RouterLink to="/emails/new">New email</RouterLink>
    <div v-for="note in emails" :key="note.id">
      <h2>{{ note.object }}</h2>
      <div v-if="showContent">
        <p>Envoyé par: {{ note.sender }}</p>
        <p>{{ note.corbeille ? 'Dans la corbeille' : 'Dans la boite de reception' }}</p>
        <span
          >A :
          <p v-for="Destination in note.EmailDestination" :key="Destination">
            {{ Destination }}
          </p></span
        >
        <p>Le {{ formatDate(note.sendTime) }}</p>
        <p>{{ note.description }}</p>
      </div>
      <button @click="showContent = !showContent">Show Content</button>
      <button @click="moveCordbeille(note.id)">Delete</button>
    </div>
    <p v-if="!notesLoaded">Chargement des emails...</p>
    <p v-else-if="emails.length === 0">Il n'y a pas d'emails.</p>
  </div>
</template>

<style>
button {
  background-color: #e7e7e7;
  /* coin arrondi */
  border-radius: 50px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #ddd;
  color: black;
}

@media (min-width: 1024px) {
  .emails {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
