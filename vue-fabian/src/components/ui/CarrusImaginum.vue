<script setup lang="ts">
    import { Card, CardContent } from '@/components/ui/card'
    import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from '@/components/ui/carousel'
    import Autoplay from 'embla-carousel-autoplay'

    interface Propts {
        photos: string[],
        basePath: string,
        autoplayDelay?: number,
        loop?: boolean,
        dragFree?: boolean,
    }

    const propts = withDefaults(defineProps <Propts>(), {
        autoplayDelay: 2000,
        loop: true,
        dragFree: true,
    })

</script>

<template>
    <Carousel 
            class="bg-gray-900 w-full max-w-md md:max-w-2xl lg:max-w-4xl"
            :opts="{
                loop: propts.loop,
                dragFree: propts.dragFree,
            }"
            :plugins="[Autoplay({ delay: propts.autoplayDelay })]"
            >
                <CarouselContent >
                <CarouselItem v-for="(photo, index) in propts.photos" :key="index">
                    <div class="p-1">
                    <Card class="bg-gray-900 border-none ">
                        <CardContent class="bg-gray-900 flex aspect-6/4 items-center justify-center p-6">
                        <img
                        :src="`${propts.basePath}/${photo}.jpg`" 
                        :alt="`Imagen ${ photo } de Batman` "
                        class="w-full h-full object-cover"
                        >
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                </CarouselContent>

                <CarouselPrevious class="bg-gray-900 text-white hidden md:flex justify-center items-center" />
                <CarouselNext class="bg-gray-900 text-white hidden md:flex justify-center items-center align-middle " />
            </Carousel>
</template>

<style scoped>

</style>