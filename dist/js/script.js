//Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//text run
var marqueeContainer = document.getElementById("marqueeContainer");
var marqueeContent = document.getElementById("marqueeContent");

//lebar animasi sesuai dengan lebar kontainer
var marqueeWidth = marqueeContainer.offsetWidth;
marqueeContent.style.width = marqueeWidth + "px";

//video profil
const openModalButton = document.getElementById("gambar-profil");
const closeModalButton = document.getElementById("closeModal");
const videoModal = document.getElementById("videoModal");
const putarVideo = document.getElementById("putar-video");
let delayTimeout;

openModalButton.addEventListener("mouseenter", () => {
  // Menetapkan waktu tunda sebelum video dimulai (1.5 detik)
  delayTimeout = setTimeout(() => {
    videoModal.classList.add("flex");
    videoModal.classList.remove("hidden");
    putarVideo.play().catch((error) => {
      console.error("Gagal memulai pemutaran video:", error);
    });
  }, 1500);
});

openModalButton.addEventListener("mouseleave", () => {
  // Menghapus waktu tunda jika kursor meninggalkan area
  clearTimeout(delayTimeout);
});

closeModalButton.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
  putarVideo.pause();
});

//play video portofolio
// document.addEventListener("DOMContentLoaded", function () {
//   var video = document.getElementById("movieVideo");

//   video.addEventListener("mouseover", function () {
//     video.play();
//   });

//   video.addEventListener("mouseout", function () {
//     video.pause();
//     video.currentTime = 0;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var videoElements = document.querySelectorAll(".video-hover");

  videoElements.forEach(function (video) {
    video.addEventListener("mouseenter", function () {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });

    video.addEventListener("mouseleave", function () {
      video.pause();
      video.currentTime = 0;
    });
  });
});
