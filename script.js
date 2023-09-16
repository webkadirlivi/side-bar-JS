const menuToggle = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("click", function () {
  //   if (sideBar.classList.contains(".show-sidebar")) {
  //     sideBar.classList.remove(".show-sidebar");
  //   } else {
  //     sideBar.classList.add(".show-sidebar");
  //   }
  sideBar.classList.toggle("show-sidebar");
  console.log(sideBar.classList);
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
