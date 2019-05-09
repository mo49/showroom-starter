<template>
  <section class="container">
    <h1>welcome, user {{ $route.params.id }}</h1>
  </section>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  components: {
  },
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      meta: {
        title: `user page ${this.$nuxt.$route.params.id}`,
        description: `user page ${this.$nuxt.$route.params.id}, description`,
        url: `/${this.$nuxt.$route.params.id}`,
        image: `/${this.$nuxt.$route.params.id}/ogp.jpg`,
      }
    }
  },
}
</script>
