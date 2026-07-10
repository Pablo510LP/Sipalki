// Static Glossary Data
const GLOSSARY_DATA = [
  { korean: "CHARIOT-HEIT", pron: "Chariot Jeit", spanish: "Orden de firmes", category: "generales" },
  { korean: "KIRIP-SE", pron: "Kirip se", spanish: "Posición de firmes", category: "generales" },
  { korean: "ION-BI-RYU", pron: "Ion bi riu", spanish: "Escuela o estilo de los secretos de la golondrina", category: "generales" },
  { korean: "CHONG-CHE-NIM", pron: "Chong che nim", spanish: "Maestro, Presidente de la escuela", category: "generales" },
  { korean: "CHO-KIO", pron: "Cho kio", spanish: "Ayudante de instructor", category: "generales" },
  { korean: "SABOM-NIM", pron: "Sabom nim", spanish: "Profesor / Instructor principal", category: "generales" },
  { korean: "CHE-YA", pron: "Che ia", spanish: "Alumno / Discípulo", category: "generales" },
  { korean: "DO-YANG", pron: "Do iang", spanish: "Lugar de práctica / Gimnasio", category: "generales" },
  { korean: "DO-BOK", pron: "Do bok", spanish: "Uniforme de práctica (literalmente traje del camino)", category: "generales" },
  { korean: "SU-RION", pron: "Su rion", spanish: "Práctica / Adiestramiento", category: "generales" },
  { korean: "CHA-IU-DERION", pron: "Cha iu derion", spanish: "Combate libre sin armas", category: "generales" },
  { korean: "BAN-CHA-IU-DERION", pron: "Ban cha iu derion", spanish: "Medio combate regulado", category: "generales" },
  { korean: "IL-SU-DERION", pron: "Il su derion", spanish: "Lucha de un paso (ejercicio de defensa)", category: "generales" },
  { korean: "I-SU-DERION", pron: "I su derion", spanish: "Lucha de dos pasos", category: "generales" },
  { korean: "SAM-SU-DERION", pron: "Sam su derion", spanish: "Lucha de tres pasos", category: "generales" },
  { korean: "BAL-BA-KUO", pron: "Bal ba kuo", spanish: "Cambio de guardia con las piernas", category: "generales" },
  { korean: "FAL-BA-KUO", pron: "Fal ba kuo", spanish: "Cambio de guardia con los brazos", category: "generales" },
  { korean: "DI-DORA", pron: "Di dora", spanish: "Giro hacia atrás / Dar la vuelta", category: "generales" },
  { korean: "SANG-BU", pron: "Sang bu", spanish: "Zona alta del cuerpo (cabeza, cuello)", category: "generales" },
  { korean: "CHUNG-BU", pron: "Chung bu", spanish: "Zona media del cuerpo (pecho, abdomen)", category: "generales" },
  { korean: "JA-BU", pron: "Ja bu", spanish: "Zona baja del cuerpo (piernas, pelvis)", category: "generales" },
  { korean: "BANG-O", pron: "Bang o", spanish: "Acción de defensa / Bloqueo", category: "generales" },
  { korean: "KONG-KIOK", pron: "Kong kiok", spanish: "Acción de ataque", category: "generales" },
  { korean: "HIONG", pron: "Jiong", spanish: "Forma convencional o danza de combate", category: "hiong" },
  { korean: "ION-KI-IL-SIK", pron: "Ion ki il sik", spanish: "Primera parte del Hiong de base", category: "hiong" },
  { korean: "ION-KI-I-SIK", pron: "Ion ki i sik", spanish: "Segunda parte del Hiong de base", category: "hiong" },
  { korean: "ION-KI-SAM-SIK", pron: "Ion ki sam sik", spanish: "Tercera parte del Hiong de base", category: "hiong" },
  { korean: "ION-CHO-IL-HYUNG", pron: "Ion cho il jiung", spanish: "Hiong Nº 1", category: "hiong" },
  { korean: "ION-CHO-I-HYUNG", pron: "Ion cho i jiung", spanish: "Hiong Nº 2", category: "hiong" },
  { korean: "ION-CHO-SAM-HYUNG", pron: "Ion cho sam jiung", spanish: "Hiong Nº 3", category: "hiong" },
  { korean: "ION CHOL SO CHU GUIONG", pron: "Ion chol so chu guiong", spanish: "Hiong Nº 7 (Forma avanzada)", category: "hiong" },
  { korean: "CHONG-KWON", pron: "Chong kuon", spanish: "Ataque directo con el puño cerrado", category: "tecnicas" },
  { korean: "SU-DO", pron: "Su do", spanish: "Canto externo de la mano (mano abierta)", category: "tecnicas" },
  { korean: "KUAN-SU", pron: "Kuan su", spanish: "Punta de los dedos (mano abierta)", category: "tecnicas" },
  { korean: "FAL-KUM-CHI", pron: "Fal kum chi", spanish: "Codo / Golpe de codo", category: "tecnicas" },
  { korean: "IOP-KON-TO", pron: "Iop kon to", spanish: "Contra canto del puño", category: "tecnicas" },
  { korean: "KON-TO", pron: "Kon to", spanish: "Canto de la mano cerrada (lado del meñique)", category: "tecnicas" },
  { korean: "YANG", pron: "Iang", spanish: "Palma de la mano / Golpe de palma", category: "tecnicas" },
  { korean: "IU-KUOM", pron: "Iu kuom", spanish: "Nudillos / Golpe con nudillos", category: "tecnicas" },
  { korean: "DUNG-YU-MOK", pron: "Dung iu mok", spanish: "Dorso de la muñeca", category: "tecnicas" },
  { korean: "MOK", pron: "Mok", spanish: "Golpe al cuello", category: "tecnicas" },
  { korean: "WAN", pron: "Uan", spanish: "Golpes o defensas con el antebrazo", category: "tecnicas" },
  { korean: "DU-GONG", pron: "Du gong", spanish: "Cabezazo / Ataque con la cabeza", category: "tecnicas" },
  { korean: "NE-SU", pron: "Ne su", spanish: "Movimiento hacia el interior", category: "tecnicas" },
  { korean: "WE-SU", pron: "Ue su", spanish: "Movimiento hacia el exterior", category: "tecnicas" },
  { korean: "BAL-CHAGUI", pron: "Bal chagui", spanish: "Posición de combate y patadas", category: "patadas" },
  { korean: "AP-CHAGUI", pron: "Ap chagui", spanish: "Patada frontal directa con el talón o metatarso", category: "patadas" },
  { korean: "IOB-CHAGUI", pron: "Iob chagui", spanish: "Patada lateral directa con el canto del pie", category: "patadas" },
  { korean: "DOLIO-CHAGUI", pron: "Dolio chagui", spanish: "Patada circular alta o media", category: "patadas" },
  { korean: "KOFO-CHAGUI", pron: "Kofo chagui", spanish: "Patada doble (dos golpes sucesivos)", category: "patadas" },
  { korean: "AP-DOLIO-CHAGUI", pron: "Ap dolio chagui", spanish: "Patada circular frontal directa", category: "patadas" },
  { korean: "AP-COCO-CHAGUI", pron: "Ap coco chagui", spanish: "Patada frontal flexionando la rodilla tipo gancho", category: "patadas" },
  { korean: "DI-DOLIO-CHAGUI", pron: "Di dolio chagui", spanish: "Patada giratoria por la espalda de trayectoria circular", category: "patadas" },
  { korean: "DI-DOLIO-IOB-CHAGUI", pron: "Di dolio iob chagui", spanish: "Patada giratoria por la espalda de trayectoria lateral", category: "patadas" },
  { korean: "TI-O-IOB-CHAGUI", pron: "Ti o iob chagui", spanish: "Patada lateral saltando en el aire", category: "patadas" },
  { korean: "TI-O-DOLIO-CHAGUI", pron: "Ti o dolio chagui", spanish: "Patada circular saltando en el aire", category: "patadas" },
  { korean: "TI-O-AP-CHAGUI", pron: "Ti o ap chagui", spanish: "Patada frontal saltando en el aire", category: "patadas" },
  { korean: "MURU", pron: "Muru", spanish: "Rodillazo / Golpe de rodilla", category: "patadas" },
  { korean: "IL", pron: "Il", spanish: "Uno", category: "numeros" },
  { korean: "I", pron: "I", spanish: "Dos", category: "numeros" },
  { korean: "SAM", pron: "Sam", spanish: "Tres", category: "numeros" },
  { korean: "SA", pron: "Sa", spanish: "Cuatro", category: "numeros" },
  { korean: "O", pron: "O", spanish: "Cinco", category: "numeros" },
  { korean: "RIUK", pron: "Riuk", spanish: "Seis", category: "numeros" },
  { korean: "CHIL", pron: "Chil", spanish: "Siete", category: "numeros" },
  { korean: "FAL", pron: "Fal", spanish: "Ocho", category: "numeros" },
  { korean: "KU", pron: "Ku", spanish: "Nueve", category: "numeros" },
  { korean: "SIP", pron: "Sip", spanish: "Diez", category: "numeros" }
];

