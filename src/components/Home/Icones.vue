<template>
    <div id="icones">
        <div class="icone">
            <img src="./assets/android.png" alt="">
        </div>
        <div class="icone">
             <img src="./assets/swift.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/flutter.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/react.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/php.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/node.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/html.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/css.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/js.png" alt="">
        </div>
        <div class="icone">
            <img src="./assets/python.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#icones{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.icone{
    width: 40%;
    margin:4%;
    display: flex;
    
    justify-content: center;
}
@media  screen and (min-width:800px) {

    .icone{
        width: 18%;
        margin-bottom: 2%;
        margin-top:2%;
        margin-left: 0;
        margin-right: 0;
            }

    
}
@media screen and (min-width:1500px) {
    #icones{
        width: 70%;
    }
}
</style>