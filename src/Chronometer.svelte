<script>
    import {tasks} from './Store.js'


let hours = '00';
var minutes = '00';
var seconds = '00';
var chronometerCall;
var play = false;

    
    function chronometer() {

        seconds ++

            if (seconds < '10') seconds = '0' + seconds;

                if (seconds > '59') {
                    seconds = '00';
                    minutes ++

                    if (minutes < '10') minutes = '0' + minutes
                };

                        if (minutes > '59') {
                            minutes = '00';
                            hours ++
                            
                            if (hours < '10') hours = '0' + hours
                        };
                       
    };

    function playChronometer() {
        if (play == false){
            play = true;
            clearInterval(chronometerCall)
            chronometerCall = setInterval(chronometer, 1000);}
    };
    playChronometer();

    function pauseChronometer() {
        play = false;
        clearInterval(chronometerCall)
        saveTime()
    };

    function resetChronometer() {
        clearInterval(chronometerCall)
            hours = '00';
            minutes = '00';
            seconds = '00';
    }

    function saveTime() {

        const totaltime = {
            hours,
            minutes,
            seconds,
        }
        $tasks.time = totaltime
    }
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/bad6d142da.js" crossorigin="anonymous"></script>
</svelte:head>
<!--Cronometro-->
<div class="chrono">
    <h1 data-chronometer>{hours}:{minutes}:{seconds}</h1>
</div>
    <div class="controls">
        <span id="play" on:click = {playChronometer}><i class="fas fa-play"></i></span>

        <span id="pause" on:click = {pauseChronometer}><i class="fas fa-pause"></i></span>

        <span id="reset" on:click = {resetChronometer}><i class="fas fa-undo-alt"></i></span>
    </div>

<style>
.chrono {
    display: flex;
    justify-content: center;
    font-size: 25px;
}

.controls {
    display: flex;
    justify-content: center;
}

#play, #pause {
    margin-right: 15px;
}

#play, #pause, #reset {
    font-size: 15px;
}
</style>