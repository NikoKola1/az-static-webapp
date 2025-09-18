// 5 kysymystä ja vastaukset Azuresta
const questions = [
  {
    q: "Mikä Azure-palvelu tarjoaa virtuaalisia tietokoneita?",
    a: "Azure Virtual Machines"
  },
  {
    q: "Mikä on Microsoft Azure? ",
    a: "Azure on Microsoftin tarjoama pilvipalvelualusta, joka mahdollistaa sovellusten ja palveluiden rakentamisen, testaamisen, käyttöönoton ja hallinnan globaalissa verkossa."
  },
  {
    q: "Mikä on Azuren palvelu relaatiotietokannoille?",
    a: "Azure SQL Database"
  },
  {
    q: "Minkä palvelun avulla voi julkaista web-sovelluksia nopeasti?",
    a: "Azure App Service"
  },
  {
    q: "Miten Azure huolehtii tietoturvasta?",
    a: "Azure noudattaa kansainvälisiä tietoturvastandardeja ja tarjoaa sisäänrakennettua kyberturvaa, kuten salauksen, identiteetinhallinnan ja uhkien tunnistuksen"
  }
];

function renderQuestions() {
  const container = document.getElementById("questions");
  container.innerHTML = ""; 

  questions.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-block";

    const qText = document.createElement("p");
    qText.textContent = `${index + 1}. ${item.q}`;

    const aText = document.createElement("p");
    aText.textContent = `Vastaus: ${item.a}`;
    aText.className = "answer hidden";

    qDiv.appendChild(qText);
    qDiv.appendChild(aText);
    container.appendChild(qDiv);
  });
}

function showAnswers() {
  const answers = document.querySelectorAll(".answer");
  answers.forEach(ans => ans.classList.remove("hidden"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();

  document.getElementById("showAnswersBtn")
    .addEventListener("click", showAnswers);
});
