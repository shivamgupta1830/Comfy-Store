import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");
console.log(toggleNav);
console.log(sidebarOverlay);

toggleNav.addEventListener("click", () => {
  console.log("hi");
  sidebarOverlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});
