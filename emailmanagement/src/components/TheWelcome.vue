<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Subject</template>

    <a href="./M1_DT_IRV_Projet_ST2AWD.pdf" target="_blank" rel="noopener">Subject of the project</a>
    provides you with all information you need to understand this project.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Functionalities</template>
    <ul>
      <li>Microsofth AOuth and Google AOuth to log in. </li>
      <li>Adding/Deleting emails to/from the current list of emails. </li>
      <li>Read the detailed content of the mail.</li>
      <li>Specify the number of emails to display.</li>
      <li>Search for emails.</li>
      <li>Microsofth AOuth and Google AOuth to log out.</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Technologies</template>

    Technologies we used in this project:
    <ul>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">Vuejs</a></li>
      <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a></li>
      <li><a href="https://firebase.google.com/" target="_blank" rel="noopener">FireBase</a></li>
      <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener">Nodejs</a></li>
    </ul>
  </WelcomeItem>
</template>
