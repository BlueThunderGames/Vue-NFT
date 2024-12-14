<script setup lang="ts">
import Button from './Button.vue'
</script>
<template>
    <section class="banner border-b border-white" id="home">
        <div class="container mx-auto">
            <div class="lg:flex lg:justify-between">
                <div class="lg:w-6/12 pt-10 pb-10  lg:pt-20 lg:pb-20 lg:pr-4 lg:border-r border-white">
                    <h1>RareBits</h1>
                    <div class="img-container rounded-lg mx-auto relative grow-0 shrink-0 w-[651px] h-[651px]">
                        <img src="/src/assets/img/banner-bird.png" class="absolute bottom-0 left-[50%] transform translate-x-[-50%]" alt="Bird" width="394" height="591" />
                    </div>
                </div>
                <div class="lg:w-6/12 pt-6 pb-10 lg:py-20 lg:pl-8 xl:pl-16">
                    <div class="banner-heading xl:pb-20">
                        <h2>Unleash the <span class="pink">power</span> of digital creativity: Explore the world of <span class="pink">unique</span> NFTS.</h2>
                    </div>     
                    <div class="banner-copy mb-14 pt-10">
                        <p class="larger-text">Discover, Collect, and Trade rare digital assets that showcase the boundless potential of the blockchain.</p>
                    </div>
                    <Button text="View Collections" link="/some-url"></Button>
                </div>  
            </div>
        </div>
    </section>
</template>