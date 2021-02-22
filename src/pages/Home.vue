<template>
    <div id="home">
        <Navbar></Navbar>
        <NavbarM></NavbarM>
        <Banner></Banner>
        <Servicos></Servicos>
        <Clientes></Clientes>
        <Resultados></Resultados>
        <FaleConosco></FaleConosco>
        <Icones></Icones>
        <Blog></Blog>
        <Perguntas></Perguntas>
        <Cards></Cards>
        <Footer></Footer>
        <Rodape></Rodape>
    </div>
</template>
<script>
import Navbar from "../components/Navbar/Navbar.vue"
import NavbarM from "../components/Navbarmobile/NavbarM.vue"
import Banner from "../components/Home/Banner.vue"
import Servicos from "../components/Home/Serviços.vue"
import Clientes from "../components/Home/Clientes.vue"
import Resultados from "../components/Home/Resultados.vue"
import FaleConosco from "../components/Home/FaleConosco.vue"
import Icones from "../components/Home/Icones.vue"
import Blog from "../components/Home/Blog.vue"
import Perguntas from "../components/Home/Perguntas.vue"
import Cards from "../components/Home/Cards.vue"
import Footer from "../components/Footer/Footer.vue"
import Rodape from "../components/Rodape/Rodape.vue"

export default {
    components: {
    Navbar,
    NavbarM,
    Banner,
    Servicos,
    Clientes,
    Resultados,
    FaleConosco,
    Icones,
    Blog,
    Perguntas,
    Cards,
    Footer,
    Rodape,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
#home{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>