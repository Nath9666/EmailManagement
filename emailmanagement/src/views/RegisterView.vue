<template>
  <div>
    <!-- Header -->
    <div>
      <div style="max-width: 1200px; margin: 0 auto">
        <div style="text-align: center; margin-bottom: 7rem">
          <div style="max-width: 500px; margin: 0 auto">
            <h1 style="color: #fff">Create an account</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div style="margin-top: -8rem; padding-bottom: 5rem">
      <!-- Table -->
      <div style="display: flex; justify-content: center">
        <div style="max-width: 600px">
          <div style="color: #fff">
            <div style="background-color: transparent">
              <div
                style="color: #8898aa; text-align: center; margin-top: 1rem; margin-bottom: 1rem"
              >
                <small>Sign up with</small>
              </div>
              <div style="text-align: center">
                <div style="display: flex; justify-content: center; gap: 10px">
                  <a
                    @click="singInWithGithub()"
                    href="#"
                    style="
                      background-color: #ffffff;
                      border: 1px solid #000000;
                      display: inline-block;
                      padding: 10px;
                      border-radius: 5px;
                      color: #000000;
                      text-decoration: none;
                    "
                  >
                    <span style="display: block; margin-bottom: 5px"
                      ><img src="@\assets\common\github.svg" style="max-width: 30px; height: auto"
                    /></span>
                    <span>Github</span>
                  </a>
                  <a
                    @click="singInWithGoogle()"
                    href="#"
                    style="
                      background-color: #b50000;
                      border-radius: 15px;
                      display: inline-block;
                      padding: 10px;
                      color: #fff;
                      text-decoration: none;
                    "
                  >
                    <span style="display: block; margin-bottom: 5px"
                      ><img src="@\assets\common\google.svg" style="max-width: 30px; height: auto"
                    /></span>
                    <span>Google</span>
                  </a>
                  <a
                    @click="singInWithWindow()"
                    href="#"
                    style="
                      background: linear-gradient(#ffffff, #000000);
                      display: inline-block;
                      padding: 10px;
                      border-radius: 5px;
                      color: #ffffff;
                      text-decoration: none;
                    "
                  >
                    <span style="display: block; margin-bottom: 5px"
                      ><img src="@\assets\common\windows.svg" style="max-width: 30px; height: auto"
                    /></span>
                    <span>Windows</span>
                  </a>
                </div>
              </div>
            </div>
            <div style="padding: 5rem 2rem 5rem">
              <!-- Reste du code inchangé -->
              <div style="margin-top: -5rem">
                <div style="display: flex; justify-content: center">
                  <div style="max-width: 600px">
                    <div style="color: #5e72e4; text-align: center; margin-top: 2rem">
                      <small>Or sign up with credentials</small>
                    </div>
                    <div ref="divValidator">
                      <div>
                        <input
                          alternative
                          style="width: 100%; margin-bottom: 15px; font-size: medium"
                          placeholder="Name"
                          name="Name"
                          :rules="{ required: true }"
                          v-model="model.name"
                        />

                        <input
                          alternative
                          style="width: 100%; margin-bottom: 15px; font-size: medium"
                          placeholder="Email"
                          name="Email"
                          :rules="{ required: true, email: true }"
                          v-model="model.email"
                        />

                        <input
                          alternative
                          style="width: 100%; margin-bottom: 15px; font-size: medium"
                          placeholder="Password"
                          type="password"
                          name="Password"
                          :rules="{ required: true, min: 6 }"
                          v-model="model.password"
                        />
                        <input
                          alternative
                          style="width: 100%; margin-bottom: 15px; font-size: medium"
                          placeholder="Repeat password"
                          type="password"
                          name="repeatPassword"
                          :rules="{ required: true, min: 6 }"
                          v-model="model.repeatPassword"
                        />
                        <div style="color: #8898aa; font-italic; margin-bottom: 1rem;">
                          <small
                            >Password strength:
                            <span style="color: #2dce89; font-weight: 700">{{
                              solidityPassword(model.password).name
                            }}</span></small
                          >
                        </div>
                        <div style="margin: 4rem 0">
                          <div style="display: flex; align-items: center">
                            <input
                              type="checkbox"
                              :rules="{ required: { allowFalse: false } }"
                              name="Privacy"
                              Policy
                              @click="model.agree = !model.agree"
                            />
                            <span style="color: #8898aa; margin-left: 1rem"
                              >I agree with the
                              <a href="#!" style="color: #5e72e4; text-decoration: underline"
                                >Privacy Policy</a
                              ></span
                            >
                          </div>
                        </div>
                        <div style="text-align: center">
                          <p v-if="error" style="color: red">
                            {{ error }}
                          </p>
                          <button
                            @click="onSubmit"
                            variant="primary"
                            style="
                              background-color: #5e72e4;
                              color: #fff;
                              padding: 10px 20px;
                              border: none;
                              border-radius: 5px;
                              cursor: pointer;
                              font-size: 16px;
                              transition: background-color 0.3s ease;
                            "
                          >
                            Create account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase'

export default {
  name: 'registerView',
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        agree: false
      },
      error: ''
    }
  },
  methods: {
    onSubmit() {
      // verifie que toutes les variables du formulaires sont pas vite et que les repeat password correspond bien au password
      if (
        this.model.name === '' ||
        this.model.email === '' ||
        this.model.password === '' ||
        this.model.repeatPassword === '' ||
        this.model.agree === false
      ) {
        this.error = 'Please fill in all the fields'
        return {
          error: 'Please fill in all the fields'
        }
      } else if (this.model.password !== this.model.repeatPassword) {
        this.error = 'Passwords do not match'
        return {
          error: 'Passwords do not match'
        }
      } else if (firebase.existUser()) {
        this.error = 'User already exist, please change your email'
        return
      } else {
        // si tout est bon, on envoie les données au serveur et on renvoie à la page de login
        firebase.addUser({
          name: this.model.name,
          email: this.model.email,
          password: this.model.password
        })
        this.$router.push('./login')
      }
    },
    solidityPassword(password) {
      // check the solidity of the password
      let strength = 0

      // check if password length is greater than 8
      if (password.length > 8) strength++

      // check if password contains both lower and uppercase letters
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++

      // check if password contains numbers
      if (/[0-9]/.test(password)) strength++

      // check if password contains special characters
      if (/[^A-Za-z0-9]/.test(password)) strength++

      switch (strength) {
        case 0:
          return { name: 'Very weak', color: '#f536' }
        case 1:
          return { name: 'Weak', color: '#f5365c' }
        case 2:
          return { name: 'Medium', color: '#FFFF00' }
        case 3:
          return { name: 'Strong', color: '#2dce89' }
        case 4:
          return { name: 'Very strong', color: '#2dce70' }
      }
    },
    singInWithGoogle() {
      // sign in with google
      alert('sign in with google')
      const user = firebase.signInWithGoogle()
      console.log(user)
    },
    singInWithWindow() {
      // sign in with windows
      alert('sign in with Window')
    },
    singInWithGithub() {
      // sign in with Github
      alert('sign in with Github')
    }
  }
}
</script>

<style scoped>
/* Centrer les logos sur une seule ligne */
div.btn-wrapper {
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
  font-size: 10px;
}
</style>
