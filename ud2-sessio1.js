/* UD2 apartat 1: una idea clara per desplegable, sense duplicar teoria. */
(function(){
'use strict';
const ITEMS=[{"t":"Què és el desenvolupament sostenible?","definition":"Cobrir les necessitats de les persones d’avui sense impedir que les generacions futures puguin cobrir les seves.","explanation":"En tecnologia, un producte no és bo només perquè funcioni. També hem de pensar en els materials, l’energia, la durada, les reparacions i les persones que el fabriquen o l’utilitzen.","example":"Al nostre taller tenim un fanalet de Halloween. Per Nadal podem conservar-ne la carcassa i canviar-ne només la decoració, sempre que el muntatge sigui segur.","remember":"No és suficient posar una etiqueta «eco»: cal comprovar com es fabrica, s’utilitza i es gestiona al final.","photo":38264269,"photoText":"Una reparació pot allargar la vida útil dels productes.","points":[["🗑️","Fer-ne un de nou","Més materials i més feina de fabricació."],["🎄","Adaptar el que tenim","Conservar l’estructura i comprovar que continuï sent segura."]],"q":"Quina opció és més coherent amb la sostenibilitat?","opts":["Reutilitzar quan sigui possible i comprovar la seguretat.","Comprar-ho tot de nou perquè sigui més modern.","Triar sempre l’objecte amb el preu més baix."],"ok":0,"why":"La reutilització pot estalviar materials, però no podem oblidar la seguretat."},{"t":"Dimensió ambiental","definition":"Estudiar l’impacte de la tecnologia sobre la natura i els recursos.","explanation":"Fabricar qualsevol objecte necessita materials. També pot consumir aigua i energia, i generar emissions i residus durant la fabricació, l’ús o l’eliminació.","example":"En el fanalet, reduïm l’impacte si aprofitem la carcassa, fem servir retalls recuperats i evitem decoracions que es trenquin a la primera.","remember":"Pregunta clau: quins materials utilitzem, quanta energia gastem i quins residus generem?","photo":8543598,"photoText":"La recuperació d’espais naturals és una mesura ambiental.","points":[["⛏️","Materials","Quantes peces noves necessitem?"],["⚡","Energia","Quin consum té la il·luminació?"],["♻️","Residus","Què podem tornar a fer servir?"]],"q":"Quina acció millora sobretot l’aspecte ambiental del fanalet?","opts":["Pintar-lo de color verd.","Reutilitzar la base i generar menys residus.","Posar-hi més decoració sense revisar els materials."],"ok":1,"why":"Fer servir menys materials nous i generar menys residus pot reduir l’impacte ambiental."},{"t":"Dimensió social","definition":"Valorar com una tecnologia afecta les persones: salut, seguretat, igualtat i accessibilitat.","explanation":"Una solució tecnològica no hauria de posar en perill les persones ni excloure-les. També hem de tenir presents les condicions de treball i escoltar qui farà servir el producte.","example":"Quan transformem el fanalet, treballem amb baixa tensió, eliminem arestes tallants i repartim les tasques perquè tothom pugui participar.","remember":"Pregunta clau: és segur, accessible i just per a les persones implicades?","photo":7710139,"photoText":"Col·laborar i escoltar també forma part d’un projecte tecnològic.","points":[["🛡️","Seguretat","Baixa tensió i materials segurs."],["🤝","Participació","Tothom contribueix."],["♿","Accessibilitat","El resultat ha de poder-se utilitzar."]],"q":"Quina decisió té en compte la dimensió social?","opts":["Deixar tota la feina a una persona.","Prioritzar l’aspecte encara que els cables siguin perillosos.","Repartir tasques i revisar la seguretat elèctrica."],"ok":2,"why":"La participació i la seguretat són qüestions socials."},{"t":"Dimensió econòmica","definition":"Comprovar si un producte és viable al llarg del temps, no només el primer dia.","explanation":"El preu de compra és només una part del cost. També cal pensar en el manteniment, l’energia que consumeix, les reparacions i quant temps durarà.","example":"Exemple inventat: si comprar un fanalet nou costés 12 € i adaptar el que ja tenim costés 3 €, la reutilització estalviaria 9 € inicials. Encara hauríem de comparar-ne la durada i el consum.","remember":"Pregunta clau: què ens costarà comprar-lo, utilitzar-lo, mantenir-lo i reparar-lo?","photo":38264269,"photoText":"Reparar pot ser una alternativa a comprar-ne un altre.","points":[["🛍️","Comprar-ne un de nou","12 € (exemple)"],["🛠️","Transformar l’existent","3 € (exemple)"],["💶","Diferència inicial","9 € (exemple)"]],"q":"Quins costos hem de considerar?","opts":["Només el preu inicial.","Compra, ús, manteniment, reparacions i durada.","Només el preu de la pintura."],"ok":1,"why":"El cost total inclou tota la vida útil del producte."},{"t":"Com decidim si una tecnologia és sostenible?","definition":"La millor decisió intenta equilibrar medi ambient, persones i economia.","explanation":"Una opció pot consumir poca energia però ser perillosa. Una altra pot ser barata però trencar-se ràpidament. Per això no hi ha una sola pregunta que resolgui tota la sostenibilitat.","example":"Per al fanalet de Nadal: conservar la carcassa, posar-hi una il·luminació segura de baix consum i comprovar quant ens costa adaptar-lo.","remember":"Abans de decidir: què guanyem, què perdem i què ens falta comprovar?","photo":9875421,"photoText":"Les noves tecnologies han de valorar-se des de diferents punts de vista.","points":[["🌿","Medi ambient","Materials, energia i residus."],["👥","Persones","Seguretat i participació."],["💶","Economia","Cost i durabilitat."]],"q":"Un producte nou consumeix menys però és car i difícil de reparar. Què toca fer?","opts":["Triar-lo sense pensar en res més.","Triar sempre el més barat.","Comparar consum, materials, seguretat, cost i durada."],"ok":2,"why":"Una decisió sostenible exigeix valorar les tres dimensions conjuntament."}];
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function txt(parent,tag,value,cls=''){const e=el(tag,cls,value);parent.append(e);return e}
const PHT=[["Electronic_technician_at_work_1.jpg","a/a5","18bit","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/",["Circuit i eines de treball: podem revisar un dispositiu en comptes de substituir-lo.","Manteniment i reparació: allarguem la vida útil dels equips.","Identifica quines peces del nostre fanalet són reutilitzables."]],["3D_printer_working_on_green_model_parts.jpg","9/9b","Shixart1985","CC BY 2.0","https://creativecommons.org/licenses/by/2.0/",["Capçal d’impressió: transforma un filament en peces per capes.","Fabricació: requereix material, electricitat i temps de màquina.","Abans d’imprimir de nou, comprova si podem conservar la carcassa anterior."]],["Rooftop_Photovoltaic_Array.jpg","e/e9","Lucas Braun","CC BY-SA 3.0","https://creativecommons.org/licenses/by-sa/3.0/",["Instal·lar plaques sobre una teulada implica treballar en altura.","La formació, la seguretat i les condicions laborals són criteris socials.","En un projecte escolar, la seguretat del circuit i la participació també compten."]],["Keysight_InfiniiVision_DSOX_4024A_and_digital_multimeter_and_power_supply_in_laboratory_use.jpg","0/09","Radarvector","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/",["Oscil·loscopi: mostra com varien els senyals amb el temps.","Multímetre i font d’alimentació: serveixen per mesurar i fer proves elèctriques.","Per estimar el cost d’ús, necessitem la potència, les hores i el preu de l’energia."]],["RGB_LED_mounted_over_a_breadboard.jpg","2/20","Viferico","CC BY-SA 4.0","https://creativecommons.org/licenses/by-sa/4.0/",["LED RGB: canviar el color no exigeix canviar de component.","La placa de proves permet revisar un disseny abans de muntar-lo definitivament.","Cal comparar consum, seguretat, reparació i cost, no només l’aspecte."]]];
const EXTRA=[["Dades per prendre una decisió","Abans de transformar el fanalet, identifica la carcassa, el material, el tipus d’il·luminació, les peces que es poden aprofitar i allò que s’hauria de substituir.","Compara una carcassa nova amb una reutilitzada: quines mesures necessites per justificar la tria?"],["Del material al residu","El cicle de vida inclou obtenció del material, fabricació, transport, ús i final de vida. Una impressió 3D pot consumir poca matèria, però també necessita energia; si ja tenim una peça funcional, cal justificar per què en faríem una de nova.","Quines dues peces podem evitar imprimir si conservem el fanalet?"],["La seguretat es dissenya","En el projecte haurem de revisar la baixa tensió, les connexions, els cantells tallants i l’estabilitat de la decoració. Les tasques s’han de repartir perquè totes les persones puguin participar.","Qui comprovarà el circuit i què anotarem com a prova de seguretat?"],["Càlcul del cost elèctric","Exemple hipotètic: amb una llum de 2 W, 4 hores cada dia durant 30 dies, l’energia consumida és 2 × 4 × 30 / 1000 = 0,24 kWh. Amb 0,25 €/kWh serien 0,06 €. Aquest resultat no inclou materials ni fabricació.","Amb una llum de 5 W i les mateixes hores, quin consum en kWh tindríem?"],["Matriu de decisió tecnològica","Compararem cada proposta segons tres criteris: impacte ambiental, seguretat i participació, i cost total. Pot haver-hi compensacions: una opció pot estalviar energia però ser difícil de reparar.","Defensa una proposta amb un argument ambiental, un social i un d’econòmic."]];
const SCORES=new Map();
function totalProgress(){
 const box=document.getElementById('ud2-total-score');if(!box)return;
 const done=SCORES.size,correct=[...SCORES.values()].filter(Boolean).length;
 box.querySelector('.ud2-score-result').textContent=correct+' / 6 punts';
 box.querySelector('.ud2-score-text').textContent=done+' de 6 activitats fetes · '+correct+' respostes correctes'+(done===6?' · Sessió completada!':'');
 box.querySelector('.ud2-score-fill').style.width=(done/6*100)+'%';
 [...box.querySelectorAll('.ud2-score-dot')].forEach((dot,i)=>{
   const key=i===5?'final':'c'+i;
   dot.classList.toggle('answered',SCORES.has(key));
   dot.classList.toggle('right',SCORES.get(key)===true);
 });
}
function progressBox(){
 const box=el('div','ud2-score');box.id='ud2-total-score';box.setAttribute('aria-label','Puntuació acumulada de la sessió');
 const top=el('div','ud2-score-top');txt(top,'strong','🏆 ACTIVITATS QUE SE SUMEN');txt(top,'span','0 / 6 punts','ud2-score-result');box.append(top);
 const track=el('div','ud2-score-track'),fill=el('div','ud2-score-fill');track.append(fill);box.append(track);
 txt(box,'p','0 de 6 activitats fetes · 0 respostes correctes','ud2-score-text');
 const dots=el('div','ud2-score-dots');for(let i=0;i<6;i++)txt(dots,'span',i===5?'Repte final':'Concepte '+(i+1),'ud2-score-dot');
 box.append(dots);return box;
}
function picture(item,index){
 const data=PHT[index],file=data[0],hash=data[1],photoSrc='https://thumb.wikimedia.org/wikipedia/commons/thumb/'+hash+'/'+file+'/960px-'+file;
 const fig=el('figure','lesson21-photo ud2-photo-tech'),frame=el('div','lesson21-photo-frame');
 const img=el('img','lesson21-photo-img');img.loading='lazy';img.decoding='async';img.src=photoSrc;img.alt='Fotografia real de tecnologia: '+item.t;
 img.addEventListener('error',()=>{frame.classList.add('missing');img.remove()},{once:true});
 frame.append(img);txt(frame,'span','🔧 FOTOGRAFIA TÈCNICA','lesson21-photo-label');
 fig.append(frame);
 const foot=el('figcaption','lesson21-credit');
 txt(foot,'strong','Observa a la fotografia:');
 const ul=el('ul','ud2-photo-notes');data[5].forEach(x=>txt(ul,'li',x));foot.append(ul);
 const author=txt(foot,'a','Foto: '+data[2]);author.href='https://commons.wikimedia.org/wiki/File:'+file;author.target='_blank';author.rel='noopener noreferrer';
 txt(foot,'span',' · ');
 const lic=txt(foot,'a',data[3]);lic.href=data[4];lic.target='_blank';lic.rel='noopener noreferrer';
 txt(foot,'span',' · Enquadrament i rètols didàctics afegits');
 fig.append(foot);return fig;
}
function diagram(item){
 const figure=el('figure','lesson21-diagram'),grid=el('div','lesson21-cards');
 item.points.forEach(([emoji,head,desc])=>{
  const card=el('div','lesson21-card');
  txt(card,'span',emoji,'lesson21-emoji');txt(card,'strong',head);
  txt(card,'p',desc);grid.append(card);
 });
 figure.append(grid);txt(figure,'figcaption','Esquema original: tres coses que has de saber explicar.');return figure;
}
function quiz(item,index){
 const box=el('section','lesson21-quiz');txt(box,'h4','🎯 Activitat '+(index+1)+' · 1 punt');
 txt(box,'p',item.q);
 const options=el('div','lesson21-options'),feedback=el('p','lesson21-feedback');
 feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 item.opts.forEach((value,i)=>{
  const b=el('button','lesson21-answer',String.fromCharCode(65+i)+' · '+value);b.type='button';
  b.addEventListener('click',()=>{
   if(options.dataset.answered)return;options.dataset.answered='1';
   SCORES.set('c'+index,i===item.ok);
   [...options.children].forEach((option,j)=>{option.disabled=true;if(j===item.ok)option.classList.add('correct')});
   if(i!==item.ok)b.classList.add('wrong');
   feedback.textContent=(i===item.ok?'Correcte! +1 punt ✨ ':'Repassa la resposta en verd. ')+item.why;
   totalProgress();
  });options.append(b);
 });
 box.append(options,feedback);
 if(index<4){
  const next=txt(box,'button','Continua al concepte següent →','ud2-next');next.type='button';next.addEventListener('click',()=>{
   const arr=[...document.querySelectorAll('.lesson21 > .concept-drop')];
   if(arr[index+1]){arr[index+1].open=true;arr[index+1].scrollIntoView({behavior:'smooth',block:'start'})}
  });
 }
 return box;
}
function article(item,i){
 const a=el('article','lesson21-content');
 txt(a,'span','CONCEPTE '+(i+1)+' DE 5','lesson21-kicker');
 txt(a,'p',item.definition,'lesson21-definition');
 const layout=el('div','lesson21-layout'),text=el('div');
 txt(text,'h4','Què vol dir exactament?');txt(text,'p',item.explanation);
 txt(text,'h4','Exemple tècnic: el nostre fanalet');txt(text,'p',item.example);
 txt(text,'h4',EXTRA[i][0],'ud2-tech-h');
 txt(text,'p',EXTRA[i][1]);
 layout.append(text,picture(item,i));a.append(layout);
 txt(a,'p','💡 '+item.remember,'lesson21-remember');
 txt(a,'h4','Esquema per entendre-ho');a.append(diagram(item),quiz(item,i));
 const reflect=el('details','ud2-reflection');txt(reflect,'summary','✍️ Aplica-ho al nostre projecte');
 txt(reflect,'p',EXTRA[i][2]);a.append(reflect);
 return a;
}
function globalChallenge(){
 const box=el('section','ud2-final-challenge');
 txt(box,'span','🎄 +1 PUNT · REPTE FINAL','lesson21-kicker');
 txt(box,'h3','Quina proposta defensaries?');
 txt(box,'p','El taller vol adaptar el fanalet de Halloween a Nadal. Ja tenim una carcassa en bon estat. Què faries?');
 const picks=[
  'Comprar una carcassa nova sense calcular quins materials es necessiten.',
  'Conservar la carcassa, decorar-la de manera desmuntable, revisar els LEDs i comparar el cost i el consum.',
  'Afegir-hi més llums sense comprovar-ne la potència ni les connexions.'
 ];
 const opts=el('div','lesson21-options'),feedback=el('p','lesson21-feedback');
 feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 picks.forEach((value,i)=>{
  const b=el('button','lesson21-answer',String.fromCharCode(65+i)+' · '+value);b.type='button';
  b.addEventListener('click',()=>{
   if(opts.dataset.done)return;opts.dataset.done='1';
   SCORES.set('final',i===1);
   [...opts.children].forEach((option,j)=>{option.disabled=true;if(j===1)option.classList.add('correct')});
   if(i!==1)b.classList.add('wrong');
   feedback.textContent=(i===1?'Correcte! +1 punt. ':'La resposta B és la més completa. ')+'Cal pensar alhora en els materials, les persones i el cost.';
   totalProgress();
  });opts.append(b);
 });
 box.append(opts,feedback);
 const more=el('details','ud2-reflection');txt(more,'summary','✍️ Argumenta la teva decisió');
 txt(more,'p','Escriu tres frases: una d’ambiental (materials), una de social (seguretat i participació) i una d’econòmica (cost i durada).');
 box.append(more);return box;
}
function render(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const first=document.querySelector('.concept-hub .concept-group');if(!first)return;
 first.classList.add('lesson21');
 const title=first.querySelector('.concept-group-title');if(title)title.textContent='1. Entendre la sostenibilitat';
 const intro=el('div','lesson21-intro');
 txt(intro,'strong','UNA CLASSE · 5 PREGUNTES');
 txt(intro,'p','Avui descobrirem què vol dir que una tecnologia sigui sostenible. Ho relacionarem amb el fanalet que transformarem de Halloween a Nadal.');
 txt(intro,'p','Obre un concepte: llegeix, mira el dibuix i resol una pregunta. Després continua amb el següent.');
 if(title){title.after(intro);intro.after(progressBox())}
 const sections=[...first.querySelectorAll(':scope > .concept-drop')];
 ITEMS.forEach((item,i)=>{
  const d=sections[i];if(!d)return;
  const heading=d.querySelector('.concept-title strong');if(heading)heading.textContent=item.t;
  const sub=d.querySelector('.concept-title small');if(sub)sub.textContent='Teoria · Exemple · Imatge · Pregunta';
  const holder=d.querySelector('.concept-content');if(holder)holder.replaceChildren(article(item,i));
 });
 first.append(globalChallenge());
 if(sections[0])sections[0].open=true;
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();render()};
})();