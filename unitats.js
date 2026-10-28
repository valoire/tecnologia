/* Temari base de 4t ESO, curs 2026–2027.
   Per afegir documents: puja l'arxiu a documents/ i incorpora
   {nom:'Fitxa ...', url:'documents/fitxa.pdf'} a recursos[].
   Per afegir fotografies: puja-les a imatges/ i incorpora
   {url:'imatges/foto.jpg', peu:'Descripció'} a fotos[]. */
const UNITATS=[
  {
    id:1,nom:'Desenvolupament de projectes i fabricació de productes',
    resum:'De la necessitat al producte: dissenyar, fabricar, comprovar i comunicar.',
    objectius:['Identificar necessitats i definir requisits.','Comparar idees i representar-les amb esbossos, croquis i CAD.','Planificar els recursos i construir un prototip.','Comprovar el resultat, corregir errors i documentar el procés.'],
    blocs:[
      {titol:'El procés tecnològic',paragrafs:['Un projecte tecnològic comença amb una necessitat concreta. Primer descrivim el problema i què ha de fer la solució. Després busquem informació, imaginem alternatives i escollim una proposta que es pugui construir.','La planificació especifica materials, eines, temps, costos i seguretat. Durant la construcció fabriquem un prototip, el provem i introduïm millores. La memòria tècnica explica les decisions i els resultats.'],punts:['Necessitat i requisits → recerca → disseny → planificació.','Construcció → verificació, millora i comunicació.']},
      {titol:'Del dibuix al model digital',paragrafs:['Un esbós és un dibuix ràpid per comunicar una idea. Un croquis la concreta amb proporcions i algunes mesures. Un plànol tècnic permet fabricar-la perquè representa dimensions i detalls.','Amb CAD 2D i 3D, per exemple Tinkercad, podem veure formes, comprovar encaixos i preparar fitxers per a tall làser o impressió 3D.'],punts:['Tria el material segons resistència, pes, cost i impacte ambiental.','No comencis a fabricar sense comprovar dimensions i seguretat.']},
      {titol:'Prototip, proves i documentació',paragrafs:['Un prototip és una primera versió que serveix per posar a prova una idea. Avaluar vol dir comparar el resultat amb els requisits inicials: funciona? És segur? Es pot muntar? Es pot reparar?','La memòria pot contenir el problema, esbossos i plànols, llista de materials, procés de construcció, fotografies, proves, errors i millores.']}],
    optativa:'Proposta de pràctica: dissenyar una capsa o una escena interactiva. Es pot dibuixar a Tinkercad, fabricar peces amb eines de taller, tall làser o impressió 3D i incorporar llum o control amb Micro:bit.',
    e:'Proposta de pràctica experimental: construir un pont de paper. Formula una hipòtesi sobre quina forma resistirà més pes, modifica una variable, mesura el resultat i explica què has après.',
    esquema:'ud1',peu:'Fases habituals d’un projecte tecnològic.',recursos:[],fotos:[]
  },
  {
    id:2,nom:'Tecnologia sostenible',
    resum:'Desenvolupament sostenible, cicle de vida dels productes i economia circular.',
    objectius:['Analitzar l’impacte ambiental de productes i processos.','Diferenciar economia lineal i economia circular.','Proposar alternatives que allarguin la vida útil dels objectes.'],
    blocs:[
      {titol:'Tecnologia i sostenibilitat',paragrafs:['La tecnologia transforma materials i energia per satisfer necessitats, però la fabricació, el transport i l’ús dels productes generen impactes. Una solució sostenible intenta reduir el consum de recursos, la contaminació i els residus sense deixar de ser útil.','Per comparar productes cal mirar tot el seu cicle de vida, no només el moment en què els fem servir.']},
      {titol:'El cicle de vida',paragrafs:['El cicle de vida inclou l’extracció de matèries primeres, la producció, el transport, l’ús i el final de vida. En cada fase podem consumir aigua, energia i materials.'],punts:['Materials reciclats o de fonts responsables.','Disseny per desmuntar i reparar.','Reducció d’embalatges, consum i residus.']},
      {titol:'Economia circular',paragrafs:['En un model lineal els materials s’extreuen, s’utilitzen i s’acaben descartant. L’economia circular busca mantenir materials i productes en ús durant més temps.','Rebutjar allò innecessari, reduir, reutilitzar, reparar i reciclar són decisions diferents: reciclar és útil, però sovint evitar un residu és encara millor.']}],
    optativa:'Proposta de pràctica: redissenyar un objecte de classe perquè utilitzi menys material, sigui reparable i duri més. Justifica les decisions de disseny.',
    e:'Proposta experimental: mesurar els residus generats durant una activitat i provar un canvi per reduir-los. Compara les dades abans i després.',
    esquema:'ud2',peu:'Del model lineal a la reutilització de materials.',recursos:[],fotos:[]
  },
  {
    id:3,nom:'Habitatges sostenibles',
    resum:'Disseny bioclimàtic, eficiència energètica, instal·lacions i energies renovables.',
    objectius:['Explicar com orientació i aïllament condicionen el confort.','Identificar mesures d’estalvi d’energia i aigua.','Relacionar instal·lacions i renovables amb un habitatge eficient.'],
    blocs:[
      {titol:'Arquitectura bioclimàtica',paragrafs:['Un habitatge bioclimàtic aprofita el clima i l’entorn per reduir les necessitats de calefacció, refrigeració i il·luminació. L’orientació, la ventilació natural, les ombres i l’entrada de llum solar són decisions del disseny.','La millor solució depèn del clima, de l’ús dels espais i de l’època de l’any.']},
      {titol:'Envolupant i aïllament',paragrafs:['La coberta, les façanes, les finestres i el terra formen l’envolupant de l’edifici. L’aïllament tèrmic ajuda a reduir les pèrdues de calor a l’hivern i l’entrada de calor a l’estiu.','Un pont tèrmic és una zona per on la calor es transmet amb més facilitat. També és important ventilar adequadament per mantenir la qualitat de l’aire.']},
      {titol:'Instal·lacions i estalvi',paragrafs:['La instal·lació elèctrica, l’aigua, el sanejament i la climatització han d’oferir seguretat i confort amb un consum responsable. Els LEDs, els electrodomèstics eficients i els sistemes de control redueixen la despesa.','Les plaques fotovoltaiques produeixen electricitat a partir de la llum solar. Altres solucions, com la solar tèrmica o l’aerotèrmia, tenen funcions diferents.']}],
    optativa:'Proposta de pràctica: dibuixar en 2D/3D una casa eficient i justificar orientació, ombres, ventilació, aïllament i ús d’energia solar.',
    e:'Proposta experimental: comparar com canvia la temperatura dins de dos models de casa amb aïllaments diferents. Mantén constants les altres variables i registra les mesures.',
    esquema:'ud3',peu:'Elements d’un habitatge amb aprofitament solar.',recursos:[],fotos:[]
  },
  {
    id:4,nom:'Electrònica analògica',
    resum:'Components, senyals continus, llei d’Ohm i circuits de control senzills.',
    objectius:['Reconèixer els components principals i els seus símbols.','Aplicar la relació entre tensió, intensitat i resistència.','Muntar i interpretar circuits senzills amb seguretat.'],
    blocs:[
      {titol:'Magnituds elèctriques',paragrafs:['La tensió (V) és la diferència de potencial entre dos punts. La intensitat (A) mesura el corrent elèctric i la resistència (Ω) s’oposa al seu pas. En un conductor òhmic la llei d’Ohm relaciona aquestes magnituds: V = I · R.','Una font d’alimentació proporciona energia al circuit. Les connexions en sèrie i en paral·lel tenen comportaments diferents.']},
      {titol:'Components analògics',paragrafs:['Les resistències limiten el corrent; els potenciòmetres permeten variar una resistència. Els condensadors emmagatzemen temporalment càrrega elèctrica.','Els díodes deixen circular el corrent principalment en un sentit, els LEDs emeten llum i els transistors es poden utilitzar com a interruptors o amplificadors. Alguns sensors transformen canvis físics en canvis elèctrics.']},
      {titol:'Interpretar i comprovar',paragrafs:['Abans de muntar un circuit, interpreta els símbols, comprova la polaritat dels components que la tenen i revisa les connexions. Amb un multímetre es poden mesurar magnituds si se selecciona correctament el mode i l’escala.','Per treballar a classe utilitza muntatges de baixa tensió i segueix les indicacions de seguretat del taller.']}],
    optativa:'Proposta de pràctica: dissenyar i muntar un circuit amb LED, resistència i un sensor. Explica què fa cada component i comprova el resultat.',
    e:'Proposta experimental: variar una resistència en un circuit segur de baixa tensió i estudiar com canvia la intensitat. Recull les dades en una taula.',
    esquema:'ud4',peu:'Circuit senzill de font, resistència i LED.',recursos:[],fotos:[]
  },
  {
    id:5,nom:'Electrònica digital',
    resum:'Sistema binari, portes lògiques, taules de veritat i aplicacions digitals.',
    objectius:['Distingir senyals digitals i analògics.','Interpretar portes AND, OR i NOT.','Construir taules de veritat i resoldre situacions de control.'],
    blocs:[
      {titol:'De l’analògic al digital',paragrafs:['Un senyal analògic pot prendre molts valors dins d’un interval. Un sistema digital treballa amb estats discrets: habitualment 0 i 1. Aquesta representació permet emmagatzemar i processar informació amb circuits electrònics.','El sistema binari és de base 2. Per exemple, el nombre binari 101 equival al nombre decimal 5.']},
      {titol:'Portes lògiques',paragrafs:['La porta AND dona sortida 1 només si totes les entrades valen 1. La porta OR dona 1 si almenys una entrada val 1. La porta NOT inverteix l’estat: transforma 0 en 1 i 1 en 0.','La taula de veritat mostra totes les combinacions possibles de les entrades i la sortida corresponent. És útil per comprovar un circuit abans de construir-lo.']},
      {titol:'Aplicacions',paragrafs:['Podem combinar portes per crear alarmes, sistemes d’autorització, senyalització o automatismes senzills. El primer pas és descriure la condició amb paraules, després escriure la funció lògica i finalment representar-la.']}],
    optativa:'Proposta de pràctica: dissenyar una alarma que s’activi només quan es compleixin unes condicions. Fes la taula de veritat i el circuit lògic.',
    e:'Proposta experimental: plantejar dues condicions d’activació, provar totes les combinacions 0/1 i comprovar si els resultats coincideixen amb la taula de veritat.',
    esquema:'ud5',peu:'Dues entrades i una sortida en una porta AND.',recursos:[],fotos:[]
  },
  {
    id:6,nom:'Instal·lacions pneumàtiques i hidràuliques',
    resum:'Pressió, cilindres, vàlvules i circuits amb aire o líquid a pressió.',
    objectius:['Diferenciar pneumàtica i hidràulica.','Relacionar força, pressió i superfície.','Interpretar components i esquemes bàsics.'],
    blocs:[
      {titol:'Dos sistemes de transmissió',paragrafs:['La pneumàtica utilitza gas comprimit, generalment aire, per transmetre energia i moure mecanismes. La hidràulica utilitza líquids a pressió, habitualment oli.','Els sistemes pneumàtics són habituals en automatismes ràpids; els hidràulics poden transmetre forces elevades. Cada sistema té avantatges, limitacions i requisits de seguretat.']},
      {titol:'Pressió i força',paragrafs:['La pressió és la força aplicada per unitat de superfície: p = F / A. Si la pressió es manté, una superfície més gran produeix una força més gran: F = p · A.','És important expressar les magnituds en unitats coherents: pascals (Pa), newtons (N) i metres quadrats (m²).']},
      {titol:'Components i esquemes',paragrafs:['Les fonts de pressió, les canonades, les vàlvules de control i els actuadors constitueixen un circuit. Un cilindre transforma la pressió en moviment lineal.','Els símbols normalitzats faciliten la lectura d’esquemes. No s’han de manipular instal·lacions reals sota pressió sense les mesures de seguretat indicades.']}],
    optativa:'Proposta de pràctica: interpretar i dibuixar un circuit que accioni un cilindre amb una vàlvula; comprova el moviment amb un simulador.',
    e:'Proposta experimental: utilitzar un simulador o model segur per investigar com afecta la superfície del pistó a la força obtinguda amb la mateixa pressió.',
    esquema:'ud6',peu:'Cilindre que transforma la pressió en moviment.',recursos:[],fotos:[]
  },
  {
    id:7,nom:'Sistemes de control programables',
    resum:'Sensors, controladors, actuadors i programes per automatitzar processos.',
    objectius:['Distingir entrades, processament i sortides.','Entendre la diferència entre control obert i amb retroalimentació.','Descriure i provar programes de control senzills.'],
    blocs:[
      {titol:'Què és un sistema de control?',paragrafs:['Un sistema automatitzat rep informació de l’entorn, la processa i provoca una acció. Un sensor pot detectar llum, temperatura o moviment. El controlador executa instruccions i ordena actuar a un motor, LED, brunzidor o un altre actuador.','En un sistema de llaç obert no es comprova contínuament el resultat; en un sistema amb retroalimentació, la mesura permet ajustar l’acció.']},
      {titol:'Programar decisions',paragrafs:['Els programes utilitzen seqüències, repeticions i condicions. Una instrucció del tipus «si la llum és baixa, encén el LED» relaciona l’entrada d’un sensor amb una sortida.','Abans de provar el muntatge, es pot representar el funcionament amb un diagrama de flux o pseudocodi. Després cal comprovar què passa en diferents situacions.']},
      {titol:'Provar i millorar',paragrafs:['La fase de depuració busca errors al programa, a les connexions o a la interpretació dels sensors. Canvia una cosa cada vegada, anota què passa i repeteix la prova per comprovar la millora.']}],
    optativa:'Proposta de pràctica: programar amb Micro:bit un sistema que utilitzi un sensor i activi una llum, so o moviment segons una condició.',
    e:'Proposta experimental: comparar el comportament d’un control programat quan canviem el llindar d’un sensor i registrar les condicions d’activació.',
    esquema:'ud7',peu:'Entrada d’un sensor, controlador i actuador.',recursos:[],fotos:[]
  }
];

