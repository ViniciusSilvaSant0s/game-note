<script setup>
import BaseContent from '@/components/BaseContent.vue';
import { ref } from 'vue';

const games = ref([]);

</script>

<template>
  <BaseContent>
    <div class="header-view">
      <h1 class="title">Meus Jogos</h1>
      <div class="diviser"></div>
    </div>

    <div v-if="games.length === 0" class="empty-state">
      <img src="@/assets/icons/empty-state.svg" alt="Logo" class="empty-state-icon" />
      <p>Nenhum jogo cadastrado.</p>
    </div>
  </BaseContent>
</template>

<style scoped>
.title {
  font-weight: 500;
}
.header-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.diviser {
  background: rgba(54, 54, 54, 0.7);
  height: 2px;
  flex: 1;
  border-radius: 1px;
  margin-left: 1rem;
}
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  font-size: 1.2rem;
  opacity: 0.2;
}

.empty-state-icon {
  width: 30%;
}
</style>
