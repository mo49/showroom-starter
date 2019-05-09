<template>
  <div class="wrapper" v-cloak>
    <common-header/>
    <nuxt/>
    <common-footer/>
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader'
import CommonFooter from '~/components/CommonFooter'
export default {
  components: {
    CommonHeader,
    CommonFooter,
  }
}
</script>
