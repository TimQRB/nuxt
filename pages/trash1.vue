<template>
    <main class="flex flex-col items-center bg-gray-800 text-white min-h-screen py-8">
      <h1 class="text-3xl font-bold text-yellow-300 mb-6">Select a Game</h1>
      
      <div class="flex flex-wrap gap-6 justify-center">
        <div class="block">
          <img src="/logos/dota2.jpg" class="w-60 h-60 object-cover rounded-lg cursor-pointer border-2 border-gray-700 hover:border-yellow-300" 
               @click="setMedia('video', 'serega.mp4')">
          <p class="mt-2 text-lg font-bold text-yellow-300">Dota 2</p>
        </div>
        
        <div class="block">
          <img src="/logos/pubg.jpg" class="w-60 h-60 object-cover rounded-lg cursor-pointer border-2 border-gray-700 hover:border-yellow-300" 
               @click="setMedia('video', 'rofls.mp4')">
          <p class="mt-2 text-lg font-bold text-yellow-300">Pubg</p>
        </div>
        
        <div class="block">
          <img src="/logos/lol.jpg" class="w-60 h-60 object-cover rounded-lg cursor-pointer border-2 border-gray-700 hover:border-yellow-300" 
               @click="setMedia('gif', '23968576')">
          <p class="mt-2 text-lg font-bold text-yellow-300">League of Legends</p>
        </div>
      </div>
  
      <!-- Видео -->
      <div v-if="selectedMedia && selectedMedia.type === 'video'" class="mt-8">
        <video controls class="w-[720px] border-4 border-yellow-300 rounded-lg shadow-lg" :key="selectedMedia.src">
          <source :src="`/videos/${selectedMedia.src}`" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Гифка -->
      <div v-if="selectedMedia && selectedMedia.type === 'gif'" class="mt-8">
        <iframe 
          :src="`https://tenor.com/embed/${selectedMedia.src}`" 
          class="w-[480px] h-[288px] border-4 border-yellow-300 rounded-lg shadow-lg"
          allowfullscreen>
        </iframe>
      </div>

    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Начальное значение теперь {} вместо null
const selectedMedia = ref<{ type: 'video' | 'gif'; src: string } | null>(null);

// Функция для установки медиа-контента
const setMedia = (type: 'video' | 'gif', src: string) => {
  selectedMedia.value = { type, src };
};
</script>

<style scoped>
.block {
  @apply flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105;
}
</style>
