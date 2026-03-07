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
  width: auto;
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

/* Estilizando o Checkbox Customizado para Dark Theme */
.form-field :deep(input[type='checkbox']) {
  appearance: none; /* Remove o estilo padrão do Windows/Chrome/Safari */
  -webkit-appearance: none;

  width: 1.25rem;
  height: 1.25rem;
  background-color: #1f2937; /* Fundo escuro igual aos seus outros inputs */
  border: 1px solid #374151; /* Borda sutil */
  border-radius: 4px; /* Leve arredondamento */
  cursor: pointer;
  display: grid;
  place-content: center; /* Centraliza o ícone de check que vamos criar */
  transition: all 0.2s ease;
  margin: 0;
}

/* Criando o ícone de "Check" (a marca de verificado) */
.form-field :deep(input[type='checkbox']::before) {
  content: '';
  width: 0.65rem;
  height: 0.65rem;
  transform: scale(0); /* Escondido por padrão */
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #ffffff; /* Cor da marca de check (Branco) */

  /* Esse clip-path desenha o formato do check ✓ */
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

/* Estado: Marcado (True) */
.form-field :deep(input[type='checkbox']:checked) {
  background-color: #1e40af; /* Seu Azul Marinho Profundo */
  border-color: #1e40af;
}

/* Mostra o ícone de check quando marcado */
.form-field :deep(input[type='checkbox']:checked::before) {
  transform: scale(1);
}

/* Efeito de Focus para acessibilidade */
.form-field :deep(input[type='checkbox']:focus) {
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.4);
  outline: none;
}

/* RADIO BUTTON */

/* Reset e Estilo da Base do Radio (Fundo Escuro) */
.form-field :deep(input[type='radio']) {
  appearance: none; /* Remove o estilo padrão branco do navegador */
  -webkit-appearance: none;

  width: 1.25rem;
  height: 1.25rem;
  background-color: #1f2937; /* Fundo escuro igual ao Checkbox */
  border: 1px solid #374151;
  border-radius: 50%; /* Garante que seja um círculo perfeito */
  cursor: pointer;
  display: grid;
  place-content: center; /* Centraliza a bolinha interna */
  transition: all 0.2s ease;
  margin: 0;
}

/* Criando a "Bolinha" interna do Radio */
.form-field :deep(input[type='radio']::before) {
  content: '';
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%; /* A marca interna também é um círculo */
  transform: scale(0); /* Escondida por padrão */
  transition: 120ms transform ease-in-out;
  background-color: #ffffff; /* Cor da bolinha quando marcado */
}

/* Estado: Marcado (True) */
.form-field :deep(input[type='radio']:checked) {
  background-color: #1e40af; /* Fundo azul quando selecionado */
  border-color: #1e40af;
}

/* Mostra a bolinha interna quando marcado */
.form-field :deep(input[type='radio']:checked::before) {
  transform: scale(1);
}

/* Efeito de Focus (Acessibilidade) */
.form-field :deep(input[type='radio']:focus) {
  box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.4);
  outline: none;
}
</style>
