<template>
  <div>
    <div uk-grid>
      <div class="uk-width-expand@s">
        <h3 class="uk-margin-remove">University of Nebraska-Lincoln Dean's List</h3>
        <p class="uk-margin-left">Recognition given to students with a 3.7 GPA or above.</p>
      </div>
      <div class="uk-text-right">
        <h4 class="uk-margin-remove">Fall 2016, 2017, 2018</h4>
        <h4 class="uk-margin-remove">Spring 2017, 2018, 2019</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Awards extends Vue {

}
</script>