const ILLUSTRACIONS={
  ud1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Esquema amb les fases necessitat, disseny, fabricació i prova"><rect width="680" height="245" fill="#edf5f5"/><g font-family="system-ui" text-anchor="middle" font-weight="700" font-size="18" fill="#17383d"><rect x="22" y="82" width="138" height="76" rx="12" fill="#fff" stroke="#8baeb3"/><text x="91" y="127">Necessitat</text><rect x="190" y="82" width="138" height="76" rx="12" fill="#fff" stroke="#8baeb3"/><text x="259" y="127">Disseny</text><rect x="358" y="82" width="138" height="76" rx="12" fill="#fff" stroke="#8baeb3"/><text x="427" y="127">Fabricació</text><rect x="526" y="82" width="132" height="76" rx="12" fill="#fff" stroke="#8baeb3"/><text x="592" y="127">Prova</text></g><g stroke="#285f68" stroke-width="3" fill="none"><path d="M162 120h25m-8-8 8 8-8 8"/><path d="M330 120h25m-8-8 8 8-8 8"/><path d="M498 120h25m-8-8 8 8-8 8"/><path d="M592 160v38H260v-38" stroke-dasharray="6 6"/></g><text x="430" y="217" fill="#285f68" font-family="system-ui" font-size="15" text-anchor="middle">Millorar i tornar a provar</text></svg>`,
  ud2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Esquema de cicle de vida i economia circular"><rect width="680" height="245" fill="#edf5f5"/><g font-family="system-ui" text-anchor="middle" fill="#17383d"><circle cx="166" cy="121" r="65" fill="#fff" stroke="#8baeb3" stroke-width="2"/><circle cx="340" cy="121" r="65" fill="#fff" stroke="#8baeb3" stroke-width="2"/><circle cx="514" cy="121" r="65" fill="#fff" stroke="#8baeb3" stroke-width="2"/><g font-size="18" font-weight="750"><text x="166" y="115">Fabricar</text><text x="340" y="115">Utilitzar</text><text x="514" y="115">Reparar</text></g><g font-size="14" fill="#587077"><text x="166" y="137">amb menys impacte</text><text x="340" y="137">durant més temps</text><text x="514" y="137">i reutilitzar</text></g></g><g stroke="#285f68" stroke-width="3" fill="none"><path d="M234 121h37m-9-9 9 9-9 9M408 121h37m-9-9 9 9-9 9"/><path d="M514 54Q340 -20 166 54" stroke-dasharray="6 6"/></g><text x="340" y="28" font-size="15" font-family="system-ui" text-anchor="middle" fill="#285f68">Menys residus · més vida útil</text></svg>`,
  ud3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Casa amb aïllament, finestres i plaques solars"><rect width="680" height="245" fill="#edf5f5"/><circle cx="560" cy="50" r="28" fill="#f2c967"/><g stroke="#e6b548" stroke-width="3"><path d="M560 9v-9M560 100v-9M519 50h-10M611 50h-10M531 21l-8-8M589 79l8 8M589 21l8-8M531 79l-8 8"/></g><path d="M150 112L340 31l190 81" fill="none" stroke="#285f68" stroke-width="15" stroke-linejoin="round"/><rect x="180" y="111" width="320" height="116" fill="#fff" stroke="#8baeb3" stroke-width="3"/><rect x="209" y="138" width="76" height="56" fill="#c9e4e8" stroke="#467c87" stroke-width="3"/><rect x="393" y="138" width="76" height="56" fill="#c9e4e8" stroke="#467c87" stroke-width="3"/><rect x="306" y="161" width="67" height="66" fill="#d9ebe5" stroke="#467c87" stroke-width="3"/><path d="M286 78l86-36 52 23-87 38z" fill="#377a87" stroke="#fff" stroke-width="2"/><g stroke="#accbd0" stroke-width="2"><path d="M304 71l34 25M328 61l34 25M351 52l35 25"/></g><text x="340" y="241" font-size="14" fill="#285f68" font-family="system-ui" text-anchor="middle">Orientació · aïllament · energia solar</text></svg>`,
  ud4:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Circuit elèctric de baixa tensió amb bateria, resistència i LED"><rect width="680" height="245" fill="#edf5f5"/><g fill="none" stroke="#285f68" stroke-width="4"><path d="M178 62h324v118H178V62"/><path d="M307 62h30m30 0h60"/></g><rect x="296" y="48" width="82" height="28" fill="#edf5f5"/><path d="M300 62l10-10 10 20 10-20 10 20 10-20 10 20 10-10" stroke="#285f68" stroke-width="3" fill="none"/><circle cx="502" cy="121" r="25" fill="#fff" stroke="#285f68" stroke-width="3"/><path d="M488 121h28m-14-15v30" stroke="#285f68" stroke-width="3"/><path d="M190 158v44M202 166v27" stroke="#285f68" stroke-width="4"/><rect x="165" y="155" width="52" height="46" fill="#edf5f5"/><path d="M171 162h38M183 185h14" stroke="#285f68" stroke-width="4"/><g font-family="system-ui" font-size="16" fill="#17383d"><text x="332" y="38" text-anchor="middle">Resistència</text><text x="537" y="122">LED</text><text x="127" y="181">Bateria</text></g></svg>`,
  ud5:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Porta lògica AND amb dues entrades i una sortida"><rect width="680" height="245" fill="#edf5f5"/><g stroke="#285f68" stroke-width="4" fill="none"><path d="M140 95h145M140 154h145M420 124h130"/><path d="M285 69H340A55 55 0 0 1 340 179H285z" fill="#fff"/></g><g font-family="system-ui" fill="#17383d" font-size="22" font-weight="750"><text x="111" y="102">A</text><text x="111" y="162">B</text><text x="558" y="131">S</text><text x="321" y="132" font-size="25">&amp;</text></g><text x="340" y="216" font-family="system-ui" fill="#285f68" text-anchor="middle" font-size="17">AND: la sortida és 1 si A = 1 i B = 1</text></svg>`,
  ud6:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Cilindre pneumàtic o hidràulic amb pistó i moviment"><rect width="680" height="245" fill="#edf5f5"/><rect x="159" y="65" width="350" height="116" rx="6" fill="#fff" stroke="#285f68" stroke-width="4"/><rect x="355" y="67" width="15" height="112" fill="#b9d5d9" stroke="#285f68" stroke-width="2"/><path d="M370 122h210" stroke="#285f68" stroke-width="18"/><path d="M199 125h120m-12-12 12 12-12 12" fill="none" stroke="#4c8a92" stroke-width="5"/><path d="M208 181v36" stroke="#285f68" stroke-width="4"/><g font-family="system-ui" font-size="18" fill="#17383d"><text x="146" y="37">Pressió</text><text x="385" y="37">Pistó</text><text x="501" y="101">Moviment</text></g><path d="M177 43l31 19" stroke="#285f68" stroke-width="2"/><text x="340" y="229" font-family="system-ui" font-size="15" fill="#285f68" text-anchor="middle">Força = pressió × superfície</text></svg>`,
  ud7:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 245" role="img" aria-label="Esquema de sensor, controlador i actuador"><rect width="680" height="245" fill="#edf5f5"/><g font-family="system-ui" text-anchor="middle" fill="#17383d" font-size="20" font-weight="780"><rect x="42" y="68" width="154" height="100" rx="12" fill="#fff" stroke="#8baeb3" stroke-width="3"/><text x="119" y="125">Sensor</text><rect x="263" y="68" width="154" height="100" rx="12" fill="#fff" stroke="#8baeb3" stroke-width="3"/><text x="340" y="125">Controlador</text><rect x="484" y="68" width="154" height="100" rx="12" fill="#fff" stroke="#8baeb3" stroke-width="3"/><text x="561" y="125">Actuador</text></g><g stroke="#285f68" stroke-width="4" fill="none"><path d="M198 118h61m-10-10 10 10-10 10M419 118h61m-10-10 10 10-10 10"/></g><text x="340" y="213" text-anchor="middle" font-family="system-ui" font-size="16" fill="#285f68">Entrada → decisió programada → sortida</text></svg>`
};