const HISTORY_TIMELINE = [
  {
    tab: "Orígenes",
    title: "Período Primitivo y Clanes",
    date: "2300 a.C. - 1000 a.C.",
    text: "El Sipalki no es un arte moderno; sus raíces se remontan a la región Chino-Mongol en Asia Central. Los creadores fueron integrantes de la tribu nómada Ural-Altai. Durante la Edad del Bronce (período Paedal), se fundó la nación coreana (Ko-Choson) por el rey-guerrero Tangun. Los hombres comenzaron a imitar movimientos defensivos y ofensivos de animales sagrados como el Tigre, el Oso y la Golondrina para la supervivencia."
  },
  {
    tab: "Tribus Maek y Sado",
    title: "Período de las Tribus Maek y Sado Mu Sul",
    date: "1000 a.C. - Siglo I a.C.",
    text: "Las tribus Maek se fusionaron con los Yo, estableciendo ligas guerreras sólidas. Fruto de constantes conflictos bélicos en Asia, se desarrolló el 'Sado Mu Sul' (artes marciales tribales), considerado el antecesor del Sipalki Antiguo (Ko-Sibfalgui). Los choques armados entre Chinos y Coreanos moldearon técnicas rápidas de contragolpe para neutralizar armaduras y múltiples enemigos."
  },
  {
    tab: "Tres Reinos",
    title: "La Era de los Tres Reinos e Influencia del Clan YO",
    date: "Siglo I a.C. - 935 d.C.",
    text: "En el Reino de Puyo, el cuerpo de élite militar 'Pal Ki' custodiaba las fronteras. Al ser absorbido Puyo por Koguryo, los oficiales mantuvieron el adiestramiento como 'Caballeros del Viento y la Luna' (Pungyudo). Más tarde, en el Reino de Silla, el Rey Chin-Hung organizó la famosa Orden de Caballeros Floridos (Hwarang), incorporando banderas de colores en sus casacas (origen de las graduaciones) para distinguir las unidades tácticas."
  },
  {
    tab: "Koryo y Dinastía Yi",
    title: "Periodo Koryo y Nacimiento del Sipalki",
    date: "918 d.C. - 1910 d.C.",
    text: "Durante el Reino de Koryo se sintetizaron las '55 Técnicas' de combate. En el año 1552 d.C., bajo el reinado de Myonjong en la Dinastía Yi, se redujeron las técnicas militares complejas a '18 Técnicas' fundamentales (de donde proviene el nombre SIB-FAL-KI: 10 + 8 + Técnica) para adiestrar soldados de forma rápida ante invasiones. En 1790 se publica el Muyedobotongji, manual ilustrado que compiló este sistema militar de forma definitiva."
  },
  {
    tab: "Resistencia",
    title: "Ocupación Japonesa y el Silencio del Clan Yoo",
    date: "1910 d.C. - 1945 d.C.",
    text: "Con la invasión japonesa y la prohibición de la cultura coreana, los maestros de Sipalki fueron perseguidos. La transmisión continuó de forma clandestina en el seno de dinastías familiares guerreras. El Clan Yoo (liderado posteriormente por el Gran Maestro Yoo Soo Nam) protegió y preservó los secretos técnicos y filosóficos del estilo Ion Bi Ryu bajo juramento de silencio."
  },
  {
    tab: "Llegada a Argentina",
    title: "El Despertar en la República Argentina",
    date: "1970 - Presente",
    text: "En mayo de 1970, el Gran Maestro Yoo Soo Nam (X Dan y máximo exponente mundial) emigró a la Argentina, introduciendo el estilo Ion Bi Ryu de Sipalki-Do en el continente americano. Desde entonces, nuestra disciplina se ha difundido como una escuela no deportiva, enfocada netamente en la defensa personal real, el desarrollo psicofísico y el respeto moral, extendiendo su práctica a la provincia de La Pampa."
  }
];

