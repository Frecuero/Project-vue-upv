<script setup lang="ts">
    import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="bg-[rgb(21,25,52)] h-screen text-white font-sans text-center w-screen flex flex-col justify-center items-center gap-12 fixed overflow-hidden">

        <img class="absolute opacity-20" src="/public/imagines/tonitrui.png" alt="">

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-5 md:pb-20 z-10 transition-all">
            <span class="text-[rgb(24,182,246)]">Diseño</span> Web y
            <br>
            Apps <span class="text-[rgb(24,182,246)]">Interactivas</span>
        </h1>

        <p class="text-lg md:text-2xl transition-all"> 
            Aprendiendo a crear aplicaciones web 
        </p>

        <div class="z-10">
            <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,246,0.7)] transition-all">
                <RouterLink to="/indecision">Si o no</RouterLink>
            </Button>

            <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,246,0.7)] transition-all">
                <RouterLink to="/batman">Batman</RouterLink>
            </Button>

            <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,246,0.7)] transition-all">
                <RouterLink to="/simpsons">Simpsons</RouterLink>
            </Button>

            <Button class="bg-[rgb(24,182,246)] mr-2 md:py-5 md:px-6 md:text-lg hover:bg-[rgba(24,182,246,0.7)] transition-all">
                <a href="https://www.upv.es">UPV</a>
            </Button>
        </div>
    </div>
</template>

<style scoped> </style>