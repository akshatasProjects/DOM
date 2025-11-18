const dialogEle = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialogEle.showModal();
  // dialogEle.show();
});

closeButton.addEventListener("click", () => {
  dialogEle.close();
});
