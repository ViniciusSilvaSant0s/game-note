<script setup>
import { ref } from 'vue';

// Permite usar o v-model no componente pai
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['update:modelValue']);

// Controla as estrelas acesas durante o "hover" do mouse
const hoverValue = ref(0);

// Atualiza o valor real ao clicar
const setRating = (value) => {
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="star-rating" @mouseleave="hoverValue = 0">
    <button
      v-for="star in 5"
      :key="star"
      type="button"
      class="star-btn"
      @mouseover="hoverValue = star"
      @click="setRating(star)"
      :aria-label="`Avaliar com ${star} de 5 estrelas`"
    >
      <svg 
        class="star-icon" 
        :class="{ 'is-active': star <= (hoverValue || modelValue) }"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
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

/* Resetando o estilo padrão do botão */
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

/* Efeito de clique (Acessibilidade e Feedback) */
.star-btn:focus-visible {
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.6); /* O mesmo azul marinho do seu projeto */
}

/* Leve aumento ao passar o mouse */
.star-btn:hover {
  transform: scale(1.15);
}

/* Estilo Base da Estrela (Vazia / Desligada) */
.star-icon {
  width: 2rem; /* Tamanho da estrela */
  height: 2rem;
  fill: #1f2937; /* Fundo interno escuro, igual aos seus inputs */
  stroke: #374151; /* Borda sutil, igual aos seus inputs */
  stroke-width: 1.5;
  stroke-linejoin: round;
  transition: all 0.2s ease-in-out;
}

/* Estilo da Estrela (Preenchida / Ligada) */
.star-icon.is-active {
  /* Usei um Amarelo/Dourado padrão para estrelas, mas você pode 
     trocar por #1e40af (Seu Azul Marinho) se preferir algo monocromático */
  fill: #fbbf24; 
  stroke: #fbbf24;
}
</style>