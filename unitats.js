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
    resum:'Els ODS de l’ONU, els recursos naturals i les decisions tecnològiques: investiga, debat i proposa.',
    objectius:['Conèixer l’Agenda 2030 i relacionar els ODS amb problemes reals.','Explicar els impactes de l’extracció, l’energia, l’aigua i la mobilitat.','Diferenciar economia lineal i economia circular al llarg del cicle de vida.','Defensar una opinió amb dades, escoltar altres punts de vista i proposar millores per a l’institut.'],
    blocs:[
      {titol:'1. Què vol dir desenvolupament sostenible?',paragrafs:['El desenvolupament sostenible busca cobrir les necessitats d’avui sense comprometre les possibilitats de les generacions futures. Una decisió s’ha de valorar des de tres perspectives: ambiental, social i econòmica.','La tecnologia pot aportar solucions —com un sistema d’estalvi d’aigua—, però també necessita matèries primeres i energia. Per això és important preguntar-se qui se’n beneficia, quin cost té i quin impacte provoca.'],punts:['Ambiental: emissions, consum d’aigua, materials i residus.','Social: salut, igualtat, accessibilitat i condicions de treball.','Econòmica: preu, manteniment, durabilitat i viabilitat.']},
      {titol:'2. L’ONU, l’Agenda 2030 i els ODS',paragrafs:['L’any 2015 els Estats membres de les Nacions Unides van aprovar l’Agenda 2030, que inclou 17 Objectius de Desenvolupament Sostenible (ODS) i 169 metes. Els ODS volen millorar la vida de les persones i protegir el planeta; no són només objectius ambientals.','Alguns ODS relacionats directament amb Tecnologia són el 6 (aigua neta), 7 (energia assequible i no contaminant), 9 (indústria i innovació), 11 (ciutats sostenibles), 12 (producció i consum responsables) i 13 (acció climàtica). Cap objectiu funciona del tot sol: les decisions tenen conseqüències en altres àmbits.'],punts:['Pregunta clau: quins ODS podem treballar des del Rovira-Forns?','No n’hi ha prou amb dir «és sostenible»: cal aportar arguments i proves.']},
      {titol:'3. Processos extractius i matèries primeres',paragrafs:['Molts objectes tecnològics contenen metalls, minerals, plàstics, vidre i altres materials. L’extracció de recursos terrestres pot modificar el paisatge, consumir energia i aigua i generar residus. També té una dimensió social: les condicions de treball i la distribució dels beneficis.','Per exemple, fabricar un mòbil nou requereix materials obtinguts en diferents llocs, processos industrials i transport. Si un aparell funciona, reparar-lo o allargar-ne l’ús pot evitar la necessitat de fabricar-ne un altre abans d’hora.'],punts:['Reduir materials innecessaris.','Triar productes duradors i reparables.','Recuperar materials quan l’aparell arriba al final de la seva vida útil.']},
      {titol:'4. Energia i tecnologia',paragrafs:['La indústria, el transport i els edificis necessiten energia. Les fonts renovables (com la solar i l’eòlica) es reposen de manera natural, mentre que els combustibles fòssils són limitats i la seva combustió emet gasos d’efecte hivernacle.','Per decidir entre tecnologies no hem de mirar només l’energia consumida durant l’ús: també compten la fabricació, el manteniment i el final de vida. Estalviar energia i evitar consums innecessaris continua sent important encara que l’origen de l’electricitat sigui renovable.']},
      {titol:'5. Recursos hídrics i ús responsable de l’aigua',paragrafs:['L’aigua es fa servir a les llars, l’agricultura i nombrosos processos industrials. Fer-la arribar a les aixetes i tractar les aigües residuals requereix infraestructures i energia.','A casa i a l’institut podem detectar fuites, instal·lar dispositius eficients i evitar malbarataments. La pregunta no és només «quanta aigua veiem?», sinó també quanta se n’utilitza durant la producció dels béns que comprem.']},
      {titol:'6. Transport i mobilitat sostenible',paragrafs:['Els desplaçaments tenen costos energètics, ambientals, econòmics i socials. Caminar, anar en bicicleta o utilitzar transport públic pot reduir l’impacte de molts trajectes, però les alternatives depenen de la distància, la seguretat i l’accessibilitat.','Quan comparem opcions, cal comptar les persones transportades, l’energia utilitzada, l’espai ocupat i les necessitats reals. Una bona proposta de mobilitat ha de ser també viable i inclusiva.']},
      {titol:'7. Cicle de vida i economia circular',paragrafs:['El cicle de vida d’un producte inclou l’extracció de materials, la fabricació, el transport, l’ús i la gestió final. Un producte pot consumir poca energia en funcionament i, alhora, haver requerit molts recursos per fabricar-se.','L’economia lineal segueix el camí «extreure → fabricar → utilitzar → llençar». L’economia circular intenta reduir residus i conservar els materials en ús: prevenir, reparar, reutilitzar, compartir i, quan toca, reciclar. Reciclar ajuda, però normalment és millor evitar generar residus.'],punts:['Exemple: reparar una cadira abans de comprar-ne una de nova.','Exemple: dissenyar un objecte que es pugui desmuntar i substituir peces.','Exemple: compartir eines que només s’utilitzen de tant en tant.']}],
    optativa:'Repte de disseny: escull un objecte d’ús habitual al Rovira-Forns (paperera, estoig, suport, embalatge o aparell). Redissenya’l perquè duri més o generi menys residus. Relaciona la proposta amb dos ODS, fes-ne un esbós i explica com el podríem fabricar o reparar.',
    e:'Repte experimental: escull una pregunta que puguis mesurar (per exemple, quants envasos es generen en una activitat o quin percentatge de l’alumnat reutilitza una ampolla). Formula una hipòtesi, recull dades anònimes, representa-les en un gràfic i proposa una millora vinculada a dos ODS.',
    esquema:'ud2',peu:'L’economia circular intenta allargar la vida dels productes i reduir residus.',recursos:[{nom:'Fitxa imprimible · investigació dels ODS i debat',url:'fitxa-ud2.html'},{nom:'ONU · Els 17 Objectius de Desenvolupament Sostenible',url:'https://sdgs.un.org/es/goals'},{nom:'ONU · Campanya Actua Ara',url:'https://www.un.org/es/actnow'}],fotos:[]
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
  if(u.id===2)renderUD2Activities(document.getElementById('unit-extra'),g);

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

