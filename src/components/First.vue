<template>
    <v-app style="background-color: #242933;" transition="fade-transition">
        <v-toolbar class="elevation-5" style="background-color: #242933;" >
            <v-toolbar-title class="title">Neurospace</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout style="padding-left:500px">
                <v-btn href="/problem" flat light class="white--text tbtn">The problem</v-btn>
                <v-btn href="/solution" flat light class="white--text tbtn">Our solution</v-btn>
                <v-btn href="/team" flat light class="white--text tbtn">Our team</v-btn>
            </v-layout >

        </v-toolbar>
        <a href="https://github.com/kairosteam"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
        <main>
            <v-container fluid fill-content grid-list-md text-xs-center style="height: -webkit-fill-available; margin-top:0; margin-bottom:0">
                <v-layout row wrap align-center justify-center style="align-items: center; margin-top:0%" >
                    <v-flex xs12 lg12>
                        <v-layout row wrap align-center justify-center>
                            <v-flex xs12 lg12>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg6 class="pa-0">
                                        <img class="ns hidden-md-and-down" src="../assets/nslogo.png" style="width: auto; height: 500px; padding-top: 12%; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">
                                        <img class="ns hidden-md-and-up" src="../assets/nslogo.png" style="width: auto; height: 380px; padding-top: 12%; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">
                                    </v-flex>
                                    <v-flex xs12 lg6>
                                        <div class="ns hidden-md-and-down" style="margin-top: 25%">Neurospace</div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -10px">Neurospace</div>
                                        <div class="sub-ns" style="margin-top: -3%; margin-bottom: 4%">The wearable of your dreams</div>
                                        <v-btn large outline class="teal--text ns hidden-md-and-down" style="font-size: 15px; -webkit-filter: drop-shadow(0px 0px 50px #8dfbea);">Get more information</v-btn>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap style="">
                                    <v-flex xs12 lg12>
                                        <div class="ns hidden-md-and-down" style="margin-top: -70px; margin-bottom: 50px">
                                            <v-btn icon class="orange--text lighten-5 ">
                                                <v-icon large style="font-size: 200px">keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                        <div class="ns hidden-md-and-up" style="margin-top: -140px; margin-bottom: 30px">
                                            <v-btn icon class="orange--text lighten-5 ">
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
            <v-container fluid grid-list-md text-xs-center >

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
                            Several music software applications have been developed using AI to produce music.
                            For example, Magenta, a project from Google Brain team use machine learning to create compelling art and music.
                            Like them, Kairos team use TensorFlow and Magenta.
                        </div>
                    </v-flex>
                    <v-flex xs12 lg4>
                        <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/levels.png"/>
                        <div class="title-text"> Procedural Sound</div>
                        <div class="explain-text">
                            Our product is generated based on the patient's brain activity in real time.
                        </div>
                    </v-flex>
                    <v-flex xs12 lg4>
                        <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/lotus.png"/>
                        <div class="title-text">Relaxing and Comfort</div>
                        <div class="explain-text">
                            Neurospace produce adaptative music to reduce stress.
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout align-center justify-center row wrap style="background-color: #252c36">
                    <v-flex xs12 lg12 text-xs-center>
                        <v-layout row wrap align-center justify-center >
                            <v-flex xs12 lg12 text-xs-center style="margin-top:5%; padding:0">
                                <div class="title-hw" style="padding:0">
                                    How to work
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 lg12 text-xs-center>
                        <v-layout row wrap align-center justify-center style="margin:2%; margin-bottom:1%">
                            <v-flex xs12 lg4 text-xs-left style="padding-bottom:5%;">
                                <v-layout align-center justify-center>
                                    <div class="ns-img-border ">
                                        <img src="../assets/img3.png"  class="ns-img shadowfilterfixed">
                                    </div>
                                </v-layout>

                            </v-flex>
                            <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;" >
                                <div class="subtitle-hw justify-right " style="font-size:2.5em">
                                    Electroencephalogram
                                </div>
                                <v-layout align-center justify-center>
                                    <div class="explain-text-hw">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quisque blandit, lectus sit amet eleifend rutrum, risus tortor vehicula tortor, et elementum dolor nisi vel nulla.
                                        Fusce a turpis odio. Pellentesque.
                                    </div>
                                </v-layout >
                            </v-flex>
                            <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%; padding-top:20px">
                                <v-layout align-center justify-center>
                                    <div class="ns-img-border ">
                                        <img src="../assets/img1.png" class="ns-img shadowfilterfixed">
                                    </div>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center row wrap style="">
                    <v-flex xs12 lg12 text-xs-center style="margin-top:5%; padding:0">
                        <div class="subtitle-hw" style="padding:0">

                        </div>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center row wrap style="background-color: #252c36">
                    <v-flex xs12 lg12 text-xs-center style="margin-top:5%; padding:0">
                        <div class="subtitle-hw" style="padding:0">
                            Quantifying your feelings
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center row wrap style="">
                    <v-flex xs12 lg12 text-xs-center style="margin-top:5%; padding:0">
                        <div class="subtitle-hw" style="padding:0">
                            Our AI music composer
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
