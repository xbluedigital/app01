<template>
  <section v-if="cep" class="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-lg">
    <h2 class="text-2xl font-bold text-white mb-6">Informações do CEP</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- CEP -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">CEP</p>
        <p class="text-white text-lg font-bold">{{ cep.cep }}</p>
      </div>

      <!-- Logradouro -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Logradouro</p>
        <p class="text-white text-lg">{{ cep.logradouro || 'N/A' }}</p>
      </div>

      <!-- Bairro -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Bairro</p>
        <p class="text-white text-lg">{{ cep.bairro || 'N/A' }}</p>
      </div>

      <!-- Localidade -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Localidade</p>
        <p class="text-white text-lg">{{ cep.localidade || 'N/A' }}</p>
      </div>

      <!-- UF -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">UF (Estado)</p>
        <p class="text-white text-lg font-bold">{{ cep.uf }}</p>
      </div>

      <!-- Estado -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Estado (Nome Completo)</p>
        <p class="text-white text-lg">{{ cep.estado }}</p>
      </div>

      <!-- Região -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Região</p>
        <p class="text-white text-lg">{{ cep.regiao || 'N/A' }}</p>
      </div>

      <!-- DDD -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">DDD</p>
        <p class="text-white text-lg">{{ cep.ddd || 'N/A' }}</p>
      </div>

      <!-- IBGE -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">Código IBGE</p>
        <p class="text-white text-lg">{{ cep.ibge || 'N/A' }}</p>
      </div>

      <!-- GIA -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">GIA</p>
        <p class="text-white text-lg">{{ cep.gia || 'N/A' }}</p>
      </div>

      <!-- SIAFI -->
      <div class="bg-slate-700 rounded-lg p-4">
        <p class="text-slate-400 text-sm font-semibold mb-1">SIAFI</p>
        <p class="text-white text-lg">{{ cep.siafi || 'N/A' }}</p>
      </div>

      <!-- Complemento -->
      <div class="bg-slate-700 rounded-lg p-4 md:col-span-2">
        <p class="text-slate-400 text-sm font-semibold mb-1">Complemento</p>
        <p class="text-white text-lg">{{ cep.complemento || 'Nenhum complemento' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { CepData } from '~/types/cep'

interface Props {
  cep?: CepData | null
}

defineProps<Props>()
</script>
