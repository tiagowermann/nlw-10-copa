function createGame(player1, hour, player2, grupo) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" title="${player1}" alt="${player1}" />
      <strong>
        ${hour} <br> 
        <strong> 
          ${grupo}
        </strong>
      </strong>
      <img src="./assets/icon-${player2}.svg" title="${player2}" alt="${player2}" />
    </li>
  `
}

let delay = -1
function createCard(date, day, games) {
  delay = delay + 1
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>
          ${date} 
          <span>
            ${day}
          </span>
        </h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Sunday",
    createGame("Qatar", "13:00", "Ecuador", "Group Stage A")
  ) +
  createCard(
    "21/11",
    "Monday",
    createGame("England", "10:00", "Iran", "Group Stage B") +
      createGame("Senegal", "13:00", "Netherlands", "Group Stage A") +
      createGame("United States", "16:00", "Wales", "Group Stage B")
  ) +
  createCard(
    "22/11",
    "Tuesday",
    createGame("Argentina", "07:00", "Saudi Arabian", "Group Stage C") +
      createGame("Denmark", "10:00", "Tunisia", "Group Stage D") +
      createGame("Mexico", "13:00", "Poland", "Group Stage C") +
      createGame("France", "16:00", "Australia", "Group Stage D")
  ) +
  createCard(
    "23/11",
    "Wednesday",
    createGame("Morroco", "07:00", "Croatia", "Group Stage F") +
      createGame("Germany", "10:00", "Japan", "Group Stage E") +
      createGame("Spain", "13:00", "Costa Rica", "Group Stage E") +
      createGame("Belgium", "16:00", "Canada", "Group Stage F")
  ) +
  createCard(
    "24/11",
    "Thuesday",
    createGame("Switzerland", "07:00", "Cameroon", "Group Stage G") +
      createGame("Uruguay", "10:00", "South Korea", "Group Stage H") +
      createGame("Portugal", "13:00", "Ghana", "Group Stage H") +
      createGame("Brazil", "16:00", "Serbia", "Group Stage G")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("South Korea", "10:00", "Ghana") +
      createGame("Brazil", "13:00", "Switzerland") +
      createGame("Portugal", "16:00", "Uruguay")
  ) +
  createCard("02/12", "Sexta", createGame("Brazil", "16:00", "Cameroon"))
