/* Guia didàctica pròpia de Tecnologia i Enginyeria II.
   Les activitats resoltes són exemples originals, no enunciats oficials PAU. */
(() => {
  'use strict';
  const BASE = 'https://examenselectivitat.cat/selectivitat/Tecnologia%20industrial/per-temes/';
  const TOPICS = [
    {
      id:'energies', icon:'⚡', title:'Energies', color:'#3686b6', module:'Sistemes mecànics · Energia i rendiment',
      intro:'L’energia es transforma, es transfereix i es conserva. El repte dels problemes és identificar quina part és útil, quina es dissipa i en quines unitats cal treballar.',
      theory:[
        ['Treball, energia i potència','Una força transfereix energia mecànica si provoca un desplaçament. El treball depèn de la component de força paral·lela al moviment. La potència, en canvi, indica la rapidesa amb què es transfereix l’energia: joules per segon.'],
        ['Conservació i rendiment','En un sistema real, l’energia d’entrada es reparteix entre energia útil i pèrdues. El rendiment compara les dues quantitats i sempre s’ha d’utilitzar com a fracció decimal quan intervé en una fórmula.'],
        ['Calor específica i poder calorífic','La calor específica, que escriurem <strong>CE</strong>, relaciona massa i variació de temperatura; el poder calorífic, <strong>PC</strong>, relaciona massa de combustible i energia química. No confonguis la calor útil amb l’energia que cal consumir.'],
        ['Cicle de Carnot','Una màquina tèrmica absorbeix calor d’un focus calent, produeix treball i cedeix una part de l’energia a un focus fred. El rendiment màxim de Carnot depèn de temperatures absolutes i, per això, els graus Celsius s’han de convertir a kelvins.']
      ],
      visual:'carnot',
      formulas:[
        ['Treball mecànic','Força i desplaçament formen un angle α.','W = F · d · cos α','<b>W</b>: J · <b>F</b>: N · <b>d</b>: m · <b>α</b>: graus'],
        ['Potència mitjana','Energia transferida per unitat de temps.','P = E / t','<b>P</b>: W · <b>E</b>: J · <b>t</b>: s'],
        ['Rendiment','Energia que s’aprofita respecte de la subministrada.','η = E<sub>útil</sub> / E<sub>entrada</sub>','<b>η</b>: adimensional · Energies en la mateixa unitat'],
        ['Calor sensible','La substància varia de temperatura sense canviar d’estat.','Q = m · CE · ΔT','<b>Q</b>: J · <b>m</b>: kg · <b>CE</b>: J/(kg·K) · <b>ΔT</b>: K'],
        ['Combustible','Energia disponible en una massa de combustible.','E<sub>química</sub> = m · PC','<b>PC</b>: J/kg · <b>m</b>: kg'],
        ['Rendiment de Carnot','Límit ideal per a dues temperatures absolutes.','η<sub>màx</sub> = 1 − T<sub>fred</sub> / T<sub>calent</sub>','<b>T<sub>fred</sub>, T<sub>calent</sub></b>: kelvins (K)']
      ],
      example:{title:'Màquina tèrmica ideal',statement:'Una màquina treballa amb un focus calent de 800 K i un focus fred de 400 K. Rep 1.200 J de calor.',steps:['Escrivim el límit: η<sub>màx</sub> = 1 − 400 / 800 = <strong>0,50</strong>.','Això equival al <strong>50 %</strong> de rendiment ideal.','El treball màxim és W<sub>màx</sub> = 0,50 · 1.200 = <strong>600 J</strong>.'],result:'El treball útil màxim teòric és de 600 J; la resta, 600 J, es cedeix al focus fred.'},
      tip:'Per a problemes de Carnot, les temperatures han d’estar en K. En tota la web, calor específica = CE i poder calorífic = PC.',
      practice:'energies.html', practiceLabel:'Obrir els 30 exercicis d’Energies i els simuladors →', full:true
    },
    {
      id:'motors-termics', icon:'🏎️', title:'Motors tèrmics i cilindrada', color:'#b16a51', module:'Sistemes mecànics · Motors de combustió',
      intro:'Els motors de combustió transformen l’energia química del combustible en moviment de gir. Les diferències més importants són el nombre de temps, l’encesa i el recorregut dels gasos.',
      theory:[
        ['Motor de 2 temps (2T) de gasolina','Completa un cicle en dues curses del pistó —una pujada i una baixada— i una volta del cigonyal. En el 2T clàssic, el pistó obre i tanca les llumeneres de transferència i escapament, i la barreja nova entra al cilindre mentre surten els gasos cremats. La compressió i l’expansió se superposen amb altres processos. Té bugia.'],
        ['Motor de 4 temps (4T) de gasolina','Completa un cicle en quatre curses del pistó i dues voltes del cigonyal: admissió, compressió, expansió i escapament. Disposa de vàlvules d’admissió i escapament. La bugia provoca l’espurna que encén la barreja d’aire i gasolina al final de la compressió.'],
        ['Motor de 4 temps (4T) dièsel','També fa admissió, compressió, expansió i escapament en dues voltes del cigonyal, però en l’admissió entra aire i no una barreja prèvia amb combustible. L’aire es comprimeix fins a una temperatura elevada i el gasoil s’injecta al moment adequat: s’encén per compressió, sense bugia d’encesa.'],
        ['Cilindres, cilindrada i utilització','La cilindrada unitària és el volum que desplaça un pistó entre el punt mort superior i l’inferior. La total és la suma dels volums de tots els cilindres. Els motors 2T petits solen tenir un cilindre (motos lleugeres, desbrossadores o motoserres); els cotxes de gasolina acostumen a portar 3 o 4 cilindres, i els dièsel d’automòbil habitualment 4, encara que hi ha molts motors de 2, 6 o més cilindres segons l’aplicació.']
      ],
      visual:'motors',
      formulas:[
        ['Cilindrada unitària','Volum desplaçat per un únic pistó.','V<sub>u</sub> = (π · D² / 4) · C','<b>D</b>: diàmetre interior · <b>C</b>: cursa · si són cm, <b>V<sub>u</sub></b>: cm³'],
        ['Cilindrada total','Suma de totes les cilindrades unitàries iguals.','V<sub>t</sub> = V<sub>u</sub> · z','<b>z</b>: nombre de cilindres (sense unitat)'],
        ['Nombre de cilindres','Despejament habitual a les activitats.','z = V<sub>t</sub> / V<sub>u</sub>','<b>z</b>: enter; cilindrades en les mateixes unitats'],
        ['Conversió de cilindrada','Equivalència entre centímetres cúbics i litres.','1.000 cm³ = 1 L','1 cm³ = 1 cc'],
        ['Voltes del cigonyal per cicle','Relació entre temps i revolucions.','2T: 1 volta · 4T: 2 voltes','Una volta = 360°; dues voltes = 720°'],
        ['Potència mecànica de l’eix','A partir del parell i del règim.','P = Γ · 2π · n / 60','<b>P</b>: W · <b>Γ</b>: N·m · <b>n</b>: rpm']
      ],
      example:{title:'Cilindrada d’un motor de quatre cilindres',statement:'Un motor té quatre cilindres iguals, diàmetre D = 80 mm i cursa C = 90 mm. Calcula la cilindrada unitària i total.',steps:['Convertim: D = <strong>8 cm</strong> i C = <strong>9 cm</strong>.','Per a un cilindre: V<sub>u</sub> = π · 8² · 9 / 4 ≈ <strong>452,4 cm³</strong>.','Cilindrada total: V<sub>t</sub> = 4 · 452,4 ≈ <strong>1.810 cm³</strong>.','En litres: 1.810 / 1.000 ≈ <strong>1,81 L</strong>.'],result:'El motor té uns 452 cm³ per cilindre i una cilindrada total d’1,81 L.'},
      tip:'El nombre de temps no és el nombre de cilindres. Un motor 4T pot tenir 1, 3, 4, 6 o més cilindres. Si calcules z amb les cilindrades, el resultat ha de ser un nombre enter.',
      slug:'maquines-i-sistemes'
    },
    {
      id:'materials', icon:'🧱', title:'Materials i assaigs', color:'#a67b50', module:'Materials i fabricació',
      intro:'Estudiem com responen els materials quan els estirem, comprimim o deformem. Les propietats mecàniques es mesuren amb assaigs normalitzats.',
      theory:[
        ['Tensió i deformació no són el mateix','La tensió normal mesura la força aplicada per unitat de superfície, mentre que la deformació unitària indica l’allargament relatiu. Una barra pot suportar la mateixa força que una altra i patir una tensió diferent si les seves seccions són diferents.'],
        ['Zona elàstica i llei de Hooke','En la zona elàstica lineal, tensió i deformació són proporcionals: si retirem la càrrega, la proveta recupera la longitud inicial. El mòdul de Young E és el pendent de la recta tensió–deformació; com més gran, més rígid és el material.'],
        ['Límit elàstic, plasticitat i ruptura','Superat el límit elàstic, el material pot quedar deformat permanentment. La resistència a tracció i l’allargament a ruptura ajuden a comparar materials. Un material pot ser resistent però poc dúctil, o viceversa.'],
        ['Assaigs i selecció de materials','La tracció, la duresa i la resiliència aporten informació diferent. La duresa mesura la resistència a la penetració, mentre que la resiliència estudia l’energia absorbida en un impacte. Abans de seleccionar un material cal considerar propietats, fabricació, cost i ús.']
      ],
      visual:'tensio',
      formulas:[
        ['Tensió normal','Força axial repartida sobre la secció.','σ = F / S','<b>σ</b>: Pa = N/m² · <b>F</b>: N · <b>S</b>: m²'],
        ['Deformació unitària','Allargament dividit per longitud inicial.','ε = ΔL / L<sub>0</sub>','<b>ε</b>: sense unitat · <b>ΔL, L<sub>0</sub></b>: mateixa unitat'],
        ['Llei de Hooke','Relació elàstica per a una tracció axial.','σ = E · ε','<b>E</b>: Pa · <b>σ</b>: Pa'],
        ['Allargament elàstic','Resultat de combinar tensió, deformació i Hooke.','ΔL = F · L<sub>0</sub> / (E · S)','<b>ΔL</b>: m · <b>L<sub>0</sub></b>: m · <b>E</b>: Pa'],
        ['Secció d’una proveta circular','Per a una barra de diàmetre D.','S = π · D² / 4','<b>D</b>: m · <b>S</b>: m²']
      ],
      example:{title:'Allargament d’una barra d’acer',statement:'Una barra de L₀ = 1.000 mm i secció 50 mm² suporta una força de 10.000 N. E = 200 GPa.',steps:['Calculem la tensió: σ = 10.000 / 50 = <strong>200 N/mm² = 200 MPa</strong>.','Convertim el mòdul: E = 200 GPa = <strong>200.000 MPa</strong>.','Deformació: ε = 200 / 200.000 = <strong>0,001</strong>.','Allargament: ΔL = 0,001 · 1.000 = <strong>1 mm</strong>.'],result:'La barra s’allarga 1 mm, sempre que es mantingui dins del règim elàstic.'},
      tip:'Cal convertir les unitats de manera coherent. 1 MPa = 1 N/mm²; no barregis MPa amb Pa sense convertir.',
      slug:'propietats-assaigs'
    },
    {
      id:'metrologia', icon:'📏', title:'Metrologia i normalització', color:'#6d83ac', module:'Materials i fabricació',
      intro:'Una peça fabricada mai no té exactament la mida teòrica. Les toleràncies indiquen quins valors són acceptables i permeten decidir si dues peces encaixaran.',
      theory:[
        ['Magnituds i instruments','Mesurar és comparar una magnitud amb una unitat. El peu de rei, el micròmetre i el comparador tenen resolucions diferents. La resolució de l’instrument no s’ha de confondre amb la precisió total de la mesura.'],
        ['Mida nominal i límits','La cota nominal és el valor de referència del plànol. Les desviacions superior i inferior fixen les mides màxima i mínima permeses. La diferència entre aquests dos límits és la tolerància.'],
        ['Jocs, serratges i ajustatges','En un sistema forat–eix hi ha joc si el forat és més gran que l’eix. Hi ha serratge si l’eix supera el diàmetre del forat. Un ajustatge de transició pot donar joc o serratge segons les mides reals.'],
        ['Normalització i control de qualitat','Les normes faciliten que peces de fabricants diferents siguin compatibles. El control de qualitat compara les mesures reals amb els límits admesos: una peça queda acceptada si està dins de tolerància, independentment de si coincideix exactament amb la mida nominal.']
      ],
      formulas:[
        ['Tolerància dimensional','Amplada de l’interval acceptable.','T = D<sub>màx</sub> − D<sub>mín</sub>','T i diàmetres en mm, habitualment'],
        ['Desviació superior','Diferència entre mida màxima i nominal.','ES = D<sub>màx</sub> − D<sub>nom</sub>','<b>ES</b>: mm'],
        ['Desviació inferior','Diferència entre mida mínima i nominal.','EI = D<sub>mín</sub> − D<sub>nom</sub>','<b>EI</b>: mm'],
        ['Joc mínim','Pitjor cas amb el forat petit i l’eix gran.','J<sub>mín</sub> = D<sub>forat,mín</sub> − D<sub>eix,màx</sub>','<b>J<sub>mín</sub></b>: mm; negatiu implica serratge'],
        ['Joc màxim','Millor cas amb el forat gran i l’eix petit.','J<sub>màx</sub> = D<sub>forat,màx</sub> − D<sub>eix,mín</sub>','<b>J<sub>màx</sub></b>: mm']
      ],
      example:{title:'Ajustatge entre un forat i un eix',statement:'Forat: de 20,02 a 20,05 mm. Eix: de 19,98 a 20,00 mm.',steps:['Tolerància del forat: 20,05 − 20,02 = <strong>0,03 mm</strong>.','Tolerància de l’eix: 20,00 − 19,98 = <strong>0,02 mm</strong>.','Joc mínim: 20,02 − 20,00 = <strong>0,02 mm</strong>.','Joc màxim: 20,05 − 19,98 = <strong>0,07 mm</strong>.'],result:'Sempre hi haurà joc entre 0,02 i 0,07 mm. Les peces poden muntar-se sense interferència.'},
      tip:'Per als ajustatges, utilitza els casos límit: forat mínim amb eix màxim, i forat màxim amb eix mínim.',
      slug:'metrologia-normalitzacio'
    },
    {
      id:'fluids', icon:'💧', title:'Sistemes pneumàtics i oleohidràulics', color:'#3b9ca2', module:'Sistemes mecànics',
      intro:'L’aire comprimit i els líquids a pressió permeten transmetre energia i moure cilindres. La idea bàsica és la relació directa entre pressió, superfície i força.',
      theory:[
        ['Pneumàtica i hidràulica','La pneumàtica sol utilitzar aire comprimit; la hidràulica, un líquid que podem considerar pràcticament incompressible en molts exercicis. Les dues treballen amb pressió, cabal i actuadors, però tenen comportaments diferents.'],
        ['Principi de Pascal','En un fluid confinat, una variació de pressió es transmet en totes direccions. Amb la mateixa pressió, un pistó de superfície gran pot exercir una força gran. Per entendre el resultat cal dibuixar bé les superfícies.'],
        ['Cilindres de simple i doble efecte','En un cilindre de doble efecte la pressió pot impulsar l’èmbol en els dos sentits. A l’avanç actua sobre tota la superfície del pistó; al retrocés s’ha de restar la secció ocupada per la tija.'],
        ['Cabal, velocitat i unitats','El cabal volumètric mesura volum per unitat de temps. En un cilindre ideal, el cabal és igual a la secció efectiva multiplicada per la velocitat de l’èmbol. Abans de calcular, passa de bar a pascals i de mil·límetres a metres.']
      ],
      visual:'pascal',
      formulas:[
        ['Pressió','Força normal aplicada sobre una superfície.','p = F / S','<b>p</b>: Pa · <b>F</b>: N · <b>S</b>: m²'],
        ['Força del cilindre a l’avanç','Pressió sobre tota la secció del pistó.','F<sub>avanç</sub> = p · π D² / 4','<b>D</b>: m · <b>p</b>: Pa · <b>F</b>: N'],
        ['Força al retrocés','Cal descomptar la superfície de la tija.','F<sub>retrocés</sub> = p · π (D² − d²) / 4','<b>D</b>: pistó · <b>d</b>: tija (m)'],
        ['Cabal i velocitat','Volum desplaçat en cada segon.','q<sub>v</sub> = S · v','<b>q<sub>v</sub></b>: m³/s · <b>S</b>: m² · <b>v</b>: m/s'],
        ['Premsa hidràulica ideal','La pressió es transmet d’un pistó a l’altre.','F<sub>2</sub> / S<sub>2</sub> = F<sub>1</sub> / S<sub>1</sub>','Forces en N · superfícies en m²'],
        ['Conversió de pressió','Equivalència imprescindible.','1 bar = 10⁵ Pa','6 bar = 600.000 Pa']
      ],
      example:{title:'Força d’un cilindre pneumàtic',statement:'Un cilindre de diàmetre 40 mm rep una pressió manomètrica de 6 bar. Ignorem el fregament.',steps:['Diàmetre: D = 40 mm = <strong>0,040 m</strong>.','Pressió: p = 6 · 10⁵ = <strong>600.000 Pa</strong>.','Superfície: S = π · 0,040² / 4 = <strong>0,001257 m²</strong>.','Força: F = 600.000 · 0,001257 ≈ <strong>754 N</strong>.'],result:'La força teòrica d’avanç és d’uns 754 N. La força real serà menor per les pèrdues.'},
      tip:'Recorda que el retrocés d’un cilindre amb tija acostuma a tenir menys força que l’avanç a la mateixa pressió.',
      slug:'oleohidraulica'
    },
    {
      id:'reductors', icon:'⚙️', title:'Motors reductors', color:'#4d88b8', module:'Sistemes mecànics',
      intro:'Un reductor modifica el nombre de voltes i el parell de gir. Quan reduïm la velocitat angular amb engranatges, augmenta el parell disponible, però hi ha pèrdues de rendiment.',
      theory:[
        ['Rpm i velocitat angular','Les revolucions per minut indiquen quantes voltes fa un eix en un minut. La velocitat angular expressa el gir en radians per segon. La conversió entre totes dues apareix contínuament en exercicis de motors.'],
        ['Parell motor i potència','El parell és el moment de força que fa girar un eix. La potència mecànica és el producte del parell per la velocitat angular: un motor pot mantenir la potència i canviar el parell si varia el règim de gir.'],
        ['Relació de transmissió','Definirem la reducció com i = n d’entrada / n de sortida. Si i és més gran que 1, l’eix de sortida gira més lent. En dos engranatges exteriors, també podem trobar-la comparant el nombre de dents de la roda conduïda amb el de la motriu.'],
        ['Efecte del rendiment','En un reductor ideal la potència d’entrada i la de sortida serien iguals; en un de real, la potència útil disminueix. Així, el parell de sortida és proporcional a la reducció i al rendiment.']
      ],
      visual:'reductor',
      formulas:[
        ['Velocitat angular','De rpm a radians per segon.','ω = 2π · n / 60','<b>ω</b>: rad/s · <b>n</b>: rpm'],
        ['Potència de rotació','La potència que transmet un eix.','P = Γ · ω','<b>P</b>: W · <b>Γ</b>: N·m · <b>ω</b>: rad/s'],
        ['Relació de reducció','Entrada dividida per sortida.','i = n<sub>e</sub> / n<sub>s</sub>','<b>i</b>: sense unitat · <b>n</b>: rpm'],
        ['Dents d’engranatges','Parell d’engranatges exteriors.','i = z<sub>s</sub> / z<sub>e</sub>','<b>z</b>: nombre de dents (enter)'],
        ['Parell a la sortida','Considerem les pèrdues.','Γ<sub>s</sub> = η · i · Γ<sub>e</sub>','<b>η</b>: fracció · parells en N·m'],
        ['Potència útil','El reductor dissipa una part de la potència.','P<sub>s</sub> = η · P<sub>e</sub>','Potències en W']
      ],
      example:{title:'Reductor d’engranatges',statement:'Un motor de 1,5 kW gira a 1.500 rpm. Mou un pinyó de 20 dents que engrana amb una roda de 60 dents. Rendiment del reductor: 90 %.',steps:['Reducció: i = 60 / 20 = <strong>3</strong>.','Velocitat de sortida: n<sub>s</sub> = 1.500 / 3 = <strong>500 rpm</strong>.','Velocitat angular del motor: ω<sub>e</sub> = 2π · 1.500 / 60 ≈ <strong>157,1 rad/s</strong>.','Parell d’entrada: Γ<sub>e</sub> = 1.500 / 157,1 ≈ <strong>9,55 N·m</strong>.','Parell de sortida: Γ<sub>s</sub> = 0,90 · 3 · 9,55 ≈ <strong>25,8 N·m</strong>.'],result:'La roda de sortida gira a 500 rpm i transmet aproximadament 25,8 N·m.'},
      tip:'En alguns enunciats la relació de transmissió es defineix al revés. Escriu sempre què és l’entrada i què és la sortida abans de calcular.',
      slug:'motors-reductors'
    },
    {
      id:'maquines', icon:'🏗️', title:'Principis de les màquines', color:'#96825b', module:'Sistemes mecànics',
      intro:'Les màquines transformen forces i moviments. Per estudiar una palanca o una estructura que no es mou, primer representem totes les forces i després imposem l’equilibri.',
      theory:[
        ['Diagrama de cos lliure','Aïlla el cos que estudies i dibuixa-hi les forces exteriors: pesos, reaccions dels suports, traccions i forces aplicades. Tria uns eixos i un criteri de signes abans d’escriure equacions.'],
        ['Equilibri de forces','Si un cos està en repòs i no accelera, la resultant de les forces ha de ser zero. En problemes plans això implica dues equacions, una per a les components horitzontals i una altra per a les verticals.'],
        ['Equilibri de moments','Una força pot fer girar un cos si té un braç de palanca respecte del punt de gir. El moment és la força pel braç perpendicular; el signe indica el sentit de gir. En equilibri, la suma algebraica de moments també és zero.'],
        ['Màquines simples i rendiment','Palanca, politja i pla inclinat poden reduir la força necessària a canvi de més desplaçament. No creen energia. A la pràctica, el fregament i altres pèrdues fan que la força necessària sigui major que la ideal.']
      ],
      visual:'palanca',
      formulas:[
        ['Equilibri horitzontal','La suma de forces en l’eix x és nul·la.','Σ F<sub>x</sub> = 0','Forces en N'],
        ['Equilibri vertical','La suma de forces en l’eix y és nul·la.','Σ F<sub>y</sub> = 0','Forces en N'],
        ['Equilibri de moments','No hi ha acceleració angular.','Σ M<sub>O</sub> = 0','Moments en N·m'],
        ['Moment d’una força','Distància perpendicular a la línia d’acció.','M = F · d<sub>⊥</sub> = F · r · sin α','<b>M</b>: N·m · <b>r,d</b>: m · <b>F</b>: N'],
        ['Palanca ideal','Moments de les forces a banda i banda.','F<sub>1</sub> · d<sub>1</sub> = F<sub>2</sub> · d<sub>2</sub>','Forces en N · distàncies en m'],
        ['Treball útil i rendiment','Compara treball obtingut i aportat.','η = W<sub>útil</sub> / W<sub>entrada</sub>','<b>η</b>: fracció']
      ],
      example:{title:'Palanca en equilibri',statement:'Una força de 200 N actua a 2 m del punt de suport. A l’altre costat hi ha una força desconeguda situada a 0,8 m.',steps:['Triem el punt de suport O per calcular els moments.','En equilibri, els moments dels dos costats es compensen: 200 · 2 = F · 0,8.','Aïllem: F = 400 / 0,8 = <strong>500 N</strong>.'],result:'Calen 500 N a 0,8 m per equilibrar els 200 N situats a 2 m.'},
      tip:'El braç és la distància perpendicular a la força, no necessàriament la longitud de la barra. El sentit real d’una força desconeguda pot deduir-se del signe final.',
      slug:'maquines-i-sistemes'
    },
    {
      id:'electrics', icon:'🔌', title:'Màquines i sistemes elèctrics', color:'#437db5', module:'Electromecànica i automatització',
      intro:'Els circuits i les màquines elèctriques relacionen tensió, corrent, potència i energia. En corrent altern cal distingir potència activa, aparent i factor de potència.',
      theory:[
        ['Tensió, intensitat i resistència','La tensió indica la diferència d’energia elèctrica per unitat de càrrega; la intensitat mesura càrrega per segon i la resistència descriu l’oposició al pas del corrent. La llei d’Ohm s’aplica a elements òhmics.'],
        ['Corrent continu i corrent altern','En corrent continu ideal, tensió i intensitat mantenen la polaritat. En corrent altern varien amb el temps; en règim sinusoidal s’empren valors eficaços (RMS). La freqüència expressa el nombre de cicles per segon.'],
        ['Potència en corrent altern','La potència activa P és la que es transforma en treball o calor útil. La potència aparent S relaciona tensió i corrent eficaços; el factor cos φ indica quina part correspon a potència activa. No hem de confondre W amb VA.'],
        ['Transformadors i màquines','Un transformador ideal canvia la tensió alterna segons les espires de cada bobina, tot mantenint la potència aproximadament constant. Els motors elèctrics converteixen energia elèctrica en mecànica, amb pèrdues que es reflecteixen en el rendiment.']
      ],
      formulas:[
        ['Llei d’Ohm','En un receptor òhmic.','U = R · I','<b>U</b>: V · <b>R</b>: Ω · <b>I</b>: A'],
        ['Potència elèctrica en CC','Producte de tensió i intensitat.','P = U · I','<b>P</b>: W · <b>U</b>: V · <b>I</b>: A'],
        ['Potència activa monofàsica','Per a valors eficaços en CA sinusoidal.','P = U · I · cos φ','<b>P</b>: W · <b>cos φ</b>: factor de potència'],
        ['Potència aparent monofàsica','Producte de les magnituds eficaces.','S = U · I','<b>S</b>: VA'],
        ['Potència activa trifàsica','Sistema trifàsic equilibrat.','P = √3 · U<sub>L</sub> · I<sub>L</sub> · cos φ','<b>U<sub>L</sub></b>: tensió de línia (V) · <b>I<sub>L</sub></b>: A'],
        ['Transformador ideal','Relació entre tensions i espires.','U<sub>1</sub> / U<sub>2</sub> = N<sub>1</sub> / N<sub>2</sub>','<b>N</b>: nombre d’espires'],
        ['Energia i temps','Potència constant durant un temps.','E = P · t','<b>E</b>: kWh si <b>P</b>: kW i <b>t</b>: h']
      ],
      example:{title:'Potència d’un motor monofàsic',statement:'Un receptor funciona a 230 V, consumeix 5 A i té un factor de potència cos φ = 0,80. Treballa durant 2 h.',steps:['Potència aparent: S = 230 · 5 = <strong>1.150 VA</strong>.','Potència activa: P = 230 · 5 · 0,80 = <strong>920 W</strong>.','Energia activa consumida: E = 0,920 · 2 = <strong>1,84 kWh</strong>.'],result:'La potència activa és de 920 W i el consum de 2 hores és d’1,84 kWh.'},
      tip:'En corrent altern, indica si fas servir valors eficaços i si el circuit és monofàsic o trifàsic. kW és potència; kWh, energia.',
      slug:'electromagnetisme-i-corrent-altern'
    },
    {
      id:'logica', icon:'🧠', title:'Control lògic i funcions lògiques', color:'#a16fa1', module:'Electromecànica i automatització',
      intro:'Els sistemes digitals només treballen amb dos estats, 0 i 1. Una expressió booleana, una taula de veritat i un circuit de portes són tres maneres d’explicar el mateix funcionament.',
      theory:[
        ['Variables booleanes','Una entrada digital pot tenir valor 0 (fals) o 1 (cert). Les sortides depenen de la combinació d’entrades. Amb tres entrades hi ha 2³ = 8 combinacions possibles, i cadascuna ha d’aparèixer a la taula de veritat.'],
        ['Portes AND, OR i NOT','AND dona 1 només si totes les entrades són 1. OR dona 1 si almenys una és 1. NOT inverteix el valor d’una entrada. Les portes NAND i NOR incorporen una negació al resultat de les operacions anteriors.'],
        ['De la frase al circuit','Primer descriu la condició d’activació, després escriu la funció lògica i finalment dibuixa les portes normalitzades. Els parèntesis estableixen l’ordre de les operacions.'],
        ['Simplificació','Dues expressions poden tenir la mateixa taula de veritat i requerir un nombre diferent de portes. L’àlgebra de Boole i els mapes de Karnaugh permeten simplificar funcions; cal comprovar que cap combinació canviï el valor de sortida.']
      ],
      visual:'logica',
      formulas:[
        ['Conjunció AND','Totes les entrades han de ser 1.','Y = A · B','<b>·</b>: AND · <b>Y</b>: sortida digital'],
        ['Disjunció OR','N’hi ha prou que una entrada sigui 1.','Y = A + B','<b>+</b>: OR, no una suma aritmètica'],
        ['Negació NOT','Canvia 0 per 1 i 1 per 0.','Y = ¬A','<b>¬</b>: negació lògica'],
        ['Funció combinada','AND entre A i B; després OR amb C.','Y = (A · B) + C','<b>A, B, C</b>: entrades · <b>Y</b>: sortida'],
        ['Nombre de files','Amb n entrades binàries.','N = 2<sup>n</sup>','<b>N</b>: combinacions · <b>n</b>: entrades'],
        ['Lleis de De Morgan','Negació d’una AND o d’una OR.','¬(A · B) = ¬A + ¬B','També ¬(A + B) = ¬A · ¬B']
      ],
      example:{title:'Control d’una alarma',statement:'Una alarma s’activa quan els sensors A i B detecten una condició simultàniament, o quan el sensor d’emergència C s’activa.',steps:['Escrivim la funció: <strong>Y = (A · B) + C</strong>.','Amb A = 1, B = 0 i C = 1: Y = (1 · 0) + 1 = <strong>1</strong>.','Amb A = 1, B = 0 i C = 0: Y = 0 + 0 = <strong>0</strong>.','Dibuixarem una porta AND per A i B; la seva sortida i C entren a una OR.'],result:'C = 1 activa l’alarma independentment d’A i B; si C = 0, calen A i B simultàniament.'},
      tip:'Les taules han d’incloure totes les combinacions. Als exercicis PAU convé representar les portes amb simbologia normalitzada.',
      slug:'sistemes-digitals'
    },
    {
      id:'organitzacio', icon:'🏭', title:'Organització industrial', color:'#ca855a', module:'Projectes de desenvolupament · Ampliació aplicada',
      intro:'Planificar la producció implica combinar recursos, temps i costos. Un bon procés industrial no només ha de funcionar tècnicament; també ha de ser viable, segur i eficient.',
      theory:[
        ['Costos fixos i variables','Els costos fixos no depenen directament de les unitats fabricades dins d’un interval de producció, mentre que els variables augmenten amb cada unitat. El cost total suma els dos components.'],
        ['Ingressos i punt mort','Si el preu de venda és constant, els ingressos totals creixen proporcionalment amb les unitats venudes. El punt mort o llindar de rendibilitat és on ingressos i costos totals s’igualen. Per sota hi ha pèrdues; per sobre, benefici, si es mantenen les hipòtesis.'],
        ['Productivitat i millora contínua','La productivitat compara el que obtenim amb els recursos que hi dediquem: unitats per hora, unitats per treballador o similars. Per valorar-la cal concretar quin recurs mesura el denominador.'],
        ['Planificació de projectes','Un diagrama de Gantt situa activitats en el temps. Amb PERT/CPM identifiquem dependències i camí crític: si una tasca crítica es retarda, pot retardar tot el projecte. La qualitat, la seguretat i la sostenibilitat també formen part de la presa de decisions.']
      ],
      visual:'puntmort',
      formulas:[
        ['Cost total','Cost fix més cost variable unitari per unitats.','CT = CF + CV<sub>u</sub> · q','<b>CT, CF</b>: € · <b>CV<sub>u</sub></b>: €/unitat · <b>q</b>: unitats'],
        ['Ingressos totals','Preu de venda per unitat multiplicat per vendes.','IT = p · q','<b>p</b>: €/unitat · <b>q</b>: unitats'],
        ['Benefici','Diferència entre ingressos i costos.','B = IT − CT','<b>B</b>: €'],
        ['Punt mort','Unitats necessàries per igualar ingressos i costos.','q<sub>0</sub> = CF / (p − CV<sub>u</sub>)','<b>q<sub>0</sub></b>: unitats · cal p &gt; CV<sub>u</sub>'],
        ['Productivitat','Producció respecte d’un recurs.','Productivitat = unitats / hores','Per exemple, unitats/h'],
        ['Durada d’un camí crític','Suma de durades de les tasques del camí.','T<sub>camí</sub> = Σ t<sub>tasques</sub>','<b>T</b>: unitats de temps coherents']
      ],
      example:{title:'Punt mort d’un petit taller',statement:'Costos fixos de 1.200 €, cost variable de 14 € per peça i preu de venda de 20 € per peça.',steps:['Cost total: CT = 1.200 + 14 · q.','Ingressos totals: IT = 20 · q.','Punt mort: 20q = 1.200 + 14q → 6q = 1.200.','Resultat: q<sub>0</sub> = 1.200 / 6 = <strong>200 peces</strong>.','Comprovació: a 200 peces, CT = IT = <strong>4.000 €</strong>.'],result:'Amb 200 peces venudes el benefici és zero; a partir de 201 peces, hi ha benefici sota aquestes hipòtesis.'},
      tip:'Si el preu unitari és igual o inferior al cost variable unitari, no hi ha un punt mort positiu amb aquests costos fixos.',
      slug:'organitzacio-industrial'
    }
  ];

  const number = (value, digits = 1) => new Intl.NumberFormat('ca-ES', {maximumFractionDigits:digits,minimumFractionDigits:digits}).format(value);
  const diagrams = {
    carnot: () => `<div class="figure" role="group" aria-label="Diagrama d'una màquina tèrmica de Carnot amb dos focus tèrmics i un gràfic pressió-volum"><h3>🔥 El cicle de Carnot: calor, treball i límit del rendiment</h3>
      <svg viewBox="0 0 760 355" role="img" aria-label="Una màquina rep Q calent del focus a T calenta, produeix treball W i cedeix Q fred al focus fred. A la dreta, el gràfic P-V del cicle amb dues isotermes i dues adiabàtiques.">
        <defs><linearGradient id="hot2" x1="0" x2="1"><stop stop-color="#f0a35d"/><stop offset="1" stop-color="#ce5c55"/></linearGradient><linearGradient id="cold2" x1="0" x2="1"><stop stop-color="#6bc5ea"/><stop offset="1" stop-color="#3d8bc3"/></linearGradient></defs>
        <rect x="48" y="12" width="245" height="49" rx="13" fill="url(#hot2)"/><text x="170" y="43" fill="#fff" font-weight="900" font-size="20" text-anchor="middle">Focus calent · Tₕ</text>
        <path d="M170 66 V105" stroke="#c86b50" stroke-width="7" stroke-linecap="round"/><path d="M170 118 l-12 -18 h24z" fill="#c86b50"/><text x="185" y="95" fill="#a75c45" font-size="16" font-weight="850">Qₕ</text>
        <rect x="86" y="121" width="168" height="88" rx="18" fill="#ecf6fa" stroke="#80acc4" stroke-width="4"/><circle cx="170" cy="164" r="29" fill="#5f9ebd"/><path d="M158 164 h24 m-12 -12 v24" stroke="#fff" stroke-width="5"/><text x="170" y="199" fill="#235f85" text-anchor="middle" font-size="15" font-weight="850">Màquina ideal</text>
        <path d="M260 165 H333" stroke="#3c9474" stroke-width="8" stroke-linecap="round"/><path d="M342 165 l-17 -11 v22z" fill="#3c9474"/><text x="285" y="145" fill="#2c866a" font-size="19" font-weight="900">W</text>
        <path d="M170 212 V256" stroke="#439ac1" stroke-width="7" stroke-linecap="round"/><path d="M170 266 l-12 -18 h24z" fill="#439ac1"/><text x="186" y="244" fill="#347fa4" font-size="16" font-weight="850">Q𝒸</text>
        <rect x="48" y="267" width="245" height="49" rx="13" fill="url(#cold2)"/><text x="170" y="298" fill="#fff" font-weight="900" font-size="20" text-anchor="middle">Focus fred · T𝒸</text>
        <path d="M415 35 V300 H727" stroke="#507a91" stroke-width="3" fill="none"/><path d="M415 35 l-7 14 h14z M727 300 l-14 -7 v14z" fill="#507a91"/>
        <text x="402" y="29" font-size="20" fill="#3d6d88" font-weight="900">p</text><text x="732" y="323" font-size="20" fill="#3d6d88" font-weight="900">V</text>
        <path d="M462 85 Q560 105 615 157" fill="none" stroke="#c56e4f" stroke-width="5" stroke-linecap="round"/><path d="M615 157 Q643 199 650 245" fill="none" stroke="#b7a35f" stroke-width="5" stroke-linecap="round"/><path d="M650 245 Q566 229 493 185" fill="none" stroke="#4f98bd" stroke-width="5" stroke-linecap="round"/><path d="M493 185 Q460 135 462 85" fill="none" stroke="#7c82b5" stroke-width="5" stroke-linecap="round"/>
        <path d="M548 112 l-12 -11 l14 2z M637 210 l-5 -15 l12 7z M574 222 l15 1 l-9 10z M464 137 l-6 14 l12 -5z" fill="#285c7e"/>
        <text x="537" y="83" fill="#a95d43" font-size="17" font-weight="850">Isoterma calenta</text><text x="527" y="269" fill="#397da4" font-size="17" font-weight="850">Isoterma freda</text><text x="563" y="346" fill="#557489" font-size="16">Diagrama p–V ideal</text>
      </svg><p>El recorregut tancat representa <strong>dues transformacions isotèrmiques</strong> i <strong>dues adiabàtiques</strong>. L’àrea interior del cicle p–V és el treball net en un cicle ideal. El rendiment màxim és <strong>η = 1 − T<sub>fred</sub>/T<sub>calent</sub></strong>, sempre amb temperatures en kelvins.</p></div>`,
    motors: () => {
      const engine=(type,label,description,range)=>`<div class="motor-box" data-motor="${type}"><h4>${label}</h4><svg viewBox="0 0 290 270" role="img" aria-label="Esquema en secció d'un motor ${label}, amb pistó mòbil, mecanisme de combustió i entrades i sortides diferenciades">
        <defs><linearGradient id="steel-${type}" x1="0" x2="1"><stop stop-color="#cedde6"/><stop offset=".48" stop-color="#8aaac0"/><stop offset="1" stop-color="#ccdae5"/></linearGradient></defs>
        <path d="M80 48 V221 H210 V48" fill="#eaf4fa" stroke="#7c9aab" stroke-width="15" stroke-linejoin="round"/>
        <rect x="85" y="60" width="120" height="140" fill="#f9fcff" stroke="#bad4e2" stroke-width="2"/>
        <rect data-piston x="89" y="160" width="112" height="27" rx="6" fill="url(#steel-${type})" stroke="#5a8098" stroke-width="3"/>
        <line data-rod x1="145" y1="186" x2="145" y2="226" stroke="#778c9b" stroke-width="10" stroke-linecap="round"/>
        <circle cx="145" cy="228" r="22" fill="none" stroke="#7a99ac" stroke-width="11"/><circle cx="145" cy="228" r="6" fill="#e5eef3"/>
        ${type==='2t'?`<path d="M67 144 H91 M199 150 H225" stroke="#43a9c9" stroke-width="11"/><path d="M65 144 l16 -8 v16z" fill="#2d91b3"/><path d="M225 150 l-16 -8 v16z" fill="#ba7550"/><path d="M80 44 H209" stroke="#7f97a8" stroke-width="13"/><path d="M145 22 V57" stroke="#c6a65e" stroke-width="9"/><path d="M138 33 h14" stroke="#f0b143" stroke-width="4"/><text x="11" y="133" fill="#2c8aa9" font-size="13">Barreja</text><text x="225" y="138" fill="#b66c49" font-size="13">Gasos</text>`:`<path d="M76 48 L93 71 M214 48 L197 71" stroke="#6f8899" stroke-width="9" stroke-linecap="round"/><circle data-admissio cx="93" cy="71" r="8" fill="#61bfc8"/><circle data-escapament cx="197" cy="71" r="8" fill="#d18f71"/><path d="M145 22 V57" stroke="${type==='gas'?'#c2a25b':'#4b8cbd'}" stroke-width="9" stroke-linecap="round"/><circle data-ignicio cx="145" cy="63" r="6" fill="${type==='gas'?'#ebbd54':'#6cb5dd'}"/><text x="14" y="39" fill="#338aa0" font-size="12">Admissió</text><text x="215" y="39" fill="#b87954" font-size="12">Escap.</text>`}
        <text x="145" y="12" fill="#396b85" text-anchor="middle" font-size="14" font-weight="850">${type==='2t'?'BUGIA':type==='gas'?'BUGIA':'INJECTOR'}</text>
      </svg><p>${description}</p><label for="phase-${type}">Mou el cicle:</label><input id="phase-${type}" type="range" min="0" max="${range}" step="1" value="0" aria-label="Fase del motor ${label}"><output data-phase for="phase-${type}"></output></div>`;
      return `<div class="figure" role="group" aria-label="Comparació visual de motors de dos i quatre temps"><h3>🔧 Tres motors, tres funcionaments</h3><p>Mou cada control per seguir el cicle; observa com el <strong>2T té llumeneres i dues curses</strong>, mentre que els <strong>4T tenen vàlvules i quatre curses</strong>. El de gasolina utilitza una bugia; el dièsel, un injector.</p><div class="motors-grid">
      ${engine('2t','2T · Gasolina','Admissió i escapament per llumeneres; cicle en 1 volta de cigonyal.',1)}
      ${engine('gas','4T · Gasolina','Admissió de mescla aire–gasolina i ignició per espurna.',3)}
      ${engine('diesel','4T · Dièsel','Admissió d’aire, compressió elevada i injecció de gasoil.',3)}</div>
      <table class="motor-compare"><thead><tr><th>Característica</th><th>2T gasolina clàssic</th><th>4T gasolina</th><th>4T dièsel</th></tr></thead><tbody>
      <tr><td>Curses per cicle</td><td>2 (1 volta)</td><td>4 (2 voltes)</td><td>4 (2 voltes)</td></tr>
      <tr><td>Encesa</td><td>Bugia / espurna</td><td>Bugia / espurna</td><td>Autoencesa per compressió</td></tr>
      <tr><td>Distribució típica</td><td>Llumeneres</td><td>Vàlvules</td><td>Vàlvules</td></tr>
      <tr><td>Cilindres habituals</td><td>1 en maquinària petita</td><td>3–4 en cotxes</td><td>4 en molts turismes</td></tr>
      <tr><td>Usos característics</td><td>Motos petites, motoserres, desbrossadores</td><td>Cotxes, motos, petits generadors</td><td>Vehicles, tractors, camions, grups electrògens</td></tr>
      </tbody></table><p class="diagram-note">Esquemes didàctics simplificats: indiquen els elements distintius i el moviment aproximat del pistó, no representen les distribucions reals de tots els models.</p>
      <h3 style="margin:20px 0 8px;color:#23668b">📐 D'un cilindre a tot el motor</h3><svg viewBox="0 0 760 250" role="img" aria-label="Dibuix de la cilindrada unitària en un pistó entre punt mort superior i inferior i quatre cilindres que formen la cilindrada total">
        <g transform="translate(20 0)"><rect x="54" y="25" width="130" height="171" rx="6" fill="#e2edf5" stroke="#7ca2b9" stroke-width="10"/><rect x="63" y="105" width="112" height="27" rx="5" fill="#80acc4" stroke="#4b7b95" stroke-width="3"/><rect x="63" y="42" width="112" height="65" fill="#64b8da" opacity=".54"/><path d="M225 45 V131 M218 45 h14 M218 131 h14" fill="none" stroke="#cb7e56" stroke-width="3"/><text x="239" y="88" fill="#9f6647" font-weight="900" font-size="18">C</text><path d="M63 217 H175" stroke="#3683ab" stroke-width="4"/><path d="M63 217 l14 -7 v14z M175 217 l-14 -7 v14z" fill="#3683ab"/><text x="119" y="242" text-anchor="middle" fill="#2d769e" font-size="19" font-weight="900">D</text><text x="120" y="18" text-anchor="middle" font-size="18" fill="#336a8c" font-weight="900">Cilindrada unitària</text></g>
        <path d="M322 117 H382" stroke="#377d9e" stroke-width="5"/><path d="M393 117 l-16 -9 v18z" fill="#377d9e"/>
        <g transform="translate(407 20)">${[0,1,2,3].map((k)=>`<g transform="translate(${k*74} 0)"><rect x="0" y="33" width="62" height="145" rx="6" fill="#e5f0f8" stroke="#6e98ad" stroke-width="6"/><rect x="7" y="102" width="48" height="20" rx="3" fill="#75a6c2"/><rect x="7" y="51" width="48" height="51" fill="#64b8da" opacity=".54"/><text x="31" y="199" text-anchor="middle" font-weight="900" font-size="16" fill="#287799">Vᵤ</text></g>`).join('')}</g><text x="551" y="239" text-anchor="middle" fill="#2b7093" font-size="19" font-weight="900">V total = 4 · Vᵤ</text></svg><p><strong>D</strong> és el diàmetre del cilindre, <strong>C</strong> és la cursa i <strong>z</strong> és el nombre de cilindres. La cilindrada del motor és <strong>V<sub>t</sub> = (π D² C / 4) · z</strong>.</p></div>`;
    },
    tensio: () => `<div class="figure" role="group" aria-label="Representació d'una proveta de tracció amb longitud inicial i allargament"><h3>🔎 Què mesuren la tensió i la deformació?</h3>
      <svg viewBox="0 0 760 255" role="img" aria-label="Barra metàl·lica sotmesa a dues forces de tracció oposades. La longitud inicial L zero i l'allargament delta L es representen en una cota inferior.">
        <defs><linearGradient id="metal2" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#eff9ff"/><stop offset=".5" stop-color="#7fa7c2"/><stop offset="1" stop-color="#426c88"/></linearGradient></defs>
        <rect x="154" y="81" width="420" height="71" rx="11" fill="url(#metal2)" stroke="#557c96" stroke-width="3"/>
        <rect x="141" y="71" width="20" height="91" rx="5" fill="#9aaebd"/><rect x="574" y="71" width="20" height="91" rx="5" fill="#9aaebd"/>
        <path d="M142 114 H55 M594 114 H690" fill="none" stroke="#c26059" stroke-width="7" stroke-linecap="round"/>
        <path d="M55 114 l24 -13 v26z M690 114 l-24 -13 v26z" fill="#c26059"/>
        <g font-size="20" font-weight="850" fill="#a24e4c"><text x="75" y="91">F</text><text x="676" y="91">F</text></g>
        <path d="M155 179 V216 M574 179 V216 M155 201 H574" stroke="#246d98" stroke-width="3" fill="none"/>
        <path d="M155 201 l11 -6 v12z M574 201 l-11 -6 v12z" fill="#246d98"/>
        <text x="364" y="195" text-anchor="middle" font-size="22" font-weight="900" fill="#235f83">L₀</text>
        <text x="367" y="245" text-anchor="middle" font-size="18" fill="#456f89">L final = L₀ + ΔL</text>
      </svg>
      <p><strong>σ = F/S</strong> relaciona la força amb la secció de la barra. <strong>ε = ΔL/L₀</strong> mesura quant s'allarga respecte de la longitud inicial; en la zona elàstica, <strong>σ = E·ε</strong>.</p></div>`,
    pascal: () => `<div class="figure" role="group" aria-label="Dibuix del principi de Pascal amb dos pistons de diferent superfície"><h3>💧 Com multiplica la força una premsa hidràulica?</h3>
      <svg viewBox="0 0 760 270" role="img" aria-label="Dos pistons connectats per fluid blau. El pistó petit té una superfície S1 i la força F1; el pistó gran té superfície S2 i força F2. Pressió igual als dos punts.">
        <path d="M92 105 V212 H648 V94" fill="none" stroke="#5c879f" stroke-width="24" stroke-linejoin="round"/>
        <path d="M92 105 V212 H648 V94" fill="none" stroke="#57bfe2" stroke-width="16" stroke-linejoin="round"/>
        <rect x="55" y="90" width="74" height="18" rx="4" fill="#7c9fb5" stroke="#356b88" stroke-width="3"/>
        <rect x="580" y="78" width="136" height="22" rx="4" fill="#7c9fb5" stroke="#356b88" stroke-width="3"/>
        <path d="M92 28 V82 M648 13 V72" stroke="#ca7860" stroke-width="6" stroke-linecap="round"/>
        <path d="M92 82 l-11 -18 h22z M648 72 l-12 -20 h24z" fill="#ca7860"/>
        <text x="105" y="41" font-size="20" font-weight="900" fill="#a65f4f">F₁</text><text x="660" y="30" font-size="20" font-weight="900" fill="#a65f4f">F₂</text>
        <text x="92" y="129" text-anchor="middle" font-size="18" font-weight="900" fill="#286c92">S₁</text>
        <text x="648" y="122" text-anchor="middle" font-size="18" font-weight="900" fill="#286c92">S₂</text>
        <rect x="270" y="150" width="210" height="45" rx="13" fill="#e8f8ff" stroke="#a2d2e7"/>
        <text x="375" y="178" text-anchor="middle" font-size="24" font-weight="900" fill="#205f83">p₁ = p₂</text>
        <text x="377" y="253" text-anchor="middle" font-size="18" fill="#386c88">Si S₂ &gt; S₁, aleshores F₂ &gt; F₁</text>
      </svg><p>Com que <strong>p = F/S</strong>, amb la mateixa pressió el pistó gran pot exercir més força. La contrapartida és que recorre menys distància per al mateix volum de fluid.</p></div>`,
    palanca: () => `<div class="figure" role="group" aria-label="Palanca en equilibri amb dos pesos i braços diferents"><h3>🏗️ El moment depèn de la distància perpendicular</h3>
      <svg viewBox="0 0 760 255" role="img" aria-label="Palanca horitzontal recolzada en O. A l'esquerra força de 200 N a 2 metres, a la dreta 500 N a 0,8 metres.">
        <rect x="112" y="107" width="530" height="18" rx="7" fill="#8cafbe" stroke="#4a7289" stroke-width="3"/>
        <path d="M430 127 L391 201 H469 Z" fill="#d1a866" stroke="#98794a" stroke-width="3"/>
        <line x1="190" y1="33" x2="190" y2="101" stroke="#b76060" stroke-width="6"/>
        <path d="M190 103 l-12 -21 h24z" fill="#b76060"/>
        <line x1="526" y1="33" x2="526" y2="101" stroke="#b76060" stroke-width="6"/>
        <path d="M526 103 l-12 -21 h24z" fill="#b76060"/>
        <text x="124" y="32" fill="#a75353" font-weight="900" font-size="19">200 N</text><text x="535" y="32" fill="#a75353" font-weight="900" font-size="19">500 N</text>
        <text x="430" y="224" text-anchor="middle" fill="#876941" font-weight="900" font-size="19">O</text>
        <path d="M190 149 V171 H430 V149 M430 149 V171 H526 V149" stroke="#317da5" stroke-width="2.5" fill="none"/>
        <text x="310" y="164" text-anchor="middle" fill="#286d97" font-weight="850" font-size="17">2 m</text><text x="480" y="164" text-anchor="middle" fill="#286d97" font-weight="850" font-size="17">0,8 m</text>
      </svg><p>El pes de 200 N té un braç més llarg, de 2 m. El pes de 500 N té un braç de 0,8 m. Els dos moments són <strong>400 N·m</strong> en sentits oposats.</p></div>`,
    logica: () => {
      let rows='';for(let a=0;a<=1;a++)for(let b=0;b<=1;b++)for(let c=0;c<=1;c++){let ab=a*b, y=(ab||c)?1:0;rows+=`<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${ab}</td><td class="out">${y}</td></tr>`}
      return `<div class="figure" role="group" aria-label="Taula de veritat completa per a la funció Y igual a A AND B OR C"><h3>🧠 De la fórmula a la taula de veritat</h3><div style="max-width:520px;margin:14px auto"><table class="logic-table"><thead><tr><th>A</th><th>B</th><th>C</th><th>A · B</th><th>Y = (A · B) + C</th></tr></thead><tbody>${rows}</tbody></table></div><p>Primer calculem <strong>A · B</strong> (AND); després fem OR amb C. La sortida Y val 1 quan C és 1, o bé quan A i B són tots dos 1.</p></div>`;
    },
    puntmort: () => `<div class="figure" role="group" aria-label="Gràfic de costos i ingressos amb un punt mort a 200 peces"><h3>📈 On es troba el punt mort?</h3>
      <svg viewBox="0 0 760 380" role="img" aria-label="Eix horitzontal unitats fabricades de zero a quatre-centes, vertical euros. Ingressos 20 euros per peça i costos 1200 euros fixos més 14 euros per peça es tallen a 200 unitats i 4000 euros.">
        <rect x="80" y="80" width="580" height="240" fill="#fff" stroke="#deebf2"/>
        <g stroke="#e4edf3" stroke-width="2" stroke-dasharray="5 6"><path d="M80 200 H660 M80 140 H660 M80 260 H660 M225 80 V320 M370 80 V320 M515 80 V320"/></g>
        <path d="M80 66 V320 H679" fill="none" stroke="#466e86" stroke-width="3"/>
        <path d="M679 320 l-12 -8 v16z M80 66 l-8 12 h16z" fill="#466e86"/>
        <path d="M80 320 L660 80" fill="none" stroke="#2c9b91" stroke-width="5" stroke-linecap="round"/>
        <path d="M80 284 L660 116" fill="none" stroke="#d28c52" stroke-width="5" stroke-linecap="round"/>
        <path d="M370 200 V320 M80 200 H370" fill="none" stroke="#337aab" stroke-width="2.5" stroke-dasharray="7 5"/>
        <circle cx="370" cy="200" r="10" fill="#1b6997" stroke="#fff" stroke-width="4"/>
        <rect x="382" y="176" rx="9" width="145" height="48" fill="#eef7fc" stroke="#c7dfeb"/>
        <text x="394" y="195" fill="#28668c" font-weight="900" font-size="16">Punt mort</text><text x="394" y="213" fill="#28668c" font-size="15">200 peces</text>
        <text x="550" y="95" fill="#237e75" font-weight="850" font-size="17">Ingressos</text>
        <text x="527" y="146" fill="#b07643" font-weight="850" font-size="17">Costos totals</text>
        <g font-size="15" fill="#58758a" text-anchor="middle"><text x="80" y="343">0</text><text x="225" y="343">100</text><text x="370" y="343">200</text><text x="515" y="343">300</text><text x="660" y="343">400</text></g>
        <g font-size="14" fill="#58758a" text-anchor="end"><text x="70" y="324">0</text><text x="70" y="204">4.000</text><text x="70" y="84">8.000</text></g>
        <text x="370" y="367" text-anchor="middle" fill="#416f8b" font-size="16" font-weight="800">Quantitat de peces (q)</text>
        <text x="21" y="58" fill="#416f8b" font-size="16" font-weight="800">€</text>
      </svg><p>En el punt d’intersecció <strong>IT = CT = 4.000 €</strong> quan s’han venut <strong>200 peces</strong>. A l’esquerra els costos superen els ingressos; a la dreta, els ingressos superen els costos.</p></div>`,
    reductor: () => `<div class="figure" id="gear-lab" role="group" aria-label="Simulador de la relació de transmissió d'un reductor"><h3>🎚️ Prova una reducció d’engranatges</h3><p>El pinyó d’entrada té <strong>20 dents</strong> i el parell del motor és <strong>10 N·m</strong>. Canvia el nombre de dents de sortida i les rpm; considerem un rendiment del <strong>90 %</strong>.</p>
      <div class="slider-lab"><div class="slider-box"><label for="gear-teeth">Dents de la roda de sortida (z<sub>s</sub>)</label><input id="gear-teeth" type="range" min="20" max="100" step="10" value="60"><output id="gear-teeth-out" for="gear-teeth">60 dents</output><label for="gear-rpm">Velocitat del motor</label><input id="gear-rpm" type="range" min="600" max="3000" step="100" value="1500"><output id="gear-rpm-out" for="gear-rpm">1.500 rpm</output></div>
      <div class="slider-result" aria-live="polite"><span>Relació i = z<sub>s</sub> / 20</span><strong id="gear-ratio">i = 3,0</strong><span>Velocitat de sortida</span><strong id="gear-speed">500 rpm</strong><span>Parell útil de sortida</span><strong id="gear-torque">27,0 N·m</strong><p>Si augmenten les dents de sortida, baixa la velocitat i puja el parell, amb pèrdues.</p></div></div></div>`
  };

  const sec = (n, title) => `<h3 class="sequence"><span>${String(n).padStart(2,'0')}</span> ${title}</h3>`;
  function renderTopic(t, idx) {
    let step=1;
    const theory=t.theory.map(([heading,copy])=>`<article class="theory-item"><h3>${heading}</h3><p>${copy}</p></article>`).join('');
    const formula=t.formulas.map(([heading,why,eq,units])=>`<article class="formula-card"><h3>${heading}</h3><p>${why}</p><div class="formula">${eq}</div><div class="units">${units}</div></article>`).join('');
    const worked=t.example;
    const workedHtml=`<div class="worked"><h3>🧮 ${worked.title}</h3><p><strong>Enunciat:</strong> ${worked.statement}</p><ol>${worked.steps.map(s=>`<li>${s}</li>`).join('')}</ol><p class="result">✅ ${worked.result}</p></div>`;
    const practiceUrl=t.practice||BASE+t.slug;
    const external=t.full?'':' target="_blank" rel="noopener noreferrer"';
    return `<section class="topic" id="${t.id}" style="--topic-color:${t.color}" aria-labelledby="title-${t.id}">
      <div class="topic-kicker">Bloc ${idx+1} · ${t.module}</div><h2 id="title-${t.id}">${t.icon} ${t.title}</h2><p class="topic-intro">${t.intro}</p>
      ${sec(step++,'TEORIA · Entén el concepte')}<div class="theory-grid">${theory}</div>
      ${t.visual?sec(step++,'REPRESENTACIÓ · Visualitza la relació')+diagrams[t.visual]():''}
      ${sec(step++,'REPERTORI DE FÓRMULES · Tria la relació correcta')}<div class="formula-grid">${formula}</div>
      ${sec(step++,'EXEMPLE · Substitueix i resol')}${workedHtml}
      <div class="tip"><strong>💡 Recorda:</strong> ${t.tip}</div>
      ${sec(step++,'ACTIVITATS · Practica')}
      <div class="practice"><strong>🎓 Exercicis de preparació:</strong> revisa la teoria, resol problemes i contrasta els resultats. <div class="two-links"><a href="${practiceUrl}"${external}>${t.practiceLabel||'Practicar problemes d’aquest tema ↗'}</a><a href="https://universitats.gencat.cat/ca/pau/models-examen-anys-anteriors/tecnologia-industrial/" target="_blank" rel="noopener noreferrer">Exàmens oficials anteriors ↗</a></div></div>
      <a class="topic-top" href="#index">↑ Tornar a l’índex</a>
    </section>`;
  }
  const nav=document.getElementById('topic-index');
  const content=document.getElementById('topics-content');
  nav.innerHTML=TOPICS.map((t,i)=>`<a href="#${t.id}" style="--topic-color:${t.color}"><small>${String(i+1).padStart(2,'0')} · TEORIA</small><strong>${t.icon} ${t.title}</strong></a>`).join('');
  content.innerHTML=TOPICS.map(renderTopic).join('');
  const motorPhases={
    '2t':['Pujada: compressió al cilindre i admissió al càrter.','Baixada: expansió i, cap al final, escapament i transferència.'],
    gas:['1. Admissió: entra la mescla aire–gasolina.','2. Compressió: les vàlvules estan tancades.','3. Expansió: la bugia encén la mescla.','4. Escapament: surten els gasos cremats.'],
    diesel:['1. Admissió: entra només aire.','2. Compressió: augmenta molt la temperatura.','3. Expansió: s’injecta gasoil i es produeix l’autoencesa.','4. Escapament: s’evacuen els gasos cremats.']
  };
  for(const motor of document.querySelectorAll('[data-motor]')){
    const type=motor.dataset.motor, slider=motor.querySelector('input'), piston=motor.querySelector('[data-piston]'), rod=motor.querySelector('[data-rod]');
    function updateMotor(){
      const step=Number(slider.value), high=type==='2t'?step===0:(step===1||step===3), y=high?92:160;
      piston.setAttribute('y',String(y));rod.setAttribute('y1',String(y+26));
      motor.querySelector('[data-phase]').textContent=motorPhases[type][step];
      const inlet=motor.querySelector('[data-admissio]'),outlet=motor.querySelector('[data-escapament]');
      if(inlet)inlet.setAttribute('fill',step===0?'#28a69a':'#7894a4');
      if(outlet)outlet.setAttribute('fill',step===3?'#d27d55':'#7894a4');
      const ignition=motor.querySelector('[data-ignicio]');if(ignition)ignition.setAttribute('r',step===2?'10':'6');
    }
    slider.addEventListener('input',updateMotor);updateMotor();
  }
  const teeth=document.getElementById('gear-teeth');
  const rpm=document.getElementById('gear-rpm');
  function updateGear(){
    const z=Number(teeth.value), n=Number(rpm.value), ratio=z/20;
    document.getElementById('gear-teeth-out').textContent=`${z} dents`;
    document.getElementById('gear-rpm-out').textContent=`${number(n,0)} rpm`;
    document.getElementById('gear-ratio').textContent=`i = ${number(ratio,1)}`;
    document.getElementById('gear-speed').textContent=`${number(n/ratio,1)} rpm`;
    document.getElementById('gear-torque').textContent=`${number(0.9*ratio*10,1)} N·m`;
  }
  teeth.addEventListener('input',updateGear);rpm.addEventListener('input',updateGear);updateGear();
  if(window.location.hash){
    const fragment=decodeURIComponent(window.location.hash.slice(1));
    const target=document.getElementById(fragment);
    if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  }
})();
