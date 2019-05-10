<template>
  <section class="container">
    <h1>welcome, user {{ $route.params.id }}</h1>
  </section>
</template>

<script>
import Meta from '~/assets/js/mixins/meta'
import common from '~/assets/js/common'

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
  mounted() {
    common()
  }
}
</script>
