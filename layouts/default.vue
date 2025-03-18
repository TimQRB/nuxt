<template>
    <header class="flex flex-row w-full relative bg-gray-900 border-b-2 border-gray-700 max-sm:justify-between max-sm:z-10 max-sm:relative">
      <div class="basis-1/4 flex items-center justify-start px-8 min-w-40 max-sm:basis-auto">
        <img src="@/assets/image/stflogo.png" class="w-16 h-16 bg-transparent" alt="Game Portal Logo">
      </div>
      <div class="basis-1/4 max-sm:hidden"></div>
      <nav :class= "{'basis-1/2 flex flex-row items-center justify-end px-8 gap-4': !burger || burger, 'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-2 max-sm:bg-white max-sm:px-2 max-sm:z-0': burger, 'max-sm:hidden': !burger}">
      <NuxtLink to="/" class="my-auto p-2 hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center text-yellow-300 font-bold">Home</NuxtLink>
      <div class="my-auto p-2 hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0 text-yellow-300 font-bold" @click = "switch_submenu">Games
        <div class="flex flex-col absolute top-full bg-pink-500 text-black w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-pink-500 font-bold" v-show = "submenu">
          <NuxtLink to="/trash1" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:border-t-2 max-sm:text-center font-bold">Trash 1</NuxtLink>
          <NuxtLink to="/mgs" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:text-center font-bold">Kojima</NuxtLink>
          <NuxtLink to="/trash3" class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:text-center font-bold">Trash 2</NuxtLink>
        </div>
      </div>
  
      <NuxtLink to="/login" :class="{'my-auto p-2 hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:text-center text-yellow-300 font-bold': !submenu || submenu, 'my-auto p-2 hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:border-b-2 max-sm:border-t-2 max-sm:border-black max-sm:text-center text-yellow-300 font-bold': !submenu}">Login</NuxtLink>
      <NuxtLink to="/logout" :class="{'my-auto p-2 hover:bg-gray-500 hover:text-yellow-300 max-sm:w-full max-sm:text-center text-yellow-300 font-bold': !submenu || submenu}">Logout</NuxtLink>
    </nav>
  
      <div v-if="!burger" @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6 max-sm:mt-5">
        <span class="h-[3px] w-full bg-white"></span>
        <span class="h-[3px] w-full bg-white"></span>
        <span class="h-[3px] w-full bg-white"></span>
      </div>
      <div v-else @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6 max-sm:mt-5">
        <span class="h-[3px] w-full bg-white rotate-45 relative top-[9px]"></span>
        <span class="h-[3px] w-full bg-white opacity-0"></span>
        <span class="h-[3px] w-full bg-white relative bottom-3 rotate-[-45deg]"></span>
      </div>
    </header>
  
    <main class="content bg-gray-800 text-white min-h-screen">
      <slot></slot>
    </main>
  
    <footer class="footer bg-gray-900 text-white py-4 text-center mt-auto flex flex-col items-center">
      <div class="links flex gap-4">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="link">Link 1</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" class="link">Link 2</a>
      </div>
      <p class="mt-2">© 2025 Game Portal. All rights reserved.</p>
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