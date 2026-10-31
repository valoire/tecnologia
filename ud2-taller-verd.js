/* UD2 · Taller verd: set sessions independents dins de la mateixa unitat.
   Conserva la resta dels continguts, el debat i el qüestionari final.
   Navegació sense salts llargs ni dades de l'alumnat. */
(function(){
'use strict';
const S=[
 {icon:'💻',short:'Tinkercad',title:'Comencem amb Tinkercad',
  lead:'Preparem el disseny de Nadal que substituirà la decoració del fanalet de Halloween.',
  theory:'Treballarem amb imatges de Nadal descarregades de Pixabay i les adaptarem al fanalet. Una imatge JPG/PNG serveix de referència; per incorporar-ne el contorn a Tinkercad necessitem un SVG adequat o dibuixar les formes sobre el pla de treball, amb mides reals.',
  goal:'Disseny nou creat, dues imatges de Pixabay descarregades i primeres mides comprovades.',
  tasks:[
   ['📏','MESURA','Observa la peça original, apunta les mides i els punts on encaixa al fanalet.'],
   ['💻','OBRE TINKERCAD','Crea un disseny nou amb el nom «UD2 · Fanalet Nadal».'],
   ['🖼️','BUSCA I DESCARREGA','Entra a Pixabay, cerca dues imatges de Nadal, descarrega-les i tria les que tinguin formes senzilles per poder-les adaptar.'],
   ['✅','COMPROVA','Fes una primera prova del contorn, compara les mides amb el fanalet i desa el projecte.']
  ],links:[['Buscar imatges a Pixabay','https://pixabay.com/es/'],['Obrir Tinkercad','https://www.tinkercad.com/']]},
 {icon:'✏️',short:'Modificacions',title:'Acabem de triar i modificar',
  lead:'Revisem les imatges descarregades de Pixabay i modifiquem les formes perquè encaixin al fanalet.',
  theory:'Per tallar una forma amb làser necessitem contorns definits, una escala correcta i unions resistents. Els detalls massa fins poden trencar-se i les peces soltes poden caure.',
  goal:'Una proposta millorada, amb els contorns i els encaixos revisats.',
  tasks:[
   ['🖼️','REVISA','Acaba de triar les imatges de Pixabay i identifica quin contorn aprofitaràs de cadascuna.'],
   ['✏️','MODIFICA','Canvia les formes, les mides, els forats i les unions perquè encaixin a la carcassa.'],
   ['👀','COMPARA','Fes dues versions i decideix quina és més fàcil de fabricar i aprofita millor el material.'],
   ['💾','GUARDA','Desa els canvis i fes una captura de la proposta escollida.']
  ],links:[['Tornar a Pixabay','https://pixabay.com/es/'],['Continuar a Tinkercad','https://www.tinkercad.com/']]},
 {icon:'📤',short:'Lliurament',title:'Acabem les modificacions i lliurem',
  lead:'Deixem el disseny preparat perquè la professora el pugui revisar.',
  theory:'Un fitxer SVG conserva els contorns vectorials necessaris per preparar el tall. El programa de la talladora ha de verificar les línies, els forats i l’escala 1:1. No tallarem fins que la professora doni el vistiplau.',
  goal:'Disseny final desat, captura i fitxer revisable lliurats a la professora.',
  tasks:[
   ['✏️','ACABA','Fes els últims ajustos i comprova les mides de la decoració.'],
   ['📐','PREPARA EL SVG','Exporta els contorns que s’han de tallar i revisa que tinguin les mides correctes.'],
   ['📸','FES UNA CAPTURA','Guarda una imatge clara del model definitiu.'],
   ['📤','ENVIA','Lliura el disseny, l’SVG i la captura segons les instruccions de la professora.']
  ],links:[['Obrir Tinkercad','https://www.tinkercad.com/'],['Obrir Classroom','https://classroom.google.com/']]},
 {icon:'🧩',short:'micro:bit I',title:'Programació de micro:bit · Part 1',
  lead:'Comencem el programa que controlarà el nostre projecte de Nadal.',
  theory:'MakeCode permet programar la micro:bit amb blocs, esdeveniments, condicions i repeticions. Abans de crear cap bloc cal entendre què ens demana exactament la professora.',
  goal:'Projecte creat i primera versió del programa seguint les consignes explicades a classe.',
  tasks:[
   ['📓','ESCRIU','Anota al quadern els requisits exactes que ha indicat la professora.'],
   ['💻','OBRE MAKECODE','Crea un projecte anomenat «UD2 · Microbit Nadal».'],
   ['🧩','PROGRAMA','Construeix els primers blocs del programa seguint l’ordre de les instruccions.'],
   ['▶️','PROVA','Fes una prova al simulador, identifica els errors i desa el projecte.']
  ],links:[['Obrir MakeCode','https://makecode.microbit.org/']]},
 {icon:'✅',short:'micro:bit II',title:'Programació de micro:bit · Part 2',
  lead:'Acabem el programa i comprovem que compleix tots els requisits.',
  theory:'Programar també vol dir provar, detectar errors i tornar a provar. No podem donar per correcte un programa només perquè els blocs estan col·locats.',
  goal:'Programa acabat, verificat i preparat per transferir-lo a la micro:bit.',
  tasks:[
   ['🧩','ACABA','Incorpora les funcions que faltaven segons les consignes de la professora.'],
   ['▶️','SIMULA','Comprova cada resposta i cada acció que ha de realitzar.'],
   ['🔌','PROVA','Transfereix el programa a la micro:bit i comprova que funciona amb el material del taller.'],
   ['💾','GUARDA','Conserva el projecte i el fitxer .hex per poder muntar-lo després.']
  ],links:[['Continuar a MakeCode','https://makecode.microbit.org/']]},
 {icon:'🎄',short:'Muntatge',title:'Muntem el fanalet de Nadal',
  lead:'Col·loquem les peces noves i la micro:bit al fanalet que ja teníem.',
  theory:'Reutilitzarem la carcassa original. Abans del muntatge hem de verificar que les peces encaixin i que el circuit sigui segur. El tall làser i la manipulació elèctrica es faran amb les instruccions i supervisió de la professora.',
  goal:'Fanalet de Nadal muntat, estable i amb el programa comprovat.',
  tasks:[
   ['✂️','REVISA LES PECES','Comprova les peces tallades per la professora i compara-les amb el teu disseny.'],
   ['🧰','MUNTA','Canvia la decoració de Halloween per la de Nadal sense substituir tota la carcassa.'],
   ['🔌','INCORPORA','Col·loca la micro:bit i els elements necessaris segons les instruccions del taller.'],
   ['✅','COMPROVA','Revisa els encaixos, el muntatge, la seguretat i el funcionament.']
  ],links:[]},
 {icon:'🎬',short:'Vídeo final',title:'Vídeo final a Google Classroom',
  lead:'Mostrem com hem transformat el fanalet i què hem après.',
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
 pane.setAttribute('role','tabpanel');pane.setAttribute('aria-labelledby','ud2-green-tab-'+(i+1));pane.hidden=true;
 const header=E('header','ud2-green-session-header');
 A(header,'span','ud2-green-big-icon',item.icon).setAttribute('aria-hidden','true');
 const headText=E('div');
 A(headText,'span','ud2-green-eyebrow','TALLER · SESSIÓ '+(i+1)+' DE 7');
 A(headText,'h3','',item.title);
 A(headText,'p','',item.lead);header.append(headText);pane.append(header);
 const theory=E('div','ud2-green-theory');
 A(theory,'strong','','💡 ABANS DE COMENÇAR · Què cal saber?');
 A(theory,'p','',item.theory);pane.append(theory);
 A(pane,'h4','ud2-green-task-title','🛠️ Què toca fer en aquesta sessió?');
 const list=E('ol','ud2-green-task-list');
 item.tasks.forEach(([icon,verb,detail],k)=>{
  const li=E('li','ud2-green-task');
  A(li,'span','ud2-green-task-number',String(k+1).padStart(2,'0'));
  A(li,'span','ud2-green-task-icon',icon).setAttribute('aria-hidden','true');
  const words=E('div','ud2-green-task-words');
  A(words,'strong','',verb);A(words,'p','',detail);li.append(words);list.append(li);
 });pane.append(list);
 const goal=E('aside','ud2-green-result');
 A(goal,'strong','','✅ Al final de la sessió hem de tenir…');
 A(goal,'p','',item.goal);pane.append(goal);
 if(item.links.length){
  const links=E('div','ud2-green-links');
  item.links.forEach(([label,href])=>{const link=A(links,'a','ud2-green-link',label+' ↗');link.href=href;link.target='_blank';link.rel='noopener noreferrer';});
  pane.append(links);
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
  if(h)h.textContent='Taller · Del fanalet de Halloween al de Nadal';
  const p=header.querySelector('p');
  if(p)p.textContent='Tria la sessió del taller. Cada dia veuràs només la teoria breu, les tasques i el resultat d’aquell dia.';
 }
 // Conservem la informació original del projecte dins de la sessió de muntatge.
 const originals=[...project.children].filter(node=>node!==header);
 const wrapper=E('div','ud2-green-inner');
 const nav=E('div','ud2-green-tablist');nav.setAttribute('role','tablist');nav.setAttribute('aria-label','Set sessions del taller');
 const panes=E('div','ud2-green-panels');
 const buttons=[],contents=[];
 S.forEach((item,i)=>{
  const btn=E('button','ud2-green-tab');btn.type='button';btn.id='ud2-green-tab-'+(i+1);
  btn.setAttribute('role','tab');btn.setAttribute('aria-controls','ud2-green-session-'+(i+1));
  A(btn,'span','ud2-green-tab-icon',item.icon).setAttribute('aria-hidden','true');
  const name=E('span','ud2-green-tab-words');
  A(name,'small','','SESSIÓ '+(i+1));A(name,'strong','',item.short);
  btn.append(name);nav.append(btn);buttons.push(btn);
  const pane=makeSession(item,i);panes.append(pane);contents.push(pane);
 });
 if(originals.length){
  const reference=E('details','ud2-green-original-material');
  A(reference,'summary','','📎 Fitxa del projecte i recursos anteriors');
  const block=E('div','ud2-green-original-body');originals.forEach(node=>block.append(node));
  reference.append(block);contents[5].append(reference);
 }
 wrapper.append(nav,panes);project.append(wrapper);
 function select(index,focus=false){
  buttons.forEach((btn,j)=>{
   const active=j===index;
   btn.setAttribute('aria-selected',String(active));btn.tabIndex=active?0:-1;
   btn.classList.toggle('is-active',active);
   contents[j].hidden=!active;
  });
  if(focus)buttons[index].focus({preventScroll:true});
 }
 buttons.forEach((btn,i)=>{
  btn.addEventListener('click',()=>select(i));
  btn.addEventListener('keydown',ev=>{
   let next=null;
   if(ev.key==='ArrowRight')next=(i+1)%buttons.length;
   if(ev.key==='ArrowLeft')next=(i+buttons.length-1)%buttons.length;
   if(ev.key==='Home')next=0;
   if(ev.key==='End')next=buttons.length-1;
   if(next!==null){ev.preventDefault();select(next,true);}
  });
 });
 select(0);
 const intro=document.querySelector('.ud2-tab-intro');
 if(intro){
  const p=intro.querySelector('p');
  if(p)p.textContent='Tria una teoria o entra al TALLER verd. Dins del taller trobaràs les set sessions de Tinkercad, micro:bit, muntatge i vídeo final.';
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
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();init()};
})();