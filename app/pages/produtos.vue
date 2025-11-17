<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Header -->
    <header class="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-3xl font-bold text-white">Nossos Produtos</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Filter Section -->
      <section class="mb-8">
        <div class="flex gap-4 flex-wrap">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
            Todos
          </button>
          <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition border border-slate-600">
            Eletrônicos
          </button>
          <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition border border-slate-600">
            Acessórios
          </button>
          <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-md transition border border-slate-600">
            Software
          </button>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Product Card 1 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Laptop Pro</h3>
            <p class="text-slate-400 text-sm mb-4">Processador de última geração com 16GB RAM</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-blue-500">R$ 4.999</span>
              <button class="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 2 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Smartphone Max</h3>
            <p class="text-slate-400 text-sm mb-4">Câmera 108MP e tela AMOLED 120Hz</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-purple-500">R$ 2.499</span>
              <button class="bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 3 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-green-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Fone Wireless</h3>
            <p class="text-slate-400 text-sm mb-4">Cancelamento de ruído ativo com 48h bateria</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-green-500">R$ 1.299</span>
              <button class="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-pink-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-pink-500 to-pink-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Tablet Ultra</h3>
            <p class="text-slate-400 text-sm mb-4">12.9" com stylus e 512GB armazenamento</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-pink-500">R$ 3.999</span>
              <button class="bg-pink-600 hover:bg-pink-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 5 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-orange-500 to-orange-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Smartwatch Elite</h3>
            <p class="text-slate-400 text-sm mb-4">Monitor de saúde completo com GPS integrado</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-orange-500">R$ 899</span>
              <button class="bg-orange-600 hover:bg-orange-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 6 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-cyan-500 to-cyan-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Camera Pro</h3>
            <p class="text-slate-400 text-sm mb-4">4K 60fps com estabilizador óptico avançado</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-cyan-500">R$ 5.499</span>
              <button class="bg-cyan-600 hover:bg-cyan-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 7 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-indigo-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Monitor 4K</h3>
            <p class="text-slate-400 text-sm mb-4">27" com refresh rate 144Hz para games</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-indigo-500">R$ 2.199</span>
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>

        <!-- Product Card 8 -->
        <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-rose-500 transition shadow-lg">
          <div class="h-48 bg-gradient-to-br from-rose-500 to-rose-600"></div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Teclado Mecânico</h3>
            <p class="text-slate-400 text-sm mb-4">RGB customizável com switches premium</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-rose-500">R$ 599</span>
              <button class="bg-rose-600 hover:bg-rose-700 text-white py-1 px-3 rounded text-sm">Comprar</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Pagination -->
      <section class="mt-12 flex justify-center gap-2">
        <button class="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded">← Anterior</button>
        <button class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">1</button>
        <button class="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded">2</button>
        <button class="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded">3</button>
        <button class="bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded">Próximo →</button>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-700 bg-slate-900/50 mt-12 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; 2025 Loja de Produtos. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Lógica de produtos pode ir aqui
</script>
