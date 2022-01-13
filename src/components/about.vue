<template>
  <div class="about-wrapper">

    <h2>About</h2>

    <table>
      <tr><th>Name</th><th>永井 寛朗(Hiroaki NAGAI)</th></tr>
      <tr><th>GitHub</th><th><a href="https://github.com/chibahiro0514">chibahiro0514</a></th></tr>
      <tr><th>Facebook</th><th><a href="https://www.facebook.com/boogaloo.hiroakinagai">Hiroaki Nagai</a></th></tr>
      <tr><th>Instragram</th><th><a href="https://www.instagram.com/chibahiro0514/">@chibahiro0514</a></th></tr>
      <tr><th>Twitter</th><th><a href="https://twitter.com/chiba_hiro0514/">@chiba_hiro0514</a></th></tr>
      <tr><th>Mail</th><th>chibahiro0514[at]gmail.com</th></tr>
    </table>

    <div class="career">
      <ul>
       <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2006.04 〜 2010.03</p>
              <p class="headline">都内私立大学</p>
              <p class="description">工学部情報メディア学科在籍。CG, 動画, 音楽等のメディアから始まり、ICTに関わる分野を幅広く学ぶ。研究題材はRSA暗号(使用言語:Basic)。</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
           <p class="circle responsive_notpc"></p>
           <span class="txt">
              <p class="term">2010.04 〜 2019.08</p>
              <p class="headline">高等学校教員</p>
              <p class="description">神奈川県教育委員会在籍。数学・情報科目を担当。成績処理システム運営主任、全校生徒学籍管理、行政文書発行等。カリキュラムWGにて教育課程策定(2021年度現在施行中。)
              </p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2018.06 〜 2020.01
              </p>
              <p class="headline">青年海外協力隊</p>
              <p class="description">自己啓発休業取得後、アフリカはザンビアへ赴任。中等教育学校にて情報科教員。ICT分科会代表も務め、コンピュータラボ大改修プロジェクトを実施。</p>
          </span>
          <p class="circle responsive_pc"></p>
        </li>
        <li>
          <p class="circle responsive_notpc"></p>
          <span class="txt">
              <p class="term">2021.08 〜 現在
              </p>
              <p class="headline">都内某IT企業</p>
              <p class="description">開発からサブPMまで幅広い業務を担当。海外自動車製造メーカ担当により英語を用いた業務も経験</p>
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