// App State
let siteConfig = null;
let activeTimelineIndex = 0;
let currentGlossaryCat = "todos";
let currentGlossaryQuery = "";

const DEFAULT_FALLBACK_CONFIG = {
  "siteName": "Sipalki-Do La Pampa",
  "association": "Agrupación YONG",
  "adminPassword": "yongadmin123",
  "hero": {
    "title": "SIPALKI-DO LA PAMPA",
    "subtitle": "Agrupación YONG",
    "description": "El camino de las 18 técnicas tradicionales. Defensa personal efectiva, disciplina marcial y acondicionamiento físico en la provincia de La Pampa."
  },
  "about": {
    "title": "Nuestra Agrupación",
    "quote": "Aquel que se entrena nunca actúa con ligereza ni en la palabra ni en sus hechos, sino que medita seriamente antes de realizar cualquier acto.",
    "quoteAuthor": "Filosofía General del Doyang",
    "description": "La Agrupación YONG es una organización dedicada a la práctica y difusión del Sipalki-Do en la provincia de La Pampa. Bajo los lineamientos de la Organización Internacional de Sipalki-Do, nuestra escuela enseña el estilo Ion Bi Ryu ('Secretos de la Golondrina'). Nos enfocamos en la formación moral y física, brindando herramientas de defensa personal aplicadas a situaciones reales de peligro.",
    "peachText": "El practicante de Sipalki-Do se rige bajo la analogía del durazno: blando y educado por fuera, pero sumamente duro y firme en su interior espiritual y físico."
  },
  "contacts": {
    "email": "sipalkidolapampa@gmail.com",
    "whatsapp": "542954556677",
    "instagram": "https://www.instagram.com/sipalki.lapampa",
    "facebook": "https://www.facebook.com/sipalki.lapampa"
  },
  "sedes": [
    {
      "id": "plan-5000",
      "name": "Comisión Vecinal Barrio Plan 5000",
      "address": "Bertera y Gral. Acha, Santa Rosa",
      "instructor": "Sabom Ruben Tellechea",
      "rank": "Cinturón Negro - III Dan",
      "days": "Martes y Jueves",
      "hours": "20:00 hs. a 21:30 hs.",
      "whatsapp": "542954556677"
    },
    {
      "id": "esperanza",
      "name": "SUM Barrio Esperanza",
      "address": "Toscano Sur y Cavero, Santa Rosa",
      "instructor": "Sabom Ruben Tellechea",
      "rank": "Cinturón Negro - III Dan",
      "days": "Lunes y Miércoles",
      "hours": "20:30 hs. a 21:45 hs.",
      "whatsapp": "542954556677"
    },
    {
      "id": "yayo-gym",
      "name": "Yayo Gym",
      "address": "E. Mitre 65, Santa Rosa",
      "instructor": "Maestro Martín Zabala",
      "rank": "Cinturón Negro - V Dan",
      "days": "Martes y Jueves",
      "hours": "21:30 hs. a 22:30 hs.",
      "whatsapp": "542954112233"
    },
    {
      "id": "suboficiales",
      "name": "Casino de Suboficiales",
      "address": "Av. Spinetto y Gardel, Santa Rosa",
      "instructor": "Maestro Lucas Rodríguez",
      "rank": "Cinturón Negro - V Dan",
      "days": "Lunes y Miércoles",
      "hours": "20:00 hs. a 21:30 hs.",
      "whatsapp": "542954448899"
    }
  ],
  "gallery": [
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80",
      "title": "Entrenamiento de técnicas con sables tradicionales"
    },
    {
      "id": 2,
      "url": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "title": "Exámenes y graduación de cinturones negros"
    },
    {
      "id": 3,
      "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1200&q=80",
      "title": "Práctica al aire libre y acondicionamiento"
    },
    {
      "id": 4,
      "url": "https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=1200&q=80",
      "title": "Concentración y formas básicas individuales"
    },
    {
      "id": 5,
      "url": "https://images.unsplash.com/photo-1555597673-20dc2741d4b6?auto=format&fit=crop&w=1200&q=80",
      "title": "Práctica infantil: defensa personal y juego"
    },
    {
      "id": 6,
      "url": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      "title": "El Doyang: respeto mutuo y perseverancia"
    }
  ]
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadConfig();
  setupNav();
  setupTabs();
  setupTimeline();
  setupGlossary();
  setupLightbox();
  setupContactForm();
  setupAdminPanel();
});

