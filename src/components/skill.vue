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
        <figure><img src="../assets/images/skills/Hack_U_Online.png" alt="Hack_U_Online"><figcaption>Hack U Online 2023<br>最優秀賞<br>HappyHacking賞</figcaption></figure>
        <figure><img src="../assets/images/skills/MDXQ-1.png" alt="MDXQ_Term1"><figcaption>マナビDX Quest2023<br>Term1 PBL05(データ分析)</figcaption></figure>
        <figure><img src="../assets/images/skills/MDXQ-2.png" alt="MDXQ_Term2"><figcaption>マナビDX Quest2023<br>Term2 地域協働プログラム</figcaption></figure>
        <figure><img src="../assets/images/skills/zero-to-one-logo.png" alt="zero_to_one"><figcaption>JDLA「E資格」向け<br>認定プログラム</figcaption></figure>
        <figure><img src="../assets/images/skills/kaggle.png" alt="kaggle"><figcaption>Kaggle</figcaption></figure>
        <figure><img src="../assets/images/skills/SIGNATE-logo.png" alt="zero_to_one"><figcaption>SIGNATE</figcaption></figure>
      </div>
    </div>

    <div class="data science">
      <h3>- Data Science -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/scikit.webp" alt="Scikit_Learn"><figcaption>Scikit Learn</figcaption></figure>
        <figure><img src="../assets/images/skills/pytorch.png" alt="Pytorch"><figcaption>Pytorch</figcaption></figure>
        <figure><img src="../assets/images/skills/tensorflow.png" alt="TensorFlow"><figcaption>TensorFlow</figcaption></figure>
      </div>
    </div>

    <div class="cloud service">
      <h3>- Cloud Service -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/aws.png" alt="Scikit_Learn"><figcaption>AWS</figcaption></figure>
        <figure><img src="../assets/images/skills/gcp.png" alt="Pytorch"><figcaption>GCP</figcaption></figure>
        <figure><img src="../assets/images/skills/azure.png" alt="TensorFlow"><figcaption>Azure</figcaption></figure>
      </div>
    </div>

    <div class="languages">
      <h3>- Languages -</h3>
      <div class="icon-area">
        <figure><img src="../assets/images/skills/python.png" alt="html"><figcaption>Python</figcaption></figure>
        <figure><img src="../assets/images/skills/ts-logo.webp" alt="html"><figcaption>Typescript</figcaption></figure>
        <figure><img src="../assets/images/skills/php.png" alt="html"><figcaption>PHP</figcaption></figure>
        <figure><img src="../assets/images/skills/html.png" alt="html"><figcaption>HTML</figcaption></figure>
        <figure><img src="../assets/images/skills/css.png" alt="css"><figcaption>CSS</figcaption></figure>
        <figure><img src="../assets/images/skills/JS.png" alt="JavaScript"><figcaption>JavaScript</figcaption></figure>
        <figure><img src="../assets/images/skills/vue.png" alt="Vue.js"><figcaption>Vue.js</figcaption></figure>
        <figure><img src="../assets/images/skills/Angular-logo.png" alt="Vue.js"><figcaption>Angular</figcaption></figure>
        <figure><img src="../assets/images/skills/spring-boot.png" alt="Vue.js"><figcaption>Spring Boot</figcaption></figure>
        <figure><img src="../assets/images/skills/spring-batch.png" alt="Vue.js"><figcaption>Spring Batch</figcaption></figure>
        <figure><img src="../assets/images/skills/flutter.png" alt="Vue.js"><figcaption>Flutter</figcaption></figure>
        <figure><img src="../assets/images/skills/git.png" alt="git"><figcaption>Git</figcaption></figure>
        <figure><img src="../assets/images/skills/sql.png" alt="git"><figcaption>SQL</figcaption></figure>
      </div>
    </div>

  </div>
</template>

<style>
  .skills-wrapper{
    text-align:center;
  }
  .skills-wrapper > div{
    padding-bottom: 30px;
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