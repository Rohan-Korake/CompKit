//Hamburger popup
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

//copy button action
const copyButtons = document.querySelectorAll(".copy");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    const codeBlock = card.querySelector(".code-content");
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  });
});

//copy color action
const cpyButtons = document.querySelectorAll(".clr");

cpyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".clr");
    const codeBlock = card.querySelector(".clr-code");
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  });
});

//fadIn effect when switch pages
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

document.addEventListener("click", function () {
  const menuCard = document.getElementById("navLinks");
  const hamburgerIcon = document.getElementById("hamburger");

  if (menuCard && menuCard.classList.contains("show")) {
    if (
      !menuCard.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      document.getElementById("navLinks").classList.toggle("show");
    }
  }
});
