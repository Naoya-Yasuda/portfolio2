<template>
  <div class="portfolios-wrapper">
    <h2>Portforlios</h2>

        <ul class="portfolios">

          <li class="panel">
            <object class="panel-img" data="/portfolio2/img/MDXQ2023_slide.pdf" type="application/pdf"></object>
            <div class="panel-content">
              <p class="panel-title">マナビDX Quest 2023<br>スマホアプリデータ分析</p>
              <p class="panel-text">東北のグループ企業との協働。現状把握・問題整理からEDAを実施し課題と打ち手を設定しPoCを実施。提案資料を作成。有償契約調整中</p>
              <p class="panel-lang">Languages : Python, Jupyter Notebook</p>
              <p class="panel-skill">AI model : LightGBM, LSTM, k-means</p>
              <br>
              <a href="https://r-club.jp/index.php/" class="panel-link">Website</a>
              <a href="https://github.com/Naoya-Yasuda/MANABI_DX_QUEST_2023_PrePoC" class="panel-link github-link">GitHub</a>
              <p class="panel-text-mini">※機密保護の観点から資料はマスク済。Git上にはデータ、notebookの出力を管理しないように設定済。</p>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/MDXQ2023.png"  alt="マナビDXクエスト">
            <div class="panel-content">
              <p class="panel-title">マナビDX Quest 2023<br>PBL05データ分析</p>
              <p class="panel-text">データ分析30位 Gold修了。EDA、PoC、実行計画策定まで実施。</p>
              <p class="panel-lang">Languages : Python, Jupyter Notebook</p>
              <p class="panel-skill">AI model : LightGBM</p>
              <br>
              <a href="https://dxq.manabi-dx.ipa.go.jp/" class="panel-link">Website</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/HackU_panel.png"  alt="OpenHackU">
            <div class="panel-content">
              <p class="panel-title">Open Hack U 2023 ONLINE<br>盲導犬スマホアプリ</p>
              <p class="panel-text">サイバー大学の3名で参加<br>リーダーとして主に開発・事務局への解説を担当<br>最優秀賞と参加者投票による賞をW受賞</p>
              <p class="panel-lang">Languages : Flutter Dart</p>
              <br>
              <a href="https://hacku.yahoo.co.jp/hacku2023_online/index.html" class="panel-link">Website</a>
              <a href="https://www.youtube.com/live/PAsUW8Uk5JM?si=aWKECx11UTioCvgk&t=3196" class="panel-link">Youtube</a>
              <a href="https://github.com/Naoya-Yasuda/HackU2023_project" class="panel-link">GitHub</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/portfolio_panel.png"  alt="ポートフォリオ">
            <div class="panel-content">
              <p class="panel-title">ポートフォリオサイト</p>
              <p class="panel-text">当サイト、Vue.jsを用いて作成。</p>
              <p class="panel-lang">Languages : HTML, CSS, JS(Vue.js)</p>
              <br>
              <a href="https://github.com/Naoya-Yasuda/portfolio2" class="panel-link github-link">GitHub</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/sodan.jpg"  alt="相談システム">
            <div class="panel-content">
              <p class="panel-title">相談システム</p>
              <p class="panel-text">開発リーダーとして顧客折衝、AIによるリスクキーワード抽出、LINE周りのバックエンド開発、BtoB向けメイン画面、メール相談機能を開発</p>
              <p class="panel-lang">Languages : Python, HTML, CSS, JS(Vue.js) PHP</p>
              <br>
              <a href="https://yorisoi-chat.jp/" class="panel-link github-link">Website</a>
            </div>
          </li>

          <li class="panel">
            <img class="panel-img" src="../assets/images/portfolios/JTB_panel.jpg"  alt="JTB">
            <div class="panel-content">
              <p class="panel-title">JTB公式サイト刷新</p>
              <p class="panel-text">保守フェーズにて主に画面側を担当</p>
              <p class="panel-lang">Languages : HTML, CSS, JS, Java</p>
              <br>
              <a href="https://www.jtb.co.jp/" class="panel-link">Website</a>
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

  .panel-lang, .panel-skill{
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
    height: 240px;
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

  .panel-text-mini{
    font-size: 10px;
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