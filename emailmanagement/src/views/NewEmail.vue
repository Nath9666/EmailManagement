<template>
  <div class="emails">
    <form @submit.prevent="sendEmail">
      <div>
        <label for="object">Objet de votre mail:</label>
        <input id="object" v-model="email.object" required />
      </div>
      <div>
        <label for="recipients">Le ou les destinataire(s):</label>
        <input id="recipients" v-model="email.EmailDestination" required />
      </div>
      <div>
        <label for="content">Le contenu de votre mail:</label>
        <textarea id="content" v-model="email.description" required></textarea>
      </div>
      <p>{{ error }}</p>
      <button type="submit">Envoyer votre mail</button>
      <p v-if="envoye">Votre email a été envoyer avec succes</p>
    </form>
  </div>
</template>

<script>
import firebase from '../firebase'
import { useStore } from '../stores/user'

const store = useStore()

export default {
  name: 'NewEmail',
  data() {
    return {
      email: {
        description: '',
        object: '',
        EmailDestination: ''
      },
      error: null,
      envoye: false
    }
  },
  methods: {
    sendEmail() {
      const userDestination = this.email.EmailDestination.split(',')
      userDestination.forEach((element, index) => {
        if (element == '') {
          userDestination.splice(index, 1)
        }
      })
      userDestination.forEach((element) => {
        this.verifyDestination(element)
      })
      if (this.error == null) {
        this.email.EmailDestination = userDestination
        firebase.addEmail(this.email, store.user)
        this.envoye = true
        this.emptyFormulaire()
      }
    },
    verifyDestination(email) {
      const user = firebase.users
      user.forEach((element) => {
        if (element.email == email) {
          this.error = null
        } else {
          this.error = 'Le destinataire ' + email + " n'existe pas"
        }
      })
    },
    emptyFormulaire() {
      this.email = {
        description: '',
        object: '',
        emaildestination: ''
      }
    }
  }
}
</script>

<style scoped>
.emails {
  background-color: #e7e7e74e;
  border-radius: 50px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  border: 10px solid #5200bd92;
  margin: 20px;
}

.emails input,
.emails textarea {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.emails button {
  background-color: #9b59b6; /* Purple */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.emails button:hover {
  background-color: #8e44ad; /* Darker purple */
}
</style>
