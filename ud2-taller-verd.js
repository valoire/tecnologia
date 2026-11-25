/* UD2 · Taller verd: set sessions independents dins de la mateixa unitat.
   Conserva la resta dels continguts, el debat i el qüestionari final.
   Navegació sense salts llargs ni dades de l'alumnat. */
(function(){
'use strict';
const S=[
 {icon:'💻',short:'Tinkercad',title:'Comencem amb Tinkercad',
  lead:'Dissenyarem les parets del fanalet. Entrarem a Pixabay, seleccionarem la pestanya «Vectorials» i descarregarem dibuixos de Nadal molt senzills en format .svg per començar el disseny a Tinkercad.',
  theory:'Treballarem amb imatges de Nadal descarregades de Pixabay i les adaptarem al fanalet. Una imatge JPG/PNG serveix de referència; per incorporar-ne el contorn a Tinkercad necessitem un SVG adequat o dibuixar les formes sobre el pla de treball, amb mides reals.',
  goal:'Disseny nou creat, dues imatges de Pixabay descarregades i primeres mides comprovades.',
  tasks:[
   ['📏','MESURA','Observa la peça original, apunta les mides i els punts on encaixa al fanalet.'],
   ['💻','OBRE TINKERCAD','Crea un disseny nou amb el nom «UD2 · Fanalet Nadal».'],
   ['🖼️','BUSCA I DESCARREGA','Entra a Pixabay, cerca dues imatges de Nadal, descarrega-les i tria les que tinguin formes senzilles per poder-les adaptar.'],
   ['✅','COMPROVA','Fes una primera prova del contorn, compara les mides amb el fanalet i desa el projecte.']
  ],links:[['Pixabay · pestanya Vectorials','https://pixabay.com/es/vectors/'],['Obrir Tinkercad','https://www.tinkercad.com/']]},
 {icon:'✏️',short:'Modificacions',title:'Acabem de triar i modificar',
  lead:'Revisarem que els dibuixos de Pixabay siguin vectorials, de formes senzilles i en format .svg, i comprovarem els contorns i les mides del disseny.',
  theory:'Per tallar una forma amb làser necessitem contorns definits, una escala correcta i unions resistents. Els detalls massa fins poden trencar-se i les peces soltes poden caure.',
  goal:'Una proposta millorada, amb els contorns i els encaixos revisats.',
  tasks:[
   ['🖼️','REVISA','Acaba de triar les imatges de Pixabay i identifica quin contorn aprofitaràs de cadascuna.'],
   ['✏️','MODIFICA','Canvia les formes, les mides, els forats i les unions perquè encaixin a la carcassa.'],
   ['👀','COMPARA','Fes dues versions i decideix quina és més fàcil de fabricar i aprofita millor el material.'],
   ['💾','GUARDA','Desa els canvis i fes una captura de la proposta escollida.']
  ],links:[['Pixabay · pestanya Vectorials','https://pixabay.com/es/vectors/'],['Continuar a Tinkercad','https://www.tinkercad.com/']]},
 {icon:'📤',short:'Lliurament',title:'Acabem les modificacions i lliurem',
  lead:'Acabarem els últims canvis i lliurarem els arxius en format .svg perquè la professora els revisi abans de preparar el tall làser.',
  theory:'Un fitxer SVG conserva els contorns vectorials necessaris per preparar el tall. El programa de la talladora ha de verificar les línies, els forats i l’escala 1:1. No tallarem fins que la professora doni el vistiplau.',
  goal:'Disseny final desat, captura i fitxer revisable lliurats a la professora.',
  tasks:[
   ['✏️','ACABA','Fes els últims ajustos i comprova les mides de la decoració.'],
   ['📐','PREPARA EL SVG','Exporta els contorns que s’han de tallar i revisa que tinguin les mides correctes.'],
   ['📸','FES UNA CAPTURA','Guarda una imatge clara del model definitiu.'],
   ['📤','ENVIA','Lliura el disseny, l’SVG i la captura segons les instruccions de la professora.']
  ],links:[['Obrir Tinkercad','https://www.tinkercad.com/'],['Obrir Classroom','https://classroom.google.com/']]},
 {icon:'🧩',short:'micro:bit I',title:'Programació de micro:bit · Part 1',
  lead:'Utilitzarem la IA autoritzada del centre per crear un programa senzill de LEDs amb micro:bit i micro:shield. Cada línia del codi ha de tenir un comentari explicatiu en català. Consulteu la guia del projecte.',
  theory:'MakeCode permet programar la micro:bit amb blocs, esdeveniments, condicions i repeticions. Abans de crear cap bloc cal entendre què ens demana exactament la professora.',
  goal:'Projecte creat i primera versió del programa seguint les consignes explicades a classe.',
  tasks:[
   ['📓','ESCRIU','Anota al quadern els requisits exactes que ha indicat la professora.'],
   ['💻','OBRE MAKECODE','Crea un projecte anomenat «UD2 · Microbit Nadal».'],
   ['🧩','PROGRAMA','Construeix els primers blocs del programa seguint l’ordre de les instruccions.'],
   ['▶️','PROVA','Fes una prova al simulador, identifica els errors i desa el projecte.']
  ],links:[['Obrir Gemini (si està habilitat)','https://gemini.google.com/'],['Obrir MakeCode','https://makecode.microbit.org/']]},
 {icon:'✅',short:'micro:bit II',title:'Programació de micro:bit · Part 2',
  lead:'Amb l’ajuda de la IA autoritzada del centre, revisarem i millorarem el codi de la micro:bit i el comprovarem a MakeCode i al dispositiu.',
  theory:'Programar també vol dir provar, detectar errors i tornar a provar. No podem donar per correcte un programa només perquè els blocs estan col·locats.',
  goal:'Programa acabat, verificat i preparat per transferir-lo a la micro:bit.',
  tasks:[
   ['🧩','ACABA','Incorpora les funcions que faltaven segons les consignes de la professora.'],
   ['▶️','SIMULA','Comprova cada resposta i cada acció que ha de realitzar.'],
   ['🔌','PROVA','Transfereix el programa a la micro:bit i comprova que funciona amb el material del taller.'],
   ['💾','GUARDA','Conserva el projecte i el fitxer .hex per poder muntar-lo després.']
  ],links:[['Obrir Gemini (si està habilitat)','https://gemini.google.com/'],['Continuar a MakeCode','https://makecode.microbit.org/']]},
 {icon:'🎄',short:'Muntatge',title:'Muntem el fanalet de Nadal',
  lead:'Muntarem el fanalet de Nadal amb les peces preparades i la micro:bit, i en comprovarem el funcionament.',
  theory:'Reutilitzarem la carcassa original. Abans del muntatge hem de verificar que les peces encaixin i que el circuit sigui segur. El tall làser i la manipulació elèctrica es faran amb les instruccions i supervisió de la professora.',
  goal:'Fanalet de Nadal muntat, estable i amb el programa comprovat.',
  tasks:[
   ['✂️','REVISA LES PECES','Comprova les peces tallades per la professora i compara-les amb el teu disseny.'],
   ['🧰','MUNTA','Canvia la decoració de Halloween per la de Nadal sense substituir tota la carcassa.'],
   ['🔌','INCORPORA','Col·loca la micro:bit i els elements necessaris segons les instruccions del taller.'],
   ['✅','COMPROVA','Revisa els encaixos, el muntatge, la seguretat i el funcionament.']
  ],links:[]},
 {icon:'🎬',short:'Vídeo final',title:'Vídeo final a Google Classroom',
  lead:'Gravarem un vídeo breu del fanalet acabat i el lliurarem a Google Classroom.',
  theory:'Una presentació tècnica ha de mostrar el procés, el resultat i els motius de les decisions. Podem gravar el projecte i les mans, sense mostrar cares ni dades personals.',
  goal:'Vídeo breu explicatiu lliurat a la tasca indicada de Google Classroom.',
  tasks:[
   ['📝','PREPARA EL GUIÓ','Explica el repte, les peces reutilitzades i les modificacions que has fet.'],
   ['📹','GRAVA','Ensenya el disseny, les peces, la micro:bit i el fanalet acabat.'],
   ['♻️','JUSTIFICA','Explica com el projecte té en compte l’ambient, les persones i el cost.'],
   ['📤','LLIURA','Revisa el vídeo i adjunta’l a la tasca indicada per la professora a Classroom; no el publiquis.']
  ],links:[['Obrir Google Classroom','https://classroom.google.com/']]}
];
function E(tag,cls,content){const e=document.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=content;return e}
function A(parent,tag,cls,content){const el=E(tag,cls,content);parent.append(el);return el}
function makeSession(item,i){
 const pane=E('section','ud2-green-session');pane.id='ud2-green-session-'+(i+1);
 pane.setAttribute('role','region');pane.setAttribute('aria-label','Sessió '+(i+1)+': '+item.title);
 const header=E('header','ud2-green-session-header');
 A(header,'span','ud2-green-big-icon',item.icon).setAttribute('aria-hidden','true');
 const headText=E('div');
 A(headText,'span','ud2-green-eyebrow','TALLER · SESSIÓ '+(i+1)+' DE 7');
 A(headText,'h3','',item.title);
 A(headText,'p','',item.lead);header.append(headText);pane.append(header);
 const guide=A(pane,'a','ud2-green-link','📘 Guia del projecte · Fanalet de Nadal'); guide.href='projecte-fanalet-nadal.html';
 if(item.links.length){
  A(pane,'p','ud2-green-open-label','🌐 PÀGINES QUE HAS D’OBRIR');
  const links=E('div','ud2-green-links');
  item.links.forEach(([label,href])=>{
   const link=A(links,'a','ud2-green-link',label+' ↗');
   link.href=href;link.target='_blank';link.rel='noopener noreferrer';
  });
  pane.append(links);
 }else{
  A(pane,'p','ud2-green-no-web','🌿 Avui no cal obrir cap web: treballarem al taller amb el material de classe.');
 }
 return pane;
}
function setupWorkshop(){
 const project=document.getElementById('ud2-main-panel-7');
 const topTab=document.getElementById('ud2-main-tab-7');
 if(!project||!topTab||project.dataset.greenWorkshop==='yes')return;
 project.dataset.greenWorkshop='yes';project.classList.add('ud2-green-workshop-panel');
 topTab.classList.add('ud2-green-main-tab');
 const words=topTab.querySelector('.ud2-main-tab-words');
 const badge=words?.querySelector('small'),name=words?.querySelector('strong');
 if(badge)badge.textContent='TALLER · 7 SESSIONS';
 if(name)name.textContent='Taller';
 const icon=topTab.querySelector('.ud2-main-icon');
 if(icon)icon.textContent='🛠️';
 const header=project.querySelector('.ud2-main-topic-head');
 if(header){
  header.classList.add('ud2-green-head');
  const eyebrow=header.querySelector('.ud2-main-eyebrow');
  if(eyebrow)eyebrow.textContent='🌿 PROJECTE DE NADAL · 7 SESSIONS';
  const h=header.querySelector('h2');
  if(h)h.textContent='Taller · Fanalet de Nadal';
  const p=header.querySelector('p');
  if(p)p.textContent='Segueix les set sessions en ordre. Cada sessió explica què farem i inclou les pàgines que has d’obrir.';
 }
 // Conservem la informació original del projecte dins de la sessió de muntatge.
 const originals=[...project.children].filter(node=>node!==header);
 originals.forEach(node=>node.remove()); // Eliminem la fitxa antiga, ja que les sessions només mostren una frase i enllaços.
 const wrapper=E('div','ud2-green-inner');
 const chooser=E('div','ud2-green-index-intro');
 A(chooser,'strong','','Tria el lliurament que vols treballar');
 A(chooser,'span','','Dos projectes independents: disseny i programació.');
 const index=E('nav','ud2-green-session-index');
 index.setAttribute('aria-label','Accés ràpid a les set sessions del taller');
 const panes=E('div','ud2-green-panels');
 [{icon:'🎨',short:'1 · Parets del fanalet',anchor:'parets'},{icon:'💡',short:'2 · Programació micro:bit',anchor:'programacio'}].forEach((item,i)=>{
  const btn=E('button','ud2-green-index-card');btn.type='button';
  btn.setAttribute('aria-label','Anar a la sessió '+(i+1)+': '+item.title);
  A(btn,'span','ud2-green-index-icon',item.icon).setAttribute('aria-hidden','true');
  const words=E('span','ud2-green-index-words');
  A(words,'small','',(i+1)+'. TALLER');
  A(words,'strong','',item.short);
  btn.append(words);index.append(btn);
  
  btn.addEventListener('click',()=>document.getElementById(item.anchor)?.scrollIntoView({
   block:'start',
   behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'
  }));
 });
 wrapper.append(chooser,index);
 // Igual que a teoria: primer l'índex de targetes i, just a sota, la capçalera del taller.
 if(header)wrapper.append(header);
 const deliveries=E('div','fanalet-native');deliveries.id='fanalet-lliuraments'; const style=E('style');style.textContent='.fanalet-native section{background:white;border:1px solid #c8ded1;border-radius:16px;padding:24px;margin:18px 0;color:#18372d}.fanalet-native h2{color:#14553e}.fanalet-native svg{max-width:100%;height:auto}.fanalet-native pre{white-space:pre-wrap;background:#172c25;color:#fff;padding:18px;border-radius:12px}.fanalet-native td,.fanalet-native th{padding:9px;border-bottom:1px solid #ddd}.fanalet-native .rule{background:#fff5e6;border-left:5px solid #bc641d;padding:14px}.fanalet-native label{display:block;margin:8px 0}.fanalet-native button{padding:10px;background:#14553e;color:white;border:0;border-radius:8px}';deliveries.append(style);const content=E('div');content.innerHTML="<section id=\"parets\"><h2>LLIURAMENT 1 · Les parets del fanalet</h2><p>Reutilitza la carcassa del fanalet de Halloween. Dissenya les parets nadalenques a Tinkercad, prepara els SVG i lliura'ls per a la revisió abans del tall làser. Incorpora LEDs controlats per una micro:bit i una micro:shield. El programa ha de ser senzill i l'has d'entendre completament.</p><h3>Instruccions pas a pas</h3><ol><li><b>Mesura la paret original.</b> Anota l'amplada, l'alçada i els encaixos de la carcassa que reutilitzarem.</li><li><b>Busca una imatge nadalenca.</b> Entra a <a href=\"https://pixabay.com/es/vectors/\">Pixabay</a>, selecciona Vectorials i tria una figura senzilla: arbre, estrella, campana o floc de neu.</li><li><b>Descarrega el fitxer SVG.</b> No utilitzis una captura JPG o PNG com a fitxer de tall.</li><li><b>Obre Tinkercad.</b> Crea el disseny, importa l'SVG i treballa sobre el pla en 2D (vista superior). Adapta les dimensions de la figura a les de la paret.</li><li><b>Prepara el contorn.</b> Comprova que les unions siguin resistents, que no quedin peces soltes i que els encaixos originals es conservin.</li><li><b>Exporta i revisa.</b> Exporta l'SVG del disseny definitiu i comprova l'escala abans del tall. No utilitzis la talladora sense autorització.</li></ol><div class=\"rule\"><b>Què has de lliurar a Classroom?</b><p>El disseny de Tinkercad, el fitxer SVG original de Pixabay, l'SVG final de les parets i una captura del resultat.</p></div><p><a href=\"https://www.tinkercad.com/\">Obrir Tinkercad</a> · <a href=\"https://classroom.google.com/\">Obrir Classroom</a></p></section><section id=\"programacio\"><h2>LLIURAMENT 2 · Programació de la micro:bit</h2><p>Programarem la il·luminació i el so del fanalet amb ajuda de la intel·ligència artificial.</p><div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px\"><div style=\"padding:16px;border:1px solid #d2e4da;border-radius:12px;text-align:center\"><strong style=\"font-size:28px\">12</strong><div>LEDs com a mínim</div></div><div style=\"padding:16px;border:1px solid #d2e4da;border-radius:12px;text-align:center\"><strong style=\"font-size:28px\">🔴 🟡 🟢</strong><div>3 colors diferents com a mínim</div></div><div style=\"padding:16px;border:1px solid #d2e4da;border-radius:12px;text-align:center\"><strong style=\"font-size:28px\">♫</strong><div>Melodia nadalenca</div></div><div style=\"padding:16px;border:1px solid #d2e4da;border-radius:12px;text-align:center\"><strong style=\"font-size:28px\">&lt;/></strong><div>Codi senzill</div></div><div style=\"padding:16px;border:1px solid #d2e4da;border-radius:12px;text-align:center\"><strong style=\"font-size:28px\">//</strong><div>Comentari a cada línia</div></div></div><p>El circuit ha de tenir branques en paral·lel, amb un màxim de tres LEDs en sèrie per branca quan l'alimentació ho permeti. Cada alumne ha de saber explicar el programa complet.</p></section><section><h2>2.1. Coneix la micro:bit i la micro:shield</h2><figure style=\"margin:18px 0\"><img src=\"imatges/microshield-ports.svg\" alt=\"Guia visual original de la micro:shield amb els ports i les connexions\" style=\"display:block;width:100%;height:auto;border-radius:10px\"><figcaption>Micro:shield · guia visual dels ports. Nota: el selector 3V/5V correspon al grup de pins blaus; no connectis motors directament als pins de senyal.</figcaption></figure><p><b>micro:bit:</b> és el cervell que executa el programa. <b>micro:shield:</b> és la placa d'expansió que facilita la connexió dels components. Amb l'alimentació desconnectada, insereix la micro:bit al connector de la shield en l'orientació indicada per la professora, sense forçar-la.</p><table><tr><th>Ports</th><th>Ús</th></tr><tr><td>P0, P1, P2</td><td>LEDs: recomanats per començar.</td></tr><tr><td>P3, P4, P6, P7, P8</td><td>Altres sortides; alguns comparteixen funcions amb la pantalla LED de la micro:bit. No hi ha P5 en aquest grup.</td></tr><tr><td>S0–S7</td><td>Servomotors; no són necessaris per al fanalet.</td></tr><tr><td>M1–M4</td><td>Motors DC; no són necessaris.</td></tr></table></section><section><h2>2.2. Connectem un LED</h2><p>Per a un LED convencional, connecta el pin de senyal P0 a una resistència de 330 Ω i després a l'ànode (+) del LED; connecta el càtode (−) a G. No connectis el LED directament a 3V si el vols controlar amb el programa. Si utilitzes un mòdul LED de tres pins, comprova les etiquetes S, V i G i la tensió amb la professora.</p><svg viewBox=\"0 0 600 120\" role=\"img\" aria-label=\"Circuit P0 resistència LED G\"><g stroke=\"#29483d\" stroke-width=\"3\" fill=\"none\"><path d=\"M60 60 H145 l10 -12 15 24 15 -24 15 24 15 -24 10 12 H290\"/><path d=\"M290 40 L330 60 L290 80 Z M330 40 V80 M330 60 H530\"/></g><g font-size=\"16\" fill=\"#18372d\"><text x=\"25\" y=\"65\">P0</text><text x=\"145\" y=\"30\">330 Ω</text><text x=\"285\" y=\"105\">LED + → −</text><text x=\"540\" y=\"65\">G</text></g></svg><p>Comença amb un LED i comprova que funciona abans d'afegir-ne més. No canviïs cables amb l'alimentació connectada.</p></section><section><h2>2.3. Circuit de 12 LEDs: sèrie i paral·lel</h2><p>Proposta de disseny: quatre branques en paral·lel, cadascuna amb tres LEDs en sèrie i una resistència pròpia. Total: 4 × 3 = 12 LEDs. Exemple de colors: vermell, verd i groc.</p><svg viewBox=\"0 0 690 280\" role=\"img\" aria-label=\"Quatre branques en paral·lel amb tres LEDs i una resistència en cada branca\"><g fill=\"none\" stroke=\"#29483d\" stroke-width=\"3\"><path d=\"M80 30 V220 M560 30 V220\"/></g><text x=\"80\" y=\"20\" text-anchor=\"middle\">+ V externa</text><text x=\"560\" y=\"20\" text-anchor=\"middle\">Retorn −</text><g transform=\"translate(0 55)\"><path d=\"M80 0 H130 M190 0 H235 M270 0 H330 M365 0 H425 M460 0 H560\" stroke=\"#29483d\" stroke-width=\"2.5\"/><rect x=\"130\" y=\"-9\" width=\"60\" height=\"18\" fill=\"white\" stroke=\"#29483d\"/><text x=\"160\" y=\"-15\" text-anchor=\"middle\" font-size=\"12\">R1</text><path d=\"M235 -12 L260 0 L235 12 Z M260 -13 V13 M260 0 H270\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M330 -12 L355 0 L330 12 Z M355 -13 V13 M355 0 H365\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M425 -12 L450 0 L425 12 Z M450 -13 V13 M450 0 H460\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><circle cx=\"80\" r=\"4\" fill=\"#29483d\"/><circle cx=\"560\" r=\"4\" fill=\"#29483d\"/><text x=\"600\" y=\"5\" font-size=\"12\">Branca 1</text></g><g transform=\"translate(0 110)\"><path d=\"M80 0 H130 M190 0 H235 M270 0 H330 M365 0 H425 M460 0 H560\" stroke=\"#29483d\" stroke-width=\"2.5\"/><rect x=\"130\" y=\"-9\" width=\"60\" height=\"18\" fill=\"white\" stroke=\"#29483d\"/><text x=\"160\" y=\"-15\" text-anchor=\"middle\" font-size=\"12\">R2</text><path d=\"M235 -12 L260 0 L235 12 Z M260 -13 V13 M260 0 H270\" fill=\"#16a34a\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M330 -12 L355 0 L330 12 Z M355 -13 V13 M355 0 H365\" fill=\"#16a34a\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M425 -12 L450 0 L425 12 Z M450 -13 V13 M450 0 H460\" fill=\"#16a34a\" stroke=\"#29483d\" stroke-width=\"2\"/><circle cx=\"80\" r=\"4\" fill=\"#29483d\"/><circle cx=\"560\" r=\"4\" fill=\"#29483d\"/><text x=\"600\" y=\"5\" font-size=\"12\">Branca 2</text></g><g transform=\"translate(0 165)\"><path d=\"M80 0 H130 M190 0 H235 M270 0 H330 M365 0 H425 M460 0 H560\" stroke=\"#29483d\" stroke-width=\"2.5\"/><rect x=\"130\" y=\"-9\" width=\"60\" height=\"18\" fill=\"white\" stroke=\"#29483d\"/><text x=\"160\" y=\"-15\" text-anchor=\"middle\" font-size=\"12\">R3</text><path d=\"M235 -12 L260 0 L235 12 Z M260 -13 V13 M260 0 H270\" fill=\"#eab308\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M330 -12 L355 0 L330 12 Z M355 -13 V13 M355 0 H365\" fill=\"#eab308\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M425 -12 L450 0 L425 12 Z M450 -13 V13 M450 0 H460\" fill=\"#eab308\" stroke=\"#29483d\" stroke-width=\"2\"/><circle cx=\"80\" r=\"4\" fill=\"#29483d\"/><circle cx=\"560\" r=\"4\" fill=\"#29483d\"/><text x=\"600\" y=\"5\" font-size=\"12\">Branca 3</text></g><g transform=\"translate(0 220)\"><path d=\"M80 0 H130 M190 0 H235 M270 0 H330 M365 0 H425 M460 0 H560\" stroke=\"#29483d\" stroke-width=\"2.5\"/><rect x=\"130\" y=\"-9\" width=\"60\" height=\"18\" fill=\"white\" stroke=\"#29483d\"/><text x=\"160\" y=\"-15\" text-anchor=\"middle\" font-size=\"12\">R4</text><path d=\"M235 -12 L260 0 L235 12 Z M260 -13 V13 M260 0 H270\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M330 -12 L355 0 L330 12 Z M355 -13 V13 M355 0 H365\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><path d=\"M425 -12 L450 0 L425 12 Z M450 -13 V13 M450 0 H460\" fill=\"#dc2626\" stroke=\"#29483d\" stroke-width=\"2\"/><circle cx=\"80\" r=\"4\" fill=\"#29483d\"/><circle cx=\"560\" r=\"4\" fill=\"#29483d\"/><text x=\"600\" y=\"5\" font-size=\"12\">Branca 4</text></g></svg><div class=\"rule\"><b>Atenció:</b> aquest és un esquema de càrrega, no una connexió directa a la micro:shield. Els pins P0–P8 són de senyal de 3 V i no poden alimentar tres LEDs en sèrie. Cal una font externa de baixa tensió adequada, resistències calculades segons els LEDs i un controlador de commutació compatible amb 3 V (amb terra comuna). La professora validarà el muntatge abans de connectar-lo. Si només disposem de 3 V, caldrà redissenyar el circuit amb un LED per branca i resistència individual, amb controlador adequat al corrent total.</div><p>Per controlar les quatre branques per separat es necessiten quatre canals de control. Els pins i els components definitius es fixaran després de verificar el material del taller.</p></section><section><h2>2.4. Programació amb IA</h2><p>Obre <a href=\"https://makecode.microbit.org/\">MakeCode</a> i crea un projecte. Utilitza la IA autoritzada pel centre per generar codi JavaScript de MakeCode, no JavaScript genèric.</p><div class=\"rule\"><b>Obligatori:</b> cada línia executable ha de tenir un comentari en català que expliqui què fa. No s'accepta un programa que no puguis explicar línia per línia.</div><h3>Prompt orientatiu</h3><pre id=\"prompt\">Soc alumne de 4t d'ESO. Vull programar un fanalet de Nadal amb micro:bit i micro:shield. El fanalet ha de tenir almenys 12 LEDs de 3 colors diferents i una melodia nadalenca. El circuit té branques en paral·lel controlades mitjançant [indica el controlador i els pins validats]. Vull que [descriu la seqüència de llums i la melodia]. No connectis les branques de tres LEDs directament als pins. Si la micro:bit no té altaveu integrat, indica una connexió d’àudio compatible i evita conflictes amb P0. Genera un programa senzill en JavaScript per a Microsoft MakeCode micro:bit. Utilitza instruccions bàsiques, sense extensions innecessàries. Escriu un comentari en català a cada línia executable i explica què significa cada instrucció. Indica les connexions i com comprovar el programa.</pre><button onclick=\"navigator.clipboard.writeText(document.getElementById('prompt').innerText).then(()=>this.textContent='Copiat!').catch(()=>this.textContent='Selecciona el text i copia’l')\">Copia el prompt</button><h3>Com treballarem amb la IA?</h3><ol><li>Decideix quina seqüència de llums i melodia vols fer.</li><li>Anota els pins de control validats per la professora i el material real.</li><li>Demana el codi a la IA amb el prompt anterior.</li><li>Llegeix cada comentari: identifica el pin, l’acció i el temps. Si no entens una línia, demana una explicació més senzilla.</li><li>Enganxa el codi a JavaScript de MakeCode i prova’l. Comprova també la melodia; si utilitzes P0 per a àudio, no l’utilitzis simultàniament per a llums.</li><li>Modifica un temps o una seqüència i explica què canvia.</li></ol><h3>Exemple mínim: un LED intermitent</h3><pre>basic.forever(function () { // Repeteix les instruccions contínuament.\n    pins.digitalWritePin(DigitalPin.P0, 1) // Encén el LED del pin P0.\n    basic.pause(500) // Espera mig segon.\n    pins.digitalWritePin(DigitalPin.P0, 0) // Apaga el LED del pin P0.\n    basic.pause(500) // Espera mig segon.\n}) // Final del bloc de repetició.</pre><p>1 = encès; 0 = apagat (en el circuit de LED convencional mostrat). 500 ms = mig segon. Adapta l'exemple al teu disseny, no el copiïs sense entendre'l.</p><p><a href=\"https://gemini.google.com/\">Obrir Gemini (si està habilitat)</a> · <a href=\"https://makecode.microbit.org/\">Obrir MakeCode</a></p></section><section><h2>2.5. Prova i lliurament</h2><p>Enganxa el codi a la pestanya JavaScript de MakeCode, comprova que no hi ha errors i prova el comportament al simulador. Descarrega el fitxer .hex i transfereix-lo a la micro:bit per USB. Comprova els LEDs físics al taller amb la professora.</p><label><input type=\"checkbox\"> 12 LEDs com a mínim i 3 colors diferents.</label><label><input type=\"checkbox\"> Circuit en paral·lel revisat per la professora.</label><label><input type=\"checkbox\"> Melodia nadalenca comprovada.</label><label><input type=\"checkbox\"> Pins i connexions identificats.</label><label><input type=\"checkbox\"> Programa senzill amb comentaris a cada línia.</label><label><input type=\"checkbox\"> Puc explicar el codi i modificar els temps.</label><label><input type=\"checkbox\"> Fanalet muntat i LEDs comprovats.</label><p>Lliura el fitxer .hex, el codi comentat, un esquema amb els pins utilitzats i el vídeo de comprovació de la llum i la melodia a la segona tasca de Classroom.</p><a href=\"https://classroom.google.com/\">Obrir Classroom</a></section>";deliveries.append(content);wrapper.append(deliveries);project.append(wrapper);
 const intro=document.querySelector('.ud2-tab-intro');
 if(intro){
  const p=intro.querySelector('p');
  if(p)p.textContent='Tria una teoria o entra al TALLER verd, amb les set sessions seguides de Tinkercad, micro:bit, muntatge i vídeo final.';
 }
}
function setupFirstSession(){
 const panel=document.getElementById('ud2-main-panel-0');
 const session=panel?.querySelector('#ud2-sessio-1');
 const nav=session?.querySelector('.ud2-session-progress');
 if(!session||!nav||session.dataset.greenNavigation==='yes')return;
 const theory=session.querySelector('#ud2-sessio-1-teoria');
 const activity=session.querySelector('#ud2-sessio-1-activitat');
 const oldWorkshop=session.querySelector('#ud2-sessio-1-taller');
 const buttons=[...nav.querySelectorAll('.ud2-session-progress-step')];
 if(!theory||!activity||!oldWorkshop||buttons.length!==3)return;
 session.dataset.greenNavigation='yes';
 // Taller és un apartat independent, accessible des del botó verd de la sessió.
 const panels=[theory,activity];
 buttons.forEach((anchor,i)=>{
  const b=E('button','ud2-session-progress-step'+(i===2?' ud2-session-go-workshop':''));
  b.type='button';b.innerHTML=anchor.innerHTML;
  b.setAttribute('aria-label',i===0?'Obrir la teoria':i===1?'Obrir l’activitat':'Obrir el taller verd amb set sessions');
  if(i<2){b.setAttribute('aria-controls',panels[i].id);}
  anchor.replaceWith(b);
  buttons[i]=b;
 });
 nav.setAttribute('role','tablist');
 nav.setAttribute('aria-label','Teoria, activitat i taller');
 function select(i){
  theory.hidden=i!==0;activity.hidden=i!==1;
  buttons.slice(0,2).forEach((b,j)=>{
   b.setAttribute('role','tab');b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1;
   b.classList.toggle('is-current',i===j);
  });
  const goal=session.querySelector('.ud2-session-goal');
  if(goal)goal.textContent=i===0?'📖 TEORIA · Aprèn els conceptes i les tres dimensions de la sostenibilitat.':'📓 ACTIVITAT · Debateu, decidiu i escriviu una justificació amb les tres dimensions.';
 }
 buttons[0].addEventListener('click',()=>select(0));
 buttons[1].addEventListener('click',()=>select(1));
 buttons[2].addEventListener('click',()=>{
  const main=document.getElementById('ud2-main-tab-7');
  if(main)main.click();
 });
 [0,1].forEach(i=>buttons[i].addEventListener('keydown',ev=>{
  let next=null;
  if(ev.key==='ArrowRight')next=(i+1)%2;
  if(ev.key==='ArrowLeft')next=(i+1)%2;
  if(ev.key==='Home')next=0;
  if(ev.key==='End')next=1;
  if(next!==null){ev.preventDefault();select(next);buttons[next].focus({preventScroll:true});}
 }));
 // L'antiga cronologia de quatre sessions ha estat substituïda per les set del taller.
 oldWorkshop.remove();
 const obsolete=document.querySelector('#ud2-main-panel-0 > .ud2-session-next');
 if(obsolete)obsolete.remove();
 const description=panel.querySelector('.ud2-main-topic-head > p');
 if(description)description.textContent='Teoria i activitat d’aquesta primera sessió. El taller pràctic té un apartat verd independent amb set sessions.';
 select(0);
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 setupWorkshop();
 setupFirstSession();
 // Retirem les dues franges informatives superiors a petició de la docent.
 // Es mantenen el menú de pestanyes, la teoria i el taller verd.
 document.querySelector('.ud2-topic-redesign .ud2-tab-intro')?.remove();
 document.querySelector('.ud2-topic-redesign .ud2-easy-toolbar')?.remove();
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();init()};
})();