// Load Configuration from API/JSON or LocalStorage
async function loadConfig() {
  const localData = localStorage.getItem("sipalki_config");
  
  if (localData) {
    try {
      siteConfig = JSON.parse(localData);
      renderSite();
      return;
    } catch (e) {
      console.error("Error parsing local configuration, falling back to JSON", e);
    }
  }

  try {
    const response = await fetch("config.json");
    siteConfig = await response.json();
    renderSite();
  } catch (error) {
    console.warn("CORS/Fetch error loading config.json, using local fallback configuration", error);
    siteConfig = DEFAULT_FALLBACK_CONFIG;
    renderSite();
    showToast("Cargado desde la configuración local de respaldo.", "info");
  }
}

// Render dynamic elements to DOM
function renderSite() {
  if (!siteConfig) return;

  // Title tags & page names
  document.title = `${siteConfig.siteName} - ${siteConfig.association}`;
  document.querySelectorAll(".site-name-text").forEach(el => el.innerText = siteConfig.siteName);
  document.querySelectorAll(".association-text").forEach(el => el.innerText = siteConfig.association);

  // Hero Section
  if (document.getElementById("hero-title")) {
    document.getElementById("hero-title").innerText = siteConfig.hero.title;
    document.getElementById("hero-subtitle").innerText = siteConfig.hero.subtitle;
    document.getElementById("hero-desc").innerText = siteConfig.hero.description;
  }

  // About Section
  if (document.getElementById("about-quote")) {
    document.getElementById("about-quote").innerText = `"${siteConfig.about.quote}"`;
    document.getElementById("about-quote-author").innerText = siteConfig.about.quoteAuthor;
    document.getElementById("about-description").innerText = siteConfig.about.description;
    document.getElementById("peach-text").innerText = siteConfig.about.peachText;
  }

  // Contacts
  const emailLink = document.getElementById("contact-email-link");
  const emailText = document.getElementById("contact-email-text");
  if (emailLink && emailText) {
    emailLink.href = `mailto:${siteConfig.contacts.email}`;
    emailText.innerText = siteConfig.contacts.email;
  }

  const waLink = document.getElementById("contact-wa-link");
  const waText = document.getElementById("contact-wa-text");
  if (waLink && waText) {
    waLink.href = `https://wa.me/${siteConfig.contacts.whatsapp}`;
    waText.innerText = `+${siteConfig.contacts.whatsapp}`;
  }

  const igLink = document.getElementById("contact-ig-link");
  if (igLink) igLink.href = siteConfig.contacts.instagram;

  const fbLink = document.getElementById("contact-fb-link");
  if (fbLink) fbLink.href = siteConfig.contacts.facebook;

  // Render Sedes
  renderSedes();

  // Render Gallery
  renderGallery();
}

