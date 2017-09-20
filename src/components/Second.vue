<template>
    <v-app style="background-color: #242933;" transition="fade-transition">
        <v-toolbar class="elevation-5" style="background-color: #242933;" >
            <v-toolbar-title class="title">The problem</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn href="/home" flat light class="white--text tbtn">Home</v-btn>
            <v-btn href="/solution" flat light class="white--text tbtn">Our solution</v-btn>
            <v-btn href="/team" flat light class="white--text tbtn">Our team</v-btn>
        </v-toolbar>
        <main>
            <v-container fluid fill-content grid-list-md text-xs-center style="">
                <v-layout row wrap align-center justify-center  >
                    <v-flex xs12 lg12>
                <div class="ns hidden-md-and-down shadowfilter" style="margin-top: 10%; ">The stress</div>
                <div class="title-text"> Did you know?</div>
                </v-flex>
                <v-flex xs12 lg4>
                    <div class="explain-text">
                        Since the days aboard space stations are not a 24 hour light to dark cycle, an astronaut's circadian rythm gets thrown off after a few days. This means their biological clock will not be synchronized with the longer "Day" aboard the station, causing trouble on the sleeping routines of the astronauts.
                    </div>
                </v-flex>
                <v-flex xs12 lg12>
                <v-btn href="https://www.nasa.gov/mission_pages/station/research/experiments/892.html" outline class="cyan--text" style="margin:25px">Learn more</v-btn>
                </v-flex>
            </v-layout>
            </v-container>

            <img class="shadowfilterfixed" src="../assets/stress.jpg" style="width:100%"></img>

            <v-container fluid fill-content grid-list-md text-xs-center style="">
                <v-flex xs12 lg12>
                    <div class="title-hw" style="padding:0">
                        Why is Stress such an important problem?
                    </div>
                </v-flex>
                <v-flex xs12 lg6 offset-lg3>
                    <div class="explain-text" style="padding:0; font-size:18px">
                        Astronauts can't take vacations once in space, since the stay is limited time is extremely valuable. This means they must work and move along, making discoveries and taking care of studies that will get us closer to a deeper space exploration or the understanding of the universe. Astronauts must be efficient, this is very difficult and puts a lot of weight on their shoulders because they have so much to do. A big pile of work is already enough to stress the normal person. On top of that, austronauts deal with a hostile environment filled with dangers that threaten their lives. It's very stressful to live outside of earth. Although it's very much worth it, stress has implications on the health of the person affected by it.
                    </div>
                </v-flex>
                <v-layout justify-center row wrap style="background-color: #252c36; margin-top:50px;">
                <v-flex xs12 lg4 >
                    <div class="subtitle-hw" style="padding:0; font-size:2em">
                        What does stress do to you?
                    </div>
                    <div class="explain-text" style="padding:0">
                        Since stress is produced by the central nervous system, it is tied closely with our immune system. Scientific research confirms that people with more stressful jobs seem more likely to get sick. Stress can cause headaches, elevated blood pressure, chest pain, depression, and anxiety. It also causes sleep deprivation which leads to more problems. Stress has a negatiive effect on mood, cognition, interpersonal interaction, and overall well-being. A person who is stressed will be fatigued and not concentrated or able enough to do a job as efficiently as possible. Stress affects mental health, physical health, and the work of astronauts.
                    </div>
                </v-flex>
                <v-flex xs12 lg4 offset-lg1>
                    <div class="subtitle-hw" style="padding:0; font-size:2em">
                        Sleep Deprivation
                    </div>
                    <div class="explain-text" style="padding:0">
                        According to studies, astronauts have a difficulty falling asleep and typically lose an hour of sleep per night, resulting on a very fatigued crew. Because of this disturbance on the circadian rythm, astronauts show a loss in cognitive performance, insomnia, and impairment of alertness. As they are required to mantain a high level of cognitive performance and vigilance, sleep deprivation may deeply affect their jobs.
                    </div>
                </v-flex>
            </v-layout>
            <v-layout justify-center row wrap style="margin-top:50px">
                <v-flex xs12 lg12 text-xs-left style="padding-bottom:5%;">
                <v-layout align-center justify-center>
                    <div class="title-hw justify-right " style="font-size:2.5em">
                    More References
                </div>
            </v-layout>
                </v-flex>

                <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;">
                    <v-layout align-center justify-center>
                        <div class="ns-img-border ">
                            <img style="height:250px;" src="../assets/inmune.jpeg"  class=" shadowfilterfixed">
                        </div>

                    </v-layout>
                    <div class="explain-text" style="padding-left:16px; padding-right:16px">
                        More on the immune system and other physical problems in space related to stress.
                    </div>
                    <v-btn href="https://www.nasa.gov/mission_pages/station/research/experiments/892.html" outline class="cyan--text" style="margin:25px">Learn more</v-btn>


                </v-flex>
                <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;" >

                    <v-layout align-center justify-center>
                        <div class="ns-img-border ">
                            <img style="height:250px;" src="../assets/mental.jpg" class="shadowfilterfixed" >
                        </div>

                    </v-layout >
                    <div class="explain-text" style="padding-left:16px; padding-right:16px">
                        More on the effects on mental health and interpersonal relations.
                    </div>
                    <v-btn href="https://www.nimh.nih.gov/health/publications/stress/index.shtml" outline class="cyan--text" style="margin:25px">Learn more</v-btn>

                </v-flex>
                <v-flex xs12 lg4 text-xs-center style="padding-bottom:5%;" >
                    <v-layout align-center justify-center>
                        <div class="ns-img-border ">
                            <img style="height:250px;" src="../assets/sleep.jpg" class="shadowfilterfixed">
                        </div>

                    </v-layout>
                    <div class="explain-text" style="padding-left:16px; padding-right:16px">
                        More on sleep deprivation in space. Study complies data to solve this problem.
                    </div>
                    <v-btn href="https://www.nasa.gov/content/study-compiles-data-on-problem-of-sleep-deprivation-in-astronauts/" outline class="cyan--text" style="margin:25px">Learn more</v-btn>

                </v-flex>
            </v-layout>
            </v-container>
        </main>
        <footer></footer>
    </v-app>
</template>
<script>
export default {

    data: () => ({

    })
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
</style>
