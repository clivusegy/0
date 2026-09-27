const toggleBtn = document.getElementById("stickersToggle");
const choices = document.getElementById("stickerChoices");

toggleBtn.addEventListener("click", () => {
  const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";

  toggleBtn.setAttribute("aria-expanded", String(!isOpen));
  choices.hidden = isOpen;

  if (!isOpen) {
    // just opened — scroll it into view smoothly
    choices.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
const customizeToggle = document.getElementById("customizeToggle");
const customizeInfo = document.getElementById("customizeInfo");

customizeToggle.addEventListener("click", () => {
  const isOpen = customizeToggle.getAttribute("aria-expanded") === "true";

  customizeToggle.setAttribute("aria-expanded", String(!isOpen));
  customizeInfo.hidden = isOpen;

  if (!isOpen) {
    customizeInfo.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