// Render Sedes List
function renderSedes() {
  const grid = document.getElementById("sedes-grid");
  if (!grid) return;

  grid.innerHTML = "";
  siteConfig.sedes.forEach(sede => {
    // Generate prefilled WA message
    const waMessage = encodeURIComponent(`Hola! Quisiera consultar por las clases de Sipalki en la sede: ${sede.name}.`);
    const waUrl = `https://wa.me/${sede.whatsapp}?text=${waMessage}`;
    const mapsQuery = encodeURIComponent(`${sede.address}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

    const card = document.createElement("div");
    card.className = "sede-card";
    card.innerHTML = `
      <div class="sede-header">
        <h3>${sede.name}</h3>
        <div class="sede-instructor">
          <div class="instructor-avatar">${sede.instructor.charAt(6) || "S"}</div>
          <div class="instructor-info">
            <span class="instructor-name">${sede.instructor}</span>
            <span class="instructor-rank">${sede.rank}</span>
          </div>
        </div>
      </div>
      <ul class="sede-details">
        <li><i class="fas fa-map-marker-alt"></i> <span>${sede.address}</span></li>
        <li><i class="fas fa-calendar-alt"></i> <span>${sede.days}</span></li>
        <li><i class="fas fa-clock"></i> <span>${sede.hours}</span></li>
      </ul>
      <div class="sede-actions">
        <a href="${waUrl}" target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> Consultar WhatsApp</a>
        <a href="${mapsUrl}" target="_blank" class="btn btn-secondary"><i class="fas fa-map-marked-alt"></i> Cómo Llegar</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Photo Gallery
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  grid.innerHTML = "";
  siteConfig.gallery.forEach(img => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.setAttribute("data-src", img.url);
    item.setAttribute("data-title", img.title);
    item.innerHTML = `
      <img src="${img.url}" alt="${img.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-title">${img.title}</span>
      </div>
    `;
    grid.appendChild(item);
  });

  // Re-attach lightbox triggers
  setupLightboxTriggers();
}

// Navigation Header Logic
function setupNav() {
  const header = document.querySelector("header");
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  // Scroll style change
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll Spy active states
    let fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      if (section) {
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  });

  // Toggle responsive menu
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
      const icon = menuBtn.querySelector("i");
      if (nav.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-bars";
      }
    });
  }

  // Close menu when clicking link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("active");
      if (menuBtn) menuBtn.querySelector("i").className = "fas fa-bars";
    });
  });
}

