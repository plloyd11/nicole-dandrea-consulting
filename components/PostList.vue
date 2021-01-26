<template>
    <article class="relative mx-auto max-w-7xl">
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
                <img class="object-cover w-full h-48" :src="mainImage" :alt="title" />
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                <div class="flex-1">
                    <p class="text-sm font-medium text-primaryColor">
                        <a href="#" class="hover:underline"> Business Strategy </a>
                    </p>
                    <nuxt-link :to="slug" class="block mt-2">
                        <p class="text-xl font-semibold text-gray-900">
                            {{ title }}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                            {{ excerpt }}
                        </p>
                    </nuxt-link>
                </div>
                <div class="flex items-center mt-6">
                    <div class="flex-shrink-0">
                        <a href="#">
                            <span class="sr-only">{{ author.content.name }}</span>
                            <img
                                class="w-10 h-10 rounded-full"
                                :src="author.content.avatar.filename"
                                :alt="author.content.name"
                            />
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline"> {{ author.content.name }} </a>
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2020-03-16"> {{ publishedDate }} </time>
                            <span aria-hidden="true"> &middot; </span>
                            <span> 6 min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        slug: String,
        publishedDate: String,
        excerpt: String,
        author: Object,
        mainImage: String,
    },
}
</script>
