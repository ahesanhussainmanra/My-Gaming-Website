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
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
function scrollToExplore() {
  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
}