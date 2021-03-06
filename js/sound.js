var playing = false;

var soundTime = 300; // 300
var pauseTime = 33; // 33

var audioCtx;
var oscillator;
var volume;

function setPlaying(bool) {
    playing = bool;
}

function stopPlaying() {
    playing = false;
    
    oscillator.stop(0);
}

function playSound(freqs) {
    if (!playing) {
        var play = turnArrayToFreq(freqs);
        dropFreqToText();

        setPlaying(true);
        audioCtx = new AudioContext();
        oscillator = audioCtx.createOscillator();
        volume = audioCtx.createGain();

        volume.gain.value = 0.5;
        oscillator.connect(volume);
        volume.connect(audioCtx.destination);

        var timeOffset = 0;

        for (let index = 0; index < 9; index++) {
            const freq = play[index];
            oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime + timeOffset / 1000);
            setTimeout(setHz, timeOffset, freq);
            setTimeout(pushFreqToText, timeOffset, freq);

            timeOffset += soundTime;

            oscillator.frequency.setValueAtTime(0, audioCtx.currentTime + timeOffset / 1000);
            setTimeout(setHz, timeOffset, freq);
            timeOffset += pauseTime;            
        }

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + timeOffset / 1000);
        setTimeout(setHz, timeOffset, 0);
        setTimeout(setPlaying, timeOffset, false);
    }
}