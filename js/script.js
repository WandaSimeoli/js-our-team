// Creare array di oggetti con le info fornite 

const team = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    }
];


const teamList = document.getElementById('team');

// Stampare in console.log di ogni membro tramite il ciclo For in 

  for (let i = 0; i < team.length; i++) {

    console.log(team[i]);
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].img);

    // Stampare in pagina le info

    teamList.innerHTML += `
    <li> ${team[i].name}
     <div>${team[i].role} </div>
     <img src="./img/">${team[i].img}
     </li>
    `;

  }







// Dati forniti 
// NOME            RUOLO                   IMMAGINE
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg