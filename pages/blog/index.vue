<template>
    <main class="py-16 page-wrapper lg:py-20">
        <section class="text-center">
            <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The Profitable Studio Blog
            </h1>
            <!-- <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
                atque, ducimus sed.
            </p> -->
        </section>
        <section class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <post-list
                v-for="post in posts"
                :key="post.content.title"
                :slug="`/blog/${post.slug}`"
                :title="post.content.title"
                :main-image="post.content.main_image.filename"
                :excerpt="post.content.excerpt"
                :author="post.content.author"
                :published-date="post.content.date.toLocaleDateString()"
            ></post-list>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ app }) {
        const res = await app.$storyapi.get('cdn/stories', {
            starts_with: 'blog/',
            resolve_relations: 'author',
        })

        // Convert content.date from a string to date
        const posts = res.data.stories.map((story) => {
            story.content.date = new Date(story.content.date)
            return story
        })

        return { posts }
    },
    head: {
        title: "Blog | Nicole D'Andrea Consulting",
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Home page description',
            },
        ],
    },
}
</script>
