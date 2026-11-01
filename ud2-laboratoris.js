/* UD2 · Set laboratoris interactius, un per apartat de teoria.
   El fanalet només apareix al taller verd. No es desa cap resposta de l'alumnat. */
(function(){
'use strict';
const LABS=[
 {
  icon:'🏙️',title:'Laboratori d’urbanisme sostenible',
  lead:'Forma part d’un equip de disseny urbà. Pren tres decisions pensant en el medi ambient, les persones i el pressupost.',
  cases:[
   {name:'Una plaça on fa molta calor',ask:'Quina millora seria més equilibrada per a tothom?',opts:['Pavimentar tota la plaça i no posar ombra.','Afegir ombra, camins accessibles i bancs, triant plantes adequades.','Col·locar més escales i restringir els accessos.'],good:1,why:'L’ombra pot millorar el confort, els camins faciliten l’accés i el manteniment també s’ha de planificar.'},
   {name:'Il·luminació del carrer',ask:'Quina opció pot reduir el consum i mantenir la seguretat?',opts:['Deixar tots els llums apagats.','Fer servir focus molt potents tota la nit.','Instal·lar llum adequada i controlar-la segons els horaris i l’ús.'],good:2,why:'Cal estalviar energia sense comprometre la visibilitat ni la seguretat de les persones.'},
   {name:'Espai per a tot el veïnat',ask:'Quina proposta té més en compte la dimensió social?',opts:['Preveure accessos sense barreres, bancs i zones de descans.','Fer una zona bonica però inaccessible amb cadira de rodes.','Eliminar tots els bancs per deixar el pas lliure.'],good:0,why:'Un espai sostenible ha de poder ser utilitzat amb comoditat per persones amb necessitats diverses.'}
  ]},
 {
  icon:'🌍',title:'Laboratori dels 17 ODS',
  lead:'Ets un equip de l’Agenda 2030. Relaciona cada actuació amb l’objectiu de desenvolupament sostenible que més directament treballa.',
  cases:[
   {name:'Una escola estalvia aigua',ask:'Quin ODS es relaciona directament amb una millora de la gestió de l’aigua?',opts:['ODS 6 · Aigua neta i sanejament','ODS 7 · Energia assequible i no contaminant','ODS 12 · Consum i producció responsables'],good:0,why:'L’ODS 6 inclou la gestió sostenible de l’aigua i el sanejament.'},
   {name:'Electricitat més eficient',ask:'Quin ODS tracta específicament l’accés i l’ús d’energia sostenible?',opts:['ODS 6 · Aigua neta i sanejament','ODS 7 · Energia assequible i no contaminant','ODS 15 · Vida terrestre'],good:1,why:'L’ODS 7 tracta l’energia assequible, fiable, sostenible i moderna.'},
   {name:'Menys residus al centre',ask:'Quin ODS inclou la prevenció i reducció de residus?',opts:['ODS 4 · Educació de qualitat','ODS 3 · Salut i benestar','ODS 12 · Consum i producció responsables'],good:2,why:'L’ODS 12 inclou reduir residus mitjançant prevenció, reducció, reciclatge i reutilització.'}
  ]},
 {
  icon:'⛏️',title:'Laboratori de recursos i mineria',
  lead:'Treballes en un equip de gestió de materials. Analitza l’origen dels recursos i com prevenir els impactes.',
  cases:[
   {name:'Mena i ganga',ask:'En un mineral extret, quina part aprofitem per obtenir el metall que busquem?',opts:['La mena.','Sempre tota la roca sense separar res.','La ganga, perquè no té interès econòmic.'],good:0,why:'La mena conté els minerals d’interès; la ganga és el material associat que s’ha de separar.'},
   {name:'Protecció de l’aigua',ask:'Quina mesura és útil per reduir un risc de contaminació durant l’extracció?',opts:['Abocar l’aigua de procés directament al riu.','Controlar les aigües, tractar-les quan calgui i vigilar-ne la qualitat.','Treballar sense mesurar cap indicador.'],good:1,why:'La prevenció, el tractament i el seguiment ajuden a detectar i limitar els impactes sobre l’aigua.'},
   {name:'Quan acaba l’extracció',ask:'Què s’ha de planificar per recuperar un espai alterat?',opts:['Deixar els residus i els talussos sense revisar.','Construir sense tenir en compte el sòl.','Restaurar el terreny i fer seguiment de la recuperació ambiental.'],good:2,why:'La restauració forma part d’una gestió responsable de l’activitat extractiva.'}
  ]},
 {
  icon:'⚡',title:'Laboratori de consum i rendiment',
  lead:'Actua com a tècnic d’energia: calcula, compara i comprova si un resultat té sentit.',
  cases:[
   {name:'Un llum de lectura',ask:'Un llum de 3 W funciona durant 5 hores. Quanta energia consumeix?',opts:['15 Wh, és a dir 0,015 kWh.','15 kWh.','0,6 Wh.'],good:0,why:'Energia = potència × temps: 3 W × 5 h = 15 Wh = 0,015 kWh.'},
   {name:'Energia útil i dissipació',ask:'Una màquina rep 100 J i transforma 80 J en energia útil. Quin és el rendiment?',opts:['20 %.','80 %.','125 %.'],good:1,why:'Rendiment = 80 / 100 × 100 = 80 %. Els 20 J restants no s’aprofiten per a la funció prevista.'},
   {name:'Interpretar la potència',ask:'Si dues bombetes tenen la mateixa potència i una funciona el doble d’hores, què passa?',opts:['Consumeixen sempre igual.','La que funciona menys temps consumeix més.','La que funciona el doble d’hores consumeix el doble d’energia.'],good:2,why:'Amb la potència constant, el consum creix proporcionalment amb el temps de funcionament.'}
  ]},
 {
  icon:'💧',title:'Laboratori de l’aigua',
  lead:'Treballes en una planta de tractament: tria el procés correcte i calcula com estalviar aigua.',
  cases:[
   {name:'Aigua per beure',ask:'Quin procés busca fer l’aigua apta per al consum humà?',opts:['Depuració d’aigües residuals, sempre i sense més controls.','Potabilització.','Només separar els residus visibles amb una reixa.'],good:1,why:'Potabilitzar inclou els tractaments i controls necessaris perquè l’aigua compleixi els requisits de consum.'},
   {name:'Aigua després d’utilitzar-la',ask:'Quin procés tracta les aigües residuals abans d’abocar-les o reutilitzar-les segons l’ús?',opts:['Depuració.','Dessalinització sempre.','Pintar els conductes de color blau.'],good:0,why:'Depurar les aigües residuals redueix la contaminació abans de la seva destinació final.'},
   {name:'Estalvi a l’aixeta',ask:'Una aixeta passa de 9 a 6 L/min. Quants litres s’estalvien en 2 minuts?',opts:['3 litres.','9 litres.','6 litres.'],good:2,why:'La diferència de cabal és 3 L/min; en 2 minuts estalviem 3 × 2 = 6 litres.'}
  ]},
 {
  icon:'🚲',title:'Laboratori de mobilitat sostenible',
  lead:'Imagina que l’institut et demana millores de mobilitat. Tingues en compte accessibilitat, seguretat i impacte.',
  cases:[
   {name:'Arribada al centre',ask:'Quina actuació pot facilitar una mobilitat més sostenible?',opts:['Millorar els itineraris a peu i en bici i estudiar el transport públic.','Eliminar els passos de vianants.','Obligar tothom a anar en cotxe.'],good:0,why:'Millorar diferents alternatives facilita que més persones puguin arribar al centre amb seguretat.'},
   {name:'Costos externs',ask:'Quina situació és un cost extern del transport?',opts:['El preu del bitllet que paga una persona.','El soroll i la contaminació que pateix el veïnat.','El manteniment de la bicicleta pròpia.'],good:1,why:'Els costos externs afecten persones que no necessàriament fan aquell desplaçament.'},
   {name:'Alumnat que viu lluny',ask:'Quina proposta és més inclusiva?',opts:['Suposar que tothom pot caminar fins al centre.','Eliminar els autobusos.','Combinar alternatives segures, accessibles i viables segons la distància.'],good:2,why:'La mobilitat sostenible també ha de ser viable per a qui viu lluny o té necessitats de mobilitat específiques.'}
  ]},
 {
  icon:'♻️',title:'Laboratori d’economia circular',
  lead:'Ets una persona responsable de reparar i gestionar objectes. Decideix com allargar-ne la vida útil.',
  cases:[
   {name:'Una cadira escolar trencada',ask:'La cadira té un cargol fluix i la resta està en bon estat. Què convé fer?',opts:['Llençar la cadira sencera.','Reparar la unió i revisar-ne la seguretat.','Comprar una cadira nova sense comprovar-la.'],good:1,why:'La reparació pot mantenir l’objecte en ús i evitar materials i residus innecessaris.'},
   {name:'Una ampolla reutilitzable',ask:'Quina decisió ajuda a prevenir residus?',opts:['Utilitzar repetidament una ampolla adequada i mantenir-la neta.','Comprar una ampolla d’un sol ús cada dia.','Canviar-la només per tenir-ne un altre color.'],good:0,why:'Prevenir residus sovint és millor que haver de gestionar-los després.'},
   {name:'Un ordinador amb bateria gastada',ask:'Si el dispositiu funciona i la bateria es pot substituir amb seguretat, què és coherent amb l’economia circular?',opts:['Llençar-lo sense revisió.','Barrejar-lo amb els residus ordinaris.','Valorar substituir la bateria abans de canviar tot l’ordinador.'],good:2,why:'Reparar o renovar una peça pot allargar la vida del producte; després cal gestionar correctament els residus electrònics.'}
  ]}
];
function E(tag,cls,text){const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x;}
function A(parent,tag,cls,text){const x=E(tag,cls,text);parent.append(x);return x;}
function makeLab(data,i){
 const root=E('section','ud2-lab');root.id='ud2-lab-'+(i+1);
 const head=E('header','ud2-lab-head');
 A(head,'span','ud2-lab-eyebrow','🔬 LABORATORI INTERACTIU · TEMA '+(i+1));
 A(head,'h3','',data.icon+' '+data.title);
 A(head,'p','',data.lead);
 root.append(head);
 const bar=E('div','ud2-lab-progress');
 A(bar,'strong','','Missió: comprova 3 decisions');
 const counter=A(bar,'span','ud2-lab-count','0 de 3 completades');
 root.append(bar);
 const status=[];
 const cards=E('div','ud2-lab-cases');
 data.cases.forEach((test,j)=>{
  const item=E('article','ud2-lab-case');
  const label=A(item,'span','ud2-lab-case-label','REPTE '+(j+1));
  A(item,'h4','',test.name);
  A(item,'p','ud2-lab-question',test.ask);
  const group=E('fieldset','ud2-lab-choices');
  const legend=A(group,'legend','','Tria la resposta que defensaries:');
  const radios=[];
  test.opts.forEach((o,k)=>{
   const option=E('label','ud2-lab-choice');
   const input=E('input');input.type='radio';input.name='ud2-lab-'+i+'-'+j;input.value=String(k);
   A(option,'span','ud2-lab-choice-letter',String.fromCharCode(65+k));
   A(option,'span','ud2-lab-choice-text',o);
   option.prepend(input);group.append(option);radios.push(input);
  });
  item.append(group);
  const btn=A(item,'button','ud2-lab-check','✅ Comprova la resposta');
  btn.type='button';btn.disabled=true;
  const msg=E('p','ud2-lab-feedback');
  msg.hidden=true;msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');
  item.append(btn,msg);cards.append(item);
  let solved=false;
  status.push(()=>solved);
  radios.forEach(r=>r.addEventListener('change',()=>{
   radios.forEach(t=>t.closest('label').classList.toggle('is-chosen',t.checked));
   btn.disabled=false;
   if(!solved)msg.hidden=true;
  }));
  btn.addEventListener('click',()=>{
   if(solved)return;
   const sel=radios.find(t=>t.checked);
   if(!sel)return;
   const correct=Number(sel.value)===test.good;
   msg.hidden=false;msg.classList.toggle('is-correct',correct);
   if(correct){
    solved=true;item.classList.add('is-solved');
    msg.textContent='🌟 Molt bé! '+test.why;
    btn.textContent='✓ Repte superat';btn.disabled=true;
    radios.forEach(t=>t.disabled=true);
   }else{
    msg.textContent='💜 Bona reflexió! Encara hi ha un criteri a revisar. Pensa en les persones, els recursos i les dades, i torna-ho a provar.';
   }
   const count=status.filter(fn=>fn()).length;
   counter.textContent=count+' de 3 completades';
   bar.classList.toggle('is-done',count===3);
   if(count===3){
    const done=root.querySelector('.ud2-lab-celebration');
    if(done)done.hidden=false;
   }
  });
 });
 root.append(cards);
 const done=A(root,'p','ud2-lab-celebration','🎉 Laboratori completat! Has aplicat els conceptes i has justificat decisions amb criteris tècnics. Enhorabona!');
 done.hidden=true;done.setAttribute('role','status');
 const closing=E('aside','ud2-lab-journal');
 A(closing,'span','ud2-lab-journal-icon','📓').setAttribute('aria-hidden','true');
 const words=E('div');
 A(words,'strong','','ESCRIU AL QUADERN');
 A(words,'p','','Tria un repte i explica en dues frases per què la teva resposta és útil o positiva. Posa un exemple que es pugui aplicar al centre.');
 closing.append(words);root.append(closing);
 return root;
}
function relocateLantern(){
 const workshop=document.getElementById('ud2-green-session-6');
 const theory=document.getElementById('ud2-main-panel-0');
 if(!workshop||!theory)return;
 const fig=theory.querySelector('figure.ud2-technical-figure');
 if(fig&&/fanalet|halloween|nadal/i.test(fig.textContent+' '+(fig.querySelector('img')?.alt||''))){
  const frame=E('section','ud2-lab-lantern-workshop');
  A(frame,'h4','','🖼️ Exemple de decoració intercanviable');
  frame.append(fig);
  const target=workshop.querySelector('.ud2-green-theory');
  if(target)target.after(frame);else workshop.append(frame);
 }
 const extra=document.querySelector('#ud2-main-panel-6 figure.ud2-technical-figure');
 if(extra)extra.remove(); // Diagrama de festa: només els dibuixos de taller.
}
function sanitizeTheory(panel){
 const article=panel.querySelector('.ud2-solid-article');
 if(article){
  [...article.querySelectorAll('.ud2-solid-application')].forEach(el=>{
   if(/fanalet|halloween|nadal|taller/i.test(el.textContent))el.remove();
   else{const heading=el.querySelector('strong');if(heading)heading.textContent='Exemple pràctic. ';}
  });
  [...article.querySelectorAll('.ud2-solid-conclusion')].forEach(el=>{
   const h=el.querySelector('strong');
   if(h)h.textContent='✦ Exemple per entendre-ho';
  });
  [...article.querySelectorAll('p')].forEach(p=>{
   if(!/fanalet|halloween|nadal/i.test(p.textContent))return;
   const sentences=p.textContent.split(/(?<=[.!?])\s+(?=[A-ZÀ-Ý])/u).filter(x=>!/fanalet|halloween|nadal/i.test(x));
   if(sentences.length){p.textContent=sentences.join(' ');}else p.remove();
  });
 }
 const practice=panel.querySelector('.ud2-easy-practice');
 if(practice&&/fanalet|halloween|nadal/i.test(practice.textContent))practice.remove();
}
function cleanFirstHeader(panel){
 const heading=panel.querySelector('.ud2-session-header > h2');
 if(heading)heading.textContent='Sessió 1 · Entendre la sostenibilitat';
 const introduction=panel.querySelector('.ud2-session-intro');
 if(introduction)introduction.textContent='Primer estudiem les tres dimensions i l’urbanisme sostenible. Després comprovem les idees al laboratori interactiu.';
 const goal=panel.querySelector('.ud2-session-goal');
 if(goal)goal.textContent='🎯 Objectiu: identificar una decisió ambientalment responsable, socialment inclusiva i econòmicament viable.';
 const session=panel.querySelector('#ud2-sessio-1');
 const oldLab=session?.querySelector('#ud2-repte-tres-dimensions');
 if(oldLab)oldLab.remove();
 const activity=session?.querySelector('#ud2-sessio-1-activitat .ud2-session-phase-body');
 if(activity)activity.prepend(makeLab(LABS[0],0));
 const desc=panel.querySelector('.ud2-main-topic-head > p');
 if(desc)desc.textContent='Teoria i laboratori interactiu, amb explicacions visuals i activitats per comprovar què has après.';
 // El botó verd del taller es manté com a navegació, no com a contingut teòric.
}
function addOtherLaboratories(panel,i){
 const article=panel.querySelector(':scope > .ud2-solid-article');
 if(!article||panel.querySelector('.ud2-lab-modes'))return;
 const head=panel.querySelector(':scope > .ud2-main-topic-head');
 const oral=panel.querySelector(':scope > .ud2-oral-questions');
 const other=[...panel.children].filter(e=>e!==head && e!==article && e!==oral);
 const controls=E('div','ud2-lab-modes');
 controls.setAttribute('role','tablist');controls.setAttribute('aria-label','Teoria i laboratori del tema');
 const entries=[['📖','TEORIA'],['🔬','LABORATORI']];
 const button=entries.map(([icon,title],j)=>{
  const b=A(controls,'button','ud2-lab-mode-button',icon+' '+title);
  b.type='button';b.setAttribute('role','tab');
  b.id='ud2-lab-button-'+i+'-'+j;
  b.setAttribute('aria-controls','ud2-lab-mode-panel-'+i+'-'+j);
  return b;
 });
 const theory=E('section','ud2-lab-mode-panel');
 const activity=E('section','ud2-lab-mode-panel');
 [theory,activity].forEach((pane,j)=>{
  pane.id='ud2-lab-mode-panel-'+i+'-'+j;
  pane.setAttribute('role','tabpanel');pane.setAttribute('aria-labelledby',button[j].id);
 });
 theory.append(article);
 other.forEach(n=>theory.append(n));
 activity.append(makeLab(LABS[i],i));
 if(oral)activity.append(oral);
 if(head)head.after(controls,theory,activity);else panel.prepend(controls,theory,activity);
 function select(j,focus=false){
  button.forEach((b,k)=>{
   const active=j===k;
   b.setAttribute('aria-selected',String(active));b.classList.toggle('is-active',active);
   b.tabIndex=active?0:-1;
  });
  theory.hidden=j!==0;activity.hidden=j!==1;
  if(focus)button[j].focus({preventScroll:true});
 }
 button.forEach((b,j)=>{
  b.addEventListener('click',()=>select(j));
  b.addEventListener('keydown',ev=>{
   let next=null;
   if(ev.key==='ArrowRight')next=(j+1)%2;
   if(ev.key==='ArrowLeft')next=(j+1)%2;
   if(ev.key==='Home')next=0;
   if(ev.key==='End')next=1;
   if(next!==null){ev.preventDefault();select(next,true);}
  });
 });
 select(0);
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const panels=Array.from(document.querySelectorAll('.ud2-main-panel')).slice(0,7);
 if(panels.length!==7)return;
 if(document.querySelector('#ud2-lab-1'))return;
 relocateLantern();
 panels.forEach(sanitizeTheory);
 cleanFirstHeader(panels[0]);
 panels.slice(1).forEach((p,j)=>addOtherLaboratories(p,j+1));
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();init();};
})();