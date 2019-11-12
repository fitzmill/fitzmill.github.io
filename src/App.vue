<template>
  <div id="root" class="uk-light uk-background-secondary uk-overflow-auto">
    <nav id="nav" class="uk-navbar-container uk-margin-bottom" uk-navbar>
      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><a href="#">Resume</a></li>
          <li><a href="https://myanimelist.net/animelist/falldownrunning">
            MyAnimeList
          </a></li>
          <li><a href="https://www.github.com/fitzmill">
            <span class="uk-icon" uk-icon="icon: github"></span>
          </a></li>
          <li><a href="https://www.linkedin.com/in/sean-fitzgerald-66b14b127/">
            <span class="uk-icon" uk-icon="icon: linkedin"></span>
          </a></li>
        </ul>
      </div>
    </nav>
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

