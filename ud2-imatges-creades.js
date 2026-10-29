/* UD2 · Set il·lustracions tècniques vectorials originals. */
(function(){
'use strict';
const ns='http://www.w3.org/2000/svg';
function v(parent,type,attrs,content){
 const el=document.createElementNS(ns,type);
 Object.entries(attrs||{}).forEach(([k,value])=>el.setAttribute(k,String(value)));
 if(content!==undefined)el.textContent=content;
 parent.append(el);return el;
}
function R(s,x,y,w,h,fill='#fff',edge='#e0c0dd',r=13){v(s,'rect',{x,y,width:w,height:h,rx:r,fill,stroke:edge,'stroke-width':2.5})}
function L(s,x,y,X,Y,c='#aa659d',w=4){v(s,'line',{x1:x,y1:y,x2:X,y2:Y,stroke:c,'stroke-width':w,'stroke-linecap':'round'})}
function T(s,x,y,content,size=20,color='#78348a',weight=800,anchor='start'){
 v(s,'text',{x,y,fill:color,'font-size':size,'font-weight':weight,'text-anchor':anchor,'font-family':'Arial, Helvetica, sans-serif'},content);
}
function P(s,d,fill='none',stroke='#a15d93',weight=3){v(s,'path',{d,fill,stroke,'stroke-width':weight,'stroke-linejoin':'round','stroke-linecap':'round'})}
function C(s,x,y,r,fill,edge='#fff'){v(s,'circle',{cx:x,cy:y,r,fill,stroke:edge,'stroke-width':2})}
function A(s,x,y,X,Y,col='#b058a1'){
 L(s,x,y,X,Y,col,4);
 const theta=Math.atan2(Y-y,X-x);
 P(s,'M '+(X-13*Math.cos(theta-.5))+' '+(Y-13*Math.sin(theta-.5))+' L '+X+' '+Y+' L '+(X-13*Math.cos(theta+.5))+' '+(Y-13*Math.sin(theta+.5)),'none',col,4);
}
function B(s,x,y,w,title,detail,fill='#fff6e8'){
 R(s,x,y,w,85,fill,'#e4bddc',13);
 T(s,x+17,y+31,title,19,'#76328b',900);
 T(s,x+17,y+61,detail,14,'#725474',650);
}
function lantern(s,x,y,mode){
 P(s,'M '+(x+25)+' '+(y+80)+' L '+(x+115)+' '+(y+22)+' L '+(x+205)+' '+(y+80),'#f1d5b6','#9a7691',5);
 R(s,x+44,y+82,144,175,'#fff5dc','#986f88',5);
 R(s,x+66,y+108,102,129,'#f8eaca','#c9a579',5);
 P(s,'M '+(x+65)+' '+(y+50)+' L '+(x+65)+' '+(y+10)+' Q '+(x+116)+' '+(y-32)+' '+(x+166)+' '+(y+10)+' L '+(x+166)+' '+(y+50),'none','#936a8a',4);
 C(s,x+117,y+182,22,'#f5bf44','#d99b33');
 if(mode==='nadal'){
  P(s,'M '+(x+112)+' '+(y+119)+' l -30 47 h 18 l -19 28 h 66 l -19 -28 h 18 Z','#3ba66a','#287d53',2);
  R(s,x+107,y+197,13,13,'#8b582f','#8b582f',1);
 }else{
  C(s,x+117,y+153,29,'#f4a13d','#c37724');
  P(s,'M '+(x+102)+' '+(y+150)+' l 8 6 l 8 -6 M '+(x+122)+' '+(y+150)+' l 8 6 l 8 -6 M '+(x+106)+' '+(y+168)+' q 11 9 22 0','none','#86552b',3);
 }
}
function make(i){
 const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 960 410');
 svg.setAttribute('role','img');
 const titles=[
  'Disseny modular: fanalet reutilitzable i decoració canviable.',
  'Tres exemples mesurables dels ODS 7, 12 i 13.',
  'Extracció minera, preparació de materials i restauració del terreny.',
  'Circuit de LED a 5 V amb resistència limitadora de corrent.',
  'Filtració de l’aigua: secció de filtres de sorra i grava.',
  'Exemple d’espai urbà repartit entre diferents formes de mobilitat.',
  'Economia circular: una carcassa reutilitzable per a diferents festes.'
 ];svg.setAttribute('aria-label',titles[i]);
 R(svg,2,2,956,406,'#fffdf9','#efcce6',20);
 if(i===0||i===6){
  T(svg,29,42,i===0?'REUTILITZACIÓ: MATEIXA CARCASSA, NOVA DECORACIÓ':'DISSENY PER REPARAR I REUTILITZAR',21,'#a04786',900);
  lantern(svg,38,69,'halloween');lantern(svg,654,69,'nadal');
  B(svg,294,128,367,i===0?'ESTRUCTURA CONSERVADA':'PRODUCTE MODULAR','Carcassa i circuit aprofitables');
  B(svg,294,233,367,'DECORACIÓ ADAPTABLE','Unions desmuntables i reparables','#f3eaff');
  A(svg,281,326,668,326);
  T(svg,480,377,'Dibuix conceptual: no representa el fanalet real de classe.',15,'#7d617d',730,'middle');
 }else if(i===1){
  T(svg,29,44,'DELS ODS A INDICADORS VERIFICABLES',22,'#a04786',900);
  const cards=[['ODS 7','Energia assequible','Consum mesurat en kWh','#f0b725'],['ODS 12','Consum responsable','Materials que reutilitzem','#bf9234'],['ODS 13','Acció pel clima','Emissions associades','#408f60']];
  cards.forEach(([no,name,detail,color],j)=>{
   const x=24+j*312;
   R(svg,x,87,287,229,'#fff','#e4c7e5',14);R(svg,x+18,102,77,77,color,color,10);
   T(svg,x+57,151,no,21,'#fff',900,'middle');
   T(svg,x+18,217,name,18,'#712e89',840);
   T(svg,x+18,255,detail,15,'#776178',680);
   R(svg,x+19,276,250,13,'#f2e8f2','none',6);
   R(svg,x+19,276,110+j*48,13,color,'none',6);
  });
  T(svg,480,368,'Exemple metodològic: mesurem dades i les comparem amb un punt de partida.',16,'#795a7e',740,'middle');
 }else if(i===2){
  T(svg,32,43,'DEL MINERAL AL MATERIAL · MINIMITZAR L’IMPACTE',21,'#9c4b7b',900);
  P(svg,'M 26 113 L 134 113 L 180 145 L 260 145 L 315 180 L 426 180 L 426 314 L 26 314 Z','#d8ba9d','#aa855f',3);
  P(svg,'M 65 241 L 178 215 L 266 263 L 379 233','none','#d47b47',18);
  T(svg,123,240,'MENA',18,'#fff',900);
  T(svg,291,292,'Ganga',16,'#785334',760);
  A(svg,439,207,487,207,'#cb8b42');
  B(svg,495,157,191,'PREPARACIÓ','Separar materials','#fff1df');
  A(svg,687,207,734,207,'#cb8b42');
  R(svg,740,144,192,176,'#e9f8ee','#9bcca8',15);
  T(svg,836,185,'RESTAURACIÓ',18,'#38855d',900,'middle');
  [785,833,881].forEach(x=>{L(svg,x,274,x,232,'#936d48',6);C(svg,x,218,26,'#65a773','#58a46d')});
  T(svg,481,374,'Protegir l’aigua, reduir la pols i recuperar el sòl.',17,'#765978',770,'middle');
 }else if(i===3){
  T(svg,29,44,'EXEMPLE: LED VERMELL A 5 V AMB RESISTÈNCIA',21,'#9e4d86',900);
  B(svg,28,100,191,'FONT 5 V','Alimentació de baixa tensió','#e7f4fe');
  L(svg,220,177,319,177,'#cd8934',6);
  P(svg,'M 319 177 l 18 -25 l 22 50 l 22 -50 l 22 50 l 22 -50 l 19 25','none','#d88736',6);
  L(svg,446,177,573,177,'#cd8934',6);
  C(svg,633,177,56,'#fff2c8','#d2a24d');
  P(svg,'M 602 148 L 657 177 L 602 205 Z','#eaa44b','#ad7932',3);
  L(svg,657,146,657,207,'#ae7d3a',5);
  A(svg,675,136,723,94,'#e7b943');A(svg,690,175,744,158,'#e7b943');
  T(svg,633,270,'LED',24,'#82622d',900,'middle');
  L(svg,688,177,821,177,'#cd8934',6);L(svg,821,177,821,315,'#cd8934',6);
  L(svg,821,315,217,315,'#cd8934',6);L(svg,217,315,217,214,'#cd8934',6);
  T(svg,388,132,'R = 150 Ω',19,'#b26424',900,'middle');
  T(svg,468,365,'I ≈ (5 V − 2 V) / 150 Ω ≈ 0,02 A (20 mA)',18,'#7a4480',850,'middle');
  T(svg,469,392,'Model orientatiu; comprovar característiques i polaritat del LED real.',13,'#82617e',670,'middle');
 }else if(i===4){
  T(svg,29,44,'FILTRACIÓ: UNA ETAPA, NO TOTA LA POTABILITZACIÓ',21,'#9a4e82',900);
  R(svg,39,81,364,286,'#eaf7fb','#9ecdda',16);
  P(svg,'M 91 137 Q 144 121 207 138 T 354 137 L 354 185 L 91 185 Z','#7bcbe1','#57bad4',2);
  R(svg,91,185,263,65,'#e6c99d','#b79b70',3);
  R(svg,91,252,263,73,'#b0b4b6','#8799a4',3);
  for(let j=0;j<12;j++)C(svg,112+(j%6)*45,204+Math.floor(j/6)*25,5,'#a98258','#a98258');
  for(let j=0;j<10;j++)C(svg,120+(j%5)*51,270+Math.floor(j/5)*30,11,'#83949c','#73838a');
  A(svg,223,86,223,124,'#2389c1');
  L(svg,223,327,223,352,'#288abb',7);
  R(svg,465,111,451,216,'#fff','#e2c5df',14);
  T(svg,489,155,'QUÈ PASSA AL FILTRE?',21,'#80358b',900);
  T(svg,489,200,'1. La sorra reté partícules.',18,'#5b4a60',690);
  T(svg,489,243,'2. La grava aguanta les capes.',18,'#5b4a60',690);
  T(svg,489,286,'3. Cal controlar la qualitat final.',18,'#5b4a60',690);
  T(svg,480,383,'Aigua transparent no significa necessàriament aigua potable.',17,'#a46019',900,'middle');
 }else if(i===5){
  T(svg,27,43,'LA MOBILITAT SEGONS LES NECESSITATS DE LES PERSONES',21,'#a04c85',900);
  const entries=[['🚶','Anar a peu','Distàncies properes','#fff4dd'],['🚲','Bicicleta','Camins segurs','#e8f9f0'],['🚊','Transport públic','Desplaçaments col·lectius','#e8eeff']];
  entries.forEach(([icon,title,detail,fill],j)=>{
   const x=26+j*314;R(svg,x,85,288,218,fill,'#e8c9e3',15);
   T(svg,x+144,164,icon,67,'#833c99',700,'middle');
   T(svg,x+144,224,title,21,'#79338c',900,'middle');
   T(svg,x+144,260,detail,16,'#7f6680',690,'middle');
  });
  R(svg,53,335,859,45,'#fff2d8','#efd0a4',9);
  T(svg,480,364,'Comparar temps, seguretat, accessibilitat i impactes.',18,'#a15923',800,'middle');
 }
 return {svg,caption:titles[i]};
}
function start(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const figures=[...document.querySelectorAll('.ud2-solid-panel .ud2-technical-figure')];
 if(figures.length!==7)return;
 figures.forEach((fig,i)=>{
  const result=make(i);fig.replaceChildren(result.svg);
  const caption=document.createElement('figcaption');
  caption.textContent='Il·lustració tècnica original · '+result.caption+' Dibuix conceptual, no fotografia del prototip real.';
  fig.append(caption);fig.classList.add('ud2-technical-original');
 });
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();start()};
})();