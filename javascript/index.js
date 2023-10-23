const activeMenu = document.querySelector("#ativarMenu");
const menu = document.querySelector("#menu");

activeMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.add("flex");
});
