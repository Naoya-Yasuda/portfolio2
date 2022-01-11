<template>
  <div class="skills-wrapper">
    <h2>Skills</h2>

    <div class="quolifications">
      <h3>- Quolifications -</h3>
      <figure><img src="../assets/images/skills/MOS_Word.png" alt="MOS_Word"><figcaption>MOS Word</figcaption></figure>
      <figure><img src="../assets/images/skills/MOS_Excel.png" alt="MOS_Excel"><figcaption>MOS Excel</figcaption></figure>
      <figure><img src="../assets/images/skills/FE.gif" alt="Fundamental_Engineer"><figcaption>基本情報技術者</figcaption></figure>
      <figure><img src="../assets/images/skills/Oracle_bronze.png" alt="Oracle_Bronze"><figcaption>Oracle Bronze</figcaption></figure>
    </div>

    <div class="languages">
      <h3>- Languages -</h3>
      <figure><img src="../assets/images/skills/html.png" alt="html"><figcaption>HTML</figcaption></figure>
      <figure><img src="../assets/images/skills/css.png" alt="css"><figcaption>CSS</figcaption></figure>
      <figure><img src="../assets/images/skills/JS.png" alt="JavaScript"><figcaption>JavaScript</figcaption></figure>
      <figure><img src="../assets/images/skills/vue.png" alt="Vue.js"><figcaption>Vue.js</figcaption></figure>
      <figure><img src="../assets/images/skills/git.png" alt="git"><figcaption>Git</figcaption></figure>
      <figure><img src="../assets/images/skills/github.png" alt="GitHub"><figcaption>GitHub</figcaption></figure>
    </div>
    
  </div>
</template>

<style>
  .skills-wrapper{
    text-align:center;
  }

  figure img{
    width:70px;
  }

  figure{
    display:inline-block;
    margin-bottom:30px;
  }
  
  figcaption{
    color:grey;
    font:10px;
    text-align: center;
  }

  figure img{
    width: 70px;
    height: 70px;
  }

  @media (max-width: 767px) { 

    figure{
      width: 112px;
      margin: 16px 30px 40px 30px;
    }

  }

</style>