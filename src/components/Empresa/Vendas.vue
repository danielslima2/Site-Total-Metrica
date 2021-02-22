<template>
    <div id="vendas">
        <div id="texto">
            <h1>
                ACELERADORA DE VENDAS
            </h1>
            <p>
                A TOTAL MÉTRICA é um aceleradora de Vendas que utiliza de inteligência de dados para geração de receitas. Planejamos, estruturamos e desenvolvemos canais de vendas digitais na internet, todo viés da nossa metodologia está na performance, indicadores comerciais e Inteligência Comercial Aplicada. Além de estruturação dos sistemas e fornecer a metodologia de vendas, apoiamos nossos clientes e parceiros na implementação das soluções, com treinamentos específicos e acompanhamento de indicadores de desempenho.
            </p>
            <p>
                Sabemos que para atingir resultados extraordinários em vendas, uma empresa precisa de uma metodologia que possibilite a melhoria continua dos processos. Temos uma equipe focada no sucesso do cliente dedicada em ajudarem a atingir os resultados esperados.
            </p>
        </div>

        <div id="collapse">
        <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
               PLANEJAMENTO ESTRATEGICO
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              Pesquisamos, levantamos informações e entendemos como funciona o seu mercado para encontrar os potenciais inexplorados do seu nicho de negócio. Assim, enriquecemos as estratégias, potencializamos os fatores de sucesso e aprimoramos as operações, somando seu know-how de mercado as nossas tecnologias e metodologia de execução estruturadas e testadas na prática. Com base em nossos estudos de mercado e experiências, desenvolvidas ao longo de mais de 10 anos de atuação no Mercado Digital e varejo Omnichannel, criamos soluções, diagnósticos, planos de execução e ação e formulamos uma estratégia direcionada para obtenção de resultados consistentes. Desenvolvamos tecnologias, processos e estratégias e as melhores práticas para promover a alavancagem e conversão, garantindo o seu sucesso nos resultados comerciais da sua operação.
              </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                PLATAFORMA SOB MEDIDA
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              Sim. Através de pesquisas avançadas e definições estratégicas, a Total Métrica vai modelar o funil de vendas mais adequado para o seu negócio. Assim, será possível atrair mais leads qualificados com alto potencial de compra.
            </div>
          </div>
        </div>
         <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 
          ATENDIMENTO DEDICADO
              </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
              Sim. Através de pesquisas avançadas e definições estratégicas, a Total Métrica vai modelar o funil de vendas mais adequado para o seu negócio. Assim, será possível atrair mais leads qualificados com alto potencial de compra.
            </div>
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
#vendas{
    width: 95%;
    padding-top: 50px;
}
#texto{
    margin-bottom: 30px;
}
h1{
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0.4px;
    font-size: 28px;
    font-family: 'Quicksand';
    color: #2A2A2A;
}
p{
    margin: 0;
    width: 100%;
    color: #444444;
    text-align: justify;
    font-family: 'Ubuntu';
    line-height: 1.5;
}
#collapse{
    width: 100%;
    
}

.card-header {
  padding: 0;
  margin-bottom: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.btn-link {
  color: white;
  font-family: "Quicksand", Sans-serif;
  text-decoration: none;
  font-size: 17px;
  font-weight: 700;
  background-color: transparent;
}
.card {
  border: 0px;
  
  border-bottom: 1px solid #d4d4d4;
  border-radius: 0;
  background-color:#22A8B3; 
}
.card-body{
    color: white;
    font-size: 16px;
    font-family: "Quicksand", Sans-serif;
}
@media screen and (min-width: 780px){
  #vendas{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  #texto{
    width: 50%;
  }
  #collapse{
    width: 45%;
    height: 520px;
    background-color: #22A8B3;
  }
  h1{
    font-size: 34px;
  }
}
@media screen and (min-width:840px) {
  #collapse{
    height: 500px;
  }
}
@media screen and (min-width:920px) {
  #collapse{
    height: 420px;
  }
}
@media screen and (min-width:1000px) {
  #collapse{
    height: 400px;
  }
}
@media screen and (min-width:1100px) {
  #collapse{
    height: 360px;
  }
}
@media screen and (min-width:1200px) {
  #collapse{
    height: 340px;
  }
}
@media screen and (min-width: 1500px) {
    #vendas{
        width: 70% !important;
    }
}
</style>