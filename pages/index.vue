<template>
  <section class="container">
    <h1>TOP</h1>
    <ul>
      <li><nuxt-link to="users/1">USER 1</nuxt-link></li>
      <li><nuxt-link to="users/2">USER 2</nuxt-link></li>
      <li><nuxt-link to="users/3">USER 3</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
import common from '~/assets/js/common'

export default {
  components: {
  },
  head () {
    return {
      titleTemplate: null,
    }
  },
  mounted() {
    common()
  },
}
</script>
