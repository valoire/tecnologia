/* UD2 · Navegacio simple: teoria, taller, debat i questionari independent. */
(function(){
'use strict';
function make(tag,cls,text){
 const el=document.createElement(tag);
 if(cls)el.className=cls;
 if(text!==undefined)el.textContent=text;
 return el;
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const hub=document.querySelector('.ud2-topic-redesign');
 const main=hub?.querySelector('.ud2-topic-tabs');
 const tabs=main?.querySelector('.ud2-tablist');
 const frame=main?.querySelector('.ud2-panel-frame');
 const actions=main?.querySelector('.ud2-tab-bottom-actions');
 const footer=hub?.querySelector('.ud2-after-tabs');
 const quiz=footer?.querySelector('#ud2-questionari-final');
 if(!hub||!main||!tabs||!frame||!quiz||main.querySelector('.ud2-simple-menu'))return;
 const originalPanels=[...frame.querySelectorAll(':scope > .ud2-main-panel')];
 const themeTabs=[...tabs.querySelectorAll('.ud2-main-tab')];
 if(originalPanels.length<9||themeTabs.length<9)return;

 const categories=[
  ['📖','TEORIA','7 temes per aprendre'],
  ['🛠️','TALLER','7 sessions en verd'],
  ['🎤','DEBAT','Parlem i argumentem'],
  ['📝','QÜESTIONARI FINAL','10 preguntes per repassar']
 ];
 const nav=make('nav','ud2-simple-menu');
 nav.setAttribute('aria-label','Tria el teu espai de la unitat');
 nav.append(make('h3','ud2-simple-menu-heading','Què vols fer avui?'));
 const buttons=make('div','ud2-simple-menu-grid');
 const selectors=categories.map(([icon,title,description],i)=>{
  const b=make('button','ud2-simple-menu-button ud2-simple-menu-'+i);
  b.type='button';b.setAttribute('aria-pressed','false');
  const pict=make('span','ud2-simple-menu-icon',icon);pict.setAttribute('aria-hidden','true');
  const label=make('span','ud2-simple-menu-words');
  label.append(make('strong','',title),make('small','',description));
  b.append(pict,label);buttons.append(b);
  return b;
 });
 nav.append(buttons);
 const title=make('div','ud2-theory-choose');
 title.append(make('strong','','Tria el tema de teoria'),make('span','','Segueix de l’1 al 7. Només s’obre el tema que esculls.'));
 main.insertBefore(nav,tabs);
 main.insertBefore(title,tabs);

 const quizPanel=make('section','ud2-main-panel ud2-quiz-separate');
 quizPanel.id='ud2-quiz-panel';
 quizPanel.setAttribute('role','region');
 quizPanel.setAttribute('aria-label','Qüestionari final de la UD2');
 quizPanel.hidden=true;
 quizPanel.append(quiz);
 frame.append(quizPanel);
 footer.remove();
 hub.querySelector('.ud2-quiz-shortcut')?.remove();
 const desc=hub.querySelector(':scope > p:not(.concept-eyebrow)');
 if(desc)desc.textContent='Tria una de les quatre opcions. Cada espai té el seu contingut, sense haver de baixar per tota la pàgina.';

 themeTabs.forEach((tab,i)=>{if(i>=7)tab.hidden=true;});
 let lastTheory=0;
 function showCategory(i,scroll=false){
  selectors.forEach((b,j)=>{
   b.setAttribute('aria-pressed',String(i===j));
   b.classList.toggle('is-current',i===j);
  });
  title.hidden=i!==0;
  tabs.hidden=i!==0;
  if(actions)actions.hidden=i!==0;
  quizPanel.hidden=i!==3;
  if(i===3)originalPanels.forEach(panel=>panel.hidden=true);
  if(scroll)main.scrollIntoView({
   block:'start',
   behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'
  });
 }
 function syncFromTabs(){
  const i=themeTabs.findIndex(tab=>tab.getAttribute('aria-selected')==='true');
  if(i<0)return;
  if(i<7)lastTheory=i;
  showCategory(i<7?0:i===7?1:2);
 }
 selectors.forEach((b,i)=>b.addEventListener('click',()=>{
  if(i===3){showCategory(3,true);return;}
  themeTabs[i===0?lastTheory:i===1?7:8].click();
  syncFromTabs();
 }));
 themeTabs.forEach(tab=>{
  tab.addEventListener('click',syncFromTabs);
  tab.addEventListener('keydown',syncFromTabs);
 });
 actions?.querySelectorAll('button').forEach(b=>b.addEventListener('click',syncFromTabs));
 // La sessió inicial tenia tres targetes grans i franges de temps que
 // duplicaven el menú de la UD. Conservem només dos accessos compactes.
 const session=document.querySelector('#ud2-main-panel-0 #ud2-sessio-1');
 const progress=session?.querySelector('.ud2-session-progress');
 const steps=[...(progress?.querySelectorAll('.ud2-session-progress-step')||[])];
 if(steps.length===3){
  progress.classList.add('ud2-compact-progress');
  steps[0].textContent='📖  TEORIA';
  steps[1].textContent='🔬  LABORATORI';
  steps[2].remove(); // El taller ja té un espai verd propi al menú principal.
  session.querySelectorAll('.ud2-session-phase-eyebrow').forEach(el=>{
   el.textContent=el.textContent.replace(/\s*·\s*\d+'/, '');
  });
 }
 if(location.hash==='#ud2-questionari-final'||new URLSearchParams(location.search).get('seccio')==='questionari'){
  showCategory(3);
 }else syncFromTabs();
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function'){
 window.preparaUnitatVisual=function(){previous();init();};
}
})();