/* UD2: material autònom de consulta i activitats sense recollida de dades personals. */
const ODS=[
  ['Fi de la pobresa','Garantir condicions de vida dignes per a tothom.'],
  ['Fam zero','Millorar l’alimentació i fer que els sistemes agrícoles siguin sostenibles.'],
  ['Salut i benestar','Protegir la salut i afavorir una vida saludable.'],
  ['Educació de qualitat','Facilitar una educació inclusiva i oportunitats d’aprenentatge.'],
  ['Igualtat de gènere','Eliminar la discriminació i ampliar les oportunitats de dones i nenes.'],
  ['Aigua neta i sanejament','Garantir l’accés a l’aigua i gestionar-la responsablement.'],
  ['Energia neta i assequible','Afavorir l’accés universal a energia fiable i sostenible.'],
  ['Treball digne i creixement econòmic','Millorar el treball, els drets laborals i l’activitat econòmica inclusiva.'],
  ['Indústria, innovació i infraestructures','Desenvolupar infraestructures resilients i tecnologia útil per a la societat.'],
  ['Reducció de les desigualtats','Reduir les diferències d’oportunitats entre persones i territoris.'],
  ['Ciutats i comunitats sostenibles','Fer que pobles i ciutats siguin segurs, inclusius i sostenibles.'],
  ['Consum i producció responsables','Utilitzar millor els recursos i reduir els residus.'],
  ['Acció climàtica','Actuar per limitar el canvi climàtic i adaptar-nos als seus efectes.'],
  ['Vida submarina','Protegir els oceans i els ecosistemes marins.'],
  ['Vida terrestre','Cuidar els boscos, els sòls i la biodiversitat.'],
  ['Pau, justícia i institucions sòlides','Impulsar societats pacífiques, drets i institucions responsables.'],
  ['Aliances per als objectius','Cooperar entre persones, països i organitzacions per avançar.']
];

