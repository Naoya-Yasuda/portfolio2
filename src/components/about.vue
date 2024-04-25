<template>
  <div class="about-wrapper">

    <h2>About</h2>

    <table>
      <tr><th>Name</th><th>安田 直也(Naoya Yasuda)</th></tr>
      <tr><th>GitHub</th><th><a href="https://github.com/Naoya-Yasuda">Naoya-Yasuda</a></th></tr>
      <tr><th>Facebook</th><th><a href="https://www.facebook.com/naoya.yasuda.39">Naoya Yasuda</a></th></tr>
      <tr><th>Qiita</th><th><a href="https://qiita.com/2301330039zz">@2301330039zz</a></th></tr>
      <tr><th>Twitter</th><th><a href="https://twitter.com/yasutyNhoffman/">@yasutyNhoffman</a></th></tr>
      <tr><th>Mail</th><th>2301330039zz@cyber-u.ac.jp</th></tr>
    </table>

    <div class="career">
      <ul>
       <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2006.04 〜 2015.03</p>
              <p class="headline">千葉大学</p>
              <p class="description">工学部デザイン学科入学<br>ストリートダンスにのめり込む</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
           <p class="circle responsive_notpc"></p>
           <span class="txt">
              <p class="term">2016.01 〜 2017.02</p>
              <p class="headline">アドニス株式会社</p>
              <p class="description">量販店向けのバッグの企画部にて<br>商品デザインを担当
              </p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2017.03 〜 2018.12
              </p>
              <p class="headline">株式会社トラスト・テック</p>
              <p class="description">従業員10,000名 SES事業部に配属<br>放送業界某外資系チャンネル運用・保守</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2019.01 〜 2022.08
              </p>
              <p class="headline">サン・エム・システム株式会社</p>
              <p class="description">従業員400名 SES事業部に配属<br>フロントエンド、バックエンド問わず<br>上流から下流まで経験</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2022.09 〜 2023.07
              </p>
              <p class="headline">株式会社ジョインポイントテック</p>
              <p class="description">従業員50名 本社配属<br>開発リーダーとして相談システムの刷新にて顧客折衝、AIを担当</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2023.04 〜 2025.09卒業予定
              </p>
              <p class="headline">サイバー大学</p>
              <p class="description">AIテクノロジーコース在籍<br>2024/04より自然言語処理のゼミナール配属</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2024.02 〜 現在
              </p>
              <p class="headline">AI to EYE CONTACTS</p>
              <p class="description">個人事業を開業<br>フリーランスとして活動中</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2024.06 〜 予定
              </p>
              <p class="headline">官公庁系データアナリスト</p>
              <p class="description">非常勤の国家公務員として勤務開始予定</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>

      </ul>
    </div>

  </div>
</template>

<style>

  .about-wrapper{
    text-align: center;
  }

  table{
    display: inline-block;
  }

  th{
    text-align: left;
    padding: 0 10px 20px 0;
    font-size: 20px;
    font-weight: 240;
    color: #343434;
  }

  a{
    text-decoration:none;
  }

  .career{
    margin-top:50px;
    width: 100%;
  }

  .career ul {
    margin: 0 auto;
    max-width: 768px;
    padding: 0;
  }

  .career ul li {
    display: flex;
    align-items: center;
  }

  .career p{
    margin: 10px  0;
  }

  .career ul li span{
    font-size: 18px;
    font-weight: 240;
    color: #343434;
  }

  .headline{
    font-size: 26px;
    font-weight: 500;
    color: #343434;
  }

  .description{
    font-size: 17px;
    padding:0 15px;
  }

  .career ul li .txt {
      width: 50%;
      box-sizing: border-box;
      border-right: solid 2px gray;
      margin: 0;
      padding: 10px;
    }

  .career ul li:nth-child(even) {
    flex-direction: row-reverse;
  }

  .career ul li:nth-child(even) .txt {
    border-left:solid 2px gray;
    border-right:none;
    margin-right:1px;
  }

  .career ul li:nth-child(odd) .txt {
    margin-left: 1px;
  }

  .circle{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: skyblue;
    margin:0;
  }

  .career .responsive_notpc{
    display: none;
  }

  .career .responsive_pc{
    display: block;
  }

  .career ul li:nth-child(even) .circle {
    transform: translate(13.5px,0);
  }

  .career ul li:nth-child(odd) .circle {
    transform: translate(-13.5px,0);
  }

@media (max-width: 767px) {

  table{
    margin: 0 10px;
  }

  th{
    font-size: 19px;
  }

 .career ul li .txt {
    width: 100%;
    border-right: none;
    margin: 0;
    padding: 10px;
  }

  .headline{
    font-size: 24px;
    font-weight: 400;
  }

  .career ul li:nth-child(even) {
    flex-direction: row;
  }

  .career ul li:nth-child(odd) .txt {
    border-left:solid 2px gray;
    border-right:none;
    margin:0px;
  }

  .career .responsive_notpc{
    display: block;
  }

  .career .responsive_pc{
    display: none;
  }

  .career ul li:nth-child(odd) .circle {
    transform: translate(13.5px,0);
  }

}


</style>