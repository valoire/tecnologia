/* UD2 · Sessió 1 real: teoria > activitat > taller.
   Mou els blocs ja existents; no duplica ni esborra teoria, preguntes ni respostes.
   Les següents sessions queden separades com a previsió del projecte. */
(function(){
'use strict';
function E(tag,cls,text){
 const x=document.createElement(tag);
 if(cls)x.className=cls;
 if(text!==undefined)x.textContent=text;
 return x;
}
function A(parent,tag,cls,text){const x=E(tag,cls,text);parent.append(x);return x;}
const stages=[
 {id:'teoria',number:'01',icon:'📖',name:'TEORIA',detail:'Entendre el concepte i les tres dimensions',time:"20'"},
 {id:'activitat',number:'02',icon:'📓',name:'ACTIVITAT',detail:'Debatre, decidir i escriure una justificació',time:"15'"},
 {id:'taller',number:'03',icon:'💻',name:'TALLER',detail:'Mesurar el fanalet i iniciar Tinkercad 2D',time:"20'"}
];
function buildStage(data){
 const block=E('section','ud2-session-phase ud2-session-phase-'+data.id);
 block.id='ud2-sessio-1-'+data.id;
 block.setAttribute('aria-label','Fase '+data.number+': '+data.name);
 const heading=E('header','ud2-session-phase-head');
 const icon=A(heading,'span','ud2-session-phase-icon',data.icon);
 icon.setAttribute('aria-hidden','true');
 const message=E('div','ud2-session-phase-heading');
 A(message,'span','ud2-session-phase-eyebrow','PAS '+data.number+' · '+data.time);
 A(message,'h3','',data.name);
 A(message,'p','',data.detail);
 heading.append(message);
 block.append(heading);
 const content=E('div','ud2-session-phase-body');
 block.append(content);
 return {block,content};
}
function buildHero(){
 const hero=E('header','ud2-session-header');
 A(hero,'span','ud2-session-kicker','✦ SESSIÓ 1 · 4t ESO · UD2');
 A(hero,'h2','','Sostenibilitat: de la idea al fanalet');
 A(hero,'p','ud2-session-intro','En aquesta classe seguim sempre el mateix ordre: primer entenem la teoria, després resolem un repte i finalment ho posem en pràctica amb el nostre fanalet.');
 const summary=E('div','ud2-session-progress');
 stages.forEach(data=>{
  const link=E('a','ud2-session-progress-step');
  link.href='#ud2-sessio-1-'+data.id;
  A(link,'span','ud2-session-progress-icon',data.icon).setAttribute('aria-hidden','true');
  const words=E('span');
  A(words,'strong','',data.name);
  A(words,'small','',data.time);
  link.append(words);
  summary.append(link);
 });
 hero.append(summary);
 A(hero,'p','ud2-session-goal','🎯 Al final de la sessió: una decisió sostenible justificada i un primer esbós del fanalet de Nadal.');
 return hero;
}
function guideLater(workshop){
 const roadmap=workshop.querySelector('.ud2-work-roadmap');
 const endnote=workshop.querySelector('.ud2-work-endnote');
 if(!roadmap)return null;
 const future=E('section','ud2-session-next');
 future.setAttribute('aria-label','Properes sessions de taller');
 const head=E('header','ud2-session-next-head');
 A(head,'span','ud2-session-kicker','DESPRÉS D’AVUI');
 A(head,'h2','','Què farem en les properes sessions?');
 A(head,'p','','Aquests passos no són per a la sessió 1. Els treballarem quan toqui, amb les seves pròpies instruccions.');
 future.append(head);
 // El primer pas ja està definit per a avui: evitem mostrar-lo de nou.
 const first=roadmap.querySelector('.ud2-work-timeline > li:first-child');
 if(first)first.remove();
 const heading=roadmap.querySelector(':scope > h3');
 if(heading)heading.textContent='🗓️ Fases que continuaran en altres sessions';
 const description=roadmap.querySelector('.ud2-work-roadmap-subtitle');
 if(description)description.textContent='Completar el disseny, preparar el tall i muntar el nou fanalet.';
 future.append(roadmap);
 if(endnote)future.append(endnote);
 return future;
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const panel=document.getElementById('ud2-main-panel-0');
 if(!panel||panel.querySelector('#ud2-sessio-1'))return;
 const theory=panel.querySelector('.ud2-solid-article');
 const challenge=panel.querySelector('#ud2-repte-tres-dimensions');
 const workshop=panel.querySelector('#ud2-taller-avui');
 if(!theory||!challenge||!workshop)return;
 const oral=panel.querySelector(':scope > .ud2-oral-questions');
 const reflection=panel.querySelector(':scope > .ud2-easy-practice');
 // L'exemple d'urbanisme és teoria: s'explica abans del repte.
 const urbanism=challenge.querySelector(':scope > .ud2-challenge-context');
 const firstStage=buildStage(stages[0]);
 const secondStage=buildStage(stages[1]);
 const thirdStage=buildStage(stages[2]);
 firstStage.content.append(theory);
 if(urbanism)firstStage.content.append(urbanism);
 // Bloc interactiu, tasca escrita i preguntes orals: una sola fase d'activitat.
 secondStage.content.append(challenge);
 if(reflection)secondStage.content.append(reflection);
 if(oral)secondStage.content.append(oral);
 // Només les tasques d'avui, no el pla complet de 4 sessions.
 const later=guideLater(workshop);
 thirdStage.content.append(workshop);
 const workHeading=workshop.querySelector('.ud2-workshop-head h2');
 if(workHeading)workHeading.textContent='Dissenyem la nova decoració del fanalet';
 const workTime=workshop.querySelector('.ud2-work-time');
 if(workTime)workTime.textContent='20 min · Taller d’avui';
 const intro=workshop.querySelector('.ud2-workshop-head p');
 if(intro)intro.textContent='Ara que ja hem raonat la nostra decisió sostenible, mesurarem la peça actual i començarem el disseny pla per a la talladora làser.';
 const challengeHelp=challenge.querySelector('.ud2-challenge-head > p');
 if(challengeHelp)challengeHelp.textContent='Per parelles, feu primer el cas de la plaça i el del fanalet. Trieu una opció i observeu-ne les conseqüències. El cas de la il·luminació és d’ampliació si acabeu abans.';
 const session=E('section','ud2-session',undefined);
 session.id='ud2-sessio-1';
 session.append(buildHero(),firstStage.block,secondStage.block,thirdStage.block);
 // No es modifica el capçal de la teoria ni les altres sis pestanyes.
 const topicHead=panel.querySelector('.ud2-main-topic-head');
 if(topicHead)topicHead.after(session);
 else panel.prepend(session);
 if(later)session.after(later);
 const topicDescription=panel.querySelector('.ud2-main-topic-head > p');
 if(topicDescription)topicDescription.textContent='Sessió 1 · Teoria, activitat i taller de Tinkercad, en aquest ordre.';
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();init();};
})();