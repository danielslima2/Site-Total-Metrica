<template>
  <div id="carrossel">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="./assets/laser-eletro.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/esa-nacional.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/movimento.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/recife-ingressos.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/colégio-santa-maria.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/Cazá-do-Sport.png" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

export default {

  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: false,
        autoplay:1000,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
          }
      },
    };
  },
};
</script>

<style scoped>
#carrossel {
  width: 95%;
  margin-bottom: 40px;
}
.swiper-slide {
  display: flex;
  justify-content: ca;
  align-items: center;
}
</style>