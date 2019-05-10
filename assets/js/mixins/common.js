import UA from '~/assets/js/util/UA'

export default {
  mounted() {
    const ua = new UA()
    console.log(ua.info)
  },
}
