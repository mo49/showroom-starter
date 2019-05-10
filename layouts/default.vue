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

<style lang="scss">
*{
  box-sizing: border-box;
  outline: none;
  -webkit-overflow-scrolling: touch; // overflow-scrollのとき慣性スクロール有効
}
html {
  font-family: $sans-serif;
  color: $font-color-desc;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body{
  @include pc-layout{
    font-size: $base-font-size--pc;
    line-height: $base-line-height--pc;
  }
  @include sp-layout{
    font-size: $base-font-size--sp;
    line-height: $base-line-height--sp;
    // 文字を選択コピーしたいときは外す
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

// v-cloak
[v-cloak]{
  display: none;
}
@keyframes cloak-in{
  0%{opacity: 0;}
}
.wrapper{
  animation: cloak-in 1s;
  &[v-cloak]{
    opacity: 0;
  }
  margin: 0 auto;
  @include pc-layout{
    width: $pc_min_width;
  }
  @include sp-layout{
    width: 100%;
  }
}
</style>
