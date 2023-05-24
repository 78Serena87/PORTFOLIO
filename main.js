// header scrolling effect
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('nav-show')
  } else {
    $('header').removeClass('nav-show')
  }
})

//hamburger
const navSlide = () => {
  const hamburger = document.querySelector('.hamburger')
  const navbar = document.querySelector('.nav-bar')
  const navLinks = document.querySelectorAll('.nav-bar li')

  hamburger.onclick = () => {
    navbar.classList.toggle('nav-active')

    //Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`
      }
    })
    //hamburger animation
    hamburger.classList.toggle('toggle')
  }
}

window.onload = () => navSlide()

//Mouse circles//

function setup() {
  createCanvas(windowHeight, windowWidth)
}

function draw() {
  //make the ellipse follow your mouse

  // fill(33,156,86, 200)
  stroke(22, 102, 56)
  strokeWeight(1)
  fill(33, 156, 86, 50)
  ellipse(mouseX, mouseY, 40, 40)
  fill(110, 199, 149, 100)
  ellipse(mouseX, mouseY, 30, 30)
}
