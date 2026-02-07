const input = document.getElementById("urlInput");
const openBtn = document.getElementById("openBtn");
const reader = document.getElementById("reader");
const frame = document.getElementById("readerFrame");

const controls = document.getElementById("controls");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

let zoom = 1;

openBtn.addEventListener("click", () => {
  let url = input.value.trim();

  if (!url) {
    alert("Por favor, pega un enlace primero");
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  frame.src = url;
  reader.style.display = "block";
  controls.style.display = "flex";
  zoom = 1;
});

incBtn.addEventListener("click", () => {
  zoom += 0.1;
  frame.style.transform = `scale(${zoom})`;
  frame.style.transformOrigin = "0 0";
});

decBtn.addEventListener("click", () => {
  zoom = Math.max(0.6, zoom - 0.1);
  frame.style.transform = `scale(${zoom})`;
  frame.style.transformOrigin = "0 0";
});
const darkBtn = document.getElementById("toggleDark");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

