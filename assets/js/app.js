/*NAV*/
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");

burgerMenuOpen.addEventListener("click", () => {
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
});

/*Faq*/
function faqBtnOff_1() {
  document.getElementById("faqBtnOn_1").style.display = "block";
  document.getElementById("faqBtnOff_1").style.display = "none";
  document.getElementById("faqHide_1").style.display = "none";
}

function faqBtnOn_1() {
  document.getElementById("faqBtnOn_1").style.display = "none";
  document.getElementById("faqBtnOff_1").style.display = "block";
  document.getElementById("faqHide_1").style.display = "block";
}

function faqBtnOff_2() {
  document.getElementById("faqBtnOn_2").style.display = "block";
  document.getElementById("faqBtnOff_2").style.display = "none";
  document.getElementById("faqHide_2").style.display = "none";
}

function faqBtnOn_2() {
  document.getElementById("faqBtnOn_2").style.display = "none";
  document.getElementById("faqBtnOff_2").style.display = "block";
  document.getElementById("faqHide_2").style.display = "block";
}

function faqBtnOff_3() {
  document.getElementById("faqBtnOn_3").style.display = "block";
  document.getElementById("faqBtnOff_3").style.display = "none";
  document.getElementById("faqHide_3").style.display = "none";
}

function faqBtnOn_3() {
  document.getElementById("faqBtnOn_3").style.display = "none";
  document.getElementById("faqBtnOff_3").style.display = "block";
  document.getElementById("faqHide_3").style.display = "block";
}

function faqBtnOff_4() {
  document.getElementById("faqBtnOn_4").style.display = "block";
  document.getElementById("faqBtnOff_4").style.display = "none";
  document.getElementById("faqHide_4").style.display = "none";
}

function faqBtnOn_4() {
  document.getElementById("faqBtnOn_4").style.display = "none";
  document.getElementById("faqBtnOff_4").style.display = "block";
  document.getElementById("faqHide_4").style.display = "block";
}

function faqBtnOff_5() {
  document.getElementById("faqBtnOn_5").style.display = "block";
  document.getElementById("faqBtnOff_5").style.display = "none";
  document.getElementById("faqHide_5").style.display = "none";
}

function faqBtnOn_5() {
  document.getElementById("faqBtnOn_5").style.display = "none";
  document.getElementById("faqBtnOff_5").style.display = "block";
  document.getElementById("faqHide_5").style.display = "block";
}

function faqBtnOff_6() {
  document.getElementById("faqBtnOn_6").style.display = "block";
  document.getElementById("faqBtnOff_6").style.display = "none";
  document.getElementById("faqHide_6").style.display = "none";
}

function faqBtnOn_6() {
  document.getElementById("faqBtnOn_6").style.display = "none";
  document.getElementById("faqBtnOff_6").style.display = "block";
  document.getElementById("faqHide_6").style.display = "block";
}
