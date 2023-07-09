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
    }

    .section {
        padding-top: 5vh;
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
        font-size: 1.4rem;
        font-weight: 600;
    }

    .text-center {
        text-align: center;
    }

    .wheel-image {
        z-index: 99;
        opacity: 1;
        width: 70vw;
        height: 70vw;
        max-width: 800px;
        max-height: 800px;
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
    }

    .flex-section {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2vh;
    }

    .invite {
        background-color: 'yellow';
    }

    .invite-illumination {
        background: url($lib/assets/images/illumination.jpg);
        width: 586px;
        height: 267px;
        max-width: 100%;
    }

    /* this will apply to <body> */
    html {
        width: 100%;
    }

    :global(body) { 
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .section {
        position: relative;
        display: block;
        height: 100vh;
        width: 80vw;
        padding-left: 10vw;
        padding-right: 10vw;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
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
        <div class="title-text">Picnic Time</div>
        <div class={`wheel-image show-lughnasadh`}></div>
    </div>
    <div class="intro-form center-flex">
        
    </div>
</div>

<div class="section invite text-center">
    <div class="flex-section mobile-hide">
        <div class="invite-illumination"></div>
    </div>
    <div class="flex-section rok-text">
        <div class="header-text">
            You are cordially invited to a summer picnic potluck
        </div>
    </div>
    <div class="flex-section rok-text">
        <div class="list-container">
            <div class="header-text">Where & When</div>
            <div class="list-item">Saturday 7/29/2023</div>
            <div class="list-item">2PM to Sunset-ish</div>
            <div class="list-item">
                <a href="https://goo.gl/maps/TDtox1PtXxFQr9iz7">
                    @Kit Carson Park by Tree Lake
                </a>
            </div>
        </div>

        <div class="list-container">
            <div class="header-text">Activities</div>
            <div class="list-item">Bike Jousting</div>
            <div class="list-item">Bread Man</div>
            <div class="list-item">Crafts</div>
        </div>
    
        <div class="list-container">
            <div class="header-text">What to bring</div>
            <div class="list-item">Bread</div>
            <div class="list-item">Berries & jams & wines</div>
            <div class="list-item">Summer harvest goods</div>
            <div class="list-item">Shade + sunscreen</div>
        </div>        
    </div>
</div>