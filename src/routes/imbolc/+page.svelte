<style>
    @font-face {
        font-family: 'Ring of Kerry';
        font-style: normal;
        font-weight: 400;
        src: url('Ring of Kerry.otf');
    }

    @font-face {
        font-family: 'Tiki Tropic D';
        font-style: normal;
        font-weight: 400;
        src: url('Tiki Tropic D.otf');
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

    @keyframes show_beltane {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -48deg; z-index: 99; }
        to { rotate: -45deg; z-index: 99; }
    }

    @keyframes show_lughnasadh {
        from { rotate: 0deg; z-index: 99; }
        80% { rotate: -48deg; z-index: 99; }
        to { rotate: -45deg; z-index: 99; }
    }

    .intro {    
        background-image: url(pexels-helena-lopes-841303.jpg);
        background-repeat: round;
        opacity: 1;
        z-index: -99;
        -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 5s; /* Firefox < 16 */
        -ms-animation: fadein 5s; /* Internet Explorer */
        -o-animation: fadein 5s; /* Opera < 12.1 */
        animation: fadein 5s;
    }

    .intro-content {
        text-align: center;
        background: transparent;
        display: flex;
        flex-direction: column;
    }

    .title-text {
        font-family: 'Ring of Kerry';
        font-size: 2rem;
        color: red;
        font-weight: 900;
    }

    .wheel-image {
        z-index: 99;
        opacity: 1;
        width: 80vw;
        height: 80vw;
        max-width: 500px;
        max-height: 500px;
        background-image: url(wheel_of_the_year.png);
        background-size: cover;
        position: relative;
        margin-top: 2%;
        align-self: center;
        animation: show_imbolc 5s;
        animation-iteration-count: 1;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
</style>

<section class="intro section"> 
    <div class="intro-content">
        <div class="title-text">Pagan Picnics</div>
        <div class="wheel-image"></div>
    </div>
</section>