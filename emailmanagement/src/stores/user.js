import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('user', () => {
  const user = ref(null)
  function windows() {
    user.value = 'windows'
  }

  return { user, windows }
})
