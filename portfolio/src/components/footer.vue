<script setup>

</script>

<template>
    
<footer>
    <ul class="footer_section_ul">
        <li>    <RouterLink to="/">Accueil</RouterLink>               </li>
        <li>    <RouterLink to="/projet">Projet</RouterLink>          </li>
        <li>    <RouterLink to="/portfolio">Portfolio</RouterLink>    </li>
        <li>    <RouterLink to="/contat">Contact</RouterLink>         </li>
    </ul>

    <section class="footer_section2">

        <p>&copy; 2025 renaudin-clement.</p>
        
        <ul class="footer_section_ul_link">
        <li>
            <a  href="https://www.linkedin.com/in/renaudin-clement/" >
                <img src="/img/linkedin.svg" alt="linkedin" height="32" width="32">
            </a>
        </li>
        <li>
            <a href="https://github.com/renaudin-clement">
            <img src="/img/github-mark-white.svg" alt="github"  height="32" width="32">
            </a>
        </li>
        </ul>
    </section>
</footer>

</template>

<style scoped>

footer{
  display: flex;
  flex-wrap: wrap;
  background-color: #333;
  color: white;
}

.footer_section_ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background-color: #333;
  color: white;
}

a{
    text-decoration: none;
    color: white;
    transition: color 0.3s;
    align-content: center;
    
}

ul{
list-style: none;
margin-left: 0;
padding-left: 0;

}

.footer_section_ul > li{
  display: flex;
}

.footer_section_ul_link{
  display: flex;
  justify-content: start;
}

.footer_section2{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
    
.footer_section2 > * ,.footer_section2 > * > li{
padding: 5px;
margin: 5px;
}
      
</style>
