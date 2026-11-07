/* Energies de 2n: ampliacions didàctiques originals.
   Les figures i els exemples són esquemàtics; no són enunciats oficials PAU. */
(() => {
  'use strict';
  const units=(value,digits=1)=>new Intl.NumberFormat('ca-ES',{maximumFractionDigits:digits,minimumFractionDigits:digits}).format(value);
  const topics=[
    {
      id:'conceptes',heading:'Comprendre el treball abans de calcular-lo',lead:'En els exercicis es barregen forces, desplaçaments, energia i potència. Aprèn a identificar primer què canvia físicament i, després, quina magnitud has de trobar.',
      theory:[
        ['La força no sempre fa treball','Empènyer una paret sense desplaçar-la pot cansar-nos, però el treball mecànic sobre la paret és zero. Si una força mou un objecte, només la component paral·lela al desplaçament transfereix treball. Per això apareix el cosinus de l’angle a la fórmula.'],
        ['Treball positiu, nul o negatiu','Si la força ajuda el moviment, el treball és positiu. Si és perpendicular, és nul. Si s’hi oposa, com sol fer el fregament, és negatiu: el cos perd energia mecànica. El signe, per tant, informa del sentit de la transferència energètica.'],
        ['L’energia es transforma','Una bicicleta que baixa una rampa perd energia potencial gravitatòria i guanya energia cinètica. En un sistema real, part de l’energia es dissipa per fregament o resistència de l’aire. Cal distingir l’energia d’un cos del treball que una força hi transfereix.'],
        ['La potència és el ritme','Dues màquines poden efectuar els mateixos 1.000 J de treball, però si una triga 5 s i l’altra 20 s, la primera té quatre vegades més potència mitjana. Un watt és un joule per segon, i un kWh és una unitat d’energia, no de potència.']
      ],visual:'forca',lab:'work',tip:'Tria primer el sistema i el desplaçament. Si la força s’oposa al moviment, W pot ser negatiu; la potència mitjana sempre depèn del temps emprat.'
    },
    {
      id:'rendiment',heading:'On va a parar l’energia que no aprofitem?',lead:'Un motor i un reductor no creen energia. El que fan és transformar-ne una part en treball útil; la resta es dissipa. Els exercicis de rendiment s’entenen millor si es dibuixa l’energia que entra i la que surt.',
      theory:[
        ['Rendiment i pèrdues','Si una màquina rep 1.000 J i només n’aprofita 700 J, té un rendiment de 0,70, és a dir, del 70 %. Els 300 J restants no desapareixen: normalment es transformen en calor, so i vibracions. El rendiment real ha d’estar entre zero i u.'],
        ['De l’energia útil a l’entrada','Quan el problema dona l’energia útil que necessitem i el rendiment, no multipliquem: dividim. Per obtenir 700 J útils amb η = 0,70, cal subministrar 1.000 J. Aquest és un dels errors més freqüents a la preparació de les PAU.'],
        ['Cadena motor–reductor–alternador','Si diverses transformacions se succeeixen, cada etapa només rep la sortida de l’anterior. Per això els rendiments es multipliquen, mai se sumen. Un motor del 80 % seguit d’un alternador del 90 % dona un rendiment global del 72 %.'],
        ['Combustibles i motors tèrmics','El combustible aporta energia química segons la seva massa i el poder calorífic PC. En un motor de gasolina habitual, la bugia encén la barreja; en un dièsel, el gasoil s’injecta a l’aire calent comprimit. El nombre de temps no indica quants cilindres té el motor.']
      ],visual:'rendiment',lab:'efficiency',extra:'engines',tip:'η = 80 % vol dir 0,80 dins de la fórmula. Distingir energia consumida, energia útil i pèrdues evita invertir el quocient.'
    },
    {
      id:'bateries',heading:'Entendre el parell, els engranatges i la bateria',lead:'En aquests exercicis cal separar tres preguntes diferents: quina força fa girar l’eix, a quina velocitat gira i durant quant temps pot subministrar energia la bateria.',
      theory:[
        ['La importància del braç de palanca','La mateixa força pot provocar més moment si actua més lluny de l’eix i de manera perpendicular. Per això una clau llarga facilita afluixar una femella. El moment M i el parell motor Γ es mesuren en N·m, però es fan servir en contextos diferents.'],
        ['Un reductor intercanvia velocitat i parell','Si un pinyó de 20 dents mou una roda de 60, la roda gira tres vegades més lenta. Idealment, el parell de sortida seria tres vegades més gran. En una transmissió real el rendiment redueix el parell útil, perquè hi ha pèrdues.'],
        ['Rpm, radians per segon i potència','Les rpm indiquen voltes per minut, mentre que ω expressa radians per segon. La potència mecànica és P = Γ·ω. Per tant, conèixer únicament el parell no determina la potència: també necessitem la velocitat angular de l’eix.'],
        ['Capacitat de bateria i autonomia','Una capacitat de 20 Ah significa que la bateria podria subministrar idealment 20 A durant una hora, o 2 A durant deu hores, en condicions de referència. L’energia nominal aproximada es troba multiplicant tensió per Ah; el valor real depèn del règim de descàrrega, el sistema i les pèrdues.']
      ],visual:'gears',lab:'gears',tip:'Si trobes una relació de transmissió amb la convenció inversa, escriu-la clarament. La capacitat Ah no és energia fins que no coneixem la tensió.'
    },
    {
      id:'termica',heading:'Seguir el camí de la calor i del combustible',lead:'Primer identifica què s’escalfa, si canvia d’estat i quina part de l’energia química o elèctrica arriba realment al fluid. Això et permet separar calor útil, combustible i pèrdues.',
      theory:[
        ['Temperatura no és calor','La temperatura descriu l’estat tèrmic d’un cos. La calor Q és energia transferida entre sistemes a causa d’una diferència de temperatura. Dos cossos a la mateixa temperatura poden contenir energies internes diferents si tenen masses o materials diferents.'],
        ['Calor específica: CE','La calor específica CE indica quanta energia cal aportar per augmentar un grau la temperatura d’un quilogram de substància, sense canvi d’estat. Per exemple, l’aigua necessita aproximadament 4.180 J/(kg·K). Amb la mateixa massa i ΔT, un material de CE més gran requereix més energia.'],
        ['Calor latent i canvis d’estat','Durant la fusió o l’ebullició a pressió constant, una substància pura pot absorbir calor sense que augmenti la temperatura. Aquesta energia és Q = m·L. Si primer escalfem el líquid i després el vaporitzem, calculem les dues etapes i sumem les energies.'],
        ['Combustible, PC i rendiment','El poder calorífic PC expressa l’energia química per quilogram de combustible. Si el rendiment de la instal·lació és inferior al 100 %, per aportar una calor útil Q al fluid cal consumir una energia química superior a Q. Revisa que PC i CE estiguin expressats en unitats compatibles.']
      ],visual:'heat',lab:'heat',extra:'carnot',tip:'Calor específica = CE; poder calorífic = PC. La diferència de temperatura en K és numèricament igual a la diferència en °C, però Carnot sempre necessita temperatures absolutes en K.'
    },
    {
      id:'produccio',heading:'De l’energia natural a l’electricitat útil',lead:'A les centrals hi ha diverses transformacions encadenades. Cal saber quina és la magnitud del recurs inicial, què aprofita el captador i quines pèrdues apareixen abans d’arribar a la xarxa.',
      theory:[
        ['Captació i conversió','En una instal·lació fotovoltaica, la radiació solar es transforma directament en energia elèctrica. En una turbina eòlica el vent provoca un gir mecànic que mou un generador. En una hidroelèctrica l’aigua a una certa altura posseeix energia potencial.'],
        ['La potència del vent creix amb v³','L’energia cinètica de l’aire depèn del quadrat de la velocitat i la massa que passa pel rotor cada segon també depèn de la velocitat. D’aquí que la potència del vent sigui proporcional al cub de v. Doblar la velocitat multiplica per vuit la potència disponible, dins del model ideal.'],
        ['Hidroelèctrica: cabal i salt','La potència hidràulica depèn del cabal volumètric, de la densitat de l’aigua, de la gravetat i del desnivell o salt net. Si augmenta el cabal o el salt, augmenta la potència disponible; després cal aplicar el rendiment de turbina i generador.'],
        ['Solar i factors reals','Els panells fotovoltaics es calculen a partir de la irradiància que incideix sobre la superfície activa i del rendiment de conversió. L’orientació, l’ombra, la temperatura i les pèrdues elèctriques fan que la producció real variï respecte d’un càlcul ideal.']
      ],visual:'production',lab:'wind',tip:'En eòlica revisa si l’enunciat dona potència disponible o útil. El rendiment s’aplica a la potència que entra en cada etapa, no a la velocitat del vent.'
    },
    {
      id:'estalvi',heading:'Comparar dues alternatives sense barrejar unitats',lead:'Els problemes d’estalvi solen comparar un sistema existent amb una alternativa més eficient. Abans de parlar de diners o emissions, calcula l’energia real consumida pels dos sistemes per donar el mateix servei.',
      theory:[
        ['Mateix servei, diferent consum','Si dos sistemes han de proporcionar la mateixa energia útil, el que té més rendiment consumeix menys energia d’entrada. Cal evitar comparar directament combustibles que no donen el mateix servei; el punt de partida sempre és el resultat útil desitjat.'],
        ['De la potència al consum anual','Per obtenir energia en kWh, multipliquem la potència en kW per les hores de funcionament. En un any es poden sumar consums de diversos equips o períodes. Una factura pot incloure costos fixos i impostos que no depenen directament dels kWh.'],
        ['Cost de combustible i electricitat','Amb electricitat, el preu energètic es calcula multiplicant els kWh per €/kWh. Amb combustibles, primer pot caldre convertir l’energia necessària en kg o L mitjançant PC i densitat. Només després apliquem el preu de compra per kg o L.'],
        ['Emissions i període d’amortització','El factor d’emissió es pot donar en kg CO₂/kWh, kg CO₂/L o kg CO₂/kg; cal usar el que correspongui al consum calculat. Si el nou equip té un cost inicial addicional i genera un estalvi anual, el període simple de retorn és inversió dividida per estalvi anual.']
      ],visual:'savings',lab:'savings',tip:'No confonguis la reducció de consum amb la reducció del cost total de la factura. Indica explícitament si calcules només la part variable o també els costos fixos.'
    }
  ];
  const views={
    forca:()=>`<figure class="deep-visual"><h4>🔎 Descomponem la força abans de calcular el treball</h4><svg viewBox="0 0 780 235" role="img" aria-label="Un carro es desplaça cap a la dreta mentre una força inclinada forma un angle alfa amb el moviment. La component horitzontal és F cos alfa.">
      <path d="M40 183 H730" stroke="#9bc5d9" stroke-width="6"/><path d="M47 183 l14 -7 v14z M725 183 l-14 -7 v14z" fill="#9bc5d9"/>
      <rect x="182" y="120" width="185" height="57" rx="13" fill="#d0e4f3" stroke="#5288a7" stroke-width="4"/><circle cx="219" cy="184" r="18" fill="#5a86a3"/><circle cx="326" cy="184" r="18" fill="#5a86a3"/><circle cx="219" cy="184" r="7" fill="white"/><circle cx="326" cy="184" r="7" fill="white"/>
      <path d="M370 127 L572 46" stroke="#d67e55" stroke-width="7" stroke-linecap="round"/><path d="M572 46 l-27 -1 l13 24z" fill="#d67e55"/><text x="575" y="40" fill="#b16a48" font-weight="900" font-size="23">F</text>
      <path d="M370 127 H575" stroke="#3889aa" stroke-width="5" stroke-dasharray="9 5"/><path d="M575 127 l-18 -10 v20z" fill="#3889aa"/><text x="473" y="145" text-anchor="middle" fill="#2879a4" font-weight="850" font-size="20">F · cos α</text>
      <path d="M425 127 A55 55 0 0 0 421 107" stroke="#bd834f" stroke-width="3" fill="none"/><text x="437" y="113" fill="#af7147" font-size="19">α</text>
      <path d="M252 220 H564" stroke="#4084a4" stroke-width="3"/><path d="M564 220 l-14 -8 v16z" fill="#4084a4"/><text x="396" y="214" fill="#2d729c" font-size="18" font-weight="850">desplaçament d →</text>
    </svg><figcaption>Si α = 0°, tota la força ajuda a avançar. Si α = 90°, no fa treball sobre el moviment horitzontal; si α és més gran de 90°, el treball és negatiu.</figcaption></figure>`,
    rendement:()=>`<figure class="deep-visual"><h4>⚙️ Una cadena de transformacions té pèrdues a cada etapa</h4><svg viewBox="0 0 780 242" role="img" aria-label="De 1000 joules d'entrada, un motor amb 80 per cent deixa 800 joules i un alternador del 90 per cent lliura 720 joules útils, amb 280 joules de pèrdues totals.">
      <rect x="16" y="65" width="166" height="77" rx="13" fill="#dcefff" stroke="#80b8d9" stroke-width="3"/><text x="99" y="93" text-anchor="middle" font-size="19" font-weight="900" fill="#235e88">Entrada</text><text x="99" y="119" text-anchor="middle" font-size="22" font-weight="900" fill="#216a94">1.000 J</text>
      <path d="M182 104 H216" stroke="#3c82a8" stroke-width="5"/><path d="M223 104 l-12 -7 v14z" fill="#3c82a8"/>
      <rect x="224" y="65" width="153" height="77" rx="13" fill="#eaf7ff" stroke="#77a6c6" stroke-width="3"/><text x="301" y="94" text-anchor="middle" font-size="19" font-weight="900" fill="#245d83">Motor</text><text x="301" y="119" text-anchor="middle" font-size="19" fill="#3983a6">η = 80 %</text>
      <path d="M378 104 H425" stroke="#3c82a8" stroke-width="5"/><path d="M431 104 l-12 -7 v14z" fill="#3c82a8"/><text x="400" y="86" text-anchor="middle" font-size="15" fill="#3982a0">800 J</text>
      <rect x="431" y="65" width="154" height="77" rx="13" fill="#eaf7ff" stroke="#77a6c6" stroke-width="3"/><text x="508" y="94" text-anchor="middle" font-size="19" font-weight="900" fill="#245d83">Alternador</text><text x="508" y="119" text-anchor="middle" font-size="19" fill="#3983a6">η = 90 %</text>
      <path d="M586 104 H625" stroke="#3c9f88" stroke-width="5"/><path d="M634 104 l-12 -7 v14z" fill="#3c9f88"/>
      <rect x="636" y="65" width="136" height="77" rx="13" fill="#e2f7ef" stroke="#6cbaa2" stroke-width="3"/><text x="704" y="92" text-anchor="middle" font-size="19" font-weight="900" fill="#26765f">Útil</text><text x="704" y="119" text-anchor="middle" font-size="22" font-weight="900" fill="#268169">720 J</text>
      <path d="M301 143 V182 M508 143 V182" stroke="#d49b72" stroke-width="4"/><path d="M301 182 l-8 -13 h16z M508 182 l-8 -13 h16z" fill="#d49b72"/><text x="301" y="209" text-anchor="middle" font-size="18" fill="#9b6843" font-weight="850">200 J perduts</text><text x="508" y="209" text-anchor="middle" font-size="18" fill="#9b6843" font-weight="850">80 J perduts</text>
    </svg><figcaption>η<sub>global</sub> = 0,80 × 0,90 = 0,72. El treball útil final és 720 J i les pèrdues totals sumen 280 J.</figcaption></figure>`,
    gears:()=>{const marks=(cx,cy,r,n)=>Array.from({length:n},(_,i)=>{const a=2*Math.PI*i/n;return `<path d="M${(cx+(r-8)*Math.cos(a)).toFixed(1)} ${(cy+(r-8)*Math.sin(a)).toFixed(1)} L${(cx+(r+5)*Math.cos(a)).toFixed(1)} ${(cy+(r+5)*Math.sin(a)).toFixed(1)}" stroke="#6793ad" stroke-width="6" stroke-linecap="round"/>`}).join('');return `<figure class="deep-visual"><h4>⚙️ El pinyó petit gira més ràpid; la roda gran transmet més parell</h4><svg viewBox="0 0 780 275" role="img" aria-label="Engranatge petit de 20 dents connectat amb una roda de 60 dents. La relació de reducció és 3; l'entrada té 1500 rpm i la sortida 500 rpm.">
      <circle cx="263" cy="136" r="50" fill="#c7e4f5" stroke="#5487a4" stroke-width="9"/>${marks(263,136,50,12)}<circle cx="263" cy="136" r="12" fill="#487b9b"/>
      <circle cx="427" cy="136" r="107" fill="#dbeef9" stroke="#6895b0" stroke-width="10"/>${marks(427,136,107,24)}<circle cx="427" cy="136" r="18" fill="#487b9b"/>
      <path d="M174 105 Q154 136 174 166" fill="none" stroke="#2a8ba8" stroke-width="5"/><path d="M177 172 l-17 -9 17 -4z" fill="#2a8ba8"/>
      <path d="M560 104 Q584 136 560 168" fill="none" stroke="#d58b59" stroke-width="5"/><path d="M557 173 l18 -9 -16 -5z" fill="#d58b59"/>
      <text x="262" y="63" text-anchor="middle" font-size="19" fill="#2b6a91" font-weight="900">z₁ = 20</text><text x="427" y="13" text-anchor="middle" font-size="19" fill="#2b6a91" font-weight="900">z₂ = 60</text>
      <text x="114" y="202" fill="#357ca0" font-size="19" font-weight="900">1.500 rpm</text><text x="557" y="202" fill="#af794d" font-size="19" font-weight="900">500 rpm</text>
      <text x="394" y="265" text-anchor="middle" font-size="19" fill="#2a6f97" font-weight="900">i = 60 / 20 = 3</text>
    </svg><figcaption>Aquesta és la relació <strong>i = n<sub>entrada</sub>/n<sub>sortida</sub> = z<sub>sortida</sub>/z<sub>entrada</sub></strong>. Les dents i els diàmetres representats són esquemàtics. La bateria és un sistema diferent: emmagatzema energia elèctrica, no parell mecànic.</figcaption></figure>`},
    heat:()=>`<figure class="deep-visual"><h4>🌡️ De la font d’energia a l’aigua escalfada</h4><svg viewBox="0 0 780 254" role="img" aria-label="La caldera rep energia del combustible, perd una part de calor i escalfa un dipòsit d'aigua. Les tres etapes de vaporització són escalfament, canvi d'estat i vapor.">
      <rect x="22" y="78" width="190" height="88" rx="15" fill="#fff1df" stroke="#d3a16b" stroke-width="3"/><text x="117" y="107" text-anchor="middle" fill="#b27b3d" font-size="20" font-weight="900">Combustible</text><text x="117" y="134" text-anchor="middle" fill="#b27b3d" font-size="20" font-weight="900">m · PC</text>
      <path d="M214 120 H302" stroke="#c78e5a" stroke-width="7"/><path d="M311 120 l-17 -9 v18z" fill="#c78e5a"/>
      <rect x="313" y="53" width="160" height="147" rx="15" fill="#e7f4fb" stroke="#669db8" stroke-width="4"/><rect x="322" y="125" width="142" height="65" rx="5" fill="#a5d8ef"/><path d="M343 111 Q359 95 376 111 T409 111 T442 111" fill="none" stroke="#cf865f" stroke-width="6"/><text x="393" y="85" text-anchor="middle" fill="#2e7295" font-size="20" font-weight="900">Caldera</text>
      <path d="M474 120 H552" stroke="#2d9aab" stroke-width="7"/><path d="M562 120 l-17 -9 v18z" fill="#2d9aab"/><rect x="565" y="78" width="190" height="88" rx="15" fill="#e4f7ff" stroke="#70b6d5" stroke-width="3"/>
      <text x="660" y="108" text-anchor="middle" fill="#2e7296" font-size="20" font-weight="900">Aigua</text><text x="660" y="134" text-anchor="middle" fill="#2d739c" font-size="20" font-weight="900">m · CE · ΔT</text>
      <path d="M390 202 V222" stroke="#bb8b78" stroke-width="4"/><path d="M390 232 l-10 -15 h20z" fill="#bb8b78"/><text x="405" y="238" fill="#a46a54" font-size="17">Pèrdues</text>
    </svg><figcaption>La calor útil que guanya l’aigua és Q = m·CE·ΔT. La caldera ha de rebre una energia química més gran si η és inferior a 1. Si l’aigua arriba a l’ebullició, afegeix també la calor latent Q = m·L.</figcaption></figure>`,
    production:()=>`<figure class="deep-visual"><h4>🌞 Tres recursos diferents, un resultat elèctric</h4><svg viewBox="0 0 780 252" role="img" aria-label="A l'esquerra els panells solars aprofiten la llum, al centre una turbina eòlica aprofita el moviment de l'aire i a la dreta una turbina hidràulica aprofita el salt i el cabal de l'aigua.">
      <g transform="translate(10 10)"><circle cx="130" cy="51" r="33" fill="#e8b85f"/><path d="M66 107 L188 107 L174 166 L42 166z" fill="#5a9ac4" stroke="#31749e" stroke-width="4"/><g stroke="#cde8f5" stroke-width="3"><path d="M78 107 L61 166 M111 107 L102 166 M149 107 L144 166 M42 137 H182"/></g><text x="120" y="210" text-anchor="middle" font-size="18" fill="#2c739a" font-weight="900">Solar</text><text x="120" y="233" text-anchor="middle" font-size="15" fill="#507a90">Irradiància · S · η</text></g>
      <g transform="translate(260 12)"><path d="M120 103 L120 199" stroke="#6591a9" stroke-width="14"/><circle cx="120" cy="103" r="13" fill="#4783a9"/><path d="M120 103 L120 19 Q148 63 120 103Z M120 103 L49 145 Q99 157 120 103Z M120 103 L191 147 Q191 96 120 103Z" fill="#8bc4df" stroke="#4b8aaa" stroke-width="3"/><path d="M17 57 h64 M20 75 h52" stroke="#66c0d1" stroke-width="5" stroke-linecap="round"/><text x="120" y="210" text-anchor="middle" font-size="18" fill="#2c739a" font-weight="900">Eòlica</text><text x="120" y="233" text-anchor="middle" font-size="15" fill="#507a90">½ · ρ · A · v³ · η</text></g>
      <g transform="translate(525 12)"><path d="M38 48 H190 V78 H100 V148 H180" fill="none" stroke="#7caaad" stroke-width="24" stroke-linejoin="round"/><path d="M38 48 H190 V78 H100 V148 H180" fill="none" stroke="#6dbfdb" stroke-width="14"/><circle cx="180" cy="148" r="30" fill="#e2f3fc" stroke="#377e9d" stroke-width="5"/><path d="M180 120 V176 M152 148 H208 M159 127 L201 169 M159 169 L201 127" stroke="#448aab" stroke-width="3"/><text x="125" y="210" text-anchor="middle" font-size="18" fill="#2c739a" font-weight="900">Hidràulica</text><text x="125" y="233" text-anchor="middle" font-size="15" fill="#507a90">ρ · g · Q · h · η</text></g>
    </svg><figcaption>En tots tres casos cal distingir la potència que ofereix el recurs de la potència elèctrica útil després de les pèrdues.</figcaption></figure>`,
    savings:()=>`<figure class="deep-visual"><h4>📉 L’estalvi neix de comparar la mateixa necessitat útil</h4><svg viewBox="0 0 780 235" role="img" aria-label="Dues barres mostren consum inicial 5000 quilowatts hora i consum nou 3500 quilowatts hora, amb un estalvi de 1500 quilowatts hora.">
      <path d="M60 190 H720" stroke="#739cb4" stroke-width="4"/><text x="60" y="29" fill="#3b6e8c" font-size="20" font-weight="900">Consum anual (kWh)</text>
      <text x="70" y="91" fill="#2e6688" font-size="17" font-weight="850">Sistema actual</text><rect x="240" y="63" width="445" height="37" rx="9" fill="#83abc5"/><text x="698" y="88" fill="#235b83" font-size="18" font-weight="900">5.000</text>
      <text x="70" y="158" fill="#2e6688" font-size="17" font-weight="850">Sistema nou</text><rect x="240" y="130" width="310" height="37" rx="9" fill="#56b2a2"/><text x="563" y="154" fill="#247d70" font-size="18" font-weight="900">3.500</text>
      <path d="M556 193 H682" stroke="#d59762" stroke-width="5"/><path d="M556 193 l13 -8 v16z M682 193 l-13 -8 v16z" fill="#d59762"/><text x="618" y="218" text-anchor="middle" fill="#9f6a43" font-size="18" font-weight="900">1.500 kWh</text>
    </svg><figcaption>Exemple: el consum baixa de 5.000 a 3.500 kWh per any. L’estalvi és 1.500 kWh/any, un 30 %. Per valorar-lo en euros multipliquem per la tarifa variable; per estimar CO₂ necessitem el factor d’emissió corresponent.</figcaption></figure>`
  };
  const controlSets={
    work:[['f','Força F (N)',0,1000,20,300,'N'],['d','Desplaçament d (m)',0,20,1,8,'m'],['a','Angle α (°)',0,180,15,30,'°'],['t','Temps t (s)',1,60,1,10,'s']],
    efficiency:[['e','Energia d’entrada (J)',1000,10000,500,5000,'J'],['m','Rendiment motor (%)',20,100,5,80,'%'],['g','Rendiment alternador (%)',20,100,5,90,'%']],
    gears:[['n','Velocitat d’entrada (rpm)',600,3000,100,1500,'rpm'],['z','Dents de sortida z₂',20,100,5,60,'dents'],['p','Parell d’entrada (N·m)',2,40,2,10,'N·m']],
    heat:[['m','Massa d’aigua (kg)',0.5,5,0.5,2,'kg'],['t','Increment ΔT (K)',10,80,5,35,'K'],['e','Rendiment (%)',50,100,5,85,'%']],
    wind:[['v','Velocitat del vent (m/s)',3,15,1,7,'m/s'],['r','Radi del rotor (m)',1,5,0.5,2,'m'],['c','Coeficient de potència Cₚ',0.2,0.5,0.05,0.35,'']],
    savings:[['e','Consum anterior (kWh/any)',1000,10000,500,5000,'kWh'],['p','Preu de l’energia (€/kWh)',0.12,0.4,0.02,0.22,'€'],['s','Reducció de consum (%)',10,50,5,30,'%']],
    carnot:[['h','Focus calent Tₕ (K)',500,1100,50,800,'K'],['c','Focus fred T𝒸 (K)',250,450,25,300,'K']]
  };
  function renderLab(kind,title){
    const controls=controlSets[kind].map(([key,name,min,max,step,value,unit])=>`<div class="deep-control"><label for="deep-${kind}-${key}">${name}<output id="deep-${kind}-${key}-value">${units(value,Number.isInteger(step)?0:2)} ${unit}</output></label><input id="deep-${kind}-${key}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-value="${key}" aria-label="${name}"></div>`).join('');
    return `<div class="deep-lab" data-lab="${kind}"><div class="deep-controls">${controls}</div><div class="deep-result" role="status" aria-live="polite"><p>${title}</p><strong data-main-result></strong><span class="stat-small" data-sub-result></span><div class="deep-bar" aria-hidden="true"><span class="bar-value"></span></div><span class="stat-small" data-extra-result></span></div></div>`;
  }
  function enginePanel(){
    return `<div class="deep-carnot"><div class="deep-heading"><span>04</span>Comparador de motors de combustió</div><p>Observa especialment <strong>com entra la mescla o el combustible</strong>, <strong>què inicia la combustió</strong> i <strong>quantes curses fa el pistó</strong> per completar un cicle.</p>
      <div class="engine-picker" role="group" aria-label="Tria el motor"><button type="button" data-engine="2t" aria-pressed="true">2T gasolina</button><button type="button" data-engine="4t" aria-pressed="false">4T gasolina</button><button type="button" data-engine="diesel" aria-pressed="false">4T dièsel</button></div><div class="engine-description" data-engine-detail></div>
      <table class="deep-table"><thead><tr><th>Motor</th><th>Cilindres habituals</th><th>On es fa servir</th></tr></thead><tbody>
      <tr><td>2T gasolina (petits equips)</td><td>1; alguns 2 o més</td><td>Motoserres, desbrossadores, ciclomotors antics i algunes motos de competició</td></tr>
      <tr><td>4T gasolina</td><td>3 o 4 en cotxes corrents; també 1, 2, 6 i 8</td><td>Turismes, motocicletes, petits generadors i maquinària de jardí</td></tr>
      <tr><td>4T dièsel</td><td>4 en molts turismes; 4, 6 o més en maquinària i vehicles pesants</td><td>Camions, tractors, autobusos, embarcacions i generadors industrials</td></tr></tbody></table>
      <p class="deep-notice">Els exemples i quantitats de cilindres són orientatius, no universals. També existeixen motors dièsel de dos temps, especialment en grans aplicacions navals. El cicle 2T es completa en <strong>una volta del cigonyal</strong>; el 4T, en <strong>dues voltes</strong>.</p>
    </div>`;
  }
  const engineSpecs={
    '2t':{title:'2T gasolina · dues curses, espiralls i bugia',desc:'En un 2T petit la distribució sol fer-se mitjançant <strong>espiralls</strong> o obertures que el pistó tapa i destapa. No hi ha les quatre obertures de vàlvula d’un 4T convencional. La bugia encén la mescla al final de la compressió.',stages:[['1 · Puja','Compressió de la mescla al cilindre. Al càrter s’admet mescla fresca.'],['2 · Baixa','La combustió impulsa el pistó; s’obren l’escapament i després la transferència de mescla del càrter al cilindre.']],parts:'Bujia a dalt · espirall d’escapament i espirall de transferència als costats · càrter com a cambra de precompressió.',kind:'ports'},
    '4t':{title:'4T gasolina · quatre curses, vàlvules i bugia',desc:'Té vàlvula d’admissió i d’escapament. Durant l’admissió entra <strong>aire amb combustible</strong> (en motors d’injecció directa la barreja pot acabar de formar-se dins del cilindre). La <strong>bugia</strong> encén la mescla.',stages:[['1 · Admissió','Pistó baixa, entra aire i combustible; admissió oberta.'],['2 · Compressió','Pistó puja, vàlvules tancades.'],['3 · Expansió','La bugia encén la mescla i els gasos empenyen el pistó avall.'],['4 · Escapament','Pistó puja, vàlvula d’escapament oberta.']],parts:'Bujia al centre · vàlvula d’admissió a l’esquerra · vàlvula d’escapament a la dreta.',kind:'valves'},
    diesel:{title:'4T dièsel · quatre curses, injecció i autoencesa',desc:'Durant l’admissió entra essencialment <strong>aire</strong>. La compressió n’eleva molt la temperatura; al final s’hi <strong>injecta gasoil</strong>, que s’encén per les condicions de pressió i temperatura. <strong>No necessita bugia d’encesa</strong> (alguns disposen de bugies d’incandescència per facilitar l’arrencada en fred).',stages:[['1 · Admissió','Pistó baixa: entra aire per la vàlvula d’admissió.'],['2 · Compressió','Pistó puja: es comprimeix fortament l’aire.'],['3 · Expansió','S’injecta gasoil; combustió i descens del pistó.'],['4 · Escapament','Pistó puja i expulsa els gasos cremats.']],parts:'Injector al centre · dues vàlvules · sense bugia d’encesa.',kind:'injector'}
  };
  function engineDiagram(spec){
    const top=spec.kind==='ports'?`<rect x="137" y="24" width="25" height="33" rx="5" fill="#f4c478" stroke="#b78243" stroke-width="3"/><text x="174" y="24" font-size="14" fill="#845d37">Bugia</text>`:
      `<path d="M101 28 l-10 27 M197 28 l10 27" stroke="#6da2b8" stroke-width="10" stroke-linecap="round"/><text x="69" y="21" font-size="13" fill="#3e7e9b">Admissió</text><text x="190" y="21" font-size="13" fill="#a97f50">Escapament</text>${spec.kind==='injector'?'<rect x="140" y="23" width="20" height="34" rx="4" fill="#b9b3dd" stroke="#736b9a" stroke-width="3"/><text x="160" y="65" font-size="13" fill="#68618f">Injector</text>':'<rect x="140" y="23" width="20" height="34" rx="4" fill="#f4c478" stroke="#b78243" stroke-width="3"/><text x="160" y="65" font-size="13" fill="#9b7539">Bugia</text>'}`;
    return `<svg viewBox="0 0 300 248" role="img" aria-label="Esquema simplificat d’un cilindre amb el pistó i ${spec.kind==='ports'?'espiralls':spec.kind==='injector'?'injector i vàlvules':'bugia i vàlvules'}"><rect x="94" y="54" width="113" height="147" rx="8" fill="#e8f3fa" stroke="#5d8aa6" stroke-width="6"/>${spec.kind==='ports'?'<path d="M81 141 H108 M194 159 H220" stroke="#db9c5c" stroke-width="12"/><text x="2" y="135" fill="#96683f" font-size="13">Transfer.</text><text x="221" y="157" fill="#96683f" font-size="13">Escap.</text>':''}${top}<g class="deep-piston"><rect x="105" y="118" width="91" height="37" rx="8" fill="#8cb4cb" stroke="#5889a8" stroke-width="3"/><path d="M150 152 V210" stroke="#6b8fa6" stroke-width="15" stroke-linecap="round"/><circle cx="150" cy="211" r="13" fill="#497ba0"/></g><path d="M238 91 V168" stroke="#4f8ba9" stroke-width="4"/><path d="M238 168 l-9 -13 h18z" fill="#4f8ba9"/><text x="247" y="115" fill="#4f8ba9" font-size="13">Cursa</text></svg>`;
  }
  function carnotPanel(){
    return `<div class="deep-carnot"><div class="deep-heading"><span>04</span>El cicle de Carnot: les quatre transformacions</div><p>És un <strong>cicle ideal i reversible</strong> que marca el rendiment màxim teòric d’un motor tèrmic entre dos focus. Els motors reals tenen pèrdues i no arriben a aquest límit.</p>
    <figure class="deep-visual"><h4>Diagrama p–V de Carnot (esquemàtic, no a escala)</h4><svg viewBox="0 0 780 380" role="img" aria-label="Diagrama pressió-volum amb quatre trams: A a B expansió isotèrmica al focus calent; B a C expansió adiabàtica; C a D compressió isotèrmica al focus fred; D a A compressió adiabàtica.">
      <defs><marker id="deep-arrow-carnot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="none" stroke="#317ea4" stroke-width="1.5"/></marker></defs>
      <path d="M80 40 V325 H716" stroke="#7d9db1" stroke-width="4" fill="none"/><text x="43" y="43" font-size="22" font-weight="900" fill="#42718f">p</text><text x="722" y="342" font-size="22" font-weight="900" fill="#42718f">V</text>
      <path d="M210 70 C290 68 398 97 490 147 C527 182 552 222 562 255 C455 283 333 288 290 265 C240 227 218 146 210 70z" fill="#83bddd" fill-opacity=".22" stroke="none"/>
      <path d="M210 70 C290 68 398 97 490 147" stroke="#e1a15e" stroke-width="6" fill="none" marker-end="url(#deep-arrow-carnot)"/>
      <path d="M490 147 C527 182 552 222 562 255" stroke="#317ea4" stroke-width="6" fill="none" marker-end="url(#deep-arrow-carnot)"/>
      <path d="M562 255 C455 283 333 288 290 265" stroke="#5caa9f" stroke-width="6" fill="none" marker-end="url(#deep-arrow-carnot)"/>
      <path d="M290 265 C240 227 218 146 210 70" stroke="#8f86b5" stroke-width="6" fill="none" marker-end="url(#deep-arrow-carnot)"/>
      <g fill="#205c82" font-size="22" font-weight="900"><text x="173" y="64">A</text><text x="501" y="133">B</text><text x="575" y="265">C</text><text x="258" y="280">D</text></g>
      <g font-size="19" font-weight="850"><text x="340" y="66" fill="#c68a43">Qₕ entra</text><text x="572" y="195" fill="#2d78a0">Adiabàtica</text><text x="380" y="314" fill="#398e80">Q𝒸 surt</text><text x="108" y="197" fill="#7a70a8">Adiabàtica</text><text x="374" y="204" text-anchor="middle" fill="#3786a6" font-size="23">W útil</text></g>
    </svg><figcaption>A→B: expansió isotèrmica a Tₕ i absorció Qₕ. B→C: expansió adiabàtica. C→D: compressió isotèrmica a T𝒸 i cessió Q𝒸. D→A: compressió adiabàtica. L’àrea tancada representa el treball net del cicle.</figcaption></figure>
    <div class="deep-inline-formulas"><span>η<sub>Carnot</sub> = 1 − T𝒸/Tₕ</span><span>W = Qₕ − Q𝒸</span><span>Temperatures en K</span></div>
    ${renderLab('carnot','Experimenta amb els dos focus tèrmics')}
    <p class="deep-notice">El Carnot ideal només depèn de les temperatures absolutes dels focus. Si Tₕ = T𝒸, el rendiment màxim seria 0. A més diferència de temperatura, més rendiment teòric, però mai un 100 % amb T𝒸 superior a 0 K.</p></div>`;
  }
  const calculations={
    work:({f,d,a,t})=>{const W=f*d*Math.cos(a*Math.PI/180);return [`${units(W)} J de treball`,`${units(W/t)} W de potència mitjana`,a===90?'Força perpendicular: treball nul.':W<0?'La força s’oposa al desplaçament.':'La força afavoreix el desplaçament.',Math.min(100,Math.abs(W)/(f*d||1)*100)];},
    efficiency:({e,m,g})=>{const useful=e*m*g/10000;return [`${units(useful)} J útils`,`η global = ${units(m*g/100,1)} %`,`Pèrdues: ${units(e-useful)} J`,m*g/100];},
    gears:({n,z,p})=>{const i=z/20;const speed=n/i;const torque=p*i*0.9;return [`${units(speed,0)} rpm a la sortida`,`i = ${units(i,2)} · parell = ${units(torque)} N·m`,`El model suposa z₁ = 20 i η = 90 %.`,Math.min(100,speed/n*100)];},
    heat:({m,t,e})=>{const q=m*4180*t;return [`${units(q/1000)} kJ útils`,`Energia aportada: ${units(q/(e/100)/1000)} kJ`,`CE de l’aigua = 4.180 J/(kg·K).`,e];},
    wind:({v,r,c})=>{const useful=0.5*1.225*Math.PI*r*r*v**3*c*0.85;return [`${units(useful/1000,2)} kW elèctrics`,`Potència del vent: ${units(useful/(c*0.85)/1000,2)} kW`,`ρ = 1,225 kg/m³ · η generador = 85 %.`,Math.min(100,c*85)];},
    savings:({e,p,s})=>{const saved=e*s/100;return [`${units(saved,0)} kWh/any estalviats`,`Estalvi variable: ${units(saved*p,2)} €/any`,`Consum nou: ${units(e-saved,0)} kWh/any.`,s];},
    carnot:({h,c})=>{const eta=(1-c/h);return [`${units(eta*100,1)} % rendiment màxim`,`Amb Qₕ = 2.000 J: W = ${units(2000*eta,0)} J`,`Calor cedida Q𝒸 = ${units(2000*c/h,0)} J.`,eta*100];}
  };
  function updateLab(lab){
    const kind=lab.dataset.lab;
    const values=Object.fromEntries([...lab.querySelectorAll('input[data-value]')].map(input=>{
      const key=input.dataset.value;
      const out=lab.querySelector(`#deep-${kind}-${key}-value`);
      if(out)out.textContent=`${units(Number(input.value),Number(input.step)%1===0?0:2)} ${kind==='savings'&&key==='p'?'€':kind==='wind'&&key==='c'?'':input.closest('.deep-control').querySelector('label').textContent.match(/\(([^()]*)\)/)?.[1]||''}`;
      return [key,Number(input.value)];
    }));
    const result=calculations[kind](values);
    lab.querySelector('[data-main-result]').textContent=result[0];
    lab.querySelector('[data-sub-result]').textContent=result[1];
    lab.querySelector('[data-extra-result]').textContent=result[2];
    lab.querySelector('.bar-value').style.width=`${Math.max(0,Math.min(100,result[3]))}%`;
  }
  function initEngine(picker){
    const target=picker.parentElement.querySelector('[data-engine-detail]');
    function choose(kind){
      const spec=engineSpecs[kind];
      picker.querySelectorAll('button[data-engine]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.engine===kind)));
      target.innerHTML=`<div class="engine-panel-layout"><div class="engine-graphic">${engineDiagram(spec)}</div><div><h4>${spec.title}</h4><p>${spec.desc}</p><ol>${spec.stages.map(([label,desc])=>`<li><strong>${label}:</strong> ${desc}</li>`).join('')}</ol><p><strong>Identifica:</strong> ${spec.parts}</p></div></div>`;
    }
    picker.addEventListener('click',event=>{const btn=event.target.closest('button[data-engine]');if(btn)choose(btn.dataset.engine);});
    choose('2t');
  }
  function renderTopic(topic){
    const root=document.getElementById(topic.id);
    if(!root)return;
    const dossier=document.createElement('div');
    dossier.className='deep-dossier';
    dossier.innerHTML=`<h3>📘 Teoria ampliada · ${topic.heading}</h3><p class="deep-lead">${topic.lead}</p>
      <div class="deep-heading"><span>01</span>Entén què passa físicament</div>
      <div class="deep-theory">${topic.theory.map(([title,body])=>`<article><h4>${title}</h4><p>${body}</p></article>`).join('')}</div>
      <div class="deep-heading"><span>02</span>Observa el fenomen al dibuix</div>${views[topic.visual]()}
      <div class="deep-heading"><span>03</span>Experimenta i comprova les relacions</div>
      ${renderLab(topic.lab,'Mou els controls: com canvia el resultat?')}
      ${topic.extra==='engines'?enginePanel():topic.extra==='carnot'?carnotPanel():''}
      <p class="deep-notice"><strong>Recorda:</strong> ${topic.tip}</p>
      <div class="deep-next"><strong>05 · Fórmules, exemples resolts i activitats.</strong> A continuació tens les expressions, els exercicis i els recursos originals d’aquest bloc. Resol els problemes després d’observar què representen les magnituds.</div>`;
    const anchor=root.querySelector(':scope > .formula-grid')||root.querySelector(':scope > .info-grid');
    if(anchor)anchor.before(dossier);else root.appendChild(dossier);
    dossier.querySelectorAll('[data-lab]').forEach(lab=>{lab.addEventListener('input',()=>updateLab(lab));updateLab(lab);});
    const picker=dossier.querySelector('.engine-picker');if(picker)initEngine(picker);
  }
  function init(){topics.forEach(renderTopic);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
