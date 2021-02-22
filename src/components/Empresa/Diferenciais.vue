<template>
    <div id="diferenciais">
        <div id="txt1">
            <h1>
                DIFERENCIAIS
            </h1>
            <p id="p1">Marketing digital com ênfase em inteligência comercial aplicada.</p>
        </div>
        <div id="txt2">
            <div id="1" class="box">
                <h2>MISSÃO</h2>
                <p>Desenvolver e alavancar oportunidades de negócios e resultados comerciais através do E-commerce e soluções tecnológicas com projetos de alto impacto, gerando valor aos nossos clientes, colaboradores e sociedade.</p>
                <p>Garantir excelência na prestação de serviços em Consultoria Empresarial, tecnologia da informação e comunicação publicitária, maximizando os resultados e apoiando o meio empresarial na implantação e condução de novos negócios.</p>
            </div>
            <div id="2" class="box">
                <h2>VISÃO</h2>
                <p>Sermos reconhecidos pelas soluções que desenvolvemos nos campos da tecnologia e comunicação publicitária e a referência nos setores do mercado em que atuamos.</p>
            </div>
            <div id="3" class="box">
                <h2>VALORES</h2>
                <p>
                – Conduta pautada na ética; 
                <br>
                – Trabalho em equipe, comprometido e focado em resultados;
                <br>
                – Agilidade e eficiência de processos;
                <br>
                – Soluções elaboradas com inteligência, inovação e criatividade;
                <br>
                – Relacionamento transparente com clientes e parceiros de maneira flexível, responsável e pautado em confiança mútua;
                <br>
                – Transformação Digital e evolução contínua;
                <br>
                – Aversão a estagnação tecnológica.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#diferenciais{
padding-top: 60px;
    width: 90%;
    display: flex;
    flex-direction: column;
}
#txt1{
    width: 100%;
    display: flex;
    flex-direction: column;
}
h1{
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0.4px;
    font-family: 'Quicksand';
    font-size: 28px;
    color: #444444;
}
#p1{
    line-height: 1.4em;
    font-size: 18px;
    font-family: 'Quicksand';
    color: #2A2A2A;
    font-weight: 500;
}
#txt2{
    display: flex;
    flex-direction: column;
}
h2{
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    color: #444444;
    font-family: 'Quicksand';
}
p{
    text-align: justify;
    font-family: 'Ubuntu';
    line-height: 1.5;
    color: #444444;
}
@media screen and (min-width:780px) {
    #diferenciais{
        width: 95%;
    }
    #txt1{
        width: 100%;
        margin-bottom: 30px;
    }
    h1{
        font-size: 34px;
    }
    #txt2{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    .box{
        width: 32%;
    }
}
@media screen and (min-width: 1500px) {
    #diferenciais{
        width: 70% !important;
    }
}
</style>