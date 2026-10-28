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
      {titol:'1. Què vol dir desenvolupament sostenible?',paragrafs:['Una tecnologia és útil quan resol un problema. Però, si per fer-ho esgotem materials, generem residus o deixem persones sense accés a la solució, hem de revisar-la. El desenvolupament sostenible busca cobrir les necessitats presents sense perjudicar les possibilitats de les generacions futures.','Una bona decisió equilibra tres dimensions que sovint entren en tensió: la protecció dels ecosistemes, el benestar i els drets de les persones, i la viabilitat econòmica. També demana participació ciutadana, adaptació al context local i revisió de les solucions a mesura que canvien les necessitats.','Exemple propi: un sistema d’il·luminació de pati amb sensors pot estalviar electricitat, però també hem d’estudiar-ne el cost, la reparabilitat i si la llum és suficient per circular amb seguretat.'],punts:['Dimensió ambiental: biodiversitat, aigua, energia, emissions i residus.','Dimensió social: salut, igualtat, accessibilitat, seguretat i condicions laborals.','Dimensió econòmica: inversió, costos de funcionament i manteniment, vida útil i benefici real.','Principi de participació: cal escoltar tant les persones expertes com les que utilitzaran la solució.']},
      {titol:'2. L’ONU, l’Agenda 2030 i els ODS',paragrafs:['L’any 2015 els Estats membres de les Nacions Unides van aprovar l’Agenda 2030, que inclou 17 Objectius de Desenvolupament Sostenible (ODS) i 169 metes. Els ODS volen millorar la vida de les persones i protegir el planeta; no són només objectius ambientals.','Alguns ODS relacionats directament amb Tecnologia són el 6 (aigua neta), 7 (energia assequible i no contaminant), 9 (indústria i innovació), 11 (ciutats sostenibles), 12 (producció i consum responsables) i 13 (acció climàtica). Cap objectiu funciona del tot sol: les decisions tenen conseqüències en altres àmbits.'],punts:['Pregunta clau: quins ODS podem treballar des del Rovira-Forns?','No n’hi ha prou amb dir «és sostenible»: cal aportar arguments i proves.']},
      {titol:'3. Processos extractius i matèries primeres',paragrafs:['Un fanalet amb llums LED, un ordinador i una bicicleta comparteixen una realitat: per fabricar-los s’han hagut d’obtenir materials de la natura. Els metalls com el ferro i el coure provenen de jaciments minerals; el petroli i el gas són recursos fòssils. Alguns recursos es poden regenerar si s’exploten a un ritme adequat i d’altres es formen tan lentament que, a escala humana, els considerem no renovables.','En una explotació minera s’extreu material que conté el mineral d’interès (mena) juntament amb materials que no es volen aprofitar (ganga). El procés pot generar moviments de terres, soroll, pols, consum d’aigua i alteracions d’hàbitats. Per això cal estudiar l’impacte des de l’elecció del lloc fins al tancament i la restauració.','Les accions preventives busquen evitar el dany abans que aparegui; les correctores o reparadores intenten reduir-ne els efectes i recuperar l’entorn. Cap mina és «sense impacte», però un projecte pot incorporar controls més responsables.'],punts:['Prevenció: evitar zones especialment sensibles, controlar la pols i el soroll i protegir cursos d’aigua.','Restauració: estabilitzar el terreny, gestionar residus, recuperar sòls i revegetar amb espècies adequades.','Perspectiva social: seguretat i condicions de treball, drets de les comunitats i traçabilitat dels materials.','Pregunta per debatre: hauríem d’obrir una mina pròxima si és necessària per fabricar bateries? Qui decideix i qui n’assumeix el cost?']},
      {titol:'4. Energia, transformacions i eficiència',paragrafs:['L’energia és la capacitat de produir transformacions. La mesurem en joules (J); en el consum elèctric també s’utilitza el quilowatt hora (kWh). La potència indica la rapidesa amb què es transfereix energia: P = E / t. Així, un aparell de 2 W que funciona durant 5 hores consumeix 10 Wh = 0,010 kWh.','El primer principi de la termodinàmica ens recorda que l’energia es conserva: es transforma i es transfereix. El segon ens ajuda a entendre que els processos reals dissipen part de l’energia —sovint com a calor— i no podem convertir tota l’energia aportada en el treball útil desitjat.','L’eficiència d’un dispositiu és la relació entre l’energia útil i la que rep: η = Eútil / Econsumida. Si rep 100 J i n’aprofita 75 J per a la funció buscada, l’eficiència és del 75 %. Una eficiència alta pot estalviar energia, però no implica automàticament que tot el producte sigui sostenible.','L’energia renovable prové de fluxos naturals que es reposen: la llum solar es pot transformar en electricitat amb plaques fotovoltaiques o en calor amb captadors solars tèrmics; el vent mou aerogeneradors, l’aigua pot moure turbines, i també hi ha aprofitaments geotèrmics i de biomassa. Cada tecnologia té limitacions, materials i impactes propis.'],punts:['Treball mecànic: si una força constant actua en la direcció del desplaçament, W = F · d.','Calor sensible: Q = m · c · ΔT, fent servir unitats coherents per a la massa i la calor específica.','En el vent, la potència disponible creix aproximadament amb el cub de la velocitat: Pvent = ½ · ρ · A · v³. Un aerogenerador real només n’aprofita una part.','Una central hidroelèctrica es pot estudiar amb P ≈ ρ · g · Q · h · η; el cabal, el salt i el rendiment importen.','Per comparar dues opcions, calcula’n el consum, però examina també fabricació, cost, reparació i residus.']},
      {titol:'5. Recursos hídrics: disponibilitat, qualitat i tractament',paragrafs:['Que hi hagi aigua al planeta no vol dir que tothom disposi d’aigua dolça de qualitat al lloc i al moment que la necessita. L’escassetat pot estar relacionada amb sequeres i límits físics, manca d’infraestructures o de recursos econòmics, i problemes de gestió. Els usos agrícoles, domèstics i industrials poden competir pel mateix recurs.','Parlem d’ús consumptiu quan una part significativa de l’aigua extreta no torna immediatament al mateix sistema disponible; en altres usos pot retornar, però amb una qualitat diferent. L’objectiu no és només portar més aigua, sinó també evitar fuites i disminuir demandes innecessàries.','La qualitat de l’aigua es descriu amb indicadors físics —com la terbolesa o la temperatura—, químics —com el pH, la salinitat o la presència de contaminants— i microbiològics —presència de microorganismes que poden afectar la salut. Un pH pròxim a 7, per si sol, no garanteix que sigui potable.','Les estacions potabilitzadores i depuradores utilitzen operacions diferents segons l’aigua i la finalitat. La coagulació i floculació agrupen partícules petites per facilitar-ne la separació; els processos biològics fan servir microorganismes per degradar matèria orgànica; la filtració per membranes i l’osmosi inversa poden separar determinats contaminants o sals, amb costos energètics.'],punts:['Gestionar la demanda: detectar fuites, reutilitzar aigua quan sigui adequat i reduir usos innecessaris.','Gestionar l’oferta: captació, emmagatzematge, tractament i distribució, amb impactes que cal valorar.','Distingir tres processos: potabilitzar (fer apta per al consum), depurar (tractar aigües residuals) i dessalinitzar (reduir sals de l’aigua).','Pregunta de recerca: per què una aigua transparent pot continuar sense ser potable?']},
      {titol:'6. Transport, mobilitat i costos que no sempre veiem',paragrafs:['El transport és el desplaçament de persones o mercaderies. La mobilitat és un concepte més ampli: inclou la xarxa de carrers i vies, els vehicles, les persones, les normes i la facilitat amb què podem arribar als llocs. No tothom disposa de les mateixes alternatives, i una ciutat ben planificada ha de tenir-ho en compte.','Un viatge en cotxe no té només el cost del combustible o l’electricitat. També pot generar soroll, emissions, ocupació d’espai, desgast d’infraestructures, congestió i riscos per a altres persones. Aquests efectes són costos externs quan no els assumeix completament qui fa el desplaçament.','Els ecosistemes tenen límits de resistència davant les pressions humanes. Parlar de capacitat de càrrega ens ajuda a plantejar quants impactes pot suportar un territori, tot i que no és una xifra universal ni fixa: depèn del tipus d’impacte, el lloc i el temps.','La velocitat, la distància recorreguda, la massa transportada, l’ocupació del vehicle i la tecnologia utilitzada afecten el consum. Per exemple, en un mateix recorregut, portar més persones en transport col·lectiu pot repartir el consum per passatger.'],punts:['Opcions a estudiar: caminar, bicicleta, autobús, tren, cotxe compartit o vehicle particular.','Valorar emissió, energia, soroll, seguretat, temps i accessibilitat; cap opció és universalment possible per a tothom.','Repte proper: com milloraríem l’arribada i la sortida del Rovira-Forns sense deixar ningú enrere?']},
      {titol:'7. Cicle de vida i economia circular',paragrafs:['El cicle de vida d’un producte inclou l’extracció de materials, la fabricació, el transport, l’ús i la gestió final. Un producte pot consumir poca energia en funcionament i, alhora, haver requerit molts recursos per fabricar-se.','L’economia lineal segueix el camí «extreure → fabricar → utilitzar → llençar». L’economia circular intenta reduir residus i conservar els materials en ús: prevenir, reparar, reutilitzar, compartir i, quan toca, reciclar. Reciclar ajuda, però normalment és millor evitar generar residus.'],punts:['Exemple: reparar una cadira abans de comprar-ne una de nova.','Exemple: dissenyar un objecte que es pugui desmuntar i substituir peces.','Exemple: compartir eines que només s’utilitzen de tant en tant.']}],
    optativa:'Projecte real de la UD2: transformarem el fanalet de Halloween en una decoració de Nadal reutilitzant-ne l’estructura. Dissenya elements nadalencs desmuntables, reutilitza retalls i peces que ja teniu, i revisa l’ús de LEDs de baixa tensió. Documenta amb un abans/després, una llista de materials recuperats, el consum estimat de la llum i una reflexió sobre els ODS 7, 12 i 13. No cal començar un fanalet nou: el repte és adaptar el que ja tenim.',
    e:'Investigació de 4t E: compara dues formes d’il·luminar o decorar el fanalet reciclat sense malbaratar recursos. Formula una hipòtesi, mesura la potència i les hores d’ús o pesa els materials reutilitzats, calcula el consum estimat i representa les dades. Conclou quina opció és millor i quins límits tenen les mesures.',
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
  for(const [i,block] of u.blocs.entries()){
    const h=document.createElement('h3');h.textContent=block.titol;h.id='apartat-'+(i+1);theory.append(h);
    for(const ptext of block.paragrafs){const p=document.createElement('p');p.textContent=ptext;theory.append(p)}
    if(block.punts){const list=document.createElement('ul');for(const item of block.punts){const li=document.createElement('li');li.textContent=item;list.append(li)}theory.append(list)}
  }
  if(u.id===2){
    const aside=document.querySelector('.lesson-aside .box ul');
    if(aside){aside.replaceChildren();for(const [i,block] of u.blocs.entries()){
      const li=document.createElement('li'),a=document.createElement('a');a.href='#apartat-'+(i+1);a.textContent=block.titol;li.append(a);aside.append(li);
    }}
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
    <div class="exercise" id="ud2-concepts"><h3>Idees clau d’aquesta unitat</h3>
      <div class="sustainability-grid"><div><strong>🌿 Medi ambient</strong><span>Consum de recursos, emissions i biodiversitat</span></div><div><strong>👥 Persones</strong><span>Salut, drets, inclusió i participació</span></div><div><strong>⚙️ Economia</strong><span>Costos, manteniment i durabilitat</span></div></div>
      <p class="subtle">Una solució sostenible necessita equilibrar les tres dimensions. Cap d’elles, per si sola, no és suficient.</p>
      <h4>Processos explicats amb esquemes propis</h4>
      <div class="concept-flow"><strong>Materials</strong><span>Extracció responsable</span><b>→</b><span>Fabricació</span><b>→</b><span>Ús i reparació</span><b>→</b><span>Recuperació</span></div>
      <div class="concept-flow"><strong>Aigua</strong><span>Captació</span><b>→</b><span>Potabilització</span><b>→</b><span>Ús</span><b>→</b><span>Depuració abans del retorn</span></div>
      <div class="concept-flow"><strong>Energia</strong><span>Font energètica</span><b>→</b><span>Transformació</span><b>→</b><span>Energia útil + energia dissipada</span></div>
      <details class="study-more"><summary>Ampliació per preparar Batxillerat: tres relacions útils</summary>
        <ul><li><strong>Energia elèctrica:</strong> E = P · t, si la potència és constant. Amb P en kW i t en hores, E queda en kWh.</li><li><strong>Eficiència:</strong> η = Eútil / Eentrada. Per obtenir un percentatge, multipliquem per 100.</li><li><strong>Escalfament:</strong> Q = m · c · ΔT. El signe de Q depèn de si el sistema rep o cedeix calor.</li></ul>
        <p>Exemple: dues llums de 5 W i 2 W, enceses 4 hores al dia durant 30 dies, consumeixen 0,60 kWh i 0,24 kWh respectivament. La diferència d’ús és de 0,36 kWh, sense comptar la fabricació.</p>
      </details>
      <details class="study-more"><summary>Ampliació per preparar Batxillerat: els quatre principis de la termodinàmica</summary>
        <ul><li><strong>Principi zero:</strong> si dos cossos estan per separat en equilibri tèrmic amb un tercer, també ho estan entre ells; això permet definir la temperatura.</li><li><strong>Primer principi:</strong> l’energia no es crea del no-res ni desapareix; es transfereix i es transforma.</li><li><strong>Segon principi:</strong> els processos espontanis tenen una direcció i l’entropia total d’un sistema aïllat no disminueix.</li><li><strong>Tercer principi:</strong> en apropar-se al zero absolut, l’entropia d’un cristall perfecte amb estat fonamental únic tendeix a zero.</li></ul>
        <p>No cal memoritzar-los tots per participar en el debat: utilitza’ls per entendre per què una màquina real no transforma tota l’energia en treball útil.</p>
      </details>
    </div>
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
    <div class="exercise" id="fanal-energy"><h3>El fanalet de Halloween es transforma en Nadal</h3>
      <p>Ja tenim la carcassa: el repte és reutilitzar-la amb peces decoratives nadalenques que puguem posar i treure. Calcula quanta energia farà servir la llum del fanalet, compara opcions i no oblidis els materials que ens estalviem.</p>
      <div class="energy-controls"><label>Potència de la llum (W)<input id="light-power" type="number" min="0" max="100" step="0.1" value="2"></label><label>Hores encesa al dia<input id="light-hours" type="number" min="0" max="24" step="0.5" value="4"></label><label>Dies d’ús<input id="light-days" type="number" min="0" max="365" step="1" value="30"></label></div>
      <div class="energy-answer" role="status" aria-live="polite"><span>Energia estimada</span><strong id="light-energy">0,240 kWh</strong><small>E (kWh) = P (W) × hores/dia × dies ÷ 1000</small></div>
      <p class="subtle">Calculadora de consum elèctric durant l’ús; no mesura l’impacte total ni el consum de fabricació. Només cal fer servir circuits de baixa tensió i treballar seguint les normes del taller.</p>
      <ul><li><strong>Abans:</strong> fotografia el fanalet de Halloween i identifica què es pot conservar.</li><li><strong>Transformació:</strong> incorpora decoració nadalenca desmuntable, preferiblement amb retalls recuperats.</li><li><strong>Després:</strong> fotografia el resultat i justifica quins materials i quanta energia heu estalviat o estimat.</li></ul>
    </div>
    <div class="exercise" id="ods-debate"><h3>Debat acadèmic a l’estil nord-americà</h3>
      <p>Debat estructurat amb una <strong>moció</strong> clara, equip afirmatiu, equip negatiu, moderació i jurat. No és una baralla ni un concurs de cridar: guanya força l’argument més ben defensat, no necessàriament el més popular.</p>
      <label class="field-label" for="debate-topic">Quina qüestió debatrem?</label>
      <select id="debate-topic" class="simple-select"><option value="0">Moció 1 · Cal reparar abans de comprar nous dispositius?</option><option value="1">Moció 2 · Cal limitar els cotxes davant de l’institut?</option><option value="2">Moció 3 · Els governs han d’assumir la major responsabilitat pels ODS?</option><option value="3">Moció 4 · És millor reutilitzar el fanalet que fabricar-ne un de nou?</option></select>
      <div class="debate-prompt" id="debate-prompt" aria-live="polite"></div>
      <h4>Els quatre rols</h4><div class="debate-roles"><div><strong>Equip afirmatiu</strong><span>Defensa la moció amb proves.</span></div><div><strong>Equip negatiu</strong><span>Explica objeccions amb proves.</span></div><div><strong>Moderació</strong><span>Controla torns i respecte.</span></div><div><strong>Jurat</strong><span>Escolta, anota i valora la qualitat dels arguments.</span></div></div>
      <h4>Format de debat adaptat a l’aula</h4>
      <ol><li><strong>Recerca prèvia:</strong> cada equip consulta almenys dues fonts i prepara fets, arguments i possibles objeccions.</li><li><strong>Obertures:</strong> 90 segons per equip per presentar la posició.</li><li><strong>Interrogatori creuat:</strong> 2 minuts de preguntes breus entre equips, amb moderació.</li><li><strong>Refutacions:</strong> 60 segons per equip per respondre a arguments concrets.</li><li><strong>Conclusions:</strong> 60 segons per equip; després el jurat explica la seva decisió amb criteris.</li></ol>
      <div class="debate-timer"><label class="field-label" for="debate-round">Cronòmetre dels torns</label><div class="timer-row"><select id="debate-round" class="simple-select"><option value="90">Obertura · 1:30</option><option value="120">Preguntes creuades · 2:00</option><option value="60">Refutació o conclusió · 1:00</option></select><strong id="debate-clock" aria-live="off">01:30</strong></div><div class="timer-buttons"><button type="button" class="button" id="debate-start">Comença</button><button type="button" class="button secondary" id="debate-reset">Reinicia el torn</button></div></div>
      <p class="subtle">El jurat valora: <strong>evidències (40 %), capacitat de refutar amb respecte (30 %), claredat (20 %) i escolta (10 %).</strong> Són criteris orientatius per al joc, no una nota de la web.</p>
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

  const power=container.querySelector('#light-power'),hours=container.querySelector('#light-hours'),days=container.querySelector('#light-days'),energy=container.querySelector('#light-energy');
  function calculate(){const v=[power,hours,days].map(input=>Math.max(0,Number(input.value)||0));energy.textContent=(v[0]*v[1]*v[2]/1000).toLocaleString('ca-ES',{maximumFractionDigits:4,minimumFractionDigits:3})+' kWh'}
  for(const el of [power,hours,days])el.addEventListener('input',calculate);
  calculate();

  const debates=[
    {question:'El centre hauria de reparar els dispositius electrònics abans de comprar-ne de nous sempre que sigui viable?',ods:'ODS 9 i 12',pro:'La reparació allarga la vida dels materials i evita fabricar aparells abans d’hora.',contra:'Alguns aparells poden ser difícils de reparar, consumir massa energia o no satisfer necessitats actuals.',data:'Com compararíem el preu i la vida útil d’una reparació amb la compra d’un dispositiu nou?'},
    {question:'El municipi hauria de limitar l’arribada de cotxes particulars just davant del Rovira-Forns?',ods:'ODS 11 i 13',pro:'Es pot guanyar espai segur i reduir contaminació i congestió a les hores d’entrada.',contra:'Algunes famílies necessiten alternatives accessibles i transports que ara no sempre existeixen.',data:'Quin ús real es fa de l’espai i quines alternatives de mobilitat hi ha a la zona?'},
    {question:'Els governs i les empreses han d’assumir més responsabilitat pels ODS que la ciutadania?',ods:'ODS 12, 13, 16 i 17',pro:'Les decisions sobre infraestructures, lleis i indústria tenen un impacte gran i requereixen recursos col·lectius.',contra:'Els hàbits quotidians, les compres i la participació ciutadana també poden impulsar canvis.',data:'Quines mesures podem documentar i com se’n reparteixen els costos i els beneficis?'},
    {question:'Per Nadal és més responsable adaptar el fanalet de Halloween que fabricar-ne un de nou?',ods:'ODS 7, 12 i 13',pro:'Aprofitar la carcassa existent evita utilitzar alguns materials nous i allarga la vida del projecte.',contra:'Cal valorar si la conversió és segura, duradora i si convé canviar alguns components ineficients.',data:'Quins materials reutilitzem, quin consum tenen els LEDs i com de durador serà el resultat?'}
  ];
  const select=container.querySelector('#debate-topic'),prompt=container.querySelector('#debate-prompt');
  function drawDebate(){const d=debates[Number(select.value)];prompt.replaceChildren();
    const title=document.createElement('h4');title.textContent=d.question;prompt.append(title);
    for(const [label,txt] of [['ODS relacionats',d.ods],['Una raó a favor',d.pro],['Una objecció possible',d.contra],['Quina prova necessitem?',d.data]]){const p=document.createElement('p');const strong=document.createElement('strong');strong.textContent=label+': ';p.append(strong,document.createTextNode(txt));prompt.append(p)}
  }
  select.addEventListener('change',drawDebate);drawDebate();

  const round=container.querySelector('#debate-round'),clock=container.querySelector('#debate-clock'),start=container.querySelector('#debate-start'),reset=container.querySelector('#debate-reset');
  let left=Number(round.value),timer=null,deadline=0;
  function stopTimer(){if(timer!==null){clearInterval(timer);timer=null}start.textContent='Comença'}
  function formatClock(){clock.textContent=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0')}
  function resetTimer(){stopTimer();left=Number(round.value);clock.classList.remove('time-up');clock.removeAttribute('aria-label');formatClock()}
  start.addEventListener('click',()=>{
    if(timer!==null){stopTimer();return}
    if(left===0)left=Number(round.value);
    start.textContent='Pausa';clock.classList.remove('time-up');formatClock();deadline=Date.now()+left*1000;
    timer=setInterval(()=>{left=Math.max(0,Math.ceil((deadline-Date.now())/1000));formatClock();if(left===0){stopTimer();clock.classList.add('time-up');clock.setAttribute('aria-label','Temps esgotat')}},250);
  });
  round.addEventListener('change',resetTimer);reset.addEventListener('click',resetTimer);resetTimer();

  if(g==='e'){
    const note=document.createElement('p');note.className='subtle';note.textContent='4t E: abans del debat, utilitzeu les vostres pròpies mesures o dades anònimes com a evidència. Expliqueu el mètode i les seves limitacions.';
    container.querySelector('#ods-debate').append(note);
  }
}
