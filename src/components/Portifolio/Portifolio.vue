<template>
    <div id="portifolio">
        <div id="texto">
            <h1>CONHEÇA OS NOSSOS CLIENTES E PORTFÓLIOS</h1>
    <p>
      Dezenas de trabalhos concluídos e outros em andamento.
      <br />
      Confira alguns de nossos clientes e as soluções que criamos para eles!
    </p>
        </div>
        <div class="container">
            <div id="item1">
                <img src="./assets/mercato-casa.jpg" alt="">
            </div>
            <div id="item2">
                <img src="./assets/lupi-pizza.jpg" alt="">
            </div>
            <div id="item3">
                <img src="./assets/la-camiceria.jpg" alt="">
            </div>
            <div id="item4">
                <img src="./assets/n10.jpg" alt="">
            </div>
            <div id="item5">
                <img src="./assets/sta maria.jpg" alt="">
            </div>
            <div id="item6">
                <img src="./assets/caza.jpg" alt="">
            </div>
            <div id="item7">
                <img src="./assets/vestido.jpg" alt="">
            </div>
            <div id="item8">
                <img src="./assets/oculos.jpg" alt="">
            </div>
            <div id="item9">
                <img src="./assets/laser.jpg" alt="">
            </div>
            <div id="item10">
                <img src="./assets/colorear.jpg" alt="">
            </div>
            <div id="item11">
                <img src="./assets/movimento.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#portifolio{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 220px;
    padding-bottom: 70px;
}
#texto{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
  text-align: center;
  font-size: 27px;
  font-weight: 700;
  font-family: "Quicksand", Sans-serif;
  color: #444444;
  margin-bottom: 30px;
}
p {
  width: 80%;
  text-align: center;
  color: #393939;
  font-size: 16px;
  font-family: "Quicksand", Sans-serif;
  line-height: 1.3em;
  letter-spacing: 0.2px;
  font-weight: 800;
  margin-bottom: 30px;
}
.container{
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap:4px;
    grid-row-gap:4px;
}
img{
    width: 100%;
    border-radius: 6px;
}
#item1{
    grid-column: 1/1;

}
#item2{
    grid-column-start: 2;
    grid-column-end:2;
}
#item3{
    grid-column-start: 3;
    grid-column-end:3;
}
#item4{
    grid-column-start: 4;
    grid-column-end:4;
}

@media screen and (max-width: 1000px) {
  .container{
      display: grid;
    grid-template-columns: 1fr 1fr;
}
   #item1{
    grid-column: 1/1;
    grid-row: 1/1;
}
#item2{
    grid-column: 2/2;
    grid-row: 1/1;

}
#item3{
    grid-column: 1/1;
    grid-row: 2/2;

}
#item4{
    grid-column:2/2;
    grid-row: 2/2;
}
}

@media screen and (min-width: 700px) {
#portifolio{
    padding-top:140px;
}
  h1 {
    font-size: 2.375em;
  }
}

</style>