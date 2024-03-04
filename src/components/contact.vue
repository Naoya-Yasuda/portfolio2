<template>
  <div class="contact-wrapper">

    <h2>Contact</h2>
    <h3 class="contact_message">Please choise contact tool as you like ...</h3>

    <div class="link">
      <a href="mailto:yasuty0514@gmail.com" class="icon-link"><font-awesome-icon icon="envelope" class="awesome-icon mail"/></a>
      <a href="https://github.com/yasuty0514" class="icon-link"><font-awesome-icon :icon="['fab','github']" class="awesome-icon github"/></a>
      <a href="https://www.facebook.com/boogaloo.hiroakinagai" class="icon-link"><font-awesome-icon :icon="['fab','facebook']" class="awesome-icon facebook"/></a>
      <a href="https://www.instagram.com/yasuty0514/" class="icon-link"><font-awesome-icon :icon="['fab','instagram']" class="awesome-icon instagram"/></a>
      <a href="https://twitter.com/chiba_hiro0514/" class="icon-link"><font-awesome-icon :icon="['fab','twitter']" class="awesome-icon twitter"/></a>
    </div>

  </div>
</template>

<style>
    .contact-wrapper{
        text-align:center;
    }

    .contact_message{
        margin-bottom: 50px;
    }

    .link{
        display:inline-flex;
        width: 30%;
        justify-content: center;
    }

    .icon-link{
        margin: 0 10px;
        margin-bottom: 60px;
    }

    .awesome-icon{
        font-size: 2.7em;
        background-color: white;
        padding:0.3em;
        border-radius: 50%;
    }
    .awesome-icon:hover{
        color: white;
    }

    .mail{
        color: #DD5144;
    }
    .mail:hover{
        background-color: #DD5144;
    }

    .github{
        color: #171515;
    }
    .github:hover{
        background-color: #171515;
    }

    .facebook{
        color: #4267B2;
    }
    .facebook:hover{
        background-color: #4267B2;
    }

    .instagram{
        color: #f15245;
    }
    .instagram:hover{
        background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
    }

    .twitter{
        color: #1DA1F2;
    }
    .twitter:hover{
        background-color: #1DA1F2;
    }

    @media screen and (max-width: 768px){
        .awesome-icon{
            font-size: 2em;
            color:white;
        }

        .twitter{
            background-color: #1DA1F2;
        }

        .mail{
            background-color: #DD5144;
        }

        .github{
            background-color: #171515;
        }

        .facebook{
            background-color: #4267B2;
        }

        .instagram{
            background: radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf);
        }

    }
</style>