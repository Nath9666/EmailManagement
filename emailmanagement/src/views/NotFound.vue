<template>
    <div class="not-found">
        <div class = "txt">
            <h1>404</h1>
            <p>Oups! Vous avez envoyé un mail à nulle part, <br> même le Père Noël ne peut le trouver !</p>
        </div>
        <img src="@/assets/lostemail.png" alt="Lost Email" class="lost-email-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    mounted() {
      // Masquer le header en utilisant JavaScript
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'none';
      }
    },
    beforeUnmount() {
      // Réafficher le header lorsque le composant est démonté
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'block';
      }
    }
  }
  </script>
  
  <style>
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100vh;
    background-color: #cef1f9;
  }
  
  h1 {
    font-size: 36px; /* Ajuster la taille de la police pour le nombre "404" */
    text-align: center;
  }
  
  p {
    font-size: 24px; /* Ajuster la taille de la police pour le message */
    margin-top: 10px; /* Ajuster la marge supérieure pour l'espace avec "404" */
    text-align: center; /* Centrer le texte */
  }
  
  .lost-email-image {
    max-width: 300px; /* Ajuster la largeur maximale de l'image selon vos besoins */
    margin-top: 5px; /* Ajuster la marge supérieure pour l'espace avec le texte */
    margin-left: 50px;
  }
  </style>
  