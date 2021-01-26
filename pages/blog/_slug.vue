<template>
    <div class="py-16 pl-4 pr-4 mx-auto lg:pl-0 lg:pr-0 lg:py-24 max-w-prose">
        <header class="space-y-6">
            <h1 class="text-5xl">{{ post.content.title }}</h1>
            <div class="flex items-center">
                <img
                    class="w-16 h-16 border rounded-full border-secondaryColor"
                    :src="author.content.avatar.filename"
                    :alt="author.content.name"
                />
                <div class="ml-6">
                    <p class="text-xl font-bold">{{ author.name }}</p>
                    <p class="mt-1 text-sm">
                        Posted On: {{ post.content.date.toLocaleDateString() }}
                    </p>
                </div>
            </div>
            <div>
                <img
                    class="blog-main-image"
                    :src="post.content.main_image.filename"
                    :alt="post.content.main_image.alt"
                />
            </div>
        </header>
        <div class="mt-10 prose-lg text-gray-800" v-html="$md.render(post.content.content)">
            <article class="">
                {{ post.content.content }}
            </article>
        </div>
        <div class="mt-12">
            <Disqus />
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ app, route, error }) {
        const slug = route.params.slug

        const res = await app.$storyapi.get('cdn/stories', {
            starts_with: 'blog/',
            by_slugs: '*/' + slug,
            resolve_relations: 'author',
        })

        const post = res.data.stories[0]
        if (!post) {
            return error(`Post with slug ${slug} not found!`)
        }
        post.content.date = new Date(post.content.date)

        return { post, author: post.content.author }
    },
    head() {
        return {
            title: `${this.post.content.title} | Nicole D'Andrea Consulting`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.content.excerpt,
                    image: this.post.content.main_image.filename,
                },
            ],
        }
    },
}
</script>

<style scoped>
@media (min-width: 1024px) {
    .blog-main-image {
        max-width: max-content;
        width: 900px;
        position: relative;
        left: -8rem;
    }
}
</style>
