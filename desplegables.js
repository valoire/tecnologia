/* Tecnologia Rovira · continguts oberts al mateix desplegable · 2026 */
(function(){
'use strict';
const ICONS=['💡','🔧','🌍','⚡','💧','🚲','♻️','🎨'];
const UD2_ICONS=['🌱','🌐','⛏️','⚡','💧','🚲','♻️'];
function node(tag,cls,txt){
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(txt!==undefined)n.textContent=txt;
  return n;
}
function addText(parent,tag,text,cls=''){parent.append(node(tag,cls,text))}
function getIcon(u,i){return (u.id===2?UD2_ICONS:ICONS)[i%(u.id===2?UD2_ICONS:ICONS).length]}
function smallQuiz(u,i){
 const b=u.blocs[i],q=node('div','micro-quiz');
 addText(q,'h3','🎯 Repte ràpid');
 addText(q,'p','Quina idea correspon a aquest tema? Tria la resposta correcta.');
 const choices=[i,(i+1)%u.blocs.length,(i+2)%u.blocs.length];
 const order=[choices[1],choices[0],choices[2]];
 const list=node('div','micro-answers'),feedback=node('p','micro-feedback');
 feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 const texts=u.blocs.map(b=>((b.punts&&b.punts[0])||b.paragrafs[0]).slice(0,160));
 for(const n of order){
  const button=node('button','micro-answer',texts[n]);button.type='button';
  button.addEventListener('click',()=>{
   if(list.dataset.finished)return;
   list.dataset.finished='1';
   for(const btn of list.children)btn.disabled=true;
   button.classList.add(n===i?'good':'bad');
   list.children[order.indexOf(i)].classList.add('good');
   feedback.textContent=n===i?'✨ Correcte! Has entès la idea principal.':'Fixa’t en la resposta verda i torna a llegir el tema.';
  });
  list.append(button);
 }
 q.append(list,feedback);return q;
}
function topicBody(u,i){
 const b=u.blocs[i],box=node('div','rv-topic-body');
 addText(box,'span','SESSIÓ '+(i+1)+' / '+u.blocs.length,'spark-eyebrow');
 addText(box,'h3',b.titol,'topic-card-title');
 addText(box,'p','📖 Llegeix la teoria, mira l’esquema i completa l’activitat.','spark-lesson-note');
 for(const p of b.paragrafs)addText(box,'p',p);
 if(b.punts&&b.punts.length){
  const ul=node('ul');for(const point of b.punts)addText(ul,'li',point);box.append(ul);
 }
 addText(box,'h4','✨ El tema en tres idees');
 const visual=node('div','topic-visual');
 const ico=getIcon(u,i);
 const labels=u.id===2?[
  ['🌿','Medi ambient','⚖️','Persones','💶','Economia'],
  ['🌎','Agenda 2030','🎯','17 ODS','🏫','Acció local'],
  ['⛏️','Materials','🛡️','Prevenció','🌳','Restauració'],
  ['☀️','Fonts','⚙️','Transformació','💡','Energia útil'],
  ['💧','Captació','🧪','Tractament','🌊','Retorn'],
  ['🚲','Moviment','🌫️','Impacte','🌱','Alternatives'],
  ['🛒','Consum','🔧','Reparació','♻️','Circularitat']
 ][i]:[ico,'Comprendre','🧪','Comprovar','🚀','Aplicar'];
 for(let k=0;k<6;k+=2){
  const item=node('div','stage');addText(item,'span',labels[k]);addText(item,'strong',labels[k+1]);visual.append(item);
 }
 box.append(visual,smallQuiz(u,i));return box;
}
function innerDetail(title,subtitle,emoji,contents,selected){
 const d=node('details','rv-topic');d.open=!!selected;
 const s=node('summary','rv-topic-summary');
 addText(s,'span',emoji,'rv-topic-icon');
 const words=node('span','rv-topic-words');
 addText(words,'strong',title);addText(words,'small',subtitle);
 s.append(words);addText(s,'span','⌄','rv-topic-arrow');
 const body=node('div','rv-topic-content');
 const arr=Array.isArray(contents)?contents:[contents];
 for(const c of arr)if(c)body.append(c);
 d.append(s,body);return d;
}
function section(title,children,open){
 const d=node('details','rv-category');d.open=!!open;
 const s=node('summary','',title);const contents=node('div','rv-category-contents');
 children.forEach(c=>contents.append(c));d.append(s,contents);return d;
}
function project(u,g){
 const p=node('div','rv-topic-body');
 addText(p,'h3','🧪 Projecte del grup');
 addText(p,'p',u[g]);return p;
}
function review(u){
 const p=node('div','rv-topic-body');
 addText(p,'h3','🏆 Repassem què hem après');
 addText(p,'p','Intenta explicar una idea de cada sessió abans de desplegar la resposta.');
 const list=node('ol');
 for(const [i,b] of u.blocs.entries()){
  const li=node('li'),d=node('details','study-more');
  addText(d,'summary','Sessió '+(i+1)+' · '+b.titol);
  addText(d,'p',(b.punts&&b.punts[0])||b.paragrafs[0]);
  li.append(d);list.append(li);
 }
 p.append(list);
 if(u.id===1&&typeof renderUD1Game==='function'){
  const target=node('div');renderUD1Game(target);p.append(target);
 }
 return p;
}
function materials(u){
 const box=node('div','rv-topic-body');
 addText(box,'h3','📎 Documents i fotografies');
 if(u.recursos.length){
  const list=node('div','resource-list');
  u.recursos.forEach(f=>{const a=node('a','',f.nom+' ↗');a.href=f.url;a.target='_blank';a.rel='noopener';list.append(a)});
  box.append(list);
 }else addText(box,'p','Aquest espai està preparat per als PDF i les fitxes que incorporarem.','placeholder');
 if(u.fotos.length){
  u.fotos.forEach(f=>{
   const fig=node('figure','lesson-illustration'),img=node('img');img.src=f.url;img.alt=f.peu;img.loading='lazy';img.style.maxWidth='100%';
   fig.append(img,node('figcaption','',f.peu));box.append(fig);
  });
 }else addText(box,'p','Encara no hi ha fotografies reals del taller.','subtle');
 return box;
}
function diagram(u){
 const box=node('div','rv-topic-body');addText(box,'h3','🖼️ Esquema de la unitat');
 if(typeof ILLUSTRACIONS!=='undefined'&&ILLUSTRACIONS[u.esquema]){
  const fig=node('figure','lesson-illustration');fig.innerHTML=ILLUSTRACIONS[u.esquema];
  fig.append(node('figcaption','',u.peu));box.append(fig);
 }else addText(box,'p','L’esquema s’afegirà a aquesta unitat.');
 return box;
}
function existingUD2(g){
 let container=document.getElementById('unit-extra')?.querySelector('.ud2-activities');
 if(!container){
  const parent=node('div');
  renderUD2Activities(parent,g);
  container=parent.querySelector('.ud2-activities');
 }
 return container;
}
function extras(u,g,selected){
 const collection=[];
 if(u.id===2){
  const c=existingUD2(g);
  const get=id=>c.querySelector('#'+id);
  collection.push(innerDetail('Els 17 ODS + joc','Descobreix els ODS de la ONU i resol el repte','🌍',[get('ods-explorer'),get('ods-quiz')],selected==='ods'));
  collection.push(innerDetail('Projecte de Nadal','Transforma el fanalet de Halloween i calcula el consum','🎄',[project(u,g),get('fanal-energy')],selected==='fanal'));
  collection.push(innerDetail('Debat acadèmic','Arguments, torns, jurat i cronòmetre','🎤',get('ods-debate'),selected==='debat'));
  collection.push(innerDetail('Repàs i ampliació','Consolida els coneixements i prepara Batxillerat','🏆',[get('ud2-concepts'),review(u)],selected==='repas'));
 }else{
  collection.push(innerDetail('Projecte del grup','Taller i pràctica de la unitat','🧪',project(u,g),selected==='projecte'));
  collection.push(innerDetail('Repàs i jocs','Recorda les idees principals','🎮',review(u),selected==='repas'));
 }
 return collection;
}
function groupIndex(u,g,selected){
 const focus=String(selected||'');
 const topics=u.blocs.map((b,i)=>innerDetail('Sessió '+(i+1)+' · '+b.titol,'Teoria, dibuix i mini activitat',getIcon(u,i),topicBody(u,i),focus===String(i+1)));
 const supplementary=extras(u,g,focus);
 const resources=[
  innerDetail('Documents i fotos','Fitxes, materials i fotografies','📎',materials(u),focus==='materials'),
  innerDetail('Esquema general','Visió de conjunt de la unitat','🖼️',diagram(u),focus==='esquema')
 ];
 return [
  section('📚 Temes centrals · un cada dia',!focus||/^\d+$/.test(focus),topics),
  section('🚀 Projectes, debats i jocs',['ods','fanal','debat','projecte','repas'].includes(focus),supplementary),
  section('📂 Materials i recursos',['materials','esquema'].includes(focus),resources)
 ];
}
window.decorarIndexCurs=function(g){
 const host=document.getElementById('course-units');if(!host)return;
 host.classList.add('rv-course');host.replaceChildren();
 for(const u of UNITATS){
  const d=node('details','rv-ud');
  const s=node('summary','rv-ud-summary');
  addText(s,'span','UD'+u.id,'unit-number');
  addText(s,'strong',u.nom);
  const inner=node('div','rv-ud-inner');
  addText(inner,'p','✨ Desplega el tema i estudia aquí mateix, sense canviar de pàgina.','subtle');
  groupIndex(u,g,'').forEach(x=>inner.append(x));
  d.append(s,inner);host.append(d);
 }
 const p=document.querySelector('.section-heading p');if(p)p.textContent='Desplega la UD i després el tema: tota la teoria, els dibuixos i els jocs s’obren aquí mateix.';
};
window.preparaUnitatVisual=function(){
 const params=new URLSearchParams(location.search);
 const u=UNITATS.find(x=>x.id===Number(params.get('ud')))||UNITATS[0];
 const g=params.get('grup')==='e'?'e':'optativa';
 const selected=params.get('tema')||'';
 const lesson=document.querySelector('.lesson');if(!lesson)return;
 const hub=node('section','spark-hub rv-unit-index');
 const header=node('div','spark-head'),copy=node('div');
 addText(copy,'span','✦ EXPLORA LA UD'+u.id,'spark-eyebrow');
 addText(copy,'h2','Tria el tema d’avui ✨');
 addText(copy,'p','Clica i obre-ho tot al mateix desplegable: teoria, dibuix i activitat.');
 header.append(copy,node('div','spark-bubble','✨'));
 hub.append(header);groupIndex(u,g,selected).forEach(x=>hub.append(x));
 lesson.before(hub);lesson.hidden=true;
};
})();