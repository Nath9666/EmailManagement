<script>
import notes from '..firebase'

export default {
  name: 'EmailsView',
  components: {}
}
</script>

<template>
  <div class="emails">
    <h1>This is all the mails there are in the Database</h1>
    <p>All the mails</p>
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
