// Jquery Imgage Viewer

$(".images img").click(function () {
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function () {
  $('#image-viewer').hide();
});

// Navbar Background

let navbar = document.querySelector(`.myNavbar`)

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navbar.classList.add("scrolled")
  } else if (window.scrollY < 56) {
    navbar.classList.remove("scrolled")
  }
})

// music player

const overlay = document.querySelectorAll(".overlay")
var audio1 = new Audio(`./assets/music/GOT.mp3`);
var audio2 = new Audio(`./assets/music/GOW.mp3`);
var audio3 = new Audio(`./assets/music/AOE2.mp3`);
var audio4 = new Audio(`./assets/music/AOT.mp3`);

for (let i = 0; i < overlay.length; i++) {
  if (i === 0) {
    overlay[i].addEventListener("click", () => {
      if (audio1.paused) {
        audio1.play();
      }
      else {
        audio1.pause()
      }
    })
  } else if (i === 1) {
    overlay[i].addEventListener("click", () => {
      if (audio2.paused) {
        audio2.play();
      }
      else {
        audio2.pause()
      }
    })
  } else if (i === 2) {
    overlay[i].addEventListener("click", () => {
      if (audio3.paused) {
        audio3.play();
      }
      else {
        audio3.pause()
      }
    })
  } else if (i === 3) {
    overlay[i].addEventListener("click", () => {
      if (audio4.paused) {
        audio4.play();
      }
      else {
        audio4.pause()
      }
    })
  }
}

// Icon Animation

const icons = document.querySelectorAll(".icons")
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("mouseover", () => {
    icons[i].classList.add("yellow", "fa-beat-fade");
  });
  icons[i].addEventListener("mouseout", () => {
    icons[i].classList.remove("yellow", "fa-beat-fade");
  });
}
