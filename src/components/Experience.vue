<template>
  <div>
    <div v-for="(exp, index) in experienceList" :key="index" class="uk-container">
      <div uk-grid>
        <img class="uk-visible@s company-icon" :data-src="exp.picturePath" width="180" height="150" alt="" uk-img />
        <div class="uk-width-expand@s">
          <h3 class="uk-margin-remove">{{exp.position}}</h3>
          <h4 class="uk-margin-remove uk-display-inline">{{exp.companyName}}</h4><span class="uk-heading"> - {{exp.companyLocation}}</span>
          <div class="uk-margin-bottom"></div>
          <p class="uk-margin-left">{{exp.description}}</p>
        </div>
        <h4>{{exp.startDate.format('MMM YYYY')}} - {{exp.endDate ? exp.endDate.format('MMM YYYY') : 'Present'}}</h4>
      </div>
      <hr v-if="index != experienceList.length - 1" class="uk-margin-bottom" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import dayjs, { Dayjs } from 'dayjs';

interface WorkExperience {
  companyName: string;
  companyLocation: string;
  startDate: Dayjs;
  endDate?: Dayjs;
  position: string;
  description: string;
  picturePath: string;
}

@Component
export default class Experience extends Vue {
  private experienceList: WorkExperience[] = [
    {
      companyName: 'Microsoft',
      companyLocation: 'Redmond, WA',
      startDate: dayjs('2019-05-13'),
      endDate: dayjs('2019-08-13'),
      position: 'Software Developer Intern',
      description: 'Added additional automation to an internal ' +
        'security response tool for the Microsoft Cyber Defense Operations Center.',
      picturePath: require('../assets/microsoft-icon.png')
    },
    {
      companyName: 'Fiserv/Raikes Design Studio',
      companyLocation: 'Lincoln, NE',
      startDate: dayjs('2018-08-27'),
      endDate: dayjs('2019-04-28'),
      position: 'Development Manager',
      description: 'Managed a team of developers to create an artificial intelligence ' +
        'extension for Power BI to be included with Fiserv\'s Performance Data Warehouse.',
      picturePath: require('../assets/fiserv-icon.png')
    },
    {
      companyName: 'Microsoft',
      companyLocation: 'Redmond, WA',
      startDate: dayjs('2018-05-14'),
      endDate: dayjs('2018-08-03'),
      position: 'Explorer Intern',
      description: 'Developed an ASP.NET Core web application using ReactJS and a ' +
        'SQL Server database for the Microsoft Security Response Center.',
      picturePath: require('../assets/microsoft-icon.png')
    },
    {
      companyName: 'Spreetail',
      companyLocation: 'Lincoln, NE',
      startDate: dayjs('2017-05-01'),
      endDate: dayjs('2017-08-04'),
      position: 'Software Developer Intern',
      description: 'Designed and implemented an Android mobile application for order ' +
        'fulfillment centers using Xamarin Android and a SQL Server database.',
      picturePath: require('../assets/spreetail-icon.png')
    },
    {
      companyName: 'Raikes Design Studio',
      companyLocation: 'Lincoln, NE',
      startDate: dayjs('2017-02-01'),
      endDate: dayjs('2017-04-28'),
      position: 'Software Developer Intern',
      description: 'Implemented unit tests in an ASP.NET Core web app and integrated ' +
        'social media sharing with URL parameters using React-Redux.',
      picturePath: require('../assets/unl-icon.png')
    }
  ];
}
</script>

<style lang="less" scoped>
  .company-icon {
    max-height: 150px !important;
  }
</style>
