<style>
    @font-face {
        font-family: 'Ring of Kerry';
        font-style: normal;
        font-weight: 400;
        src: url('$lib/assets/fonts/rok.otf');
    }

    .rok-text {
        font-family: 'Ring of Kerry';
    }

    @font-face {
        font-family: 'BabelStoneOghamLithic';
        src: url('$lib/assets/fonts/BabelStoneOghamLithic.ttf');
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @keyframes show_imbolc {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -48deg; z-index: 99; }
        to { rotate: -45deg; z-index: 99; }
    }

    @keyframes show_ostara {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -94deg; z-index: 99; }
        to { rotate: -90deg; z-index: 99; }
    }

    @keyframes show_beltane {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -137deg; z-index: 99; }
        to { rotate: -134deg; z-index: 99; }
    }

    @keyframes show_lughnasadh {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -226deg; z-index: 99; }
        to { rotate: -223deg; z-index: 99; }
    }

    @keyframes show_samhain {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -317deg; z-index: 99; }
        to { rotate: -315deg; z-index: 99; }
    }

    @keyframes show_yule {
        from { rotate: 0deg; z-index: 99; }
        30% { rotate: -2deg; z-index: 99; }
        80% { rotate: 2deg; z-index: 99; }
        to { rotate: 0deg; z-index: 99; }
    }

    .center-flex {
        text-align: center;
        background: transparent;
        display: flex;
        flex-direction: column;
    }

    .intro {
        background-repeat: space;
        height: 100vh;
    }

    .show-lughnasadh-bg {
        background-image: url($lib/assets/images/lughnasadh.webp);
    }

    .intro-form {
        margin-top: 2vh;
        z-index: 99;
    }

    .title-text {
        font-family: 'Ring of Kerry';
        font-size: 3.5rem;
        /* color: black; */
        font-weight: 800;
    }

    .header-text {
        filter: none;
        font-size: 1.4rem;
        font-weight: 600;
    }

    .text-center {
        text-align: center;
    }

    .wheel-image {
        z-index: 99;
        opacity: 1;
        width: 65vw;
        height: 65vw;
        max-width: 600px;
        max-height: 600px;
        background-image: url($lib/assets/images/wheel_of_the_year.png);
        background-size: cover;
        position: relative;
        margin-top: 2%;
        align-self: center;
    }

    .show-imbolc {
        animation: show_imbolc 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-ostara {
        animation: show_ostara 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-beltane {
        animation: show_beltane 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-litha {
        animation: show_litha 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-lughnasadh {
        animation: show_lughnasadh 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-mabon {
        animation: show_mabon 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-samhain {
        animation: show_samhain 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .show-yule {
        animation: show_yule 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .list-container {
        margin-top: 8vh;
        font-weight: bold;
    }

    .list-item {
        font-family: fantasy
    }

    .flex-section {
        display: flex;
        justify-content: space-evenly;
        margin-top: 1vh;
    }

    .invite {
        background-image: url($lib/assets/images/floral_pattern.png);
        background-size: cover;
        height: 200vh;
    }

    .invite-illumination {
        background: url($lib/assets/images/illumination.jpg);
        width: 586px;
        height: 267px;
        max-width: 100%;
    }

    .summary {
        height: 100vh;
        width: 100%;
        background: url($lib/assets/images/medieval_paper.png);
        background-size: cover;
        padding-top: 8vh;
    }

    .summary-header {
        margin-top: 30vh;
        margin-left: 10vw;
        font-size: 3em;
    }

    :global(body) { 
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .section {
        position: relative;
        display: block;
        width: 100%;
        background-size: cover;
        /* padding-left: 10vw; */
        /* padding-right: 10vw; */
        display: flex;
        flex-direction: column;
        padding-top: 5vh;
        align-content: center;
    }

    .divider-section {
        height: 5vh;
        width: 100vw;
    }

    .bold {
        font-weight: 800;
    }

    .attributions {
        display: none;
    }

    .card {
        margin: 2% auto;
        padding: 2em;
        width: 60%;
        box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
        background: #fffef0;
        border-radius: 10px;
        /** need to reposition text to avoid blurring it **/
        /* filter: url(#wavy2); */
    }

    .border {
        width: 100%;
        height: 10vh;
        background: url($lib/assets/images/stone.jpg);
        background-size: cover;
    }
    
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {        
        .flex-section {
            flex-direction: column;
        }

        .mobile-hide {
            display: none;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {    
        .flex-section {
            flex-direction: column;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        .flex-section {
            flex-direction: row;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        
    }
</style>

<div class="intro show-lughnasadh-bg section"> 
    <div class="intro-content center-flex">
        <div class="title-text">Picnic Time!!</div>
        <div class={`wheel-image show-lughnasadh`}></div>
    </div>
    <div class="intro-form center-flex">
        
    </div>
</div>

<div class="border"></div>

<div class="invite section text-center">
    <div class="flex-section mobile-hide">
        <div class="invite-illumination"></div>
    </div>
    <div class="flex-section rok-text">
        <div class="header-text card">
            You are cordially invited to a summer picnic potluck
        </div>
    </div>
    <div class="flex-section rok-text">
        <div class="list-container card">
            <div class="header-text">Where & When</div>
            <div class="list-item">Saturday 7/29/2023</div>
            <div class="list-item">2PM to Sunset</div>
            <div class="list-item">
                <a href="https://goo.gl/maps/TDtox1PtXxFQr9iz7">
                    @Kit Carson Park by Tree Lake
                </a>
            </div>
        </div>
    </div>
    <div class="flex-section rok-text">
        <div class="list-container card">
            <div class="header-text">Activities</div>
            <div class="list-item">Bread Man</div>
            <div class="list-item">Lawn Games</div>
            <div class="list-item">Bike Jousting</div>
            <div class="list-item">Arts + Crafts</div>
        </div>
    </div>
    <div class="flex-section rok-text">
        <div class="list-container card">
            <div class="header-text">What to bring</div>
            <div class="list-item">Breads & grains</div>
            <div class="list-item">Berries & jams & wines</div>
            <div class="list-item">Summer harvest goods</div>
            <div class="list-item">Shade + sunscreen</div>
        </div>        
    </div>
</div>

<div class="border"></div>

<div class="summary section text-center">
    <div class="header-text summary-header rok-text">
        Hope to see you there!
    </div>
</div>

<svg style="display:none;">
    <filter id="wavy2">
      <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="20" />
    </filter>
  </svg>

<div class='attributions'>
    Images sourced from 
    <a href="https://www.freepik.com/free-vector/vintage-flourish-pattern_3413194.htm#query=medieval%20background%20pattern&position=8&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik
    - Wordpress

    Thanks to all who provided images for this page
</div>