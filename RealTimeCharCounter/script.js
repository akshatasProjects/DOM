const textarea = document.getElementById("text-input");
const counter = document.getElementById("char-count");
const limit = 50;

textarea.addEventListener("input", () => {
  let text = textarea.value;

  // Prevent typing more than 50 characters
  if (text.length > limit) {
    text = text.slice(0, limit);
    textarea.value = text;
  }

  // Update counter
  counter.textContent = `Character Count: ${text.length}/${limit}`;

  // Turn red ONLY when count = 50
  if (text.length === limit) {
    counter.classList.add("limit-reached");
  } else {
    counter.classList.remove("limit-reached");
  }
});
