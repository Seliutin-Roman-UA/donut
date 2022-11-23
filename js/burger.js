const btn__bm = document.querySelector(".burger-menu");
const menu = document.querySelector(".main-navigavion-list");
const logo = document.querySelector(".logo");

btn__bm.addEventListener("click", (event) => {
  menu.classList.toggle("open-menu");
  setTimeout(() => btn__bm.classList.toggle("z-index__3"), 500);
  setTimeout(() => logo.classList.toggle("z-index__3"), 500);
  setTimeout(() => btn__bm.classList.toggle("bm__transform"), 500);
  document.body.classList.toggle("scroll");
});
document
  .querySelector(".main-navigavion-list")
  .addEventListener("click", (e) => {
    console.log(e.target.nodeName);
    if (e.target.nodeName !== "A") return;
    menu.classList.remove("open-menu");
    document.body.classList.remove("scroll");
    btn__bm.classList.remove("z-index__3");
    logo.classList.remove("z-index__3");
    btn__bm.classList.remove("bm__transform");
  });
