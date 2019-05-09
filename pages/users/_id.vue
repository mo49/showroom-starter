<template>
  <section class="container">
    <h1>welcome, user {{ $route.params.id }}</h1>
  </section>
</template>

<script>
export default {
  components: {
  },
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>
