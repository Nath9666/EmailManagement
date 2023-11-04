<template>
  <div class="not-found">
    <div class="txt">
      <h1>404</h1>
      <p>
        Oups! Vous avez envoyé un mail à nulle part, <br />
        même le Père Noël ne peut le trouver !
      </p>
    </div>
    <img src="@/assets/lostemail.png" alt="Lost Email" class="lost-email-image" />
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  beforeUnmount() {
    const header = document.querySelector('header')
    if (header) {
      header.style.display = 'flex'
    }
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

h1 {
  font-size: 36px;
  text-align: center;
}

p {
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  white-space: nowrap;
}

.lost-email-image {
  max-width: 300px;
  margin-top: 5px;
  margin-left: 50px;
  filter: hue-rotate(50deg);
}
</style>
