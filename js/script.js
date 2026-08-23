const citas = [
{
 id:1,title:"El Purgatorio 🔥",rating:4,image:"images/cita-01.jpg",
 short:"Comida, bebida, ¿pecar juntos?",
 verdict:"Mi veredicto: ★★★★☆. Las reseñas recientes rondan 4,1/5: destacan la comida, el ambiente, el servicio y, sobre todo, la propuesta de coctelería. Para una cita, me parece una opción con mucha personalidad.",
 quote:"Entre el cielo y el pecado, supongo que siempre elegiría sentarme contigo... y ver hasta dónde nos lleva la tentación.",
 date:"Sábado, 29 de agosto de 2026",time:"4:00 – 5:00 PM",place:"El Purgatorio",
 address:"Cl. 74 #02-86, Bogotá",lat:4.655261938913333,lng:-74.05143358702394,
 description:"Un lugar pensado para experimentar: café, destilados, vinos y coctelería con una propuesta bastante menos convencional que la típica salida. La idea es empezar la tarde entre algo rico para comer y una bebida que nos saque un poco de la rutina. Y sí... quiero que esta sea de esas citas en las que nos miramos, sonreímos y sabemos que la conversación puede ponerse peligrosamente interesante. El lugar se describe como una experiencia sensorial y las reseñas recientes resaltan su ambiente, comida y bebidas.",
 features:["🔥 Tú y yo tomando algo fuerte","🍸 Probar una bebida diferente y dejarnos sorprender","😏 Ver cuánto podemos portarnos mal sin que nadie se entere"],
 extra:"Nivel de misterio: medio. No necesitas saber exactamente cómo termina la tarde; solo necesitas llegar conmigo."
},
{
 id:2,title:"Y si lo volvemos a intentar",rating:4,image:"images/cita-02.jpg",
 short:"El plan que quedó pendiente la primera vez.",
 verdict:"Mi veredicto: ★★★★☆. Galactika aparece alrededor de 4,1/5 y las reseñas destacan su ambientación, música, comida, cócteles y la experiencia de jugar bolos con un concepto diferente. Eso sí: algunas reseñas advierten que puede haber espera en días concurridos.",
 quote:"La primera vez no nos alcanzó el tiempo. Esta vez quiero que nos alcance para todo: jugar, reír, comer, ver una película y quedarme contigo hasta que se acabe el día.",
 date:"Sábado, 29 de agosto de 2026",time:"Todo el día",place:"Galactika Bolo Club · Plaza Central",
 address:"Cra. 65 #11-50, C.C. Plaza Central, Local 2-32, Bogotá",lat:4.63195,lng:-74.11537,
 description:"La primera vez fuimos, estaba demasiado lleno y el plan quedó a medias. Así que esta vez quiero hacerlo bien: volver a intentarlo y convertirlo en un día completo. Bolos, algo rico para comer, una película, helado, caminar por el centro comercial y, sobre todo, tener tiempo suficiente para disfrutarlo contigo sin estar pendientes de que se nos acaba la tarde. Galactika tiene una ambientación temática y reseñas que destacan la experiencia diferente, aunque conviene considerar que los fines de semana puede haber espera.",
 features:["🎳 Bolos y revancha pendiente","🎬 Película juntos","🍦 Helado y algo de comer","😂 Una cantidad irresponsable de risas"],
 extra:"Nivel de misterio: ninguno. Esta vez sabes exactamente a lo que vienes: a divertirte conmigo."
},
{
 id:3,title:"Achiras",rating:5,image:"images/cita-03.jpg",
 short:"¿Y si vamos juntos por las achiras que te gustan?",
 verdict:"Mi veredicto: ★★★★★. No depende de una reseña de un establecimiento: el encanto está en convertir una simple compra en una pequeña aventura por carretera.",
 quote:"Si para encontrar algo que te gusta tengo que recorrer kilómetros contigo, entonces no son kilómetros: son tiempo que quiero pasar a tu lado.",
 date:"Sábado, 29 de agosto de 2026",time:"Todo el día",place:"La Mesa, Cundinamarca",
 address:"La Mesa, Cundinamarca, Colombia",lat:4.6323,lng:-74.4634,
 description:"Esta es la que convierte una cosa tan sencilla como ir por unas achiras en una excusa perfecta para escapar de la rutina. Salimos juntos, hacemos carretera, comemos algo, buscamos esas achiras que tanto te gustan y dejamos que el día nos vaya llevando. Si se puede, podemos sumar piscina, helado y una parada en otro municipio. La gracia no está únicamente en llegar: está en el viaje, en la música, en hablar de cualquier cosa y en descubrir un lugar nuevo juntos.",
 features:["🚗 Viaje juntos por carretera","🥔 Ir directamente por las achiras que te gustan","🍦 Helado y comida","🏊 Piscina si el plan lo permite","🗺️ Conocer otro rincón de Cundinamarca"],
 extra:"Nivel de misterio: ninguno. La sorpresa es el viaje mismo."
},
{
 id:4,title:"El postre más rico",rating:5,image:"images/cita-04.jpg",
 short:"Un postre nuevo, un municipio nuevo y todo un día contigo.",
 verdict:"Mi veredicto: ★★★★★. La gracia está en que el postre es solo la excusa: Bojacá nos permite sumar gastronomía, carretera, historia y naturaleza en el mismo plan.",
 quote:"Dicen que vamos por un postre. Yo sé la verdad: voy porque cualquier lugar se vuelve especial cuando el camino lo hacemos juntos.",
 date:"Sábado, 29 de agosto de 2026",time:"Todo el día",place:"Bojacá, Cundinamarca",
 address:"Bojacá, Cundinamarca, Colombia",lat:4.73248,lng:-74.34167,
 description:"La misión oficial: ir por una cuajada con dulce. La misión real: robarnos un día completo para nosotros. Podemos comer, tomar un helado, conocer Bojacá y después acercarnos a las Piedras de Chivo Negro, un sitio de interés cultural y ambiental con formaciones rocosas y arte rupestre. Las reseñas disponibles le dan 4/5 al atractivo, aunque advierten que no tiene caminos muy definidos ni señalización, así que la visita merece hacerse con calma y con el lugar en buenas condiciones.",
 features:["🍮 Buscar la cuajada con dulce","🍦 Helado y comida","🚗 Viajar juntos","🪨 Conocer las Piedras de Chivo Negro","🗺️ Visitar otro municipio"],
 extra:"Nivel de misterio: ninguno. El verdadero plan secreto es cuánto nos vamos a reír durante el camino."
}
];

