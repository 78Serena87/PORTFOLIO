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
  let h = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
  let cnv = createCanvas(windowWidth, h)
  cnv.parent('parentDiv')
  // createCanvas(windowWidth, windowHeight)
}

function draw() {
  //make the ellipse follow your mouse

  if (mouseIsPressed) {
    fill(random(255), random(255), random(255), 100)
    ellipse(mouseX, mouseY, 30, 30)
  } else {
    clear()

    // fill(33,156,86, 200)
    stroke(22, 102, 56)
    strokeWeight(1)
    fill(33, 156, 86, 50)
    ellipse(mouseX, mouseY, 40, 40)
    fill(110, 199, 149, 100)
    ellipse(mouseX, mouseY, 30, 30)
  }
}
