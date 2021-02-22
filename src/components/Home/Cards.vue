<template>
    <div id="cards">
        <div id="tamanho">
            <div 
     data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" 
      id="card1">
            <p id="t1">Temos a solução perfeita!</p>
            <p id="t2">Para você que procura aplicativo conectado com sua loja virtual!</p>
            <button>CONHEÇA</button>
        </div>
        <div 
        data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" id="card2">
            <p id="t3">
                Você está pronto?
            </p>
            <p id="t4">
                Cadastre-se para <br/> Receber novidades
            </p>
            
                <input type="email" name="EMAIL" placeholder="Seu E-mail" required="">
            <!-- <input id="botao" type="submit" value="CADASTRAR"> -->
        </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
#cards{
    width: 100%;
    display: flex;
    align-items:center;
    flex-direction: column;
    font-family: "Quicksand", Sans-serif;
    padding-top: 40px;
}
#tamanho{
    display: flex;
    align-items:center;
    flex-direction: column;
}
#card1{
    width: 95%;
    background-image: linear-gradient(
56deg
, #00d9a6 0%, #22A8B3 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin-bottom:30px;
    padding: 72px 0px 72px 0px;
}
#t1{
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5em;
    color: rgba(255,255,255,0.7);
    text-align: center;
    margin-bottom: 10px;
    
}
#t2{
     font-size: 21px;
    font-weight: bold;
    line-height: 1.5em;
    color: #ffffff;
    text-align: center;
    margin-bottom: 55px;
    margin-top: 0;
}
button{
    padding: 18px 45px 18px 45px;
    background-color: transparent;
    background-image: linear-gradient(271deg, #0c0c0c 0%, #474747 100%);
    box-shadow: 6px 6px 25px 0px rgb(0 0 0 / 35%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
    color: white;
    border-radius: 100em;
    border: none;
    outline: none;
        font-family: "Quicksand", Sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    padding-bottom:20px;
}
#card2{
    width: 95%;
    background-image: linear-gradient(301deg, #0c0c0c 0%, #474747 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    padding: 72px 0px 52px 0px;
    margin-bottom:30px;
}
#t3{
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5em;
    color: rgba(255,255,255,0.7);
    text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    margin: 0px 0px 5px 0px;
    text-align: center;
}
#t4{
    font-size: 23px;
    font-weight: bold;
    line-height: 1.5em;
    color: #ffffff;
    margin: 0px 0px 0px 0px;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 0;
}
input{
    border-bottom: none;
    background: rgba(112, 112, 112, 0.35);
    border-radius: 100px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    padding: 21px 90px 21px 41px !important;
    border: none;
    font-family: "Quicksand", Sans-serif;
    font-weight: 400;
    outline: none;
}
#botao{
    background: none;
    color: rgba(255, 255, 255, 0.6);
    max-width: none;
    width: auto;
    padding: 18px 0px;
    margin: 0;
    font-size: 14px;
    font-family: "Quicksand", Sans-serif;
    font-weight: bold;
    margin-top: -10px;
    margin-right: 10px;
}
@media screen and (min-width: 780px) {
    #tamanho{
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
    }
    #card1{
        padding: 72px 0px 52px 0px;
    }
    #card2{
        margin-bottom: 50px;
    }
    #t4{
        font-size: 39px;
        line-height: 1.5em;
        margin-bottom: 50px;
    }
    #t2{
        font-size: 39px;
        line-height: 1.5em;
        margin-bottom: 50px;
    }
    #t3{
        margin-bottom: 10px;
    }
}
@media screen and (min-width:1030px) {
    #tamanho{
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    #cards{
        height: 510px;
    }
    #tamanho{
        height: 95%;
    }
    #card1{
        width: 48%;
        height: 100%;
        margin: 0;
    }
    #card2{
        width: 48%;
        height: 100%;
        margin: 0;
    }
}
@media screen and (min-width:1500px) {
    #cards{
        width: 70%;
    }
    
}
</style>