const cards=document.getElementById("cards");
function stars(r){return "★".repeat(r)+"☆".repeat(5-r);}
function renderCards(){
 cards.innerHTML=citas.map(c=>`<article class="card">
  <div class="card-image-wrap"><img class="card-image" src="${c.image}" alt="${c.title}" onerror="this.style.objectFit='contain'"><span class="card-number">0${c.id}</span></div>
  <div class="card-body"><div class="stars">${stars(c.rating)}</div><h3>${c.title}</h3><p>${c.short}</p>
  <div class="card-footer"><span class="eyebrow">29 · AGO</span><button class="open-btn" onclick="openModal(${c.id})">Ver la cita →</button></div></div>
 </article>`).join("");
}
function openModal(id){
 const c=citas.find(x=>x.id===id);
 document.getElementById("modalNumber").textContent=`CITA 0${c.id}`;
 document.getElementById("modalImage").src=c.image;
 document.getElementById("modalImage").alt=c.title;
 document.getElementById("modalTitle").textContent=c.title;
 document.getElementById("modalStars").textContent=stars(c.rating);
 document.getElementById("modalVerdict").textContent=c.verdict;
 document.getElementById("modalQuote").textContent=`“${c.quote}”`;
 document.getElementById("modalDate").textContent=c.date;
 document.getElementById("modalTime").textContent=c.time;
 document.getElementById("modalPlace").textContent=c.place;
 document.getElementById("modalDescription").textContent=c.description;
 document.getElementById("modalAddress").textContent=c.address;
 document.getElementById("modalFeatures").innerHTML=c.features.map(x=>`<li>${x}</li>`).join("");
 document.getElementById("modalExtra").textContent=c.extra;
 const d=.012;
 document.getElementById("modalMap").src=`https://www.openstreetmap.org/export/embed.html?bbox=${c.lng-d}%2C${c.lat-d}%2C${c.lng+d}%2C${c.lat+d}&layer=mapnik&marker=${c.lat}%2C${c.lng}`;
 document.getElementById("modalDirections").href=`https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`;
 document.getElementById("modal").classList.add("show");
 document.getElementById("modal").setAttribute("aria-hidden","false");
 document.body.style.overflow="hidden";
}
function closeModal(){
 document.getElementById("modal").classList.remove("show");
 document.getElementById("modal").setAttribute("aria-hidden","true");
 document.body.style.overflow="";
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
renderCards();
