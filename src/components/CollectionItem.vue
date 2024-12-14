<script setup lang="ts">
const props = defineProps({
    collection: 
    {
        title: String,
        author: String,
        image: String
    }
})
</script>
<template>
    <div class="collection-item lg:w-[24%]">
        <div class="item-inner">
            <p class="font-mont uppercase">
                {{ collection.title }}
            </p>
            <p>by <a href="#" class="pink font-bold">{{ collection.author }}</a></p>
            <div class="collection-thumb" :style="{ backgroundImage: `url(/src/assets/img/${collection.image})` }"></div>
        </div>
    </div>
</template>