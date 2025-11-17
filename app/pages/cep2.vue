<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-white mb-8">CEP 2 - Busca</h1>
      
      <div class="flex gap-4">
        <CustomInput 
          v-model="searchValue"
          placeholder="Digite o CEP..."
          class="flex-1"
        />
        <CustomButton @click="handleSearch">
          Buscar
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '~/components/CustomInput.vue'
import CustomButton from '~/components/CustomButton.vue'

const searchValue = ref('')

const handleSearch = () => {
  // Lógica de busca será implementada futuramente
  console.log('Buscar:', searchValue.value)
}
</script>
