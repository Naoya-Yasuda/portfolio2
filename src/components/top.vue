  <template>

  <div id="top-wrapper">
    <div class="top_images">
      <img src="../assets/images/bgimage.jpeg" alt="Nagai's portfolio website's top image" class="responsive_pc">
      <img src="../assets/images/bgimage_responsive.jpeg" alt="Nagai's portfolio website's top image to responsive" class="responsive_notpc">
    </div>

      <div id="main-title">
          <h1>Hiroaki NAGAI's <br class="resopnsive_notpc">Portfolios <span class="resopnsive_notpc">Site</span></h1>
      </div>

      <div class="perticles-wrapper">
        <vue-particles class="di"
          color="#87ceeb"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#87ceeb"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
      </div>
  </div>

</template>

<style>

#top-wrapper {
  text-align:center;
  position: relative;
  overflow: hidden;
}

img{
	width: 100%;
  height: auto;
  opacity: 0.85; 
  vertical-align: bottom;
}

#main-title{
  border-bottom: solid 2px #fff;
  width:100%;
	position: absolute;
  top: 50%;
	-webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

h1 {
  font-size:50px;
  margin: 0;
  color: #fff;
}

h1 .resopnsive_notpc{
  display: none;
}

.top_images .responsive_notpc{
  display: none;
}

.perticles-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) { 

  #top-wrapper {
    top: 50px;
  }

  h1 {
    font-size: 30px;
    margin: 0;
    color: #fff;
  }

  .top_images .responsive_pc{
    display: none;
  }

  .top_images .responsive_notpc{
    display: inline;
  }

  h1 .resopnsive_pc{
    display: none;
  }

  h1 .resopnsive_notpc{
    display: inline;
  }

}



</style>