function renderUnitat(){
  const params=new URLSearchParams(location.search);
  const id=Number(params.get('ud'));
  const u=UNITATS.find(x=>x.id===id)||UNITATS[0];
  const g=params.get('grup')==='e'?'e':'optativa';
  const name=g==='e'?'4t E':'4t Optativa Tecnologia';
  const courseUrl='curs.html?grup='+g;
  document.title='UD'+u.id+' · '+u.nom+' · Tecnologia Rovira';
  document.getElementById('unit-eyebrow').textContent=name+' · UD'+u.id;
  document.getElementById('unit-title').textContent=u.nom;
  document.getElementById('unit-description').textContent=u.resum;
  document.getElementById('unit-crumb').textContent='UD'+u.id;
  document.getElementById('course-back').textContent=name;
  document.getElementById('course-back').href=courseUrl;
  document.getElementById('more-units').href=courseUrl;

  const theory=document.getElementById('unit-theory');
  const heading=document.createElement('h2');heading.textContent='Explicació del temari';theory.append(heading);
  for(const block of u.blocs){
    const h=document.createElement('h3');h.textContent=block.titol;theory.append(h);
    for(const ptext of block.paragrafs){const p=document.createElement('p');p.textContent=ptext;theory.append(p)}
    if(block.punts){const list=document.createElement('ul');for(const item of block.punts){const li=document.createElement('li');li.textContent=item;list.append(li)}theory.append(list)}
  }

  const fig=document.getElementById('unit-figure');
  fig.innerHTML=ILLUSTRACIONS[u.esquema]; // Esquema SVG estàtic definit en aquest mateix arxiu.
  const cap=document.createElement('figcaption');cap.textContent=u.peu;fig.append(cap);
  const photos=document.getElementById('unit-photos');
  if(u.fotos.length){for(const f of u.fotos){const el=document.createElement('figure');el.className='lesson-illustration';const img=document.createElement('img');img.src=f.url;img.alt=f.peu;img.loading='lazy';img.style.width='100%';const caption=document.createElement('figcaption');caption.textContent=f.peu;el.append(img,caption);photos.append(el)}}
  else{const el=document.createElement('div');el.className='placeholder';el.textContent='Espai preparat per afegir fotografies reals del taller, dels materials i dels projectes.';photos.append(el)}

  const resources=document.getElementById('unit-resources');
  if(u.recursos.length){for(const r of u.recursos){const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener';a.textContent=r.nom+' ↗';resources.append(a)}}
  else{const el=document.createElement('div');el.className='placeholder';el.textContent='Aquí hi aniran els PDFs, les presentacions i les fitxes que afegim a la unitat.';resources.append(el)}

  document.getElementById('project-heading').textContent='Proposta de pràctica · '+name;
  document.getElementById('unit-project').textContent=u[g];
  if(u.id===1)renderUD1Game(document.getElementById('unit-extra'));

  const nav=document.getElementById('unit-nav');
  const prev=UNITATS.find(x=>x.id===u.id-1),next=UNITATS.find(x=>x.id===u.id+1);
  function addLink(target,label){const a=document.createElement('a');a.className='button secondary';a.href='unitat.html?ud='+target.id+'&grup='+g;a.textContent=label;nav.append(a)}
  if(prev)addLink(prev,'← UD'+prev.id);
  else{const a=document.createElement('a');a.className='button secondary';a.href=courseUrl;a.textContent='← Totes les unitats';nav.append(a)}
  if(next)addLink(next,'UD'+next.id+' →');
}

function renderUD1Game(host){
  const phases=['Detectar la necessitat','Buscar informació','Dissenyar la solució','Planificar materials i tasques','Construir el prototip','Verificar, millorar i comunicar'];
  const card=document.createElement('div');card.className='exercise';
  const title=document.createElement('h3');title.textContent='Joc: ordena les fases del projecte';
  const hint=document.createElement('p');hint.textContent='Toca les fases en l’ordre correcte. Si t’equivoques, torna-ho a provar.';
  const status=document.createElement('div');status.className='status';status.setAttribute('aria-live','polite');
  const options=document.createElement('div');options.className='phase-options';
  const feedback=document.createElement('div');feedback.className='feedback';feedback.setAttribute('role','status');
  const reset=document.createElement('button');reset.className='button secondary';reset.type='button';reset.textContent='Barrejar i repetir';
  card.append(title,hint,status,options,feedback,reset);host.append(card);
  let order=[],next=0;
  function start(){order=phases.map((_,i)=>i);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}next=0;feedback.textContent='';draw()}
  function draw(){
    status.textContent=next===phases.length?'Molt bé! Has completat les sis fases.':'Fase '+(next+1)+' de '+phases.length;
    options.replaceChildren();
    for(const index of order){const b=document.createElement('button');b.type='button';b.className=''+(index<next?'done':'');b.textContent=phases[index];b.disabled=index<next;b.addEventListener('click',()=>{if(index===next){next++;feedback.textContent=next===phases.length?'Projecte ordenat!':'Correcte. Continua amb el pas següent.';draw()}else feedback.textContent='Encara no. Què cal fer abans?'});options.append(b)}
  }
  reset.addEventListener('click',start);start();
}
