<script setup>

</script>

<template>


<h1>Contact</h1>

<section>
  <p>
    Vous souhaitez en savoir plus sur mes projets ou collaborer avec moi ? <br><br>
    Laissez-moi un message ci-dessous !
  </p>

</section>

  <section class="contact_section">
    <section class="info_perso">
      <section class="contact_perso">
          <div>
            <img src="/img/icon/home.svg" alt="home">
          </div>
          <section>
            <h3>Adresse</h3>
            <p> 
              Orléans&nbsp;&nbsp;&nbsp;&nbsp;: 45100 <br>
              Le Mans&nbsp;&nbsp;&nbsp;: 72100
            </p>
          </section>
      </section>

      <section class="contact_perso">
          <div>
            <img src="/img/icon/contact_phone.svg" alt="phone">
          </div>
          <section>
            <h3>Telephone</h3>
            <p> 06 09 80 27 89</p>
          </section>
      </section>

      <section class="contact_perso">
          <div>
            <img src="/img/icon/mail.svg" alt="e-mails">
          </div>
          <section>
            <h3>E-mails</h3>
            <p>pro.renaudin.clement@gmail.com</p>
          </section>
      </section>



      <section class="contact_persoV2">
          <div>
            <img src="/img/icon/reseau.png" alt="home">
          </div>
          <h3>Réseau</h3>

          <section>
            <a  href="https://www.linkedin.com/in/renaudin-clement/" > <img src="/img/linkedinnoir.png" alt="linkedin" height="32" width="32"></a>
            <p>Linkedin</p>
          </section>

          <section>
            <a href="https://github.com/renaudin-clement"><img src="/img/github-mark.svg" alt="github"  height="32" width="32"></a>
            <p>github</p>
          </section>
      </section>

    </section>

      <form action="#" class="formul">
        <fieldset>
            <legend>Me Contacter</legend>
            <label for="Nom">Nom</label>
            <input id="Nom" name="Nom" type="text" placeholder="Nom"> <br>


            <label for="Adresse e-mails">Adresse e-mail <em>*</em></label>
            <input id="Adresse e-mails" name="Adresse e-mails" type="text" placeholder="Adresse e-mails"> <br>

            <label for="messages">Messages <em>*</em> </label>
            <textarea name="messages" id="messages" placeholder="messages"></textarea> <br>

            <button type="submit"> Valider </button>
        </fieldset>
      
      </form>
  </section>


</template>



<style scoped>

</style>