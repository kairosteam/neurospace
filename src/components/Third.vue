<template>
    <v-app style="background-color: #242933;" transition="fade-transition">
        <v-toolbar class="elevation-5" style="background-color: #242933;" >
            <v-toolbar-title class="title">The problem</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn href="/home" flat light class="white--text tbtn">Home</v-btn>
            <v-btn href="/problem" flat light class="white--text tbtn">The problem</v-btn>
            <v-btn href="/team" flat light class="white--text tbtn">Our team</v-btn>
        </v-toolbar>
        <main>
            <v-container fluid fill-content grid-list-md text-xs-center style="height: -webkit-fill-available; margin-top:0; margin-bottom:0">
                <v-layout row wrap align-center justify-center style="align-items: center; margin-top:0%" >
                    <v-flex xs12 lg12>
                        <v-layout row wrap align-center justify-center>
                            <v-flex xs12 lg12>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg6 class="pa-0">
                                        <img class="ns hidden-md-and-down" src="../assets/brain1.png" style="width: auto; height: 500px; padding-top: 12%; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">
                                        <img class="ns hidden-md-and-up" src="../assets/brain1.png" style="width: auto; height: 380px; padding-top: 12%; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">
                                    </v-flex>
                                    <v-flex xs12 lg6>
                                        <div class="ns hidden-md-and-down" style="margin-top: 25%">Our algorithm</div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -10px">Our algorithm</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg12>
                                        <div class="ns hidden-md-and-down" style="margin-top: -70px; margin-bottom: 50px">
                                            <v-btn icon class="orange--text lighten-5 bt" href="#whatis" style="margin-top:10%">
                                                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -140px; margin-bottom: 30px">
                                            <v-btn icon class="orange--text lighten-5 bt" href="#whatis">
                                                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container fluid fill-content text-xs-center style=" margin-top:0; margin-bottom:0; background-color: #3a5aad">
                <v-layout id="whatis" row wrap align-center justify-center style="align-items: center; margin-top:0%" >
                    <v-flex xs12 lg12>
                        <img  src="../assets/algoritmo.png" style="height: -webkit-fill-available" >
                    </v-flex>
                </v-layout>
            </v-container>




            <v-container fluid fill-content grid-list-md text-xs-center style="height: -webkit-fill-available; margin-top:0; margin-bottom:0">
                <v-layout row wrap align-center justify-center style="align-items: center; margin-top:0%" >
                    <v-flex xs12 lg12>
                        <v-layout row wrap align-center justify-center>
                            <v-flex xs12 lg12>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg12>
                                        <div class="ns hidden-md-and-down" style="margin-top: 18%">More features</div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -10px">More features</div>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg12>
                                        <div class="ns hidden-md-and-down" style="margin-top: -70px; margin-bottom: 50px">
                                            <v-btn icon class="orange--text lighten-5 bt" href="#info" style="margin-top:10%">
                                                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -140px; margin-bottom: 30px">
                                            <v-btn icon class="orange--text lighten-5 bt" href="#info">
                                                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container fluid fill-content text-xs-center style=" margin-top:0; margin-bottom:0; ">
                <v-layout id="info" row wrap align-center justify-center style="align-items: center; margin-top:0%" >
                    <v-flex xs12 lg12>
                        <img  src="../assets/infografia.png" style="width:90%" >
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
