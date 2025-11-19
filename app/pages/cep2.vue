<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">CEP 2 - Busca</h1>
      
      <!-- Search Section -->
      <div class="flex gap-4 mb-8">
        <CustomInput 
          v-model="searchValue"
          placeholder="Digite o CEP..."
          :maxlength="9"
          class="flex-1"
          @keyup.enter="handleSearch"
        />
        <CustomButton 
          @click="handleSearch"
          :disabled="loading || !searchValue"
        >
          {{ loading ? 'Buscando...' : 'Buscar' }}
        </CustomButton>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-900/20 border border-red-500 text-red-400 rounded-lg p-4 mb-8">
        {{ error }}
      </div>

      <!-- Detalhes do CEP -->
      <DetalhesCep :cep="cepData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '~/components/CustomInput.vue'
import CustomButton from '~/components/CustomButton.vue'
import DetalhesCep from '~/components/DetalhesCep.vue'
import { useCep } from '~/composables/useCep'

const searchValue = ref('')
const { cepData, loading, error, buscarCep } = useCep()

const handleSearch = () => {
  if (searchValue.value) {
    buscarCep(searchValue.value)
  }
}
</script>
