<template>
  <div>
    <div>
      <div fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <div fluid class="d-flex align-items-center">
          <div>
            <div lg="7" md="10">
              <h1 class="display-2 text-white">Hello {{ user.name }}</h1>
              <p class="text-white mt-0 mb-5">
                Ceci est votre page de profil. Vous pouvez voir et modifié les quelques informations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div fluid class="mt--6">
      <div>
        <div xl="8" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </div>
      </div>
    </div>
    <div>
      <p>Zone dangereuse</p>
      <button @click="this.logOut()">Log out</button>
      <button @click="this.deleteMyCount()">Delete My count</button>
    </div>
  </div>
</template>
<script>
import EditProfileForm from './UserProfile/EditProfileForm.vue'
import firebase from '../../firebase'

import { useStore } from '../../stores/user'

const store = useStore()

export default {
  components: {
    EditProfileForm
  },
  data() {
    return {
      user: store.user
    }
  },
  methods: {
    logOut() {
      store.user = null
      this.$router.push('/home')
    },
    deleteMyCount() {
      firebase.deleteUser(store.user.id)
      store.user = null
      this.$router.push('/home')
    }
  }
}
</script>
<style>
button {
  background-color: #67337c; /* Purple */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 1px;
}

button:hover {
  background-color: #8e44ad; /* Darker purple */
}
</style>
