const audioCtx = new AudioContext()

// source
const audioElement = document.querySelector('audio')
const track = audioCtx.createMediaElementSource(audioElement)

// gain
const gain = audioCtx.createGain()
const volume = document.querySelector('#volume')
volume.addEventListener('input', () => {
    gain.gain.value = volume.value
})

// destination
const dest = audioCtx.destination

// connect
track.connect(gain).connect(dest)

// play button
const playBtn = document.querySelector('button')

playBtn.addEventListener('click', () => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume()
    }

    if (playBtn.dataset.playing === 'false') {
        // console.log(playBtn.dataset)
        audioElement.play()
        playBtn.dataset.playing = 'true'
    } else if (playBtn.dataset.playing === 'true') {
        // console.log(playBtn.dataset)
        audioElement.pause()
        playBtn.dataset.playing = 'false'
    }
})
audioElement.addEventListener('ended', () => {
    playBtn.dataset.playing = 'false'
})


