<template>
  <div id="app">

    <div class="menubar">
      <a href="#" class="link-content" @click="clickSmoothScroll('#app')">Top</a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#about')">About</a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">Skills</a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#portfolios')">Portfolios</a>
      <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">Contact</a>
    </div>

    <top></top>
    <about id="about"></about>
    <skill id="skill"></skill>
    <portfolios id="portfolios"></portfolios>
    <contact id="contact"></contact>

    <div class="footer">
      <p><span class="responsive_pc">Thank you for visiting.</span><br class="responsive_pc">Copyright(c) and Designed by Hiroaki NAGAI. <br class="responsive_notpc">All Rights Reserved.</p>
    </div>

  </div>
</template>

<script>

import top from './components/top'
import about from './components/about'
import skill from './components/skill'
import portfolios from './components/portfolios'
import contact from './components/contact'

export default {
  name: 'App',
  components: {
    top,about,skill,portfolios,contact
  },
  methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}

</script>

<style>
html{
  height:100%;
}

body{
    margin:0;
    height: 100%;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
}

.menubar{
  text-align:center;
  background-color:gray;
  position:fixed;
  height:50px;
  width:100%;
  z-index:1;
  opacity:0.8;
  box-shadow: 0 2px 5px #333;
}

.menubar a{
  color:white;
  margin:10px 20px 0 20px;
  font-size:20px;
  display:inline-block;
}

a:hover{
  font-weight:700;
}

h2{
  font-size:40px;
  font-weight:200;
  margin: 100px 0 40px 0;
  color:#343434;
  text-decoration:underline;
  text-decoration-color:#87ceeb;
}

h3{
  font-size:20px;
  font-weight:300;
  margin-bottom:30px;
  color:#343434;
}

.footer{
  background-color:gray;
  text-align:center;
  height:100%;
  width:100%;
  opacity:0.8;
  box-shadow: 0 -2px 5px #333;
}

.footer p{
  color:#fff;
  padding:15px 0;
  font-size:16px;
}

.footer .responsive_notpc{
  display: none;
}

@media (max-width: 767px) { 
  .menubar{
    margin:0 auto;
  }

  .menubar a{
    margin-left: 5px;
    margin-right: 5px;
  }

  .footer .responsive_pc{
    display: none;
  }

  .footer .responsive_notpc{
    display: block;
  }

  h2{
    font-size: 36px;
  }

}

</style>
