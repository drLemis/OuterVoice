function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function turnArrayToOuter(array) {
    var outer = [];
    outer[4] = array[0];
    outer[3] = array[1];
    outer[6] = array[2];
    outer[7] = array[3];
    outer[8] = array[4];
    outer[5] = array[5];
    outer[2] = array[6];
    outer[1] = array[7];
    outer[0] = array[8];
    return outer;
}

function turnOuterToArray(outer) {
    var array = [];
    array[0] = outer[4];
    array[1] = outer[3];
    array[2] = outer[6];
    array[3] = outer[7];
    array[4] = outer[8];
    array[5] = outer[5];
    array[6] = outer[2];
    array[7] = outer[1];
    array[8] = outer[0];
    return array;
}

function turnArrayToFreq(array) {
    var freq = [];
    for (let index = 0; index < 9; index++) {
        if (array[index] == 1) {
            freq[index] = 220;
        } else if (array[index] == 2) {
            freq[index] = 440;
        } else if (array[index] == 3) {
            freq[index] = 880;
        } else {
            freq[index] = 0;
        }
    }
    return freq;
}
