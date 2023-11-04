<template>
  <div class="about">
    <h1 class="title">Here comes the content of our the AboutPage</h1>
    <p>So the group is composed of:</p>
    <ul>
      <li v-for="name in GroupPeopleName" :key="name">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  beforeUnmount() {
    // Réafficher le header lorsque le composant est démonté
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "flex";
    }
  },
  components: {},
  props: { user: Object },
  data() {
    return {
      GroupPeopleName: ["Nathan MOREL", "Laura SADAA", "Miggao GONG"],
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.title {
  text-align: center;
  font-size: 29px;
  margin-bottom: 25px;
}
</style>
