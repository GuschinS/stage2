const nav = () => {
  const hamburger = document.querySelector(".hamburger");
  const navHamburgerBackground = document.querySelector(
    ".nav-hamburger-background"
  );
  const navHamburgerBlock = document.querySelector(".nav-hamburger");
  const closeButton = document.querySelector(".close-hamburger");

  const openNav = () => {
    // navHamburger.style.display = "block";
    navHamburgerBackground.classList.toggle("change");
    navHamburgerBlock.classList.toggle("change");
  };

  const closeNav = () => {
    // navHamburger.style.display = "";
    navHamburgerBackground.classList.toggle("change");
    navHamburgerBlock.classList.toggle("change");
  };

  hamburger.addEventListener("click", openNav);
  closeButton.addEventListener("click", closeNav);

  navHamburgerBackground.addEventListener("click", (event) => {
    const navHamburger = event.target.closest(".nav-hamburger");
    if (!navHamburger) {
      closeNav();
    }
  });
};

nav();
