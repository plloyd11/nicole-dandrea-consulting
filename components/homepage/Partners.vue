<template>
  <div>
    <div class="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2
            class="mt-4 mb-8 text-3xl font-medium leading-8 tracking-tight text-gray-900  sm:text-5xl sm:leading-10"
          >
            Partners
          </h2>
          <div class="mt-6 grid grid-cols-2 gap-0.5 lg:grid-cols-2 lg:mt-8">
            <div
              v-for="logo in logos"
              :key="logo"
              class="flex justify-center col-span-1 px-8 py-8 bg-gray-50"
            >
              <img :src="logo.src" :alt="logo.name" class="max-h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          src: 'clients/wlct.png',
          name: 'Breathe Together Yoga',
        },
        {
          src: 'clients/mindbody.png',
          name: 'Earth Aerial Yoga',
        },
        {
          src: 'clients/walla.png',
          name: 'Carolina Yoga Company',
        },
        {
          src: 'clients/wellness-living.svg',
          name: 'Honor Yoga',
        },
      ],
    };
  },
};
</script>
