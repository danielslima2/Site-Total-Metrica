<template>
  <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" id="faleconosco">
    <div id="formulario">
      <h1>Fale Conosco</h1>
      <p>
        Amplie o faturamento da sua empresa com a metodologia Total Métrica de
        aceleração de vendas. Nossa equipe de especialistas entrará em contato.
      </p>
      <div id="linhas">
        <div id="linhaum"></div>
        <div id="linhadois"></div>
      </div>
      <form>
        <div class="quest" id="quest1">
          <label for="nome">Nome</label><br />
          <input type="text" id="nome" name="nome" /><br />
        </div>
        <div class="quest" id="quest2">
          <label for="email">E-mail</label><br />
          <input type="text" id="email" name="email" /><br />
        </div>
        <div class="quest" id="quest3">
          <label for="fone">Telefone + DDD</label><br />
          <input type="number" id="fone" name="fone" /><br />
        </div>
        <div class="quest" id="quest4">
          <label for="empresa">Empresa</label><br />
          <input type="text" id="empresa" name="empresa" /><br />
        </div>
        <div class="quest" id="quest5">
          <label for="site">Site</label><br />
          <input type="url" id="site" name="site" /><br />
        </div>
        <div class="quest" id="quest6">
          <label for="area">Qual a área de atuação do seu negócio?</label><br />
          <select name="" id="area">
            <option value="">E-commerce</option>
            <option value="">Varejo</option>
            <option value="">Bares e Restaurantes</option>
            <option value="">E-commerce</option></select
          ><br />
        </div>
        <div class="quest" id="quest7">
          <label for="servico">Selecione o tipo de serviço</label><br />
          <select name="" id="servico">
            <option value="">Aplicativo</option>
            <option value="">Loja Virtual</option>
            <option value="">Redes Sociais</option>
            <option value="">Site institucional</option>
            <option value="">Marketing e publicidade</option></select
          ><br />
        </div>
        <div class="quest" id="quest8">
          <label for="periodo">Qual o melhor período para uma ligação?</label
          ><br />
          <select name="" id="periodo">
            <option value="">Manhã</option>
            <option value="">Tarde</option></select
          ><br />
        </div>

        <button>Solicitar contato</button>
      </form>
    </div>
    <div class="animation">
      <div class="imagem">
        <div class="filtro">
          <img src="./assets/mobile.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
#faleconosco {
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
}
#formulario {
  width: 90%;
  padding-bottom: 30px;
}
h1 {
  font-size: 36px;
  line-height: 1.4em;
  font-weight: 800;
  letter-spacing: 0.3px;
  color: #202020;
  margin: 0px 0px 20px 0px;
  font-family: "Quicksand";
}
p {
  font-family: "Quicksand";
  font-size: 17px;
  font-family: "Ubuntu";
  line-height: 1.5;
  color: #444444;
}
#linhas {
  display: flex;
  padding-top: 0px;
  padding-bottom: 20px;
}
#linhaum {
  background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
  width: 9px;
  height: 5px;
  border-radius: 20px;
  margin-right: 10px;
}
#linhadois {
  background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
  width: 48px;
  height: 5px;
  border-radius: 20px;
}
form {
  width: 100%;
}
.quest {
  margin-bottom: 20px;
}
label {
  font-family: "Ubuntu";
  font-size: 1.1em;
  color: #3d3d3d;
}
input {
  width: 99%;
  height: 50px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
}
select {
  width: 100%;
  height: 54px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  font-family: "Ubuntu";
  padding: 16px 48px 16px 18px;
  font-size: 16px;
  color: #3d3d3d;
}
button {
  background-color: #22a8b3;
  color: #ffffff;
  line-height: 4.3em;
  border-style: solid;
  border-width: 0px 0px 0px 0px;
  border-radius: 30px 30px 30px 30px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  font-family: "Ubuntu";
  margin-top: 5px;
}
.animation {
  width: 100%;
  height: 50vh;
}
.imagem {
  width: 60%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./assets/fundomobile.jpg");
  border-radius: 0 35px 35px 0px;
}
.filtro {
  padding-left: 30px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(217deg, #00d9a6e0 0%, #9be15de0 100%);
  border-radius: 0px 35px 35px 0px;
  display: flex;

  align-items: center;
}
img {
  width: 140%;
  margin-left: 10%;
  margin-top: 50%;
}
@media screen and (min-width: 600px) {
  .animation {
    height: 65vh;
  }
}
@media screen and (min-width: 650px) {
  .animation {
    height: 75vh;
  }
  img {
    width: 120%;
  }
}
@media screen and (min-width: 800px) {
  #faleconosco {
    flex-direction: column-reverse;
  }
  .animation {
    height: 85vh;
    padding-bottom: 30px;
  }
  .imagem {
    width: 70%;
  }
  form {
    width: 99%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #quest1 {
    width: 100%;
  }
  #quest2 {
    width: 48%;
  }
  #quest3 {
    width: 48%;
  }
  #quest4 {
    width: 48%;
  }
  #quest5 {
    width: 48%;
  }
  #quest6 {
    width: 48%;
  }
  #quest7 {
    width: 48%;
  }
  #quest8 {
    width: 100%;
  }
}
@media screen and (min-width: 1020px) {
  #faleconosco {
    flex-direction: row-reverse;
  }
  .quest7 label {
    width: 40%;
  }
}
</style>