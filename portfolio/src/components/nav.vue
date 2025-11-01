<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}

</script>

<template>

    <nav class="navbar">
           <RouterLink to="/"><div class="logo">renaudinclement.fr</div></RouterLink>
            <ul class="nav-links" :class="{ active: isActive }">
                <RouterLink to="/"><li>          Accueil               </li></RouterLink>
                <RouterLink to="/projet"><li>    Projet      </li></RouterLink>    
                <RouterLink to="/portfolio"><li> Portfolio    </li></RouterLink>
                <RouterLink to="/contat"><li>    Contact   </li></RouterLink>
            </ul>
          <div class="hamburger" @click="toggleMenu">
              <span></span>
              <span></span>
              <span></span>
          </div>
    </nav>

</template>

<style scoped >
nav{
    z-index: 100;
    position: relative;
}

.router-link-active{
    text-decoration : none;
    color:white;
}


.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 0.5em 1em;
    color: white;
    width: 100%;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1em;
    margin: 0;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #00bcd4;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: white;
}


li{
    text-align: center;
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
