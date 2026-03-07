<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  // Nova prop adicionada para controlar o modo de exibição
  readonly: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const hoverValue = ref(0)

const setRating = (value) => {
  // Uma trava de segurança extra, caso o usuário tente forçar o clique
  if (props.readonly) return
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="star-rating" @mouseleave="hoverValue = 0">
    <button
      v-for="star in 5"
      :key="star"
      type="button"
      class="star-btn"
      :class="{ 'is-readonly': readonly }"
      :disabled="readonly"
      @mouseover="!readonly && (hoverValue = star)"
      @click="setRating(star)"
      :aria-label="`Avaliar com ${star} de 5 estrelas`"
    >
      <svg
        class="star-icon"
        :class="{ 'is-active': star <= (hoverValue || modelValue) }"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.star-rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
}

.star-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  display: grid;
  place-content: center;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.star-btn:focus-visible {
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.6);
}

/* O efeito de hover SÓ acontece se o botão não tiver a classe is-readonly */
.star-btn:not(.is-readonly):hover {
  transform: scale(1.15);
}

/* Quando estiver no modo amostra, tiramos o cursor de "clicável" */
.star-btn.is-readonly {
  cursor: default;
}

.star-icon {
  width: 2rem;
  height: 2rem;
  fill: #1f2937;
  stroke: #374151;
  stroke-width: 1.5;
  stroke-linejoin: round;
  transition: all 0.2s ease-in-out;
}

.star-icon.is-active {
  fill: #fbbf24;
  stroke: #fbbf24;
}
</style>
