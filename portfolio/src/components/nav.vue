<script setup>


</script>

<template>

    <nav class="navbar">
          <div class="logo">renaudinclement.fr</div>
            <ul class="nav-links">
                <li>    <RouterLink to="/">Accueil</RouterLink>               </li>
                <li>    <RouterLink to="/projet">Projet</RouterLink>          </li>
                <li>    <RouterLink to="/portfolio">Portfolio</RouterLink>    </li>
                <li>    <RouterLink to="/contat">Contact</RouterLink>         </li>
            </ul>
          <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
          </div>
    </nav>

</template>

<style scoped>



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


</style>
