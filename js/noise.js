var supportsES6 = function() {
    try {
      new Function("(a = 0) => a");
      return true;
    }
    catch (err) {
      return false;
    }
  }();
  
  var Noise = (function () {
  
    "use strict";
    if (!supportsES6) {return;}
  
    const audioContext = new(window.AudioContext || window.webkitAudioContext);
  
    function stopNoise(track) {
      if (track.audioSource) {
        clearTimeout(fadeOutTimer);
        track.audioSource.stop();
      }
    }
    
  
    function playNoise(track) {
      stopNoise(track);

      track.audioSource = audioContext.createBufferSource();
      track.gainNode = audioContext.createGain();
      track.audioSource.connect(track.gainNode);
      track.gainNode.connect(audioContext.destination);
      
      const bufferSize = 2 * audioContext.sampleRate;
      const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
  
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      
      track.audioSource.buffer = noiseBuffer;

      track.gainNode.gain.value = 0.02;

      track.audioSource.loop = true;
      track.audioSource.start();
    }
  
    // Expose functions:
    return {
      play : playNoise,
      stop : stopNoise,
    }
  
  }());
  
  var noise = {
    volume: 0.02, // 0 - 1
  }
  