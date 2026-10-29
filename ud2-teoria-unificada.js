/* UD2: teoria contínua per pestanya, amb una fotografia tècnica i un diagrama original. */
(function(){
'use strict';
const T=[
 {intro:'La sostenibilitat és una manera responsable de dissenyar, fabricar i fer servir tecnologia. No consisteix a buscar només el producte que contamina menys: també cal considerar la seguretat de les persones i si la solució es podrà mantenir al llarg del temps.',context:'Quan comparem dues alternatives, hem de definir la mateixa necessitat, analitzar l’origen dels materials, el consum d’energia, la durada, la reparació i les conseqüències socials. Una decisió sostenible és aquella que es pot justificar amb criteris i dades.',example:'El nostre fanalet de Halloween encara pot ser útil per Nadal. Compararem conservar la carcassa i modificar-ne la decoració amb fabricar una peça nova, comprovant materials, seguretat del circuit i cost.',photo:'electronics repair technician soldering circuit board workshop',observe:['Quins components es poden conservar o reparar?','Quines mesures de seguretat requereix el treball tècnic?']},
 {intro:'L’Agenda 2030, aprovada per les Nacions Unides el 2015, estableix 17 Objectius de Desenvolupament Sostenible (ODS). Els objectius proposen millorar les condicions de vida de les persones i reduir l’impacte sobre el planeta.',context:'Els ODS estan relacionats: les decisions sobre aigua, energia, indústria o transport també tenen efectes sobre la salut i la desigualtat. Per saber si s’avança cal utilitzar indicadors mesurables, no només bones intencions.',example:'A l’institut podem estudiar el consum d’aigua abans i després de canviar una aixeta, o mesurar els kWh d’una instal·lació. Les dades ens permeten comprovar si la proposta realment millora la situació.',photo:'school rooftop solar panels installation technician',observe:['Quins ODS tenen relació amb aquest exemple?','Quines dades hauríem de recollir per demostrar-ne els beneficis?']},
 {intro:'Molts objectes tecnològics contenen minerals, metalls i polímers que provenen de la natura. Abans que una peça arribi al taller, ha passat per processos d’extracció, transformació, transport i fabricació.',context:'L’extracció pot generar pols, soroll, moviments de terres, residus i consum d’aigua. Els efectes depenen del procés i del territori, i s’han de valorar conjuntament amb la seguretat laboral i els drets de les comunitats.',example:'Un fanalet pot contenir conductors de coure, LEDs amb materials semiconductors i una carcassa de plàstic. Allargar-ne l’ús permet aprofitar materials que ja han requerit energia i recursos per obtenir-se.',photo:'open pit copper mine excavation trucks',observe:['Com ha canviat el relleu per extreure minerals?','Quines mesures de protecció de sòls i aigua es podrien adoptar?']},
 {intro:'L’energia és necessària perquè funcionin els sistemes tecnològics. Per interpretar-ne el consum cal distingir energia (J o kWh), potència (W), energia útil, energia dissipada i rendiment.',context:'L’energia es conserva, però durant les transformacions una part sovint es dispersa en formes que no aprofitem per a la funció prevista. Les energies renovables també necessiten infraestructures i tenen límits de funcionament.',example:'Un LED de 3 W que funciona 5 hores consumeix 15 Wh = 0,015 kWh. El cost elèctric es calcula multiplicant aquest consum pel preu del kWh; és independent del preu de fabricar el fanalet.',photo:'photovoltaic inverter electrical equipment solar energy technician',observe:['Quins elements transformen o controlen l’energia?','Com podríem mesurar el consum de la instal·lació?']},
 {intro:'L’aigua és un recurs essencial per a les persones, els ecosistemes i els processos industrials. La disponibilitat d’aigua dolça varia segons el clima, la demanda, les infraestructures i les decisions de gestió.',context:'Per utilitzar-la amb seguretat cal conèixer-ne la qualitat i aplicar el tractament adequat. Potabilitzar, depurar i dessalinitzar són processos diferents que no es poden confondre.',example:'Si una aixeta té un cabal de 9 L/min i el reduïm a 6 L/min, en dos minuts consumim 6 litres menys. Aquest càlcul permet relacionar una millora tècnica amb una dada concreta.',photo:'drinking water treatment plant filtration tanks industrial',observe:['Quines etapes del tractament de l’aigua s’hi poden identificar?','Quina diferència hi ha entre tractar aigua potable i aigua residual?']},
 {intro:'La mobilitat és la possibilitat de desplaçar-nos i arribar als serveis. Perquè sigui sostenible hem de tenir en compte el transport, l’accessibilitat, la seguretat i els impactes ambientals i socials.',context:'Els desplaçaments poden generar soroll, contaminació, congestió i ocupació d’espai. Alguns d’aquests efectes repercuteixen sobre terceres persones i s’anomenen costos externs.',example:'Podem observar com arriba l’alumnat a l’institut i comparar els desplaçaments a peu, en bicicleta, en autobús i en cotxe. Cal tenir en compte també les persones que viuen més lluny.',photo:'electric tram street bicycles public transport urban mobility',observe:['Quines formes de mobilitat apareixen a l’espai públic?','Quines barreres poden trobar diferents usuaris?']},
 {intro:'L’economia circular vol mantenir els materials i productes en servei durant el màxim de temps raonable. Això exigeix pensar el disseny, el manteniment, la reparació i la reutilització abans d’arribar al reciclatge.',context:'L’anàlisi de cicle de vida considera l’extracció, la fabricació, el transport, l’ús i el final de vida del producte. Reutilitzar un component no és el mateix que reciclar-lo: en la reutilització manté bona part de la seva forma i funció.',example:'Podem dissenyar un fanalet amb decoracions intercanviables i un circuit accessible: així la mateixa carcassa pot servir per Halloween, Nadal i altres activitats.',photo:'repair cafe electronics workshop circular economy repair',observe:['Quina peça seria més fàcil de reutilitzar o reparar?','Com s’hauria de dissenyar un objecte perquè es pogués desmuntar?']}
];
const SEG=[
 [0,3,5],[0,3],[0,3,6],[0,5,12,99],[0,3,99],[0,2,99],[0,99]
];
const H=[
 ['La sostenibilitat en el desenvolupament tecnològic','Les tres dimensions i la decisió responsable'],
 ['Les Nacions Unides i els ODS'],
 ['Recursos i processos d’extracció','Impactes, mesures de prevenció i restauració'],
 ['Energia, potència i rendiment','Les fonts renovables','Fórmules i càlculs per aprofundir'],
 ['Disponibilitat i qualitat de l’aigua','Tractaments i aprofitament sostenible'],
 ['Mobilitat i accessibilitat','Costos externs i alternatives'],
 ['Cicle de vida i economia circular']
];
const BOX=[
 [['🌿','Ambiental'],['👥','Social'],['💶','Econòmica']],
 [['🌐','Objectiu'],['🏫','Actuació'],['📏','Indicador']],
 [['⛏️','Extracció'],['⚙️','Transformació'],['🔧','Producte']],
 [['⚡','100 J entrada'],['💡','80 J útils'],['🌡️','20 J dissipats']],
 [['💧','Captació'],['🧪','Potabilització'],['🌊','Depuració']],
 [['🚶','Persones'],['🚊','Transports'],['🌱','Impactes']],
 [['🔧','Reparar'],['🎄','Reutilitzar'],['♻️','Recuperar']]
];
const NOTE=[
 'L’equilibri entre medi ambient, persones i economia és imprescindible.',
 'La millora d’un indicador permet valorar si una acció contribueix als ODS.',
 'Cal actuar abans, durant i després de l’extracció de recursos.',
 'Exemple: 80 J útils / 100 J d’entrada = 80 % de rendiment.',
 'La potabilització i la depuració tenen objectius diferents.',
 'La mobilitat sostenible busca accessibilitat amb menys impacte.',
 'Un bon disseny facilita mantenir, reparar i reutilitzar.'
];
function N(t,c,txt){const e=document.createElement(t);if(c)e.className=c;if(txt!==undefined)e.textContent=txt;return e}
function A(parent,tag,value,cls){const e=N(tag,cls,value);parent.append(e);return e}
function diagram(i){
 const fig=N('figure','ud2-solid-diagram');
 const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 930 226');
 s.setAttribute('role','img');s.setAttribute('aria-label','Esquema didàctic original: '+NOTE[i]);
 function V(tag,attrs,txt){const v=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,val] of Object.entries(attrs))v.setAttribute(k,''+val);if(txt!==undefined)v.textContent=txt;s.append(v);}
 const shades=['#fff0d4','#ffe8f5','#f0e5ff'],edges=['#f18815','#df5bad','#9154df'];
 BOX[i].forEach((pair,j)=>{
  const x=19+j*313;
  V('rect',{x,y:18,width:275,height:137,rx:21,fill:shades[j],stroke:edges[j],'stroke-width':2.5});
  V('text',{x:x+18,y:65,'font-size':31},pair[0]);
  V('text',{x:x+18,y:110,'font-size':21,'font-weight':850,fill:'#57216e'},pair[1]);
  if(j<2)V('path',{d:'M '+(x+283)+' 88 L '+(x+306)+' 88',stroke:'#af82ba','stroke-width':3,'stroke-linecap':'round'});
 });
 V('text',{x:465,y:200,'font-size':16,'font-weight':700,'text-anchor':'middle',fill:'#65406d'},NOTE[i]);
 fig.append(s);A(fig,'figcaption','Esquema original per entendre la teoria · '+NOTE[i]);return fig;
}
function metadataText(value){return String(value||'').replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim()}
function photo(i){
 const fig=N('figure','ud2-solid-photo'),frame=N('div','ud2-solid-photo-frame');
 const loading=A(frame,'div','Fotografia tècnica: cercant una imatge de reutilització permesa…','ud2-solid-loading');
 const img=N('img','ud2-solid-photo-image');img.loading='lazy';img.decoding='async';frame.append(img);
 const cap=N('figcaption','ud2-solid-photo-caption');
 A(cap,'strong','Què hem d’observar?');
 const ul=N('ul');T[i].observe.forEach(item=>A(ul,'li',item));cap.append(ul);
 const credits=A(cap,'div','','ud2-solid-credits');fig.append(frame,cap);
 fig.fetchPhoto=async()=>{
  if(fig.dataset.loaded)return;fig.dataset.loaded='yes';
  try{
   const u=new URL('https://commons.wikimedia.org/w/api.php');
   const q={action:'query',generator:'search',gsrsearch:T[i].photo,gsrnamespace:6,gsrlimit:16,prop:'imageinfo',iiprop:'url|extmetadata|size',iiurlwidth:1100,format:'json',origin:'*'};
   for(const [key,value] of Object.entries(q))u.searchParams.set(key,value);
   const res=await fetch(u.toString(),{credentials:'omit',mode:'cors'});if(!res.ok)throw Error('Image API unavailable');
   const data=await res.json();
   const pages=Object.values(data.query?.pages||{}).sort((a,b)=>(a.index??99)-(b.index??99));
   const found=pages.map(p=>({p,info:p.imageinfo?.[0]})).find(({p,info})=>{
    if(!info?.thumburl||info.width<700||info.height<440||!/\.(jpe?g|webp|png)$/i.test(p.title))return false;
    if(!info.thumburl.startsWith('https://upload.wikimedia.org/'))return false;
    if(/logo|icon|map|illustration|diagram|flag|screenshot|emblem|badge|poster|drawing/i.test(p.title))return false;
    const lic=metadataText(info.extmetadata?.LicenseShortName?.value||info.extmetadata?.UsageTerms?.value).toLowerCase();
    return /cc0|public domain|^pd[- ]|cc[- ]by/.test(lic)&&!/by[- ]nc|by[- ]nd/.test(lic);
   });
   if(!found)throw Error('No licensed photos');
   img.alt='Fotografia tècnica: '+found.p.title.replace('File:','').replace(/_/g,' ');
   img.onload=()=>{loading.remove();fig.classList.add('ud2-solid-photo-ready')};
   img.onerror=()=>{loading.textContent='Fotografia no disponible; consulta l’esquema tècnic que hi ha a sobre.'};
   img.src=found.info.thumburl;
   const link=A(credits,'a','Fotografia: Wikimedia Commons');link.href=found.info.descriptionurl||'https://commons.wikimedia.org/wiki/'+found.p.title.replace(/ /g,'_');link.target='_blank';link.rel='noopener noreferrer';
   A(credits,'span',' · Llicència: '+metadataText(found.info.extmetadata?.LicenseShortName?.value));
   const author=metadataText(found.info.extmetadata?.Artist?.value);if(author)A(credits,'span',' · Autor/a: '+author.slice(0,90));
   A(credits,'span',' · Retall i rètols didàctics');
  }catch(e){loading.textContent='No s’ha pogut carregar la fotografia. L’esquema original continua disponible.';fig.classList.add('ud2-solid-photo-failed');}
 };
 return fig;
}
function details(sub){
 const deep=sub.querySelector('.ud2-deep');
 const ps=deep?[...deep.querySelectorAll(':scope > p')].map(p=>p.textContent.trim()).filter(Boolean):[];
 return {title:sub.querySelector('.ud2-subtopic-title')?.textContent?.trim()||'Concepte',paragraphs:ps,tip:deep?.querySelector('.ud2-applied p')?.textContent?.trim()||'',definition:sub.querySelector('.lesson21-definition')?.textContent?.trim()||''};
}
function buildChapter(items,title){
 const group=N('section','ud2-solid-chapter');A(group,'h3',title);
 items.forEach(entry=>{
  const block=N('div','ud2-solid-section');A(block,'h4',entry.title);
  if(entry.definition)A(block,'p',entry.definition,'ud2-solid-definition');
  const seen=new Set();
  entry.paragraphs.forEach(p=>{const id=p.toLowerCase().replace(/\s+/g,' ').trim();if(id&&!seen.has(id)){seen.add(id);A(block,'p',p);}});
  if(entry.tip){const p=N('p','ud2-solid-application');A(p,'strong','Aplicació tècnica. ');p.append(document.createTextNode(entry.tip));block.append(p);}
  group.append(block);
 });
 return group;
}
function rewrite(panel,i){
 const subs=[...panel.querySelectorAll(':scope > .ud2-subtopic')],oral=panel.querySelector(':scope > .ud2-oral-questions');
 if(!subs.length)return;
 const entries=subs.map(details);
 const body=N('article','ud2-solid-article');
 const intro=N('div','ud2-solid-intro');A(intro,'p',T[i].intro,'ud2-solid-lead');A(intro,'p',T[i].context);body.append(intro);
 body.append(diagram(i));
 const figure=photo(i);body.append(figure);
 const ranges=SEG[i];
 for(let k=0;k<ranges.length-1;k++){
  const slice=entries.slice(ranges[k],Math.min(ranges[k+1],entries.length));
  if(slice.length)body.append(buildChapter(slice,H[i][k]||'Contingut tècnic'));
 }
 const close=N('section','ud2-solid-conclusion');A(close,'strong','✦ Aplicació al taller');A(close,'p',T[i].example);body.append(close);
 subs.forEach(x=>x.remove());
 if(oral)oral.before(body);else panel.append(body);
 panel.classList.add('ud2-solid-panel');
 panel.addEventListener('ud2:opened',()=>figure.fetchPhoto(),{once:true});
}
function init(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const root=document.querySelector('.ud2-topic-redesign');if(!root)return;
 const panels=[...root.querySelectorAll('.ud2-main-panel')];if(panels.length<9)return;
 panels.slice(0,7).forEach(rewrite);
 const fire=()=>{const current=panels.find(p=>!p.hidden);if(current)current.dispatchEvent(new Event('ud2:opened'));};
 root.querySelectorAll('.ud2-main-tab,.ud2-tab-prev,.ud2-tab-next').forEach(b=>b.addEventListener('click',fire));
 fire();
 const intro=root.querySelector('.ud2-tab-intro p');
 if(intro)intro.textContent='Una teoria completa per apartat: explicacions detallades, un esquema, una fotografia tècnica i dues preguntes orals. Sense conceptes fragmentats.';
 const t=root.querySelector(':scope > p:not(.concept-eyebrow)');
 if(t)t.textContent='Cada pestanya presenta la teoria seguida, amb exemples tècnics i només dues imatges per apartat.';
 // Els 17 ODS es mantenen a la teoria 2. Els jocs, projecte i debat es conserven.
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();init();};
})();