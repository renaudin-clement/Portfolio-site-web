<script setup>
  import Footer from './components/footer.vue'
  import Nav from './components/nav.vue'



</script>

<template>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>test</title>
    <link href="/statics/navbarre.css" rel="stylesheet">
    <link href="/statics/navbarre.css" rel="stylesheet">
    <link href="/statics/responsive.css" rel="stylesheet">
    <link href="/statics/footer.css" rel="stylesheet">
    <link href="/statics/style.css" rel="stylesheet">


    <title>portfoliov2</title>
  </head>
  <body>

    <Nav/>

    <main>
    <router-view :key="$route.fullPath"></router-view>
    </main>

    <Footer/>

  </body>
</html>
  
</template>

<style scoped>

</style>
