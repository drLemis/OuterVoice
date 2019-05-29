var currentOuterIndex = 0;
var minOuterIndex = 0;
var maxOuterIndex = 29;

var started = false;

var allOuters = [
    [1, 2, 3, 1, 2, 3, 1, 2, 3], // hello

    [1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [2, 1, 1, 1, 1, 1, 1, 1, 1], // 1
    [3, 1, 1, 1, 1, 1, 1, 1, 1], // 2
    [1, 2, 1, 1, 1, 1, 1, 1, 1], // 3
    [2, 2, 1, 1, 1, 1, 1, 1, 1], // 4
    [3, 2, 1, 1, 1, 1, 1, 1, 1], // 5
    [1, 3, 1, 1, 1, 1, 1, 1, 1], // 6
    [2, 3, 1, 1, 1, 1, 1, 1, 1], // 7
    [3, 3, 1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 2, 1, 1, 1, 1, 1, 1], // 9
    [2, 1, 2, 1, 1, 1, 1, 1, 1], // 10
    [3, 1, 2, 1, 1, 1, 1, 1, 1], // 11
    [1, 2, 2, 1, 1, 1, 1, 1, 1], // 12
    [2, 2, 2, 1, 1, 1, 1, 1, 1], // 13
    [3, 2, 2, 1, 1, 1, 1, 1, 1], // 14
    [1, 3, 2, 1, 1, 1, 1, 1, 1], // 15
    [2, 3, 2, 1, 1, 1, 1, 1, 1], // 16
    [3, 3, 2, 1, 1, 1, 1, 1, 1], // 17
    [1, 1, 3, 1, 1, 1, 1, 1, 1], // 18
    [2, 1, 3, 1, 1, 1, 1, 1, 1], // 19
    [3, 1, 3, 1, 1, 1, 1, 1, 1], // 20
    [1, 2, 3, 1, 1, 1, 1, 1, 1], // 21
    [2, 2, 3, 1, 1, 1, 1, 1, 1], // 22
    [3, 2, 3, 1, 1, 1, 1, 1, 1], // 23
    [1, 3, 3, 1, 1, 1, 1, 1, 1], // 24
    [2, 3, 3, 1, 1, 1, 1, 1, 1], // 25
    [1, 1, 1, 1, 1, 1, 1, 1, 2], // ?
    [1, 1, 1, 1, 1, 1, 1, 1, 2], // ?
    [1, 1, 1, 1, 1, 1, 1, 1, 2], // ?
    // [3, 3, 3, 3, 3, 3, 3, 3, 3] // need 27
]

// [1, 1, 1, 1, 1, 1, 1, 1, 2], // ?
// [1, 1, 1, 1, 1, 1, 1, 1, 3], // =
// [1, 1, 1, 1, 1, 1, 1, 2, 1], // -
// [1, 1, 1, 1, 1, 1, 1, 2, 2], // /
// [1, 1, 1, 1, 1, 1, 1, 3, 1], // +
// [1, 1, 1, 1, 1, 1, 2, 3, 2], // *

function startPlayOuters()
{
    bIntroRemove = true;
    if (!started)
    {
        Noise.play(noise);
        started = true;
        playCurrentOuters();
        setInterval(playCurrentOuters, (soundTime + pauseTime) * 12);
    }
}

function playCurrentOuters() {
    if (minOuterIndex <= currentOuterIndex && currentOuterIndex <= maxOuterIndex) {
        playSound(turnArrayToOuter(allOuters[currentOuterIndex]));
        currentOuterIndex++;
    } else {
        currentOuterIndex = minOuterIndex;
        playCurrentOuters();
    }
}