const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay )
$pause.addEventListener('click', handlePause )
$backward.addEventListener('click', handleBackward )
$forward.addEventListener('click', handleForward )

$pause.hidden = true


function handlePlay(){
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('play')
}

function handlePause(){
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
}

 function handleBackward(){
  $video.currentTime -= 10
}

function handleForward(){
  $video.currentTime += 10

}