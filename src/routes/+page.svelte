<style>
    @font-face {
        font-family: 'Ring of Kerry';
        font-style: normal;
        font-weight: 400;
        src: url('fonts/Ring of Kerry.otf');
    }

    @font-face {
        font-family: 'BabelStoneOghamLithic';
        src: url('fonts/BabelStoneOghamLithic.ttf');
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

    .show-lughnasadh-bg {
        background-image: url(lughnasadh.webp);
    }

    .intro-form {
        margin-top: 2vh;
        z-index: 99;
    }

    .title-text {
        font-family: 'Ring of Kerry';
        font-size: 2.5rem;
        /* color: black; */
        font-weight: 900;
    }

    .text-center {
        text-align: center;
    }

    .wheel-image {
        z-index: 99;
        opacity: 1;
        width: 60vw;
        height: 60vw;
        max-width: 400px;
        max-height: 400px;
        background-image: url(wheel_of_the_year.png);
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
</style>

<div class="intro show-lughnasadh-bg section"> 
    <div class="intro-content center-flex">
        <div class="title-text">Pagan Picnic Time</div>
        <div class={`wheel-image show-lughnasadh`}></div>
    </div>
    <div class="intro-form center-flex">
        
    </div>
</div>

<div class="section text-center">
    <h2>You are invited to a picnic potluck celebrating</h2>
    <h1>Lughnasadh (loo-na-sah)</h1>
    <p>Lugnasadh is a harvest festival traditionally celebrated to honor the Celtic god Lugh</p>
    <p>Typical activities included sports and enjoying the fruits of the summer harvest</p>
    <h2>Activities</h2>
    <div class="list-container">
        <div class="list-item">Bike Jousting</div>
        <div class="list-item">Crowning of King Puck</div>
        <div class="list-item">Bread Man</div>
        <div class="list-item">Arts & Crafts</div>
    </div>

    <h2>Food + what to bring</h2>
    <div class="list-container">
        <div class="list-item">Grains & bread</div>
        <div class="list-item">Berries and jams</div>
        <div class="list-item">Whatever fun summer stuff you like!</div>
    </div>
</div>