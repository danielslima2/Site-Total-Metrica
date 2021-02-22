<template>
    <div id="blog">
        <h1 data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0">Acompanhe nosso <span>Blog </span> </h1>
        <div id="linhas">
                <div id="linhaum">
                </div>
                <div id="linhadois">
                </div>
            </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" id="cards">
            <div id="um" class="card">
                <div class="subcard">
                  <p> O fim do dinheiro fisico está proxímo?</p>  
                </div>
            </div>
            <div id="dois" class="card">
                <div class="subcard">
                  <p> Facebook contra a pseudoconciência?</p>  
                </div>
            </div>
            <div id="tres" class="card">
                <div class="subcard">
                  <p> Ifood é o app que mais cresce na...</p>  
                </div>
            </div>
        </div>
        <button>
            VER TODOS OS POSTS
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#blog{
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    color: #202020;
    line-height: 45px;
    text-align: center;
    width: 70%;
    font-size: 33px;
    font-family: "Quicksand", Sans-serif;
}
span{
    color: #00d9a6;
}
#linhas{
    display: flex;
    padding-top: 0;
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
#cards{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
    
}

.card{
    width: 90%;
    height: 250px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 60px;
    margin-bottom: 30px;
}
.subcard{
    text-align: center;
    background-color: #FFF;
    box-shadow: 20px 0px 40px 0px rgb(0 0 0 / 6%);
    width: 75%;
    padding:3% 6% 3% 6%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    margin-bottom:-60px;
    
}
.subcard :hover{
    background-image: linear-gradient(42deg, rgba(0,217,166,0.9) 0%, rgba(155,225,93,0.9) 100%);
}
p{
    width: 85%;
    font-size: 23px;
    font-family: "Quicksand", Sans-serif;
    font-weight: 600;
    line-height: 29px;
    color: #202020;
}
#um{
    background-image: url(./assets/coin.jpg);
    
}
#dois{
    background-image: url(./assets/blog2.jpeg);
}
#tres{
    background-image: url(./assets/ifood.jpg);
}
button{
    padding: 18px 45px 18px 45px;
    background-color: transparent;
    background-image: linear-gradient(
271deg
, #0c0c0c 0%, #474747 100%);
    box-shadow: 6px 6px 25px 0px rgb(0 0 0 / 35%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 30%);
    color: white;
    border-radius: 100em;
    outline: none;
    border: none;
    font-size: 0.75em;
    font-weight: 500;
    
}
@media screen and (min-width:1000px) {
    #cards{
        flex-direction: row;
        justify-content: space-around;
    }
    .card{
        margin-top: 10px;
        width: 29%;
    }
    h1{
        font-size: 55px;
    }
    #linhas{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    p{
        width: 94%;
    }
}
</style>