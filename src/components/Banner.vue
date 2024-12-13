<script setup lang="ts">
import Button from './Button.vue'
</script>
<template>
    <section class="banner border-b border-white">
        <div class="container mx-auto">
            <div class="lg:flex lg:justify-between">
                <div class="lg:w-6/12 py-20 pr-4 lg:border-r border-white">
                    <h1>RareBits</h1>
                    <div class="img-container rounded-lg">
                        <img src="/src/assets/img/banner-bird.png" alt="Bird" width="394" height="591" />
                    </div>
                </div>
                <div class="lg:w-6/12 py-20 pl-16">
                    <div class="banner-heading pb-20">
                        <h2>Unleash the <span class="pink">power</span> of digital creativity: Explore the world of <span class="pink">unique</span> NFTS.</h2>
                    </div>     
                    <div class="banner-copy mb-14 pt-10">
                        <p>Discover, Collect, and Trade rare digital assets that showcase the boundless potential of the blockchain.</p>
                    </div>
                    <Button text="View Collections" link="/some-url"></Button>
                </div>  
            </div>
        </div>
    </section>
</template>