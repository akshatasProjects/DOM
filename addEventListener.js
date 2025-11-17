const btnEle = document.getElementById("btn");
const inputEle = document.getElementById("input");

btnEle.addEventListener("click", () => alert("You clicked the button"));

inputEle.addEventListener("input", () => {
  console.log(inputEle.value);
});
