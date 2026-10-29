/* UD2 · Set pestanyes principals. Cap subdesplegable per a la teoria.
   Manté tot el temari, les imatges i el qüestionari únic final. */
(function(){
'use strict';
const TEMES=[
 {title:'Entendre la sostenibilitat',short:'Sostenibilitat',icon:'🌱',
  subtitle:'Què és, les tres dimensions i com prenem decisions tecnològiques.',
  questions:[
   'Si el fanalet de Halloween encara funciona, en quines condicions seria millor adaptar-lo per a Nadal que fabricar-ne un de nou?',
   'Pots posar un exemple en què una solució sigui bona ambientalment, però presenti un problema social o econòmic? Com el resoldries?'
  ]},
 {title:'L’Agenda 2030 i els ODS',short:'Agenda 2030 i ODS',icon:'🌍',
  subtitle:'L’ONU, els 17 objectius i la relació amb la tecnologia.',
  questions:[
   'Quins ODS es relacionen amb la reutilització del fanalet i amb la reducció del consum dels LEDs? Justifica la resposta.',
   'Quina millora tecnològica podríem fer al nostre institut i quin indicador utilitzaríem per comprovar si funciona?'
  ]},
 {title:'Recursos naturals i processos extractius',short:'Recursos i mineria',icon:'⛏️',
  subtitle:'Matèries primeres, mena i ganga, impactes, prevenció i restauració.',
  questions:[
   'D’on provenen el coure dels cables i els materials de la carcassa d’un aparell? Quines etapes han seguit abans d’arribar al taller?',
   'Una mina aporta materials per fabricar bateries, però altera el paisatge. Quines condicions exigiries per reduir-ne els impactes?'
  ]},
 {title:'Energia, transformacions i eficiència',short:'Energia i rendiment',icon:'⚡',
  subtitle:'Energia útil i dissipada, potència, fonts renovables i càlculs.',
  questions:[
   'En un fanalet amb LED, quina energia considerem útil i quina es dissipa? La resposta canviaria si parléssim d’una estufa?',
   'Un LED de 3 W funciona durant 5 hores. Quina energia consumeix en Wh i en kWh? Què hauríem de saber per calcular-ne el cost?'
  ]},
 {title:'L’aigua: disponibilitat, qualitat i tractament',short:'Recursos hídrics',icon:'💧',
  subtitle:'Escassetat, potabilització, depuració i dessalinització.',
  questions:[
   'Per què una mostra d’aigua transparent no és necessàriament potable? Quins paràmetres hauríem de comprovar?',
   'Quina diferència hi ha entre potabilitzar, depurar i dessalinitzar? Quan necessitaríem cadascun d’aquests processos?'
  ]},
 {title:'Transport i mobilitat sostenible',short:'Mobilitat',icon:'🚲',
  subtitle:'Desplaçaments, accessibilitat, emissions i costos externs.',
  questions:[
   'Quins efectes de l’arribada massiva de cotxes a l’institut afecten persones que no hi viatgen? Com s’anomenen aquests costos?',
   'Quina alternativa de mobilitat proposaries perquè sigui sostenible però també viable per a l’alumnat que viu lluny?'
  ]},
 {title:'Cicle de vida i economia circular',short:'Economia circular',icon:'♻️',
  subtitle:'Dissenyar per durar, reparar, reutilitzar i recuperar materials.',
  questions:[
   'Per què reutilitzar un producte sencer pot ser preferible a reciclar-ne els materials? En quins casos podria no ser així?',
   'Com dissenyaries una carcassa perquè el mateix fanalet serveixi per Halloween, Nadal i altres celebracions sense generar tants residus?'
  ]}
];
function n(tag,cls,text){
 const el=document.createElement(tag);if(cls)el.className=cls;
 if(text!==undefined)el.textContent=text;
 return el;
}
function appendText(host,tag,text,cls){const e=n(tag,cls,text);host.append(e);return e;}
function unwrapDetails(detail){
 const section=n('section','ud2-visible-note');
 const summary=detail.querySelector(':scope > summary');
 if(summary)appendText(section,'h4',summary.textContent.replace(/^[✍️📚🎓]+\s*/u,'').trim());
 Array.from(detail.children).filter(el=>el!==summary).forEach(el=>section.append(el));
 return section;
}
function flattenChildren(root){
 // Cap concepte intern s'ha de tornar a desplegar.
 root.querySelectorAll('details').forEach(d=>{
   const visible=unwrapDetails(d);
   d.replaceWith(visible);
 });
}
function oralQuestions(items){
 const block=n('section','ud2-oral-questions');
 appendText(block,'span','🎙️ PREGUNTES PER COMENTAR A CLASSE','ud2-oral-eyebrow');
 appendText(block,'h3','Parlem-ne en veu alta');
 appendText(block,'p','Dues preguntes per raonar i debatre amb el grup. No són un test: cal justificar les respostes.');
 const ol=n('ol','ud2-oral-list');
 items.forEach((question,i)=>{
  const li=n('li','ud2-oral-item');
  appendText(li,'span',String(i+1).padStart(2,'0'),'ud2-oral-number');
  appendText(li,'p',question);
  ol.append(li);
 });
 block.append(ol);return block;
}
function showSubtopic(drop,index,unitIndex){
 const wrap=n('article','ud2-subtopic');
 const title=drop.querySelector('.concept-title strong')?.textContent?.trim()
   ||('Concepte '+(index+1));
 const heading=appendText(wrap,'h3',title,'ud2-subtopic-title');
 heading.id='tema-'+(unitIndex+1)+'-concepte-'+(index+1);
 const inner=drop.querySelector(':scope > .concept-content');
 if(inner){
  inner.classList.add('ud2-subtopic-content');
  flattenChildren(inner);
  wrap.append(inner);
 }
 return wrap;
}
function createTab(meta,i,panelId){
 const tab=n('button','ud2-main-tab');
 tab.type='button';
 tab.id='ud2-main-tab-'+i;
 tab.setAttribute('role','tab');
 tab.setAttribute('aria-controls',panelId);
 tab.setAttribute('aria-selected','false');
 tab.tabIndex=-1;
 appendText(tab,'span',meta.icon||'✦','ud2-main-icon');
 const span=n('span','ud2-main-tab-words');
 appendText(span,'small',meta.tag||(i+1)+'. TEORIA');
 appendText(span,'strong',meta.short||meta.title);
 tab.append(span);
 return tab;
}
function createPanel(meta,i){
 const panel=n('section','ud2-main-panel');
 panel.id='ud2-main-panel-'+i;
 panel.setAttribute('role','tabpanel');
 panel.setAttribute('aria-labelledby','ud2-main-tab-'+i);
 panel.tabIndex=0;
 panel.hidden=true;
 const header=n('div','ud2-main-topic-head');
 appendText(header,'span',meta.tag||'TEORIA '+(i+1)+' DE 7','ud2-main-eyebrow');
 appendText(header,'h2',meta.title);
 appendText(header,'p',meta.subtitle||'Teoria, exemples i aplicacions tecnològiques.');
 panel.append(header);
 return panel;
}
function makeODSCards(source){
 const grid=source.querySelector('.ods-grid');
 if(!grid)return source;
 // Els 17 objectius són visibles sense haver d'obrir un altre desplegable.
 const desc=source.querySelector('h3');
 if(desc)desc.textContent='Els 17 Objectius de Desenvolupament Sostenible';
 grid.querySelectorAll(':scope > details').forEach(d=>{
   const card=n('article','ud2-ods-static');
   const summary=d.querySelector(':scope > summary');
   if(summary){
    const name=Array.from(summary.children).map(x=>x.textContent.trim()).filter(Boolean).join(' · ')||summary.textContent.trim();
    const head=appendText(card,'h4',name);
    head.className='ud2-ods-title';
   }
   Array.from(d.children).filter(el=>el!==summary).forEach(el=>card.append(el));
   d.replaceWith(card);
 });
 return source;
}
function reorderExtras(originalGroups,panels,g,list){
 const extras=originalGroups.find(g=>g.querySelector('.concept-group-title')?.textContent?.includes('Projecte, activitats'));
 if(!extras)return;
 const drop=Array.from(extras.querySelectorAll(':scope > .concept-drop'));
 function getByTitle(fragment){return drop.find(d=>d.querySelector('.concept-title strong')?.textContent?.includes(fragment));}
 const ods=getByTitle('17 ODS');
 const fanal=getByTitle('Transformem el fanalet');
 const debat=getByTitle('Debat acadèmic');
 const ampliacio=getByTitle('Ampliació');
 const docs=getByTitle('Documents i fotografies')||list.querySelector(':scope > .concept-drop');
 // Els 17 ODS, directament al tema de l'Agenda 2030, en format consultable.
 if(ods){
  const container=ods.querySelector('.concept-content');
  const explorer=container?.querySelector('#ods-explorer');
  if(explorer){makeODSCards(explorer);panels[1].insertBefore(explorer,panels[1].querySelector('.ud2-oral-questions'));}
  // L'antic joc no es mostra: hi ha un únic qüestionari final.
 }
 const extrasData=[
  {title:'Projecte: del fanalet de Halloween al de Nadal',short:'Projecte de Nadal',tag:'PROJECTE DE TALLER',icon:'🎄',subtitle:'Reutilització, transformació i càlcul del consum de la il·luminació.',source:fanal},
  {title:'Debat acadèmic a l’estil nord-americà',short:'Debat',tag:'ACTIVITAT D’ARGUMENTACIÓ',icon:'🎤',subtitle:'Mocions, equips, recerca, refutacions i cronòmetre.',source:debat}
 ];
 for(const meta of extrasData){
  const i=panels.length;
  const panel=createPanel(meta,i);
  if(meta.source){
   const body=meta.source.querySelector(':scope > .concept-content');
   if(body){flattenChildren(body);panel.append(body);}
  }
  panels.push(panel);
 }
 if(ampliacio){
  const body=ampliacio.querySelector(':scope > .concept-content');
  if(body){
   // Els continguts de nivell avançat apareixen com a ampliació visible a Energia,
   // sense crear nous desplegables o repeticions del qüestionari.
   const concept=body.querySelector('#ud2-concepts');
   if(concept){
    const h=appendText(panels[3],'h3','Ampliació per a Batxillerat','ud2-extension-title');
    flattenChildren(concept);
    panels[3].insertBefore(concept,panels[3].querySelector('.ud2-oral-questions'));
   }
  }
 }
 if(docs){
  const body=docs.querySelector(':scope > .concept-content');
  if(body){
   const block=n('section','ud2-end-resources');
   appendText(block,'h2','📎 Documents i fotografies');
   flattenChildren(body);
   block.append(body);
   return block;
  }
 }
 return null;
}
function install(){
 const query=new URLSearchParams(location.search);
 if(query.get('ud')!=='2')return;
 const hub=document.querySelector('.concept-hub');
 const list=hub?.querySelector(':scope > .concept-list');
 if(!hub||!list)return;
 const groups=Array.from(list.querySelectorAll(':scope > .concept-group'));
 if(groups.length<8)return;
 const topicGroups=groups.slice(0,7);
 const oldQuiz=list.querySelector('#ud2-questionari-final');
 if(!oldQuiz)return;
 const main=n('div','ud2-topic-tabs');
 const tabs=n('div','ud2-tablist');
 tabs.setAttribute('role','tablist');
 tabs.setAttribute('aria-label','Temes de la UD2');
 tabs.setAttribute('aria-orientation','horizontal');
 const panels=[];
 TEMES.forEach((meta,i)=>{
  const panel=createPanel(meta,i);
  if(i===0)panel.classList.add('lesson21');
  const group=topicGroups[i];
  const contents=Array.from(group.querySelectorAll(':scope > .concept-drop'));
  contents.forEach((d,j)=>panel.append(showSubtopic(d,j,i)));
  panel.append(oralQuestions(meta.questions));
  panels.push(panel);
 });
 const resource=reorderExtras(groups,panels,query.get('grup')==='e'?'e':'optativa',list);
 const allMeta=TEMES.concat([
  {title:'Projecte: fanalet de Nadal',short:'Projecte',tag:'TALLER',icon:'🎄'},
  {title:'Debat acadèmic',short:'Debat',tag:'ARGUMENTACIÓ',icon:'🎤'}
 ]);
 allMeta.forEach((meta,i)=>{
  const tab=createTab(meta,i,'ud2-main-panel-'+i);
  tabs.append(tab);
 });
 main.append(tabs);
 const introduction=n('div','ud2-tab-intro');
 appendText(introduction,'strong','Tria un apartat de teoria');
 appendText(introduction,'p','Una pestanya per apartat principal. En obrir-la veuràs tota la teoria seguida, amb imatges i dues preguntes per fer en veu alta.');
 main.append(introduction);
 const panelFrame=n('div','ud2-panel-frame');
 panels.forEach(p=>panelFrame.append(p));
 main.append(panelFrame);
 const actions=n('nav','ud2-tab-bottom-actions');
 actions.setAttribute('aria-label','Navegació entre temes');
 const prev=n('button','ud2-tab-prev','← Teoria anterior');prev.type='button';
 const next=n('button','ud2-tab-next','Teoria següent →');next.type='button';
 actions.append(prev,next);main.append(actions);
 let selected=0;
 function select(index,scroll=false,focus=false){
  const i=(index+panels.length)%panels.length;selected=i;
  Array.from(tabs.children).forEach((tab,j)=>{
    tab.setAttribute('aria-selected',String(j===i));tab.tabIndex=j===i?0:-1;
    tab.classList.toggle('selected',j===i);
  });
  panels.forEach((panel,j)=>{panel.hidden=j!==i;});
  prev.disabled=i===0;next.disabled=i===panels.length-1;
  const current=tabs.children[i];
  if(focus)current.focus({preventScroll:true});
  if(scroll)main.scrollIntoView({block:'start',behavior:'smooth'});
 }
 Array.from(tabs.children).forEach((button,i)=>{
  button.addEventListener('click',()=>select(i,true,false));
  button.addEventListener('keydown',event=>{
   let target=null;
   if(event.key==='ArrowRight')target=Math.min(panels.length-1,i+1);
   if(event.key==='ArrowLeft')target=Math.max(0,i-1);
   if(event.key==='Home')target=0;
   if(event.key==='End')target=panels.length-1;
   if(target!==null){event.preventDefault();select(target,false,true);}
  });
 });
 prev.addEventListener('click',()=>select(selected-1,true,false));
 next.addEventListener('click',()=>select(selected+1,true,false));
 const originalHeading=hub.querySelector(':scope > h2');
 if(originalHeading)originalHeading.textContent='UD2 · Tecnologia sostenible';
 const originalDescription=hub.querySelector(':scope > p:not(.concept-eyebrow)');
 if(originalDescription)originalDescription.textContent='Set apartats principals amb tota la teoria en una sola pestanya cadascun. Sense desplegables dins del temari.';
 const shortcut=hub.querySelector('.ud2-quiz-shortcut');
 if(shortcut)shortcut.textContent='📝 Anar al qüestionari global de 10 preguntes ↓';
 hub.classList.add('ud2-topic-redesign');
 hub.replaceChild(main,list);
 // El qüestionari de 10 preguntes queda sempre al FINAL de tota la UD2.
 const footer=n('div','ud2-after-tabs');
 appendText(footer,'span','✦ AVALUACIÓ FINAL','ud2-main-eyebrow');
 if(resource)footer.append(resource);
 footer.append(oldQuiz);
 hub.append(footer);
 const initial=Number(query.get('tema'));
 select(Number.isInteger(initial)&&initial>=1&&initial<=7?initial-1:0);
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function'){
 window.preparaUnitatVisual=function(){
  previous();
  install();
 };
}
})();