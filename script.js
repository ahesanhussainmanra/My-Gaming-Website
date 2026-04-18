const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.background = "cyan";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(10px)";
glow.style.zIndex = "999";
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});