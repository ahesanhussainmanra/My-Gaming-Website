/* UltraGamingHub shared interactions — one copy only */
(() => {
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("is-hidden");
      window.setTimeout(() => loader.remove(), 450);
    }
  };

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
    // Prevent a stuck overlay if a slow external resource delays the load event.
    window.setTimeout(hideLoader, 2500);
  }

  const cards = document.querySelectorAll(".card");
  if ("IntersectionObserver" in window && cards.length) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    cards.forEach(card => {
      card.classList.add("reveal-on-scroll");
      observer.observe(card);
    });
  }
})();

function scrollToExplore() {
  const exploreSection = document.getElementById("explore");
  if (exploreSection) {
    exploreSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
