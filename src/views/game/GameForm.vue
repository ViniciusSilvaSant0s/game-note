<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseContent from '@/components/BaseContent.vue'
import BaseFormField from '@/components/BaseFormField.vue'
import BaseStarRating from '@/components/BaseStarRating.vue'
import { ref } from 'vue';

const form = ref({
  ratingScore: 0,
  experience: null,
  name: null,
  description: null
})

const save = () => {
  // save rating
}

//const ratingScore = ref(1)
</script>

<template>
  <BaseContent>
    <template #title>Nova Avaliação</template>

    <template #body>
      <form class="form grid-area">
        <BaseFormField class="item rating">
          <label>Sua Nota</label>
          <BaseStarRating v-model="form.ratingScore" />
        </BaseFormField>
        <BaseFormField class="item radio-group">
          <div class="radios">
            <div class="radio-button">
              <input type="radio" id="played" value="played" v-model="form.experience" />
              <label for="played">Zerado</label>
            </div>
            <div class="radio-button">
              <input type="radio" id="playing" value="playing" v-model="form.experience" />
              <label for="playing">Jogando</label>
            </div>
            <div class="radio-button">
              <input type="radio" id="dropped" value="dropped" v-model="form.experience" />
              <label for="dropped">Dropado</label>
            </div>
            <div class="radio-button">
              <input type="radio" id="will_play" value="will_play" v-model="form.experience" />
              <label for="will_play">Pretende jogar</label>
            </div>
          </div>
        </BaseFormField>
        <BaseFormField class="item name">
          <label for="name">Nome do jogo</label>
          <input type="text" name="name" v-model="form.name" />
        </BaseFormField>
        <BaseFormField class="item description">
          <label for="description">Descrição</label>
          <textarea name="description" rows="5" cols="50" v-model="form.description"></textarea>
        </BaseFormField>

        <div class="save-button" @click="save">
          <BaseButton class="internal-button">Salvar</BaseButton>
        </div>        
      </form>
    </template>
  </BaseContent>
</template>

<style scoped>
.form {
  display: grid;
}

.item {
  margin: 5px !important;
}

.name {
  grid-area: name;
}

.description {
  grid-area: description;
}

.radio-group {
  grid-area: radio-group
}

.radios {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.radio-button {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.rating {
  grid-area: rating;
}

.save-button {
  margin: 30px;
  grid-area: save-button;
  display: flex;
  flex-direction: row ;
  justify-content: center !important;
}

.internal-button {
  padding-left: 10%;
  padding-right: 10%;
}

.grid-area {
  grid-template-areas:
    'rating'
    'radio-group'
    'name'
    'description'
    'save-button';
}


</style>
