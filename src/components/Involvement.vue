<template>
  <div>
    <div v-for="(inv, index) in involvement" :key="index">
      <div uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-margin-remove">{{inv.title}}</h3>
          <span class="uk-margin-left">{{inv.desc}}</span>
        </div>
        <h4>{{inv.dates}}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface InvolvementInfo {
  title: string;
  desc: string;
  dates: string;
}

@Component
export default class Involvement extends Vue {
  private involvement: InvolvementInfo[] = [
    {
      title: 'Kauffman Residents Association',
      desc: 'Comittee dedicated to making life in Kauffman as enjoyable as possible.',
      dates: 'August 2017 - Present'
    },
    {
      title: 'Anime Club',
      desc: 'Where students who love anime go to find people with similar interests.',
      dates: 'August 2016 - Present'
    }
  ];
}
</script>
