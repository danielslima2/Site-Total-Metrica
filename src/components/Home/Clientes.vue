<template>
  <div id="clientes">
    <h1>CONHEÇA OS NOSSOS CLIENTES E PORTFÓLIOS</h1>
    <p data-aos="fade-right" data-aos-duration="1000">
      Dezenas de trabalhos concluídos e outros em andamento.
      <br />
      Confira alguns de nossos clientes e as soluções que criamos para eles!
    </p>

    <Carrosselum></Carrosselum>
    


    <div class="carrossel">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="./assets/vert-rouge.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/geek-gamer.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/Ville-Vie.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/ju-markan.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/básica-branca.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/lcn.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/aria-social.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/band-musical.png" alt="" />
        </swiper-slide>
         <swiper-slide>
          <img src="./assets/colorear.png" alt="" />
        </swiper-slide>
        

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div id="cards">
      <div id="um" class="card">
          
      </div>
      <div id="dois" class="card">
        <div class="filtro"></div>
      </div>
      <div id="tres" class="card">
        <div class="filtro"></div>
      </div>
      <div id="quatro" class="card">
        <div class="filtro"></div>
      </div>
      <div id="cinco" class="card">
        <div class="filtro"></div>
      </div>
      <div id="seis" class="card">
        <div class="filtro"></div>
      </div>
      <div id="sete" class="card">
        <div class="filtro"></div>
      </div>
      <div id="oito" class="card">
        <div class="filtro"></div>
      </div>
    </div>
    <button>VER TODOS</button>
  </div>
</template>

<script>
import Carrosselum from "./Carrosselum.vue"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


  export default {
    name: 'swiper-example-loop-group',
    title: 'Loop mode with multiple slides per group',
    components: {
      Swiper,
      SwiperSlide,
      Carrosselum,
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          autoplay: {
    delay: 1000,
  },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
                    600: {
                        slidesPerView: 3,
                    },
                    900:{
                      slidesPerView: 4,
                    },
                    1000:{
                      slidesPerView: 5,
                    },
                    1100:{
                      slidesPerView: 6,
                    }
          }}
      }
    }
  }
</script>

<style scoped>
#clientes {
  width: 100%;
  display: flex;
  flex-direction: column;
    justify-content: center;
  align-items: center;
  padding-top: 100px;
}
h1 {
  text-align: center;
  font-size: 27px;
  font-weight: 700;
  font-family: "Quicksand", Sans-serif;
  color: #444444;
  margin-bottom: 30px;
}
p {
  width: 80%;
  text-align: center;
  color: #393939;
  font-size: 16px;
  font-family: "Quicksand", Sans-serif;
  line-height: 1.3em;
  letter-spacing: 0.2px;
  font-weight: 800;
  margin-bottom: 30px;
}
.carrossel {
  width: 90%;
  margin-bottom: 60px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next{
  right: 0;
  color: #BABABA;
  --swiper-navigation-size:20px;
}
.swiper-button-prev{
  left: 0;
  color: #BABABA;
  --swiper-navigation-size:20px;
}

#cards {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 60px;
}

#um {
  background-image: url("./assets/mercato-casa.jpg");
  background-size: cover;
  background-position: center;
}
#dois {
  background-image: url("./assets/lupi-pizza.jpg");
  background-size: cover;
  background-position: center;
}
#tres {
  background-image: url("./assets/la-camiceria.jpg");
  background-size: cover;
  background-position: center;
}
#quatro {
  background-image: url("./assets/n10.jpg");
  background-size: cover;
  background-position: center;
}
#cinco {
  background-image: url("./assets/sta maria.jpg");
  background-size: cover;
  background-position: center;
}
#seis {
  background-image: url("./assets/caza.jpg");
  background-size: cover;
  background-position: center;
}
#sete {
  background-image: url("./assets/vestido.jpg");
  background-size: cover;
  background-position: center;
}
#oito {
  background-image: url("./assets/oculos.jpg");
  background-size: cover;
  background-position: center;
}
.card {
  width: 47%;
  height: 25%;
  border-radius: 6px;
  margin-bottom: 1.5%;
  transition: opacity 1s;
}
.card :hover {
  background-color: rgba(2, 143, 111, 0.58);
}
.filtro {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

button {
  padding: 18px 45px 18px 45px;
  background-color: transparent;
  background-image: linear-gradient(271deg, #0c0c0c 0%, #474747 100%);
  box-shadow: 6px 6px 25px 0px rgb(0 217 166 / 35%);
  text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
  border-radius: 100em;
  color: white;
  border: none;
  outline: none;
  font-family: "Quicksand", Sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 50px;
}
@media screen and (min-width: 400px) {
  #cards {
    height: 110vh;
  }
}
@media screen and (min-width: 450px) {
  #cards {
    height: 120vh;
  }
}
@media screen and (min-width: 500px) {
  #cards {
    height: 130vh;
  }
}
@media screen and (min-width: 550px) {
  #cards {
    height: 140vh;
  }
}
@media screen and (min-width: 600px) {
  #cards {
    height: 150vh;
  }
}
@media screen and (min-width: 650px) {
  #cards {
    height: 160vh;
  }
}
@media screen and (min-width: 700px) {
  #cards {
    height: 170vh;
    width: 80%;
  }
  h1 {
    font-size: 2.375em;
  }
}
@media screen and (min-width: 900px) {
  #cards {
    height: 190vh;
    width: 80%;
  }
}
@media screen and (min-width: 1000px) {
  #cards {
    height: 90vh;
    width: 95%;
    padding-bottom: 20px;
  }
  .card {
    width: 24%;
    margin-left: 1%;
    height: 48%;
  }
}
@media screen and (min-width:1400px) {
  #cards{
    height: 70vh;
  }
}
@media screen and (min-width: 1500px) {
  #clientes{
    width: 70%;
  }
  #cards{
    height: 60vh;
  }
}
</style>