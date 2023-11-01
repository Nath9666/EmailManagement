<script>
import firebase from '../firebase'

export default {
  name: 'EmailsView',
  components: {},
  data() {
    return {
      notes: firebase.emails
    }
  }
}

console.log(firebase.emails)
</script>

<template>
  <div class="emails">
    <h1>This is all the mails there are in the Database</h1>
    <p>All the mails</p>
    <div v-for="note in notes" :key="note.id">
      <h3>{{ note.id }}</h3>
      <p>{{ note.description }}</p>
    </div>
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
