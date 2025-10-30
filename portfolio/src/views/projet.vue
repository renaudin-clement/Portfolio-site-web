    
<script setup>

</script>

<template>
        <h1>Projets</h1>

         <section>
          <p>
            Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
             magister adhibitis aliis iam quae essent agenda praedoctis, et adsistebant hinc inde
             notarii, quid quaesitum esset, quidve responsum, cursim ad Caesarem perferentes, cuius
             imperio truci, stimulis reginae exsertantis aurem subinde per aulaeum, nec diluere obiecta
            permissi nec defensi periere conplures.
          </p>

        </section>

        <section class="conteneur_projet">

          <section class="projet">
            <a  id="haut" class="projet" href="#Projet1">    
              <h2>Projet 1</h2>
                  <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
              </p>
            </a> 
          </section>

        <section class="projet">
            <a class="projet" href="#Projet2"> 
              <h2>Projet 2</h2> 
                <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
              </p>
            </a>
          </section>

        <section class="projet">
            <a class="projet" href="#Projet3"> 
              <h2>Escarmouche <br> Mur-Tale</h2>
                <img src="/img/github-mark.svg" alt="github"  height="50" width="50">
              <p>
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
                Proinde die funestis interrogationibus praestituto imaginarius iudex equitum resedit 
              </p>
            </a>
          </section>
        </section>
       
        <section id="Projet1">
          <h2>Projet 1</h2>
        </section>

        

        <section id="Projet2">
          <h2>Projet 2</h2> 
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