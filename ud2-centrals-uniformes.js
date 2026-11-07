/* Esquemes tècnics de centrals elèctriques, originals i íntegrament en català. */
(function(){
 'use strict';
 const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
 const line=(d,color='#66849a',w=7,extra='')=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
 const label=(x,y,s,size=17,anchor='middle',weight=750,color='#563c61')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`;
 const rect=(x,y,w,h,fill='#fff',edge='#b8a9c1',r=13)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${edge}" stroke-width="3"/>`;
 const dot=(x,y,r,fill,edge='#fff')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${edge}" stroke-width="3"/>`;
 const hot=d=>line(d,'#e57547',9,'marker-end="url(#orange-arr)"');
 const cold=d=>line(d,'#3f9fc9',9,'marker-end="url(#blue-arr)"');
 const shaft=d=>line(d,'#8261a4',9);
 const electric=d=>line(d,'#d5a83c',6,'marker-end="url(#gold-arr)"');
 function turbine(cx,cy,name='TURBINA'){
  let s=rect(cx-68,cy-66,136,125,'#e7f0f4','#7497ac',14);
  s+=dot(cx,cy-5,45,'#f8fcfe','#688ba3');
  for(let i=0;i<6;i++)s+=`<path d="M ${cx} ${cy-5} l 11 -37 q 25 15 3 38 Z" fill="#71a3bb" transform="rotate(${i*60} ${cx} ${cy-5})"/>`;
  s+=dot(cx,cy-5,10,'#fff','#52778e');
  return s+label(cx,cy+88,name,18);
 }
 function alternator(cx,cy){
  return rect(cx-65,cy-61,130,115,'#fff1d7','#d2ad68',18)+dot(cx,cy-4,38,'#fff','#c6a35f')+label(cx,cy+5,'G',31,'middle',900,'#a27e3b')+label(cx,cy+85,'ALTERNADOR',17);
 }
 function transformer(cx,cy){
  return rect(cx-51,cy-51,102,100,'#f1eafd','#aa8bca',13)+line(`M ${cx-29} ${cy-25} q 23 -22 23 0 t 23 0 t 23 0`,'#8a69b1',5)+line(`M ${cx-29} ${cy+15} q 23 -22 23 0 t 23 0 t 23 0`,'#8a69b1',5)+label(cx,cy+76,'TRANSFORMADOR',16);
 }
 function steamBoiler(cx,cy,name='CALDERA'){
  let s=rect(cx-83,cy-90,166,181,'#fff0de','#c98c65',20);
  s+=line(`M ${cx-53} ${cy-51} v 104 q 20 19 39 0 v -102 q 21 -20 40 0 v 102 q 20 19 39 0 v -102`,'#d88c53',8);
  s+=label(cx,cy-106,name,19);
  return s;
 }
 function condenser(cx,cy){
  return rect(cx-80,cy-48,160,96,'#e5f4fb','#6fa8c0',16)+line(`M ${cx-62} ${cy-18} q 25 -20 50 0 t 50 0`,'#57a4c9',5)+line(`M ${cx-62} ${cy+17} q 25 -20 50 0 t 50 0`,'#57a4c9',5)+label(cx,cy+73,'CONDENSADOR',16);
 }
 function pump(cx,cy){return dot(cx,cy,24,'#e5f4fb','#65a0be')+label(cx,cy+6,'P',19)+label(cx,cy+47,'BOMBA',14);}
 function hydro(){
  let s=`<path d="M 16 202 Q 86 188 160 202 T 296 202 V 449 H 16 Z" fill="#87c9e6" opacity=".65"/>`;
  s+=`<path d="M 275 145 H 335 L 355 449 H 283 Z" fill="#c3c7cb" stroke="#778798" stroke-width="4"/>`;
  s+=label(145,165,'EMBASSAMENT',20)+label(307,131,'PRESA',18);
  s+=cold('M 328 250 H 404 V 339 H 478')+label(413,229,'CANONADA FORÇADA',17);
  s+=turbine(533,360,'TURBINA HIDRÀULICA');
  s+=shaft('M 601 353 H 702')+alternator(770,356);
  s+=electric('M 835 356 H 898')+transformer(955,356);
  s+=line('M 533 421 V 453 H 362','#3f9fc9',9)+label(451,491,'RETORN DE L’AIGUA AL RIU',15);
  s+=electric('M 1007 350 H 1082')+label(1040,322,'XARXA',14);
  return s;
 }
 function thermal(){
  let s=rect(22,316,116,90,'#f8e4cc','#c59c70',13)+label(80,348,'GAS',20)+label(80,373,'NATURAL',17);
  s+=hot('M 138 355 H 197')+steamBoiler(283,289,'CALDERA / COMBUSTIÓ');
  s+=line('M 210 202 H 140 V 87','#9c9fa4',12)+rect(121,45,39,107,'#e1e2e4','#acadb0',5)+label(153,31,'XEMENEIA',15);
  s+=hot('M 284 196 V 115 H 553')+label(429,93,'VAPOR A PRESSIÓ',18);
  s+=turbine(626,170,'TURBINA DE VAPOR')+shaft('M 693 165 H 756')+alternator(824,171);
  s+=electric('M 890 170 H 1018')+label(1019,143,'XARXA',17);
  s+=cold('M 625 235 V 328')+condenser(626,375);
  s+=cold('M 546 412 H 389')+pump(367,412)+cold('M 341 412 H 284 V 384');
  s+=label(488,473,'AIGUA LÍQUIDA (RETORN A LA CALDERA)',15);
  s+=rect(864,337,195,81,'#e7f6fa','#7db7ce',12)+label(961,369,'REFRIGERACIÓ',16)+label(961,394,'Aigua freda / calenta',14);
  s+=cold('M 865 355 H 721 V 355')+line('M 708 395 H 864','#e57547',7,'marker-end="url(#orange-arr)"');
  return s;
 }
 function nuclear(){
  let s=`<path d="M 42 332 V 175 Q 42 72 170 72 Q 300 72 300 175 V 332 Z" fill="#f1eafd" stroke="#b3a3cd" stroke-width="4"/>`;
  s+=rect(92,176,132,135,'#e0ddef','#897bab',22);
  for(let x=124;x<203;x+=26)s+=line(`M ${x} 197 V 264`,'#8674a8',8);
  s+=label(159,344,'REACTOR',20)+label(157,370,'FISSIÓ DE L’URANI',15);
  s+=steamBoiler(423,228,'GENERADOR DE VAPOR');
  s+=hot('M 226 196 H 339 V 178')+label(283,151,'CIRCUIT PRIMARI',14);
  s+=cold('M 343 288 H 232 V 282');
  s+=hot('M 424 137 V 90 H 623')+label(542,72,'CIRCUIT SECUNDARI · VAPOR',15);
  s+=turbine(691,156,'TURBINA DE VAPOR')+shaft('M 759 151 H 805')+alternator(875,156);
  s+=electric('M 940 151 H 1078')+label(1015,123,'XARXA',17);
  s+=cold('M 690 221 V 310')+condenser(692,358);
  s+=cold('M 611 395 H 497')+pump(476,395)+cold('M 451 395 H 425 V 323');
  s+=rect(837,323,233,98,'#e7f6fa','#80b9cf',13)+label(951,354,'CIRCUIT DE',16)+label(951,380,'REFRIGERACIÓ',16);
  s+=cold('M 840 340 H 775')+line('M 773 389 H 839','#e57547',8,'marker-end="url(#orange-arr)"');
  return s;
 }
 const schemes={hydro:{name:'Central hidroelèctrica',draw:hydro,desc:'L’aigua de l’embassament fa girar la turbina. No hi ha caldera ni vapor.'},thermal:{name:'Central tèrmica de vapor',draw:thermal,desc:'El combustible escalfa la caldera; el vapor mou la turbina i es condensa per tornar a la caldera.'},nuclear:{name:'Central nuclear d’aigua a pressió',draw:nuclear,desc:'El reactor escalfa un circuit primari separat del vapor del secundari. El condensador recupera l’aigua.'}};
 function figure(kind){
  const item=schemes[kind];
  const el=document.createElement('figure');el.className='ud2-plant-machine-diagram ud2-uniform-plant';
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 1100 520');svg.setAttribute('role','img');
  svg.setAttribute('aria-label','Esquema tècnic en català: '+item.name);
  const defs=`<defs><marker id="orange-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#e57547"/></marker><marker id="blue-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#3f9fc9"/></marker><marker id="gold-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#d5a83c"/></marker></defs>`;
  svg.innerHTML=defs+rect(5,5,1090,509,'#fffcf8','#ead4e7',20)+label(35,47,item.name.toUpperCase(),24,'start',900,'#783987')+item.draw();
  const caption=document.createElement('figcaption');caption.textContent=item.desc+' Llegenda: taronja = calor o vapor calent · blau = aigua · lila = eix mecànic · groc = electricitat.';
  el.append(svg,caption);return el;
 }
 function start(){
  if(new URLSearchParams(location.search).get('ud')!=='2')return;
  Object.keys(schemes).forEach(kind=>{
   const card=document.querySelector('.ud2-plant-card.'+kind);
   const old=card?.querySelector('.ud2-plant-machine-diagram, .ud2-plant-flow');
   if(old)old.replaceWith(figure(kind));
  });
 }
 const before=window.preparaUnitatVisual;
 if(typeof before==='function')window.preparaUnitatVisual=function(){before();start();};
})();
