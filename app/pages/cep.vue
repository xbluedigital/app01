<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Header -->
    <header class="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-3xl font-bold text-white">Consultar CEP</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Search Section -->
      <section class="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-lg mb-8">
        <label class="block text-white font-semibold mb-3">Digite o CEP:</label>
        <div class="flex gap-3">
          <input
            v-model="cep"
            type="text"
            placeholder="Ex: 03335045"
            maxlength="8"
            class="flex-1 px-4 py-3 rounded-md bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:border-blue-500 focus:outline-none transition"
            @keyup.enter="searchCep"
          />
          <button
            @click="searchCep"
            :disabled="loading || cep.length === 0"
            class="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-md transition"
          >
            {{ loading ? 'Pesquisando...' : 'Pesquisar' }}
          </button>
        </div>
      </section>

      <!-- Error Message -->
      <div v-if="error" class="bg-red-900/20 border border-red-500 text-red-400 rounded-lg p-4 mb-8">
        {{ error }}
      </div>

      <!-- Results Section -->
      <section v-if="cepData" class="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-6">Informações do CEP</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- CEP -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">CEP</p>
            <p class="text-white text-lg font-bold">{{ cepData.cep }}</p>
          </div>

          <!-- Logradouro -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Logradouro</p>
            <p class="text-white text-lg">{{ cepData.logradouro || 'N/A' }}</p>
          </div>

          <!-- Bairro -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Bairro</p>
            <p class="text-white text-lg">{{ cepData.bairro || 'N/A' }}</p>
          </div>

          <!-- Localidade -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Localidade</p>
            <p class="text-white text-lg">{{ cepData.localidade || 'N/A' }}</p>
          </div>

          <!-- UF -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">UF (Estado)</p>
            <p class="text-white text-lg font-bold">{{ cepData.uf }}</p>
          </div>

          <!-- Estado -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Estado (Nome Completo)</p>
            <p class="text-white text-lg">{{ cepData.estado }}</p>
          </div>

          <!-- Região -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Região</p>
            <p class="text-white text-lg">{{ cepData.regiao || 'N/A' }}</p>
          </div>

          <!-- DDD -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">DDD</p>
            <p class="text-white text-lg">{{ cepData.ddd || 'N/A' }}</p>
          </div>

          <!-- IBGE -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">Código IBGE</p>
            <p class="text-white text-lg">{{ cepData.ibge || 'N/A' }}</p>
          </div>

          <!-- GIA -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">GIA</p>
            <p class="text-white text-lg">{{ cepData.gia || 'N/A' }}</p>
          </div>

          <!-- SIAFI -->
          <div class="bg-slate-700 rounded-lg p-4">
            <p class="text-slate-400 text-sm font-semibold mb-1">SIAFI</p>
            <p class="text-white text-lg">{{ cepData.siafi || 'N/A' }}</p>
          </div>

          <!-- Complemento -->
          <div class="bg-slate-700 rounded-lg p-4 md:col-span-2">
            <p class="text-slate-400 text-sm font-semibold mb-1">Complemento</p>
            <p class="text-white text-lg">{{ cepData.complemento || 'Nenhum complemento' }}</p>
          </div>
        </div>

        <!-- Clear Button -->
        <button
          @click="clearResults"
          class="mt-6 w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition border border-slate-600"
        >
          Nova Consulta
        </button>
      </section>

      <!-- Info Section -->
      <section v-if="!cepData" class="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-lg">
        <h2 class="text-xl font-bold text-white mb-4">Como usar:</h2>
        <ul class="text-slate-300 space-y-2">
          <li>✓ Digite um CEP válido (com ou sem hífen)</li>
          <li>✓ Clique em "Pesquisar" ou pressione Enter</li>
          <li>✓ As informações do endereço serão exibidas abaixo</li>
          <li>✓ Todos os campos serão preenchidos automaticamente</li>
        </ul>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-700 bg-slate-900/50 mt-12 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; 2025 Consulta de CEP. Powered by ViaCEP</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CepData {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  estado: string
  regiao: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

const cep = ref('')
const cepData = ref<CepData | null>(null)
const loading = ref(false)
const error = ref('')

const searchCep = async () => {
  error.value = ''
  cepData.value = null

  // Remove hífens e valida
  const cleanCep = cep.value.replace(/\D/g, '')
  
  if (cleanCep.length !== 8) {
    error.value = 'CEP deve conter 8 dígitos'
    return
  }

  loading.value = true

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
    const data = await response.json()

    if (data.erro) {
      error.value = 'CEP não encontrado'
      return
    }

    cepData.value = data
  } catch (err) {
    error.value = 'Erro ao buscar CEP. Verifique sua conexão.'
  } finally {
    loading.value = false
  }
}

const clearResults = () => {
  cep.value = ''
  cepData.value = null
  error.value = ''
}
</script>
