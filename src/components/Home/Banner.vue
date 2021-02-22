<template>
<div id="banner">
    <div id="tamanho">
        <div class="texto">
        <p class="t1">
            10 ANOS DE EXPERIÊNCIA
        </p>
        <p class="t2">
            Líder em E-commerce <br/>
            e omnichannel no Norte/Nordeste
        </p>
        <p class="t3">
            Impulsione o seu Negócio com o Poder da Internet. Amplie o faturamento da sua empresa com a metodologia Total Métrica de aceleração de vendas.
        </p>
        <button>QUERO ACELERAR AS VENDAS</button>
        <button>COMO FUNCIONA?</button>
    </div>
    <div class="imagem">
        <img src="./assets/imgbanner.png" alt="">

    </div>
    </div>
    
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#banner{
    width: 100%;
    height: auto;
    background-color: #00DAA5;
    display: flex;
    padding-top: 90px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
}
#tamanho{
    display: flex;
    flex-direction: column;
}
.texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 97%;
    height: 45%;
    
padding-top: 15px;
    
}
.t1{
    
    font-weight: 900;
    font-size:22px;
    letter-spacing: 1.3px;
    color: #FFFFFF;
    font-family: "Quicksand", Sans-serif;
}
.t2{
    font-size: 27px;
    color: #2F2F2F;
    font-family: "Quicksand", Sans-serif;
    font-weight: bold;
    line-height: 1em;
    margin-top: 0;
}
.t3{
    color:#444444;
        font-size: 16px;
        font-family: "Quicksand", Sans-serif;
    line-height: 1.2em;
        font-weight: 700;
        margin-top: 0px;
        margin-bottom: 25px;
}
button{
    color: white;
    text-align: center;
    background-color: transparent;
    background-image: linear-gradient(271deg, #0c0c0c 0%, #474747 100%);
    padding: 18px 45px 18px 45px;
    box-shadow: 6px 6px 25px 0px rgb(0 0 0 / 35%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
    border-radius: 100em;
        font-family: "Quicksand", Sans-serif;
    font-size: 13px;
    font-weight: 800;
    line-height: 16px;
    border: none;
    outline: none;
    margin-bottom: 20px;
}
.imagem{
    width: 100%;
    height:55%;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
width: 70%;
}
@media screen and (min-width:770px) {
#banner{
    flex-direction: row;
    padding-top: 130px;
}
#tamanho{
    margin-bottom: 50px;
    flex-direction: row;
}
.texto{
    height: 97%;
    width: 40%;
    text-align: left;
    align-items: flex-start;
    padding-left: 5%;
}
.t1{
    font-size: 26px;
    
}
.t2{
    font-size: 42px;
    margin-bottom: 20px;
}
.t3{
    font-size: 18px;
}
.imagem{
    width: 70%;
}
}
@media screen and (min-width:1400px) {
    #tamanho{
        width: 70%;
    }
    img{
        width: 90%;
    }
}
</style>