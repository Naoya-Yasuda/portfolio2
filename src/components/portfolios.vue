<template>
  <div class="portfolios-wrapper">
    <h2>Portforlios</h2>

        <ul class="portfolios">

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/kanto-hamachacha_panel.jpg"  alt="関東ハマチャチャ同好会キャプチャ">
            <div class="panel-content">
              <p class="panel-title">所属ダンスチーム公式サイト</p>
              <p class="panel-text">Webマーケティングの知識も応用。</p>
              <p class="panel-lang">Languages : HTML, CSS, JS, PHP</p>
              <br>
              <a href="https://www.kanto-hamachacha.com/" class="panel-link">Website</a>
              <a href="https://github.com/yasuty0514/kanto-hamachacha" class="panel-link github-link">Github</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/portfolio_panel.png"  alt="ポートフォリオ">
            <div class="panel-content">
              <p class="panel-title">ポートフォリオサイト</p>
              <p class="panel-text">当サイト、Vue.jsを用いて作成。</p>
              <p class="panel-lang">Languages : HTML, CSS, JS(Vue.js)</p>
              <br>
              <a href="https://github.com/yasuty0514/myportfolio" class="panel-link github-link">Github</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/webchacha_panel.png"  alt="ポートフォリオ">
            <div class="panel-content">
              <p class="panel-title">Webダンススクール<br>"WEBチャチャ"</p>
              <p class="panel-text">配信型Webレッスンを展開、2021年11月より運用開始</p>
              <p class="panel-lang">Languages : PHP, WordPress</p>
              <br>
              <a href="https://webchacha.official.jp/" class="panel-link">Website</a>
            </div>
          </li>

        </ul>

  </div>
</template>

<style>
  .portfolios-wrapper{
    text-align:center;
  }
  .portfolios{
    list-style-type: none;
    padding-left: 0;
    padding-left: 5%;
    padding-right: 5%;
    text-align:center;
  }
  .panel-lang{
    font-weight: 500;
  }
  .panel {
    display: inline-block;
    margin: 30px 45px;
    width: 350px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
  }
  .panel-img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: auto;
    border-bottom: solid 1px #ccc;
  }
  .panel-content {
    padding: 20px;
  }
  .panel-title {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  .panel-text {
    color: #777;
    font-size: 14px;
    line-height: 1.5;
  }
  .panel-link{
    border: 1px solid #00aaff;
    text-decoration: none;
    color: #00aaff;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .panel-link:hover {
    font-weight: 700;
  }
  .github-link{
    border-color: #171515;
    color: #171515;
  }
  @media (max-width: 767px) {
    .panel {
      margin: 30px 0px;
      width: 320px;
  }
}
</style>