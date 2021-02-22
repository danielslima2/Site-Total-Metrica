<template>
    <div id="empresa">
        <div id="imagens">
            <img src="./assets/empresarial.jpg" alt="">
            <img src="./assets/empresarial.jpg" alt="">
        </div>
        <div id="texto">
            <h1>CONHEÇA A <br> TOTAL MÉTRICA</h1>
            <p>Desde 2010 no mercado, a Total Métrica sempre dedicada e envolvida em atividades ligadas à tecnologia e especialmente voltadas a inovação e aprimoramento do varejo, Comércio Eletrônico e aplicação de processos comerciais mais eficientes.</p>
            <p>Especializada no desenvolvimento de Plataformas de E-commerce nas modalidades B2C, B2B ou híbridas, desenvolvidas sob medida para clientes Small Business, Middle Market e Enterprise, principalmente. Fornecemos soluções de Comércio Eletrônico com desempenho, escalabilidade, robustez e segurança.</p>
            <p>A Total Métrica é a empresa referencial no Norte/Nordeste e líder no segmento de E-commerce e inovação do varejo, com diversas Lojas Virtuais implementadas e entregues em constante processo de evolução e aprimoramento para se manter na vanguarda de um dinâmico mercado de Comércio Eletrônico em sinergia com as tendências tecnológicas e estratégicas mundiais.</p>
        <button>
            CONTATO
        </button>
        </div>

        
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#empresa{
    width: 100%;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#imagens{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    align-items: center;
}
img{
    width: 90%;
    margin-bottom: 30px;
}
#texto{
    width: 90%;
}
h1{
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0.4px;
    font-family: "Quicksand", Sans-serif;
}
p{
    text-align: justify;
    color: #393939;
    font-size: 17px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.2px;
    font-family: 'Ubuntu';
}
button{
    padding: 18px 45px 18px 45px;
    background-color: transparent;
    background-image: linear-gradient(271deg, #00d9a6 0%, #9be15d 100%);
    box-shadow: 6px 6px 25px 0px rgb(0 217 166 / 65%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
    outline: none;
    border: none;
    border-radius: 100em;
    color: white;
    font-size: 13px;
}
@media screen and (min-width:780px) {
    #empresa{
        flex-direction: column-reverse !important;
        
    }
    #texto{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        width: 100%;
        font-size: 48px;
        margin-bottom: 50px;
    }
    p{
        text-align: center;
        margin-bottom: 20px;
    }
    button{
        margin-top:50px;
        margin-bottom: 40px;
    }
}
@media screen and (min-width:1020px) {
    #empresa{
        flex-direction: row-reverse !important;
    }
    #imagens{
        width: 60%;
    }
    #texto{
        width: 40%;
        padding-left: 3%;
        align-items:left;
    }
    p{
        text-align: justify;
    }
}
@media screen and (min-width: 1500px) {
    #empresa{
        width: 70% !important;
    }
}
</style>