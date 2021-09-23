<template>
    <header role="banner" class="relative z-50 bg-white shadow-md">
        <div
            class="flex items-center justify-between px-4 py-4 mx-auto sm:py-6 sm:px-6 lg:justify-start"
        >
            <div class="lg:w-0 lg:flex-1">
                <a href="/" class="flex">
                    <img
                        src="~/assets/img/logos/logo.png"
                        alt="Nicole D'Andrea Consulting Logo"
                        width="250"
                        height="58"
                        class="w-40 lg:w-64"
                    />
                </a>
            </div>
            <div class="lg:hidden">
                <button
                    v-on-clickaway="closeMobileMenu"
                    type="button"
                    class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-headerDark hover:text-bodyCopyDark hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-bodyCopyDark"
                    @click="mobileMenu = !mobileMenu"
                >
                    <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <nav class="hidden lg:flex" aria-label="Primary Navigation">
                <div class="flex items-center space-x-6 text-lg">
                    <nuxt-link v-for="item in items" :key="item.text" :to="item.url">
                        {{ item.text }}
                    </nuxt-link>
                    <a href="https://studionomicspodcast.com/" target="_blank" rel="noopener"
                        >Podcast</a
                    >
                </div>
            </nav>
        </div>

        <!-- Mobile menu -->
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <div
                v-show="mobileMenu"
                class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
            >
                <div class="rounded-lg shadow-lg">
                    <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
                        <div class="px-5 pt-5 pb-6 space-y-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <img
                                        class="w-auto h-10"
                                        src="~/assets/img/logos/logo.png"
                                        alt="Nicole D'Andrea Consulting Logo"
                                    />
                                </div>
                                <div class="-mr-2">
                                    <button
                                        type="button"
                                        class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-bodyCopyDark hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-bodyCopyDark"
                                        @click="mobileMenu = !mobileMenu"
                                    >
                                        <!-- Heroicon name: x -->
                                        <svg
                                            class="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <nav class="grid grid-cols-1 gap-7">
                                    <div
                                        class="flex flex-col items-start space-y-6 text-lg lg:space-y-0 lg:space-x-6"
                                    >
                                        <nuxt-link
                                            v-for="item in items"
                                            :key="item.text"
                                            :to="item.url"
                                        >
                                            {{ item.text }}
                                        </nuxt-link>
                                        <a
                                            href="https://studionomicspodcast.com/"
                                            target="_blank"
                                            rel="noopener"
                                            >Podcast</a
                                        >
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </header>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
    mixins: [clickaway],
    data() {
        return {
            mobileMenu: false,
            items: [
                {
                    text: 'Services',
                    url: '/#services',
                },
                {
                    text: 'About Nicole',
                    url: '/#about',
                },
                {
                    text: 'Testimonials',
                    url: '/#testimonials',
                },
                {
                    text: 'Blog',
                    url: '/blog',
                },
                {
                    text: 'Freebies',
                    url: '/#freebies',
                },
                {
                    text: 'Contact',
                    url: '/#contact',
                },
            ],
        }
    },
    methods: {
        closeMobileMenu() {
            this.mobileMenu = false
        },
    },
}
</script>
