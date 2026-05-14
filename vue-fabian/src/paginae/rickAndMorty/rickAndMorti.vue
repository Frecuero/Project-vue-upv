<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../rickAndMorty/logo.png";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useCharacters } from "../../services/rickAndMortyService";

const {
  loading,
  hasMore,
  fetchInitialCharacters,
  loadNextPage,
  startTyping,
  stopTyping,
  characters, 
} = useCharacters();

const scrollContainer = ref<HTMLElement | null>(null);

const onScroll = () => {
  const el = scrollContainer.value;
  if (!el) return;

  const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 100;

  if (nearBottom && hasMore.value && !loading.value) {
    loadNextPage();
  }
};

onMounted(() => {
  fetchInitialCharacters();

  startTyping([
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ]);

  scrollContainer.value?.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  stopTyping();
  scrollContainer.value?.removeEventListener("scroll", onScroll);
});
</script>

<template>
    <main
      ref="scrollContainer"
      class="flex gap-8 items-center flex-col bg-black h-screen overflow-y-auto text-white text-[0.8rem] relative p-8"
    >
      <header class="flex justify-center w-full h-[20vh]">
        <img :src="logo" />
      </header>
  
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full max-w-7xl">
        <Card
          v-for="character in characters"
          :key="character.id"
          class="group p-0 overflow-hidden hover:shadow-xl transition-all"
        >
          <img
            :src="character.image"
            :alt="character.name"
            class="w-full h-50 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
          />
  
          <CardHeader class="px-4">
            <CardTitle class="text-center">
              {{ character.name }}
            </CardTitle>
  
            <CardDescription class="flex justify-between w-full py-3 ">
              <span :class="{'text-green-400':character.species == 'Alien', 'text-red-300':character.species == 'Human'}">
                {{ character.species == 'unknown' ? 'n/a' : character.species }}
            </span>
              <span :class="{
                    'text-blue-400': character.gender === 'Male',
                    'text-pink-400': character.gender === 'Female'}"
                    >
                    {{ character.gender === 'unknown' ? 'n/a' : character.gender }}
                </span>
              <span :class="{'text-green-800':character.status == 'Alive', 'text-red-600':character.status == 'Dead'}">
                {{ character.status == 'unknown' ? 'n/a' : character.status }}
              </span>
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <div
        v-if="loading && characters.length === 0"
        class="flex flex-col items-center justify-center gap-3 py-10 text-white"
        >
        <div class="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-green-400"></div>
        <p class="text-sm text-zinc-400">Cargando personajes...</p>
     </div>
     <div
        v-if="loading && characters.length > 0"
        class="flex items-center justify-center gap-3 py-6 text-zinc-400"
        >
        <div class="h-6 w-6 animate-spin rounded-full border-2 border-zinc-700 border-t-green-400"></div>
        <span>Cargando más...</span>
     </div>
    </main>
  </template>

<style>

</style>