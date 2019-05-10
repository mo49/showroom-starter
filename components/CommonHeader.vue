<template>
  <header class="header">
    <nuxt-link :to="{name: 'index'}">
      <h1 class="header__logo">header logo</h1>
    </nuxt-link>
  </header>
</template>

<style lang="scss">
@import "~assets/sass/module/header";
.header__logo{
  background-image: url("~assets/image/common/logo.png");
}
</style>
