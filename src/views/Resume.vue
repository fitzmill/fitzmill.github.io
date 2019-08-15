<template>
  <div class="uk-container">
    <div uk-grid>
      <div>
        <img id="profile-photo" class="uk-align-center" :data-src="profilePhoto" width="200" height="170" alt="" uk-img />
      </div>
      <div class="uk-width-expand@s uk-flex uk-flex-middle uk-text-center">
        <h2>Sean Fitzgerald</h2>
      </div>
    </div>
    <ul class="uk-list" uk-accordion="multiple: true">
      <li>
        <a class="uk-accordion-title" href="#">Education</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Education />
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Experience</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Experience />
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Involvement</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Involvement />
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Awards</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Awards />
        </div>
      </li>
    </ul>
    <button id="pdf-btn" class="uk-button uk-align-center uk-margin-bottom" onclick="location.href = 'https://drive.google.com/uc?export=download&id=1d6hK7qzcaAAYWMVmyGfheMmOf_KX18em'">PDF</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Involvement from '../components/Involvement.vue';
import Awards from '../components/Awards.vue';

@Component({
  components: {
    Education,
    Experience,
    Involvement,
    Awards
  }
})
export default class Resume extends Vue {
  private profilePhoto = require('../assets/profile-photo.jpeg');
}
</script>

<style lang="less" scoped>
  #profile-photo {
    margin-bottom: 0px;
    border-radius: 100px;
    border: 2px rgb(56, 138, 54) solid;
  }

  #pdf-btn {
    background-color: rgb(56, 138, 54);
    color: white;
  }

  .section {
    background-color: rgb(46, 46, 46);
    padding: 20px;
    border-radius: 1ch;
  }
</style>
