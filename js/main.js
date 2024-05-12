// Array of anime data
const anime = [
  { id: "aot", background: "aot.png", video: "aot.mp4" },
  { id: "tokyo", background: "tokyo.jpg", video: "tokyo.mp4" },
  { id: "darling", background: "darling.jpg", video: "darling.mp4" },
  { id: "demon", background: "demon.png", video: "demon.mp4" },
  { id: "highSchool", background: "highsch.png", video: "highsch.mp4" },
  { id: "hunter", background: "hunter.jpg", video: "hunter.mp4" },
  { id: "jojo", background: "jojo.png", video: "jojo.mp4" },
  { id: "jujutsu", background: "jujutsu.jpg", video: "jujutsu.mp4" },
  { id: "mha", background: "mha.jpg", video: "mha.mp4" },
  { id: "naruto", background: "naruto.jpg", video: "naruto.mp4" },
  { id: "onePunch", background: "onepunch.jpg", video: "onepunch.mp4" },
  { id: "pokemon", background: "pokemon.jpg", video: "pokemon.mp4" },
  { id: "spy", background: "spy.jpg", video: "spy.mp4" },
  { id: "bleach", background: "bleach.jpg", video: "bleach.mp4" },
  { id: "onePiece", background: "onepiece.jpg", video: "onepiece.mp4" },
  { id: "fairy", background: "fairy.png", video: "fairy.mp4" },
];

// Event listeners for each anime selection box
anime.forEach((anime) => {
  document.querySelector(`#${anime.id}`).addEventListener("click", () => {
    showAnime(anime);
  });
});

// Create video for each anime
const vid = document.createElement("video");
document.querySelector("#videoOst").append(vid);
vid.autoplay = true;
vid.controls = false;

// Function to show anime background, video attributes and selection tray
function showAnime(anime) {
  document.querySelector(
    "body"
  ).style.background = `url('img/${anime.background}') center bottom/cover no-repeat`;
  vid.src = `vid/${anime.video}`;
  vid.controls = true;
  document
    .querySelectorAll(".box")
    .forEach((item) => item.classList.remove("active"));
  document.querySelector(`#${anime.id}.box`).classList.add("active");
}
