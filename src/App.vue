<template>
  <div id="root" class="uk-light uk-background-secondary uk-overflow-auto">
    <!-- <nav id="nav" class="uk-navbar-container uk-margin-bottom" uk-navbar>
      <div class="uk-navbar-center">
        
      </div>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="less">
  html, body, #root {
    height: 100%;
  }
  #nav {
    background-color: #333;
  }
</style>

