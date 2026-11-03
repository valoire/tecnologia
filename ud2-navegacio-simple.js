/* UD2 · Navegacio simple: teoria, taller, debat i questionari independent. */
(function(){
'use strict';
function make(tag,cls,text){
 const el=document.createElement(tag);
 if(cls)el.className=cls;
 if(text!==undefined)el.textContent=text;
 return el;
}
function addMiniLab(){
 const article=document.querySelector('#ud2-sessio-1-teoria .ud2-solid-article');
 if(!article||article.querySelector('#ud2-mini-lab-sostenibilitat'))return;
 const chapters=[...article.querySelectorAll(':scope > .ud2-solid-chapter')];
 const next=chapters.find(x=>x.querySelector('h3')?.textContent?.trim().startsWith('2.'));
 if(!next)return;
 const lab=make('section','ud2-mini-lab');
 lab.id='ud2-mini-lab-sostenibilitat';
 lab.setAttribute('aria-labelledby','ud2-mini-lab-title');
 lab.append(make('span','ud2-mini-kicker','✏️ ACTIVITATS · DESPRÉS DEL PUNT 1'));
 const heading=make('h3','ud2-mini-title','Quina decisió és més sostenible?');
 heading.id='ud2-mini-lab-title';lab.append(heading);
 lab.append(make('p','ud2-mini-context','A l’institut hi ha 20 ordinadors que van lents, però encara funcionen. Quina solució ajuda a cobrir les necessitats d’avui sense perjudicar el futur?'));
 const answers=[
  ['A','Canviar tots els ordinadors cada any per models nous.','🔎 Pensa-ho: fabricar equips nous sense necessitat consumeix materials i genera residus. Torna-ho a provar.'],
  ['B','Reparar o millorar els equips que es puguin aprofitar i reciclar correctament els irrecuperables.','🎉 Molt bé! Allargar la vida útil redueix residus, pot estalviar diners i permet continuar utilitzant els equips.'],
  ['C','Comprar els equips més barats sense valorar-ne la durada ni el consum.','🔎 El preu inicial no és l’únic criteri: cal mirar la durada, el consum i les reparacions. Torna-ho a provar.']
 ];
 const options=make('div','ud2-mini-answers');
 const feedback=make('p','ud2-mini-feedback');
 feedback.hidden=true;feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 const buttons=answers.map(([letter,answer],i)=>{
  const button=make('button','ud2-mini-answer');
  button.type='button';button.setAttribute('aria-pressed','false');
  button.append(make('strong','ud2-mini-answer-letter',letter),make('span','',answer));
  button.addEventListener('click',()=>{
   buttons.forEach(b=>{
    b.classList.remove('is-chosen','is-correct');
    b.setAttribute('aria-pressed','false');
   });
   button.classList.add('is-chosen');
   if(i===1)button.classList.add('is-correct');
   button.setAttribute('aria-pressed','true');
   feedback.textContent=answers[i][2];
   feedback.classList.toggle('is-correct',i===1);
   feedback.hidden=false;
  });
  options.append(button);
  return button;
 });
 lab.append(options,feedback);
 next.before(lab);
}

function simplifyWorkshop(){
 document.querySelectorAll('#ud2-main-panel-7 .ud2-green-session').forEach(pane=>{
  [...pane.children].forEach(child=>{
   if(!child.matches('.ud2-green-session-header,.ud2-green-open-label,.ud2-green-no-web,.ud2-green-links'))child.remove();
  });
 });
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
  ['📖','TEORIA I ACTIVITATS','7 apartats, pas a pas'],
  ['🛠️','TALLER','7 sessions seguides'],
  ['🎤','DEBAT','Parlem i argumentem']
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
 title.append(make('strong','','Tria l’apartat que vols treballar'),make('span','','Primer llegeix la teoria i després fes les activitats, en aquest mateix ordre.'));
 main.insertBefore(nav,tabs);
 main.insertBefore(title,tabs);
 // Com a teoria: les set targetes del taller van abans del marc del contingut.
 const greenInner=originalPanels[7]?.querySelector('.ud2-green-inner');
 const greenIntro=greenInner?.querySelector('.ud2-green-index-intro');
 const greenIndex=greenInner?.querySelector('.ud2-green-session-index');
 let workshopChooser=null;
 if(greenIntro&&greenIndex){
  workshopChooser=make('div','ud2-workshop-choose');
  workshopChooser.append(greenIntro,greenIndex);
  main.insertBefore(workshopChooser,frame);
 }

 // El qüestionari es manté fora de les pestanyes, al final de tota la unitat.
 footer.classList.add('ud2-final-quiz-footer');
 footer.hidden=false;
 quiz.hidden=false;
 hub.querySelector('.ud2-quiz-shortcut')?.remove();
 const desc=hub.querySelector(':scope > p:not(.concept-eyebrow)');
 if(desc)desc.textContent='Tria teoria, taller o debat. El qüestionari final és al final de la pàgina.';

 themeTabs.forEach((tab,i)=>{if(i>=7)tab.hidden=true;});
 let lastTheory=0;
 function showCategory(i,scroll=false){
  selectors.forEach((b,j)=>{
   b.setAttribute('aria-pressed',String(i===j));
   b.classList.toggle('is-current',i===j);
  });
  title.hidden=i!==0;
  tabs.hidden=i!==0;
  if(workshopChooser)workshopChooser.hidden=i!==1;
  frame.classList.toggle('ud2-workshop-frame',i===1);
  if(actions)actions.hidden=i!==0;
  // El qüestionari final només pertany a TEORIA I ACTIVITATS.
  footer.hidden=i!==0;
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
  themeTabs[i===0?lastTheory:i===1?7:8].click();
  syncFromTabs();
 }));
 themeTabs.forEach(tab=>{
  tab.addEventListener('click',syncFromTabs);
  tab.addEventListener('keydown',syncFromTabs);
 });
 actions?.querySelectorAll('button').forEach(b=>b.addEventListener('click',syncFromTabs));
 // Cada apartat es llegeix de dalt a baix: TEORIA i, a continuació, ACTIVITATS.
 // Eliminem els commutadors antics que amagaven una de les dues parts.
 const session=document.querySelector('#ud2-main-panel-0 #ud2-sessio-1');
 if(session){
  session.querySelector('.ud2-session-progress')?.remove();
  const theory=session.querySelector('#ud2-sessio-1-teoria');
  const activities=session.querySelector('#ud2-sessio-1-activitat');
  if(theory)theory.hidden=false;
  if(activities){
   activities.hidden=false;
   const label=activities.querySelector('.ud2-session-phase-heading h3');
   if(label)label.textContent='ACTIVITATS';
  }
  const goal=session.querySelector('.ud2-session-goal');
  if(goal)goal.textContent='🎯 Objectiu: entendre la sostenibilitat i aplicar-la a decisions reals.';
  session.querySelectorAll('.ud2-session-phase-eyebrow').forEach(el=>{
   el.textContent=el.textContent.replace(/\s*·\s*\d+'/, '');
  });
 }
 originalPanels.slice(1,7).forEach(panel=>{
  const modes=panel.querySelector('.ud2-lab-modes');
  const panes=[...panel.querySelectorAll(':scope > .ud2-lab-mode-panel')];
  if(panes.length!==2)return;
  if(modes)modes.remove();
  panes.forEach(p=>{
   p.hidden=false;
   p.removeAttribute('role');
   p.removeAttribute('aria-labelledby');
  });
  if(!panes[1].querySelector('.ud2-activities-title')){
   panes[1].prepend(make('h3','ud2-activities-title','✏️ ACTIVITATS'));
  }
 });
 addMiniLab();
 simplifyWorkshop();
 syncFromTabs();
 if(location.hash==='#ud2-questionari-final'||new URLSearchParams(location.search).get('seccio')==='questionari'){
  requestAnimationFrame(()=>quiz.scrollIntoView({block:'start',behavior:'auto'}));
 }
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function'){
 window.preparaUnitatVisual=function(){previous();init();};
}
})();