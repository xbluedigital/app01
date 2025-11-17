<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Header -->
    <header class="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-3xl font-bold text-white">Welcome to Nuxt 4</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <section class="mb-12">
        <div class="bg-slate-800 rounded-lg border border-slate-700 p-8 shadow-xl">
          <h2 class="text-2xl font-bold text-white mb-4">Modern Web Development</h2>
          <p class="text-slate-300 mb-6">
            Build fast, scalable applications with Nuxt 4, Tailwind CSS, and shadcn/ui components.
          </p>
          <div class="flex gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition">
              Get Started
            </button>
            <button class="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-md transition border border-slate-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>
          <h3 class="text-lg font-semibold text-white mb-2">Fast Performance</h3>
          <p class="text-slate-400">Lightning-fast performance with server-side rendering and optimization.</p>
        </div>

        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition">
          <div class="w-12 h-12 bg-purple-600 rounded-lg mb-4"></div>
          <h3 class="text-lg font-semibold text-white mb-2">Component Library</h3>
          <p class="text-slate-400">Beautiful, accessible components with shadcn/ui integration.</p>
        </div>

        <div class="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-green-500 transition">
          <div class="w-12 h-12 bg-green-600 rounded-lg mb-4"></div>
          <h3 class="text-lg font-semibold text-white mb-2">Easy Styling</h3>
          <p class="text-slate-400">Utility-first CSS with Tailwind for rapid development.</p>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="mt-12 bg-slate-800 rounded-lg border border-slate-700 p-8">
        <div class="grid grid-cols-3 gap-8 text-center">
          <div>
            <p class="text-4xl font-bold text-blue-500">99.9%</p>
            <p class="text-slate-400 mt-2">Uptime</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-purple-500">150ms</p>
            <p class="text-slate-400 mt-2">Load Time</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-green-500">100%</p>
            <p class="text-slate-400 mt-2">Responsive</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-700 bg-slate-900/50 mt-12 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; 2025 Nuxt 4 App. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Composables and logic can go here
</script>
