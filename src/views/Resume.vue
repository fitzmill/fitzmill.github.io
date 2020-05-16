<template>
  <div>
    <div id="cover" class="uk-height-viewport uk-width-1-1 uk-position-relative uk-padding">
      <img id="background" :src="background">
      <div id="heading" class="uk-flex uk-flex-center">
        <div>
          <img class="uk-visible@s" :data-src="profilePhoto" width="300" height="255" alt="" uk-img />
        </div>
        <div class="uk-margin-left">
          <div id="name" class="uk-margin-remove-bottom">Sean Fitzgerald</div>
          <ul class="link-list uk-flex-wrap">
            <li><a href="https://www.github.com/fitzmill" class="uk-button uk-button-default">
              GitHub
            </a></li>
            <li><a href="https://www.linkedin.com/in/sean-fitzgerald-66b14b127/" class="uk-button uk-button-default">
              LinkedIn
            </a></li>
            <li><a href="https://myanimelist.net/animelist/falldownrunning" class="uk-button uk-button-default">
              MyAnimeList
            </a></li>
          </ul>
        </div>
      </div>
      <div id="scroll-down">
          <h4 class="down-arrow uk-margin-remove">SCROLL</h4>
          <span class="down-arrow" uk-icon="chevron-down"></span>
      </div>
    </div>
    <div class="uk-container uk-margin-top">
      <h2>About Me</h2>
      <div class="uk-width-1-2@l uk-width-2-3@s">
        <p>
          I'm a full stack developer and general tech enthusiast. I started programming
          in my senior year of high school and spent my time in college trying to learn as
          many new technologies as I could.
        </p>
        <p>
          Most of my enterprise experience is in building websites, but I've tried to learn
          many different JavaScript libraries and databases to keep things fresh. I've dipped my toes in
          Angular, React, KnockoutJS, and VueJS. Those websites have done simple things like
          displaying text on a webpage like you're seeing now or used Microsoft's SignalR library
          to run a digital version of a board game in real-time (look at the Avalon repo/site in my portfolio).
        </p>
        <p>
          Outside of building websites, I've experimented with IoT on numerous occasions. I helped my roommate
          make a homegrown version of a Phillips Hue lightstrip that we could control with our Google Home.
          I participated in a hackathon where I worked with a team to use the sensors found in prosthetics as input
          for a computer.
        </p>
        <p>
          Technology is my passion, and I'm lucky enough that I can make my passion my job. I'm excited to see
          where my career at Microsoft takes me and the things that I'll get to work on.
        </p>
      </div>
      <h2>Portfolio</h2>
      <hr class="header-row" />
      <div>
        <div class="uk-text-lead">Avalon Online</div>
        <a class="link" href="https://avalon.seanfitzgerald.dev">avalon.seanfitzgerald.dev</a>
        <div class="uk-flex uk-flex-wrap uk-margin-small-top">
          <div class="website-description uk-width-expand">
            <p>
              Avalon Online was a personal project to recreate the board game "The Resistance: Avalon" online.
              Other people have already created this, but I wanted a challenge. What I focused on for this project was
              learning how to create a real-time application with Microsoft's SignalR library. All of the players are synced
              with one another, and communication is done with websockets instead of just HTTP POST/GET requests. Another challenge
              for this project was trying to deploy the application myself on a Linux server. In the end I was able to set it up using
              nginx.
            </p>
            <p>
              The application uses PostgreSQL, .NET Core 3, and VueJS and you can view the GitHub repo <a class="link" href="https://github.com/fitzmill/online-avalon">here</a>.
            </p>
          </div>
          <div class="website-preview">
            <img :src="avalonPreview" width="600">
          </div>
        </div>
      </div>
      <h2>Education</h2>
      <hr class="header-row" />
      <Education class="section" />
      <h2>Experience</h2>
      <hr class="header-row" />
      <Experience class="section" />
      <button id="pdf-btn" class="uk-button uk-align-center uk-margin-bottom" onclick="location.href = 'https://drive.google.com/uc?export=download&id=1d6hK7qzcaAAYWMVmyGfheMmOf_KX18em'">PDF</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import UIkit from 'uikit/dist/js/uikit-core.min.js';

@Component({
  components: {
    Education: () => import('../components/Education.vue'),
    Experience: () => import('../components/Experience.vue'),
  }
})
export default class Resume extends Vue {
  private profilePhoto = require('../assets/profile-photo.jpg');
  private background = require('../assets/website-background.svg');
  private avalonPreview = require('../assets/avalon-preview.png');

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
  #name {
    font-size: 8vw;
    color: #C9E7FF;
  }

  #heading {
    z-index: 1;
    position: relative;
  }

  #background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;
  }

  @media (min-width: 1100px) {
    #name {
      font-size: 93px;
    }
  }

  #pdf-btn {
    background-color: rgb(73, 143, 200);
    color: white;
  }

  #cover {
    background: rgb(0, 12, 31)
  }

  .section {
    background-color: rgb(46, 46, 46);
    padding: 20px;
  }

  .website-description {
    margin-right: 20px;
    max-width: 591px;
  }

  @media (max-width: 1050px) {
    .website-preview {
      order: -1;
      width: 100%;
      margin-bottom: 20px;
    }
  }

  .down-arrow {
    color: white;
  }

  .header-row {
    border-color:rgb(73, 143, 200);
  }

  .link {
    color:rgb(73, 143, 200);
    text-decoration: underline;
  }

  .link-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
  }

  .link-list > li {
    display: list-item;
    padding: 5px;
  }

  @media (min-width: 1000px) {
    .link-list {
      display: flex;
    }
    .link-list > li:not(:last-child) {
      border-right: 1px rgb(73, 143, 200) solid;
    }

    .link-list > li {
    padding-left: 20px;
    padding-right: 20px;
    }
  }
  
  @media (max-width: 744px) {
    .link-list {
      padding-left: 0px;
    }
  }

  .link-list>li>a:hover {
    opacity: .7;
    text-decoration: none;
  }

  #scroll-down {
    text-align:center;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 100%;
    box-sizing: border-box;
    bottom: 2vh;
    position: absolute;
  }

  #scroll-down:hover {
    opacity: .7;
    text-decoration: none;
  }
</style>
