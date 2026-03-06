<script setup>
import BaseContent from '@/components/BaseContent.vue'
import BaseFormField from '@/components/BaseFormField.vue'
</script>

<template>
  <BaseContent>
    <template #title>Nova Avaliação</template>

    <template #body>
      <form class="form grid-area">
        <BaseFormField>
          <input type="checkbox" />
        </BaseFormField>
        <BaseFormField class="item name">
          <label for="name">Nome do jogo</label>
          <input type="text" name="name" />
        </BaseFormField>

        <BaseFormField class="item title">
          <label for="title">Título da Avaliação</label>
          <input type="text" name="title" />
        </BaseFormField>

        <BaseFormField class="item description">
          <label for="description">Descrição</label>
          <textarea name="description" rows="5" cols="50"></textarea>
        </BaseFormField>
      </form>
    </template>
  </BaseContent>
</template>

<style>
.form {
  display: grid;
}

.item {
  margin: 5px !important;
}

.name {
  grid-area: name;
}

.title {
  grid-area: title;
}

.description {
  grid-area: description;
}

.grid-area {
  grid-template-areas:
    'name title'
    'description description';
}
</style>
