/* ✨ Índexos desplegables i microactivitats per a totes les unitats.
   No es recull ni es desa cap resposta de l'alumnat. */
(function(){
"use strict";
const EMOJI=['💡','🛠️','🌍','⚡','💧','🚲','♻️','🤖','🎨'];
const PER_UD2=['🌱','🌐','⛏️','⚡','💧','🚲','♻️'];
function el(tag,cls,txt){const x=document.createElement(tag);if(cls)x.className=cls;if(txt!==undefined)x.textContent=txt;return x}
function menuLink(href,emoji,title,subtitle,selected){
  const a=el('a','spark-item');a.href=href;if(selected)a.setAttribute('aria-current','page');
  a.append(el('span','spark-icon',emoji));
  const content=el('span');content.append(el('strong','',title),el('small','',subtitle));
  a.append(content,el('span','spark-arrow','→'));return a;
}
function accordion(title,opened,items){
  const wrap=el('details','spark-accordion');wrap.open=opened;
  wrap.append(el('summary','',title));const body=el('div','spark-items');
  items.forEach(item=>body.append(item));wrap.append(body);return wrap;
}
function linkOf(u,g,topic){return 'unitat.html?ud='+u.id+'&grup='+g+'&tema='+encodeURIComponent(topic)}
function emojiFor(u,i){return u.id===2?PER_UD2[i%PER_UD2.length]:EMOJI[(u.id+i)%EMOJI.length]}
function menuSections(u,g,selected){
 const topics=u.blocs.map((b,i)=>menuLink(linkOf(u,g,i+1),emojiFor(u,i),'Sessió '+(i+1)+' · '+b.titol,'Teoria, esquema i mini activitat',selected===String(i+1)));
 const extras=[];
 if(u.id===2){
   extras.push(menuLink(linkOf(u,g,'ods'),'🌍','Laboratori dels 17 ODS','Explorador oficial i joc interactiu',selected==='ods'));
   extras.push(menuLink(linkOf(u,g,'fanal'),'🎄','Projecte · Fanalet de Halloween a Nadal','Reutilització, taller i càlcul energètic',selected==='fanal'));
   extras.push(menuLink(linkOf(u,g,'debat'),'🎤','Debat amb equips i cronòmetre','Arguments, rèpliques i jurat',selected==='debat'));
 }else extras.push(menuLink(linkOf(u,g,'projecte'),'🧪','Projecte del grup','Taller, experimentació i aplicació',selected==='projecte'));
 extras.push(menuLink(linkOf(u,g,'repas'),'🎮','Repte final de la unitat','Comprova què has après',selected==='repas'));
 const resources=[menuLink(linkOf(u,g,'materials'),'📎','Documents i fotografies','Fitxes, materials i imatges disponibles',selected==='materials'),
 menuLink(linkOf(u,g,'esquema'),'🖼️','Esquema general','Repàs visual de la unitat',selected==='esquema')];
 return [
   accordion('📚 Temes centrals · una sessió cada dia',!selected || /^\d+$/.test(selected),topics),
   accordion('🚀 Projectes, jocs i debats',!!selected&&['ods','fanal','debat','projecte','repas'].includes(selected),extras),
   accordion('📂 Materials i recursos',!!selected&&['materials','esquema'].includes(selected),resources)
 ];
}
function courseIndex(g){
 const host=document.getElementById('course-units');if(!host||typeof UNITATS==='undefined')return;
 host.classList.add('study-course');host.replaceChildren();
 UNITATS.forEach(u=>{
   const details=el('details');const summary=el('summary');
   summary.append(el('span','unit-number','UD'+u.id),el('strong','',u.nom));
   details.append(summary);const body=el('div','spark-items');
   body.append(menuLink('unitat.html?ud='+u.id+'&grup='+g,'✨','Obrir la unitat','Índex complet amb temes, jocs i materials'));
   u.blocs.forEach((b,i)=>body.append(menuLink(linkOf(u,g,i+1),emojiFor(u,i),'Sessió '+(i+1)+' · '+b.titol,'Entrar directament al tema')));
   details.append(body);host.append(details);
 });
 const p=document.querySelector('.section-heading p');
 if(p)p.textContent='Desplega una UD i entra directament al tema que treballarem avui. ✨';
}
function makeActivity(u,index){
 const block=u.blocs[index];
 const panel=el('section','micro-quiz');panel.append(el('h3','','🎯 Repte ràpid · 1 minut'));
 panel.append(el('p','','Quina d’aquestes idees correspon al tema que acabes de llegir?'));
 const candidates=u.blocs.map(b=>((b.punts&&b.punts[0])||b.paragrafs[0]).slice(0,165));
 const choiceIndices=[index,(index+1)%u.blocs.length,(index+2)%u.blocs.length];
 const ordered=[choiceIndices[1],choiceIndices[0],choiceIndices[2]];
 const answerHolder=el('div','micro-answers'),message=el('p','micro-feedback');
 message.setAttribute('role','status');message.setAttribute('aria-live','polite');
 ordered.forEach(n=>{
  const b=el('button','micro-answer',candidates[n]);b.type='button';
  b.addEventListener('click',()=>{
   if(answerHolder.dataset.answered)return;
   answerHolder.dataset.answered='1';
   for(const item of answerHolder.children)item.disabled=true;
   b.classList.add(n===index?'good':'bad');
   const correct=Array.from(answerHolder.children)[ordered.indexOf(index)];correct.classList.add('good');
   message.textContent=n===index?'✨ Molt bé! Has identificat la idea clau.':'Torna a llegir el tema i fixa’t en la resposta marcada en verd.';
  });
  answerHolder.append(b);
 });
 panel.append(answerHolder,message);
 return panel;
}
function visuals(u,i){
 const unique=u.id===2?[
  [['🌿','Medi ambient'],['🤝','Benestar social'],['💶','Economia viable']],
  [['🌐','Agenda 2030'],['🎯','17 objectius'],['🏫','Accions locals']],
  [['⛏️','Extracció'],['🛡️','Prevenció'],['🌳','Restauració']],
  [['☀️','Font energètica'],['⚙️','Transformació'],['💡','Energia útil']],
  [['💧','Captació'],['🧴','Potabilització'],['♻️','Depuració']],
  [['🚲','Desplaçament'],['🌫️','Impacte'],['🌱','Alternatives']],
  [['🛒','Consum'],['🛠️','Reparació'],['♻️','Recuperació']]
 ][i]:null;
 const stages=unique||[['💡','Comprendre'],['🧪','Experimentar'],['🚀','Aplicar']];
 const vis=el('div','topic-visual');
 stages.forEach(([icon,label])=>{const st=el('div','stage');st.append(el('span','',icon),el('strong','',label));vis.append(st)});
 return vis;
}
function review(u){
 const p=el('section','micro-quiz');p.append(el('h2','','🏆 Repàs de la unitat'));
 p.append(el('p','','Explica en veu alta una idea de cada sessió. Després obre els temes que necessitis repassar.'));
 const list=el('ol');
 u.blocs.forEach((b,i)=>{const li=el('li');const d=el('details','study-more');
 d.append(el('summary','','Sessió '+(i+1)+' · '+b.titol));
 d.append(el('p','',((b.punts&&b.punts[0])||b.paragrafs[0])));
 li.append(d);list.append(li)});
 p.append(list);return p;
}
function initUnit(){
 if(typeof UNITATS==='undefined')return;
 const params=new URLSearchParams(location.search),u=UNITATS.find(x=>x.id===Number(params.get('ud')))||UNITATS[0],g=params.get('grup')==='e'?'e':'optativa';
 const selected=params.get('tema')||'',lesson=document.querySelector('.lesson'),main=document.querySelector('.lesson-main');
 if(!lesson||!main)return;
 const hub=el('section','spark-hub');
 const top=el('div','spark-head'),heading=el('div');
 heading.append(el('span','spark-eyebrow','✦ Explora · UD'+u.id),el('h2','','Tria el tema d’avui ✨'),el('p','','Un tema cada dia: aprèn, mira l’esquema i resol una activitat curta.'));
 top.append(heading,el('div','spark-bubble','✨'));hub.append(top);
 menuSections(u,g,selected).forEach(section=>hub.append(section));
 lesson.before(hub);
 if(!selected){lesson.hidden=true;return}
 lesson.classList.add('lesson-focused');
 document.querySelectorAll('.lesson-main > .box').forEach(s=>s.hidden=true);
 const theory=document.getElementById('unit-theory'),figureBox=document.getElementById('unit-figure')?.closest('.box'),
 photos=document.getElementById('unit-photos'),resources=document.getElementById('unit-resources')?.closest('.box'),
 project=document.getElementById('unit-extra')?.closest('.box'),extra=document.getElementById('unit-extra');
 const originalNav=document.getElementById('unit-nav');originalNav.replaceChildren();
 const back=el('a','button secondary','← Índex de la UD'+u.id);back.href='unitat.html?ud='+u.id+'&grup='+g;originalNav.append(back);
 const isNumber=/^\d+$/.test(selected),idx=Number(selected)-1;
 if(isNumber && idx>=0&&idx<u.blocs.length){
  const b=u.blocs[idx];theory.hidden=false;theory.replaceChildren();
  theory.append(el('span','spark-eyebrow','Sessió '+(idx+1)+' de '+u.blocs.length),el('h2','topic-card-title',b.titol));
  const instruction=el('p','spark-lesson-note','📖 Llegeix la teoria i completa el repte d’un minut.');
  theory.append(instruction);
  b.paragrafs.forEach(text=>theory.append(el('p','',text)));
  if(b.punts&&b.punts.length){const list=el('ul');b.punts.forEach(s=>list.append(el('li','',s)));theory.append(list)}
  theory.append(makeActivity(u,idx));
  if(figureBox){
    figureBox.hidden=false;
    const fig=document.getElementById('unit-figure');fig.replaceChildren();
    fig.append(visuals(u,idx),el('figcaption','','Esquema original per recordar les idees principals de la sessió.'));
    figureBox.querySelector('h2').textContent='🎨 Mira-ho d’una altra manera';
    const subtitle=figureBox.querySelector('.subtle');if(subtitle)subtitle.textContent='Tres pistes visuals per connectar els conceptes del tema.';
    if(photos)photos.hidden=true;
  }
  if(idx>0){const prev=el('a','button secondary','← Tema anterior');prev.href=linkOf(u,g,idx);originalNav.append(prev)}
  if(idx<u.blocs.length-1){const next=el('a','button','Tema següent →');next.href=linkOf(u,g,idx+2);originalNav.append(next)}
 }else if(selected==='materials'||selected==='esquema'){
   if(figureBox)figureBox.hidden=false;
   if(photos)photos.hidden=selected==='esquema';
   if(resources)resources.hidden=selected==='esquema';
 }else if(selected==='repas'){
   theory.hidden=false;theory.replaceChildren();theory.append(review(u));
   if(u.id===2 && project){
     project.hidden=false;
     const head=document.getElementById('project-heading'),intro=document.getElementById('unit-project');
     head.textContent='🎮 Joc per practicar els ODS';intro.hidden=true;
     extra.querySelectorAll('.exercise').forEach(s=>s.hidden=s.id!=='ods-quiz'&&s.id!=='ud2-concepts');
   }
 }else if(['ods','fanal','debat','projecte'].includes(selected)){
   project.hidden=false;
   const head=document.getElementById('project-heading'),intro=document.getElementById('unit-project');
   if(u.id===2){
    const cases={ods:['🌍 Els 17 ODS i el joc',['ods-explorer','ods-quiz']],fanal:['🎄 Projecte: transformem el fanalet',['fanal-energy']],debat:['🎤 Debat acadèmic amb cronòmetre',['ods-debate']]};
    const choice=cases[selected]||cases.fanal;head.textContent=choice[0];intro.hidden=true;
    extra.querySelectorAll('.exercise').forEach(s=>s.hidden=!choice[1].includes(s.id));
   }
 }else{
  lesson.hidden=true;
 }
}
window.preparaUnitatVisual=initUnit;window.decorarIndexCurs=courseIndex;
})();
