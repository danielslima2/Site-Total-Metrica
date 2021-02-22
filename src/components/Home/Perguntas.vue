<template>
  <div id="perguntas">
    <div id="tamanho">
      <h1>Perguntas Frenquentes</h1>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
               O que é um acelerador de vendas, afinal?
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              Aceleradora de vendas é uma empresa que estrutura e performa canais de vendas digitais. A Total Métrica desenvolve estratégias focadas em desempenho e indicadores comerciais, implementando métodos e sistemas para aumentar a força comercial de empresas, sendo a melhor opção para quem precisa aumentar a geração de oportunidades pela internet.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                É possível conseguir mais leads qualificados?
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
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
export default {};
</script>

<style scoped>
#perguntas {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top:30px;
}
h1{
    font-family: "Quicksand", Sans-serif;
    font-size: 29px;
    font-weight: 700;
    padding: .375rem .75rem;
}
#tamanho {
  width: 95%;
}
.card-header {
  padding: 0;
  margin-bottom: 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.btn-link {
  color: #444444;
  font-family: "Quicksand", Sans-serif;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
}
.card {
  border: 0px;
  border-bottom: 1px solid #d4d4d4;
  border-radius: 0;
}
.card-body{
    font-size: 18px;
    font-family: "Quicksand", Sans-serif;
}

@media screen and (max-width:500px) {
  .btn {
    font-size: 15px;
  }
  .card-body{
    font-size: 14px;
  }
}
@media screen and (max-width:400px) {
  .btn {
    font-size: 13px;
  }
  .card-body{
    font-size: 12px;
  }
}
@media screen and (min-width:800px) {
    h1{
        font-size: 2.375em;
    }
}
@media screen and (min-width:1500px) {
  #perguntas{
    width: 70%;
  }
}
</style>