// Setup Practice Tabs
function setupTabs() {
  const tabs = document.querySelectorAll(".practice-tab");
  const panes = document.querySelectorAll(".practice-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
}

// Setup Interactive Timeline
function setupTimeline() {
  const nav = document.getElementById("timeline-nav");
  if (!nav) return;

  // Render timeline tabs
  nav.innerHTML = "";
  HISTORY_TIMELINE.forEach((item, index) => {
    const tab = document.createElement("button");
    tab.className = `timeline-tab ${index === activeTimelineIndex ? "active" : ""}`;
    tab.innerText = item.tab;
    tab.addEventListener("click", () => {
      activeTimelineIndex = index;
      document.querySelectorAll(".timeline-tab").forEach((t, i) => {
        if (i === index) t.classList.add("active");
        else t.classList.remove("active");
      });
      renderTimelineContent();
    });
    nav.appendChild(tab);
  });

  renderTimelineContent();
}

function renderTimelineContent() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const data = HISTORY_TIMELINE[activeTimelineIndex];
  container.innerHTML = `
    <div class="timeline-content">
      <h3>${data.title}</h3>
      <span class="timeline-date">${data.date}</span>
      <div class="timeline-body">
        <p>${data.text}</p>
      </div>
    </div>
  `;
}

// Setup Glossary & Search
function setupGlossary() {
  const searchInput = document.getElementById("glossary-search");
  const categoryContainer = document.getElementById("glossary-categories");

  if (!categoryContainer) return;

  // Render Category Buttons
  const categories = ["todos", "generales", "hiong", "tecnicas", "patadas", "numeros"];
  categoryContainer.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `glossary-cat-btn ${cat === currentGlossaryCat ? "active" : ""}`;
    btn.innerText = cat.toUpperCase();
    btn.addEventListener("click", () => {
      currentGlossaryCat = cat;
      document.querySelectorAll(".glossary-cat-btn").forEach(b => {
        if (b.innerText.toLowerCase() === cat) b.classList.add("active");
        else b.classList.remove("active");
      });
      renderGlossary();
    });
    categoryContainer.appendChild(btn);
  });

  // Search filter keyup listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentGlossaryQuery = e.target.value.toLowerCase();
      renderGlossary();
    });
  }

  renderGlossary();
}

function renderGlossary() {
  const grid = document.getElementById("glossary-grid");
  if (!grid) return;

  grid.innerHTML = "";
  
  // Filter glossary
  const filtered = GLOSSARY_DATA.filter(item => {
    const matchesCat = currentGlossaryCat === "todos" || item.category === currentGlossaryCat;
    const matchesQuery = !currentGlossaryQuery || 
                         item.korean.toLowerCase().includes(currentGlossaryQuery) || 
                         item.spanish.toLowerCase().includes(currentGlossaryQuery) ||
                         item.pron.toLowerCase().includes(currentGlossaryQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">No se encontraron términos coincidentes.</div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "glossary-card";
    card.innerHTML = `
      <div class="glossary-header">
        <span class="glossary-korean">${item.korean}</span>
        <span class="glossary-pron">[${item.pron}]</span>
      </div>
      <p class="glossary-spanish">${item.spanish}</p>
    `;
    grid.appendChild(card);
  });
}

// Setup Lightbox overlay
let lightbox = null;
function setupLightbox() {
  lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector(".lightbox-close");
  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function setupLightboxTriggers() {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      const title = item.getAttribute("data-title");
      openLightbox(src, title);
    });
  });
}

function openLightbox(src, title) {
  if (!lightbox) return;
  const img = lightbox.querySelector(".lightbox-img");
  const caption = lightbox.querySelector(".lightbox-title");

  img.src = src;
  caption.innerText = title;
  lightbox.style.display = "flex";
  setTimeout(() => lightbox.classList.add("active"), 10);
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  setTimeout(() => lightbox.style.display = "none", 300);
}

// Setup Contact Form simulation
function setupContactForm() {
  const form = document.getElementById("contact-form-el");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simple verification
    const name = form.querySelector("#form-name").value.trim();
    const email = form.querySelector("#form-email").value.trim();
    const message = form.querySelector("#form-message").value.trim();

    if (!name || !email || !message) {
      showToast("Por favor complete todos los campos obligatorios.", "error");
      return;
    }

    // Prefill WhatsApp text or simulation
    showToast("¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.", "success");
    form.reset();
  });
}

