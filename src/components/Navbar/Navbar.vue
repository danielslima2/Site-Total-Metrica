<template>

    <div id="navbar">
        <nav>
            <img src="./assets/logo-total-metrica.png" alt="">
            <ul id="nbmenu">
                <li><a href="#/">HOME</a></li>
                <li> <a href="#/empresa">EMPRESA</a> </li>
                <li>APLICATIVOS</li>
                <li><a href="#/portifolio">PORTIFÓLIO</a></li>
                <li>BLOG</li>
                <li>CONTATO</li>
            </ul>
            <button>ORÇAMENTO</button>
        </nav>
            
        
    </div>

    
</template>

<script>
export default {
    
}
</script>

<style scoped>
#navbar{
    width: 100%;
    height: 100px;
    background-color: white;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    box-shadow: 0px 4px 44px 0px rgb(0 0 0 / 14%);
}
nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img{
    padding-left: 4%;
    width: 23%;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    justify-content: space-around;
     padding-right: 20px;
        padding-left: 20px;
}
a{
    text-decoration: none;
    color: #000000;
}
li{
    font-family: "Quicksand", Sans-serif;
    font-size: 15px;
        font-family: "Quicksand";
    font-weight: 600;
    color: #000000;
    padding-right: 20px;
    padding-left: 20px;
}
button{
    margin-right: 4%;
    padding: 18px 45px 18px 45px;
    background-color: #22A8B3;
    box-shadow: 6px 6px 25px 0px rgb(0 217 166 / 35%);
    text-shadow: 0px 0px 10px rgb(0 0 0 / 4%);
    color: white;
    border-radius: 100em;
    height: 56px;
        border: none;
    outline: none;
        color: #FFFFFF;
    font-family: "Quicksand", Sans-serif;
    font-size: 16px;
    font-weight: 900;
    line-height: 1.3em;
    margin-left: 4%;
}
@media screen and (max-width:1000px) {
    #navbar{
        display: none;
    }
    ul{
        flex-wrap: wrap;
        display: none;
    }
    button{
        display: none;
    }
}
@media screen and (min-width:1500px) {
    nav{
        width: 70%;
    }
    
}

</style>