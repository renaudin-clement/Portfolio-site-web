    
<script setup>

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

          <ul style="display: flex;">
            <li><img src="/img/projet/portfolio 3d/photo.png" alt=""  width="25%"></li>
            <li><img src="/img/projet/portfolio 3d/photo1.png" alt="" width="25%"></li>
            <li><img src="/img/projet/portfolio 3d/photo2.png" alt="" width="25%"></li>
            <li><img src="/img/projet/portfolio 3d/photo3.png" alt="" width="25%"></li>
          </ul>



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
                <li><img src="/img/logo/HTML5_logo_and_wordmark.png"    alt=""></li>
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
                  <div class="carousel-inner">
                      <div class="slide">
                        <div>
                          <img src="/img/projet/portfolio 3d/photo3.png"
                              alt="Image 1">
                        </div>
                      </div>
                      <div class="slide">
                          <img src="/img/projet/portfolio 3d/photo1.png"
                              alt="Image 2">
                      </div>
                      <div class="slide">
                          <img src="/img/projet/portfolio 3d/photo2.png"
                              alt="Image 3">
                      </div>
                      <div class="slide">
                          <img src="/img/projet/portfolio 3d/photo.png"
                              alt="Image 4">
                      </div>
                  </div>
                  <div class="carousel-controls">
                      <button id="prev">Précédent</button>
                      <button id="next">Suivant</button>
                  </div>
                  <div class="carousel-dots"></div>
              </div>
          </div>

        </section>

        <section id="Exemple">
          <h2>Derniere avancement</h2>
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
      height: 35vh;
    }


    .compete ul{
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
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

</style>