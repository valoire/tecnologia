/* UD2 · Guia de taller cronològica, només després de la teoria 1.
   No modifica la resta de continguts ni el qüestionari.
   La llista de comprovació és local i temporal: no emmagatzema dades. */
(function(){
'use strict';
const SESIONS=[
 {num:"01",when:"AVUI",title:"Comprenem i decidim",detail:"Teoria de les tres dimensions, repte de sostenibilitat i primera mesura del fanalet.",out:"Decisió justificada i primer esbós del disseny de Nadal.",now:true},
 {num:"02",when:"PROPERA SESSIÓ",title:"Disseny 2D complet",detail:"Dibuixem una estrella, un arbre o un altre motiu nadalenc. Revisem buits, unions i encaixos.",out:"Disseny final preparat per revisar."},
 {num:"03",when:"ABANS DE TALLAR",title:"De Tinkercad al làser",detail:"Exportem el contorn en format SVG i comprovem l'escala 1:1 i les línies de tall amb el professorat.",out:"Fitxer vectorial revisat; tall només amb autorització."},
 {num:"04",when:"TALLER DE MUNTATGE",title:"Muntar i comprovar",detail:"Tallem sota supervisió, substituïm la decoració de Halloween i comprovem l'encaix i la il·luminació.",out:"Fanalet de Nadal acabat i carcassa reutilitzada."}
];
const TODAY=[
 'He observat la peça original i he mesurat l’obertura i els punts de fixació.',
 'He obert Tinkercad, he creat un disseny nou i he posat les mides de la peça.',
 'He preparat un esbós d’un motiu nadalenc i he desat el primer disseny.'
];
function make(tag,cls,text){const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x;}
function add(parent,tag,cls,text){const x=make(tag,cls,text);parent.append(x);return x;}
function timelineItem(session){
 const li=make('li','ud2-work-step'+(session.now?' ud2-work-today':''));
 const hdr=make('div','ud2-work-step-top');
 add(hdr,'span','ud2-work-number',session.num);
 add(hdr,'span','ud2-work-when',session.when);
 li.append(hdr);
 add(li,'h4','ud2-work-step-title',session.title);
 add(li,'p','ud2-work-step-description',session.detail);
 const result=make('p','ud2-work-result');
 add(result,'strong','', 'Resultat: ');
 result.append(document.createTextNode(session.out));
 li.append(result);
 return li;
}
function todayTask(){
 const task=make('section','ud2-work-today-card');
 const top=make('div','ud2-work-today-top');
 const badge=add(top,'span','ud2-work-badge','▶ FEM-HO AVUI');
 add(top,'strong','ud2-work-time','20 min de teoria + 15 min de repte + 20 min de taller');
 task.append(top);
 add(task,'h3','ud2-work-today-heading','Comencem el disseny amb Tinkercad');
 add(task,'p','ud2-work-today-intro','Després del repte sostenible, començarem l’adaptació del fanalet que ja tenim. Avui n’observarem les mides i iniciarem el disseny pla de la decoració de Nadal a Tinkercad; el tall làser quedarà per a una altra sessió.');
 const actions=make('ol','ud2-work-actions');
 [
 ['Observa i mesura','Agafa la peça que ja tenim. Mesura el contorn, els encaixos i l’espai que ocupa al fanalet. Fes un esbós de la nova decoració.'],
 ['Entra a Tinkercad','Obre un disseny nou i anomena’l «UD2 · Fanalet Nadal». Encara que Tinkercad sigui un editor 3D, treballarem amb formes planes sobre el pla de treball.'],
 ['Dibuixa el primer model','Crea el contorn amb les mides reals. Proposa un motiu nadalenc (estrella, floc de neu, arbre…). Conserva les zones que encaixen amb la carcassa.']
 ].forEach(([name,detail],i)=>{
   const li=make('li','ud2-work-action');
   add(li,'span','ud2-work-action-num',String(i+1).padStart(2,'0'));
   const content=make('div');
   add(content,'strong','',name);add(content,'p','',detail);
   li.append(content);actions.append(li);
 });
 task.append(actions);
 const link=make('a','ud2-work-open-tinkercad');
 link.href='https://www.tinkercad.com/';link.target='_blank';link.rel='noopener noreferrer';
 link.textContent='Obrir Tinkercad  ↗';
 task.append(link);
 const note=make('aside','ud2-work-tech-note');
 add(note,'strong','','🔧 Important per al tall làser');
 add(note,'p','', 'Tinkercad pot exportar el contorn de les formes situades al pla de treball en format SVG, però abans de tallar cal comprovar-ne les mides, les línies i les peces soltes al programa de la talladora. No exportis STL per a aquest treball 2D. La màquina només la manipularà el professorat.');
 task.append(note);
 return task;
}
function checklist(){
 const box=make('section','ud2-work-checklist');
 const header=make('div','ud2-work-check-header');
 add(header,'h3','','✓ Abans d’acabar la classe');
 const count=add(header,'span','ud2-work-count','0 de 3');
 box.append(header);
 add(box,'p','ud2-work-small','Marca el que ja tens preparat. Les marques només són per orientar-te en aquesta classe.');
 const list=make('div','ud2-work-check-items');
 const status=make('p','ud2-work-check-status','Encara hi ha feina per fer avui.');
 status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const inputs=[];
 TODAY.forEach((txt,i)=>{
   const label=make('label','ud2-work-check-row');
   const input=make('input');input.type='checkbox';input.name='ud2-work-step-'+i;
   const text=make('span','',txt);
   label.append(input,text);list.append(label);inputs.push(input);
 });
 const update=()=>{
  const n=inputs.filter(el=>el.checked).length;
  count.textContent=n+' de 3';
  box.classList.toggle('ud2-work-finished',n===3);
  status.textContent=n===3?'✨ Preparat! Ensenya el disseny al professorat abans de continuar.':'Has completat '+n+' de les 3 tasques d’avui.';
 };
 inputs.forEach(input=>input.addEventListener('change',update));
 box.append(list,status);return box;
}
function build(){
 const section=make('section','ud2-workshop');
 section.id='ud2-taller-avui';
 section.setAttribute('aria-label','Cronologia del projecte del fanalet de Nadal');
 const heading=make('div','ud2-workshop-head');
 add(heading,'span','ud2-work-eyebrow','✦ DE LA TEORIA AL TALLER');
 add(heading,'h2','','Què fem després d’entendre la sostenibilitat?');
 add(heading,'p','', 'Convertirem una idea sostenible en un projecte real: aprofitar el fanalet de Halloween i dissenyar a Tinkercad les noves peces decoratives de Nadal per a la talladora làser.');
 section.append(heading);
 const first=todayTask();section.append(first,checklist());
 const timeline=make('div','ud2-work-roadmap');
 add(timeline,'h3','','🗓️ Cronologia del nostre projecte');
 add(timeline,'p','ud2-work-roadmap-subtitle','Avui raonem en equip i fem un primer esbós. Les sessions següents serviran per completar el disseny, revisar el fitxer i muntar el fanalet.');
 const list=make('ol','ud2-work-timeline');SESIONS.forEach(s=>list.append(timelineItem(s)));
 timeline.append(list);
 section.append(timeline);
 const end=make('p','ud2-work-endnote');
 end.textContent='Repte sostenible: canviar només les peces decoratives i reutilitzar el màxim de materials de la carcassa. Les mides i el material de tall els concretarem amb les peces reals.';
 section.append(end);
 return section;
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const panel=document.getElementById('ud2-main-panel-0');
 if(!panel||panel.querySelector('#ud2-taller-avui'))return;
 // Després de les dues preguntes orals: acabem la teoria i iniciem el taller.
 const oral=panel.querySelector(':scope > .ud2-oral-questions');
 const section=build();
 if(oral)oral.after(section);else panel.append(section);
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();init()};
})();