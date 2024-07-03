// Seleciona o botão do menu pelo ID
const menuBtn = document.getElementById("menu-btn");
// Seleciona os links de navegação pelo ID
const navLinks = document.getElementById("nav-links");
// Seleciona o ícone dentro do botão do menu
const menuBtnIcon = menuBtn.querySelector("i");

// Adiciona um listener de evento de clique ao botão do menu
menuBtn.addEventListener("click", (e) => {
  // Alterna a classe 'open' no elemento navLinks
  navLinks.classList.toggle("open");

  // Verifica se a classe 'open' foi adicionada
  const isOpen = navLinks.classList.contains("open");

  // Define a classe do ícone do botão com base no estado de 'open'
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"
  );
});

// Faz com que o menu se suspenda ao clicar em alguma opção
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".header-img img", {
  ...scrollRevealOption,
  origin: "right"
})

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500
})

ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1000
})

ScrollReveal().reveal(".header-content form", {
  ...scrollRevealOption,
  delay: 1500
})

ScrollReveal().reveal(".header-content .bar", {
  ...scrollRevealOption,
  delay: 2000
})
