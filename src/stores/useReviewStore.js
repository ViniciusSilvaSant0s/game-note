import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReviewStore = defineStore('reviews', () => {
  // State
  const allReviews = ref([])

  // Actions
  function addReview(newReview) {
    // Adiciona a nova avaliação no início da lista
    allReviews.value.unshift({ 
      id: Date.now(), 
      ...newReview 
    })
    console.log('Avaliação salva na Store:', allReviews.value)
  }

  return { allReviews, addReview }
})