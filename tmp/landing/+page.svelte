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
        80% { rotate: -48deg; z-index: 99; }
        to { rotate: -45deg; z-index: 99; }
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

    .show-imbolc-bg {
        background-image: url(pexels-helena-lopes-841303.jpg);
    }

    .show-ostara-bg {
        background-image: url(pexels-pixabay-46164.jpg);
    }

    .show-beltane-bg {    
        background-image: url(pexels-helena-lopes-841303.jpg);
    }

    .show-litha-bg {
        background-image: url(pexels-freddie-ramm-51548.jpg);
    }

    .show-lughnasadh-bg {
        background-image: url(pexels-lisa-fotios-1107717.jpg);
    }

    .show-samhain-bg {
        background-image: url(pexels-pixabay-531857.jpg);
    }

    .show-yule-bg {
        background-image: url(pexels-pixabay-235621.jpg); 
        color: oldlace;
    }

    .intro-content {
        
    }

    .intro-form {
        margin-top: 2vh;
        z-index: 99;
    }

    .login-form {
        /* display: flex; */
        /* flex-direction: column; */
        /* justify-content: center; */
        /* align-items: space-between;  */
        /* flex: 3; */
    }

    .login-form > input {
        min-width: 200px;
        min-height: 80px;
        font-size: 1.3rem;
        background: url('abstract-1850424_1920.jpg');
        border-radius: 20px;
        /* font-family: 'BabelStoneOghamLithic'; */
        font-family: 'Ring of Kerry';
        color: rgba(255, 255, 255, 0.783);
        text-align: center;
        margin-bottom: 10px;
    }

    .title-text {
        font-family: 'Ring of Kerry';
        font-size: 2.5rem;
        /* color: black; */
        font-weight: 900;
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
<script>
    let passcode = '';

    const getCurrentRotation = () => {
        const now = new Date();

        if (isImbolc(now)) {
            return 'show-imbolc'
        }

        if (isOstara(now)) {
            return 'show-ostara'
        }

        if (isBeltane(now)) {
            return 'show-beltane'
        }

        if (isLitha(now)) {
            return 'show-litha'
        }

        if (isLughnasadh(now)) {
            return 'show-lughnasadh'
        }

        if (isMabon(now)) {
            return 'show-mabon'
        }

        if (isSamhain(now)) {
            return 'show-samhain'
        }

        if (isYule(now)) {
            return 'show-yule';
        }
    }

    const isImbolc = (date) => {
        return date > new Date(date.getFullYear(), 11, 23) 
            && date <= new Date(date.getFullYear(), 1, 1)
    }

    const isOstara = (date) => {
        return date > new Date(date.getFullYear(), 1, 1) 
            && date <= new Date(date.getFullYear(), 2, 23)
    }

    const isBeltane = (date) => {
        return date > new Date(date.getFullYear(), 2, 23) 
            && date <= new Date(date.getFullYear(), 3, 30)
    }

    const isLitha = (date) => {
        return date > new Date(date.getFullYear(), 3, 30) 
            && date <= new Date(date.getFullYear(), 5, 23)
    }

    const isLughnasadh = (date) => {
        return date > new Date(date.getFullYear(), 5, 23) 
            && date <= new Date(date.getFullYear(), 7, 1)
    }

    const isMabon = (date) => {
        return date > new Date(date.getFullYear(), 7, 1) 
            && date <= new Date(date.getFullYear(), 8, 23)
    }

    const isSamhain = (date) => {
        return date > new Date(date.getFullYear(), 8, 23) 
            && date <= new Date(date.getFullYear(), 9, 31)
    }

    const isYule = (date) => {
        return date > new Date(date.getFullYear(), 9, 31) 
            && date <= new Date(date.getFullYear(), 11, 23)
    }
    
    const evaluatePassphrase = () => {
        const obfuscated = 'dGVzdHBhc3NwaHJhc2U=';
        // todo use actual crypto here, BE verify
        if (Buffer.from(passcode).toString('base64') === obfuscated) {
            const route = getCurrentRotation()?.replace('show-', '');
            window.location.replace(`/${route}`);
        }
    }
</script>


<div class="intro {getCurrentRotation()}-bg section"> 
    <div class="intro-content center-flex">
        <div class="title-text">It's Picnic Time</div>
        <div class={`wheel-image ${getCurrentRotation()}`}></div>
    </div>
    <div class="intro-form center-flex">
        <form class="login-form">
            <input
                id="passcode"
                type="text"
                name="passcode"
                bind:value={passcode}
            >
            <br/>
            <button 
                type="submit"
                on:click={evaluatePassphrase}
            >
                Unlock
            </button>
        </form>
    </div>
</div>