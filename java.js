const ourField = document.querySelector("#ourField");
const ourForm = document.querySelector("#ourForm");
const ourList = document.querySelector("#ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourField.value);
});

function createItem(x) {
  let ourHTML = `<li>${x}<button onclick = deleteItem(this)> Delete </button></li>`;
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  ourField.value = "";
  ourField.focus();
}

function deleteItem(x) {
  x.parentElement.remove();
  ourField.focus();
}
ourField.focus();
