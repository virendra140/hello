// ---------------- LOADER ----------------
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => { loader.style.display = "none"; }, 300);
    }, 500);
  }
});

// ---------------- PARTICLES ----------------
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
    color: { value: "#ffffff" },
  },
});

// ---------------- 3D CARD CURSOR TILT ----------------
const card = document.querySelector(".card");
if(card){
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth/2 - e.clientX)/25;
    const y = (window.innerHeight/2 - e.clientY)/25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{ card.style.transform = "rotateY(0deg) rotateX(0deg)"; });
}

// ---------------- POPUPS ----------------
document.addEventListener("DOMContentLoaded", ()=>{

  const popups = [
    { btnId: "laptopBtn", popupId: "specsPopup", closeId: "closeSpecs" },
    { btnId: "gpuBtn", popupId: "gpuPopup", closeId: "closeGpu" }
  ];

  popups.forEach(item => {
    const btn = document.getElementById(item.btnId);
    const popup = document.getElementById(item.popupId);
    const closeBtn = document.getElementById(item.closeId);

    if(btn && popup){
      btn.addEventListener("click", () => { popup.style.display="flex"; });
    }
    if(closeBtn && popup){
      closeBtn.addEventListener("click", () => { popup.style.display="none"; });
    }
    if(popup){
      popup.addEventListener("click", e => { if(e.target===popup) popup.style.display="none"; });
    }
  });

  const externalLinks = [
    { btnId: "headsetBtn", url: "https://www.amazon.in/Earphone-Special-Magnetic-Monitors-Detachable/dp/B0CRB1CP6T" },
    { btnId: "mouseBtn", url: "https://www.amazon.in/Razer-Deathadder-Essential-Ergonomic-Durability/dp/B092R5MCB3" }
  ];

  externalLinks.forEach(item => {
    const btn = document.getElementById(item.btnId);
    if(btn){
      btn.addEventListener("click", () => { window.open(item.url,"_blank"); });
    }
  });

});
// ---------------- DYNAMIC TEXT ----------------
const dynamicTexts = [
  "Gamer • Creator",        // original, keep
  "Tech Enthusiast • Explorer",    // streamer + adventure vibe
  "Pixel Warrior • Gamer",  // gaming + creative touch
  "Digital Artist • Gamer", // fixed, don't change
  "Content Maker • Trendsetter" // creative + social vibe
];

let currentIndex = 0;
const textElement = document.getElementById("dynamicText");

function changeText() {
  // Fade out
  textElement.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % dynamicTexts.length;
    textElement.textContent = dynamicTexts[currentIndex];
    // Fade in
    textElement.style.opacity = 1;
  }, 500); // fade duration 1s
}

// Run every 3 seconds
setInterval(changeText, 3000);

// Initial style for smooth fade
textElement.style.transition = "opacity 1s ease";
textElement.style.opacity = 1;