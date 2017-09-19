<template>
  <div>
    <svg class="svg-defs" viewBox="0 0 150 150">
      <pattern id="pt-noise"
               width="160" height="80"
               patternUnits="userSpaceOnUse">
        <image xlink:href="https://media.giphy.com/media/skU5qA0NB7Y0o/giphy.gif" width="160px" height="80px"/>
      </pattern>
    </svg>

    <div class="wrapper">
      <svg class="svg-visible">
        <symbol id="s-text">
          <text x="50%" y="50%" dy=".35em"
                text-anchor="middle">Neurospace</text>
        </symbol>

        <g fill="url(#pt-noise)">
          <use xlink:href="#s-text" class="patterned-text"/>
        </g>

      </svg>
    </div>
  </div>
</template>

<script>
  export default {
      data () {
        return {

        }
      }

  }
</script>

<style>
  svg,
  .wrapper {
    position: absolute;
    width: 1100px;
    height: 230px;
  }

  .wrapper {
    transform: translate(-50%, -50%);
    animation: svg-sizes 6s linear alternate;
  }

  .svg-visible {
    animation: svg-move 6s linear alternate;
  }

  text {
    font-family: Questrial;
    font-weight: bold;
    font-size: 60px;
  }

  @keyframes svg-sizes {
    0% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    10% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    35% {
      opacity: .6;
      width: 1100px;
      height: 1%;
    }
    50% {
      opacity: 1;
      width: 1100px;
      height: 230px;
    }
  }
  @keyframes svg-move {
    0% {
      top: -115px;
      left: -550px;
    }
    10% {
      top: -115px;
      left: -550px;
    }
    35% {
      top: -115px;
      left: 0;
    }
    50% {
      top: 0;
      left: 0;
    }
  }
</style>
