<template>
  <v-app style="background-color: #242933;" transition="fade-transition">
    <v-toolbar class="elevation-5" style="background-color: #242933;" >
      <v-toolbar-title class="title">Neurospace</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat light class="white--text tbtn">The problem</v-btn>
      <v-btn flat light class="white--text tbtn">Our solution</v-btn>
      <v-btn flat light class="white--text tbtn">Our team</v-btn>

    </v-toolbar>
    <main>
      <v-container fluid grid-list-md text-xs-center >
        <v-layout row wrap style="height: -webkit-fill-available">
          <v-flex xs12 lg6 class="pa-0">
            <img src="../assets/nslogo.png" style="width: auto; height: 500px; padding-top: 100px; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">

          </v-flex>
          <v-flex xs12 lg6>
            <div class="ns hidden-md-and-down" style="margin-top: 170px">Neurospace</div>
            <div class="ns hidden-md-and-up" style="margin-top: 1px">Neurospace</div>

            <div class="sub-ns" style="margin-top: -20px; margin-bottom: 30px">The wearable of your dreams</div>
            <v-btn large outline class="teal--text" style="font-size: 15px; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">Get more information</v-btn>
          </v-flex>
          <v-flex xs12 lg13>
            <div style="margin-top: -120px; margin-bottom: 50px">
              <v-btn icon class="orange--text lighten-5 ">
                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
              </v-btn>
            </div>
          </v-flex>

        </v-layout>


        <v-layout row wrap style="background-color: #2f3845;padding-bottom: 40px">
          <v-flex xs12 lg12>
            <div class="title-hw">
              What is neurospace
            </div>
          </v-flex>
          <v-flex xs12 lg4>
            <img style="width: auto; height: 100px;" class="shadowfilter" src="../assets/ai.png"/>
            <div class="title-text"> Artificial Intelligence</div>
            <div class="explain-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
            </div>
          </v-flex>
          <v-flex xs12 lg4>
            <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/levels.png"/>
            <div class="title-text"> Procedural Sound</div>
            <div class="explain-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
            </div>
          </v-flex>
          <v-flex xs12 lg4>
            <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/lotus.png"/>
            <div class="title-text">Relaxing and Comfort</div>
            <div class="explain-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque.
            </div>
          </v-flex>
        </v-layout>


        <v-layout row wrap style="background-color: #252c36">
          <v-flex xs12 lg12 text-xs-center>
            <div class="title-hw">
              How to work
            </div>
          </v-flex>
          <v-flex xs4 lg4 text-xs-left style="padding-left: 50px;">
            <div class="subtitle-hw">
              Electroencephalogram
            </div>
            <img src="../assets/brain.png" style="width:auto; height: 200px; padding-left: 60px;">
          </v-flex>
          <v-flex xs4 lg4 text-xs-center>
            <div class="explain-text-hw">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque blandit, lectus sit amet eleifend rutrum, risus tortor vehicula tortor, et elementum dolor nisi vel nulla.
              Fusce a turpis odio. Pellentesque.

            </div>
          </v-flex>
          <v-flex xs4 lg4 text-xs-center>
            <div class="ns-img-border pa-0 ma-0">
              <img src="../assets/img1.png" class="ns-img">

            </div>
          </v-flex>
        </v-layout>


      </v-container>
    </main>
    <v-footer style="background-color: #0c0e12; color: white">
      <v-spacer></v-spacer>
      <div>
        Made with
        <v-icon class="red--text">favorite</v-icon>
        by Kairos Team
      </div>
    </v-footer>
  </v-app>

</template>

<script>
  import NsText from './Nstext.vue'
  export default {
    // 7BE0D0
    components : {
      NsText
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
  .tbtn {
    font-family: 'Questrial', sans-serif;
  }
  .title {
    font-family: 'Questrial', sans-serif;
    color: white;
    font-weight: 100;
  }

  .ns {
    font-family: 'Questrial', sans-serif;
    font-size: 100px;
    color: #b9d1fe;
    font-weight: 100;

  }
  .sub-ns {
    font-family: 'Questrial', sans-serif;
    font-size: 30px;
    color: #7e8eb0;
    font-weight: 100;
  }

  .shadowfilter {
    -webkit-filter: drop-shadow(0px 0px 0px rgba(255,255,255,0.80));
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;

  }

  .shadowfilter:hover {
     -webkit-filter: drop-shadow(0px 0px 8px #8dfbea);
  }

  .explain-text {
    font-family: 'Questrial', sans-serif;
    font-size: 16px;
    color: #b3ccf9;
    margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;

  }
  .title-text {
    font-family: 'Questrial', sans-serif;
    font-size: 25px;
    color: #8dfbea;
    margin-top: 8px;
  }

  .title-hw {
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'Questrial', sans-serif;
    font-size: 50px;
    color: #8dfbea;
  }
  .subtitle-hw {
    font-family: 'Questrial', sans-serif;
    font-size: 40px;
    color: #f0f0f0;
  }

  .explain-text-hw {
    font-family: 'Questrial', sans-serif;
    font-size: 20px;
    color: #b3ccf9;
    margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .ns-img {
    position: relative;
    width: auto;
    height: 250px;
    border-radius: 50%;
    border: 2px solid #8dfbea;
    border-spacing: 10px 20px;
    /*
    animation: infinite;
    animation-name: planetOrbit;
    animation-duration: 100s;
    animation-timing-function: linear;
    animation-delay: initial;
    animation-iteration-count: infinite;
    animation-direction: initial;
    animation-fill-mode: initial;
    animation-play-state: initial;
     */

  }
  .ns-img-border {
  }
</style>
