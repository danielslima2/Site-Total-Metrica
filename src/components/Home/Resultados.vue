<template>
    <div id="resultados">
        <div class="cardum">
            <div class="filtro">
                <p id="num1">10</p>
                <p id="t1">Anos de mercado</p>
                <div id="coluna">
                    <div id="ladoum">
                        <p id="num2">+3,000,000</p>
                <p id="t2">Verbas gerenciadas</p>
                    </div>
                    <div id="ladodois">
                        <p id="num3">+250</p>
                <p id="t3">Campanhas realizadas</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div id="carddois">
            <div id="tamanhodois">
                <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">Como iremos <span>alvancar as suas vendas </span>  e resultados?</h1>
            <div id="linhas">
                <div id="linhaum">

                </div>
                <div id="linhadois">

                </div>
                </div>
                <p id="txt">Ajudamos a estruturar e automatizar operações de Comércio Eletrônico e de pagamentos online. Entendemos a fundo o seu negócio e oferecemos uma solução personalizada para sua empresa.</p>
        <div id="pilares">
            <div class="pilar">
                <img src="./assets/estrategia.png" alt="">
                <h2>ESTRATÉGIA</h2>
                <p class="txtpilar">Planejamento e um conjunto de ações, arquitetadas de forma organizada e metodologia para atingir seus objetivos.</p>
            </div>
            <div class="pilar">
                <img src="./assets/objetivo.png" alt="">
                <h2>OBJETIVO</h2>
                <p class="txtpilar">Definição de metas para alavancar os objetivos do seu negócio de forma rápida e eficiente.</p>
            </div>
            <div class="pilar">
                <img src="./assets/tecnologia.png" alt="">
                <h2>TECNOLOGIA</h2>
                <p class="txtpilar">Desenvolvidas sob medida e soluções para desempenho, escalabilidade, robustez e segurança do seu negócio.</p>
            </div>
            <div class="pilar">
                <img src="./assets/mensuraçao.png" alt="">
                <h2>MENSURAÇÃO</h2>
                <p class="txtpilar">Levantamento, acompanhamento e aprimoramento. O tripé que garante o sucesso do seu negócio.</p>
            </div>
        </div>
            </div>
            
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#resultados{
    width: 100%;
    height:auto;
    background-image: linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:40px;
    
}
.cardum{
    width: 90%;
    height: 40%;
    background-image: url("./assets/cardum.jpg");
    background-position:top right;
    background-size: cover;
    box-shadow: -10px 11px 40px 0px rgb(20 212 153 / 25%);
    border-radius: 10px ;
}
.filtro{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(42deg, #00d9a6 0%, #22A8B3 100%);
    opacity: 0.9;
    border-radius: 10px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding-top: 50px;
}
p{
    margin:0;
}
#coluna{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#ladoum{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
 #ladodois{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#num1{
    color: #FFFFFF;
    line-height: 100px;
    font-weight: 600;
    font-size: 75px;
    font-family: "Quicksand", Sans-serif;
}
#t1{
    font-size: 25px;
    font-family: "Nunito", Sans-serif;
    color: rgba(255,255,255,0.81);
    line-height: 24px;
    font-weight: 600;
}
#num2{
    color: #ffffff;
    font-family: "Quicksand", Sans-serif;
    font-weight: 600;
    font-size: 37px;
    line-height: 46px;
}
#t2{
    font-size: 18px;
    line-height: 24px;
    color: rgba(255,255,255,0.79);
    font-family: "Nunito", Sans-serif;
    font-weight: 600;
}
#num3{
    font-size: 37px;
    line-height: 46px;
    color: #ffffff;
    font-family: "Quicksand", Sans-serif;
    font-weight: 600;
}
#t3{
    font-size: 18px;
    line-height: 24px;
    color: rgba(255,255,255,0.79);
    font-family: "Nunito", Sans-serif;
    font-weight: 600;
    padding-bottom: 60px;
}
#carddois{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    box-shadow: 0px 3px 45px 0px rgb(0 0 0 / 14%);
    border-radius: 10px;
    background-color: white;
    padding-top: 60px;
    margin-top: -30px;
    z-index: 10;
}
#tamanhodois{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    width: 64%;
    font-family: "Quicksand", Sans-serif;
    text-align: center;
    font-size: 33px;
    line-height: 24px;
    color: #202020;
    font-weight: 600;
}
span{
    line-height: 45px;
    color: #00d9a6; 
}
#linhas{
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
}
#linhaum{
    background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
    width: 9px;
    height: 5px;
    border-radius: 20px;
    margin-right: 10px;
}
#linhadois{
    background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
    width: 48px;
    height: 5px;
    border-radius: 20px;
}
p{
    text-align: center;
    color: #393939;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
    font-family: 'Ubuntu';
    width: 85%;
    
}
#txt{
    padding-bottom: 60px;
}
#pilares{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pilar{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
}
h2{
        font-family: "Quicksand", Sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #444444;
}
.txtpilar{
    font-size: 15px;
}
@media screen and (min-width:770px) {
    .filtro{
        padding-top: 100px ;
    }
    #coluna{
        width: 90%;
        flex-direction: row;
        padding-bottom: 100px;
    }
    #ladoum{
        border-right:1px solid rgba(255,255,255,0.7); ;
    }
    #num1{
        font-size: 107px;
    }
    #t1{
        margin-bottom: 40px;
    }
    #t3{
        padding-bottom: 0;
    }
    #pilares{
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 20px;
        padding-bottom:30px;
    }
    .cardum{
        width: 80%;
    }
    #carddois{
        width: 80%;
    }
    h1{
        width: 100%;
        text-align: left;
        font-size: 45px;
    line-height: 63px;
    }
    .pilar{
        width: 48%;
    }
    #tamanhodois{
        width: 75%;
    }
    #txt{
        width: 100%;
        text-align: left;
        font-size: 16px;
        padding-bottom: 30px;
    }
    #linhas{
        width: 100%;
        align-items: flex-start;
    }
   
}
@media screen and (min-width:1000px) {
    #resultados{
        flex-direction: row ;
        height: 140vh;
        align-items: center;
        justify-content: center;
    }
    .cardum{
        margin-left: 20px;
        width: 45%;
        height: 95%;
    }
    .filtro{
        width: 100%;
        height: 100%;
    }
    
    #carddois{
        width: 45%;
        height: 95%;
        margin-left: -60px;
        margin-bottom: -100px;

    }
}
@media screen and (min-width:1400px) {
    #resultados{
        height: 90vh;
    }
    
}
@media screen and (min-width:1500px) {
    #resultados{
        width: 80%;
    }
}
</style>