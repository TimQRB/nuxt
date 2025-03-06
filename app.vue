<template>
  <header class="flex flex-row w-full relative bg-green-400 border-b-2 border-gray-400 max-sm:justify-between max-sm:z-10 max-sm:relative">
    <div class="basis-1/4 flex items-center justify-start px-8 min-w-40 max-sm:basis-auto">
      <img src="@/assets/image/stflogo.png" class="w-16 h-16 bg-transparent" alt="Game Portal Logo">
    </div>
    <div class="basis-1/4 max-sm:hidden"></div>
    <nav :class="{'basis-1/2 flex flex-row items-center justify-end px-8 gap-4': !burger || burger, 'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-2 max-sm:bg-white max-sm:px-2 max-sm:z-0': burger, 'max-sm:hidden': !burger}">
      <NuxtLink to="/" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Home</NuxtLink>

      <div class="relative">
        <button @click="switch_submenu" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center">
          Games
        </button>
        <div v-if="submenu" class="absolute top-full left-0 bg-white shadow-lg border border-gray-300 w-40 max-sm:relative max-sm:w-full">
          <NuxtLink to="/games/action" class="block px-4 py-2 hover:bg-gray-300 max-sm:w-full text-center">Action Games</NuxtLink>
          <NuxtLink to="/games/strategy" class="block px-4 py-2 hover:bg-gray-300 max-sm:w-full text-center">Strategy Games</NuxtLink>
          <NuxtLink to="/games/rpg" class="block px-4 py-2 hover:bg-gray-300 max-sm:w-full text-center">RPG Games</NuxtLink>
        </div>
      </div>

      <NuxtLink to="/news" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center">News</NuxtLink>
      <NuxtLink to="/community" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center">Community</NuxtLink>
      <NuxtLink to="/login" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center">Login</NuxtLink>
      <NuxtLink to="/logout" class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center">Logout</NuxtLink>
    </nav>

    <div v-if="!burger" @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6 max-sm:mt-5">
      <span class="h-[3px] w-full bg-blue-950"></span>
      <span class="h-[3px] w-full bg-blue-950"></span>
      <span class="h-[3px] w-full bg-blue-950"></span>
    </div>
    <div v-else @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6 max-sm:mt-5">
      <span class="h-[3px] w-full bg-blue-950 rotate-45 relative top-[9px]"></span>
      <span class="h-[3px] w-full bg-blue-950 opacity-0"></span>
      <span class="h-[3px] w-full bg-blue-950 relative bottom-3 rotate-[-45deg]"></span>
    </div>
  </header>

  <main class="content">
    <slot></slot>
  </main>

  <footer class="footer">
    <div class="links">
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran" class="link">Link 1</a>
      <a href="https://www.youtube.com/watch?v=FJ3N_2r6R-o&ab_channel=BritishPath%C3%A9" class="link">Link 2</a>
    </div>
    <p>© 2025 Game Portal. All rights reserved.</p>
  </footer>
</template>






































<script setup lang="ts">
import { useHead } from '#app'
import {ref} from 'vue'



const burger = ref<boolean>(false)
const submenu = ref<boolean>(false)
const switch_burger = ()=> {burger.value = !burger.value}
const switch_submenu = ()=> {submenu.value = !submenu.value}





useHead({
script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-7PL2JGB7SF'
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7PL2JGB7SF');
      `,
      type: 'text/javascript'
    }
  ],
  dangerouslyDisableSanitizersByTagID: {
    gtag: 'innerHTML'
  }
});

</script>