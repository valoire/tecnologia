/* UD2 · Indicadors visuals grans per distingir accions de teoria.
   Només afegeix rètols als elements pràctics existents; no canvia cap resposta. */
(function(){
'use strict';
function el(tag,cls,text){
 const n=document.createElement(tag);
 if(cls)n.className=cls;
 if(text!==undefined)n.textContent=text;
 return n;
}
function action(icon,verb,detail,tone='orange',compact=false){
 const card=el('div','ud2-action-signal ud2-action-'+tone+(compact?' ud2-action-compact':''));
 const glyph=el('span','ud2-action-glyph',icon);glyph.setAttribute('aria-hidden','true');
 const text=el('div','ud2-action-message');
 text.append(el('strong','ud2-action-verb',verb));
 if(detail)text.append(el('p','ud2-action-detail',detail));
 card.append(glyph,text);
 return card;
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const hub=document.querySelector('.ud2-topic-redesign');
 if(!hub||hub.dataset.actionSignals==='yes')return;
 const panels=[...hub.querySelectorAll('.ud2-main-panel')];
 if(!panels.length)return;
 hub.dataset.actionSignals='yes';
 // Preguntes orals: un senyal consistent en cadascuna de les set teories.
 panels.slice(0,7).forEach(panel=>{
   const oral=panel.querySelector(':scope > .ud2-oral-questions');
   if(!oral)return;
   oral.prepend(action('🗣️','PARLA','Respon oralment i explica com has arribat a aquesta conclusió.','pink',true));
 });
 // Activitat: llegir, comentar, triar i justificar al quadern.
 const challenge=panels[0]?.querySelector('#ud2-repte-tres-dimensions');
 if(challenge){
   const cases=challenge.querySelector('.ud2-challenge-cases');
   if(cases)cases.before(action('👀','OBSERVA','Llegeix les tres situacions. Quina necessitat real hem de resoldre?','orange'));
   [...challenge.querySelectorAll('.ud2-challenge-case')].forEach(c=>{
     const fieldset=c.querySelector('.ud2-challenge-options');
     if(fieldset)fieldset.before(action('💬','PARLA I TRIA','Comenta les opcions amb la parella i escolliu-ne una.','purple',true));
   });
   const close=challenge.querySelector('.ud2-challenge-close');
   if(close){
      const write=el('div','ud2-action-writing');
      write.append(action('📓','ESCRIU AL QUADERN','Tria un dels casos i justifica la vostra decisió en 3 o 4 frases.','pink'));
      const paper=el('div','ud2-action-paper');
      const b=el('strong','', 'Pots començar així:');
      const p=el('p','', '«Proposem… perquè ambientalment…; socialment…; i econòmicament…».');
      paper.append(b,p);write.append(paper);
      close.before(write);
      close.prepend(action('🗣️','EXPLICA','Compartiu amb la classe la decisió i un inconvenient que caldria millorar.','purple'));
   }
 }
 // Taller: cada instrucció és una acció de lectura immediata.
 const workshop=panels[0]?.querySelector('#ud2-taller-avui');
 if(workshop){
   const tasks=[...workshop.querySelectorAll('.ud2-work-action')];
   const steps=[
    ['📏','MESURA','Observa el fanalet, apunta les mides del contorn i dels encaixos.','orange'],
    ['💻','OBRE TINKERCAD','Crea un disseny nou sobre el pla de treball.','purple'],
    ['✏️','DIBUIXA','Comença el motiu de Nadal amb les mides reals.','pink']
   ];
   tasks.slice(0,3).forEach((task,i)=>{
     const [icon,verb,desc,tone]=steps[i];
     const body=task.querySelector('div');
     if(body)body.prepend(action(icon,verb,desc,tone,true));
     task.classList.add('ud2-action-workstep');
   });
   const checks=workshop.querySelector('.ud2-work-checklist');
   if(checks)checks.prepend(action('✅','COMPROVA','Repassa les tres tasques abans de donar el disseny per acabat.','green',true));
 }
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();init()};
})();