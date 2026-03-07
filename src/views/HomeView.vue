<script setup>
import BaseContent from '@/components/BaseContent.vue'
import BaseStarRating from '@/components/BaseStarRating.vue'
import { useReviewStore } from '@/stores/useReviewStore'

const store = useReviewStore()

// Dicionário para traduzir os valores do formulário para exibição na Badge
const experienceLabels = {
  played: 'Zerado',
  playing: 'Jogando',
  dropped: 'Dropado',
  will_play: 'Pretende jogar',
}

// Função que pega o valor salvo e retorna o texto em português
const getExperienceLabel = (value) => {
  return experienceLabels[value] || 'Sem status'
}
</script>

<template>
  <BaseContent>
    <template #title> Meus Jogos </template>

    <template #body>
      <div v-if="store.allReviews.length === 0" class="empty-state">
        <img src="@/assets/icons/empty-state.svg" alt="Logo" class="empty-state-icon" />
        <p>Nenhum jogo cadastrado.</p>
      </div>

      <div v-else class="games-grid">
        <div v-for="review in store.allReviews" :key="review.id" class="game-card">
          <div class="card-header">
            <h2 class="game-title">{{ review.name }}</h2>
            <span v-if="review.experience" class="badge">
              {{ getExperienceLabel(review.experience) }}
            </span>
          </div>

          <div class="card-rating">
            <BaseStarRating :modelValue="review.ratingScore" readonly></BaseStarRating>
          </div>

          <p class="game-description">{{ review.description }}</p>
        </div>
      </div>
    </template>
  </BaseContent>
</template>

<style scoped>
/* --- Novo Estilo para os Cards --- */

/* O Grid que organiza os cartões. 
   Ele cria colunas automaticamente dependendo do tamanho da tela. */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

/* O Cartão em si */
.game-card {
  background-color: #1f2937; /* Fundo cinza escuro dos inputs */
  border: 1px solid #374151; /* Borda sutil */
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento interno padronizado */
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* Efeito 3D ao passar o mouse por cima do cartão */
.game-card:hover {
  transform: translateY(-5px); /* Sobe um pouquinho */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4); /* Sombra mais forte */
}

/* Cabeçalho do Cartão (Título + Badge) */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.game-title {
  margin: 0;
  font-size: 1.25rem;
  color: #ffffff;
  font-weight: 600;
  word-break: break-word; /* Evita que nomes muito longos quebrem o card */
}

/* A Etiqueta com o status do jogo */
.badge {
  background-color: #1e40af; /* O Azul Marinho Profundo do seu projeto */
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px; /* Formato de "Pílula" (Pill) */
  white-space: nowrap;
}

.card-rating {
  margin-top: -0.5rem; /* Puxa as estrelas um pouco mais para perto do título */
}

/* O texto da descrição */
.game-description {
  margin: 0;
  color: #9ca3af; /* Cinza mais claro para o texto */
  font-size: 0.95rem;
  line-height: 1.5;

  /* Esse truque de CSS limita o texto a 3 linhas com "..." no final! */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
