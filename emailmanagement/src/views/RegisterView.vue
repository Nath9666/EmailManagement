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
                    <form ref="formValidator">
                      <div role="form">
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
                          placeholder="password"
                          type="password"
                          name="Password"
                          :rules="{ required: true, min: 6 }"
                          v-model="model.password"
                        />
                        <input
                          alternative
                          style="width: 100%; margin-bottom: 15px; font-size: medium"
                          placeholder="repeat password"
                          type="password"
                          name="repeatPassword"
                          :rules="{ required: true, min: 6 }"
                          v-model="model.password"
                        />
                        <div style="color: #8898aa; font-italic; margin-bottom: 1rem;">
                          <small
                            >password strength:
                            <span style="color: #2dce89; font-weight: 700">strong</span></small
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
                          <button
                            type="submit"
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
                    </form>
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
export default {
  name: 'registerView',
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        agree: false
      }
    }
  },
  methods: {
    onSubmit() {
      alert('Form submitted!')
      // this will be called only after form is valid. You can do an api call here to register users
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
