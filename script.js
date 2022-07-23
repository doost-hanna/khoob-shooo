const text = document.getElementById('second')
const text2 = document.getElementById('third')

let count = 0

document.getElementById('firstButton').addEventListener('click', () => {
    if (count === 0){
        text.innerHTML = 'mage nagoftam nazan /:'
        text2.innerHTML = 'jorat dari yebar dige bezan'
        count++
    }
    else if (count === 1) {
        text.innerHTML = 'baz zad /:'
        text2.innerHTML = 'indafe bezani ye etefagh dige miofte vali :)'
        count++
    }
    else {
        document.body.innerHTML = ''
        document.body.className = 'black'
        const video = document.createElement('video')
        video.src = './clip.mp4'
        document.body.appendChild(video)
        video.play()
    }
})