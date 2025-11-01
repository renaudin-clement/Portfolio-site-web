    
<script setup>

</script>

<template>
        <h1>Projets</h1>

         <section>
          <p>
           Toujours en quête d’apprentissage et d’innovation, je consacre une partie de mon temps à développer des projets personnels. Du web au logiciel, en passant par la 3D, ces réalisations reflètent ma curiosité, ma passion et ma volonté d’explorer sans limite le monde du numérique.
          </p>

        </section>

        <section class="conteneur_projet">

          <section class="projet">
            <a  id="haut" class="projet" href="#Projet1">    
              <h2>Site web 3D</h2>
                  <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Site web utilisant threes js et blender qui sera la version V2 du portfolio
              </p>
            </a> 
          </section>

        <section class="projet">
            <a class="projet" href="#Projet2"> 
              <h2>Karlas</h2> 
                <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Application mobile creer avec flutter l'objectif et de voir plusieur fonctionnaliter de flutter
                tout en creant une implication simple permettant denregistrer des images
              </p>
            </a>
          </section>

        <section class="projet">
            <a class="projet" href="#Projet3"> 
              <h2>Escarmouche <br> Mur-Tale</h2>
                <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Jeu de stratégie au tour par tour 2D peut etre 3D ou l'objectif est de battre l'adversaire  
                problème avant d'attaquer votre adversaire vous devez determiner ou il se trouve  
              </p>
            </a>
          </section>
        </section>
       
        <section id="Projet1">
          <h2>Site web 3D</h2>
        </section>

        

        <section id="Projet2">
          <h2>Karlas</h2> 
        </section>

        <section id="Projet3">
          <h2>Escarmouche <br> Mur-Tale</h2>

          <a href="#haut">haut de page</a>
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



    

}



</style>