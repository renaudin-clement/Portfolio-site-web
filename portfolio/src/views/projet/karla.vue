    
<script setup>

</script>

<template>

        <h1>Karla</h1>

         <section>
          <p>
            Bienvenue sur mon portfolio <br>
            vous y trouverez une sélection de mes projets,
            mettant en valeur mes compétences en développement
            et mon parcours à l’IUT d’Orléans.
            
          </p>


          <ul style="display: flex;">
            <li><img src="/img/projet/tel/photo_09.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_09(1).png" alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_11.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_16.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_20.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_20(1).png" alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_31.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_31(1).png" alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_33.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_46.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_46(1).png" alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_55.png"    alt="" width="80%"></li>
            <li><img src="/img/projet/tel/photo_55(1).png" alt="" width="80%"></li>
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

          <ul style="display: flex;">
            <li><img src="/img/logo/flutter-logo.png"    alt="" width="20%"></li>
            <li><img src="/img/logo/SQLite370.png"    alt="" width="20%"></li>
          </ul>
        </section>

        <section id="Projet">
          <h2>État du projet</h2> 

          <div class="container">
              <div class="carousel">
                  <div class="carousel-inner">
                      <div class="slide">
                        <div>
                          <img src="/img/projet/tel/photo_16.png"
                              alt="Image 1">
                        </div>
                      </div>
                      <div class="slide">
                          <img src="/img/projet/tel/photo_09(1).png"
                              alt="Image 2">
                      </div>
                      <div class="slide">
                          <img src="/img/projet/tel/photo_11.png"
                              alt="Image 3">
                      </div>
                      <div class="slide">
                          <img src="/img/projet/tel/photo_09.png"
                              alt="Image 4">
                      </div>
                      <div class="slide">
                          <img src="/img/projet/tel/photo_20.png"
                              alt="Image 5">
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

image{
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
    

}

.router-link-active{
    text-decoration : none;
    color:white;
}













</style>