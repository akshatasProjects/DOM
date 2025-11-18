const squareEle = document.getElementById("square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = squareEle.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    //makes animation lasts 2 seconds
    duration: 5000,
    //loops indefinitely
    // iterations: Infinity,
    //moves back and forth
    direction: "alternate",
    easing: "ease-in-out",
  }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});
