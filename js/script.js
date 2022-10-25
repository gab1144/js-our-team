const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  }
];

for(let persona of team){
  //milestone 1
  console.log(persona.nome);
  console.log(persona.ruolo);
  console.log(persona.foto);
  console.log("-------------------");
  
  //milestone 2
  document.querySelector(".area-card").innerHTML += `
  
    <div class="card">
      <img src="img/${persona.foto}" alt="Foto profilo ${persona.nome}">
      <h2>${persona.nome}</h2>
      <span>${persona.ruolo}</span>
    </div>`;
}