import { ref } from 'vue'
import type { CepData } from '~/types/cep'

export const useCep = () => {
  const cepData = ref<CepData | null>(null)
  const loading = ref(false)
  const error = ref('')

  const buscarCep = async (cep: string) => {
    error.value = ''
    cepData.value = null

    // Remove hífens e valida
    const cleanCep = cep.replace(/\D/g, '')
    
    if (cleanCep.length !== 8) {
      error.value = 'CEP deve conter 8 dígitos'
      return
    }

    loading.value = true

    try {
      const data = await $fetch<CepData>(`https://viacep.com.br/ws/${cleanCep}/json/`)

      if ('erro' in data) {
        error.value = 'CEP não encontrado'
        return
      }

      cepData.value = data
    } catch (err) {
      error.value = 'Erro ao buscar CEP. Verifique sua conexão.'
      console.error('Erro ao buscar CEP:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    cepData,
    loading,
    error,
    buscarCep
  }
}
