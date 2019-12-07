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
      <li id="education-section">
        <a class="uk-accordion-title" href="#">Education {{educationShown ? '-' : '+'}}</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Education v-if="educationShown" />
        </div>
      </li>
      <li id="experience-section">
        <a class="uk-accordion-title" href="#">Experience {{experienceShown ? '-' : '+'}}</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Experience v-if="experienceShown" />
        </div>
      </li>
      <li id="involvement-section">
        <a class="uk-accordion-title" href="#">Involvement {{involvementShown ? '-' : '+'}}</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Involvement v-if="involvementShown" />
        </div>
      </li>
      <li id="awards-section">
        <a class="uk-accordion-title" href="#">Awards {{awardsShown ? '-' : '+'}}</a>
        <hr class="uk-divider-small uk-margin-remove" />
        <div class="uk-accordion-content section">
          <Awards v-if="awardsShown" />
        </div>
      </li>
    </ul>
    <button id="pdf-btn" class="uk-button uk-align-center uk-margin-bottom" onclick="location.href = 'https://drive.google.com/uc?export=download&id=1d6hK7qzcaAAYWMVmyGfheMmOf_KX18em'">PDF</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import UIkit from 'uikit/dist/js/uikit-core.min.js';

@Component({
  components: {
    Education: () => import('../components/Education.vue'),
    Experience: () => import('../components/Experience.vue'),
    Involvement: () => import('../components/Involvement.vue'),
    Awards: () => import('../components/Awards.vue')
  }
})
export default class Resume extends Vue {
  private profilePhoto = require('../assets/profile-photo.jpeg');

  private educationShown: boolean = false;
  private experienceShown: boolean = false;
  private involvementShown: boolean = false;
  private awardsShown: boolean = false;

  private mounted() {
    UIkit.util.on('#education-section', 'beforeshow', () => {
      this.educationShown = true;
    });
    UIkit.util.on('#education-section', 'beforehide', () => {
      this.educationShown = false;
    });
    UIkit.util.on('#experience-section', 'beforeshow', () => {
      this.experienceShown = true;
    });
    UIkit.util.on('#experience-section', 'beforehide', () => {
      this.experienceShown = false;
    });
    UIkit.util.on('#involvement-section', 'beforeshow', () => {
      this.involvementShown = true;
    });
    UIkit.util.on('#involvement-section', 'beforehide', () => {
      this.involvementShown = false;
    });
    UIkit.util.on('#awards-section', 'beforeshow', () => {
      this.awardsShown = true;
    });
    UIkit.util.on('#awards-section', 'beforehide', () => {
      this.awardsShown = false;
    });
  }
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
