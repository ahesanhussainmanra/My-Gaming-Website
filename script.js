const elements = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});
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
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};