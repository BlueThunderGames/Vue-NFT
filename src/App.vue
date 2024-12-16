<script setup lang="ts">
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import ScrollyHeading from './components/ScrollyHeading.vue';
import Collections from './components/Collections.vue';
import Introduction from './components/Introduction.vue';
import Creations from './components/Creations.vue';
import FAQs from './components/FAQs.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header></Header>
  <Banner></Banner>
  <ScrollyHeading heading="Featured Collections" id="collections"></ScrollyHeading>
  <Collections></Collections>
  <ScrollyHeading heading="A Little Introduction" id="about"></ScrollyHeading>
  <Introduction></Introduction>
  <Creations></Creations>
  <ScrollyHeading heading="Frequently Asked Questions"  id="faqs"></ScrollyHeading>
  <FAQs></FAQs>
  <Footer></Footer>
</template>
