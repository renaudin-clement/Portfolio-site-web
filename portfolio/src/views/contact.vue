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
p {
  margin: 0px;
}
 


fieldset {
  margin-bottom: 15px;
  padding: 4em;
  width: 1em;
}
 
legend {
  padding: 0px 3px;
  font-weight: bold;
  font-variant: small-caps;
}
 
label {
  display: inline-block;
  vertical-align: top;
  margin: 6px;
}
 
em {
  font-weight: bold;
  font-style: normal;
  color: #f00;
}
 
input:focus {
  background: #eaeaea;
}
 
input, textarea {
  width: 249px;
}
 
textarea {
  height: 100px;
}
 

 
input[type=submit] {
  width: 150px;
  padding: 10px;
}

.contact_perso , .contact_persoV2{
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1em;
  padding-left: 25%;
}



.contact_perso > div > img{
  padding: 1em;
}

.contact_section{
  display: flex;
  align-items: center;
}

.contact_section > *{
  width: 50%;
}


h3{
  margin: 0;
}




.contact_persoV2 > div > img{
  max-width: 40px;
  padding: 1em;
}




.contact_persoV2 > section{
  padding: 1em;
  text-align: center;
}


h1{
  text-align: center;
}




@media (max-width: 768px) {

    fieldset{
      padding: 0.5em;
    }

    .contact_section{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    h3{
      margin: 0;
      text-align: center;
    }

    .contact_section > *{
        width: 100%;
        padding: 1em;
    }

    .contact_section > form{
      display: flex;
      justify-content: center;
    }

    .contact_perso {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        padding: 0;
        padding-left: 0;
    }

    .contact_perso > div{
      display: flex;
      justify-content: center;
      width: 100%;
    }


    .contact_perso > div > img{
      width: 4em;
    }

    .contact_persoV2 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 1em;

    }

    .contact_persoV2 > h3{
      width: 100%;  
      text-align: center;
    }

    .contact_persoV2 > section{
      width: 20%;  
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      padding-top: 1em;
    }

    
    .contact_perso > section > p{
      padding-top: 1em;
    }
    
    .contact_persoV2 > section > p , .contact_persoV2 > section > a {
      width: 100%;  
    }

    .contact_persoV2 > div{
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 1em;
    }

    .contact_persoV2 > div > img{
      width: 4em;
    }


}
</style>