// Setup Toast Message Alerts
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconClass = "fas fa-check-circle";
  if (type === "error") iconClass = "fas fa-exclamation-circle";
  if (type === "info") iconClass = "fas fa-info-circle";

  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Remove toast after delay
  setTimeout(() => {
    toast.style.animation = "slideIn 0.3s ease-in reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Setup Administration Settings Panel
let adminAuthenticated = false;

function setupAdminPanel() {
  const modal = document.getElementById("admin-modal");
  const adminOpenBtn = document.getElementById("admin-open-btn");
  if (!adminOpenBtn || !modal) return;

  const closeBtns = modal.querySelectorAll(".modal-close, .admin-cancel-btn");
  const authForm = document.getElementById("admin-auth-form");
  const adminPanelEl = document.getElementById("admin-panel-content");
  const adminTabs = modal.querySelectorAll(".admin-nav-btn");
  const adminSections = modal.querySelectorAll(".admin-panel");

  // Open administration modal
  adminOpenBtn.addEventListener("click", () => {
    modal.classList.add("active");
    resetAdminUI();
  });

  // Close modal
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });

  // Authenticate Admin
  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pwInput = document.getElementById("admin-password-input");
      if (pwInput.value === siteConfig.adminPassword) {
        adminAuthenticated = true;
        authForm.style.display = "none";
        adminPanelEl.style.display = "grid";
        pwInput.value = "";
        loadAdminFormValues();
        showToast("Acceso de administración concedido", "success");
      } else {
        showToast("Contraseña incorrecta", "error");
        pwInput.value = "";
      }
    });
  }

  // Admin section sub-navigation tabs
  adminTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");
      adminTabs.forEach(t => t.classList.remove("active"));
      adminSections.forEach(s => s.classList.remove("active"));

      tab.classList.add("active");
      modal.querySelector(target).classList.add("active");
    });
  });

  // Setup Admin Action Buttons
  const saveBtn = document.getElementById("admin-save-btn");
  const resetBtn = document.getElementById("admin-reset-btn");
  const exportBtn = document.getElementById("admin-export-btn");

  if (saveBtn) saveBtn.addEventListener("click", saveAdminChanges);
  if (resetBtn) resetBtn.addEventListener("click", resetAdminChanges);
  if (exportBtn) exportBtn.addEventListener("click", exportAdminConfig);

  // Setup Add Sede Button
  const addSedeBtn = document.getElementById("admin-add-sede-btn");
  if (addSedeBtn) addSedeBtn.addEventListener("click", addSedeRow);

  // Setup Add Photo Button
  const addPhotoBtn = document.getElementById("admin-add-photo-btn");
  if (addPhotoBtn) addPhotoBtn.addEventListener("click", addPhotoRow);
}

function resetAdminUI() {
  adminAuthenticated = false;
  document.getElementById("admin-auth-form").style.display = "block";
  document.getElementById("admin-panel-content").style.display = "none";
  document.getElementById("admin-password-input").value = "";
  
  // Default to tab 1
  const tabs = document.querySelectorAll(".admin-nav-btn");
  const sections = document.querySelectorAll(".admin-panel");
  tabs.forEach((t, i) => {
    if (i === 0) t.classList.add("active");
    else t.classList.remove("active");
  });
  sections.forEach((s, i) => {
    if (i === 0) s.classList.add("active");
    else s.classList.remove("active");
  });
}

// Load current configuration into admin panel input fields
function loadAdminFormValues() {
  if (!siteConfig) return;

  // General Texts
  document.getElementById("adm-hero-title").value = siteConfig.hero.title;
  document.getElementById("adm-hero-subtitle").value = siteConfig.hero.subtitle;
  document.getElementById("adm-hero-desc").value = siteConfig.hero.description;
  document.getElementById("adm-about-desc").value = siteConfig.about.description;
  document.getElementById("adm-about-quote").value = siteConfig.about.quote;
  document.getElementById("adm-about-peach").value = siteConfig.about.peachText;

  // Contacts
  document.getElementById("adm-contact-email").value = siteConfig.contacts.email;
  document.getElementById("adm-contact-wa").value = siteConfig.contacts.whatsapp;
  document.getElementById("adm-contact-ig").value = siteConfig.contacts.instagram;
  document.getElementById("adm-contact-fb").value = siteConfig.contacts.facebook;

  // Password Edit
  document.getElementById("adm-password-new").value = siteConfig.adminPassword;

  // Render tables for Sedes & Gallery management
  loadAdminSedesTable();
  loadAdminGalleryTable();
}

