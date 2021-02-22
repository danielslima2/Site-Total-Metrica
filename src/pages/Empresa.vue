<template>
    <div id="empresa">
        <Navbar></Navbar>
        <NavbarM></NavbarM>
        <Empresa></Empresa>
        <Vendas></Vendas>
        <Diferenciais></Diferenciais>
        <Footer></Footer>
        <Rodape></Rodape>
    </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue"
import NavbarM from "../components/Navbarmobile/NavbarM.vue"
import Empresa from "../components/Empresa/Empresa.vue"
import Vendas from "../components/Empresa/Vendas.vue"
import Diferenciais from "../components/Empresa/Diferenciais.vue"
import Footer from "../components/Footer/Footer.vue"
import Rodape from "../components/Rodape/Rodape.vue"
export default {
    components:{
        Navbar,
        NavbarM,
        Empresa,
        Vendas,
        Diferenciais,
        Footer,
        Rodape,
    }
}
</script>
<style scoped>
#empresa{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}

</style>