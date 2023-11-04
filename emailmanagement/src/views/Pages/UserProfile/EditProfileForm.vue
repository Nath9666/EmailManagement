<template>
  <card>
    <div align-v="center">
      <div cols="8">
        <h3 class="mb-0">Edit profile</h3>
      </div>
    </div>

    <form @submit.prevent="updateProfile" class="profile-form">
      <h6 class="heading-small text-muted mb-4">User information</h6>

      <div class="pl-lg-4">
        <div>
          <div lg="6">
            <input
              class="styled-input"
              type="text"
              label="Username"
              required
              placeholder="Username"
              v-model="user.name"
            />
          </div>
          <div lg="6">
            <input
              class="styled-input"
              type="text"
              readonly
              label="Email address"
              placeholder="nath@email.com"
              v-model="user.email"
            />
          </div>
        </div>
        <div>
          <div lg="6">
            <input
              class="styled-input"
              type="text"
              label="First Name"
              placeholder="First Name"
              v-model="user.firstname"
            />
          </div>
          <div lg="6">
            <input
              class="styled-input"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastname"
            />
          </div>
        </div>
      </div>
      <hr class="my-4" />

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Contact information</h6>

      <div class="pl-lg-4">
        <div>
          <div>
            <label for="address">Address</label>
            <input
              class="styled-input"
              id="address"
              type="text"
              placeholder="Home Address"
              v-model="user.adress"
            />
          </div>
        </div>
        <div>
          <div>
            <label for="city">City</label>
            <input
              class="styled-input"
              id="city"
              type="text"
              placeholder="City"
              v-model="user.city"
            />
          </div>
          <div>
            <label for="country">Country</label>
            <input
              class="styled-input"
              id="country"
              type="text"
              placeholder="Country"
              v-model="user.country"
            />
          </div>
        </div>
      </div>

      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">About me</h6>
      <div class="pl-lg-4">
        <div
          label="About Me"
          label-class="form-control-label"
          class="mb-0"
          label-for="about-form-textaria"
        >
          <!--  <label class="form-control-label">About Me</label> -->
          <textarea
            rows="4"
            id="about-form-textaria"
            placeholder="A few words about you ..."
            class="non-resizable-textarea"
            v-model="user.about"
          ></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </card>
</template>
<script>
import { useStore } from '../../../stores/user'
import firebase from '../../../firebase'

const store = useStore()

export default {
  data() {
    return {
      user: store.user
    }
  },
  methods: {
    updateProfile() {
      for (let key in this.user) {
        if (this.user[key] == '') this.user[key] = '-'
      }
      firebase.updateUser(store.user.id, this.user)
    }
  }
}
</script>
<style scoped>
.profile-form {
  /* Light purple background */
  padding: 20px;
  border-radius: 10px;
}

.styled-input {
  border: 2px solid #9c27b0; /* Purple border */
  border-radius: 10px; /* Rounded corners */
  padding: 10px;
  width: 100%;
  margin: 1%;
  box-sizing: border-box;
}

input:read-only {
  background-color: #e0e0e0;
}

.styled-input:focus {
  outline: none;
  border-color: #6a1b9a; /* Darker purple border when focused */
}

.non-resizable-textarea {
  resize: none;
  border: 2px solid #9c27b0; /* Purple border */
  border-radius: 10px; /* Rounded corners */
  padding: 10px;
  width: 100%;
  margin: 1%;
}

button {
  background-color: #9b59b6; /* Purple */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #8e44ad; /* Darker purple */
}
</style>
