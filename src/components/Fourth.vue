<template>
    <v-app style="background-color: #242933;" transition="fade-transition">
        <v-toolbar class="elevation-5" style="background-color: #242933;" >
            <v-toolbar-title class="title">Our team</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn href="/home" flat light class="white--text tbtn">Home</v-btn>
            <v-btn href="/problem" flat light class="white--text tbtn">The problem</v-btn>
            <v-btn href="/solution" flat light class="white--text tbtn">Our solution</v-btn>
        </v-toolbar>
        <main>
          <v-container fluid fill-content text-xs-center style="">
              <v-layout row wrap align-center justify-center  style="margin-top:8%">
                  <v-flex xs12 lg12>
              <div class="ns shadowfilter" style="margin-top: 10%; ">Kairos team</div>
              </v-flex>
              <v-flex xs12 lg12>
                <v-btn icon class="bt orange--text lighten-5" href="#team" style="margin-top:12%">
                    <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                </v-btn>
              </v-flex>
          </v-layout>
          </v-container>

          <v-container fluid fill-content text-xs-center style="">
              <v-layout id="team" row wrap align-center justify-center style="background-color: #2f3845; margin-top:3%">

                    <v-flex xs12 lg12>
                      <v-layout row wrap align-center justify-center style="margin-top:5%;margin-bottom:5%">
                        <v-flex xs12 lg12>
                            <div id="" class="title-hw">
                                Our team
                            </div>
                        </v-flex>
                        <v-flex xs12 lg4>
                          <img src="../assets/bregy.jpeg" class="ns-img shadowfilterfixed" style="height:200px">
                          <div class="explain-text" style="font-size:2em">
                              Bregy Malpartida
                          </div>
                        </v-flex>
                        <v-flex xs12 lg4>
                          <img src="../assets/maria.jpeg" class="ns-img shadowfilterfixed" style="height:200px">
                          <div class="explain-text" style="font-size:2em">
                              Maria Noriega
                          </div>
                        </v-flex>
                        <v-flex xs12 lg4>
                          <img src="../assets/daniela.jpg" class="ns-img shadowfilterfixed" style="height:200px">
                          <div class="explain-text" style="font-size:2em">
                              Daniela Venturo
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-flex>
              </v-layout>
              <v-layout row wrap style="padding: 3%">
                  <v-flex xs12 lg12>
                      <div id="whatis" class="title-hw">
                          We wanted to thank everyone who contributed:
                      </div>
                  </v-flex>
                  <v-flex xs12 lg4>
                      <img style="width: auto; height: 100px;" class="shadowfilter" src="../assets/hugging.png"/>
                      <div class="title-text"> Our families and friends:</div>
                      <div class="explain-text">
                          Specially Maria's mother, Sandra, for helping us sew the prototype for the hat and Bregy's friend, David, an amazing neuroscientist who helped with research.
                      </div>
                  </v-flex>
                  <v-flex xs12 lg4>
                      <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/cap.png"/>
                      <div class="title-text"> UTEC:</div>
                      <div class="explain-text">
                          Specially our tutor Ernesto Cuadros, our dear friend and supporter Katia Canepa, and Gabriela for defending our product and helping us with paperwork.
                      </div>
                  </v-flex>
                  <v-flex xs12 lg4>
                      <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/icons.png"/>
                      <div class="title-text">Inspiring companies: </div>
                      <div class="explain-text">
                          Specially the NASA for it's research and Google because of creating Magenta and Tensorflow.
                      </div>
                  </v-flex>
              </v-layout>
          </v-container>
            <!-- Inicio de agradecimientos -->



            <!-- Fin de agradecimientos -->

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
$(function() {
    $('.bt').on('click', function() {
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});
    export default {

        data: () => ({

        })
    }
</script>
<style >
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

    .shadowfilterfixed {
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
