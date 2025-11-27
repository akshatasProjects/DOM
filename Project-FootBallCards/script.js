// Creating footballTeam object
const footballTeam = {
  team: "Barcelona FC",
  year: 2024,
  headCoach: "Xavi Hernandez",
  players: [
    { name: "Robert Lewandowski", position: "forward", isCaptain: false },
    { name: "Marc-André ter Stegen", position: "goalkeeper", isCaptain: true },
    { name: "Pedri", position: "midfielder", isCaptain: false },
    { name: "Jules Koundé", position: "defender", isCaptain: false },
  ],
};

// Display team information
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// Function to display players
function displayPlayers(playersArray) {
  const cardsContainer = document.getElementById("player-cards");
  cardsContainer.innerHTML = ""; // Clear previous content

  playersArray.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player-card");

    const playerName = document.createElement("h2");
    playerName.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const playerPos = document.createElement("p");
    playerPos.textContent = `Position: ${player.position}`;

    playerDiv.appendChild(playerName);
    playerDiv.appendChild(playerPos);
    cardsContainer.appendChild(playerDiv);
  });
}

// Initial display of all players
displayPlayers(footballTeam.players);

// Filtering by dropdown
document.getElementById("players").addEventListener("change", function () {
  const selectedPosition = this.value; // Gets the selected value from dropdown

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players); // Shows ALL players
  } else {
    // Shows ONLY players with the selected position
    const filtered = footballTeam.players.filter(
      (p) => p.position === selectedPosition
    );
    displayPlayers(filtered);
  }
});
