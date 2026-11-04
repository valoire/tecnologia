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

function addODSIndividualActivity(){
 const explorer=document.querySelector('#ud2-main-panel-1 #ods-explorer');
 if(!explorer||document.querySelector('#ud2-ods-passaport'))return;
 const noms={
  1:'Fi de la pobresa',2:'Fam zero',3:'Salut i benestar',4:'Educació de qualitat',
  5:'Igualtat de gènere',6:'Aigua neta i sanejament',7:'Energia neta i assequible',
  8:'Treball digne i creixement econòmic',9:'Indústria, innovació i infraestructures',
  10:'Reducció de les desigualtats',11:'Ciutats i comunitats sostenibles',
  12:'Consum i producció responsables',13:'Acció climàtica',
  14:'Vida submarina',15:'Vida terrestre',16:'Pau, justícia i institucions sòlides',
  17:'Aliances per assolir els objectius'
 };
 // Una situació per a cadascun dels 17 ODS. Els casos es barregen per evitar
 // que l'alumnat pugui respondre només seguint l'ordre de les fitxes.
 const missions=[
  {ods:1,text:'Un ajuntament ajuda les famílies sense recursos a pagar un habitatge digne.',alts:[8,10,11],why:'L’objectiu principal és eliminar la pobresa i garantir necessitats bàsiques.'},
  {ods:2,text:'Un projecte reparteix aliments nutritius i redueix la malnutrició infantil.',alts:[1,3,12],why:'Fam zero tracta de l’alimentació suficient, segura i nutritiva.'},
  {ods:3,text:'Un centre de salut facilita vacunes i revisions mèdiques a tothom.',alts:[4,6,10],why:'La prevenció de malalties i l’atenció sanitària formen part de Salut i benestar.'},
  {ods:4,text:'Una escola proporciona recursos perquè tots els alumnes puguin continuar estudiant.',alts:[1,5,9],why:'L’accés a una educació inclusiva i de qualitat és el centre de l’ODS 4.'},
  {ods:5,text:'Una empresa tecnològica garanteix les mateixes oportunitats a dones i homes.',alts:[4,8,10],why:'L’ODS 5 posa el focus en la igualtat de drets i oportunitats entre gèneres.'},
  {ods:6,text:'Un poble construeix una xarxa de clavegueram i una instal·lació de potabilització.',alts:[3,7,11],why:'L’aigua potable i el sanejament són la prioritat de l’ODS 6.'},
  {ods:7,text:'Una comunitat instal·la plaques solars per disposar d’electricitat neta i assequible.',alts:[9,12,13],why:'L’accés a energia moderna, neta i assequible correspon a l’ODS 7.'},
  {ods:8,text:'Una fàbrica millora la seguretat laboral i assegura salaris i horaris dignes.',alts:[5,9,12],why:'L’ODS 8 defensa el treball digne i unes condicions laborals justes.'},
  {ods:9,text:'Un equip dissenya un pont resistent i una xarxa de transport que suporti inundacions.',alts:[7,11,13],why:'Les infraestructures resilients i la innovació són claus a l’ODS 9.'},
  {ods:10,text:'Un municipi adapta els serveis públics perquè ningú quedi exclòs per la seva situació personal o econòmica.',alts:[1,5,11],why:'L’ODS 10 vol reduir les desigualtats entre persones i col·lectius.'},
  {ods:11,text:'Una ciutat crea carrils bici segurs, parcs de barri i transport públic accessible.',alts:[7,9,13],why:'L’ODS 11 busca ciutats i comunitats habitables, segures i sostenibles.'},
  {ods:12,text:'L’institut repara ordinadors antics abans de comprar-ne de nous i separa els residus.',alts:[4,9,13],why:'Reparar, reutilitzar i consumir amb responsabilitat són accions pròpies de l’ODS 12.'},
  {ods:13,text:'Un municipi redacta un pla per reduir emissions i adaptar-se a les onades de calor.',alts:[7,11,15],why:'L’acció davant del canvi climàtic és l’objectiu central de l’ODS 13.'},
  {ods:14,text:'Un grup retira plàstics del mar i protegeix les praderies de posidònia.',alts:[6,12,15],why:'Els mars, els oceans i els ecosistemes marins corresponen a l’ODS 14.'},
  {ods:15,text:'Es recupera un bosc incendiat i es protegeixen les espècies que hi viuen.',alts:[11,13,14],why:'L’ODS 15 se centra en els ecosistemes terrestres i la biodiversitat.'},
  {ods:16,text:'Una institució publica com utilitza els diners públics i facilita l’accés a la justícia.',alts:[8,10,17],why:'La transparència, la justícia i les institucions responsables són l’ODS 16.'},
  {ods:17,text:'Diversos instituts, entitats i ajuntaments cooperen en un projecte ambiental compartit.',alts:[9,11,16],why:'L’ODS 17 tracta de cooperar i crear aliances per assolir els altres objectius.'}
 ];
 const barreja=items=>{
  const resultat=[...items];
  for(let i=resultat.length-1;i>0;i--){
   const j=Math.floor(Math.random()*(i+1));
   [resultat[i],resultat[j]]=[resultat[j],resultat[i]];
  }
  return resultat;
 };
 const block=make('section','ud2-ods-passaport');
 block.id='ud2-ods-passaport';
 block.setAttribute('aria-labelledby','ud2-ods-passaport-titol');
 block.append(
  make('span','ud2-ods-passaport-eyebrow','✏️ ACTIVITAT INDIVIDUAL · 15–20 MINUTS')
 );
 const heading=make('h3','ud2-ods-passaport-heading','Passaport dels 17 ODS');
 heading.id='ud2-ods-passaport-titol';block.append(heading);
 block.append(make('p','ud2-ods-passaport-intro',
  'Llegeix les 17 fitxes de dalt. Després, en cada situació, busca quin ODS hi està més relacionat. Pots tornar a consultar les fitxes sempre que vulguis.'));
 const steps=make('ol','ud2-ods-passaport-steps');
 ['Llegeix les fitxes','Relaciona 17 situacions','Proposa una millora al Rovira-Forns'].forEach(s=>steps.append(make('li','',s)));
 block.append(steps);
 const game=make('div','ud2-ods-passaport-game');
 const count=make('div','ud2-ods-passaport-count');
 count.setAttribute('aria-live','polite');
 const meter=make('progress','ud2-ods-passaport-progress');
 meter.max=missions.length;meter.value=0;
 meter.setAttribute('aria-label','Missions completades');
 const question=make('h4','ud2-ods-passaport-question');
 const options=make('div','ud2-ods-passaport-options');
 const feedback=make('p','ud2-ods-passaport-feedback');
 feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 const next=make('button','ud2-ods-passaport-next','Següent situació →');
 next.type='button';next.hidden=true;
 game.append(count,meter,question,options,feedback,next);
 const done=make('div','ud2-ods-passaport-done');
 done.hidden=true;
 const result=make('h4','ud2-ods-passaport-result');
 done.append(result,make('p','',
  'Ara tria una necessitat real del nostre institut i pensa com millorar-la amb un ODS. Escriu les teves respostes individualment.'));
 const label1=make('label','ud2-ods-passaport-label','1. Quin ODS triaries per millorar el Rovira-Forns? Per què?');
 const answer1=make('textarea','ud2-ods-passaport-textarea');
 answer1.rows=3;answer1.placeholder='Triaria l’ODS ... perquè ...';
 const label2=make('label','ud2-ods-passaport-label','2. Quina acció concreta proposes i com comprovaries que ha funcionat?');
 const answer2=make('textarea','ud2-ods-passaport-textarea');
 answer2.rows=3;answer2.placeholder='Podríem ... i ho comprovaríem mesurant ...';
 label1.append(answer1);label2.append(answer2);
 const controls=make('div','ud2-ods-passaport-controls');
 const copy=make('button','ud2-ods-passaport-copy','📋 Copiar les meves respostes');
 copy.type='button';
 const again=make('button','ud2-ods-passaport-again','↻ Tornar a practicar');
 again.type='button';
 const copyStatus=make('p','ud2-ods-passaport-copy-status');
 copyStatus.setAttribute('role','status');
 controls.append(copy,again);done.append(label1,label2,controls,copyStatus);
 block.append(game,done);
 explorer.insertAdjacentElement('afterend',block);
 let ordre=barreja(missions),index=0,encerts=0;
 function showQuestion(){
  const item=ordre[index];
  count.textContent='SITUACIÓ '+(index+1)+' DE '+missions.length;
  meter.value=index;
  question.textContent=item.text;
  options.replaceChildren();feedback.textContent='';feedback.hidden=true;next.hidden=true;
  const buttons=barreja([item.ods,...item.alts]).map(ods=>{
   const button=make('button','ud2-ods-passaport-option','ODS '+ods+' · '+noms[ods]);
   button.type='button';
   button.addEventListener('click',()=>{
    const correct=ods===item.ods;
    if(correct)encerts++;
    buttons.forEach(b=>{
     b.disabled=true;
     b.classList.toggle('is-correct',b.textContent.startsWith('ODS '+item.ods+' ·'));
    });
    button.classList.add(correct?'is-chosen-correct':'is-chosen-wrong');
    feedback.textContent=(correct?'✅ Molt bé! ':'🔎 La resposta principal és l’ODS '+item.ods+'. ')+item.why;
    feedback.hidden=false;next.hidden=false;
    next.textContent=index===ordre.length-1?'Veure el meu resultat →':'Següent situació →';
   });
   options.append(button);return button;
  });
 }
 next.addEventListener('click',()=>{
  index++;
  if(index<ordre.length)showQuestion();
  else{
   meter.value=missions.length;game.hidden=true;done.hidden=false;
   result.textContent='🎉 Passaport completat! '+encerts+' de '+missions.length+' respostes correctes a la primera.';
   done.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
 });
 copy.addEventListener('click',async()=>{
  const a=answer1.value.trim(),b=answer2.value.trim();
  if(!a||!b){copyStatus.textContent='Escriu les dues respostes abans de copiar-les.';return;}
  const output='Passaport dels 17 ODS · 4t ESO\nEncerts: '+encerts+'/'+missions.length+
   '\n\n1. ODS que triaria i justificació:\n'+a+'\n\n2. Acció i indicador:\n'+b;
  try{
   await navigator.clipboard.writeText(output);
   copyStatus.textContent='✅ Respostes copiades. Ara les pots enganxar a Classroom.';
  }catch(e){
   copyStatus.textContent='No s’han pogut copiar automàticament. Selecciona el text de les dues respostes per enganxar-lo a Classroom.';
  }
 });
 again.addEventListener('click',()=>{
  ordre=barreja(missions);index=0;encerts=0;
  game.hidden=false;done.hidden=true;answer1.value='';answer2.value='';copyStatus.textContent='';
  showQuestion();block.scrollIntoView({block:'start',behavior:'smooth'});
 });
 showQuestion();
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

 // El debat té dos passos com els altres índexs: primer aprenem i triem el tema;
 // després preparem l'argumentació i fem el debat amb els rols i el cronòmetre.
 const debatePanel=originalPanels[8];
 const debateGrid=debatePanel?.querySelector('.debate-topic-grid');
 const debateHeader=debatePanel?.querySelector(':scope > .ud2-main-topic-head');
 const debateExample=debatePanel?.querySelector(':scope > .ud2-debate-example');
 const debateExercise=debatePanel?.querySelector('#ods-debate');
 const debateContent=debatePanel?.querySelector(':scope > .concept-content');
 const debateLinks=debatePanel?.querySelector(':scope > .ud2-context-links');
 let debateChooser=null;
 if(debateGrid&&debateHeader&&debateExample&&debateExercise){
  debateChooser=make('div','ud2-debate-choose');
  const debateIntro=make('div','ud2-debate-index-intro');
  debateIntro.append(
   make('strong','','Tria l’apartat que vols treballar'),
   make('span','','Primer coneix com es fa un debat i tria el tema; després posa-ho en pràctica.')
  );
  const stepNav=make('nav','ud2-debate-step-grid');
  stepNav.setAttribute('aria-label','Els dos passos del debat');
  const cards=[
   ['📚','Com es fa un debat?'],
   ['🎤','Fem el nostre debat']
  ].map(([icon,label],i)=>{
   const button=make('button','ud2-debate-step-card');
   button.type='button';
   button.setAttribute('aria-controls','ud2-debate-step-'+(i+1));
   button.append(
    make('span','ud2-debate-step-icon',icon),
    make('span','ud2-debate-step-label')
   );
   button.lastElementChild.append(
    make('small','',(i+1)+'. DEBAT'),
    make('strong','',label)
   );
   stepNav.append(button);
   return button;
  });
  debateChooser.append(debateIntro,stepNav);
  main.insertBefore(debateChooser,frame);

  const first=make('section','ud2-debate-step');
  first.id='ud2-debate-step-1';
  const second=make('section','ud2-debate-step');
  second.id='ud2-debate-step-2';

  debateHeader.querySelector('.ud2-main-eyebrow').textContent='DEBAT · PAS 1 DE 2';
  debateHeader.querySelector('h2').textContent='Com es fa un debat?';
  debateHeader.querySelector('p').textContent='Comença amb la MOSTRA per entendre com funciona. Després escull un dels deu temes.';
  first.append(debateHeader);

  const explanation=make('div','ud2-debate-introduction');
  const origTitle=debateExercise.querySelector(':scope > h3');
  const origText=debateExercise.querySelector(':scope > p');
  if(origTitle){origTitle.textContent='Què és un debat acadèmic?';explanation.append(origTitle);}
  if(origText)explanation.append(origText);
  first.append(explanation);

  const topicSection=make('section','ud2-debate-topic-section');
  const topicHeading=debateExercise.querySelector('.debate-picker-heading');
  const topicHelp=debateExercise.querySelector('.debate-picker-help');
  const topicSelect=debateExercise.querySelector('#debate-topic');
  if(topicHeading)topicSection.append(topicHeading);
  else topicSection.append(make('h3','debate-picker-heading','Tria el tema que vols debatre'));
  if(topicHelp)topicSection.append(topicHelp);
  if(topicSelect)topicSection.append(topicSelect);
  topicSection.append(debateGrid);

  // Pistes breus per al tema escollit: una idea a favor, una en contra i què investigar.
  // Els textos provenen de la mateixa fitxa que es reutilitza en el pas 2.
  const topicPreview=make('section','ud2-debate-position-preview');
  topicPreview.setAttribute('aria-live','polite');
  topicPreview.append(make('span','ud2-debate-preview-eyebrow','💡 PISTES PER COMENÇAR'));
  const previewTitle=make('h4','ud2-debate-preview-title');
  const previewGrid=make('div','ud2-debate-preview-grid');
  const proCard=make('article','ud2-debate-preview-side ud2-debate-preview-pro');
  proCard.append(make('strong','','👍 A FAVOR'));
  const proText=make('ul','ud2-debate-preview-points');
  proCard.append(proText);
  const conCard=make('article','ud2-debate-preview-side ud2-debate-preview-contra');
  conCard.append(make('strong','','👎 EN CONTRA'));
  const conText=make('ul','ud2-debate-preview-points');
  conCard.append(conText);
  previewGrid.append(proCard,conCard);
  const previewQuestion=make('p','ud2-debate-preview-evidence');
  const previewReminder=make('p','ud2-debate-preview-reminder',
   'Aquestes idees són només el punt de partida: busca dades, exemples i fonts fiables per defensar la teva posició.');
  topicPreview.append(previewTitle,previewGrid,previewQuestion,previewReminder);
  topicSection.append(topicPreview);

  const debatePrompt=debateExercise.querySelector('#debate-prompt');
  function fillPreviewPoints(list,text){
   list.replaceChildren();
   const points=text.match(/[^.!?]+(?:[.!?]+|$)/g)||[text];
   points.map(point=>point.trim()).filter(Boolean).forEach(point=>{
    list.append(make('li','',point));
   });
  }
  function updateTopicPreview(){
   if(!debatePrompt)return;
   const lines=[...debatePrompt.querySelectorAll(':scope > p')];
   const value=(p)=>p?.textContent?.replace(p.querySelector('strong')?.textContent||'','').trim()||'';
   previewTitle.textContent=debatePrompt.querySelector('h4')?.textContent||'';
   fillPreviewPoints(proText,value(lines[1]));
   fillPreviewPoints(conText,value(lines[2]));
   previewQuestion.textContent='🔎 Què hauríem d’investigar? '+value(lines[3]);
  }
  debateGrid.querySelectorAll('.debate-topic-card').forEach(button=>{
   button.addEventListener('click',()=>{
    updateTopicPreview();
    requestAnimationFrame(()=>topicPreview.scrollIntoView({
     block:'start',
     behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'
    }));
   });
  });
  updateTopicPreview();
  // La taula d'exemple és la mateixa MOSTRA que apareix a la primera targeta.
  // Es copia només un cop, abans que l'alumnat seleccioni un tema diferent.
  const sampleMotion=debateExample?.querySelector('.ud2-debate-motion');
  if(sampleMotion){
   const sampleTitle=sampleMotion.querySelector('h3');
   if(sampleTitle)sampleTitle.textContent='MOSTRA · '+previewTitle.textContent;
   const proPoints=[...proText.querySelectorAll('li')].map(x=>x.textContent);
   const conPoints=[...conText.querySelectorAll('li')].map(x=>x.textContent);
   [...sampleMotion.querySelectorAll('table tr')].slice(1).forEach((row,i)=>{
    const cells=row.querySelectorAll('td');
    if(cells[0])cells[0].textContent=proPoints[i]||'';
    if(cells[1])cells[1].textContent=conPoints[i]||'';
   });
  }
  topicSection.append(make('p','ud2-debate-topic-hint','Quan hagis triat el tema, passa al segon apartat per preparar el debat.'));
  first.append(topicSection,debateExample);
  const photo=debateContent?.querySelector(':scope > .photo-lesson');
  if(photo)first.append(photo);
  const next=make('button','ud2-debate-next','Continuar · Fem el nostre debat →');
  next.type='button';
  first.append(next);

  const secondHeader=make('div','ud2-main-topic-head ud2-debate-step-head');
  secondHeader.append(
   make('span','ud2-main-eyebrow','DEBAT · PAS 2 DE 2'),
   make('h2','','Fem el nostre debat'),
   make('p','','Prepara els arguments del tema escollit, reparteix els rols i segueix els torns del debat.')
  );
  second.append(secondHeader,debateExercise);
  if(debateLinks)second.append(debateLinks);
  debatePanel.replaceChildren(first,second);

  function showDebateStep(i,scroll=false){
   cards.forEach((button,j)=>{
    button.setAttribute('aria-pressed',String(i===j));
    button.classList.toggle('is-selected',i===j);
   });
   first.hidden=i!==0;
   second.hidden=i!==1;
   if(scroll)frame.scrollIntoView({
    block:'start',
    behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'
   });
  }
  cards.forEach((button,i)=>button.addEventListener('click',()=>showDebateStep(i,true)));
  next.addEventListener('click',()=>showDebateStep(1,true));
  showDebateStep(0);
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
  if(debateChooser)debateChooser.hidden=i!==2;
  frame.classList.toggle('ud2-workshop-frame',i===1);
  frame.classList.toggle('ud2-debate-frame',i===2);
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
 addODSIndividualActivity();
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
