<script setup lang="ts">
const props = defineProps({
    faq: {
        id: Number,
        question: String,
        answer: String
    }
})
</script>
<template>
    <div class="faq-item border-b border-white py-10 xl:py-14">
        <div class="container mx-auto">
            <div class="lg:flex lg:justify-between">
                <div class="lg:w-6/12 lg:pr-12 xl:pr-24">
                    <h4 v-html="faq.question" class="mb-4 lg:mb-0 lg:max-w-[504px]"></h4>
                </div>
                <div class="lg:w-5/12 lg:pl-12 xl:pl-24">
                    <p>{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>