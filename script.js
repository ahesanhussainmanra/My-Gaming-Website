const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 50; // pehle se jaldi show hoga

    if (top < trigger) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});