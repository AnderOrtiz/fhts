(() => {

    enum audioLevel  {
        min = 1,
        medium, // => = 2 por defaul
        max = 10,
    }

let currentAudio = audioLevel.medium;

console.log(currentAudio)
console.log({audioLevel})

})()