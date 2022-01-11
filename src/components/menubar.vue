<template>
  <div class="menubar-wrapper">
  <a href="#" class="link-content" @click="clickSmoothScroll('#app')">Top</a>
  <a href="#" class="link-content" @click="clickSmoothScroll('#about')">About</a>
  <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">Skills</a>
  <a href="#" class="link-content" @click="clickSmoothScroll('#portfolios')">Portfolios</a>
  <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">Contact</a>
  </div>
</template>

<style>
  .menubar-wrapper{
    text-align:center;
    background-color:gray;
    position:fixed;
    height:50px;
    width:100%;
    z-index:1;
    opacity:0.8;
    box-shadow: 0 2px 5px #333;
  }

 .menubar-wrapper a{
    color:white;
    margin:10px 20px 0 20px;
    font-size:20px;
    display:inline-block;
  }

  a:hover{
    font-weight:700;
  }
</style>