function renderUD2Activities(host,g){
  const container=document.createElement('div');container.className='ud2-activities';
  container.innerHTML=`
    <div class="exercise" id="ods-explorer"><h3>Explora els 17 ODS</h3>
      <p>No tots són ambientals. Obre cada objectiu, llegeix-lo i pensa què hi pot aportar la tecnologia.</p>
      <div class="ods-grid"></div>
      <p class="subtle">Font: <a href="https://sdgs.un.org/es/goals" target="_blank" rel="noopener">Nacions Unides, llista oficial dels ODS ↗</a>.</p>
    </div>
    <div class="exercise" id="ods-quiz"><h3>Joc: quin ODS hi relacionaries?</h3>
      <p>Relaciona situacions de la vida real amb el seu objectiu principal. Alguns casos es poden vincular amb més d’un ODS; aquí busquem el més directe.</p>
      <p class="status" id="ods-score" aria-live="polite"></p><div id="ods-question"></div>
      <div class="phase-options" id="ods-answers"></div><p class="feedback" id="ods-feedback" role="status"></p>
      <button type="button" class="button secondary" id="ods-next">Següent pregunta</button>
    </div>
    <div class="exercise" id="ods-debate"><h3>Debat: el Consell de Sostenibilitat del Rovira-Forns</h3>
      <p>Tria una proposta. Per defensar-la, no n’hi ha prou amb dir «m’agrada» o «no m’agrada»: necessites com a mínim una dada, un exemple i una resposta a una objecció.</p>
      <label class="field-label" for="debate-topic">Quina qüestió debatrem?</label>
      <select id="debate-topic" class="simple-select"><option value="0">Cal reparar els dispositius abans de comprar-ne de nous?</option><option value="1">S’ha de prioritzar arribar a l’institut a peu, en bici o transport públic?</option><option value="2">És millor comprar tecnologia eficient o reduir el consum?</option></select>
      <div class="debate-prompt" id="debate-prompt" aria-live="polite"></div>
      <h4>Com organitzem el debat?</h4>
      <ol><li><strong>Investiga (8 min):</strong> cerca dues fonts fiables i anota un fet verificable.</li><li><strong>Prepara't (6 min):</strong> equips a favor, en contra i moderació. Cada equip prepara arguments i preguntes.</li><li><strong>Debat (15 min):</strong> exposició inicial, rèpliques i preguntes del públic; respecta els torns.</li><li><strong>Acord (6 min):</strong> proposeu una mesura possible al centre, com comprovar-la i quins ODS treballa.</li></ol>
      <p class="subtle">No hi ha una única resposta correcta: cal distingir fets i opinions, citar fonts, escoltar i poder canviar d’opinió.</p>
      <a class="button secondary" href="fitxa-ud2.html" target="_blank" rel="noopener">Obrir la fitxa per investigar i preparar el debat ↗</a>
    </div>
  `;
  host.append(container);

  const grid=container.querySelector('.ods-grid');
  ODS.forEach(([name,desc],i)=>{
    const el=document.createElement('details');el.className='ods-item';
    const summary=document.createElement('summary');
    const number=document.createElement('span');number.className='ods-number';number.textContent=String(i+1).padStart(2,'0');
    const label=document.createElement('span');label.textContent=name;
    summary.append(number,label);
    const info=document.createElement('p');info.textContent=desc;
    const a=document.createElement('a');a.href='https://sdgs.un.org/es/goals/goal'+(i+1);a.target='_blank';a.rel='noopener';a.textContent='Consultar l’ODS a l’ONU ↗';
    el.append(summary,info,a);grid.append(el);
  });

  const questions=[
    {text:'L’institut instal·la reductors de cabal per gastar menys aigua a les aixetes.',correct:6,options:[6,7,12],why:'L’ODS 6 tracta de l’aigua neta i la gestió sostenible dels recursos hídrics.'},
    {text:'Un barri incorpora plaques solars per produir electricitat.',correct:7,options:[7,9,11],why:'L’ODS 7 promou l’accés a una energia assequible, fiable i sostenible.'},
    {text:'Un taller dissenya màquines que faciliten una fabricació menys contaminant.',correct:9,options:[8,9,15],why:'L’ODS 9 inclou indústria, infraestructures i innovació.'},
    {text:'El municipi crea un carril bici segur per arribar al centre educatiu.',correct:11,options:[6,11,14],why:'L’ODS 11 tracta de comunitats i ciutats més sostenibles.'},
    {text:'Una classe repara ordinadors que encara funcionen en comptes de llençar-los.',correct:12,options:[4,12,16],why:'L’ODS 12 fomenta el consum i la producció responsables.'},
    {text:'Es prepara un pla per reduir les emissions que contribueixen a l’escalfament global.',correct:13,options:[5,13,17],why:'L’ODS 13 se centra en l’acció climàtica.'}
  ];
  const question=container.querySelector('#ods-question'),answers=container.querySelector('#ods-answers'),feedback=container.querySelector('#ods-feedback'),score=container.querySelector('#ods-score'),next=container.querySelector('#ods-next');
  let idx=0,points=0,answered=false;
  function drawQuestion(){
    answered=false;feedback.textContent='';answers.replaceChildren();
    const q=questions[idx];score.textContent='Pregunta '+(idx+1)+' de '+questions.length+' · Encerts: '+points;
    question.textContent=q.text;
    for(const opt of q.options){const b=document.createElement('button');b.type='button';b.textContent='ODS '+opt+' · '+ODS[opt-1][0];b.addEventListener('click',()=>{
      if(answered)return;answered=true;
      const isRight=opt===q.correct;if(isRight)points++;
      feedback.textContent=(isRight?'Correcte! ':'La millor resposta és l’ODS '+q.correct+'. ')+q.why;
      for(const item of answers.children){item.disabled=true;const n=Number(item.dataset.ods);if(n===q.correct)item.classList.add('done');else if(n===opt)item.classList.add('incorrect')}
      score.textContent='Pregunta '+(idx+1)+' de '+questions.length+' · Encerts: '+points;
      next.textContent=idx===questions.length-1?'Tornar a jugar':'Següent pregunta';
    });b.dataset.ods=String(opt);answers.append(b)}
    next.disabled=true;next.textContent='Respon per continuar';
  }
  // Permet continuar quan s'ha respost, i mostra l'explicació abans de passar de pregunta.
  answers.addEventListener('click',()=>{if(answered)next.disabled=false});
  next.addEventListener('click',()=>{if(!answered)return;if(idx===questions.length-1){idx=0;points=0}else idx++;drawQuestion()});
  drawQuestion();

  const debates=[
    {question:'El centre hauria de reparar els dispositius electrònics abans de comprar-ne de nous sempre que sigui viable?',ods:'ODS 9 i 12',pro:'La reparació allarga la vida dels materials i evita fabricar aparells abans d’hora.',contra:'Alguns aparells poden ser difícils de reparar, consumir massa energia o no satisfer necessitats actuals.',data:'Com compararíem el preu i la vida útil d’una reparació amb la compra d’un dispositiu nou?'},
    {question:'S’haurien de prioritzar els desplaçaments a peu, en bicicleta o amb transport públic per arribar al Rovira-Forns?',ods:'ODS 11 i 13',pro:'La mobilitat compartida o activa pot reduir emissions i ocupació d’espai.',contra:'No tothom viu a prop ni disposa de rutes segures o transport públic adequat.',data:'Quines distàncies, alternatives i barreres d’accessibilitat hauríem de conèixer?'},
    {question:'Per reduir l’impacte ambiental, és millor consumir menys tecnologia que comprar-ne de més eficient?',ods:'ODS 7, 12 i 13',pro:'Evitar compres innecessàries pot reduir extraccions i residus.',contra:'Algunes noves tecnologies poden estalviar molta energia i millorar serveis essencials.',data:'Quina informació del cicle de vida caldria comparar abans de decidir?'}
  ];
  const select=container.querySelector('#debate-topic'),prompt=container.querySelector('#debate-prompt');
  function drawDebate(){const d=debates[Number(select.value)];prompt.replaceChildren();
    const title=document.createElement('h4');title.textContent=d.question;prompt.append(title);
    for(const [label,txt] of [['ODS relacionats',d.ods],['Una raó a favor',d.pro],['Una objecció possible',d.contra],['Quina prova necessitem?',d.data]]){const p=document.createElement('p');const strong=document.createElement('strong');strong.textContent=label+': ';p.append(strong,document.createTextNode(txt));prompt.append(p)}
  }
  select.addEventListener('change',drawDebate);drawDebate();

  if(g==='e'){
    const note=document.createElement('p');note.className='subtle';note.textContent='4t E: abans del debat, utilitzeu les vostres pròpies mesures o dades anònimes com a evidència. Expliqueu el mètode i les seves limitacions.';
    container.querySelector('#ods-debate').append(note);
  }
}
