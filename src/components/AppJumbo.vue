<script>
import { state } from '../state';
import AppLatestProjects from './AppLatestProjects.vue';

export default {
  name: 'AppJumbo',

  components: {
    AppLatestProjects,
  },

  data() {
    return {
      state
    }
  },
  methods: {
    initializeTypewriter() {
      class TxtType {
        constructor(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        }
        tick() {
          let i = this.loopNum % this.toRotate.length;
          let fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

          let that = this;
          let delta = 200 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function () {
            that.tick();
          }, delta);
        }

      };

      let elements = document.getElementsByClassName('typewrite');
      for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      };
    }
  },
  mounted() {
    // let url = state.base_api_url + state.base_projects_url

    this.initializeTypewriter();

    // state.callAPI(url);
  }

}

</script>

<template>
  <div class="container jumbotron rounded-3 d-flex">

    <div class="icons d-flex w-75">
      <i class="devicon-css3-plain"></i>
      <i class="devicon-bootstrap-plain"></i>
      <i class="devicon-vuejs-plain-wordmark"></i>
      <i class="devicon-mysql-plain-wordmark"></i>
      <i class="devicon-laravel-original"></i>
      <i class="devicon-php-plain"></i>
    </div>

    <div class="left-side ps-3 z-2">

      <div class="title-box">
        <h1 class="jumbo-title">
          Hei! I'm <span class="text-warning">Nico</span>,
          <a href="" class="typewrite" data-period="2000"
            data-type='["Full Stack Developer.", "I Love to Create.", "I Love to Develop." ]'>
            <span class="wrap"></span>
          </a>
        </h1>
      </div>

      <div class="svgs">

        <svg xmlns="http://www.w3.org/2000/svg" id="square-circle" viewBox="0 0 320 320" fill="#fff2"
          style="width: 200px; position: absolute; top: 6rem; right: 0%;">
          <path
            d="M20.4 273.2c-1.2-4.1 2.2-68.1 3.2-117.4.8-39.2-1.7-92.5-1.1-108 .2-7.4 5.3-9 10.6-9.5 12.8-1.2 18.8-1.2 46.1-.5 95.9 2.3 163.5 58.7 203.1 146 7.5 16.6 12.2 31.7 14.6 49.8 1.8 13.2 4 24.1 2.4 38.3-.1.6-.9 3.9-1.2 4.4-1.6 3.5-5.6 5.2-9.4 5.4-7.8.4-7.8.4-52.4.9-55.3.6-88.2-2.7-150.4-3.4-55.2-.7-49.5.1-56.9.1-3.7 0-7.5-2.3-8.6-6.1zm260.8-6.1s-1.2-27-1.8-31.5c-1.7-11.8-3.6-22.6-7.9-33.7-8.6-22.2-20-43.3-34-62.5-48.2-66.4-105.2-87.2-186-84.9-2.4.1-12.1.9-12.1.9.3 49.2 2.7 60.9.7 131.1l-2.3 77.4c35.2-1.7 126.9 3.7 201.5 2.7 5.1-.1 10.1-.1 15.2-.1 8.9 0 26.7.6 26.7.6z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="pentagon-up" viewBox="0 0 270 270" fill="#fff1"
          style="width: 200px; position: absolute; top: 70%; left: -3%; transform: rotate(-45deg);">
          <path
            d="M245 116.2c-22.8-15.5-43.9-33.5-64.3-52.1-14.9-13.5-28.1-29.3-44.8-40.7-3.8-2.3-9.3-1.6-12 2C93.5 60.6 59.8 88.2 28 107.7c-3.4 1.3-7 3.5-6.9 7.7-2.9 14.1 11.6 31.9 17 45 14.3 25.8 27.4 52.1 39.2 79.1 5.5 9.6 24.4 3.6 34.1 5.2 20 .3 38.7.3 59.2 2.7 10.2 3.2 12.8-9 16.5-15.7 13.1-25.9 30.5-53.2 45.6-77.9 3.5-9 25.6-31.2 12.3-37.6zm-76 113.2c-27.1-3.7-54.3-.3-77.6-.6C76.6 190.9 53 157 38 119.3c35-21.2 67-47.6 94.2-78.1 31.5 29.3 61.9 60 97.4 84.6-21.9 35.6-41.9 66.2-60.6 103.6z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="pentagon-down" viewBox="0 0 270 270" fill="#fff1">
          <path
            d="M245 116.2c-22.8-15.5-43.9-33.5-64.3-52.1-14.9-13.5-28.1-29.3-44.8-40.7-3.8-2.3-9.3-1.6-12 2C93.5 60.6 59.8 88.2 28 107.7c-3.4 1.3-7 3.5-6.9 7.7-2.9 14.1 11.6 31.9 17 45 14.3 25.8 27.4 52.1 39.2 79.1 5.5 9.6 24.4 3.6 34.1 5.2 20 .3 38.7.3 59.2 2.7 10.2 3.2 12.8-9 16.5-15.7 13.1-25.9 30.5-53.2 45.6-77.9 3.5-9 25.6-31.2 12.3-37.6zm-76 113.2c-27.1-3.7-54.3-.3-77.6-.6C76.6 190.9 53 157 38 119.3c35-21.2 67-47.6 94.2-78.1 31.5 29.3 61.9 60 97.4 84.6-21.9 35.6-41.9 66.2-60.6 103.6z">
          </path>
        </svg>
      </div>

      <p class="fs-2 w-50 jumbo-pp-text">
        Welcome to my Portfolio. Here I collect some of the projects I've created in
        these years. Have fun!
      </p>


      <a href="#latest-projects" class="link-to-latest-projects">
        <div class="scroll-prompt" scroll-prompt="" ng-show="showPrompt" style="opacity: 1;">
          <div class="scroll-prompt-arrow-container">
            <div class="scroll-prompt-arrow">
              <div></div>
            </div>
            <div class="scroll-prompt-arrow">
              <div></div>
            </div>
          </div>
        </div>

      </a>

      <div class="download_cv_box">
        <a class="download_cv" target="_blank" download="" href="/assets/uploads/resume_portfolio.pdf">
          Resume
          <i class="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <img class="jumbo-img" src="/assets/uploads/jumbo.png" alt="">
    <img class="jumbo-img mobile-view" src="/assets/uploads/jumbo-mobile.png" alt="">
  </div>

  <AppLatestProjects />

</template>

<style lang="scss" scoped>
@import "../partials_scss/_jumbo.css";
@import "../partials_scss/_scroll_prompt.css"
</style>
