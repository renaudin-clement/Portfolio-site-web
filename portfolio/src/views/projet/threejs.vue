    
<script setup>
import ChartExample from "../../components/chattest.vue"


import { ref, onMounted, onBeforeUnmount } from "vue";

const slideTimeout = 2000;

const slides = ref([
  { src: "/img/projet/portfolio 3d/photo3.png",    alt: "Image 1" },
  { src: "/img/projet/portfolio 3d/photo1.png", alt: "Image 2" },
  { src: "/img/projet/portfolio 3d/photo2.png",    alt: "Image 3" },
  { src: "/img/projet/portfolio 3d/photo.png",    alt: "Image 4" },
]);


const currentSlide = ref(0);
let intervalId = null;

// Navigation
const goTo = (index) => {
  if (index < 0) index = slides.value.length - 1;
  if (index >= slides.value.length) index = 0;
  currentSlide.value = index;
};

const nextSlide = () => goTo(currentSlide.value + 1);
const prevSlide = () => goTo(currentSlide.value - 1);

// Auto défilement
const startAuto = () => {
  intervalId = setInterval(nextSlide, slideTimeout);
};
const pauseAuto = () => clearInterval(intervalId);
const resumeAuto = () => startAuto();

// Swipe
let startX = 0;
const touchStart = (e) => (startX = e.touches[0].clientX);
const touchEnd = (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX > endX) nextSlide();
  else if (startX < endX) prevSlide();
};

onMounted(() => startAuto());
onBeforeUnmount(() => clearInterval(intervalId));

</script>

<template>
        <h1>Threejs</h1>

         <section>
          <p>
            Bienvenue sur mon portfolio <br>
            vous y trouverez une sélection de mes projets,
            mettant en valeur mes compétences en développement
            et mon parcours à l’IUT d’Orléans.
            
          </p>

        </section>

        <section class="conteneur_projet">
          <section class="projet">
            <a class="projet" href="#Compétence"> 
              <h2>Compétence</h2>
              <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Présentation des langages, outils et technologies que j’utilise dans mes projets. 
              </p>
            </a>
          </section>

          <section class="projet">
            <a class="projet" href="#Projet"> 
              <h2>Projet</h2>
              <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Illustrations concrètes de mes réalisations et de mon savoir-faire technique, réalisées à l’IUT d’Orléans et à titre personnel.
              </p>
            </a>
          </section>

          <section class="projet">
            <a class="projet" href="#Exemple"> 
              <h2>Exemple</h2>
              <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Liste de petit exemples de projets réalisée
              </p>
          </a>
          </section>

        </section>
       

        <section id="Compétence">
          <h2>technologies utilisées</h2>
          <section class="compete">
              <ul style="display: flex;">
                <li><img src="/img/logo/JavaScript-logo.png"    alt=""></li>
                <li><img src="/img/logo/HTML5_logo_and_wordmark.png" style="width: 11em;"   alt=""></li>
                <li><img src="/img/logo/CSS3_logo_and_wordmark.png"    alt=""></li>
                <li><img src="/img/logo/ThreeJS.png"    alt=""></li>
                <li><img src="/img/logo/Logo-Vuejs.png"    alt="" style="width: 15em;"></li>
                <li><img src="/img/logo/Blender-Symbol.png"    alt="" style="width: 13em;"></li>
              </ul>
          </section>
        </section>

        <section id="Projet">
          <h2>État du projet</h2> 
          <div class="container">
            <div class="carousel">

                <!-- SLIDES -->
                <div class="carousel-inner">
                  <div
                    v-for="(slide, i) in slides"
                    :key="i"
                    class="slide"
                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                    @mouseover="pauseAuto"
                    @mouseout="resumeAuto"
                    @touchstart="touchStart"
                    @touchend="touchEnd"
                  >
                    <img class="imgs" :src="slide.src" :alt="slide.alt" />
                  </div>
                </div>

                <div class="carousel-controls">
                  <button @click="prevSlide">Précédent</button>
                  <div class="carousel-dots">
                    <span v-for="(dot, i) in slides"
                        :key="i"
                        class="dot"
                        :class="{ active: currentSlide === i, inactive: currentSlide !== i }"
                        @click="goTo(i)"
                      >
                    </span>
                  </div>

                  <button @click="nextSlide">Suivant</button>
                </div>



            </div>

            <div class="carousel">
               <ChartExample></ChartExample>
            </div>

          </div>

        </section>

        <section id="Exemple">
          <h2>Derniere avancement</h2>

          <ChartExample></ChartExample>
        </section>



</template>



<style scoped>
.conteneur_projet{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.projet{
    display: flex;
    flex-wrap: wrap;
    background-color: beige;
    color: black;
    justify-content: center;
    align-items: center;
    margin:1em;
}

h2{
    width: 100%;
    text-align: center;
}



.projet > p{
    width: 100%;
    text-align: justify;
}




@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 50px;
        right: 0;
        width: 100%;
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: flex;
    }


    .conteneur_projet {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .projet {
        display: flex;
        flex-wrap: wrap;
        background-color: beige;
        justify-content: center;
        align-items: center;
        margin: 1em;
        width: 100%;
    }

    .carousel-inner {
      display: flex;
      overflow: hidden;
      height: 25vh;
      flex-wrap: nowrap;
    }


    .carousel-controls {
      position: absolute;
      z-index: 5;
      left: 10%;
      right: 10%;
      top: 106%;
      display: flex;
      justify-content: space-between;
    }
    

    .container {
      overflow: hidden;
      height: 75vh;
      flex-wrap: wrap;
    }

    .carousel {
        position: relative;
        height: 50%;
        width: 100%;
        padding: 1em;
    }

    .compete ul{
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }
    

    .carousel-controls {
        top: 74%;
    }

}

.router-link-active{
    text-decoration : none;
    color:white;
}

.compete{
  width: 100%;
}

li img{
  width: 8em;
  padding: 1em;
}


li{
  list-style: none;
  display: flex;
  justify-content: center;
}

ul{
    justify-content: center;
}

.imgs{
  width: 100%;
  height: 100%;
}

</style>