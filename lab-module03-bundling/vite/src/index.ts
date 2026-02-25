// import styles
import "./styles/globals.css";
import headerStyles from "./styles/header.module.css";
import cardStyles from "./styles/card.module.css"; 
import gif from "./content/ralph.gif";

const header = document.createElement("header");
header.className = headerStyles.header;
document.body.appendChild(header);

const h1 = document.createElement("h1");
h1.className = headerStyles.title;
h1.textContent = "Hello developer";

header.appendChild(h1);

const img = document.createElement("img");
img.src = gif;
header.appendChild(img);

const card = document.createElement("div");
card.className = cardStyles.card;
document.body.appendChild(card);

const cardHeader = document.createElement("div");
cardHeader.className = cardStyles.header;
card.appendChild(cardHeader);

const cardHeaderTitle = document.createElement("h2");
cardHeaderTitle.textContent = "APP INFO";
cardHeader.appendChild(cardHeaderTitle);

const cardContent = document.createElement("div");
cardContent.className = cardStyles.content;
card.appendChild(cardContent);

type Feature = {
    label: string,
    value: string
}

const environment = import.meta.env.VITE_APP_ENV;
const isDev = environment === "DESARROLLO" ? "Desarrollo" : "Producción";

const features: Feature[] = [
  { label: "Entorno", value: isDev },
  { label: "Tecnologías", value: "CSS Modules + TypeScript" },
  { label: "Bundling", value: "Vite" }
];

features.forEach(({label, value}) => {
    const cardContentInfo = document.createElement("div");
    cardContentInfo.className = cardStyles.contentInfo;
    cardContent.appendChild(cardContentInfo);

    const p = document.createElement("p");
    p.textContent = `${label}: `;
    cardContentInfo.appendChild(p);

    const span = document.createElement("span");
    span.textContent = value;
    p.appendChild(span);
})

const cardContentInstr = document.createElement("div");
cardContentInstr.className = cardStyles.contentInstr;
cardContent.appendChild(cardContentInstr);

const pInstr = document.createElement("p");
pInstr.textContent = "Para auditar el tamaño del bundle:";
cardContentInstr.appendChild(pInstr);

const codeInstr = document.createElement("code");
codeInstr.textContent = "npm run build";
cardContentInstr.appendChild(codeInstr);

const pInstr02 = document.createElement("p");
pInstr02.textContent = "Este comando abrirá una pestaña interactiva con el peso detallado de cada librería.";
cardContentInstr.appendChild(pInstr02);


console.log(`Entorno: `, import.meta.env.VITE_APP_ENV);