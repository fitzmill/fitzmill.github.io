<template>
  <div class="uk-container" uk-grid>
    <img id="unl-icon" class="uk-visible@s" :data-src="unlIcon" width="180" height="150" alt="" uk-img />
    <div class="uk-width-expand@s">
      <h3 class="uk-margin-remove">Bachelor of Computer Science</h3>
      <h4 class="uk-margin-remove">Minors in Business and Mathematics</h4>
      <div class="uk-margin-bottom"></div>
      <h5 class="uk-margin-remove">Raikes School of Computer Science and Management</h5>
      <p id="raikes-description" class="uk-margin-left uk-margin-bottom">Highly selective honors school that gives students specially crafted courses to create a unique educational experience.</p>
      <h5 class="uk-margin-remove">University of Nebraska-Lincoln</h5>
      <span class="uk-text-bold">GPA: </span>
      <span>4.0</span>
    </div>
    <div>
      <h4 class="uk-margin-right">May 2020</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';

@Component
export default class Education extends Vue {
  private unlIcon = require('../assets/unl-icon.png');
}
</script>

<style lang="less" scoped>
  #unl-icon {
    height: 150px;
    width: 180px;
  }

  #raikes-description {
    margin-top: 0px;
  }
</style>

