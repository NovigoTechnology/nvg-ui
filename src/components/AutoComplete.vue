<template>
  <div>
    <div class="relative">
      <AutoComplete
        v-model="inputValue"
        :key="refresh"
        ref="autoCompleteRef"
        :suggestions="suggestions"
        @complete="search"
        :placeholder="placeholder"
        fluid
        @clear="clear_input"
        :dropdown="false"
        forceSelection
      >
        <template #dropdown>
          <button
            type="button"
            class="p-autocomplete-dropdown"
            @click.stop="clear_input"
          >
            <svg
              class="icon icon-sm"
              style="stroke: var(--p-inputtext-color)"
              aria-hidden="true"
            >
              <use href="#icon-close"></use>
            </svg>
          </button>
        </template>
      </AutoComplete>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AutoComplete from "primevue/autocomplete";

// Data simples
const inputValue = ref("");
const suggestions = ref([]);
const refresh = ref(false);
const placeholder = ref("Buscar...");
const autoCompleteRef = ref(null);

// Métodos simplificados
const clear_input = () => {
  inputValue.value = null;
  refresh.value = !refresh.value;
};

const search = (event) => {
  if (event.query) {
    // Aquí puedes implementar tu lógica de búsqueda
    suggestions.value = ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3"].filter(item => 
      item.toLowerCase().includes(event.query.toLowerCase())
    );
  }
};
</script>

<style>
.p-disabled {
	opacity: 1 !important;
	background: var(--p-inputtext-disabled-background);
	color: var(--p-inputtext-disabled-color);
}

.custom-button {
	border: 1px solid var(--p-inputtext-border-color);
}

:deep(.p-autocomplete-fluid) {
	width: 100%;
}
</style>
