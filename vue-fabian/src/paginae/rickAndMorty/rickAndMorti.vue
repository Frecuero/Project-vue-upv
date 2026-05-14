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
      class="flex gap-8 items-center flex-col bg-black min-h-screen text-white text-[0.8rem] relative p-8"
    >
      <header class="flex justify-center w-full h-[20vh]">
        <img :src="logo" />
      </header>
  
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 w-full max-w-7xl">
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
    </main>
  </template>

<style>

</style>