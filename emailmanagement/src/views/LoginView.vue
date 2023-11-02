<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div>
        <div class="header-body text-center mb-7">
          <div class="justify-content-center">
            <div xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">
                Use these awesome forms to login or create new account in your project for free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="mt--8 pb-5">
      <div class="justify-content-center">
        <div lg="5" md="7">
          <div no-body class="bg-secondary border-0 mb-0">
            <div class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="@\assets\common\github.svg" /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="@\assets\common\google.svg" /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="@\assets\common\windows.svg" /></span>
                  <span class="btn-inner--text">Windows</span>
                </a>
              </div>
            </div>
            <div class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <div ref="formValidator">
                <div role="form">
                  <input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="model.email"
                  />

                  <input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="model.password"
                  />
                  <p class="text-danger" v-if="error">{{ error }}</p>
                  <div class="text-center">
                    <button @click="onSubmit" type="primary" native-type="submit" class="my-4">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <div cols="6">
              <router-link to="/dashboard" class="text-light"
                ><small>Forgot password?</small></router-link
              >
            </div>
            <div cols="6" class="text-right">
              <router-link to="/register" class="text-light"
                ><small>Create new account</small></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'
import { useStore } from '../stores/user'

export default {
  data() {
    return {
      model: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    onSubmit() {
      const store = useStore()

      if (this.model.email == '' || this.model.password == '') {
        this.error = 'Please enter your email and password'
      } else {
        console.log('Form submitted.')
        firebase.users.forEach((user) => {
          if (user.email == this.model.email && user.password == this.model.password) {
            console.log('User found.')
            console.log(store)
            store.user = user
            console.log('User logged in.' + store.user)
            this.$router.push('./home')
          } else {
            this.error = 'Invalid email or password'
          }
        })
      }
    }
  }
}
</script>

<style scoped>
/* Centrer les logos sur une seule ligne */
.btn-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
}

/* Mettre l'email et le mot de passe en dessous de l'autre */
input {
  width: 100%;
  margin-bottom: 15px;
  font-size: medium;
}

input:focus {
  background-color: #5e72e44e;
  color: #fff;
}

/* Style pour le bouton de connexion */
button {
  background-color: #5e72e4; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  padding: 10px 20px; /* Espacement du texte par rapport aux bords */
  border: none; /* Supprimer la bordure */
  border-radius: 5px; /* Coins arrondis */
  cursor: pointer; /* Curseur pointer au survol */
  font-size: 16px; /* Taille du texte */
  transition: background-color 0.3s ease; /* Animation de transition */
}

button:hover {
  background-color: #3949ab; /* Couleur de fond au survol */
}

/* Style pour les liens "Forgot password?" et "Create new account" */
.mt-3 div {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

/* Responsive : Réduire la taille des logos pour les écrans plus petits */
@media (max-width: 768px) {
  .btn-wrapper {
    flex-direction: column;
    align-items: center;
  }

  /* Ajouter plus de styles de responsive si nécessaire */
}
</style>
