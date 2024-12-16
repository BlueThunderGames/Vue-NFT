<script setup lang="ts">
import FaqItem from './FaqItem.vue';

const faqs  = 
[
    {
        id: 1,
        question: 'How do I <span class="pink">buy</span> an NFT?',
        answer: 'Buying an NFT is simple! Just browse our marketplace, find the NFT you love, and click on it to view the details. If it\'s available for sale, you can proceed to purchase it using cryptocurrency.'
    },
    {
        id: 2,
        question: 'What happens <span class="pink">after</span> I purchase an NFT?',
        answer: 'After purchasing an NFT, it will be securely stored in your digital wallet within our platform. You can choose to keep it as a digital collectible, showcase it in your profile, or even resell it on our marketplace.'
    },
    {
        id: 3,
        question: 'How can I ensure the <span class="pink">authenticity</span> of an NFT?',
        answer: 'After purchasing an NFT, it will be securely stored in your digital wallet within our platform. You can choose to keep it as a digital collectible, showcase it in your profile, or even resell it on our marketplace.'
    },
    {
        id: 4,
        question: 'Can I <span class="pink">sell</span> my own NFTs on your platform?',
        answer: 'Absolutely! We welcome creators to showcase and sell their own NFTs on our platform. Simply create an account, upload your digital creations, set the price, and list them for sale. It\'s an opportunity to share your talent and connect with a vibrant community of collectors.'
    },
    {
        id: 5,
        question: 'What happens if I <span class="pink">lose</span> access to my digital wallet?',
        answer: 'We strongly recommend safeguarding your digital wallet credentials. However, in the unfortunate event of losing access, our support team is here to assist you. Please reach out to our customer support, providing relevant information, and we\'ll guide you through the recovery process.'
    }
];
</script>
<template>
    <section class="faqs-container pt-3 xl:pt-6">
        <FaqItem 
            v-for="faq in faqs" 
            :key="faq.question" 
            :faq="faq"
        >
        </FaqItem>
    </section>
</template>