<script setup lang="ts">
const { collection } = defineProps<{
  collection: {
    title: string;
    author: string;
    image: string;
  };
}>();

const imagePath = new URL(`/src/assets/img/${collection.image}`, import.meta.url).href;
</script>
<template>
    <div class="collection-item lg:w-[23%] max-lg:w-[50%] max-md:w-[100%] max-lg:mr-auto max-lg:ml-auto max-lg:mb-12 border-t border-white pt-8" data-aos="fade-up" data-aos-offset="200">
        <div class="item-inner">
            <div class="item-title w-[190px] m-width-100 mb-2">
                <p class="font-mont uppercase larger-text">
                {{ collection.title }}
                </p>
            </div>
            <div class="item-author mb-4">
                <p>by <a href="#" class="pink font-bold">{{ collection.author }}</a></p>
            </div>
            <div class="collection-thumb h-[300px] max-lg:h-[400px] max-md:h-[350px]" :style="{ backgroundImage: `url(${imagePath})` }"></div>
        </div>
    </div>
</template>