<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

const activeSection = ref('home');
const isMenuOpen = ref(false);

const navigateTo = (sectionId: string) => {
    
    const section = document.getElementById(sectionId);
    
    if(section) 
    {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const sections = ['home', 'collections', 'about', 'faqs'];
let observer: IntersectionObserver;

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            activeSection.value = entry.target.id;
        }
    });
}

onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    });

    sections.forEach(section => {
        const element = document.getElementById(section);
        if(element)
        {
            observer.observe(element);
        }
    });
});

onUnmounted(() => {
    if(observer) 
    {
        observer.disconnect();
    }   
});
</script>
<template>
    <header class="border-b border-gray-200 fixed w-full z-50 top-0">
        <div class="container mx-auto justify-between flex items-center py-4 flex-wrap">
            <div class="logo-wrapper w-3/12">
                <a 
                    href="#home" 
                    class="logo"
                    aria-label="Go Home"
                    @click.prevent="navigateTo('home')"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10.8644 9.56672C11.166 9.86716 11.5743 10.0359 12 10.0359C12.4257 10.0359 12.834 9.86716 13.1356 9.56672L16.5479 6.15434C16.8487 5.85271 17.0175 5.44412 17.0175 5.01815C17.0175 4.59218 16.8487 4.1836 16.5479 3.88196L13.1356 0.469585C12.8342 0.168875 12.4258 0 12 0C11.5742 0 11.1658 0.168875 10.8644 0.469585L7.45211 3.88196C7.15135 4.1836 6.98245 4.59218 6.98245 5.01815C6.98245 5.44412 7.15135 5.85271 7.45211 6.15434L10.8644 9.56672ZM8.37827 4.80815L11.7895 1.39577C11.8454 1.34021 11.9211 1.30903 12 1.30903C12.0789 1.30903 12.1546 1.34021 12.2105 1.39577L15.6217 4.80815C15.6495 4.83564 15.6715 4.86835 15.6865 4.90439C15.7015 4.94043 15.7093 4.9791 15.7093 5.01815C15.7093 5.0572 15.7015 5.09587 15.6865 5.13191C15.6715 5.16796 15.6495 5.20066 15.6217 5.22815L12.2105 8.64053C12.1546 8.69609 12.0789 8.72727 12 8.72727C11.9211 8.72727 11.8454 8.69609 11.7895 8.64053L8.37827 5.22815C8.35054 5.20066 8.32852 5.16796 8.31349 5.13191C8.29846 5.09587 8.29073 5.0572 8.29073 5.01815C8.29073 4.9791 8.29846 4.94043 8.31349 4.90439C8.32852 4.86835 8.35054 4.83564 8.37827 4.80815ZM23.5295 10.8649L20.1173 7.45253C19.8158 7.15182 19.4074 6.98294 18.9816 6.98294C18.5559 6.98294 18.1475 7.15182 17.846 7.45253L14.4338 10.8649C14.1331 11.1664 13.9642 11.5748 13.9642 12.0005C13.9642 12.4263 14.1331 12.8347 14.4338 13.1362L17.846 16.5486C18.1475 16.8496 18.5561 17.0187 18.9822 17.0187C19.4082 17.0187 19.8169 16.8496 20.1183 16.5486L23.5295 13.1362C23.6787 12.9871 23.797 12.81 23.8777 12.6152C23.9585 12.4203 24 12.2115 24 12.0005C24 11.7896 23.9585 11.5808 23.8777 11.3859C23.797 11.1911 23.6787 11.014 23.5295 10.8649ZM22.6045 12.2111L19.1922 15.6224C19.1647 15.6501 19.132 15.6721 19.0959 15.6872C19.0599 15.7022 19.0212 15.7099 18.9822 15.7099C18.9431 15.7099 18.9045 15.7022 18.8684 15.6872C18.8324 15.6721 18.7997 15.6501 18.7722 15.6224L15.3599 12.2111C15.3044 12.1551 15.2732 12.0794 15.2732 12.0005C15.2732 11.9217 15.3044 11.846 15.3599 11.79L18.7722 8.37871C18.7998 8.3511 18.8325 8.3292 18.8685 8.31426C18.9046 8.29931 18.9432 8.29162 18.9822 8.29162C19.0212 8.29162 19.0598 8.29931 19.0959 8.31426C19.1319 8.3292 19.1646 8.3511 19.1922 8.37871L22.6045 11.7911C22.6597 11.847 22.6907 11.9225 22.6907 12.0011C22.6907 12.0797 22.6597 12.1551 22.6045 12.2111ZM9.56624 10.8649L6.15397 7.45253C5.85234 7.15175 5.44377 6.98285 5.01781 6.98285C4.59186 6.98285 4.18328 7.15175 3.88166 7.45253L0.470473 10.8649C0.321317 11.014 0.202998 11.1911 0.122273 11.3859C0.0415488 11.5808 0 11.7896 0 12.0005C0 12.2115 0.0415488 12.4203 0.122273 12.6152C0.202998 12.81 0.321317 12.9871 0.470473 13.1362L3.88166 16.5486C4.18296 16.8495 4.5914 17.0186 5.01727 17.0186C5.44313 17.0186 5.85158 16.8495 6.15287 16.5486L9.56515 13.1362C9.866 12.8349 10.0351 12.4266 10.0353 12.0008C10.0355 11.575 9.8668 11.1665 9.56624 10.8649ZM8.64008 12.2111L5.22781 15.6224C5.20032 15.6501 5.16761 15.6721 5.13157 15.6872C5.09553 15.7022 5.05686 15.7099 5.01781 15.7099C4.97876 15.7099 4.9401 15.7022 4.90406 15.6872C4.86801 15.6721 4.8353 15.6501 4.80782 15.6224L1.39554 12.2111C1.33998 12.1551 1.30881 12.0794 1.30881 12.0005C1.30881 11.9217 1.33998 11.846 1.39554 11.79L4.80782 8.37871C4.83538 8.3511 4.86811 8.3292 4.90414 8.31426C4.94018 8.29931 4.9788 8.29162 5.01781 8.29162C5.05682 8.29162 5.09545 8.29931 5.13148 8.31426C5.16751 8.3292 5.20025 8.3511 5.22781 8.37871L8.64008 11.79C8.69564 11.846 8.72682 11.9217 8.72682 12.0005C8.72682 12.0794 8.69564 12.1551 8.64008 12.2111ZM13.1356 14.4344C12.8342 14.1337 12.4258 13.9648 12 13.9648C11.5742 13.9648 11.1658 14.1337 10.8644 14.4344L7.45211 17.8468C7.15141 18.1482 6.98254 18.5566 6.98254 18.9824C6.98254 19.4082 7.15141 19.8166 7.45211 20.118L10.8644 23.5304C11.1658 23.8311 11.5742 24 12 24C12.4258 24 12.8342 23.8311 13.1356 23.5304L16.5479 20.118C16.8486 19.8166 17.0175 19.4082 17.0175 18.9824C17.0175 18.5566 16.8486 18.1482 16.5479 17.8468L13.1356 14.4344ZM15.6217 19.1929L12.2105 22.6053C12.1546 22.6609 12.0789 22.6921 12 22.6921C11.9211 22.6921 11.8454 22.6609 11.7895 22.6053L8.37827 19.1929C8.35054 19.1655 8.32852 19.1327 8.31349 19.0967C8.29846 19.0607 8.29073 19.022 8.29073 18.9829C8.29073 18.9439 8.29846 18.9052 8.31349 18.8692C8.32852 18.8331 8.35054 18.8004 8.37827 18.7729L11.7895 15.3606C11.8454 15.305 11.9211 15.2738 12 15.2738C12.0789 15.2738 12.1546 15.305 12.2105 15.3606L15.6217 18.7729C15.6495 18.8004 15.6715 18.8331 15.6865 18.8692C15.7015 18.9052 15.7093 18.9439 15.7093 18.9829C15.7093 19.022 15.7015 19.0607 15.6865 19.0967C15.6715 19.1327 15.6495 19.1655 15.6217 19.1929Z" fill="white"/>
                    </svg>
                </a>
            </div>
            <div class="nav-wrapper w-6/12 lg:text-center flex justify-end lg:justify-center">
                <button 
                    class="hamburger lg:hidden inline"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav class="hidden lg:block">
                    <ul class="flex justify-center text-white gap-6">
                        <li>
                            <a 
                                href="#home" 
                                :class="{ 'active': activeSection === 'home' }"
                                @click.prevent="navigateTo('home')"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#collections"
                                :class="{ 'active': activeSection === 'collections' }"
                                @click.prevent="navigateTo('collections')"
                            >
                                Our Collections
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about"
                                :class="{ 'active': activeSection === 'about' }"
                                @click.prevent="navigateTo('about')"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#faqs"
                                :class="{ 'active': activeSection === 'faqs' }"
                                @click.prevent="navigateTo('faqs')"
                            >
                                FAQ's
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="cta-wrapper w-3/12 text-right hidden lg:block">
                <a 
                    href="#contact" 
                    class="btn inline-block relative"
                    @click.prevent="navigateTo('contact')"
                >
                    <span>Join Us</span>
                    <span class="diamond">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.535 3.25C6.24685 3.25009 5.96318 3.32134 5.70918 3.45741C5.45518 3.59348 5.23872 3.79017 5.079 4.03L1.49 9.412C1.271 9.742 1.245 10.164 1.422 10.518C3.38609 14.4461 6.11556 17.9419 9.45 20.8L11.2 22.301C11.4229 22.4921 11.7069 22.5971 12.0005 22.5971C12.2941 22.5971 12.5781 22.4921 12.801 22.301L14.551 20.801C17.8859 17.9427 20.6158 14.4465 22.58 10.518C22.757 10.164 22.73 9.742 22.511 9.412L18.92 4.03C18.7603 3.79049 18.5439 3.59409 18.2901 3.4582C18.0363 3.32232 17.7529 3.25115 17.465 3.251L6.535 3.25ZM6.327 4.861C6.34986 4.82682 6.38081 4.7988 6.41709 4.77944C6.45337 4.76008 6.49387 4.74997 6.535 4.75H8.875L6.96 9.346C6.91613 9.45115 6.88264 9.56034 6.86 9.672C6.15574 9.61942 5.45232 9.55608 4.75 9.482L3.345 9.335L6.327 4.861ZM3.28 10.836C5.0744 14.1281 7.44301 17.0727 10.274 19.531L7.149 11.197C6.29639 11.1384 5.44492 11.0644 4.595 10.975L3.28 10.836ZM8.786 11.29L12 19.864L15.215 11.29C13.0728 11.3874 10.9272 11.3874 8.785 11.29H8.786ZM16.853 11.197L13.728 19.531C16.559 17.0727 18.9276 14.1281 20.722 10.836L19.407 10.975C18.557 11.064 17.706 11.138 16.853 11.197ZM20.656 9.335L19.25 9.483C18.5477 9.55709 17.8443 9.62043 17.14 9.673C17.1178 9.56103 17.0846 9.4515 17.041 9.346L15.125 4.75H17.465C17.5061 4.74997 17.5466 4.76008 17.5829 4.77944C17.6192 4.7988 17.6501 4.82682 17.673 4.861L20.656 9.335ZM15.593 9.77C13.2 9.894 10.803 9.894 8.409 9.77L10.5 4.75H13.5L15.592 9.77H15.593Z" fill="white"/>
                        </svg>
                    </span>
                </a>
            </div>  
            <div class="mobile-menu-wrapper w-full py-4 lg:hidden" v-if="isMenuOpen">
                <nav>
                    <ul class="text-white">
                        <li>
                            <a 
                                href="#home" 
                                :class="['py-2', 'block', 'border-b', 'border-theme-pink', { 'active': activeSection === 'home' }]"
                                @click.prevent="navigateTo('home')"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#collections"
                                :class="['py-2', 'block', 'border-b', 'border-theme-pink',{ 'active': activeSection === 'collections' }]"
                                @click.prevent="navigateTo('collections')"
                            >
                                Our Collections
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about"
                                :class="['py-2', 'block', 'border-b', 'border-theme-pink',{ 'active': activeSection === 'about' }]"
                                @click.prevent="navigateTo('about')"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#faqs"
                                :class="['py-2', 'block', 'border-b', 'border-theme-pink', { 'active': activeSection === 'faqs' }]"
                                @click.prevent="navigateTo('faqs')"
                            >
                                FAQ's
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>