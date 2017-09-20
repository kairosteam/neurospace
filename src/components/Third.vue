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

      </main>
      <footer>

      </footer>
  </v-app>
</template>
<script>
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
