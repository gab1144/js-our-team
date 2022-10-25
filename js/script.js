const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
    aggettivi: [
      "Creativo", 
      "Intraprendente"
    ]
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
    aggettivi: [
      "Responsabile", 
      "Risoluta"
    ]
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
    aggettivi: [
      "Pratico", 
      "Organizzato",
      "Efficiente"
    ]
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
    aggettivi: [
      "Vivace", 
      "Allegra",
      "Estroversa"
    ]
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
    aggettivi: [
      "Curioso", 
      "Geniale"
    ]
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
    aggettivi: [
      "Ottimista", 
      "Estroversa"
    ]
  }
];

for(let persona of team){
  //milestone 1
  console.log(persona.nome);
  console.log(persona.ruolo);
  console.log(persona.foto);
  console.log("-------------------");
  
  let listaAggettivi = "";
  for(let aggettivo of persona.aggettivi) {
    listaAggettivi += `<li>${aggettivo}</li>`;
  }
  
  //milestone 2
  document.querySelector(".area-card").innerHTML += `
  
    <div class="card">
      <img src="img/${persona.foto}" alt="Foto profilo ${persona.nome}">
      <h2>${persona.nome}</h2>
      <span>${persona.ruolo}</span>
      <ul>
        ${listaAggettivi}
      </ul>
    </div>`;
}