<template>
<div id="background">
    <div id="footer">
    <div id="empresa">
      <img src="./assets/logo-total-metrica.png" alt="" />
      <p>
        A Total Métrica é uma empresa prestadora de serviços de consultoria
        empresarial e marketing digital com ênfase em inteligência comercial
        aplicada.
      </p>
    </div>
    <div id="institucional">
      <h1>INSTITUCIONAL</h1>
      <div id="linhas">
        <div id="linhaum"></div>
        <div id="linhadois"></div>
      </div>
      <ul>
        <li><a href=""> Empresa </a></li>
        <li><a href=""> Aplicativos </a></li>
        <li><a href=""> Portifólio </a></li>
        <li><a href=""> Blog </a></li>
        <li><a href=""> Contato </a></li>
      </ul>
    </div>
    <div id="contato">
      <h1>CONTATO</h1>
      <div id="linhas">
        <div id="linhaum"></div>
        <div id="linhadois"></div>
      </div>
      <p>
        Empresarial Center II - Rua Antônio Lumack do Monte, 96 - sala 603 - Boa
        Viagem, Recife - PE, 51020-350
      </p>
      <p>contato@totalmetrica.com.br</p>
      <p>+55 (81) 3132-0934</p>
    </div>
    <div id="local">
      <h1>LOCALIZAÇÃO</h1>
      <div id="linhas">
        <div id="linhaum"></div>
        <div id="linhadois"></div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.8424481241254!2d-34.90498968566995!3d-8.11751928347937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fadb0daaaab%3A0x1c453745557d133a!2sTotal%20M%C3%A9trica!5e0!3m2!1spt-BR!2sbr!4v1613953850893!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</div>
</template>
<script>
export default {};
</script>

<style scoped>
#footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 70px;
  background-color: #f2f2f2;
}
#empresa {
  width: 80%;
}
img {
  margin-bottom: 30px;
}
p {
  text-align: left;
  color: #444;
  font-family: "Ubuntu";
}
#institucional {
  width: 80%;
}
#linhas {
  width: 80%;
  justify-content: left;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
}
#linhaum {
  background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
  width: 9px;
  height: 5px;
  border-radius: 20px;
  margin-right: 10px;
}
#linhadois {
  background-image: linear-gradient(to right, #9be15d 0%, #00d9a6 100%);
  width: 48px;
  height: 5px;
  border-radius: 20px;
}
ul{
  list-style: none;
  padding: 0;
}
li{
  text-decoration: none;
  color: #444 !important;
  font-family: "Ubuntu";
}
a{
  color: #444 ;
}
#contato {
  width: 80%;
}
#local{
    width: 80%;
}
h1{
    color: #444444;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.2em;
    font-family: Quicksand;
    margin: 0;
} 

iframe{
    width: 100%;
    height: 300px;
}
@media screen and (min-width: 790px) {
    #footer{
        flex-wrap: wrap ;
        flex-direction: row;
        
        justify-content: space-around;
    }
    #empresa{
        width: 45%;
        
    }
    #institucional{
        width: 40%;
        
    }
    #contato{
        width: 45%;
        height: 378px;
    }
    #local{
        width: 40%;
    }
}
@media screen and (min-width: 1050px) {
    #footer{
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-around;
    }
    #empresa{
        width: 25%;
        
    }
    #institucional{
        width: 14%;
        
    }
    #contato{
        width: 20%;
     height: unset;
    }
    #local{
        width: 23%;
    }
}
@media screen and (min-width:1500px){
    #footer{
        width: 70%;
        background-color: transparent;
    }
    #background{
display: flex;
align-items: center;
flex-direction: column;
background-color: #f2f2f2;
    }
}
</style>