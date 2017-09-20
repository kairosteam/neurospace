<template>
    <v-app style="background-color: #242933;" transition="fade-transition">
        <v-progress-linear
                v-bind:indeterminate="query"
                v-bind:query="true"
                v-model="value"
                v-bind:active="active"
                color-front="red darken-1"
                color-back="blue-grey"
                fixed
        ></v-progress-linear>
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

                                        <div class="playBtn" @click="togglePlayBtn()">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="play" width="119.91" height="119.91" fill="white">
                                                <path fill="#E74C3C" d="M58.8 10.8c-27.77 0-50.3 22.5-50.3 50.3 0 27.78 22.53 50.3 50.3 50.3 27.8 0 50.32-22.52 50.32-50.3 0-27.8-22.53-50.3-50.3-50.3zm0 97.97c-26.32 0-47.66-21.34-47.66-47.67 0-26.34 21.34-47.68 47.67-47.68 26.37 0 47.7 21.34 47.7 47.67 0 26.3-21.33 47.64-47.66 47.64z"/><path fill="#E74C3C" d="M58.8 21.12c-22.07 0-39.97 17.9-39.97 39.98s17.9 39.98 39.98 39.98c22.1 0 40-17.9 40-39.98s-17.9-39.98-40-39.98zm3.52 50.7L43.77 82.47l.04-21.37.07-21.37 18.5 10.72 18.5 10.72L62.3 71.82z"/>
                                            </svg>
                                        </div>

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
            <v-container fluid grid-list-md text-xs-center >

                <v-layout row wrap style="background-color: #2f3845;padding-bottom: 40px">
                    <v-flex xs12 lg12>
                        <div id="whatis" class="title-hw">
                            What is neurospace
                        </div>
                    </v-flex>
                    <v-flex xs12 lg4>
                        <img style="width: auto; height: 100px;" class="shadowfilter" src="../assets/ai.png"/>
                        <div class="title-text"> Artificial Intelligence</div>
                        <div class="explain-text">
                            Several music software applications have been developed using AI to produce music.
                            For example, Magenta, a project from Google Brain team uses machine learning to create compelling art and music.
                            Like them, Kairos team uses TensorFlow and Magenta.
                        </div>
                    </v-flex>
                    <v-flex xs12 lg4>
                        <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/levels.png"/>
                        <div class="title-text"> Procedural Sound</div>
                        <div class="explain-text">
                            Our music is generated based on the user's brain activity in real time.
                            The music is unique to every user and will specialize in relaxing you.
                        </div>
                    </v-flex>
                    <v-flex xs12 lg4>
                        <img style="width: auto; height: 100px" class="shadowfilter" src="../assets/lotus.png"/>
                        <div class="title-text">Relaxing and Comfort</div>
                        <div class="explain-text">
                            Neurospace produces adaptative music to reduce stress.
                            Our AI focuses on producing nothing but relaxing tunes to induce a pacific state on the user and allow them to lead a better live.
                        </div>
                    </v-flex>
                </v-layout>

                <v-layout align-center justify-center row wrap style="background-color: #252c36">
                    <v-flex xs12 lg12 text-xs-center>
                        <v-layout row wrap align-center justify-center >
                            <v-flex xs12 lg12 text-xs-center style="margin-top:5%; padding:0">
                                <div class="title-hw" style="padding:0">
                                    How it works
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
                                        Using an Open BCI ganglion and a set of electrodes we can measure the user's brainwaves which serves as input for the AI music composer.
                                        We have placed the electrodes on strategic places that pick up the alpha, gamma, theta, and beta brainwaves which we use to determine your relaxation state.
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
                <v-layout row wrap align-center justify-center style="margin:2%; margin-bottom:1%">
                    <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;" >
                        <div class="subtitle-hw justify-right " style="font-size:2.5em">
                            Our AI music composer
                        </div>
                        <v-layout   align-center justify-center>
                            <div class="explain-text-hw">
                                We have used a <a href="http://www.piano-e-competition.com/midiinstructions.asp"> library of MIDI files </a>
                                that are pure classical piano from the e-Piano Junior Competition. Our artificial intelligence takes this as its data set and
                                builds relaxing songs from it.
                            </div>
                        </v-layout >
                    </v-flex>
                    <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%; padding-top:20px">
                        <v-layout align-center justify-center>
                            <div class="ns-img-border ">
                                <img src="../assets/img890.jpg" class="ns-img shadowfilterfixed">
                            </div>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;" >
                        <div class="subtitle-hw justify-right " style="font-size:2.5em">
                            Quantifying your feelings
                        </div>
                        <v-layout align-center justify-center>
                            <div class="explain-text-hw">
                                Neurospace analyzes your brainwaves and focuses on creating an increase of the alpha waves (relaxation) and a
                                decrease of the gamma waves (higher mental activity) as this will create a relaxed state.
                            </div>
                        </v-layout >
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
    import NsText from './Nstext.vue'
    export default {
        // 7BE0D0
        components : {
            NsText
        },
        data () {
            return {
                value: 0,
                buffer: 10,
                bufferValue: 20,
                interval: {},
                active: false
            }
        },
        methods: {
            togglePlayBtn : function () {
                this.active = true;
                document.getElementById("play").classList.toggle('goDown');
            },
            queryAndIndeterminate () {
                this.query = true
                this.show = true
                this.value = 0
                let int

                this.query = false

                this.interval = setInterval(() => {
                    if (this.value === 100) {
                        clearInterval(this.interval)
                        this.show = false
                        return setTimeout(this.queryAndIndeterminate, 2000)
                    }
                    this.value += 25
                }, 1000)
            }
        },
        beforeDestroy () {
            clearInterval(this.interval)
        },

        mounted () {
            this.queryAndIndeterminate()
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

    /* always present */
    .expand-transition {
        transition: all .3s ease;
        height: 30px;
        padding: 10px;
        background-color: #eee;
        overflow: hidden;
    }
    /* .expand-enter defines the starting state for entering */
    /* .expand-leave defines the ending state for leaving */
    .expand-enter, .expand-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }

    .playBtn{
        cursor: pointer;
    }

    #play{
        -webkit-animation: bouncejs-playVisible 1800ms linear 1 both;
        animation: bouncejs-playVisible 1800ms linear 1 both;
    }

    #play.goDown{
        -webkit-animation: bouncejs-playHidden 2170ms linear 1 both;
        animation: bouncejs-playHidden 2170ms linear 1 both;
    }


    /* Generated with Bounce.js. Edit at https://goo.gl/nLmrl8 */

    @-webkit-keyframes bouncejs-playVisible {
        0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 300, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 300, 0, 1); }
        1.57% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 239.594, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 239.594, 0, 1); }
        1.67% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 235.005, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 235.005, 0, 1); }
        2.02% { -webkit-transform: matrix3d(1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 218.468, 0, 1); transform: matrix3d(1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 218.468, 0, 1); }
        2.35% { -webkit-transform: matrix3d(2.444, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 202.174, 0, 1); transform: matrix3d(2.444, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 202.174, 0, 1); }
        2.9% { -webkit-transform: matrix3d(2.828, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 174.441, 0, 1); transform: matrix3d(2.828, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 174.441, 0, 1); }
        3.03% { -webkit-transform: matrix3d(2.839, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 167.738, 0, 1); transform: matrix3d(2.839, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 167.738, 0, 1); }
        3.51% { -webkit-transform: matrix3d(2.697, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 143.44, 0, 1); transform: matrix3d(2.697, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 143.44, 0, 1); }
        3.57% { -webkit-transform: matrix3d(2.665, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 140.513, 0, 1); transform: matrix3d(2.665, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 140.513, 0, 1); }
        3.61% { -webkit-transform: matrix3d(2.639, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 138.348, 0, 1); transform: matrix3d(2.639, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 138.348, 0, 1); }
        4.09% { -webkit-transform: matrix3d(1.782, 0, 0, 0, 0, 1.318, 0, 0, 0, 0, 1, 0, 0, 114.376, 0, 1); transform: matrix3d(1.782, 0, 0, 0, 0, 1.318, 0, 0, 0, 0, 1, 0, 0, 114.376, 0, 1); }
        4.77% { -webkit-transform: matrix3d(0.936, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, 80.955, 0, 1); transform: matrix3d(0.936, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, 80.955, 0, 1); }
        5.12% { -webkit-transform: matrix3d(0.678, 0, 0, 0, 0, 1.757, 0, 0, 0, 0, 1, 0, 0, 64.402, 0, 1); transform: matrix3d(0.678, 0, 0, 0, 0, 1.757, 0, 0, 0, 0, 1, 0, 0, 64.402, 0, 1); }
        5.81% { -webkit-transform: matrix3d(0.42, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, 34.014, 0, 1); transform: matrix3d(0.42, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, 34.014, 0, 1); }
        5.88% { -webkit-transform: matrix3d(0.406, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, 30.888, 0, 1); transform: matrix3d(0.406, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, 30.888, 0, 1); }
        6.17% { -webkit-transform: matrix3d(0.369, 0, 0, 0, 0, 1.833, 0, 0, 0, 0, 1, 0, 0, 18.969, 0, 1); transform: matrix3d(0.369, 0, 0, 0, 0, 1.833, 0, 0, 0, 0, 1, 0, 0, 18.969, 0, 1); }
        7.21% { -webkit-transform: matrix3d(0.409, 0, 0, 0, 0, 1.629, 0, 0, 0, 0, 1, 0, 0, -18.614, 0, 1); transform: matrix3d(0.409, 0, 0, 0, 0, 1.629, 0, 0, 0, 0, 1, 0, 0, -18.614, 0, 1); }
        7.3% { -webkit-transform: matrix3d(0.424, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -21.769, 0, 1); transform: matrix3d(0.424, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -21.769, 0, 1); }
        8.68% { -webkit-transform: matrix3d(0.775, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -58.087, 0, 1); transform: matrix3d(0.775, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -58.087, 0, 1); }
        8.71% { -webkit-transform: matrix3d(0.783, 0, 0, 0, 0, 1.139, 0, 0, 0, 0, 1, 0, 0, -58.624, 0, 1); transform: matrix3d(0.783, 0, 0, 0, 0, 1.139, 0, 0, 0, 0, 1, 0, 0, -58.624, 0, 1); }
        9.29% { -webkit-transform: matrix3d(0.959, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, -69.317, 0, 1); transform: matrix3d(0.959, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, -69.317, 0, 1); }
        10.06% { -webkit-transform: matrix3d(1.149, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -79.477, 0, 1); transform: matrix3d(1.149, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -79.477, 0, 1); }
        11.38% { -webkit-transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.114, 0, 1); transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.114, 0, 1); }
        11.44% { -webkit-transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.204, 0, 1); transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.204, 0, 1); }
        11.61% { -webkit-transform: matrix3d(1.274, 0, 0, 0, 0, 0.675, 0, 0, 0, 0, 1, 0, 0, -87.321, 0, 1); transform: matrix3d(1.274, 0, 0, 0, 0, 0.675, 0, 0, 0, 0, 1, 0, 0, -87.321, 0, 1); }
        12.86% { -webkit-transform: matrix3d(1.184, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -83.434, 0, 1); transform: matrix3d(1.184, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -83.434, 0, 1); }
        14.24% { -webkit-transform: matrix3d(1.038, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -71.553, 0, 1); transform: matrix3d(1.038, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -71.553, 0, 1); }
        15.02% { -webkit-transform: matrix3d(0.974, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, -62.593, 0, 1); transform: matrix3d(0.974, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, -62.593, 0, 1); }
        15.55% { -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.076, 0, 0, 0, 0, 1, 0, 0, -55.807, 0, 1); transform: matrix3d(0.942, 0, 0, 0, 0, 1.076, 0, 0, 0, 0, 1, 0, 0, -55.807, 0, 1); }
        15.62% { -webkit-transform: matrix3d(0.938, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -54.811, 0, 1); transform: matrix3d(0.938, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -54.811, 0, 1); }
        17% { -webkit-transform: matrix3d(0.91, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -36.172, 0, 1); transform: matrix3d(0.91, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -36.172, 0, 1); }
        18.32% { -webkit-transform: matrix3d(0.935, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, -18.882, 0, 1); transform: matrix3d(0.935, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, -18.882, 0, 1); }
        18.33% { -webkit-transform: matrix3d(0.935, 0, 0, 0, 0, 1.093, 0, 0, 0, 0, 1, 0, 0, -18.695, 0, 1); transform: matrix3d(0.935, 0, 0, 0, 0, 1.093, 0, 0, 0, 0, 1, 0, 0, -18.695, 0, 1); }
        19.81% { -webkit-transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -1.939, 0, 1); transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -1.939, 0, 1); }
        21.72% { -webkit-transform: matrix3d(1.03, 0, 0, 0, 0, 0.957, 0, 0, 0, 0, 1, 0, 0, 13.784, 0, 1); transform: matrix3d(1.03, 0, 0, 0, 0, 0.957, 0, 0, 0, 0, 1, 0, 0, 13.784, 0, 1); }
        22.56% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, 18.251, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, 18.251, 0, 1); }
        25.03% { -webkit-transform: matrix3d(1.01, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 23.326, 0, 1); transform: matrix3d(1.01, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 23.326, 0, 1); }
        28.12% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 17.449, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 17.449, 0, 1); }
        31.73% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 4.778, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 4.778, 0, 1); }
        33.69% { -webkit-transform: matrix3d(1.005, 0, 0, 0, 0, 0.993, 0, 0, 0, 0, 1, 0, 0, -0.886, 0, 1); transform: matrix3d(1.005, 0, 0, 0, 0, 0.993, 0, 0, 0, 0, 1, 0, 0, -0.886, 0, 1); }
        38.34% { -webkit-transform: matrix3d(0.998, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, -6.231, 0, 1); transform: matrix3d(0.998, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, -6.231, 0, 1); }
        39.25% { -webkit-transform: matrix3d(0.998, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, -6.065, 0, 1); transform: matrix3d(0.998, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, -6.065, 0, 1); }
        44.81% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, -1.507, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, -1.507, 0, 1); }
        48.06% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.828, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.828, 0, 1); }
        51.65% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.665, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.665, 0, 1); }
        65.07% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.445, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.445, 0, 1); }
        78.38% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.119, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.119, 0, 1); }
        91.69% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.032, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.032, 0, 1); }
        100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }

    @keyframes bouncejs-playVisible {
        0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 300, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 300, 0, 1); }
        1.57% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 239.594, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 239.594, 0, 1); }
        1.67% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 235.005, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 235.005, 0, 1); }
        2.02% { -webkit-transform: matrix3d(1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 218.468, 0, 1); transform: matrix3d(1.89, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 218.468, 0, 1); }
        2.35% { -webkit-transform: matrix3d(2.444, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 202.174, 0, 1); transform: matrix3d(2.444, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 202.174, 0, 1); }
        2.9% { -webkit-transform: matrix3d(2.828, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 174.441, 0, 1); transform: matrix3d(2.828, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 174.441, 0, 1); }
        3.03% { -webkit-transform: matrix3d(2.839, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 167.738, 0, 1); transform: matrix3d(2.839, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 167.738, 0, 1); }
        3.51% { -webkit-transform: matrix3d(2.697, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 143.44, 0, 1); transform: matrix3d(2.697, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 143.44, 0, 1); }
        3.57% { -webkit-transform: matrix3d(2.665, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 140.513, 0, 1); transform: matrix3d(2.665, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 140.513, 0, 1); }
        3.61% { -webkit-transform: matrix3d(2.639, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 138.348, 0, 1); transform: matrix3d(2.639, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 138.348, 0, 1); }
        4.09% { -webkit-transform: matrix3d(1.782, 0, 0, 0, 0, 1.318, 0, 0, 0, 0, 1, 0, 0, 114.376, 0, 1); transform: matrix3d(1.782, 0, 0, 0, 0, 1.318, 0, 0, 0, 0, 1, 0, 0, 114.376, 0, 1); }
        4.77% { -webkit-transform: matrix3d(0.936, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, 80.955, 0, 1); transform: matrix3d(0.936, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, 80.955, 0, 1); }
        5.12% { -webkit-transform: matrix3d(0.678, 0, 0, 0, 0, 1.757, 0, 0, 0, 0, 1, 0, 0, 64.402, 0, 1); transform: matrix3d(0.678, 0, 0, 0, 0, 1.757, 0, 0, 0, 0, 1, 0, 0, 64.402, 0, 1); }
        5.81% { -webkit-transform: matrix3d(0.42, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, 34.014, 0, 1); transform: matrix3d(0.42, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, 34.014, 0, 1); }
        5.88% { -webkit-transform: matrix3d(0.406, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, 30.888, 0, 1); transform: matrix3d(0.406, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, 30.888, 0, 1); }
        6.17% { -webkit-transform: matrix3d(0.369, 0, 0, 0, 0, 1.833, 0, 0, 0, 0, 1, 0, 0, 18.969, 0, 1); transform: matrix3d(0.369, 0, 0, 0, 0, 1.833, 0, 0, 0, 0, 1, 0, 0, 18.969, 0, 1); }
        7.21% { -webkit-transform: matrix3d(0.409, 0, 0, 0, 0, 1.629, 0, 0, 0, 0, 1, 0, 0, -18.614, 0, 1); transform: matrix3d(0.409, 0, 0, 0, 0, 1.629, 0, 0, 0, 0, 1, 0, 0, -18.614, 0, 1); }
        7.3% { -webkit-transform: matrix3d(0.424, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -21.769, 0, 1); transform: matrix3d(0.424, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -21.769, 0, 1); }
        8.68% { -webkit-transform: matrix3d(0.775, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -58.087, 0, 1); transform: matrix3d(0.775, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -58.087, 0, 1); }
        8.71% { -webkit-transform: matrix3d(0.783, 0, 0, 0, 0, 1.139, 0, 0, 0, 0, 1, 0, 0, -58.624, 0, 1); transform: matrix3d(0.783, 0, 0, 0, 0, 1.139, 0, 0, 0, 0, 1, 0, 0, -58.624, 0, 1); }
        9.29% { -webkit-transform: matrix3d(0.959, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, -69.317, 0, 1); transform: matrix3d(0.959, 0, 0, 0, 0, 0.965, 0, 0, 0, 0, 1, 0, 0, -69.317, 0, 1); }
        10.06% { -webkit-transform: matrix3d(1.149, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -79.477, 0, 1); transform: matrix3d(1.149, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -79.477, 0, 1); }
        11.38% { -webkit-transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.114, 0, 1); transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.114, 0, 1); }
        11.44% { -webkit-transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.204, 0, 1); transform: matrix3d(1.277, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -87.204, 0, 1); }
        11.61% { -webkit-transform: matrix3d(1.274, 0, 0, 0, 0, 0.675, 0, 0, 0, 0, 1, 0, 0, -87.321, 0, 1); transform: matrix3d(1.274, 0, 0, 0, 0, 0.675, 0, 0, 0, 0, 1, 0, 0, -87.321, 0, 1); }
        12.86% { -webkit-transform: matrix3d(1.184, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -83.434, 0, 1); transform: matrix3d(1.184, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -83.434, 0, 1); }
        14.24% { -webkit-transform: matrix3d(1.038, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -71.553, 0, 1); transform: matrix3d(1.038, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -71.553, 0, 1); }
        15.02% { -webkit-transform: matrix3d(0.974, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, -62.593, 0, 1); transform: matrix3d(0.974, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1, 0, 0, -62.593, 0, 1); }
        15.55% { -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.076, 0, 0, 0, 0, 1, 0, 0, -55.807, 0, 1); transform: matrix3d(0.942, 0, 0, 0, 0, 1.076, 0, 0, 0, 0, 1, 0, 0, -55.807, 0, 1); }
        15.62% { -webkit-transform: matrix3d(0.938, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -54.811, 0, 1); transform: matrix3d(0.938, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -54.811, 0, 1); }
        17% { -webkit-transform: matrix3d(0.91, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -36.172, 0, 1); transform: matrix3d(0.91, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -36.172, 0, 1); }
        18.32% { -webkit-transform: matrix3d(0.935, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, -18.882, 0, 1); transform: matrix3d(0.935, 0, 0, 0, 0, 1.094, 0, 0, 0, 0, 1, 0, 0, -18.882, 0, 1); }
        18.33% { -webkit-transform: matrix3d(0.935, 0, 0, 0, 0, 1.093, 0, 0, 0, 0, 1, 0, 0, -18.695, 0, 1); transform: matrix3d(0.935, 0, 0, 0, 0, 1.093, 0, 0, 0, 0, 1, 0, 0, -18.695, 0, 1); }
        19.81% { -webkit-transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -1.939, 0, 1); transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -1.939, 0, 1); }
        21.72% { -webkit-transform: matrix3d(1.03, 0, 0, 0, 0, 0.957, 0, 0, 0, 0, 1, 0, 0, 13.784, 0, 1); transform: matrix3d(1.03, 0, 0, 0, 0, 0.957, 0, 0, 0, 0, 1, 0, 0, 13.784, 0, 1); }
        22.56% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, 18.251, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, 18.251, 0, 1); }
        25.03% { -webkit-transform: matrix3d(1.01, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 23.326, 0, 1); transform: matrix3d(1.01, 0, 0, 0, 0, 0.985, 0, 0, 0, 0, 1, 0, 0, 23.326, 0, 1); }
        28.12% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 17.449, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 17.449, 0, 1); }
        31.73% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 4.778, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 4.778, 0, 1); }
        33.69% { -webkit-transform: matrix3d(1.005, 0, 0, 0, 0, 0.993, 0, 0, 0, 0, 1, 0, 0, -0.886, 0, 1); transform: matrix3d(1.005, 0, 0, 0, 0, 0.993, 0, 0, 0, 0, 1, 0, 0, -0.886, 0, 1); }
        38.34% { -webkit-transform: matrix3d(0.998, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, -6.231, 0, 1); transform: matrix3d(0.998, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, -6.231, 0, 1); }
        39.25% { -webkit-transform: matrix3d(0.998, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, -6.065, 0, 1); transform: matrix3d(0.998, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, -6.065, 0, 1); }
        44.81% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, -1.507, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, -1.507, 0, 1); }
        48.06% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.828, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.828, 0, 1); }
        51.65% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.665, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.665, 0, 1); }
        65.07% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.445, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.445, 0, 1); }
        78.38% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.119, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0.119, 0, 1); }
        91.69% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.032, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.032, 0, 1); }
        100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
    }

    /* Generated with Bounce.js. Edit at https://goo.gl/146bWz */

    @-webkit-keyframes bouncejs-playHidden {
        0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        0.08% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.425, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.425, 0, 1); }
        0.18% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.95, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.95, 0, 1); }
        0.27% { -webkit-transform: matrix3d(1.292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.41, 0, 1); transform: matrix3d(1.292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.41, 0, 1); }
        0.37% { -webkit-transform: matrix3d(1.603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.974, 0, 1); transform: matrix3d(1.603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.974, 0, 1); }
        0.47% { -webkit-transform: matrix3d(1.77, 0, 0, 0, 0, 1.092, 0, 0, 0, 0, 1, 0, 0, -2.595, 0, 1); transform: matrix3d(1.77, 0, 0, 0, 0, 1.092, 0, 0, 0, 0, 1, 0, 0, -2.595, 0, 1); }
        0.75% { -webkit-transform: matrix3d(1.919, 0, 0, 0, 0, 1.31, 0, 0, 0, 0, 1, 0, 0, -4.312, 0, 1); transform: matrix3d(1.919, 0, 0, 0, 0, 1.31, 0, 0, 0, 0, 1, 0, 0, -4.312, 0, 1); }
        1.32% { -webkit-transform: matrix3d(1.571, 0, 0, 0, 0, 1.645, 0, 0, 0, 0, 1, 0, 0, -8.224, 0, 1); transform: matrix3d(1.571, 0, 0, 0, 0, 1.645, 0, 0, 0, 0, 1, 0, 0, -8.224, 0, 1); }
        1.33% { -webkit-transform: matrix3d(1.563, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, -8.29, 0, 1); transform: matrix3d(1.563, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, -8.29, 0, 1); }
        1.76% { -webkit-transform: matrix3d(1.201, 0, 0, 0, 0, 1.793, 0, 0, 0, 0, 1, 0, 0, -11.571, 0, 1); transform: matrix3d(1.201, 0, 0, 0, 0, 1.793, 0, 0, 0, 0, 1, 0, 0, -11.571, 0, 1); }
        2.19% { -webkit-transform: matrix3d(0.948, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, -14.995, 0, 1); transform: matrix3d(0.948, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, -14.995, 0, 1); }
        2.25% { -webkit-transform: matrix3d(0.922, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, -15.483, 0, 1); transform: matrix3d(0.922, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, -15.483, 0, 1); }
        2.9% { -webkit-transform: matrix3d(0.736, 0, 0, 0, 0, 1.762, 0, 0, 0, 0, 1, 0, 0, -20.927, 0, 1); transform: matrix3d(0.736, 0, 0, 0, 0, 1.762, 0, 0, 0, 0, 1, 0, 0, -20.927, 0, 1); }
        3.05% { -webkit-transform: matrix3d(0.711, 0, 0, 0, 0, 1.724, 0, 0, 0, 0, 1, 0, 0, -22.165, 0, 1); transform: matrix3d(0.711, 0, 0, 0, 0, 1.724, 0, 0, 0, 0, 1, 0, 0, -22.165, 0, 1); }
        3.43% { -webkit-transform: matrix3d(0.658, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -25.418, 0, 1); transform: matrix3d(0.658, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -25.418, 0, 1); }
        3.92% { -webkit-transform: matrix3d(0.622, 0, 0, 0, 0, 1.412, 0, 0, 0, 0, 1, 0, 0, -29.557, 0, 1); transform: matrix3d(0.622, 0, 0, 0, 0, 1.412, 0, 0, 0, 0, 1, 0, 0, -29.557, 0, 1); }
        4.58% { -webkit-transform: matrix3d(0.656, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -34.965, 0, 1); transform: matrix3d(0.656, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -34.965, 0, 1); }
        4.78% { -webkit-transform: matrix3d(0.69, 0, 0, 0, 0, 1.071, 0, 0, 0, 0, 1, 0, 0, -36.595, 0, 1); transform: matrix3d(0.69, 0, 0, 0, 0, 1.071, 0, 0, 0, 0, 1, 0, 0, -36.595, 0, 1); }
        5.72% { -webkit-transform: matrix3d(0.937, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -43.719, 0, 1); transform: matrix3d(0.937, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -43.719, 0, 1); }
        5.81% { -webkit-transform: matrix3d(0.963, 0, 0, 0, 0, 0.773, 0, 0, 0, 0, 1, 0, 0, -44.331, 0, 1); transform: matrix3d(0.963, 0, 0, 0, 0, 0.773, 0, 0, 0, 0, 1, 0, 0, -44.331, 0, 1); }
        6.51% { -webkit-transform: matrix3d(1.143, 0, 0, 0, 0, 0.683, 0, 0, 0, 0, 1, 0, 0, -49.023, 0, 1); transform: matrix3d(1.143, 0, 0, 0, 0, 0.683, 0, 0, 0, 0, 1, 0, 0, -49.023, 0, 1); }
        6.86% { -webkit-transform: matrix3d(1.2, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -51.176, 0, 1); transform: matrix3d(1.2, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -51.176, 0, 1); }
        8.04% { -webkit-transform: matrix3d(1.207, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -57.192, 0, 1); transform: matrix3d(1.207, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -57.192, 0, 1); }
        8.24% { -webkit-transform: matrix3d(1.188, 0, 0, 0, 0, 0.796, 0, 0, 0, 0, 1, 0, 0, -58.006, 0, 1); transform: matrix3d(1.188, 0, 0, 0, 0, 0.796, 0, 0, 0, 0, 1, 0, 0, -58.006, 0, 1); }
        8.71% { -webkit-transform: matrix3d(1.131, 0, 0, 0, 0, 0.869, 0, 0, 0, 0, 1, 0, 0, -59.771, 0, 1); transform: matrix3d(1.131, 0, 0, 0, 0, 0.869, 0, 0, 0, 0, 1, 0, 0, -59.771, 0, 1); }
        9.19% { -webkit-transform: matrix3d(1.067, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -61.271, 0, 1); transform: matrix3d(1.067, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -61.271, 0, 1); }
        10.33% { -webkit-transform: matrix3d(0.947, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -63.668, 0, 1); transform: matrix3d(0.947, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -63.668, 0, 1); }
        11.48% { -webkit-transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.54, 0, 1); transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.54, 0, 1); }
        11.61% { -webkit-transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); }
        11.7% { -webkit-transform: matrix3d(0.908, 0, 0, 0, 0, 1.125, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); transform: matrix3d(0.908, 0, 0, 0, 0, 1.125, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); }
        13.8% { -webkit-transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -62.674, 0, 1); transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -62.674, 0, 1); }
        14.01% { -webkit-transform: matrix3d(0.993, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, -62.334, 0, 1); transform: matrix3d(0.993, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, -62.334, 0, 1); }
        15.02% { -webkit-transform: matrix3d(1.023, 0, 0, 0, 0, 0.966, 0, 0, 0, 0, 1, 0, 0, -60.432, 0, 1); transform: matrix3d(1.023, 0, 0, 0, 0, 0.966, 0, 0, 0, 0, 1, 0, 0, -60.432, 0, 1); }
        16.03% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.233, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.233, 0, 1); }
        16.09% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.098, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.098, 0, 1); }
        16.13% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.009, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.009, 0, 1); }
        18.32% { -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 56.962, 0, 1); transform: matrix3d(1.007, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 56.962, 0, 1); }
        18.76% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 77.188, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 77.188, 0, 1); }
        20.64% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 150.636, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 150.636, 0, 1); }
        20.7% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 152.749, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 152.749, 0, 1); }
        20.74% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 153.872, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 153.872, 0, 1); }
        21.3% { -webkit-transform: matrix3d(0.774, 0.632, 0, 0, -0.614, 0.797, 0, 0, 0, 0, 1, 0, 0, 170.894, 0, 1); transform: matrix3d(0.774, 0.632, 0, 0, -0.614, 0.797, 0, 0, 0, 0, 1, 0, 0, 170.894, 0, 1); }
        21.53% { -webkit-transform: matrix3d(0.665, 0.752, 0, 0, -0.732, 0.683, 0, 0, 0, 0, 1, 0, 0, 177.313, 0, 1); transform: matrix3d(0.665, 0.752, 0, 0, -0.732, 0.683, 0, 0, 0, 0, 1, 0, 0, 177.313, 0, 1); }
        21.72% { -webkit-transform: matrix3d(0.595, 0.81, 0, 0, -0.791, 0.61, 0, 0, 0, 0, 1, 0, 0, 182.25, 0, 1); transform: matrix3d(0.595, 0.81, 0, 0, -0.791, 0.61, 0, 0, 0, 0, 1, 0, 0, 182.25, 0, 1); }
        22.33% { -webkit-transform: matrix3d(0.505, 0.869, 0, 0, -0.856, 0.513, 0, 0, 0, 0, 1, 0, 0, 197.013, 0, 1); transform: matrix3d(0.505, 0.869, 0, 0, -0.856, 0.513, 0, 0, 0, 0, 1, 0, 0, 197.013, 0, 1); }
        23.5% { -webkit-transform: matrix3d(0.697, 0.716, 0, 0, -0.717, 0.697, 0, 0, 0, 0, 1, 0, 0, 220.894, 0, 1); transform: matrix3d(0.697, 0.716, 0, 0, -0.717, 0.697, 0, 0, 0, 0, 1, 0, 0, 220.894, 0, 1); }
        24.65% { -webkit-transform: matrix3d(0.915, 0.411, 0, 0, -0.415, 0.905, 0, 0, 0, 0, 1, 0, 0, 240.595, 0, 1); transform: matrix3d(0.915, 0.411, 0, 0, -0.415, 0.905, 0, 0, 0, 0, 1, 0, 0, 240.595, 0, 1); }
        25.03% { -webkit-transform: matrix3d(0.954, 0.312, 0, 0, -0.315, 0.943, 0, 0, 0, 0, 1, 0, 0, 246.56, 0, 1); transform: matrix3d(0.954, 0.312, 0, 0, -0.315, 0.943, 0, 0, 0, 0, 1, 0, 0, 246.56, 0, 1); }
        25.32% { -webkit-transform: matrix3d(0.975, 0.242, 0, 0, -0.245, 0.963, 0, 0, 0, 0, 1, 0, 0, 251.011, 0, 1); transform: matrix3d(0.975, 0.242, 0, 0, -0.245, 0.963, 0, 0, 0, 0, 1, 0, 0, 251.011, 0, 1); }
        25.82% { -webkit-transform: matrix3d(0.995, 0.141, 0, 0, -0.142, 0.983, 0, 0, 0, 0, 1, 0, 0, 258.454, 0, 1); transform: matrix3d(0.995, 0.141, 0, 0, -0.142, 0.983, 0, 0, 0, 0, 1, 0, 0, 258.454, 0, 1); }
        26.39% { -webkit-transform: matrix3d(1.002, 0.055, 0, 0, -0.056, 0.993, 0, 0, 0, 0, 1, 0, 0, 266.491, 0, 1); transform: matrix3d(1.002, 0.055, 0, 0, -0.056, 0.993, 0, 0, 0, 0, 1, 0, 0, 266.491, 0, 1); }
        26.96% { -webkit-transform: matrix3d(1.002, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 273.99, 0, 1); transform: matrix3d(1.002, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 273.99, 0, 1); }
        28.56% { -webkit-transform: matrix3d(0.998, 0.049, 0, 0, -0.049, 1, 0, 0, 0, 0, 1, 0, 0, 291.758, 0, 1); transform: matrix3d(0.998, 0.049, 0, 0, -0.049, 1, 0, 0, 0, 0, 1, 0, 0, 291.758, 0, 1); }
        29.93% { -webkit-transform: matrix3d(0.997, 0.035, 0, 0, -0.035, 1.002, 0, 0, 0, 0, 1, 0, 0, 303.091, 0, 1); transform: matrix3d(0.997, 0.035, 0, 0, -0.035, 1.002, 0, 0, 0, 0, 1, 0, 0, 303.091, 0, 1); }
        31.57% { -webkit-transform: matrix3d(0.999, 0.011, 0, 0, -0.011, 1.001, 0, 0, 0, 0, 1, 0, 0, 312.722, 0, 1); transform: matrix3d(0.999, 0.011, 0, 0, -0.011, 1.001, 0, 0, 0, 0, 1, 0, 0, 312.722, 0, 1); }
        31.73% { -webkit-transform: matrix3d(0.999, 0.01, 0, 0, -0.01, 1.001, 0, 0, 0, 0, 1, 0, 0, 313.528, 0, 1); transform: matrix3d(0.999, 0.01, 0, 0, -0.01, 1.001, 0, 0, 0, 0, 1, 0, 0, 313.528, 0, 1); }
        33.19% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 319.786, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 319.786, 0, 1); }
        34.54% { -webkit-transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 324.743, 0, 1); transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 324.743, 0, 1); }
        34.79% { -webkit-transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 325.587, 0, 1); transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 325.587, 0, 1); }
        36.66% { -webkit-transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 331.423, 0, 1); transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 331.423, 0, 1); }
        37.24% { -webkit-transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 332.989, 0, 1); transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 332.989, 0, 1); }
        38.34% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 335.493, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 335.493, 0, 1); }
        39.42% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 337.639, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 337.639, 0, 1); }
        41.01% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 340.331, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 340.331, 0, 1); }
        45.62% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 345.632, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 345.632, 0, 1); }
        46.92% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 346.592, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 346.592, 0, 1); }
        51.65% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 348.685, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 348.685, 0, 1); }
        57.18% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.471, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.471, 0, 1); }
        65.07% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.76, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.76, 0, 1); }
        78.38% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350.005, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350.005, 0, 1); }
        91.69% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.994, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.994, 0, 1); opacity: 0; }
        98.16% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.999, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.999, 0, 1); opacity: 0; }
        100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350, 0, 1);
            opacity: 0;}
    }

    @keyframes bouncejs-playHidden {
        0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
        0.08% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.425, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.425, 0, 1); }
        0.18% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.95, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.95, 0, 1); }
        0.27% { -webkit-transform: matrix3d(1.292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.41, 0, 1); transform: matrix3d(1.292, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.41, 0, 1); }
        0.37% { -webkit-transform: matrix3d(1.603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.974, 0, 1); transform: matrix3d(1.603, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.974, 0, 1); }
        0.47% { -webkit-transform: matrix3d(1.77, 0, 0, 0, 0, 1.092, 0, 0, 0, 0, 1, 0, 0, -2.595, 0, 1); transform: matrix3d(1.77, 0, 0, 0, 0, 1.092, 0, 0, 0, 0, 1, 0, 0, -2.595, 0, 1); }
        0.75% { -webkit-transform: matrix3d(1.919, 0, 0, 0, 0, 1.31, 0, 0, 0, 0, 1, 0, 0, -4.312, 0, 1); transform: matrix3d(1.919, 0, 0, 0, 0, 1.31, 0, 0, 0, 0, 1, 0, 0, -4.312, 0, 1); }
        1.32% { -webkit-transform: matrix3d(1.571, 0, 0, 0, 0, 1.645, 0, 0, 0, 0, 1, 0, 0, -8.224, 0, 1); transform: matrix3d(1.571, 0, 0, 0, 0, 1.645, 0, 0, 0, 0, 1, 0, 0, -8.224, 0, 1); }
        1.33% { -webkit-transform: matrix3d(1.563, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, -8.29, 0, 1); transform: matrix3d(1.563, 0, 0, 0, 0, 1.649, 0, 0, 0, 0, 1, 0, 0, -8.29, 0, 1); }
        1.76% { -webkit-transform: matrix3d(1.201, 0, 0, 0, 0, 1.793, 0, 0, 0, 0, 1, 0, 0, -11.571, 0, 1); transform: matrix3d(1.201, 0, 0, 0, 0, 1.793, 0, 0, 0, 0, 1, 0, 0, -11.571, 0, 1); }
        2.19% { -webkit-transform: matrix3d(0.948, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, -14.995, 0, 1); transform: matrix3d(0.948, 0, 0, 0, 0, 1.845, 0, 0, 0, 0, 1, 0, 0, -14.995, 0, 1); }
        2.25% { -webkit-transform: matrix3d(0.922, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, -15.483, 0, 1); transform: matrix3d(0.922, 0, 0, 0, 0, 1.846, 0, 0, 0, 0, 1, 0, 0, -15.483, 0, 1); }
        2.9% { -webkit-transform: matrix3d(0.736, 0, 0, 0, 0, 1.762, 0, 0, 0, 0, 1, 0, 0, -20.927, 0, 1); transform: matrix3d(0.736, 0, 0, 0, 0, 1.762, 0, 0, 0, 0, 1, 0, 0, -20.927, 0, 1); }
        3.05% { -webkit-transform: matrix3d(0.711, 0, 0, 0, 0, 1.724, 0, 0, 0, 0, 1, 0, 0, -22.165, 0, 1); transform: matrix3d(0.711, 0, 0, 0, 0, 1.724, 0, 0, 0, 0, 1, 0, 0, -22.165, 0, 1); }
        3.43% { -webkit-transform: matrix3d(0.658, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -25.418, 0, 1); transform: matrix3d(0.658, 0, 0, 0, 0, 1.601, 0, 0, 0, 0, 1, 0, 0, -25.418, 0, 1); }
        3.92% { -webkit-transform: matrix3d(0.622, 0, 0, 0, 0, 1.412, 0, 0, 0, 0, 1, 0, 0, -29.557, 0, 1); transform: matrix3d(0.622, 0, 0, 0, 0, 1.412, 0, 0, 0, 0, 1, 0, 0, -29.557, 0, 1); }
        4.58% { -webkit-transform: matrix3d(0.656, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -34.965, 0, 1); transform: matrix3d(0.656, 0, 0, 0, 0, 1.148, 0, 0, 0, 0, 1, 0, 0, -34.965, 0, 1); }
        4.78% { -webkit-transform: matrix3d(0.69, 0, 0, 0, 0, 1.071, 0, 0, 0, 0, 1, 0, 0, -36.595, 0, 1); transform: matrix3d(0.69, 0, 0, 0, 0, 1.071, 0, 0, 0, 0, 1, 0, 0, -36.595, 0, 1); }
        5.72% { -webkit-transform: matrix3d(0.937, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -43.719, 0, 1); transform: matrix3d(0.937, 0, 0, 0, 0, 0.791, 0, 0, 0, 0, 1, 0, 0, -43.719, 0, 1); }
        5.81% { -webkit-transform: matrix3d(0.963, 0, 0, 0, 0, 0.773, 0, 0, 0, 0, 1, 0, 0, -44.331, 0, 1); transform: matrix3d(0.963, 0, 0, 0, 0, 0.773, 0, 0, 0, 0, 1, 0, 0, -44.331, 0, 1); }
        6.51% { -webkit-transform: matrix3d(1.143, 0, 0, 0, 0, 0.683, 0, 0, 0, 0, 1, 0, 0, -49.023, 0, 1); transform: matrix3d(1.143, 0, 0, 0, 0, 0.683, 0, 0, 0, 0, 1, 0, 0, -49.023, 0, 1); }
        6.86% { -webkit-transform: matrix3d(1.2, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -51.176, 0, 1); transform: matrix3d(1.2, 0, 0, 0, 0, 0.673, 0, 0, 0, 0, 1, 0, 0, -51.176, 0, 1); }
        8.04% { -webkit-transform: matrix3d(1.207, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -57.192, 0, 1); transform: matrix3d(1.207, 0, 0, 0, 0, 0.768, 0, 0, 0, 0, 1, 0, 0, -57.192, 0, 1); }
        8.24% { -webkit-transform: matrix3d(1.188, 0, 0, 0, 0, 0.796, 0, 0, 0, 0, 1, 0, 0, -58.006, 0, 1); transform: matrix3d(1.188, 0, 0, 0, 0, 0.796, 0, 0, 0, 0, 1, 0, 0, -58.006, 0, 1); }
        8.71% { -webkit-transform: matrix3d(1.131, 0, 0, 0, 0, 0.869, 0, 0, 0, 0, 1, 0, 0, -59.771, 0, 1); transform: matrix3d(1.131, 0, 0, 0, 0, 0.869, 0, 0, 0, 0, 1, 0, 0, -59.771, 0, 1); }
        9.19% { -webkit-transform: matrix3d(1.067, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -61.271, 0, 1); transform: matrix3d(1.067, 0, 0, 0, 0, 0.944, 0, 0, 0, 0, 1, 0, 0, -61.271, 0, 1); }
        10.33% { -webkit-transform: matrix3d(0.947, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -63.668, 0, 1); transform: matrix3d(0.947, 0, 0, 0, 0, 1.081, 0, 0, 0, 0, 1, 0, 0, -63.668, 0, 1); }
        11.48% { -webkit-transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.54, 0, 1); transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.54, 0, 1); }
        11.61% { -webkit-transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); transform: matrix3d(0.907, 0, 0, 0, 0, 1.126, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); }
        11.7% { -webkit-transform: matrix3d(0.908, 0, 0, 0, 0, 1.125, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); transform: matrix3d(0.908, 0, 0, 0, 0, 1.125, 0, 0, 0, 0, 1, 0, 0, -64.553, 0, 1); }
        13.8% { -webkit-transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -62.674, 0, 1); transform: matrix3d(0.985, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, -62.674, 0, 1); }
        14.01% { -webkit-transform: matrix3d(0.993, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, -62.334, 0, 1); transform: matrix3d(0.993, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, -62.334, 0, 1); }
        15.02% { -webkit-transform: matrix3d(1.023, 0, 0, 0, 0, 0.966, 0, 0, 0, 0, 1, 0, 0, -60.432, 0, 1); transform: matrix3d(1.023, 0, 0, 0, 0, 0.966, 0, 0, 0, 0, 1, 0, 0, -60.432, 0, 1); }
        16.03% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.233, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.233, 0, 1); }
        16.09% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.098, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.098, 0, 1); }
        16.13% { -webkit-transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.009, 0, 1); transform: matrix3d(1.034, 0, 0, 0, 0, 0.951, 0, 0, 0, 0, 1, 0, 0, -58.009, 0, 1); }
        18.32% { -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 56.962, 0, 1); transform: matrix3d(1.007, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 56.962, 0, 1); }
        18.76% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 77.188, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 77.188, 0, 1); }
        20.64% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 150.636, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 150.636, 0, 1); }
        20.7% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 152.749, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 152.749, 0, 1); }
        20.74% { -webkit-transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 153.872, 0, 1); transform: matrix3d(0.987, 0, 0, 0, 0, 1.019, 0, 0, 0, 0, 1, 0, 0, 153.872, 0, 1); }
        21.3% { -webkit-transform: matrix3d(0.774, 0.632, 0, 0, -0.614, 0.797, 0, 0, 0, 0, 1, 0, 0, 170.894, 0, 1); transform: matrix3d(0.774, 0.632, 0, 0, -0.614, 0.797, 0, 0, 0, 0, 1, 0, 0, 170.894, 0, 1); }
        21.53% { -webkit-transform: matrix3d(0.665, 0.752, 0, 0, -0.732, 0.683, 0, 0, 0, 0, 1, 0, 0, 177.313, 0, 1); transform: matrix3d(0.665, 0.752, 0, 0, -0.732, 0.683, 0, 0, 0, 0, 1, 0, 0, 177.313, 0, 1); }
        21.72% { -webkit-transform: matrix3d(0.595, 0.81, 0, 0, -0.791, 0.61, 0, 0, 0, 0, 1, 0, 0, 182.25, 0, 1); transform: matrix3d(0.595, 0.81, 0, 0, -0.791, 0.61, 0, 0, 0, 0, 1, 0, 0, 182.25, 0, 1); }
        22.33% { -webkit-transform: matrix3d(0.505, 0.869, 0, 0, -0.856, 0.513, 0, 0, 0, 0, 1, 0, 0, 197.013, 0, 1); transform: matrix3d(0.505, 0.869, 0, 0, -0.856, 0.513, 0, 0, 0, 0, 1, 0, 0, 197.013, 0, 1); }
        23.5% { -webkit-transform: matrix3d(0.697, 0.716, 0, 0, -0.717, 0.697, 0, 0, 0, 0, 1, 0, 0, 220.894, 0, 1); transform: matrix3d(0.697, 0.716, 0, 0, -0.717, 0.697, 0, 0, 0, 0, 1, 0, 0, 220.894, 0, 1); }
        24.65% { -webkit-transform: matrix3d(0.915, 0.411, 0, 0, -0.415, 0.905, 0, 0, 0, 0, 1, 0, 0, 240.595, 0, 1); transform: matrix3d(0.915, 0.411, 0, 0, -0.415, 0.905, 0, 0, 0, 0, 1, 0, 0, 240.595, 0, 1); }
        25.03% { -webkit-transform: matrix3d(0.954, 0.312, 0, 0, -0.315, 0.943, 0, 0, 0, 0, 1, 0, 0, 246.56, 0, 1); transform: matrix3d(0.954, 0.312, 0, 0, -0.315, 0.943, 0, 0, 0, 0, 1, 0, 0, 246.56, 0, 1); }
        25.32% { -webkit-transform: matrix3d(0.975, 0.242, 0, 0, -0.245, 0.963, 0, 0, 0, 0, 1, 0, 0, 251.011, 0, 1); transform: matrix3d(0.975, 0.242, 0, 0, -0.245, 0.963, 0, 0, 0, 0, 1, 0, 0, 251.011, 0, 1); }
        25.82% { -webkit-transform: matrix3d(0.995, 0.141, 0, 0, -0.142, 0.983, 0, 0, 0, 0, 1, 0, 0, 258.454, 0, 1); transform: matrix3d(0.995, 0.141, 0, 0, -0.142, 0.983, 0, 0, 0, 0, 1, 0, 0, 258.454, 0, 1); }
        26.39% { -webkit-transform: matrix3d(1.002, 0.055, 0, 0, -0.056, 0.993, 0, 0, 0, 0, 1, 0, 0, 266.491, 0, 1); transform: matrix3d(1.002, 0.055, 0, 0, -0.056, 0.993, 0, 0, 0, 0, 1, 0, 0, 266.491, 0, 1); }
        26.96% { -webkit-transform: matrix3d(1.002, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 273.99, 0, 1); transform: matrix3d(1.002, 0, 0, 0, 0, 0.996, 0, 0, 0, 0, 1, 0, 0, 273.99, 0, 1); }
        28.56% { -webkit-transform: matrix3d(0.998, 0.049, 0, 0, -0.049, 1, 0, 0, 0, 0, 1, 0, 0, 291.758, 0, 1); transform: matrix3d(0.998, 0.049, 0, 0, -0.049, 1, 0, 0, 0, 0, 1, 0, 0, 291.758, 0, 1); }
        29.93% { -webkit-transform: matrix3d(0.997, 0.035, 0, 0, -0.035, 1.002, 0, 0, 0, 0, 1, 0, 0, 303.091, 0, 1); transform: matrix3d(0.997, 0.035, 0, 0, -0.035, 1.002, 0, 0, 0, 0, 1, 0, 0, 303.091, 0, 1); }
        31.57% { -webkit-transform: matrix3d(0.999, 0.011, 0, 0, -0.011, 1.001, 0, 0, 0, 0, 1, 0, 0, 312.722, 0, 1); transform: matrix3d(0.999, 0.011, 0, 0, -0.011, 1.001, 0, 0, 0, 0, 1, 0, 0, 312.722, 0, 1); }
        31.73% { -webkit-transform: matrix3d(0.999, 0.01, 0, 0, -0.01, 1.001, 0, 0, 0, 0, 1, 0, 0, 313.528, 0, 1); transform: matrix3d(0.999, 0.01, 0, 0, -0.01, 1.001, 0, 0, 0, 0, 1, 0, 0, 313.528, 0, 1); }
        33.19% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 319.786, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 319.786, 0, 1); }
        34.54% { -webkit-transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 324.743, 0, 1); transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 324.743, 0, 1); }
        34.79% { -webkit-transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 325.587, 0, 1); transform: matrix3d(1.001, 0.002, 0, 0, -0.002, 0.999, 0, 0, 0, 0, 1, 0, 0, 325.587, 0, 1); }
        36.66% { -webkit-transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 331.423, 0, 1); transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 331.423, 0, 1); }
        37.24% { -webkit-transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 332.989, 0, 1); transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0, 332.989, 0, 1); }
        38.34% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 335.493, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 335.493, 0, 1); }
        39.42% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 337.639, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 337.639, 0, 1); }
        41.01% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 340.331, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 340.331, 0, 1); }
        45.62% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 345.632, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 345.632, 0, 1); }
        46.92% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 346.592, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 346.592, 0, 1); }
        51.65% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 348.685, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 348.685, 0, 1); }
        57.18% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.471, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.471, 0, 1); }
        65.07% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.76, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.76, 0, 1); }
        78.38% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350.005, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350.005, 0, 1); }
        91.69% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.994, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.994, 0, 1); opacity: 0; }
        98.16% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.999, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 349.999, 0, 1); opacity: 0; }
        100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 350, 0, 1);
            opacity: 0;}
    }
</style>