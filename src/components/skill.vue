<template>
  <div class="skills-wrapper">
    <h2>Skills</h2>

    <div class="quolifications">
      <h3>- Quolifications -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/CSM-logo.png" alt="Certified_ScrumMaster"><figcaption>Certified ScrumMaster</figcaption></figure>
        <figure><img src="../assets/images/skills/SAA-logo.png" alt="AWS_Certified_Solutions_Architect"><figcaption>AWS-SAA</figcaption></figure>
        <figure><img src="../assets/images/skills/AP-logo.png" alt="Applied_Information_Technology_Engineer"><figcaption>応用情報技術者</figcaption></figure>
        <figure><img src="../assets/images/skills/FE-logo.png" alt="Fundamental_Engineer"><figcaption>基本情報技術者</figcaption></figure>
        <figure><img src="../assets/images/skills/LPIC-1-logo.png" alt="LPIC_1"><figcaption>LPIC-1</figcaption></figure>
        <figure><img src="../assets/images/skills/OCJP-silver-logo.webp" alt="Oracle_Certified_Java_Programmer_Silver"><figcaption>OCJP-Silver</figcaption></figure>
        <figure><img src="../assets/images/skills/tokei-kentei-4-logo.png" alt="Japan_Statistical_Society_Certificate_4"><figcaption>統計検定4級</figcaption></figure>
      </div>
    </div>

    <div class="activity">
      <h3>- Activity -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/Hack_U_Online.png" alt="Hack_U_Online"><figcaption>Hack U Online2023<br>最優秀賞<br>HappyHacking賞</figcaption></figure>
        <figure><img src="../assets/images/skills/MDXQ-1.png" alt="MDXQ_Term1"><figcaption>経産省主催マナビDX Quest2023<br>Term1 Gold</figcaption></figure>
        <figure><img src="../assets/images/skills/MDXQ-2.png" alt="MDXQ_Term2"><figcaption>経産省主催マナビDX Quest2023<br>Term2 地域協業プログラム</figcaption></figure>
        <figure><img src="../assets/images/skills/zero-to-one-logo.png" alt="zero_to_one"><figcaption>JDLA「E資格」向け<br>認定プログラム</figcaption></figure>
        <figure><img src="../assets/images/skills/Kaggle-logo.png" alt="kaggle"><figcaption>Kaggle</figcaption></figure>
        <figure><img src="../assets/images/skills/SIGNATE-logo.png" alt="zero_to_one"><figcaption>SIGNATE</figcaption></figure>
      </div>
    </div>

    <div class="languages">
      <h3>- Languages -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/html.png" alt="html"><figcaption>HTML</figcaption></figure>
        <figure><img src="../assets/images/skills/css.png" alt="css"><figcaption>CSS</figcaption></figure>
        <figure><img src="../assets/images/skills/JS.png" alt="JavaScript"><figcaption>JavaScript</figcaption></figure>
        <figure><img src="../assets/images/skills/vue.png" alt="Vue.js"><figcaption>Vue.js</figcaption></figure>
        <figure><img src="../assets/images/skills/git.png" alt="git"><figcaption>Git</figcaption></figure>
        <figure><img src="../assets/images/skills/github.png" alt="GitHub"><figcaption>GitHub</figcaption></figure>
      </div>
    </div>

  </div>
</template>

<style>
  .skills-wrapper{
    text-align:center;
    .div{
      padding-bottom: 20px;
    }
  }

  .icon-area{
    width: 64%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
    margin-bottom: 4px;
  }

  @media (max-width: 767px) {

    figure{
      width: 112px;
      margin: 16px 30px 40px 30px;
    }

  }

</style>