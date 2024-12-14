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
    <div class="faq-item border-b border-white py-10">
        <div class="container mx-auto">
            <div class="lg:flex lg:justify-between">
                <div class="lg:w-6/12">
                    <h4 v-html="faq.question" class="lg: max-w-[504px]"></h4>
                </div>
                <div class="lg:w-6/12">
                    <p>{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>