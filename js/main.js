// Create click event listeners for anime selection box

document.querySelector("#aot").addEventListener("click", animeAot);
document.querySelector("#tokyo").addEventListener("click", animeTokyo);
document.querySelector("#darling").addEventListener("click", animeDarling);
document.querySelector("#demon").addEventListener("click", animeDemon);
document.querySelector("#highSchool").addEventListener("click", animeHigh);
document.querySelector("#hunter").addEventListener("click", animeHunter);
document.querySelector("#jojo").addEventListener("click", animeJojo);
document.querySelector("#jujutsu").addEventListener("click", animeJujutsu);
document.querySelector("#mha").addEventListener("click", animeMha);
document.querySelector("#naruto").addEventListener("click", animeNaruto);
document.querySelector("#onePunch").addEventListener("click", animeOnePunch);
document.querySelector("#pokemon").addEventListener("click", animePokemon);
document.querySelector("#spy").addEventListener("click", animeSpy);
document.querySelector("#bleach").addEventListener("click", animeBleach);
document.querySelector("#onePiece").addEventListener("click", animeOnePiece);
document.querySelector("#fairy").addEventListener("click", animeFairy);

// Create video element for each anime
const vid = document.createElement("video");
// attach video to desired area
document.querySelector("#videoOst").append(vid);
// Set video size and controls
// vid.width = 580;
vid.autoplay = true;
vid.controls = true;

// Instructions to run after anime box is clicked
function animeAot() {
   // Change the background image of the selected anime
   document.querySelector("body").style.background =
      "url('img/aot.png') center bottom/cover no-repeat";
   // Link the anime video from stored location
   vid.src = "vid/aot.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#aot.box").classList.add("active");
}

function animeTokyo() {
   document.querySelector("body").style.background =
      "url('img/tokyo.jpg') center center/cover no-repeat";
   vid.src = "vid/tokyo.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#tokyo.box").classList.add("active");
}

function animeDarling() {
   document.querySelector("body").style.background =
      "url('img/darling.jpg') center bottom/cover no-repeat";
   vid.src = "vid/darling.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#darling.box").classList.add("active");
}

function animeDemon() {
   document.querySelector("body").style.background =
      "url('img/demon.png') top center/cover no-repeat";
   vid.src = "vid/demon.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#demon.box").classList.add("active");
}

function animeHigh() {
   document.querySelector("body").style.background =
      "url('img/highsch.png') center bottom/cover no-repeat";
   vid.src = "vid/highsch.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#highSchool.box").classList.add("active");
}

function animeHunter() {
   document.querySelector("body").style.background =
      "url('img/hunter.jpg') center top/cover no-repeat";
   vid.src = "vid/hunter.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#hunter.box").classList.add("active");
}

function animeJojo() {
   document.querySelector("body").style.background =
      "url('img/jojo.png') center bottom/cover no-repeat";
   vid.src = "vid/jojo.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#jojo.box").classList.add("active");
}

function animeJujutsu() {
   document.querySelector("body").style.background =
      "url('img/jujutsu.jpg') center center/cover no-repeat";
   vid.src = "vid/jujutsu.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#jujutsu.box").classList.add("active");
}

function animeMha() {
   document.querySelector("body").style.background =
      "url('img/mha.jpg') center bottom/cover no-repeat";
   vid.src = "vid/mha.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#mha.box").classList.add("active");
}

function animeNaruto() {
   document.querySelector("body").style.background =
      "url('img/naruto.jpg') center top/cover no-repeat";
   vid.src = "vid/naruto.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#naruto.box").classList.add("active");
}

function animeOnePunch() {
   document.querySelector("body").style.background =
      "url('img/onepunch.jpg') center center/cover no-repeat";
   vid.src = "vid/onepunch.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#onePunch.box").classList.add("active");
}

function animePokemon() {
   document.querySelector("body").style.background =
      "url('img/pokemon.jpg') center center/cover no-repeat";
   vid.src = "vid/pokemon.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#pokemon.box").classList.add("active");
}

function animeSpy() {
   document.querySelector("body").style.background =
      "url('img/spy.jpg') center center/cover no-repeat";
   vid.src = "vid/spy.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#spy.box").classList.add("active");
}

function animeBleach() {
   document.querySelector("body").style.background =
      "url('img/bleach.jpg') center center/cover no-repeat";
   vid.src = "vid/bleach.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#bleach.box").classList.add("active");
}

function animeOnePiece() {
   document.querySelector("body").style.background =
      "url('img/onepiece.jpg') center center/cover no-repeat";
   vid.src = "vid/onepiece.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#onePiece.box").classList.add("active");
}

function animeFairy() {
   document.querySelector("body").style.background =
      "url('img/fairy.png') center bottom/cover no-repeat";
   vid.src = "vid/fairy.mp4";
   document.querySelectorAll(".box").forEach(item => item.classList.remove("active"));
   document.querySelector("#fairy.box").classList.add("active");
}
