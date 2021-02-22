<template>
    <div id="rodape">
        <div id="imagens">
          <a href="https://www.instagram.com/totalmetrica/?hl=pt-br"><img src="./assets/insta.png" alt=""></a>  
            <a href="https://www.facebook.com/totalmetrica"> <img src="./assets/face.png" alt=""></a>
        </div>
        <p>© 2020 <span>Total Métrica</span>  – Todos os direitos reservados
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#rodape{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(285deg, #0C0C0C 0%, #474747 100%);
    padding-top: 2%;
    padding-bottom: 2%;
}
#imagens{
    display: flex;
}
img{
    margin-right: 5px;
}
p{
    margin: 0;
        color: #FFFFFF;
    font-family: "Quicksand", Sans-serif;
    font-weight: 500;
}
span{
    color: #00d9a6;
}
</style>