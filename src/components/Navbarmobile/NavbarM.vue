<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><img src="./assets/logo-total-metrica.png" alt=""></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li><a href="#/">HOME</a></li>
              <li><a href="#/empresa">EMPRESA</a></li>
              <li><a href="">APLICATIVOS</a> </li>
              <li><a href="#/portifolio">PORTIFÓLIO</a></li>
              <li><a href="">BLOG</a> </li>
              <li> <a href="">CONTATO</a> </li>
            
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">


            

            
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  width: 100%;
}
.bg-info {
    background-color: white !important;
    box-shadow: 0px 4px 44px 0px rgb(0 0 0 / 14%);
    height: 100px;
}
.navbar-dark .navbar-toggler {
    color: #26221f;
    border-color: #26221f;
    background-color: #26221f;
}
li{
    color: #26221f;
}
a{  
    color: #26221f;
    margin:8px;
    font-family: "Quicksand", Sans-serif;
    font-weight: 600;
}
@media screen and(max-width:1000px) {
  #navbar {
    display: flex !important;
  }
}
</style>