// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => {
  heart.addEventListener('click', (e) => {
    mimicServerCall()
    .then(resolve => {
      if (heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.setAttribute('class', 'activated-heart')
        console.log("I've been clicked!")
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.setAttribute('class', '')
      }
    })
    .catch(reject => {
      const modal = document.querySelector('div#modal')
      // alert("Error!")
      modal.setAttribute('class', '')
      setTimeout(() => {modal.setAttribute('class', 'hidden')}, 5000)

    })
  })
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
