window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
});