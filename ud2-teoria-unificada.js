/* UD2: teoria contínua per pestanya, amb una fotografia tècnica i un diagrama original. */
(function(){
'use strict';
const T=[
 {intro:'La sostenibilitat és una manera responsable de dissenyar, fabricar i fer servir tecnologia. No consisteix a buscar només el producte que contamina menys: també cal considerar la seguretat de les persones i si la solució es podrà mantenir al llarg del temps.',context:'Quan comparem dues alternatives, hem de definir la mateixa necessitat, analitzar l’origen dels materials, el consum d’energia, la durada, la reparació i les conseqüències socials. Una decisió sostenible és aquella que es pot justificar amb criteris i dades.',example:'En una plaça del barri comparem dues propostes: una amb ombra i camins accessibles i una altra amb molt paviment. Justificarem la decisió amb dades ambientals, socials i econòmiques.',photo:'electronics repair technician soldering circuit board workshop',observe:['Quins components es poden conservar o reparar?','Quines mesures de seguretat requereix el treball tècnic?']},
 {intro:'L’Agenda 2030, aprovada per les Nacions Unides el 2015, estableix 17 Objectius de Desenvolupament Sostenible (ODS). Els objectius proposen millorar les condicions de vida de les persones i reduir l’impacte sobre el planeta.',context:'Els ODS estan relacionats: les decisions sobre aigua, energia, indústria o transport també tenen efectes sobre la salut i la desigualtat. Per saber si s’avança cal utilitzar indicadors mesurables, no només bones intencions.',example:'A l’institut podem estudiar el consum d’aigua abans i després de canviar una aixeta, o mesurar els kWh d’una instal·lació. Les dades ens permeten comprovar si la proposta realment millora la situació.',photo:'school rooftop solar panels installation technician',observe:['Quins ODS tenen relació amb aquest exemple?','Quines dades hauríem de recollir per demostrar-ne els beneficis?']},
 {intro:'Molts objectes tecnològics contenen minerals, metalls i polímers que provenen de la natura. Abans que una peça arribi al taller, ha passat per processos d’extracció, transformació, transport i fabricació.',context:'L’extracció pot generar pols, soroll, moviments de terres, residus i consum d’aigua. Els efectes depenen del procés i del territori, i s’han de valorar conjuntament amb la seguretat laboral i els drets de les comunitats.',example:'Una bicicleta pot contenir alumini, ferro, cautxú i polímers. Reparar-la permet aprofitar materials que ja han requerit energia i recursos per obtenir-se.',photo:'open pit copper mine excavation trucks',observe:['Com ha canviat el relleu per extreure minerals?','Quines mesures de protecció de sòls i aigua es podrien adoptar?']},
 {intro:'L’energia és necessària perquè funcionin els sistemes tecnològics. Per interpretar-ne el consum cal distingir energia (J o kWh), potència (W), energia útil, energia dissipada i rendiment.',context:'L’energia es conserva, però durant les transformacions una part sovint es dispersa en formes que no aprofitem per a la funció prevista. Les energies renovables també necessiten infraestructures i tenen límits de funcionament.',example:'Un LED de 3 W que funciona 5 hores consumeix 15 Wh = 0,015 kWh. El cost elèctric es calcula multiplicant aquest consum pel preu del kWh; és diferent del cost inicial de comprar un aparell.',photo:'photovoltaic inverter electrical equipment solar energy technician',observe:['Quins elements transformen o controlen l’energia?','Com podríem mesurar el consum de la instal·lació?']},
 {intro:'L’aigua és un recurs essencial per a les persones, els ecosistemes i els processos industrials. La disponibilitat d’aigua dolça varia segons el clima, la demanda, les infraestructures i les decisions de gestió.',context:'Per utilitzar-la amb seguretat cal conèixer-ne la qualitat i aplicar el tractament adequat. Potabilitzar, depurar i dessalinitzar són processos diferents que no es poden confondre.',example:'Si una aixeta té un cabal de 9 L/min i el reduïm a 6 L/min, en dos minuts consumim 6 litres menys. Aquest càlcul permet relacionar una millora tècnica amb una dada concreta.',photo:'drinking water treatment plant filtration tanks industrial',observe:['Quines etapes del tractament de l’aigua s’hi poden identificar?','Quina diferència hi ha entre tractar aigua potable i aigua residual?']},
 {intro:'La mobilitat és la possibilitat de desplaçar-nos i arribar als serveis. Perquè sigui sostenible hem de tenir en compte el transport, l’accessibilitat, la seguretat i els impactes ambientals i socials.',context:'Els desplaçaments poden generar soroll, contaminació, congestió i ocupació d’espai. Alguns d’aquests efectes repercuteixen sobre terceres persones i s’anomenen costos externs.',example:'Podem observar com arriba l’alumnat a l’institut i comparar els desplaçaments a peu, en bicicleta, en autobús i en cotxe. Cal tenir en compte també les persones que viuen més lluny.',photo:'electric tram street bicycles public transport urban mobility',observe:['Quines formes de mobilitat apareixen a l’espai públic?','Quines barreres poden trobar diferents usuaris?']},
 {intro:'L’economia circular vol mantenir els materials i productes en servei durant el màxim de temps raonable. Això exigeix pensar el disseny, el manteniment, la reparació i la reutilització abans d’arribar al reciclatge.',context:'L’anàlisi de cicle de vida considera l’extracció, la fabricació, el transport, l’ús i el final de vida del producte. Reutilitzar un component no és el mateix que reciclar-lo: en la reutilització manté bona part de la seva forma i funció.',example:'Podem dissenyar una cadira amb cargols accessibles i peces recanviables: així durarà més temps i serà més fàcil reparar-la.',photo:'repair cafe electronics workshop circular economy repair',observe:['Quina peça seria més fàcil de reutilitzar o reparar?','Com s’hauria de dissenyar un objecte perquè es pogués desmuntar?']}
];
const SEG=[
 [0,3,5],[0,3],[0,3,6],[0,5,12,99],[0,3,99],[0,2,99],[0,99]
];
const H=[
 ['La sostenibilitat en el desenvolupament tecnològic','Les tres dimensions i la decisió responsable'],
 ['Les Nacions Unides i els ODS'],
 ['Recursos i processos d’extracció','Impactes, mesures de prevenció i restauració'],
 ['Energia, potència i rendiment','Les fonts renovables','Fórmules i càlculs per aprofundir'],
 ['Disponibilitat i qualitat de l’aigua','Tractaments i aprofitament sostenible'],
 ['Mobilitat i accessibilitat','Costos externs i alternatives'],
 ['Cicle de vida i economia circular']
];
const BOX=[
 [['🌿','Ambiental'],['👥','Social'],['💶','Econòmica']],
 [['🌐','Objectiu'],['🏫','Actuació'],['📏','Indicador']],
 [['⛏️','Extracció'],['⚙️','Transformació'],['🔧','Producte']],
 [['⚡','100 J entrada'],['💡','80 J útils'],['🌡️','20 J dissipats']],
 [['💧','Captació'],['🧪','Potabilització'],['🌊','Depuració']],
 [['🚶','Persones'],['🚊','Transports'],['🌱','Impactes']],
 [['🔧','Reparar'],['🎄','Reutilitzar'],['♻️','Recuperar']]
];
const NOTE=[
 'L’equilibri entre medi ambient, persones i economia és imprescindible.',
 'La millora d’un indicador permet valorar si una acció contribueix als ODS.',
 'Cal actuar abans, durant i després de l’extracció de recursos.',
 'Exemple: 80 J útils / 100 J d’entrada = 80 % de rendiment.',
 'La potabilització i la depuració tenen objectius diferents.',
 'La mobilitat sostenible busca accessibilitat amb menys impacte.',
 'Un bon disseny facilita mantenir, reparar i reutilitzar.'
];
function N(t,c,txt){const e=document.createElement(t);if(c)e.className=c;if(txt!==undefined)e.textContent=txt;return e}
function A(parent,tag,value,cls){const e=N(tag,cls,value);parent.append(e);return e}
function miningStory(){
 const section=N('section','ud2-resource-story');
 section.setAttribute('aria-label','Origen de les matèries primeres i classificació');
 section.innerHTML=`<div class="ud2-resource-hero">
  <span class="ud2-resource-kicker">🌍 DE LA NATURA ALS OBJECTES</span>
  <h3>D'on surten les matèries primeres?</h3>
  <p>Abans de fabricar un objecte cal obtenir els recursos de la natura. Alguns provenen del <strong>subsòl</strong>; d'altres, dels <strong>boscos, conreus i animals</strong>.</p>
 </div>
 <div class="ud2-resource-atlas">
  <div class="ud2-resource-cards">
   <article class="ud2-resource-card mineral"><span class="ud2-resource-icon">⛏️</span><h4>Minerals i roques</h4><p><strong>D'on?</strong> Mines, pedreres i graveres. <strong>Exemples:</strong> coure → cables; bauxita → alumini; sorra → vidre; argila → maons.</p><div class="ud2-resource-use"><b>No renovables</b> · Els metalls i el vidre es poden reciclar.</div></article>
   <article class="ud2-resource-card oil"><span class="ud2-resource-icon">🛢️</span><h4>Combustibles fòssils i urani</h4><p><strong>D'on?</strong> Jaciments del subsòl. <strong>Exemples:</strong> petroli → combustibles i plàstics; gas natural → calefacció i electricitat; carbó → calor; urani → energia nuclear.</p><div class="ud2-resource-use"><b>No renovables</b> · Les reserves són limitades.</div></article>
   <article class="ud2-resource-card bio"><span class="ud2-resource-icon">🌳</span><h4>Vegetals i animals</h4><p><strong>D'on?</strong> Boscos, camps i ramaderia. <strong>Exemples:</strong> fusta → mobles; cotó i llana → roba; suro → aïllament; làtex → cautxú.</p><div class="ud2-resource-use"><b>Renovables</b> · Només si es regeneren i se'n fa una gestió responsable.</div></article>
   <article class="ud2-resource-card gas"><span class="ud2-resource-icon">💧</span><h4>Aigua i altres recursos</h4><p><strong>D'on?</strong> Rius, aqüífers i cicle de l'aigua. S'utilitza per al consum, el reg, la indústria i per moure turbines hidroelèctriques.</p><div class="ud2-resource-use"><b>Renovable pel cicle natural</b> · Pot escassejar o contaminar-se.</div></article>
  </div>
  <figure class="ud2-geology-figure">
   <svg viewBox="0 0 980 480" role="img" aria-label="Tall de les capes de la Terra i on hi ha els jaciments: escorça, mantell, nucli extern i nucli intern">
    <defs><linearGradient id="geoSky" x2="0" y2="1"><stop stop-color="#e1f3ff"/><stop offset="1" stop-color="#fff9e8"/></linearGradient></defs>
    <rect x="0" y="0" width="980" height="480" rx="20" fill="url(#geoSky)"/>
    <text x="37" y="45" font-size="27" font-weight="900" fill="#633579">LES CAPES DE LA TERRA</text>
    <g transform="translate(255 270)">
     <circle r="190" fill="#d9a66e" stroke="#9a6b47" stroke-width="5"/>
     <circle r="156" fill="#ee9652"/><circle r="90" fill="#f4c354"/><circle r="45" fill="#fff0ae"/>
     <path d="M0 0 L0 -190 A190 190 0 0 1 190 0 Z" fill="#f5fafc" opacity=".15"/>
     <path d="M-189 0 A190 190 0 0 0 189 0" fill="none" stroke="#8d5e3c" stroke-width="3"/>
     <path d="M-188 -25 Q-90 -40 -5 -16 T190 -20" fill="none" stroke="#7d6d55" stroke-width="6"/>
     <path d="M-180 35 Q-80 10 12 35 T179 35" fill="none" stroke="#a57552" stroke-width="5"/>
     <circle cx="-130" cy="-120" r="12" fill="#3c97bb"/><circle cx="-100" cy="-102" r="7" fill="#3c97bb"/>
     <circle cx="-155" cy="-48" r="9" fill="#57596b"/><circle cx="-120" cy="-58" r="9" fill="#57596b"/>
    </g>
    <g font-family="Arial,sans-serif" fill="#44384f" font-size="19">
     <path d="M405 140 H590" stroke="#a16d47" stroke-width="3"/><text x="605" y="146" font-weight="800">ESCORÇA</text><text x="605" y="171" font-size="16">Capa externa i prima: roques, minerals</text><text x="605" y="193" font-size="16">i jaciments que podem explotar.</text>
     <path d="M381 230 H590" stroke="#db8a4c" stroke-width="3"/><text x="605" y="236" font-weight="800">MANTELL</text><text x="605" y="260" font-size="16">Roques molt calentes que es deformen</text><text x="605" y="282" font-size="16">lentament en profunditat.</text>
     <path d="M334 327 H590" stroke="#dfb44c" stroke-width="3"/><text x="605" y="333" font-weight="800">NUCLI EXTERN</text><text x="605" y="357" font-size="16">Principalment ferro i níquel líquids.</text>
     <path d="M285 393 H590" stroke="#e5cb79" stroke-width="3"/><text x="605" y="400" font-weight="800">NUCLI INTERN</text><text x="605" y="424" font-size="16">Principalment ferro i níquel sòlids.</text>
    </g>
   </svg>
   <figcaption><strong>On extraiem les matèries primeres?</strong> Els jaciments de minerals, petroli i gas que aprofitem es troben a l'<strong>escorça terrestre</strong>, no al nucli ni al mantell. Les capes del dibuix són esquemàtiques i no estan a escala.</figcaption>
  </figure>
  <figure class="ud2-crust-figure">
   <svg viewBox="0 0 1080 510" role="img" aria-label="Tall geològic de l'escorça terrestre: capes de roca, filó mineral, mina, mena i ganga">
    <rect x="0" y="0" width="1080" height="510" rx="20" fill="#eef7fd"/>
    <text x="32" y="43" font-size="27" font-weight="900" fill="#446c85">ON TROBEM LA MENA I LA GANGA?</text>
    <path d="M0 160 L130 122 L280 147 L415 97 L550 145 L690 115 L825 151 L950 116 L1080 155 V510 H0Z" fill="#b89c84" stroke="#8f705e" stroke-width="4"/>
    <path d="M0 202 Q160 145 330 198 T690 185 T1080 198 V510 H0Z" fill="#cdb299"/>
    <path d="M0 278 Q160 244 320 287 T690 275 T1080 282 V510 H0Z" fill="#a99079"/>
    <path d="M0 382 Q185 346 350 388 T700 372 T1080 381 V510 H0Z" fill="#806d60"/>
    <path d="M475 131 Q490 196 516 233 L554 307 L605 387 L641 488 L699 510 H635 L580 421 L526 338 L480 272 L443 184Z" fill="#3f879e" stroke="#285e77" stroke-width="4"/>
    <g fill="#f7c05c" stroke="#a87938" stroke-width="3">
      <path d="M474 186 l20 8 2 28 -18 14 -10 -19Z"/><path d="M507 262 l24 7 14 33 -26 10 -13 -21Z"/><path d="M552 339 l26 7 11 34 -25 14 -15 -24Z"/><path d="M599 422 l20 7 12 29 -21 12 -18 -20Z"/>
    </g>
    <path d="M190 149 V275 H503" fill="none" stroke="#524947" stroke-width="31" stroke-linejoin="round"/>
    <path d="M190 150 V274 H504" fill="none" stroke="#e0d5bb" stroke-width="23" stroke-linejoin="round"/>
    <rect x="134" y="102" width="113" height="36" rx="7" fill="#777d82"/>
    <rect x="149" y="90" width="85" height="14" fill="#a5a7a9"/>
    <path d="M159 89 L190 53 L222 89" fill="none" stroke="#67717b" stroke-width="8"/>
    <text x="270" y="78" font-size="20" font-weight="800" fill="#584a45">BOCA DE LA MINA</text>
    <path d="M275 89 L213 119" stroke="#6a605d" stroke-width="3"/>
    <text x="54" y="332" font-size="20" font-weight="800" fill="#fff">ROCA</text>
    <text x="54" y="358" font-size="20" font-weight="800" fill="#fff">EN CAPES</text>
    <path d="M650 245 L793 192" stroke="#226c89" stroke-width="4"/>
    <rect x="790" y="125" width="259" height="139" rx="14" fill="#fff" stroke="#b7cfdb" stroke-width="3"/>
    <text x="812" y="158" font-size="21" font-weight="900" fill="#286c89">FILÓ MINERAL</text>
    <text x="812" y="188" font-size="17" fill="#44515b">Zona de roca que conté</text>
    <text x="812" y="212" font-size="17" fill="#44515b">minerals d'interès i</text>
    <text x="812" y="236" font-size="17" fill="#44515b">minerals acompanyants.</text>
    <path d="M614 425 L797 370" stroke="#a77939" stroke-width="4"/>
    <rect x="791" y="311" width="263" height="169" rx="14" fill="#fff" stroke="#d5c3ab" stroke-width="3"/>
    <circle cx="819" cy="345" r="12" fill="#f7c05c" stroke="#a87938" stroke-width="3"/>
    <text x="842" y="352" font-size="19" font-weight="900" fill="#6f542e">MENA</text>
    <text x="814" y="381" font-size="16" fill="#52505a">Mineral que volem aprofitar</text>
    <circle cx="819" cy="408" r="12" fill="#ad917b" stroke="#806d60" stroke-width="3"/>
    <text x="842" y="415" font-size="19" font-weight="900" fill="#6d594b">GANGA</text>
    <text x="814" y="445" font-size="16" fill="#52505a">Minerals que l'acompanyen</text>
    <text x="814" y="466" font-size="15" fill="#52505a">i se separen durant el procés</text>
    <text x="35" y="477" font-size="18" font-weight="800" fill="#fff">ESCORÇA TERRESTRE · TALL ESQUEMÀTIC</text>
   </svg>
   <figcaption>Un <strong>filó</strong> és una zona mineralitzada dins de l'escorça. La mina arriba fins a la roca que interessa extreure. Després, a la planta de tractament, se separen els minerals de la <strong>mena</strong> dels minerals de la <strong>ganga</strong>. Dibuix esquemàtic, no a escala.</figcaption>
  </figure>
  <div class="ud2-ore-explainer">
   <h3>⛏️ Què són la mena i la ganga?</h3>
   <p>Quan extraiem una roca d'una mina, sovint hi ha una barreja de minerals. La <strong>mena</strong> és la part de la qual ens interessa obtenir una substància útil (per exemple, coure). La <strong>ganga</strong> és el material que l'acompanya i que no s'aprofita en aquell procés.</p>
   <div class="ud2-ore-photos">
    <figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Chalcopyrite_Cross-section.jpg?width=960" alt="Tall real d'una roca mineralitzada amb un gra de calcopirita, mineral del qual es pot obtenir coure" loading="lazy" decoding="async"><figcaption><strong>Exemple de mena:</strong> calcopirita en una roca mineralitzada. <a href="https://commons.wikimedia.org/wiki/File:Chalcopyrite_Cross-section.jpg" target="_blank" rel="noopener noreferrer">Foto: TimBomBom1 · CC BY-SA 4.0</a></figcaption></figure>
    <figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Pentlandita_de_la_Mina_Aguablanca.png?width=960" alt="Mostra de roca gabre amb pentlandita i calcopirita, procedent de la mina Aguablanca" loading="lazy" decoding="async"><figcaption><strong>Mena i roca acompanyant:</strong> pentlandita i calcopirita dins de gabre; la separació depèn del mineral que es vol obtenir. <a href="https://commons.wikimedia.org/wiki/File:Pentlandita_de_la_Mina_Aguablanca.png" target="_blank" rel="noopener noreferrer">Foto: Darth vader 92 · CC BY-SA 4.0</a></figcaption></figure>
   </div>
   <p class="ud2-ore-example"><strong>Exemple:</strong> en una mina de coure, se separen els minerals que contenen coure de la resta de roca. La mena no és coure pur: encara s'ha de tractar per obtenir el metall.</p>
  </div>
    <p class="ud2-resource-note"><strong>Recorda:</strong> renovable no vol dir inesgotable, i reciclable no vol dir renovable. Per exemple, el coure és no renovable però reciclable; la fusta es pot renovar si el bosc es recupera.</p>
 </div>`;
 return section;
}
function miningEnergyChain(){
 const section=N('section','ud2-energy-chain');
 section.setAttribute('aria-label','Com es transforma el gas natural en electricitat i comparació amb altres fonts');
 section.innerHTML=`<span class="ud2-resource-kicker">⚡ DE LA FONT A L’ELECTRICITAT</span>
<h3>De les fonts d'energia a l'electricitat</h3>
<p class="ud2-energy-lead">El <strong>sol, el vent, l'aigua, la biomassa i la calor de la Terra</strong> són fonts renovables. El <strong>petroli, el gas natural, el carbó i l'urani</strong> són no renovables. En una central, una font d'energia es transforma en electricitat.</p>
<p>Moltes centrals comparteixen dues peces: una <strong>turbina</strong> que gira i un <strong>alternador</strong> que transforma el gir en electricitat. El que canvia és com es mou la turbina: amb aigua, amb vapor o amb gasos calents. La <strong>caldera</strong> escalfa aigua per produir vapor; el <strong>condensador</strong> el refreda perquè torni a ser aigua.</p>
<p>La central <strong>hidroelèctrica</strong> utilitza l'aigua i no necessita caldera. La <strong>tèrmica</strong> utilitza calor de la combustió; la <strong>nuclear</strong>, calor de la fissió. Una central <strong>solar fotovoltaica</strong> produeix electricitat directament de la llum, sense turbina.</p>
<section class="ud2-power-plants" aria-label="Esquemes tècnics de centrals elèctriques">
 <h3>Com funciona una central elèctrica?</h3>
<p>En moltes centrals hi ha una <strong>turbina</strong> que gira i mou l'<strong>alternador</strong>, l'aparell que genera electricitat. El que canvia és <strong>d'on surt el moviment</strong>: de l'aigua, dels gasos calents o del vapor.</p>
<p><strong>La caldera o generador de vapor</strong> escalfa aigua per produir vapor que mou una turbina. A les centrals tèrmiques convencionals es fa amb combustibles; a les nuclears la calor surt del reactor. En una central de cicle combinat, la calor recuperada dels gasos genera vapor per a una segona turbina. <strong>No totes les centrals necessiten caldera:</strong> la hidroelèctrica fa girar la turbina amb aigua i la solar fotovoltaica genera electricitat sense turbina.</p>
<h3>Les centrals per dins · fotografia i esquema tècnic</h3>
 <p>Fixa’t en <strong>què fa girar la turbina</strong>. A les tres centrals, el generador (alternador) transforma el moviment de rotació en electricitat.</p>
 <div class="ud2-plant-card hydro">
  <div class="ud2-plant-title"><span>💧</span><div><h4>1. Central hidroelèctrica</h4><p><b>Recurs:</b> aigua embassada o d’un riu · <b>Energia inicial:</b> potencial gravitatòria</p></div></div>
  <figure class="ud2-plant-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ligonchio_hydroelectric_power_plant_and_dam.jpg?width=960" alt="Central hidroelèctrica de Ligonchio al costat de la presa, a Itàlia" loading="lazy" decoding="async"><figcaption>Central hidroelèctrica de Ligonchio: presa i edifici de la central. <a href="https://commons.wikimedia.org/wiki/File:Ligonchio_hydroelectric_power_plant_and_dam.jpg" target="_blank" rel="noopener noreferrer">Foto: Mattia Luigi Nappi · CC BY-SA 3.0</a></figcaption></figure>
  <div class="ud2-plant-flow" role="img" aria-label="Embassament, canonada forçada, turbina hidràulica, alternador i xarxa elèctrica">
   <div class="ud2-plant-node"><span>🏞️</span><b>Embassament</b><small>Aigua en altura</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>↘️</span><b>Canonada forçada</b><small>L’aigua baixa</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚙️</span><b>Turbina</b><small>Gira per l’aigua</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>🔄</span><b>Alternador</b><small>Inducció elèctrica</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚡</span><b>Xarxa</b><small>Electricitat</small></div>
  </div>
  <p class="ud2-plant-transform"><strong>Transformació:</strong> potencial → cinètica → mecànica → elèctrica. <em>L’aigua continua el seu curs després de la turbina.</em></p>
 </div>
 <div class="ud2-plant-card thermal">
  <div class="ud2-plant-title"><span>🔥</span><div><h4>2. Central tèrmica de gas natural</h4><p><b>Recurs:</b> combustible fòssil extret del subsòl · <b>Energia inicial:</b> química</p></div></div>
  <figure class="ud2-plant-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Combined_Cycle_Gas_Fired_Power_Plant.jpg?width=960" alt="Fotografia d'una central tèrmica de cicle combinat alimentada amb gas natural" loading="lazy" decoding="async"><figcaption>Central tèrmica de cicle combinat alimentada amb gas natural. <a href="https://commons.wikimedia.org/wiki/File:Combined_Cycle_Gas_Fired_Power_Plant.jpg" target="_blank" rel="noopener noreferrer">Foto: Peoplepoweredbyenergy · CC BY-SA 4.0</a></figcaption></figure>
  <div class="ud2-plant-flow" role="img" aria-label="Gas natural, cambra de combustió, gasos calents, turbina, alternador i xarxa">
   <div class="ud2-plant-node"><span>🛢️</span><b>Gas natural</b><small>Combustible</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>🔥</span><b>Combustió</b><small>Gasos calents</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚙️</span><b>Turbina de gas</b><small>Gira per l’expansió</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>🔄</span><b>Alternador</b><small>Inducció elèctrica</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚡</span><b>Xarxa</b><small>Electricitat</small></div>
  </div>
  <p class="ud2-plant-transform"><strong>Transformació:</strong> química → tèrmica → mecànica → elèctrica. <em>En cicle combinat, la calor residual produeix vapor per moure una segona turbina.</em></p>
 </div>
 <div class="ud2-plant-card nuclear">
  <div class="ud2-plant-title"><span>☢️</span><div><h4>3. Central nuclear</h4><p><b>Recurs:</b> urani obtingut de minerals · <b>Energia inicial:</b> nuclear</p></div></div>
  <figure class="ud2-plant-photo"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Nuclear_Power_Plant_Cattenom.jpg" alt="Central nuclear de Cattenom, França, amb torres de refrigeració" loading="lazy" decoding="async"><figcaption>Central nuclear de Cattenom (França): les grans torres són de refrigeració, no el reactor. <a href="https://commons.wikimedia.org/wiki/File:Nuclear_Power_Plant_Cattenom.jpg" target="_blank" rel="noopener noreferrer">Foto: Stefan Kühn · CC BY-SA</a></figcaption></figure>
  <div class="ud2-plant-flow" role="img" aria-label="Reactor de fissió, generador de vapor, turbina de vapor, alternador i xarxa">
   <div class="ud2-plant-node"><span>☢️</span><b>Reactor</b><small>Fissió: calor</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>♨️</span><b>Vapor d’aigua</b><small>Intercanvi de calor</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚙️</span><b>Turbina</b><small>Gira pel vapor</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>🔄</span><b>Alternador</b><small>Inducció elèctrica</small></div><i aria-hidden="true">→</i>
   <div class="ud2-plant-node"><span>⚡</span><b>Xarxa</b><small>Electricitat</small></div>
  </div>
  <p class="ud2-plant-transform"><strong>Transformació:</strong> nuclear → tèrmica → mecànica → elèctrica. <em>La fissió allibera calor sense cremar urani; el circuit de vapor es refreda i es reutilitza.</em></p>
 </div>
 <p class="ud2-plant-key"><strong>Pregunta tècnica:</strong> quines dues centrals necessiten calor per moure una turbina? Quina pot moure-la directament amb l’aigua?</p>
</section>
<div class="ud2-energy-check"><span aria-hidden="true">🧠</span><p><strong>Queda’t amb aquesta idea:</strong> l’energia es transforma, però en cada procés una part es dispersa, sovint en forma de calor. Per això estudiem el <em>rendiment</em> de les màquines.</p></div>`;
 return section;
}
function diagram(i){
 const fig=N('figure','ud2-solid-diagram');
 const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 930 226');
 s.setAttribute('role','img');s.setAttribute('aria-label','Esquema didàctic original: '+NOTE[i]);
 function V(tag,attrs,txt){const v=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,val] of Object.entries(attrs))v.setAttribute(k,''+val);if(txt!==undefined)v.textContent=txt;s.append(v);}
 const shades=['#fff0d4','#ffe8f5','#f0e5ff'],edges=['#f18815','#df5bad','#9154df'];
 BOX[i].forEach((pair,j)=>{
  const x=19+j*313;
  V('rect',{x,y:18,width:275,height:137,rx:21,fill:shades[j],stroke:edges[j],'stroke-width':2.5});
  V('text',{x:x+18,y:65,'font-size':31},pair[0]);
  V('text',{x:x+18,y:110,'font-size':21,'font-weight':850,fill:'#57216e'},pair[1]);
  if(j<2)V('path',{d:'M '+(x+283)+' 88 L '+(x+306)+' 88',stroke:'#af82ba','stroke-width':3,'stroke-linecap':'round'});
 });
 V('text',{x:465,y:200,'font-size':16,'font-weight':700,'text-anchor':'middle',fill:'#65406d'},NOTE[i]);
 fig.append(s);A(fig,'figcaption','Esquema original per entendre la teoria · '+NOTE[i]);return fig;
}
function details(sub){
 const deep=sub.querySelector('.ud2-deep');
 const ps=deep?[...deep.querySelectorAll(':scope > p')].map(p=>p.textContent.trim()).filter(Boolean):[];
 return {title:sub.querySelector('.ud2-subtopic-title')?.textContent?.trim()||'Concepte',paragraphs:ps,tip:deep?.querySelector('.ud2-applied p')?.textContent?.trim()||'',definition:sub.querySelector('.lesson21-definition')?.textContent?.trim()||''};
}
function buildChapter(items,title){
 const group=N('section','ud2-solid-chapter');A(group,'h3',title);
 items.forEach(entry=>{
  const block=N('div','ud2-solid-section');A(block,'h4',entry.title);
  if(entry.definition)A(block,'p',entry.definition,'ud2-solid-definition');
  const seen=new Set();
  entry.paragraphs.forEach(p=>{const id=p.toLowerCase().replace(/\s+/g,' ').trim();if(id&&!seen.has(id)){seen.add(id);A(block,'p',p);}});
  if(entry.tip){const p=N('p','ud2-solid-application');A(p,'strong','Aplicació tècnica. ');p.append(document.createTextNode(entry.tip));block.append(p);}
  group.append(block);
 });
 return group;
}
function rewrite(panel,i){
 const subs=[...panel.querySelectorAll(':scope > .ud2-subtopic')],oral=panel.querySelector(':scope > .ud2-oral-questions');
 if(!subs.length)return;
 const entries=subs.map(details);
 const body=N('article','ud2-solid-article');
 const intro=N('div','ud2-solid-intro');A(intro,'p',T[i].intro,'ud2-solid-lead');A(intro,'p',T[i].context);body.append(intro);
 if(i===2)body.append(miningStory());
 const figure=N('figure','ud2-technical-figure');
 const ranges=SEG[i];
 for(let k=0;k<ranges.length-1;k++){
  const slice=entries.slice(ranges[k],Math.min(ranges[k+1],entries.length));
  if(slice.length){
   body.append(buildChapter(slice,H[i][k]||'Contingut tècnic'));
   // Cada imatge apareix DESPRÉS de la teoria a què fa referència.
   if(k===0){
    if(i===2)body.append(miningEnergyChain());
    else body.append(diagram(i));
   }
   if(k===ranges.length-2)body.append(figure);
  }
 }
 const close=N('section','ud2-solid-conclusion');A(close,'strong','✦ Aplicació al taller');A(close,'p',T[i].example);body.append(close);
 subs.forEach(x=>x.remove());
 if(oral)oral.before(body);else panel.append(body);
 if(i===1){
  const explorer=panel.querySelector('#ods-explorer');
  if(explorer)body.append(explorer);
 }
 if(i===3){
  // L’antiga fitxa resum no és una ampliació real; els càlculs ja són dins de la teoria.
  panel.querySelector('#ud2-concepts')?.remove();
  panel.querySelector('.ud2-extension-title')?.remove();
 }
 panel.classList.add('ud2-solid-panel');
 // Il·lustracions originals en SVG: visibles sense xarxes, llicències externes ni errors de càrrega.
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const root=document.querySelector('.ud2-topic-redesign');if(!root)return;
 const panels=[...root.querySelectorAll('.ud2-main-panel')];if(panels.length<9)return;
 panels.slice(0,7).forEach(rewrite);
 
 const intro=root.querySelector('.ud2-tab-intro p');
 if(intro)intro.textContent='Cada teoria és una lectura completa, amb dues il·lustracions tècniques originals situades després de la seva explicació i dues preguntes orals al final.';
 const t=root.querySelector(':scope > p:not(.concept-eyebrow)');
 if(t)t.textContent='Cada apartat conserva tota la teoria seguida, amb dues il·lustracions fetes per explicar els conceptes i les preguntes orals al final.';
 // Els 17 ODS es mantenen a la teoria 2. Els jocs, projecte i debat es conserven.
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();init();};
})();