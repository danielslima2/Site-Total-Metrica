<template>
    <div id="portifolio">
        <Navbar></Navbar>
        <NavbarM></NavbarM>
        <Portifolio></Portifolio>
        <Footer></Footer>
        <Rodape></Rodape>
    </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue"
import NavbarM from "../components/Navbarmobile/NavbarM.vue"
import Portifolio from "../components/Portifolio/Portifolio.vue"
import Footer from "../components/Footer/Footer.vue"
import Rodape from "../components/Rodape/Rodape.vue"
export default {
    components:{
        Navbar,
        NavbarM,
        Portifolio,
        Footer,
        Rodape,
    
    }
}
</script>

<style scoped>

</style>