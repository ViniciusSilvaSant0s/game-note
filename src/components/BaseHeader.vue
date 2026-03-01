<script setup>
import BaseTitle from '@/components/BaseTitle.vue';
import BaseButton from './BaseButton.vue';
</script>

<template>
<header>
  <div>
    <BaseTitle/>
  </div>

  <div>
    <BaseButton variant="success">
      Adicionar Novo Jogo
    </BaseButton>
  </div>
</header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  background: #0f0f0f;
  padding: 1rem;
  margin: 0px;
}
</style>