// Render the administration tables
function loadAdminSedesTable() {
  const tbody = document.getElementById("admin-sedes-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  siteConfig.sedes.forEach((sede, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" class="form-control" value="${sede.name}" data-key="name" data-index="${index}"></td>
      <td><input type="text" class="form-control" value="${sede.address}" data-key="address" data-index="${index}"></td>
      <td>
        <input type="text" class="form-control" value="${sede.instructor}" data-key="instructor" data-index="${index}" style="margin-bottom:4px;" placeholder="Instructor">
        <input type="text" class="form-control" value="${sede.rank}" data-key="rank" data-index="${index}" placeholder="Graduación">
      </td>
      <td>
        <input type="text" class="form-control" value="${sede.days}" data-key="days" data-index="${index}" style="margin-bottom:4px;" placeholder="Días">
        <input type="text" class="form-control" value="${sede.hours}" data-key="hours" data-index="${index}" placeholder="Horas">
      </td>
      <td><input type="text" class="form-control" value="${sede.whatsapp}" data-key="whatsapp" data-index="${index}"></td>
      <td class="admin-actions">
        <button class="action-btn-mini btn-delete" onclick="deleteSedeRow(${index})"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function loadAdminGalleryTable() {
  const tbody = document.getElementById("admin-gallery-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  siteConfig.gallery.forEach((photo, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${photo.url}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
      <td><input type="text" class="form-control" value="${photo.url}" data-key="url" data-index="${index}"></td>
      <td><input type="text" class="form-control" value="${photo.title}" data-key="title" data-index="${index}"></td>
      <td class="admin-actions">
        <button class="action-btn-mini btn-delete" onclick="deletePhotoRow(${index})"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Delete Sede Action (exposed globally for inline buttons)
window.deleteSedeRow = function(index) {
  siteConfig.sedes.splice(index, 1);
  loadAdminSedesTable();
  showToast("Sede removida temporalmente. Guarda cambios para aplicar.", "info");
};

// Add Sede Action
function addSedeRow() {
  siteConfig.sedes.push({
    id: "sede-" + Date.now(),
    name: "Nueva Sede de Sipalki",
    address: "Calle 123, Ciudad",
    instructor: "Sabom Instructor",
    rank: "Cinturón Negro I Dan",
    days: "Lunes y Miércoles",
    hours: "19:00 hs a 20:30 hs",
    whatsapp: siteConfig.contacts.whatsapp
  });
  loadAdminSedesTable();
}

// Delete Photo Action (exposed globally)
window.deletePhotoRow = function(index) {
  siteConfig.gallery.splice(index, 1);
  loadAdminGalleryTable();
  showToast("Foto removida temporalmente. Guarda cambios para aplicar.", "info");
};

// Add Photo Action
function addPhotoRow() {
  siteConfig.gallery.push({
    id: Date.now(),
    url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    title: "Nueva foto de entrenamiento"
  });
  loadAdminGalleryTable();
}

// Save Administration changes to local storage & updates view
function saveAdminChanges() {
  // Update texts from general
  siteConfig.hero.title = document.getElementById("adm-hero-title").value;
  siteConfig.hero.subtitle = document.getElementById("adm-hero-subtitle").value;
  siteConfig.hero.description = document.getElementById("adm-hero-desc").value;
  siteConfig.about.description = document.getElementById("adm-about-desc").value;
  siteConfig.about.quote = document.getElementById("adm-about-quote").value;
  siteConfig.about.peachText = document.getElementById("adm-about-peach").value;

  // Update contacts
  siteConfig.contacts.email = document.getElementById("adm-contact-email").value;
  siteConfig.contacts.whatsapp = document.getElementById("adm-contact-wa").value;
  siteConfig.contacts.instagram = document.getElementById("adm-contact-ig").value;
  siteConfig.contacts.facebook = document.getElementById("adm-contact-fb").value;

  // Update password
  siteConfig.adminPassword = document.getElementById("adm-password-new").value;

  // Read Sedes table values
  const sedeInputs = document.querySelectorAll("#admin-sedes-tbody input");
  sedeInputs.forEach(input => {
    const key = input.getAttribute("data-key");
    const index = parseInt(input.getAttribute("data-index"));
    if (siteConfig.sedes[index]) {
      siteConfig.sedes[index][key] = input.value;
    }
  });

  // Read Gallery table values
  const photoInputs = document.querySelectorAll("#admin-gallery-tbody input");
  photoInputs.forEach(input => {
    const key = input.getAttribute("data-key");
    const index = parseInt(input.getAttribute("data-index"));
    if (siteConfig.gallery[index]) {
      siteConfig.gallery[index][key] = input.value;
    }
  });

  // Save to LocalStorage
  localStorage.setItem("sipalki_config", JSON.stringify(siteConfig));
  renderSite();
  document.getElementById("admin-modal").classList.remove("active");
  showToast("Cambios guardados temporalmente en el navegador.", "success");
}

// Reset changes back to config.json
function resetAdminChanges() {
  if (confirm("¿Estás seguro de que quieres restablecer todos los valores al archivo original config.json? Se perderán las modificaciones locales.")) {
    localStorage.removeItem("sipalki_config");
    loadConfig();
    document.getElementById("admin-modal").classList.remove("active");
    showToast("Configuración restablecida de fábrica.", "info");
  }
}

// Export config.json file
function exportAdminConfig() {
  // Read inputs before exporting to ensure latest text is exported
  saveAdminChanges(); 

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteConfig, null, 2));
  const dlAnchorElem = document.createElement("a");
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "config.json");
  dlAnchorElem.click();
  
  showToast("config.json descargado. Reemplaza el original en tu servidor.", "success");
}
