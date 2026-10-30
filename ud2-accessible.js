/* UD2: Disseny inclusiu i accessible per a 4t d'ESO.
   Aquesta capa només reorganitza la PRESENTACIÓ: mai no esborra la teoria,
   les 2 preguntes orals ni les 10 preguntes globals.
*/
(function(){
'use strict';
const TOPICS=[{"accent":"sostenibilitat","ideas":[["🌿","Ambiental","Materials, energia, residus i emissions."],["🤝","Social","Seguretat, salut, accés i participació."],["💶","Econòmica","Cost total, durada i possibilitat de reparació."]],"remember":"Una tecnologia sostenible equilibra l’impacte ambiental, el benestar social i la viabilitat econòmica.","avoid":"Una etiqueta «eco» no demostra, per si sola, que un producte sigui sostenible."},{"accent":"ods","ideas":[["🌍","17 objectius","Un acord internacional amb metes per al 2030."],["📊","Indicadors","Cal mesurar dades per saber si millorem."],["🔧","Tecnologia","Aigua, energia, indústria i consum responsable."]],"remember":"Cada projecte tecnològic ha de relacionar la seva actuació amb un ODS i una dada que permeti valorar-la.","avoid":"Els ODS no són una única llei ni una etiqueta que garanteixi la sostenibilitat."},{"accent":"mineria","ideas":[["⛏️","Matèries primeres","El coure i altres minerals provenen de processos extractius."],["🪨","Mena i ganga","Cal separar la part d’interès dels materials associats."],["🌱","Restauració","Prevenir danys i recuperar els espais afectats."]],"remember":"Fabricar tecnologia també implica extreure i transformar materials; per això és útil reutilitzar-los.","avoid":"Recurs renovable no vol dir recurs inesgotable, i reciclar no elimina tots els impactes."},{"accent":"energia","ideas":[["⚡","Energia","Es transforma i es mesura en J o kWh."],["⏱️","Potència","Indica la rapidesa del procés i es mesura en W."],["📐","Rendiment","Compara l’energia útil amb la total d’entrada."]],"remember":"E = P · t; si la potència és en kW i el temps en hores, el consum surt en kWh.","avoid":"Energia i potència no són el mateix. Una energia renovable tampoc té impacte zero."},{"accent":"aigua","ideas":[["💧","Disponibilitat","Cal gestionar el recurs i reduir el malbaratament."],["🧪","Qualitat","Turbidesa, pH i microorganismes són paràmetres diferents."],["🏭","Tractament","Potabilització, depuració i dessalinització no són iguals."]],"remember":"Per decidir si l’aigua és apta per a un ús hem de conèixer-ne la qualitat i el tractament que ha rebut.","avoid":"L’aigua transparent no és necessàriament potable; filtrar-la no garanteix que es pugui beure."},{"accent":"mobilitat","ideas":[["🚶","Accessibilitat","El desplaçament ha de ser possible per a tothom."],["🚌","Alternatives","Caminar, bicicleta i transport públic es complementen."],["🔊","Costos externs","Soroll, congestió i altres efectes sobre tercers."]],"remember":"La mobilitat sostenible s’avalua segons distància, ocupació, seguretat, cost i impacte.","avoid":"Un vehicle elèctric no resol automàticament la congestió ni tots els problemes de mobilitat."},{"accent":"circular","ideas":[["🛠️","Mantenir","Allargar la vida útil d’un producte."],["🔁","Reutilitzar","Aprofitar l’objecte o les peces sense refer-los del tot."],["♻️","Reciclar","Processar materials quan ja no poden continuar en ús."]],"remember":"La millor manera de reduir residus sovint és fabricar menys i dissenyar productes reparables.","avoid":"Reutilitzar i reciclar no són sinònims: reciclar sol requerir tornar a processar el material."},{"accent":"projecte","ideas":[["🎃","Punt de partida","Un fanalet de Halloween que ja hem construït."],["🎄","Transformació","Nova decoració, mateixa carcassa quan sigui possible."],["🔌","Comprovació","Seguretat del LED, consum i unions desmuntables."]],"remember":"La proposta ha de funcionar, ser segura i permetre altres transformacions en el futur.","avoid":"No cal imprimir una carcassa nova si la que tenim ja resol la funció i és segura."},{"accent":"debat","ideas":[["📚","Investiga","Busca dades i fonts fiables abans d’argumentar."],["🎤","Defensa","Presenta una proposta amb arguments tècnics."],["🤝","Respecta","Escolta, refuta idees i mantén el respecte."]],"remember":"Una opinió es converteix en un argument sòlid quan inclou dades, raons i una conclusió.","avoid":"Debatre no és cridar més fort ni atacar les persones que pensen diferent."}];
function el(type,cls,value){
 const node=document.createElement(type);if(cls)node.className=cls;
 if(value!==undefined)node.textContent=value;return node;
}
function sub(parent,tag,content,cls){const node=el(tag,cls,content);parent.append(node);return node;}
function ideaCards(meta,index){
 const block=el('section','ud2-access-overview');
 block.setAttribute('aria-label','Tres idees clau del contingut');
 const heading=el('div','ud2-access-overview-head');
 sub(heading,'span','✦  EL MÉS IMPORTANT','ud2-access-kicker');
 sub(heading,'h3','Tres idees per començar');
 block.append(heading);
 const grid=el('div','ud2-access-cards');
 meta.ideas.forEach(([symbol,title,description],i)=>{
  const card=el('article','ud2-access-card');
  const top=el('div','ud2-access-card-top');
  sub(top,'span',symbol,'ud2-access-icon');
  sub(top,'strong',title);
  card.append(top);
  sub(card,'p',description);
  grid.append(card);
 });
 block.append(grid);
 return block;
}
function remember(meta){
 const section=el('section','ud2-access-reminders');
 const key=el('div','ud2-access-remember');
 sub(key,'span','✅ RECORDA','ud2-access-kicker');
 sub(key,'p',meta.remember);
 const warning=el('div','ud2-access-careful');
 sub(warning,'span','💡 NO HO CONFONGUIS','ud2-access-kicker');
 sub(warning,'p',meta.avoid);
 section.append(key,warning);
 return section;
}
function easyReading(root,intro){
 const wrapper=el('div','ud2-reader-tools');
 const explanation=sub(wrapper,'span','Pots ajustar la lectura sense perdre cap explicació.');
 const toggle=el('button','ud2-reading-toggle');
 toggle.type='button';
 toggle.setAttribute('aria-pressed','false');
 toggle.textContent='Aa  Lectura còmoda';
 toggle.setAttribute('aria-label','Activar lletra més gran i text més separat');
 toggle.addEventListener('click',()=>{
  const enabled=root.classList.toggle('ud2-easy-reading');
  toggle.setAttribute('aria-pressed',String(enabled));
  toggle.textContent=enabled?'Aa  Lectura còmoda activada':'Aa  Lectura còmoda';
  toggle.setAttribute('aria-label',enabled?'Desactivar lectura còmoda':'Activar lletra més gran i text més separat');
 });
 wrapper.append(toggle);
 intro.append(wrapper);
}
function decorateChapter(chapter,sectionIndex){
 const sections=[...chapter.querySelectorAll(':scope > .ud2-solid-section')];
 if(!sections.length)return;
 chapter.classList.add('ud2-access-chapter');
 if(sections.length>1)chapter.classList.add('ud2-access-grid');
 sections.forEach((section,j)=>{
  section.classList.add('ud2-access-topic-card');
  const h=section.querySelector(':scope > h4');
  if(h){
   const marker=el('span','ud2-access-number',String(j+1).padStart(2,'0'));
   marker.setAttribute('aria-hidden','true');
   h.prepend(marker);
  }
  // Les definicions i les aplicacions tècniques es conserven, però s'estilen
  // de manera diferent per facilitar l'escaneig visual.
  const def=section.querySelector('.ud2-solid-definition');
  if(def)def.classList.add('ud2-access-definition');
  const example=section.querySelector('.ud2-solid-application');
  if(example)example.classList.add('ud2-access-example');
 });
}
function decoratePanel(panel,i){
 const meta=TOPICS[i];if(!meta)return;
 panel.classList.add('ud2-access-panel','ud2-access-'+meta.accent);
 const header=panel.querySelector(':scope > .ud2-main-topic-head');
 if(header){
  header.classList.add('ud2-access-topic-head');
  const subtitle=header.querySelector('p');
  if(subtitle)subtitle.classList.add('ud2-access-subtitle');
 }
 const firstIntro=panel.querySelector('.ud2-solid-intro');
 if(firstIntro){
  firstIntro.classList.add('ud2-access-intro');
  firstIntro.after(ideaCards(meta,i));
 }
 const chapters=panel.querySelectorAll('.ud2-solid-chapter');
 chapters.forEach((chapter,j)=>decorateChapter(chapter,j));
 const oral=panel.querySelector(':scope > .ud2-oral-questions');
 if(oral){
  oral.classList.add('ud2-access-oral');
  oral.before(remember(meta));
 }
 if(i>=7){
  // Projecte i debat tenen continguts propis: resum visual, sense duplicar-lo.
  if(header)header.after(ideaCards(meta,i));
 }
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const root=document.querySelector('.ud2-topic-redesign');
 if(!root||root.dataset.accessibleApplied==='yes')return;
 const panels=[...root.querySelectorAll('.ud2-main-panel')];
 if(panels.length!==9)return;
 root.dataset.accessibleApplied='yes';
 root.classList.add('ud2-accessible');
 panels.forEach((panel,i)=>decoratePanel(panel,i));
 const intro=root.querySelector('.ud2-tab-intro');
 if(intro){
  intro.classList.add('ud2-access-tab-intro');
  const title=intro.querySelector('strong');
  if(title)title.textContent='Una pestanya, una teoria completa';
  const p=intro.querySelector('p');
  if(p)p.textContent='Llegeix els blocs d’idees, observa les imatges i prepara les dues preguntes per comentar a classe. No hi ha subdesplegables.';
  easyReading(root,intro);
 }
 const final=root.querySelector('#ud2-questionari-final');
 if(final)final.classList.add('ud2-access-quiz');
}
const before=window.preparaUnitatVisual;
if(typeof before==='function')window.preparaUnitatVisual=function(){before();init()};
})();