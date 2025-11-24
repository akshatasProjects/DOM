const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const fullSizeSrc = item.src.replace("-thumbnail", ""); // Remove -thumbnail
    lightboxImage.src = fullSizeSrc; // Set full-size image
    lightbox.style.display = "flex"; // Make visible
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    // Prevent closing if clicking on the image
    lightbox.style.display = "none";
  }
});
