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
      notesLoaded: false
    }
  },
  async created() {
    this.emails = await firebase.refreshDataEmails(store.user)
    this.notesLoaded = true
  }
}
</script>

// todo : add a button to delete an email
// todo : add a button to show the content of the email
// todo : creata form to create a new email (in a other page)

<template>
  <div class="emails">
    <h1>This is all the mails there are in the Database</h1>
    <p>All the mails</p>
    <RouterLink to="/newEmail">New email</RouterLink>
    <div v-if="notesLoaded" v-for="note in emails" :key="note.id">
      <h3>{{ note.object }}</h3>
      <p>{{ note.description }}</p>
    </div>
    <p v-if="!notesLoaded">Chargement des emails...</p>
    <p v-else-if="emails.length === 0">Il n'y a pas d'emails.</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .emails {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
