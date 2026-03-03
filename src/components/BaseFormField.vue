<template>
  <div class="form-field">
    <slot></slot>
  </div>
</template>

<style scoped>
/* Container principal */
.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  width: 100%;
}

/* Estilizando Labels passadas no slot - Cor clara para leitura no fundo escuro */
.form-field :deep(label) {
  font-size: 0.9rem;
  font-weight: 600; /* Combina com o font-weight do seu botão */
  color: #d1d5db; /* Cinza claro elegante */
  margin: 0.2rem;
}

/* Estilizando Inputs de texto, Selects e Textareas para o Dark Theme */
.form-field :deep(input[type='text']),
.form-field :deep(input[type='email']),
.form-field :deep(input[type='password']),
.form-field :deep(input[type='number']),
.form-field :deep(input[type='search']),
.form-field :deep(input[type='tel']),
.form-field :deep(input[type='url']),
.form-field :deep(select),
.form-field :deep(textarea) {
  width: 100%;
  padding: 0.8rem 1rem; /* Alinhado com a altura do botão */
  font-size: 1rem;
  font-family: inherit;
  color: #ffffff; /* Texto digitado em branco */
  background-color: #1f2937; /* Fundo cinza escuro para os inputs */
  border: 1px solid #374151; /* Borda sutil para separar do fundo da tela */
  border-radius: 8px; /* O mesmo do botão */
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease; /* A mesma transição do botão */
}

/* Alterando a cor do placeholder para não confundir com texto digitado */
.form-field :deep(::placeholder) {
  color: #6b7280;
}

/* Efeito Hover (passar o mouse) */
.form-field :deep(input:hover:not([type='checkbox']):not([type='radio'])),
.form-field :deep(select:hover),
.form-field :deep(textarea:hover) {
  border-color: #4b5563; /* Clareia a borda levemente no hover */
}

/* Efeito Focus (quando clica para digitar) - Usando sua cor Primary */
.form-field :deep(input:focus:not([type='checkbox']):not([type='radio'])),
.form-field :deep(select:focus),
.form-field :deep(textarea:focus) {
  border-color: #1e40af; /* Seu Azul Marinho Profundo */
  background-color: #111827; /* Escurece um pouquinho o fundo ao focar */
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.4); /* Anel luminoso com a sua cor primary */
}

/* Inputs desabilitados */
.form-field :deep(input:disabled),
.form-field :deep(select:disabled),
.form-field :deep(textarea:disabled) {
  background-color: #111827;
  color: #4b5563;
  border-color: #1f2937;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Estilizando Checkboxes e Radios (Estilo nativo adaptado) */
.form-field :deep(.checkbox-wrapper),
.form-field :deep(.radio-wrapper) {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.form-field :deep(input[type='checkbox']),
.form-field :deep(input[type='radio']) {
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  accent-color: #1e40af; /* Azul Marinho Profundo */
  margin: 0;
}
</style>
