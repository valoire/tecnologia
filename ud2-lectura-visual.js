/* UD2 · Lectura visual, inclusiva i accessible per a 4t d'ESO.
   No crea subdesplegables ni modifica el qüestionari global.
   Preserva la teoria, les il·lustracions i les preguntes orals originals. */
(function(){
'use strict';
const UNITS=[
 {icon:'🌱',key:'Una tecnologia és sostenible quan resol una necessitat sense oblidar el medi ambient, les persones i el cost al llarg del temps.',goals:['Entendre què és la sostenibilitat.','Diferenciar les tres dimensions.','Justificar una decisió tècnica.'],
 vocab:[['Ambiental','Recursos, energia i residus.'],['Social','Salut, seguretat i accés.'],['Econòmica','Cost, durada i manteniment.']],
 action:'Si un fanalet funciona, quines peces conservaries abans de fabricar-ne un de nou?'},
 {icon:'🌍',key:'Els ODS transformen grans objectius mundials en accions que podem observar i mesurar.',goals:['Situar l’ONU i l’Agenda 2030.','Relacionar tecnologies amb els ODS.','Distingir una acció d’un indicador.'],
 vocab:[['ODS','Objectiu mundial compartit.'],['Meta','Resultat concret que es vol assolir.'],['Indicador','Dada que permet mesurar un canvi.']],
 action:'Quin ODS podem treballar si mesurem els kWh que consumeix el centre?'},
 {icon:'⛏️',key:'Cada material del nostre taller té una història: extracció, transformació, fabricació i possibles impactes.',goals:['Identificar l’origen dels materials.','Diferenciar mena i ganga.','Proposar mesures de prevenció.'],
 vocab:[['Mena','Part mineral que interessa aprofitar.'],['Ganga','Material associat que no interessa extreure.'],['Restauració','Recuperació d’un entorn alterat.']],
 action:'Quin material d’un circuit electrònic ha requerit un procés d’extracció?'},
 {icon:'⚡',key:'La potència indica com de ràpid s’utilitza l’energia; el rendiment indica quina part serveix per a la funció prevista.',goals:['Distingir energia i potència.','Calcular el consum en kWh.','Entendre les pèrdues i el rendiment.'],
 vocab:[['Energia','Capacitat de produir canvis (J, kWh).'],['Potència','Energia per unitat de temps (W).'],['Rendiment','Energia útil dividida per l’aportada.']],
 action:'Un LED de 3 W funciona 5 hores. Calcula 15 Wh = 0,015 kWh.'},
 {icon:'💧',key:'Tenir aigua no és el mateix que tenir aigua potable: la qualitat depèn de l’ús i dels tractaments necessaris.',goals:['Explicar per què pot faltar aigua.','Distingir potabilitzar i depurar.','Reconèixer processos de tractament.'],
 vocab:[['Potabilitzar','Fer l’aigua apta per al consum humà.'],['Depurar','Tractar aigües residuals.'],['Dessalinitzar','Reduir les sals de l’aigua.']],
 action:'L’aigua transparent d’un filtre casolà es pot beure? Explica per què no ho podem afirmar.'},
 {icon:'🚲',key:'Una mobilitat sostenible ha de funcionar per a les persones i reduir els impactes dels desplaçaments.',goals:['Diferenciar transport i mobilitat.','Identificar costos externs.','Comparar alternatives accessibles.'],
 vocab:[['Accessibilitat','Facilitat d’arribar als serveis.'],['Cost extern','Efecte suportat per terceres persones.'],['Ocupació','Nombre d’usuaris d’un vehicle.']],
 action:'Com milloraries l’arribada al centre sense perjudicar qui viu lluny?'},
 {icon:'♻️',key:'La millor manera d’evitar residus sovint és allargar la vida dels productes: cuidar, reparar i reutilitzar abans de reciclar.',goals:['Entendre el cicle de vida.','Comparar economia lineal i circular.','Dissenyar un producte reparable.'],
 vocab:[['Reutilitzar','Tornar a utilitzar un producte o peça.'],['Reparar','Restablir-ne el funcionament.'],['Reciclar','Processar materials per crear-ne de nous.']],
 action:'Quina unió permetria canviar la decoració del fanalet sense llençar la carcassa?'}
];
function E(tag,cls,text){const a=document.createElement(tag);if(cls)a.className=cls;if(text!==undefined)a.textContent=text;return a}
function A(parent,tag,text,cls){const el=E(tag,cls,text);parent.append(el);return el}
function createOverview(info,index){
 const over=E('section','ud2-easy-overview');
 over.setAttribute('aria-label','Idees clau abans de començar');
 const head=E('div','ud2-easy-overview-head');
 A(head,'span','✦ GUIA VISUAL DE LA SESSIÓ','ud2-easy-kicker');
 A(head,'h3','En una frase');
 const row=E('div','ud2-easy-keyline');
 A(row,'span',info.icon,'ud2-easy-heroicon');
 A(row,'p',info.key);
 over.append(head,row);
 const block=E('div','ud2-easy-objectives');
 A(block,'h4','🎯 Avui aprendrem a…');
 const list=E('ul','ud2-easy-goals');
 info.goals.forEach(g=>{const li=E('li');A(li,'span','✓','ud2-easy-check');A(li,'span',g);list.append(li);});
 block.append(list);over.append(block);
 return over;
}
function glossary(info){
 const group=E('section','ud2-easy-glossary');
 A(group,'h3','🧠 Tres paraules que has de recordar');
 const grid=E('div','ud2-easy-glossary-grid');
 info.vocab.forEach(([name,def])=>{
  const card=E('div','ud2-easy-gloss-item');
  A(card,'strong',name);A(card,'p',def);grid.append(card);
 });group.append(grid);
 return group;
}
function practice(info){
 const block=E('aside','ud2-easy-practice');
 A(block,'span','🔎 ATURA’T I PENSA','ud2-easy-kicker');
 A(block,'p',info.action);
 return block;
}
function decorateSection(block,i,topic){
 const h=block.querySelector(':scope > h4');
 if(!h)return;
 block.classList.add('ud2-easy-card');
 const heading=E('div','ud2-easy-card-heading');
 A(heading,'span',String(i+1).padStart(2,'0'),'ud2-easy-index');
 heading.append(h);
 block.prepend(heading);
 const paragraphs=[...block.querySelectorAll(':scope > p')];
 paragraphs.forEach((p,j)=>{
  if(p.classList.contains('ud2-solid-definition'))p.classList.add('ud2-easy-lead');
  else if(p.classList.contains('ud2-solid-application'))p.classList.add('ud2-easy-example');
  else if(j===0)p.classList.add('ud2-easy-first-para');
 });
}
function decorateChapter(chapter){
 chapter.classList.add('ud2-easy-chapter');
 const blocks=[...chapter.querySelectorAll(':scope > .ud2-solid-section')];
 blocks.forEach((b,i)=>decorateSection(b,i,chapter));
 if(blocks.length>=4)chapter.classList.add('ud2-easy-two-column');
}
function sustainability(panel){
 const chapters=[...panel.querySelectorAll('.ud2-solid-article > .ud2-solid-chapter')];
 if(chapters.length<2)return;
 const one=chapters[0],two=chapters[1];
 const first=one.querySelector('.ud2-solid-section');
 const a=[...panel.querySelectorAll('.ud2-solid-section')];
 const dims=['Dimensió ambiental','Dimensió social','Dimensió econòmica']
   .map(title=>a.find(x=>(x.querySelector('h4')?.textContent||'').toLowerCase().includes(title.toLowerCase())));
 if(!first||dims.some(d=>!d))return;
 const group=E('section','ud2-easy-dimensions');
 A(group,'h3','🌱 Les tres dimensions, d’un cop d’ull');
 A(group,'p','Una decisió sostenible ha de tenir en compte aquests tres punts alhora. Cada targeta desenvolupa un criteri.');
 const cards=E('div','ud2-easy-dimension-grid');
 dims.forEach((d,i)=>{
  d.classList.add('ud2-easy-dimension');
  d.dataset.dimension=['ambiental','social','economica'][i];
  cards.append(d);
 });
 group.append(cards);
 one.after(group);
 const fig=panel.querySelector('figure.ud2-solid-diagram');
 if(fig)group.after(fig);
 const h=one.querySelector(':scope > h3');if(h)h.textContent='1. Què és el desenvolupament sostenible?';
 const heading=two.querySelector(':scope > h3');if(heading)heading.textContent='2. Com prenem decisions tecnològiques?';
 // La teoria continua sencera, però agrupada amb la seva explicació visual.
 const img=panel.querySelector('.ud2-technical-figure.ud2-uploaded-figure');
 if(img)img.classList.add('ud2-easy-lantern-figure');
}
function restructure(panel,i){
 const body=panel.querySelector('.ud2-solid-article');
 if(!body)return;
 panel.classList.add('ud2-easy-panel');
 const info=UNITS[i];
 const intro=body.querySelector(':scope > .ud2-solid-intro');
 const overview=createOverview(info,i);
 if(intro)intro.before(overview);else body.prepend(overview);
 if(intro){
  intro.classList.add('ud2-easy-intro');
  const introParas=[...intro.querySelectorAll(':scope > p')];
  introParas.forEach((p,j)=>p.classList.add(j===0?'ud2-easy-intro-main':'ud2-easy-intro-context'));
 }
 // La teoria completa continua visible, però amb capçaleres, blocs i espai.
 [...body.querySelectorAll(':scope > .ud2-solid-chapter')].forEach(decorateChapter);
 if(i===0)sustainability(panel);
 // Distingim les dues làmines principals amb un text de context visible.
 body.querySelectorAll('figure.ud2-solid-diagram, figure.ud2-technical-figure').forEach((figure,j)=>{
  figure.classList.add('ud2-easy-figure');
  figure.setAttribute('aria-label',(j===0?'Esquema de suport visual':'Imatge tècnica de suport')+' sobre '+info.key);
 });
 const oral=panel.querySelector(':scope > .ud2-oral-questions');
 const conclusion=body.querySelector(':scope > .ud2-solid-conclusion');
 const notes=glossary(info);
 if(conclusion)conclusion.before(notes);else body.append(notes);
 const exercise=practice(info);
 if(oral)oral.before(exercise);else body.append(exercise);
 // Les dues preguntes orals segueixen EXACTAMENT al final de la pestanya.
 if(oral){oral.classList.add('ud2-easy-oral');const p=oral.querySelector(':scope > p');if(p)p.textContent='Explica la teva resposta amb les teves paraules. No cal memoritzar: pensa, relaciona i justifica.'}
}
function toolbar(hub){
 const toolbar=E('div','ud2-easy-toolbar');
 toolbar.setAttribute('role','group');
 toolbar.setAttribute('aria-label','Opcions de lectura accessible');
 const info=E('span','ud2-easy-reading-note','👓 Text alineat a l’esquerra · frases separades · colors suaus');
 const button=E('button','ud2-easy-font-toggle','A+  Lletra més gran');
 button.type='button';button.setAttribute('aria-pressed','false');
 button.addEventListener('click',()=>{
  const enlarged=hub.classList.toggle('ud2-easy-large-text');
  button.setAttribute('aria-pressed',String(enlarged));
  button.textContent=enlarged?'A−  Mida normal':'A+  Lletra més gran';
 });
 toolbar.append(info,button);
 const intro=hub.querySelector('.ud2-tab-intro');
 if(intro)intro.after(toolbar);
 else hub.prepend(toolbar);
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const hub=document.querySelector('.ud2-topic-redesign');
 if(!hub||hub.classList.contains('ud2-easy-mode'))return;
 const panels=[...hub.querySelectorAll('.ud2-main-panel')].slice(0,7);
 if(panels.length!==7||panels.some(p=>!p.querySelector('.ud2-solid-article')))return;
 hub.classList.add('ud2-easy-mode');
 panels.forEach((panel,i)=>restructure(panel,i));
 toolbar(hub);
 const top=hub.querySelector('.ud2-tab-intro p');
 if(top)top.textContent='Una pestanya per teoria: idees clau, targetes visuals, explicació completa i dues preguntes orals. Sense desplegables interiors.';
 const p=hub.querySelector(':scope > p:not(.concept-eyebrow)');
 if(p)p.textContent='La UD2 és més visual i fàcil de seguir. Pots fer més gran la lletra sense perdre cap explicació.';
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();init();};
})();