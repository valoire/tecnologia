/* UD2 · Activitat de classe: el consell sostenible.
   Només tema 1. Les eleccions es queden a la pàgina; res no s'envia ni es desa.
   No toca les dues preguntes orals ni el test de 10 preguntes de la UD. */
(function(){
'use strict';
const CASES=[
 {
  id:'placa',emoji:'🌳',area:'URBANISME SOSTENIBLE',
  title:'Una plaça per al barri',
  problem:'Volem renovar una plaça on a l’estiu fa molta calor i per on passen persones amb mobilitat reduïda. Quina proposta defensaries?',
  options:[
   {name:'A · Tot paviment nou i bonic',detail:'Un acabat decoratiu uniforme, però sense ombra ni bancs.',effects:['Més superfície que pot escalfar-se; poca ombra.','L’espai continua sent incòmode per a part del veïnat.','La inversió no resol el problema principal.'],judge:'Cal revisar la necessitat real: embellir no és suficient si la plaça continua sent calorosa i poc còmoda.'},
   {name:'B · Camí accessible, ombra i bancs',detail:'Recorregut accessible, arbres adequats al clima i seients.',effects:['L’ombra pot reduir l’exposició al sol; cal estudiar aigua i espècies.','Millora la comoditat i el pas de més persones.','Requereix inversió i manteniment, però pot aportar més utilitat.'],judge:'És una alternativa equilibrada si planifiquem bé el cost, l’aigua, l’accessibilitat i la conservació.'},
   {name:'C · Molts arbres, però escales',detail:'Una zona molt verda a la qual només s’accedeix pujant esglaons.',effects:['Pot tenir beneficis ambientals.','Deixa fora persones amb dificultats de mobilitat.','Caldria reformar els accessos, amb cost addicional.'],judge:'Una solució aparentment verda pot fallar socialment. És millor redissenyar els accessos.'}
  ],
  talk:'Com canviaries la proposta perquè ningú no quedi exclòs?'
 },
 {
  id:'fanalet',emoji:'🎄',area:'ECONOMIA CIRCULAR',
  title:'El fanalet de Halloween',
  problem:'Volem convertir el fanalet del taller en una decoració de Nadal amb peces tallades amb làser. Quina idea és més defensable?',
  options:[
   {name:'A · Reutilitzar i redissenyar peces',detail:'Conservar la carcassa, mesurar els encaixos i substituir només la decoració.',effects:['Aprofitem materials que ja s’han fabricat.','Podem preparar una peça segura, accessible i fàcil de muntar.','Estalviem material nou, però cal temps de disseny i comprovació.'],judge:'Bona opció si comprovem mides, material de tall i seguretat del circuit abans de fabricar.'},
   {name:'B · Tornar-lo a fer tot',detail:'Fabricar de nou carcassa, decoració i circuit encara que funcionin.',effects:['Consum addicional de materials i energia.','Un model nou pot permetre millores, però no aprofita el que tenim.','Més despesa de material i temps de màquina.'],judge:'Abans de fabricar-ho tot, cal justificar què no es pot aprofitar del fanalet original.'},
   {name:'C · Decorar ràpid sense revisar',detail:'Aprofitar la carcassa, però afegir peces que no encaixen i tocar el cablejat.',effects:['Es reutilitza la carcassa, però es poden malbaratar peces.','Un muntatge insegur pot perjudicar els usuaris.','Les reparacions i els errors poden encarir el projecte.'],judge:'Reutilitzar és important, però mai no substitueix la comprovació dels encaixos i la seguretat.'}
  ],
  talk:'Quines mides necessitem abans d’obrir Tinkercad?'
 },
 {
  id:'llum',emoji:'💡',area:'ENERGIA I SEGURETAT',
  title:'Il·luminació del pati',
  problem:'A la tarda el pati necessita llum perquè les persones hi circulin amb seguretat. Com ho podem resoldre?',
  options:[
   {name:'A · Apagar-ho tot sempre',detail:'No hi haurà despesa elèctrica, però tampoc llum quan es necessiti.',effects:['Menor consum, però no és l’únic criteri.','Pot dificultar la seguretat i l’ús de l’espai.','Pot acabar exigint una solució diferent.'],judge:'Estalviar energia no és sostenible si impedim l’ús segur de l’espai.'},
   {name:'B · Molta llum tota la nit',detail:'Focus potents encesos contínuament, encara que no hi hagi ningú.',effects:['Consum i possible contaminació lumínica més elevats.','Bona visibilitat, però cal evitar enlluernaments.','La despesa de funcionament pot ser innecessària.'],judge:'Cal ajustar la llum realment necessària i limitar les hores d’ús i els enlluernaments.'},
   {name:'C · LED i control segons l’ús',detail:'Llum suficient als recorreguts i control horari o sensors ben ajustats.',effects:['Pot reduir el consum sense eliminar tota la llum.','Els recorreguts continuen sent visibles si es dimensiona bé.','Instal·lació inicial, però possible estalvi d’ús.'],judge:'Pot ser una solució equilibrada si comprovem que els sensors, l’horari i la il·luminació siguin adequats.'}
  ],
  talk:'Com comprovaries que realment s’estalvia electricitat?'
 }
];
function E(t,c,txt){const e=document.createElement(t);if(c)e.className=c;if(txt!==undefined)e.textContent=txt;return e;}
function A(p,t,c,txt){const e=E(t,c,txt);p.append(e);return e;}
function miniTheory(){
 const section=E('section','ud2-challenge-context');
 A(section,'h3','', '🏙️ Què és l’urbanisme sostenible?');
 A(section,'p','','És planificar places, carrers, edificis i espais públics perquè les persones els puguin utilitzar de manera segura, accessible i confortable, amb un consum responsable de recursos. No n’hi ha prou amb plantar arbres: s’han de valorar totes les dimensions.');
 const row=E('div','ud2-challenge-theory-cards');
 [
 ['🌿','AMBIENTAL','Ombra, aigua, materials i energia.'],
 ['🤝','SOCIAL','Accessibilitat, salut, seguretat i inclusió.'],
 ['💶','ECONÒMICA','Cost inicial, durada i manteniment.']
 ].forEach(([icon,label,txt])=>{
  const card=E('div','ud2-challenge-theory-card');
  A(card,'span','ud2-challenge-theory-icon',icon);
  A(card,'strong','',label);
  A(card,'p','',txt);row.append(card);
 });section.append(row);
 A(section,'p','ud2-challenge-context-end','Per decidir bé, primer identifiquem la necessitat i després comprovem les tres dimensions. Les bones decisions es justifiquen, no es trien només pel color o perquè semblin «eco».');
 return section;
}
function createCase(data,index,onChange){
 const article=E('article','ud2-challenge-case');
 const header=E('div','ud2-challenge-case-head');
 A(header,'span','ud2-challenge-case-count','CAS '+(index+1)+' / '+CASES.length);
 A(header,'span','ud2-challenge-case-area',data.area);
 article.append(header);
 A(article,'h3','',data.emoji+' '+data.title);
 A(article,'p','ud2-challenge-problem',data.problem);
 const fieldset=E('fieldset','ud2-challenge-options');
 const legend=E('legend','', 'Tria una proposta per defensar:');fieldset.append(legend);
 const inputs=[];
 data.options.forEach((opt,j)=>{
  const label=E('label','ud2-challenge-option');
  const radio=E('input');radio.type='radio';radio.name='ud2-challenge-'+data.id;radio.value=String(j);
  A(label,'span','ud2-challenge-letter',String.fromCharCode(65+j));
  const text=E('span','ud2-challenge-choice-text');
  A(text,'strong','',opt.name);
  A(text,'small','',opt.detail);
  label.append(radio,text);
  // Operable també amb teclat i lector de pantalla.
  radio.setAttribute('aria-label',opt.name+': '+opt.detail);
  fieldset.append(label);inputs.push(radio);
 });
 article.append(fieldset);
 const button=E('button','ud2-challenge-reveal','Veure les conseqüències');
 button.type='button';button.disabled=true;
 const feedback=E('section','ud2-challenge-feedback');feedback.hidden=true;
 feedback.setAttribute('aria-live','polite');
 article.append(button,feedback);
 const render=()=>{
  const checked=inputs.find(x=>x.checked);
  button.disabled=!checked;
  if(checked){
    const chosen=Number(checked.value);
    inputs.forEach(x=>x.closest('label').classList.toggle('is-selected',x===checked));
    if(!feedback.hidden)paint(chosen);
    onChange();
  }
 };
 const paint=idx=>{
  const choice=data.options[idx];
  feedback.replaceChildren();
  A(feedback,'h4','','Què passa amb aquesta opció?');
  const grid=E('div','ud2-challenge-impact-grid');
  [['🌿','Ambiental',choice.effects[0]],['🤝','Social',choice.effects[1]],['💶','Econòmica',choice.effects[2]]]
   .forEach(([icon,name,txt])=>{
    const tile=E('div','ud2-challenge-impact');
    A(tile,'strong','',icon+' '+name);
    A(tile,'p','',txt);grid.append(tile);
   });
  feedback.append(grid);
  const hint=E('p','ud2-challenge-hint');A(hint,'strong','','Què ens ensenya? ');hint.append(document.createTextNode(choice.judge));feedback.append(hint);
  const talk=E('p','ud2-challenge-talk');A(talk,'strong','','Pregunta al grup: ');talk.append(document.createTextNode(data.talk));feedback.append(talk);
 };
 inputs.forEach(x=>x.addEventListener('change',render));
 button.addEventListener('click',()=>{
  const checked=inputs.find(x=>x.checked);
  if(!checked)return;
  paint(Number(checked.value));
  feedback.hidden=false;button.textContent='Comparar una altra opció';
  feedback.scrollIntoView({block:'nearest',behavior:'auto'});
 });
 return {article,isAnswered:()=>inputs.some(x=>x.checked)};
}
function build(){
 const section=E('section','ud2-challenge');section.id='ud2-repte-tres-dimensions';
 const heading=E('div','ud2-challenge-head');
 A(heading,'span','ud2-challenge-eyebrow','✦ ACTIVITAT · 15 MIN · PER PARELLES');
 A(heading,'h2','','El consell de les tres dimensions');
 A(heading,'p','','Formeu un petit equip de disseny. En cada situació decidiu quina proposta defensaríeu i expliqueu-ne els efectes ambientals, socials i econòmics. Hi ha més d’un criteri: la vostra argumentació és important.');
 section.append(heading,miniTheory());
 const progress=E('div','ud2-challenge-progress');
 A(progress,'strong','','Les nostres decisions');
 const count=A(progress,'span','ud2-challenge-count','0 de 3 casos');
 section.append(progress);
 const cases=E('div','ud2-challenge-cases');
 const built=CASES.map((c,i)=>createCase(c,i,()=>{const n=built.filter(r=>r.isAnswered()).length;count.textContent=n+' de 3 casos';progress.classList.toggle('is-complete',n===3);}));
 built.forEach(x=>cases.append(x.article));section.append(cases);
 const close=E('aside','ud2-challenge-close');
 A(close,'span','ud2-challenge-eyebrow','🎤 CONCLUSIÓ · 2 MIN');
 A(close,'h3','','Defensar una decisió');
 A(close,'p','','Cada parella explica una decisió amb aquesta estructura: «Proposem… perquè ambientalment…; socialment…; i econòmicament…». També ha de dir quin inconvenient caldria resoldre.');
 A(close,'p','ud2-challenge-next','Després anirem al taller: mesurarem el fanalet que ja tenim i prepararem un primer disseny pla a Tinkercad.');
 section.append(close);return section;
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const panel=document.getElementById('ud2-main-panel-0');
 if(!panel||panel.querySelector('#ud2-repte-tres-dimensions'))return;
 const challenge=build();
 const workshop=panel.querySelector('#ud2-taller-avui');
 if(workshop)workshop.before(challenge);
 else{const oral=panel.querySelector(':scope > .ud2-oral-questions');if(oral)oral.after(challenge);else panel.append(challenge);}
}
const old=window.preparaUnitatVisual;
if(typeof old==='function')window.preparaUnitatVisual=function(){old();init()};
})();