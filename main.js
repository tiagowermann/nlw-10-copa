function createGame(player1, hour, player2) {
  return `
    <li>
      <!--Itens da lista-->
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
    </li>
  `
}

let delay = -1;
function createCard(date, day, games) {
  delay = delay + 1;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          <!--Lista não ordenada-->
          ${games}
        </ul>
      </div>
    `
}

document.querySelector("#cards").innerHTML = 

    createCard("24/11", "Quinta", 
      createGame("brazil", "16:00", "serbia")
    ) +

    createCard("28/11", "Segunda",
      createGame("south korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguay")
    ) +
    createCard("02/12", "Sexta", 
      createGame("brazil", "16:00", "cameroon"))

