/* Tecnologia Rovira 2026 · cada concepte independent, una sola pàgina per UD. */
(function(){
'use strict';
const PALETTES={
  1:['#f1780a','#a94b00','#fff3df','#ffe0b6'],
  2:['#0e9a74','#07654f','#e7faf3','#bcebdc'],
  3:['#247dc9','#165390','#ecf6ff','#c4e5ff'],
  4:['#ce438e','#8e245f','#fff0f8','#f6c8e2'],
  5:['#8253d5','#52309c','#f3edff','#daccff'],
  6:['#0d98ad','#076478','#e8fbfe','#b9e9ef'],
  7:['#d65a42','#963d2c','#fff0ea','#ffd0c3']
};
const CONCEPTES={
1:[
 [
 ['Què és una necessitat tecnològica?',[0],[], 'El primer pas és explicar quin problema volem resoldre i quines condicions ha de complir la solució.'],
 ['Investigar i comparar idees',[],[0], 'Abans de dissenyar cal cercar informació, observar referents i comparar com resoldre el mateix problema.'],
 ['Planificació del projecte',[1],[], 'Planificar significa decidir l’ordre de les tasques, els materials, les eines, el cost i les normes de seguretat.']
 ],[
 ['L’esbós',[],[], 'L’esbós és un dibuix ràpid, fet a mà alçada, per expressar la idea general sense exigir mesures exactes.'],
 ['El croquis i les cotes',[0],[], 'El croquis representa la forma amb proporcions i mesures aproximades. Les cotes indiquen les dimensions necessàries per fabricar.'],
 ['El plànol tècnic',[],[1], 'El plànol utilitza una representació precisa que permet interpretar les formes i les mides d’un objecte.'],
 ['El model digital CAD',[1],[], 'Un model 2D o 3D permet revisar formes i encaixos abans del tall làser o la impressió 3D.']
 ],[
 ['El prototip',[0],[], 'És la primera versió que serveix per comprovar si una idea funciona realment.'],
 ['Les proves i les millores',[],[], 'Provar significa comparar resultats amb els requisits inicials. Cal identificar l’error, modificar el prototip i repetir la prova.'],
 ['La memòria tècnica',[1],[], 'La memòria documenta la necessitat, el disseny, els materials, el procés, les proves i les conclusions.']
 ]],
2:[
 [
 ['El desenvolupament sostenible',[0],[], 'L’objectiu és atendre les necessitats actuals sense reduir les possibilitats de les generacions futures.'],
 ['Dimensió ambiental',[1],[0], 'La dimensió ambiental protegeix l’aigua, l’aire, la biodiversitat i els recursos naturals.'],
 ['Dimensió social',[],[1], 'La dimensió social analitza la salut, la seguretat, la igualtat i l’accessibilitat de les persones.'],
 ['Dimensió econòmica',[],[2], 'La dimensió econòmica té en compte el cost de fabricar, utilitzar, reparar i mantenir un producte al llarg del temps.'],
 ['Com prenem decisions sostenibles?',[2],[3], 'Cal valorar l’ús, el manteniment, la reparació, el cost i l’efecte sobre les persones.']
 ],[
 ['Què és l’ONU?',[],[], 'L’Organització de les Nacions Unides és una organització internacional que promou la cooperació entre països, la pau i el desenvolupament.'],
 ['L’Agenda 2030 i els 17 ODS',[0],[], 'L’Agenda 2030 es va adoptar el 2015 i reuneix objectius socials, econòmics i ambientals.'],
 ['Els ODS vinculats a la tecnologia',[1],[0,1], 'Aigua, energia, indústria, ciutats, consum i clima són alguns dels àmbits on les decisions tecnològiques tenen un gran impacte.']
 ],[
 ['D’on surten les matèries primeres?',[0],[], 'Els materials dels productes tecnològics tenen un origen natural i requereixen extracció i transformació.'],
 ['Recursos renovables i no renovables',[],[], 'Els recursos renovables poden regenerar-se a un ritme adequat; els no renovables es formen tan lentament que no es reposen a escala humana.'],
 ['Què són la mena i la ganga?',[1],[], 'En una explotació mineral, la mena conté el mineral d’interès i la ganga és la part que no es busca aprofitar.'],
 ['Impactes de les explotacions extractives',[],[2], 'L’extracció pot generar pols, soroll, residus, consum d’aigua i canvis sobre el paisatge i els ecosistemes.'],
 ['Prevenció i restauració',[2],[0,1], 'Prevenir és evitar danys abans que apareguin; restaurar significa recuperar les condicions del terreny després de l’activitat.'],
 ['La dimensió social de la mineria',[],[2,3], 'Les condicions laborals i els drets de les comunitats també formen part de la valoració d’un projecte extractiu.']
 ],[
 ['Què és l’energia?',[0],[], 'L’energia és la capacitat de produir transformacions. Es mesura en joules i sovint en kWh quan parlem de consum elèctric.'],
 ['Potència i consum',[],[], 'La potència indica quanta energia es transforma per unitat de temps: P = E / t. El consum depèn de la potència i les hores de funcionament.'],
 ['Conservació de l’energia',[1],[], 'L’energia no desapareix: passa d’una forma a una altra o es transfereix entre sistemes.'],
 ['Energia útil i energia dissipada',[],[], 'L’energia útil és la part que aconsegueix la funció buscada. La dissipada acaba en formes que no aprofitem per aquella funció, sovint calor.'],
 ['Rendiment o eficiència',[2],[4], 'El rendiment indica quina fracció de l’energia d’entrada es converteix en energia útil.'],
 ['Què són les energies renovables?',[3],[], 'Les fonts renovables aprofiten fluxos naturals que es reposen, tot i que els equips per captar-les també requereixen materials.'],
 ['Energia solar fotovoltaica',[],[], 'Les plaques fotovoltaiques converteixen part de la llum del Sol en electricitat.'],
 ['Energia solar tèrmica',[],[], 'Els captadors solars tèrmics aprofiten la radiació solar per escalfar un fluid.'],
 ['Energia eòlica',[],[], 'Els aerogeneradors transformen part de l’energia cinètica del vent en energia elèctrica.'],
 ['Energia hidràulica',[],[], 'Una central hidràulica aprofita el moviment o el desnivell de l’aigua per moure una turbina.'],
 ['Energia geotèrmica',[],[], 'La geotèrmia aprofita la calor de l’interior de la Terra per a diferents aplicacions energètiques.'],
 ['Energia de biomassa',[],[], 'La biomassa permet aprofitar matèria orgànica com a recurs energètic, amb emissions i impactes que també cal estudiar.'],
 ['Treball mecànic',[],[0], 'Quan una força constant actua en la direcció del desplaçament, el treball és W = F · d.'],
 ['Calor sensible',[],[1], 'L’energia per escalfar un material sense canvi de fase es pot estimar amb Q = m · c · ΔT.'],
 ['Energia eòlica i velocitat del vent',[],[2], 'La potència disponible al vent depèn de l’àrea escombrada i augmenta molt quan creix la velocitat.'],
 ['Energia hidroelèctrica',[],[3], 'La potència depèn del cabal d’aigua, del desnivell i del rendiment de la instal·lació.']
 ],[
 ['Escassetat i disponibilitat de l’aigua',[0],[], 'L’accés a l’aigua dolça depèn del clima, les infraestructures, la gestió i la distribució dels usos.'],
 ['Consum d’aigua i estalvi',[1],[0,1], 'Reduir les fuites, reutilitzar quan sigui adequat i evitar consums innecessaris ajuda a conservar el recurs.'],
 ['Qualitat de l’aigua',[2],[3], 'La transparència o el pH, per si sols, no permeten assegurar que l’aigua sigui potable.'],
 ['Potabilització de l’aigua',[3],[], 'La potabilització combina diversos tractaments per fer que l’aigua compleixi els requisits de consum humà.'],
 ['Depuració d’aigües residuals',[],[2], 'Depurar és tractar l’aigua usada per reduir els contaminants abans del seu retorn o reutilització adequada.'],
 ['Dessalinització',[],[], 'La dessalinització elimina una part de les sals de l’aigua salada, per exemple mitjançant osmosi inversa.']
 ],[
 ['Transport i mobilitat no són el mateix',[0],[], 'La mobilitat també inclou accessibilitat, infraestructura, normes i possibilitats de desplaçament per a totes les persones.'],
 ['Costos externs del transport',[1],[], 'La contaminació, el soroll, la congestió i l’ocupació d’espai tenen efectes que no sempre paga directament qui viatja.'],
 ['Capacitat de càrrega del territori',[2],[], 'Cada territori pot tolerar determinades pressions, però els límits canvien segons el lloc, la durada i l’efecte.'],
 ['Opcions de mobilitat sostenible',[3],[0,1,2], 'Compara transport públic, bicicleta, desplaçaments a peu o vehicle compartit considerant energia, temps, seguretat i accessibilitat.']
 ],[
 ['El cicle de vida d’un producte',[0],[], 'Analitza les fases des de l’extracció de matèries primeres fins a l’ús i la gestió final dels residus.'],
 ['Economia lineal i circular',[1],[], 'L’economia circular intenta mantenir els materials en ús i reduir la necessitat d’extreure’n de nous.'],
 ['Reparar, reutilitzar i reciclar',[],[0,1,2], 'Allargar la vida dels productes sol permetre aprofitar millor els materials abans de convertir-los en residus.']
 ]],
3:[
 [
 ['L’arquitectura bioclimàtica',[0],[], 'El disseny s’adapta al clima per reduir les necessitats energètiques.'],
 ['Orientació solar i ombres',[],[], 'L’orientació de finestres, proteccions i espais modifica la llum i la calor que rep un edifici.'],
 ['Ventilació natural',[1],[], 'La circulació d’aire pot ajudar a refrescar i renovar l’aire interior quan les condicions ho permeten.']
 ],[
 ['L’envolupant tèrmica',[0],[], 'Coberta, façanes, finestres i terra separen l’interior de l’exterior.'],
 ['L’aïllament tèrmic',[],[], 'Una bona capa d’aïllament redueix el flux de calor i ajuda a mantenir el confort.'],
 ['Els ponts tèrmics',[1],[], 'Els ponts tèrmics són zones on la calor travessa l’envolupant amb més facilitat.']
 ],[
 ['Instal·lacions de l’habitatge',[0],[], 'Electricitat, aigua, sanejament i climatització han de funcionar de manera segura i eficient.'],
 ['Plaques solars fotovoltaiques',[1],[], 'Converteixen la llum solar en energia elèctrica.'],
 ['Solar tèrmica i aerotèrmia',[],[], 'La solar tèrmica capta calor del sol i l’aerotèrmia utilitza una bomba de calor per traslladar energia tèrmica.']
 ]],
4:[
 [
 ['Tensió elèctrica',[0],[], 'La tensió és la diferència de potencial entre dos punts i es mesura en volts (V).'],
 ['Intensitat del corrent',[],[], 'La intensitat expressa la quantitat de càrrega que travessa una secció per unitat de temps i es mesura en amperes (A).'],
 ['Resistència elèctrica',[],[], 'La resistència indica l’oposició al pas del corrent i s’expressa en ohms (Ω).'],
 ['La llei d’Ohm',[],[], 'Per a un conductor òhmic, V = I · R. Podem calcular una magnitud a partir de les altres dues.'],
 ['Connexions en sèrie i en paral·lel',[1],[], 'En sèrie hi ha un únic camí del corrent; en paral·lel, diverses branques.']
 ],[
 ['Resistències i potenciòmetres',[0],[], 'Una resistència limita el corrent i un potenciòmetre permet variar-ne el valor.'],
 ['Condensadors',[],[], 'Un condensador pot emmagatzemar càrrega elèctrica temporalment.'],
 ['Díodes i LEDs',[1],[], 'Els díodes condueixen principalment en un sentit i els LEDs emeten llum quan funcionen correctament.'],
 ['Transistors i sensors',[],[], 'Un transistor pot actuar com a interruptor o amplificador; els sensors produeixen senyals en detectar magnituds físiques.']
 ],[
 ['Simbologia dels circuits',[0],[], 'Els símbols elèctrics permeten entendre l’esquema abans de fer el muntatge.'],
 ['Mesures amb multímetre',[],[], 'Cal triar correctament la funció i la connexió dels borns abans de mesurar.'],
 ['Seguretat elèctrica al taller',[1],[], 'A classe treballem amb circuits de baixa tensió i seguint sempre les instruccions de seguretat.']
 ]],
5:[
 [
 ['Senyals analògics',[0],[], 'Un senyal analògic pot variar de manera contínua dins d’un interval de valors.'],
 ['Senyals digitals',[],[], 'Els sistemes digitals representen informació mitjançant un nombre discret d’estats, habitualment 0 i 1.'],
 ['El sistema binari',[1],[], 'El sistema de base 2 representa valors amb les xifres 0 i 1.']
 ],[
 ['La porta AND',[0],[], 'La sortida és 1 només quan totes les entrades són 1.'],
 ['La porta OR',[],[], 'La sortida és 1 quan almenys una de les entrades és 1.'],
 ['La porta NOT',[],[], 'Inverteix el valor de l’entrada: 0 es transforma en 1, i 1 en 0.'],
 ['La taula de veritat',[1],[], 'Enumera les combinacions d’entrada i permet comprovar les sortides esperades.']
 ],[
 ['Dissenyar un automatisme lògic',[0],[], 'Primer s’expressa la condició amb paraules i després amb una funció lògica.'],
 ['Aplicacions de les portes lògiques',[],[], 'Les portes poden combinar-se per fer alarmes, autoritzacions i senyalitzacions automàtiques.']
 ]],
6:[
 [
 ['Què és la pneumàtica?',[0],[], 'Utilitza aire comprimit per transmetre energia i produir moviment.'],
 ['Què és la hidràulica?',[1],[], 'Utilitza un líquid a pressió i pot transmetre forces elevades.']
 ],[
 ['Pressió',[0],[], 'La pressió és la força aplicada per unitat de superfície: p = F / A.'],
 ['La força en un actuador',[],[], 'Si la pressió es manté, augmentar la superfície permet obtenir una força major.'],
 ['Unitats de pressió, força i superfície',[1],[], 'Utilitza Pa, N i m² en els càlculs amb les unitats correctament convertides.']
 ],[
 ['Fonts de pressió i canonades',[0],[], 'La font subministra el fluid a pressió i les conduccions el transporten.'],
 ['Vàlvules i cilindres',[],[], 'Les vàlvules dirigeixen el fluid i el cilindre transforma la pressió en moviment lineal.'],
 ['Esquemes i seguretat',[1],[], 'Els símbols normalitzats ajuden a interpretar els circuits sense manipular equips sota pressió.']
 ]],
7:[
 [
 ['Sensors',[0],[], 'Detecten una magnitud física com la temperatura, la llum o el moviment.'],
 ['Controladors',[],[], 'Un controlador processa la informació dels sensors segons un programa i determina què ha de passar.'],
 ['Actuadors',[],[], 'Un actuador transforma una ordre del sistema en una acció, com encendre un LED o moure un motor.'],
 ['Llaç obert i llaç tancat',[1],[], 'Amb retroalimentació, el sistema mesura el resultat i pot ajustar l’acció.']
 ],[
 ['Seqüències, condicions i repeticions',[0],[], 'Una condició «si..., llavors...» fa que el programa prengui decisions.'],
 ['Diagrames de flux',[1],[], 'Representen els passos del programa amb símbols i fletxes.'],
 ['Provar el programa',[],[], 'Cal provar diferents entrades per comprovar que les sortides fan allò previst.']
 ],[
 ['Detectar errors',[0],[], 'Els errors poden estar a les connexions, als sensors o a la lògica del programa.'],
 ['Millora iterativa',[],[], 'Canvia una sola cosa cada vegada, prova, registra el resultat i compara.']
 ]]
};
function N(tag,cl,txt){const e=document.createElement(tag);if(cl)e.className=cl;if(txt!==undefined)e.textContent=txt;return e;}
function A(p,tag,txt,cl){const e=N(tag,cl,txt);p.append(e);return e}
function P(id){return PALETTES[id]||PALETTES[1];}
function colorize(el,id){const c=P(id);el.style.setProperty('--u',c[0]);el.style.setProperty('--u-dark',c[1]);el.style.setProperty('--u-soft',c[2]);el.style.setProperty('--u-border',c[3]);}
function chunks(u){const plan=CONCEPTES[u.id]||[];return plan.map((arr,bi)=>({
 title:u.blocs[bi].titol.replace(/^\d+\.\s*/,''),
 ideas:arr.map((x,i)=>({title:x[0],paragraphs:x[1].map(k=>u.blocs[bi].paragrafs[k]).filter(Boolean),bullets:x[2].map(k=>u.blocs[bi].punts?.[k]).filter(Boolean),note:x[3],bi,icon:['✦','◆','●','✳'][i%4]}))
}));}
function sketch(idea,number){
 const wrap=N('figure','concept-sketch');
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox','0 0 720 150');svg.setAttribute('role','img');svg.setAttribute('aria-label','Esquema original del concepte '+idea.title);
 const names=[idea.title.split(' ').slice(0,2).join(' '),'Com funciona','Aplica-ho'];
 const emojis=['✦','→','✓'];
 function E(type,atts,text){const e=document.createElementNS('http://www.w3.org/2000/svg',type);for(const [k,v] of Object.entries(atts))e.setAttribute(k,v);if(text)e.textContent=text;svg.append(e);return e;}
 E('line',{x1:220,y1:77,x2:278,y2:77,stroke:'currentColor','stroke-width':4,'stroke-dasharray':'7 8'});
 E('line',{x1:445,y1:77,x2:501,y2:77,stroke:'currentColor','stroke-width':4,'stroke-dasharray':'7 8'});
 [13,274,527].forEach((x,i)=>{
   E('rect',{x,y:19,width:i===1?174:180,height:110,rx:21,fill:'var(--u-soft)',stroke:'var(--u)','stroke-width':2});
   E('text',{x:x+18,y:53,fill:'var(--u-dark)','font-size':28,'font-weight':800},emojis[i]);
   const label=names[i].length>19?names[i].slice(0,18)+'…':names[i];
   E('text',{x:x+18,y:92,fill:'var(--u-dark)','font-size':i===0?17:19,'font-weight':750},label);
 });
 wrap.append(svg);wrap.append(N('figcaption','','Dibuix esquemàtic original · '+idea.title));return wrap;
}
function miniTask(idea,all,index){
 const q=N('div','concept-task');A(q,'h4','🎯 Practica en un minut');
 A(q,'p','Quina afirmació està relacionada amb «'+idea.title+'»?');
 const distractors=all.filter((x,i)=>i!==index&&x.note!==idea.note);
 const other=distractors[(index+2)%distractors.length]||distractors[0];
 const third=distractors[(index+5)%distractors.length]||distractors[distractors.length-1];
 const options=[{v:idea.note,ok:true},{v:other.note,ok:false},{v:third.note,ok:false}];
 const rotate=index%3;for(let k=0;k<rotate;k++)options.push(options.shift());
 const area=N('div','concept-answers'),message=N('p','concept-feedback');
 message.setAttribute('role','status');message.setAttribute('aria-live','polite');
 options.forEach(o=>{
  const b=N('button','concept-answer',o.v);b.type='button';
  b.addEventListener('click',()=>{
   if(area.dataset.done)return;area.dataset.done='true';
   for(const btn of area.children)btn.disabled=true;
   b.classList.add(o.ok?'is-correct':'is-wrong');
   [...area.children][options.findIndex(x=>x.ok)].classList.add('is-correct');
   message.textContent=o.ok?'Correcte! ✨': 'Repassa el concepte i fixa’t en la resposta marcada.';
  });area.append(b);
 });
 q.append(area,message);return q;
}
function concept(title,subtitle,child,tag){
 const d=N('details','concept-drop');
 const s=N('summary','concept-summary');
 A(s,'span',tag||'✧','concept-mark');
 const label=N('span','concept-title');A(label,'strong',title);A(label,'small',subtitle);
 s.append(label);A(s,'span','⌄','concept-arrow');
 d.append(s);const content=N('div','concept-content');content.append(child);d.append(content);return d;
}
function ideaContent(idea,all,index){
 const box=N('section','concept-reading');
 A(box,'h3',idea.title);A(box,'p','La idea essencial','concept-intro');
 for(const t of idea.paragraphs)A(box,'p',t);
 if(idea.note&&!idea.paragraphs.some(p=>p.includes(idea.note)))A(box,'p',idea.note);
 if(idea.bullets.length){const ul=N('ul');idea.bullets.forEach(t=>A(ul,'li',t));box.append(ul);}
 box.append(sketch(idea,index),miniTask(idea,all,index));
 return box;
}
function projectContent(u,g){
 const p=N('div','concept-reading');A(p,'h3','Projecte de la unitat');A(p,'p',u[g]);return p;
}
function extraUD2(g){
 let box=document.getElementById('unit-extra')?.querySelector('.ud2-activities');
 if(!box){const temp=N('div');renderUD2Activities(temp,g);box=temp.querySelector('.ud2-activities');}
 return box;
}
function resources(u){
 const out=N('div','concept-reading');A(out,'h3','Documents i imatges');
 if(u.recursos.length)u.recursos.forEach(r=>{const a=A(out,'a',r.nom+' ↗','button secondary');a.href=r.url;a.target='_blank';a.rel='noopener';});
 else A(out,'p','Encara no hi ha fitxes o PDF incorporats en aquesta unitat.','placeholder');
 if(u.fotos.length)u.fotos.forEach(f=>{
  const fig=N('figure','lesson-illustration'),img=N('img');img.src=f.url;img.alt=f.peu;img.loading='lazy';img.style.maxWidth='100%';
  fig.append(img,N('figcaption','',f.peu));out.append(fig);
 }); else A(out,'p','Les fotografies reals es podran incorporar quan les tinguem.','subtle');
 return out;
}
function allConcepts(u,g){
 const wrapper=N('div','concept-list');let count=0;
 const blocks=chunks(u),all=blocks.flatMap(b=>b.ideas);
 blocks.forEach((b,i)=>{
  const group=N('section','concept-group');
  A(group,'h2',(i+1)+'. '+b.title,'concept-group-title');
  b.ideas.forEach(idea=>{
   group.append(concept(idea.title,'Concepte '+(++count)+' · teoria + dibuix + activitat',ideaContent(idea,all,count-1),idea.icon));
  });wrapper.append(group);
 });
 const activities=N('section','concept-group');
 A(activities,'h2','Projecte, activitats i repàs','concept-group-title');
 if(u.id===2){
  const c=extraUD2(g),get=id=>c.querySelector('#'+id);
  const p=N('div','concept-reading');p.append(projectContent(u,g),get('fanal-energy'));
  activities.append(concept('Transformem el fanalet de Halloween a Nadal','Projecte de taller i energia',p,'🎄'));
  const ods=N('div','concept-reading');ods.append(get('ods-explorer'),get('ods-quiz'));
  activities.append(concept('Explora i practica els 17 ODS','Explorador interactiu i qüestionari',ods,'🌍'));
  activities.append(concept('Debat acadèmic a l’estil nord-americà','Equips, arguments, torns i cronòmetre',get('ods-debate'),'🎤'));
  activities.append(concept('Ampliació: idees per Batxillerat','Fórmules i principis de termodinàmica',get('ud2-concepts'),'🎓'));
 }else{
  activities.append(concept('Projecte del grup','Activitat pràctica',projectContent(u,g),'🧪'));
  if(u.id===1){const game=N('div');renderUD1Game(game);activities.append(concept('Joc de les fases del projecte','Posa-les en ordre',game,'🎮'));}
 }
 wrapper.append(activities);
 wrapper.append(concept('Documents i fotografies','Fitxes i imatges de la unitat',resources(u),'📎'));
 return {node:wrapper,count};
}
window.preparaUnitatVisual=function(){
 const params=new URLSearchParams(location.search),u=UNITATS.find(x=>x.id===Number(params.get('ud')))||UNITATS[0];
 const g=params.get('grup')==='e'?'e':'optativa',lesson=document.querySelector('.lesson');
 if(!lesson)return;
 document.body.classList.add('unit-monochrome');document.body.dataset.ud=u.id;colorize(document.body,u.id);
 const hub=N('section','concept-hub');
 A(hub,'p','✦ UD'+u.id+' · Tots els conceptes per separat','concept-eyebrow');
 A(hub,'h2','Índex de conceptes');
 A(hub,'p','Obre el concepte que treballarem avui. Tot apareix dins del seu desplegable, sense sortir de la unitat.');
 const built=allConcepts(u,g);hub.append(built.node);
 lesson.before(hub);lesson.hidden=true;
 document.title='UD'+u.id+' · '+u.nom+' · Tecnologia Rovira';
};
window.decorarIndexCurs=function(g){
 const host=document.getElementById('course-units');if(!host)return;host.replaceChildren();host.classList.add('multi-units');
 UNITATS.forEach(u=>{
  const box=N('details','ud-overview');colorize(box,u.id);
  const s=N('summary','ud-overview-summary');A(s,'span','UD'+u.id,'ud-number');A(s,'strong',u.nom);A(s,'span','⌄','ud-arrow');
  const inside=N('div','ud-overview-inner');A(inside,'p',u.resum);
  const list=N('ol','ud-preview');
  if(u.id===2){
    ['Entendre la sostenibilitat','L’Agenda 2030 i els ODS','Recursos naturals i processos extractius','Energia, transformacions i eficiència','L’aigua: disponibilitat, qualitat i tractament','Transport i mobilitat sostenible','Cicle de vida i economia circular']
      .forEach(title=>A(list,'li',title));
  }else chunks(u).forEach(b=>b.ideas.forEach(idea=>A(list,'li',idea.title)));
  inside.append(list);
  const a=A(inside,'a','Entrar a la UD'+u.id+' i desplegar els conceptes →','button enter-ud');
  a.href='unitat.html?ud='+u.id+'&grup='+g;if(u.id===2)a.textContent='Veure els 7 temes de la UD2 →';box.append(s,inside);host.append(box);
 });
 const p=document.querySelector('.section-heading p');if(p)p.textContent='Tria una unitat. La UD2 presenta set pestanyes principals amb tota la teoria de cada tema.';
};
})();
