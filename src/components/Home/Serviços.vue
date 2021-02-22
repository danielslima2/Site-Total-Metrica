<template>
  <div id="servicos">
    <div  id="ladoesquerdo">


      <div  id="texto" data-aos="fade-left" data-aos-duration="3000">
        <div id="titulo">
          <h1 >Inteligência Comercial Aplicada</h1>
          <h2>e Alavancagem de Negócios</h2>
        </div>
        <div id="linhas">
          <div id="linhaum"></div>
          <div id="linhadois"></div>
        </div>
        <div class="t1">
          <p>
            Há mais de 10 anos, oferecendo as melhores em tecnologias,
            integrações e estratégias de marketing digital.
          </p>
        </div>
        
      </div>
      <div id="imagem">
          <img src="./assets/svg.png" alt="" />
        </div>



    </div>
      



      <div data-aos="fade-right"  data-aos-delay="300" data-aos-duration="3000" id="cards">
        <div id="coluna1">
            <div class="card">
          <div class="imagem">
            <img class="img" src="./assets/arrow.png" alt="" />
          </div>

          <p class="titcard">Atraia Clientes Qualificados</p>
          <p class="txtcard">
            Definimos o perfil ideal do seu cliente através de dados
            estatísticos e da sua base de informações. A partir da inteligência
            de algoritmos, garantimos performance na geração de leads com
            elevado potencial de compra.
          </p>
        </div>
        <div class="card">
          <div class="imagem">
            <img class="img" src="./assets/cel.png" alt="" />
          </div>
          <p class="titcard">Aplicativos</p>
          <p class="txtcard">
            Desenvolvimento de aplicativos Android e iOS para o aprimoramento da
            relação com seus clientes e integração digital do seu negócio.
          </p>
        </div>
        </div>
        <div id="coluna2">
            <div class="card">
          <div class="imagem">
            <img class="img" src="./assets/box.png" alt="" />
          </div>

          <p class="titcard">Aumente suas Vendas</p>
          <p class="txtcard">
            Tenha os especialistas da Total Métrica ao seu lado no desenho de
            estratégias e no acompanhamento do seu desempenho comercial.
            Criaremos mecânicas de conversão de oportunidades para o seu negócio
            na internet.
          </p>
        </div>
        <div class="card">
          <div class="imagem">
            <img class="img" src="./assets/carrinho.png" alt="" />
          </div>

          <p class="titcard">Lojas Virtuais</p>
          <p class="txtcard">
            Desenvolvimento Lojas Virtuais em diversos segmentos e nichos de
            mercado.
          </p>
        </div>
        </div>
      </div>
   
  </div>
</template>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
#servicos {
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: center;
}
#ladoesquerdo{
width: 100%;
}
#texto {
  text-align: center;
  font-family: "Quicksand", Sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 33px;
  line-height: 1.6em;
  margin: 0px 0px 0px 5px;
  color: #00d9a6;
  font-weight: 700;
}
h2 {
  font-size: 33px;
  margin: 0;
  line-height: 45px;
  color: #202020;
  font-weight: 700;
}
#linhas {
  display: flex;
  padding-top: 20px;
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
.t1 {
  width: 80%;
  font-weight: 700;
  line-height: 1.5em;
  color: #393939;
}
#imagem {
  width: 90%;
}
img {
  width: 100%;
}
.img {
  width: 30%;
}
.imagem {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
#cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#coluna1{
 width: 100%;
 height:100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
}
#coluna2{
    width: 100%;
 height:100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
}
.card {
  width: 90%;
  height: 50%;
  border-radius: 15px;
  box-shadow: 0px 3px 35px 0px rgb(0 0 0 / 14%);
  padding: 20px 50px 30px 47px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}
.card:hover {
  transition: all 1200ms cubic-bezier(0.165, 0.84, 0.44, 1);
  background-image: linear-gradient(39deg, #00d9a6 0%, #9be15d 100%);
}
.titcard {
  width: 100%;
  font-size: 29px;
  font-weight: 500;
  line-height: 36px;
  color: #202020;
  font-family: "Quicksand";
  margin-bottom: 0;
  margin-top: 0;
}
.txtcard {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  font-family: "Ubuntu", sans-serif;
  color: #393939;
}
p {
  margin: 0;
}
@media screen and (max-width:320px) {
    #coluna1{
        height: 120vh;
    }
    #coluna2{
        height: 120vh;
    }
}
@media screen and (min-width:600px) {
    .img{
        width: 20%;
    }
    
}
@media screen and (min-width:800px) {
    .img{
        width: 30%;
    }
  
    
}
@media screen and (min-width: 1000px) {
  #servicos {
    padding-top: 100px;
    flex-direction: row;
    height: 120vh;
    justify-content: space-around;
  }
  #ladoesquerdo{
    width: 45%;
    height: 100%;
  }
  #texto {
    width: 100%;
    height: 60%;
    align-items: center;
  }
 #imagem{
   height: 40%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: flex-end;
 }
 img{
   width: unset;
   height: 100%;
 }
  #titulo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 50px;
    width: 80%;
    line-height: 54px ;
    text-align: left;
  }
  h2 {
    font-size: 55px;
    width: 80%;
    text-align: left;
    line-height: 1.1em;
  }
  #linhas {
    width: 80%;
    align-items: flex-start;
  }
  .t1 {
    font-size: 18px;
    text-align: left;
  }
  #cards {
    height: 100%;
    width: 52%;
    flex-direction: row;
    justify-content: space-between;
  }
  #coluna1{
    width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  #coluna2{
    width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }
  .card {
    width: 100%;
    height: 48%;
    margin: 0;
  }

}

@media screen and (min-width: 1500px) {
  #servicos {
    width: 70%;
    height: 110vh;
  }
  .img{
        width: 35%;
    }
}
@media screen and (min-width: 1600px) {
  #servicos {
    
    height: 90vh;
  }
  
}
@media screen and (min-width: 1700px) {
  #servicos {
    
    height: 80vh;
  }
  
}

</style>