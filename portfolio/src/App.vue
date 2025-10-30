<script setup>
  import Footer from './components/footer.vue'
  import Nav from './components/nav.vue'



</script>

<template>



    <Nav/>

    <main>
    <router-view :key="$route.fullPath"></router-view>
    </main>

    <Footer/>

  
</template>

<style scoped>

</style>
