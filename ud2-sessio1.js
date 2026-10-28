/* UD2 apartat 1: una idea clara per desplegable, sense duplicar teoria. */
(function(){
'use strict';
const ITEMS=[{"t":"Què és el desenvolupament sostenible?","definition":"Cobrir les necessitats de les persones d’avui sense impedir que les generacions futures puguin cobrir les seves.","explanation":"En tecnologia, un producte no és bo només perquè funcioni. També hem de pensar en els materials, l’energia, la durada, les reparacions i les persones que el fabriquen o l’utilitzen.","example":"Al nostre taller tenim un fanalet de Halloween. Per Nadal podem conservar-ne la carcassa i canviar-ne només la decoració, sempre que el muntatge sigui segur.","remember":"No és suficient posar una etiqueta «eco»: cal comprovar com es fabrica, s’utilitza i es gestiona al final.","photo":38264269,"photoText":"Una reparació pot allargar la vida útil dels productes.","points":[["🗑️","Fer-ne un de nou","Més materials i més feina de fabricació."],["🎄","Adaptar el que tenim","Conservar l’estructura i comprovar que continuï sent segura."]],"q":"Quina opció és més coherent amb la sostenibilitat?","opts":["Reutilitzar quan sigui possible i comprovar la seguretat.","Comprar-ho tot de nou perquè sigui més modern.","Triar sempre l’objecte amb el preu més baix."],"ok":0,"why":"La reutilització pot estalviar materials, però no podem oblidar la seguretat."},{"t":"Dimensió ambiental","definition":"Estudiar l’impacte de la tecnologia sobre la natura i els recursos.","explanation":"Fabricar qualsevol objecte necessita materials. També pot consumir aigua i energia, i generar emissions i residus durant la fabricació, l’ús o l’eliminació.","example":"En el fanalet, reduïm l’impacte si aprofitem la carcassa, fem servir retalls recuperats i evitem decoracions que es trenquin a la primera.","remember":"Pregunta clau: quins materials utilitzem, quanta energia gastem i quins residus generem?","photo":8543598,"photoText":"La recuperació d’espais naturals és una mesura ambiental.","points":[["⛏️","Materials","Quantes peces noves necessitem?"],["⚡","Energia","Quin consum té la il·luminació?"],["♻️","Residus","Què podem tornar a fer servir?"]],"q":"Quina acció millora sobretot l’aspecte ambiental del fanalet?","opts":["Pintar-lo de color verd.","Reutilitzar la base i generar menys residus.","Posar-hi més decoració sense revisar els materials."],"ok":1,"why":"Fer servir menys materials nous i generar menys residus pot reduir l’impacte ambiental."},{"t":"Dimensió social","definition":"Valorar com una tecnologia afecta les persones: salut, seguretat, igualtat i accessibilitat.","explanation":"Una solució tecnològica no hauria de posar en perill les persones ni excloure-les. També hem de tenir presents les condicions de treball i escoltar qui farà servir el producte.","example":"Quan transformem el fanalet, treballem amb baixa tensió, eliminem arestes tallants i repartim les tasques perquè tothom pugui participar.","remember":"Pregunta clau: és segur, accessible i just per a les persones implicades?","photo":7710139,"photoText":"Col·laborar i escoltar també forma part d’un projecte tecnològic.","points":[["🛡️","Seguretat","Baixa tensió i materials segurs."],["🤝","Participació","Tothom contribueix."],["♿","Accessibilitat","El resultat ha de poder-se utilitzar."]],"q":"Quina decisió té en compte la dimensió social?","opts":["Deixar tota la feina a una persona.","Prioritzar l’aspecte encara que els cables siguin perillosos.","Repartir tasques i revisar la seguretat elèctrica."],"ok":2,"why":"La participació i la seguretat són qüestions socials."},{"t":"Dimensió econòmica","definition":"Comprovar si un producte és viable al llarg del temps, no només el primer dia.","explanation":"El preu de compra és només una part del cost. També cal pensar en el manteniment, l’energia que consumeix, les reparacions i quant temps durarà.","example":"Exemple inventat: si comprar un fanalet nou costés 12 € i adaptar el que ja tenim costés 3 €, la reutilització estalviaria 9 € inicials. Encara hauríem de comparar-ne la durada i el consum.","remember":"Pregunta clau: què ens costarà comprar-lo, utilitzar-lo, mantenir-lo i reparar-lo?","photo":38264269,"photoText":"Reparar pot ser una alternativa a comprar-ne un altre.","points":[["🛍️","Comprar-ne un de nou","12 € (exemple)"],["🛠️","Transformar l’existent","3 € (exemple)"],["💶","Diferència inicial","9 € (exemple)"]],"q":"Quins costos hem de considerar?","opts":["Només el preu inicial.","Compra, ús, manteniment, reparacions i durada.","Només el preu de la pintura."],"ok":1,"why":"El cost total inclou tota la vida útil del producte."},{"t":"Com decidim si una tecnologia és sostenible?","definition":"La millor decisió intenta equilibrar medi ambient, persones i economia.","explanation":"Una opció pot consumir poca energia però ser perillosa. Una altra pot ser barata però trencar-se ràpidament. Per això no hi ha una sola pregunta que resolgui tota la sostenibilitat.","example":"Per al fanalet de Nadal: conservar la carcassa, posar-hi una il·luminació segura de baix consum i comprovar quant ens costa adaptar-lo.","remember":"Abans de decidir: què guanyem, què perdem i què ens falta comprovar?","photo":9875421,"photoText":"Les noves tecnologies han de valorar-se des de diferents punts de vista.","points":[["🌿","Medi ambient","Materials, energia i residus."],["👥","Persones","Seguretat i participació."],["💶","Economia","Cost i durabilitat."]],"q":"Un producte nou consumeix menys però és car i difícil de reparar. Què toca fer?","opts":["Triar-lo sense pensar en res més.","Triar sempre el més barat.","Comparar consum, materials, seguretat, cost i durada."],"ok":2,"why":"Una decisió sostenible exigeix valorar les tres dimensions conjuntament."}];
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function txt(parent,tag,value,cls=''){const e=el(tag,cls,value);parent.append(e);return e}
function picture(item){
 const fig=el('figure','lesson21-photo'),frame=el('div','lesson21-photo-frame'),img=el('img','lesson21-photo-img');
 img.src='https://images.pexels.com/photos/'+item.photo+'/pexels-photo-'+item.photo+'.jpeg?auto=compress&cs=tinysrgb&w=900';
 img.alt=item.photoText;img.loading='lazy';img.decoding='async';
 img.addEventListener('error',()=>{frame.classList.add('missing');img.remove()},{once:true});
 frame.append(img);txt(frame,'span','FOTOGRAFIA IL·LUSTRATIVA','lesson21-photo-label');
 fig.append(frame);const foot=el('figcaption','lesson21-credit');
 txt(foot,'span',item.photoText+' ');
 const link=txt(foot,'a','Crèdit Pexels ↗');link.href='https://www.pexels.com/photo/'+item.photo+'/';link.target='_blank';link.rel='noopener noreferrer';
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
function quiz(item){
 const box=el('section','lesson21-quiz');txt(box,'h4','🎯 Comprova si ho has entès');
 txt(box,'p',item.q);
 const options=el('div','lesson21-options'),feedback=el('p','lesson21-feedback');
 feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
 item.opts.forEach((value,i)=>{
  const b=el('button','lesson21-answer',String.fromCharCode(65+i)+' · '+value);b.type='button';
  b.addEventListener('click',()=>{
   if(options.dataset.answered)return;
   options.dataset.answered='1';
   [...options.children].forEach((option,j)=>{option.disabled=true;if(j===item.ok)option.classList.add('correct')});
   if(i!==item.ok)b.classList.add('wrong');
   feedback.textContent=(i===item.ok?'Correcte! ✨ ':'Repassa la resposta marcada en verd. ')+item.why;
  });options.append(b);
 });
 box.append(options,feedback);return box;
}
function article(item,i){
 const a=el('article','lesson21-content');
 txt(a,'span','CONCEPTE '+(i+1)+' DE 5','lesson21-kicker');
 txt(a,'p',item.definition,'lesson21-definition');
 const layout=el('div','lesson21-layout'),text=el('div');
 txt(text,'h4','Explicat pas a pas');
 txt(text,'p',item.explanation);
 txt(text,'h4','Exemple del nostre taller');
 txt(text,'p',item.example);
 layout.append(text,picture(item));a.append(layout);
 txt(a,'p','💡 '+item.remember,'lesson21-remember');
 txt(a,'h4','Mira aquest esquema');a.append(diagram(item),quiz(item));
 return a;
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
 if(title)title.after(intro);
 const sections=[...first.querySelectorAll(':scope > .concept-drop')];
 ITEMS.forEach((item,i)=>{
  const d=sections[i];if(!d)return;
  const heading=d.querySelector('.concept-title strong');if(heading)heading.textContent=item.t;
  const sub=d.querySelector('.concept-title small');if(sub)sub.textContent='Teoria · Exemple · Imatge · Pregunta';
  const holder=d.querySelector('.concept-content');if(holder)holder.replaceChildren(article(item,i));
 });
 if(sections[0])sections[0].open=true;
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();render()};
})();