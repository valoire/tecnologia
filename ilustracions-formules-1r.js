/* Il·lustracions SVG originals per a les 32 fórmules d'Energia i transformacions.
   L'SVG és vectorial: els esquemes continuen nítids a mòbil i a la pissarra digital. */
(() => {
  'use strict';

  const entries = [
    ['car','F · d','Força + desplaçament','F →','Treball mecànic'],
    ['speed','½mv²','L’energia del moviment','v →','Energia cinètica'],
    ['accelerate','ΔE₍c₎','Abans i després','vᵢ → v𝒇','Canvi de velocitat'],
    ['height','mgh','Massa a una altura','h ↑','Energia potencial'],
    ['clock','E / t','Energia per segon','t','Potència mitjana'],
    ['washer','P · t','Potència durant un temps','kWh','Consum elèctric'],
    ['receipt','€ / kWh','Energia i tarifa','€','Cost de l’energia'],
    ['donut','part / total','Comparació de fases','80 %','Percentatges'],
    ['heat','mcΔT','Escalfar una substància','ΔT ↑','Calor sensible'],
    ['ice','mL','Canviar d’estat','Q →','Calor latent'],
    ['volume','ρ · V','Volum que té massa','kg / L','Massa i densitat'],
    ['thermo','T₍f₎','Trobar la temperatura','T ↑','Temperatura final'],
    ['circuit','V = IR','Tensió i corrent','V · I · R','Llei d’Ohm'],
    ['bulb','V · I','Energia elèctrica','W','Potència elèctrica'],
    ['resistor','V² / R','Resistència i tensió','R Ω','Potència resistiva'],
    ['resistorhot','I²R','Corrent que escalfa','I²','Efecte Joule'],
    ['split','E → E','Energia útil i pèrdues','E₍ú₎ + E₍d₎','Balanç energètic'],
    ['gauge','η','Part aprofitada','85 %','Rendiment'],
    ['turbine','P₍ú₎/P₍e₎','Potència útil','P →','Rendiment per potències'],
    ['supply','E₍ú₎ / η','Entrada necessària','E₍e₎','Energia de subministrament'],
    ['fuel','m · PC','Combustible que aporta calor','MJ/kg','Energia del combustible'],
    ['fuelamount','E / ηPC','Quants kg calen?','kg','Massa de combustible'],
    ['piston','rpm / 2','Dos girs per cada cicle','720°','Cicles del motor'],
    ['drops','ṁ / cicles','Combustible a cada cicle','g/cicle','Dosi per cicle'],
    ['shower','mcΔT','Escalfar aigua','Q₍ú₎','Calor útil'],
    ['boiler','Q / η','La caldera necessita més','E₍e₎','Energia consumida'],
    ['bottle','E / PC','Energia a massa de gas','kg','Consum de gas'],
    ['flow','m / ṁ','Massa i cabal','t','Temps de consum'],
    ['heatengine','Q₍c₎ − Q₍f₎','Calor convertida en treball','W','Màquina tèrmica'],
    ['heatflow','1 − Q₍f₎/Q₍c₎','Calor útil i cedida','η','Rendiment tèrmic'],
    ['carnot','1 − T₍f₎/T₍c₎','Límit teòric de rendiment','η₍màx₎','Màquina de Carnot'],
    ['kelvin','°C + 273,15','Temperatura absoluta','K','Escala Kelvin']
  ];

  const palette = [
    ['#3375d5','#dff0ff','#235ca5'],
    ['#1886af','#ddf5ff','#146a8c'],
    ['#d98038','#fff1d8','#a95b25'],
    ['#5b6cce','#edebff','#444aa3'],
    ['#4386b5','#e1f6ff','#265f91'],
    ['#c8713d','#ffefe4','#99502c'],
    ['#219b8c','#e3faf2','#18766c'],
    ['#805ec0','#f1eaff','#5a438d']
  ];

  const line=(x1,y1,x2,y2,color,width=5,extra='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" ${extra}/>`;
  const text=(x,y,t,size=16,color='#284a64',weight=800,anchor='middle') => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" font-family="system-ui, sans-serif" fill="${color}">${t}</text>`;
  const arrow=(x1,y1,x2,y2,color,width=6)=>{
    const a=Math.atan2(y2-y1,x2-x1),s=12;
    return `${line(x1,y1,x2,y2,color,width)}<path d="M${x2-Math.cos(a-.62)*s} ${y2-Math.sin(a-.62)*s} L${x2} ${y2} L${x2-Math.cos(a+.62)*s} ${y2-Math.sin(a+.62)*s}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  };
  const sparkle=(x,y,c='#f2b956')=>`<path d="M${x} ${y-9}v18 M${x-9} ${y}h18 M${x-6} ${y-6}l12 12 M${x+6} ${y-6}l-12 12" stroke="${c}" stroke-width="2.1" stroke-linecap="round" opacity=".7"/>`;
  const gear=(x,y,r,color)=>{
    let teeth='';for(let i=0;i<10;i++)teeth+=`<rect x="${x-6}" y="${y-r-9}" width="12" height="19" rx="3" fill="${color}" transform="rotate(${i*36} ${x} ${y})"/>`;
    return `<g filter="url(#tinyshadow)">${teeth}<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="#fff" stroke-width="4"/><circle cx="${x}" cy="${y}" r="${r*.49}" fill="#e8f5fc"/><circle cx="${x}" cy="${y}" r="${r*.22}" fill="#6f94ab"/></g>`;
  };
  const dial=(x,y,r,color,needle=-45)=>{
    let ticks='';for(let i=0;i<11;i++){const a=(-145+i*11)*Math.PI/180;ticks+=line(x+Math.cos(a)*(r-10),y+Math.sin(a)*(r-10),x+Math.cos(a)*(r-2),y+Math.sin(a)*(r-2),'#6e9ab6',2);}
    const a=needle*Math.PI/180;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#9fc4d8" stroke-width="6" filter="url(#tinyshadow)"/>${ticks}${line(x,y,x+Math.cos(a)*(r-18),y+Math.sin(a)*(r-18),color,6)}<circle cx="${x}" cy="${y}" r="6" fill="${color}"/>`;
  };
  const car=(x,y,c)=>`<g filter="url(#tinyshadow)"><path d="M${x} ${y+16}h205l-8-28h-31l-27-35h-75l-30 35h-24z" fill="${c}" stroke="#fff" stroke-width="3"/><path d="M${x+69} ${y-41}h60l24 27h-109z" fill="#d9f4ff"/><path d="M${x+109} ${y-41}v27" stroke="#fff" stroke-width="3"/><rect x="${x+10}" y="${y-4}" width="20" height="8" rx="4" fill="#ffe2a3"/><circle cx="${x+49}" cy="${y+20}" r="23" fill="#3f5364" stroke="#c1d7e4" stroke-width="7"/><circle cx="${x+167}" cy="${y+20}" r="23" fill="#3f5364" stroke="#c1d7e4" stroke-width="7"/></g>`;
  const thermo=(x,y,c,hot=true)=>`<g filter="url(#tinyshadow)"><rect x="${x-16}" y="${y-112}" width="32" height="130" rx="15" fill="#fff" stroke="#a5cad9" stroke-width="5"/><circle cx="${x}" cy="${y+23}" r="29" fill="#fff" stroke="#a5cad9" stroke-width="5"/><rect x="${x-8}" y="${y-(hot?77:35)}" width="16" height="${hot?95:53}" rx="8" fill="${c}"/><circle cx="${x}" cy="${y+23}" r="21" fill="${c}"/>${[0,1,2,3,4].map(i=>line(x+21,y-98+i*23,x+34,y-98+i*23,'#6690a7',2)).join('')}</g>`;
  const bottle=(x,y,c)=>`<g filter="url(#tinyshadow)"><rect x="${x+23}" y="${y-96}" width="103" height="136" rx="20" fill="${c}" stroke="#fff" stroke-width="4"/><rect x="${x+50}" y="${y-110}" width="51" height="27" rx="5" fill="#7fa0b2"/><rect x="${x+68}" y="${y-125}" width="17" height="16" fill="#667e93"/><rect x="${x+39}" y="${y-47}" width="72" height="55" rx="12" fill="#ffffffaa"/>${text(x+75,y-14,'GAS',18,'#38627e')}</g>`;
  const machine=(x,y,c)=>`<g filter="url(#tinyshadow)"><rect x="${x}" y="${y-99}" width="153" height="154" rx="18" fill="#e4eef5" stroke="#7facc5" stroke-width="5"/><circle cx="${x+77}" cy="${y-22}" r="51" fill="#76b9d0" stroke="#fff" stroke-width="9"/><circle cx="${x+77}" cy="${y-22}" r="34" fill="#d7f6ff"/><path d="M${x+45} ${y-10}q28-19 60 0 q-14 34-54 18z" fill="${c}" opacity=".75"/><circle cx="${x+25}" cy="${y-81}" r="7" fill="${c}"/><rect x="${x+53}" y="${y-87}" width="77" height="10" rx="4" fill="#abc8d8"/></g>`;
  const reservoir=(x,y,c,label)=>`<g filter="url(#tinyshadow)"><rect x="${x}" y="${y}" width="109" height="73" rx="12" fill="${c}" stroke="#fff" stroke-width="4"/>${text(x+54,y+29,label,15,'#fff')}${line(x+23,y+45,x+87,y+45,'#ffffff99',3)}</g>`;

  function drawing(kind,c){
    const blue='#257db4', gold='#eea43a', warm='#dc7054', mint='#32a89a', ink='#355d78';
    switch(kind){
      case 'car': return `<path d="M235 163H498" stroke="#abc4d5" stroke-width="10" stroke-linecap="round"/>${car(258,124,c)}${arrow(281,78,465,78,gold)}${text(370,65,'Força F',15,c)}${arrow(276,190,474,190,blue,4)}${text(380,181,'desplaçament d',13,ink)}`;
      case 'speed': return `${[0,1,2].map(i=>line(242,123+i*15,290,123+i*15,'#9fbfda',5)).join('')}${car(270,114,c)}${arrow(284,71,474,71,gold)}${text(383,59,'velocitat v',15,c)}`;
      case 'accelerate': return `<g opacity=".5" transform="translate(-50 40) scale(.8)">${car(277,112,'#95b3c6')}</g>${car(300,118,c)}${arrow(283,71,405,71,blue,4)}${arrow(300,60,486,60,gold,5)}${text(349,47,'vᵢ',16,ink)}${text(477,45,'v𝒇',16,c)}`;
      case 'height': return `<path d="M250 174l173-95 78 95z" fill="#b1d8bf" stroke="#77b79b" stroke-width="4"/>${line(292,70,292,161,c,5)}${arrow(291,161,291,66,c,4)}${text(276,117,'h',21,c)}<g transform="translate(337 -1) scale(.72)">${car(280,128,gold)}</g>${text(420,190,'nivell 0',13,ink)}`;
      case 'clock': return `${dial(365,110,74,c,-66)}<path d="M347 24h38" stroke="#85acc1" stroke-width="11" stroke-linecap="round"/>${sparkle(463,64)}${text(471,158,'J/s',18,c)}`;
      case 'washer': return `${machine(294,103,c)}${arrow(252,84,296,84,gold,5)}${text(269,65,'P',18,c)}${dial(466,145,31,gold,-60)}`;
      case 'receipt': return `<g filter="url(#tinyshadow)"><path d="M321 26h134v154l-10-9-12 9-13-9-11 9-14-9-13 9-14-9-13 9-12-9-12 9z" fill="#fff" stroke="#a0bfcf" stroke-width="3"/>${[0,1,2].map(i=>`<rect x="339" y="${54+i*30}" width="${79-i*12}" height="8" rx="4" fill="#c2d9e6"/>`).join('')}${text(419,154,'€',36,c)}</g>${sparkle(280,55,gold)}`;
      case 'donut': return `<circle cx="371" cy="109" r="70" fill="none" stroke="#d7eaf5" stroke-width="28"/><circle cx="371" cy="109" r="70" fill="none" stroke="${c}" stroke-width="28" stroke-dasharray="352 440" transform="rotate(-90 371 109)"/>${text(371,117,'80 %',29,c)}${text(467,165,'20 %',16,ink)}`;
      case 'heat': return `<path d="M293 90h161l-15 74H307z" fill="#b2eaff" stroke="#73a8c0" stroke-width="5"/><path d="M301 111q35-16 71 0t73 0" fill="none" stroke="${c}" stroke-width="5"/><path d="M290 83h169" stroke="#66869c" stroke-width="9" stroke-linecap="round"/>${[0,1,2].map(i=>`<path d="M${335+i*34} 170q-18 19 1 30t1 16" fill="none" stroke="${gold}" stroke-width="6" stroke-linecap="round"/>`).join('')}${thermo(471,137,warm,true)}`;
      case 'ice': return `<g filter="url(#tinyshadow)"><path d="M300 84l56-32 65 32-56 36z" fill="#b1ecfa" stroke="#fff" stroke-width="3"/><path d="M300 84v75l65 29v-68z" fill="#70bcd6" stroke="#fff" stroke-width="3"/><path d="M365 120v68l56-35V84z" fill="#a4d7e8" stroke="#fff" stroke-width="3"/></g>${arrow(432,119,468,119,gold,5)}<path d="M485 138q-27-27 0-60q28 33 0 60z" fill="${blue}"/>${text(452,185,'fusió',14,c)}`;
      case 'volume': return `<path d="M280 35h97l-9 133q-6 17-36 17t-37-17z" fill="#ffffffcc" stroke="#8fb5c9" stroke-width="5"/><path d="M298 119h63l-3 45q-9 17-26 17t-27-17z" fill="#83cceb"/>${[0,1,2,3].map(i=>line(359,65+i*23,376,65+i*23,ink,2)).join('')}${arrow(391,112,431,112,c)}${gear(465,118,30,gold)}${text(337,52,'V',19,c)}`;
      case 'thermo': return `${thermo(313,133,blue,false)}${arrow(358,112,415,112,c,5)}${thermo(463,133,warm,true)}${text(314,34,'Tᵢ',18,ink)}${text(465,34,'T𝒇',18,c)}`;
      case 'circuit': return `<g fill="none" stroke="#6695ae" stroke-width="6" stroke-linejoin="round"><path d="M279 82V44H454V166H279V127"/></g>${line(265,101,297,101,ink,5)}${line(274,90,274,112,c,6)}${line(289,94,289,108,c,3)}<path d="M334 44l9-12 11 24 11-24 11 24 11-12" fill="none" stroke="${gold}" stroke-width="5"/>${text(424,34,'R',19,c)}${arrow(360,176,423,176,blue,4)}${text(393,194,'I',17,c)}`;
      case 'bulb': return `<path d="M291 128V85H444V128" fill="none" stroke="#6d9bb7" stroke-width="6"/><circle cx="291" cy="138" r="14" fill="${c}"/><circle cx="444" cy="138" r="14" fill="${c}"/><circle cx="372" cy="91" r="45" fill="#ffe7aa" stroke="#e2a644" stroke-width="6" filter="url(#tinyshadow)"/><path d="M357 111v17h30v-17M360 99l12-12 12 12" fill="none" stroke="#9e7537" stroke-width="5"/>${sparkle(444,42,gold)}${text(365,176,'P = V · I',18,c)}`;
      case 'resistor': case 'resistorhot': return `<path d="M260 108h58l13-15 14 30 14-30 14 30 14-30 14 15h77" fill="none" stroke="${kind==='resistorhot'?warm:c}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><rect x="320" y="73" width="100" height="70" rx="13" fill="${kind==='resistorhot'?'#ffceaa':'#d5ecf7'}" opacity=".45"/>${kind==='resistorhot'?[0,1,2].map(i=>`<path d="M${333+i*34} 68q-13-16 1-30" fill="none" stroke="${warm}" stroke-width="5" stroke-linecap="round"/>`).join('') : `${text(369,66,'R (Ω)',16,c)}`}${arrow(261,158,470,158,blue,4)}${text(375,181,kind==='resistorhot'?'I → calor':'tensió V',14,c)}`;
      case 'split': return `${arrow(250,107,357,107,c,13)}<circle cx="360" cy="107" r="18" fill="#e6f4ff" stroke="${c}" stroke-width="5"/>${arrow(379,99,472,57,mint,9)}${arrow(379,115,472,158,warm,9)}${text(462,40,'útil',15,mint)}${text(462,184,'pèrdues',14,warm)}`;
      case 'gauge': return `${dial(362,110,76,c,-43)}<path d="M310 145q48 29 110 0" fill="none" stroke="${mint}" stroke-width="8" stroke-linecap="round"/>${text(367,170,'85 %',20,c)}${sparkle(467,59)}`;
      case 'turbine': return `${arrow(252,111,318,111,gold,10)}${gear(373,108,42,c)}${arrow(427,111,484,111,mint,10)}${text(275,85,'P₍e₎',16,ink)}${text(457,87,'P₍ú₎',16,mint)}`;
      case 'supply': return `<g filter="url(#tinyshadow)"><rect x="275" y="72" width="91" height="78" rx="14" fill="${c}"/><path d="M313 85l-14 28h14l-5 27 26-39h-16l7-16" fill="#fff0bd"/></g>${arrow(376,112,414,112,gold)}${gear(454,112,29,mint)}${text(319,56,'entrada',15,c)}${text(455,164,'útil',15,mint)}`;
      case 'fuel': return `<g filter="url(#tinyshadow)"><rect x="275" y="54" width="116" height="117" rx="16" fill="${c}"/><rect x="300" y="37" width="57" height="23" rx="7" fill="#709eaf"/><path d="M319 77h28v68h-28zM299 97h67v24h-67z" fill="#ffffffcc"/></g><path d="M458 172q-46-24-17-70q9 20 19 25q-5-43 18-66q38 75-5 111z" fill="#ee9844"/>${sparkle(450,45,gold)}`;
      case 'fuelamount': return `<g transform="translate(-20 0)">${bottle(302,136,c)}</g>${arrow(421,117,470,117,gold,5)}<path d="M476 127q-20-23 0-52q22 29 0 52z" fill="${blue}"/>${text(369,179,'massa m',15,c)}`;
      case 'piston': return `<g filter="url(#tinyshadow)"><rect x="284" y="37" width="99" height="106" rx="11" fill="#d5e6ee" stroke="#6c9db8" stroke-width="5"/><rect x="292" y="88" width="82" height="28" rx="7" fill="${c}"/><path d="M334 113l17 50" stroke="#748c9b" stroke-width="11" stroke-linecap="round"/></g>${gear(354,166,27,gold)}${arrow(410,99,476,99,c,5)}${text(445,82,'2 girs',17,c)}${text(446,121,'1 cicle',14,ink)}`;
      case 'drops': return `${gear(341,103,40,c)}${arrow(391,105,435,105,gold)}<path d="M450 133q-33-27 0-74q33 47 0 74z" fill="#61b9db" stroke="#fff" stroke-width="4"/>${text(443,161,'g/cicle',16,c)}`;
      case 'shower': return `<path d="M282 71q24-54 64-22" fill="none" stroke="#6c91a5" stroke-width="11" stroke-linecap="round"/><path d="M349 45q34 1 42 32h-82q3-30 40-32" fill="${c}"/><path d="M318 85v16 M344 86v25 M370 85v16" stroke="#4aaacf" stroke-width="5" stroke-linecap="round" stroke-dasharray="7 9"/><path d="M292 144h109l-9 35h-91z" fill="#a6deef" stroke="#84b8cc" stroke-width="4"/>${thermo(458,134,warm,true)}`;
      case 'boiler': return `<g filter="url(#tinyshadow)"><rect x="290" y="53" width="137" height="117" rx="16" fill="#dcecf5" stroke="#79a6bc" stroke-width="5"/><circle cx="357" cy="109" r="35" fill="#fff" stroke="${c}" stroke-width="6"/>${text(357,118,'η',30,c)}<rect x="320" y="40" width="75" height="17" rx="5" fill="#8cabbc"/></g>${arrow(256,116,289,116,gold,6)}${arrow(428,116,481,116,mint,6)}${text(450,83,'Q útil',15,mint)}`;
      case 'bottle': return `${bottle(286,139,c)}${arrow(422,105,468,105,gold)}<path d="M482 154q-41-27-19-63q10 18 17 19q-1-24 14-40q30 53-12 84z" fill="${warm}"/>${text(359,188,'kg de gas',14,c)}`;
      case 'flow': return `<rect x="268" y="76" width="153" height="67" rx="13" fill="#a9d9ed" stroke="#85b8cd" stroke-width="4"/>${[0,1,2].map(i=>`<path d="M279 ${88+i*20}q30-10 62 0t71 0" stroke="#fff" stroke-width="4" fill="none"/>`).join('')}${arrow(420,110,466,110,c)}${dial(458,57,29,gold,-25)}${text(351,166,'cabal ṁ',15,c)}`;
      case 'heatengine': return `${reservoir(251,40,warm,'Q calenta')}${arrow(362,76,400,76,gold,6)}${gear(444,102,30,c)}${arrow(443,138,443,174,blue,4)}${text(464,187,'W',16,c)}`;
      case 'heatflow': return `${reservoir(259,38,warm,'Q calenta')}${arrow(374,73,410,73,gold,5)}${gear(450,85,25,c)}${arrow(451,119,451,151,blue,5)}${text(463,170,'Q freda',14,ink)}`;
      case 'carnot': return `${thermo(305,137,warm,true)}${thermo(458,137,blue,false)}${arrow(343,118,419,118,c,5)}${text(302,32,'T calenta',14,warm)}${text(456,32,'T freda',14,blue)}${text(382,160,'η màx',17,c)}`;
      case 'kelvin': return `${thermo(310,138,warm,false)}${arrow(355,114,414,114,c,5)}${thermo(456,138,c,true)}${text(307,29,'°C',20,warm)}${text(456,29,'K',20,c)}`;
      default: return gear(375,110,50,c);
    }
  }

  function illustration(entry,index){
    const [scene,symbol,sub,note,description]=entry;
    const [accent,soft,dark]=palette[Math.floor(index/4)];
    const tag=symbol.length>12?24:symbol.length>7?29:34;
    const id=`fart-${index}`;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 205" role="img" aria-labelledby="${id}-title ${id}-desc">
      <title id="${id}-title">${description}</title><desc id="${id}-desc">Il·lustració pròpia de ${sub.toLowerCase()}, relacionada amb la fórmula del requadre.</desc>
      <defs>
        <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f9fdff"/><stop offset=".65" stop-color="${soft}"/><stop offset="1" stop-color="#fff"/></linearGradient>
        <linearGradient id="shine-${id}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
        <pattern id="dots-${id}" width="21" height="21" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.25" fill="${accent}" opacity=".15"/></pattern>
        <filter id="tinyshadow" x="-30%" y="-40%" width="170%" height="180%"><feDropShadow dx="1" dy="4" stdDeviation="3" flood-color="#345e84" flood-opacity=".17"/></filter>
      </defs>
      <rect width="520" height="205" rx="16" fill="url(#bg-${id})"/>
      <rect width="520" height="205" rx="16" fill="url(#dots-${id})"/>
      <circle cx="462" cy="-12" r="92" fill="${accent}" opacity=".08"/><circle cx="15" cy="217" r="110" fill="${accent}" opacity=".08"/>
      <path d="M5 3h510l-202 196H5z" fill="url(#shine-${id})" opacity=".35"/>
      <rect x="18" y="18" width="174" height="169" rx="16" fill="#ffffffb8" stroke="${accent}" stroke-opacity=".18" stroke-width="2"/>
      <rect x="30" y="29" width="113" height="24" rx="12" fill="${soft}"/>
      ${text(86,46,'VISUALITZA',11,dark,900)}
      ${text(105,115,symbol,tag,dark,900)}
      ${text(105,151,sub,12,'#527189',750)}
      <path d="M209 24V181" stroke="${accent}" stroke-opacity=".2" stroke-width="2" stroke-dasharray="4 6"/>
      ${drawing(scene,accent)}
      <rect x="224" y="9" width="8" height="8" rx="2" fill="${accent}" opacity=".5"/>
    </svg>`;
    const figure=document.createElement('figure');
    figure.className='formula-art';
    figure.innerHTML=svg;
    return figure;
  }

  const style=document.createElement('style');
  style.textContent=`
    .formula-art{display:block;margin:13px 0 14px;border:1.5px solid #bad8e9;border-radius:16px;overflow:hidden;background:#eef8ff;box-shadow:0 6px 15px #356b9411;transition:transform .25s ease,box-shadow .25s ease}
    .formula-art svg{display:block;width:100%;height:auto;max-height:220px}
    .formula-card:hover .formula-art{transform:translateY(-2px);box-shadow:0 12px 22px #356b9422}
    @media(prefers-reduced-motion:reduce){.formula-art{transition:none}.formula-card:hover .formula-art{transform:none}}
  `;
  document.head.appendChild(style);
  const cards=Array.from(document.querySelectorAll('article.formula-card'));
  cards.forEach((card,index)=>{
    if(!entries[index])return;
    const formula=card.querySelector('.formula');
    if(formula)formula.insertAdjacentElement('afterend',illustration(entries[index],index));
  });
})();
