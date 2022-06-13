<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Gallery
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <!--  <ImageModal :images-prop="imageUrl" /> -->
        <div>
          <p class="max-w-2xl mx-auto text-center">
            Our team will update the Gallery once it is available. Stay tune!
          </p>
          <br><br>
          <img
          src="~assets/img/coming-soon.png"
         alt="Coming Soon"
          class="mx-auto"
        />
        </div>
        
        <section class="py-6">
          <NuxtLink
            to="/video"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-brown-900
              bg-brown-700
            "
          >
            Continue To The Dunman Residences Video
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13 6l6 6-6 6M5 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg>
              </NuxtLink>
        </section>
        </div>
    </section>
    <BookAppointment />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: [
        { url: 'The-Lilium-Perspective-1-1024x504.jpg' }, 
        { url: 'The-Lilium-Perspective-2-1024x456.jpg' },
        { url: 'The-Lilium-Perspective-3-1024x366.jpg' }, 
        { url: 'The-Lilium-Perspective-4-1024x456.jpg' },
        { url: 'The-Lilium-Perspective-5-1024x456.jpg' }, 
        { url: 'The-Lilium-Perspective-6-1024x456.jpg' }, 
      ],
    }
  },
}
</script>
