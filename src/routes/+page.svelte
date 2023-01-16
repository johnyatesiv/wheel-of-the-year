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

    .info {
        z-index: -99;
        background-color: rgba(153, 51, 51, 0.46);
        text-align: left;
        background:
            linear-gradient(135deg, rgba(65, 114, 78, 0.2) 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
            linear-gradient(225deg, rgba(65, 115, 78, 0.2) 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
        background-color: rgba(65, 114, 78, 0.2);
        background-size: 64px 128px;
    }

    .details {
        background-image: url(parchment.jpg);
        background-repeat: round;
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

    .thanks {
        background-image: url(brigid.png);
        opacity: 0.4;
        width: 100%;
        height: 100vh;
        background-repeat: round;
    }
</style>

<section class="intro section"> 
    <div class="intro-content">
        <div class="title-text">A very San Diego</div>
        <div class="title-text">Imbolc potluck</div>
        <div class="wheel-image"></div>
    </div>
</section>
<section class="info section">
    <p class="text-large">
        You are cordially invited to a picnic potluck celebrating the occasion of Imbolc
    </p>
    <p class="text-small">
        Imbolc marks the transition of winter to spring with fire and the bounties of nature
    </p>
</section>
<section class="details section">
    <p class="text-small left bold">
        When:
    </p>
    <p class="text-small left">
        February 4, 2022
    </p>
    <p class="text-small left bold">
        Where:
    </p>
    <p class="text-small left">
        TBD
    </p>
    <p class="text-small left bold">
        What to bring:
    </p>
    <p class="text-small left">
        Traditional Imbolc food includes butter, sheep's cheese, lavender and any foods resembling or related to the sun
    </p>
</section>
<!-- <section class="thanks section">
    <p class="text-large">
        Hope to see you there!
    </p>
</section> -->