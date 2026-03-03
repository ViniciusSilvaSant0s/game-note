<template>
  <button :class="['btn-base', variant]" class="button">
    <slot>Clique Aqui</slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    // Validação para garantir que só usem as cores que você definiu
    validator: (value) => ['primary', 'success', 'warning', 'danger', 'info'].includes(value),
  },
})
</script>

<style scoped>
.button {
  /* Estilos base (comum a todos os botões) */
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white; /* Todos os seus botões terão texto branco */
}

.button:hover {
  filter: brightness(0.9); /* Escurece qualquer cor automaticamente no hover */
  transform: translateY(-1px);
}

/* Variantes de Cores - Versão Dark/Professional */
.primary {
  background-color: #1e40af; /* Azul Marinho Profundo */
}
.success {
  background-color: #166534; /* Verde Floresta */
}
.warning {
  background-color: #854d0e; /* Mostarda Escuro (evita o amarelo "marca-texto") */
}
.danger {
  background-color: #991b1b; /* Vermelho Vinho/Sangue */
}
.info {
  background-color: #6b21a8; /* Roxo Profundo */
}
</style>
