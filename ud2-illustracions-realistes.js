/* UD2: il·lustracions realistes i llegibles al mòbil. */
(function(){
'use strict';
const imgs=window.ud2IllustracionsRealistes;
if(!imgs)return;

function el(tag,cls,content){
 const n=document.createElement(tag);if(cls)n.className=cls;
 if(content!==undefined)n.textContent=content;
 return n;
}
function addPins(holder,pins){
 (pins||[]).forEach((p,i)=>{
  const mark=el('span','ud2-real-pin',String(i+1));
  mark.style.left=p[0]+'%';mark.style.top=p[1]+'%';
  mark.title=p[2];mark.setAttribute('role','img');mark.setAttribute('aria-label',(i+1)+'. '+p[2]);
  holder.append(mark);
 });
}
function largeView(src,title,pins){
 const layer=el('div','ud2-real-lightbox');
 layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-label','Imatge ampliada: '+title);
 const shell=el('div','ud2-real-lightbox-panel');
 const bar=el('div','ud2-real-lightbox-bar');
 bar.append(el('strong','',title));
 const close=el('button','ud2-real-lightbox-close','Tancar ×');
 close.type='button';bar.append(close);shell.append(bar);
 const body=el('div','ud2-real-lightbox-scroll');
 const stage=el('div','ud2-real-large-stage');
 const img=el('img');img.src=src;img.alt=title;stage.append(img);addPins(stage,pins);body.append(stage);
 shell.append(body);layer.append(shell);document.body.append(layer);
 const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const escape=e=>{if(e.key==='Escape')end();};
 function end(){layer.remove();document.body.style.overflow=oldOverflow;document.removeEventListener('keydown',escape);}
 close.addEventListener('click',end);
 layer.addEventListener('click',e=>{if(e.target===layer)end();});
 document.addEventListener('keydown',escape);
 close.focus();
}
function graphic(figure,image,title,items,note,alt,dark,pins){
 figure.replaceChildren();
 figure.classList.add('ud2-realistic-figure');
 if(dark)figure.classList.add('ud2-realistic-earth');
 figure.append(el('h4','ud2-realistic-title',title));
 const holder=el('div','ud2-realistic-art');
 const photo=el('img');
 photo.src=image;photo.alt=alt;photo.loading='lazy';photo.decoding='async';
 holder.append(photo);addPins(holder,pins);figure.append(holder);
 const caption=el('figcaption','ud2-realistic-caption');
 const pills=el('div','ud2-realistic-legend');
 items.forEach((t,i)=>{const p=el('div','ud2-realistic-legend-item');p.append(el('span','ud2-realistic-key',''+(i+1)),el('span','',t));pills.append(p);});
 caption.append(pills,el('p','ud2-realistic-note',note));
 const zoom=el('button','ud2-realistic-zoom','Ampliar la il·lustració');
 zoom.type='button';zoom.addEventListener('click',()=>largeView(image,title,pins));caption.append(zoom);
 figure.append(caption);
}
function plant(kind,image,title,items,alt,pins){
 const figure=document.querySelector('.ud2-topic-redesign .ud2-plant-card.'+kind+' .ud2-plant-full-scheme');
 if(!figure)return;
 figure.classList.add('ud2-realistic-figure','ud2-realistic-power');
 figure.replaceChildren();
 figure.append(el('h5','ud2-realistic-title',title));
 const holder=el('div','ud2-realistic-art');
 const photo=el('img');photo.src=image;photo.alt=alt;photo.loading='lazy';photo.decoding='async';
 holder.append(photo);addPins(holder,pins);figure.append(holder);
 const caption=el('figcaption','ud2-realistic-caption');
 caption.append(el('p','ud2-realistic-note','Vista interior il·lustrada per entendre les peces principals; no és un plànol constructiu ni està a escala.'));
 const parts=el('ol','ud2-realistic-parts');items.forEach(t=>parts.append(el('li','',t)));caption.append(parts);
 const zoom=el('button','ud2-realistic-zoom','Ampliar la il·lustració');
 zoom.type='button';zoom.addEventListener('click',()=>largeView(image,title,pins));caption.append(zoom);
 if(kind==='nuclear'){
  const link=el('a','ud2-realistic-source','Consultar també l’esquema tècnic de circuits');
  link.href='https://commons.wikimedia.org/wiki/File:PWR_Nuclear_Power_Plant_-_es.svg';link.target='_blank';link.rel='noopener noreferrer';caption.append(link);
 }
 figure.append(caption);
}
function install(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const root=document.querySelector('.ud2-topic-redesign');if(!root)return;
 const globe=root.querySelector('.ud2-geology-figure');
 if(globe)graphic(globe,imgs.earth,'Les capes de la Terra',[
 'ESCORÇA · capa exterior prima; és on hi ha les mines i els jaciments que explotem.',
 'MANTELL · roques molt calentes que es deformen lentament.',
 'NUCLI EXTERN · sobretot ferro i níquel en estat líquid.',
 'NUCLI INTERN · sobretot ferro i níquel en estat sòlid.'
 ],'Els jaciments aprofitables són a l’escorça, no al nucli. Il·lustració conceptual, no a escala.','Secció de la Terra amb escorça prima, mantell, nucli extern i nucli intern representats amb textures realistes',true,[[82,10,'Escorça'],[83,39,'Mantell'],[67,47,'Nucli extern'],[51,56,'Nucli intern']]);
 const mine=root.querySelector('.ud2-crust-figure');
 if(mine)graphic(mine,imgs.mine,'Un filó mineral dins de l’escorça',[
 'FILÓ · zona de roca que conté una concentració de minerals.',
 'MENA · minerals dels quals volem obtenir el metall útil.',
 'GANGA · minerals sense interès en aquella extracció que acompanyen la mena.'
 ],'La mena i la ganga acostumen a estar barrejades dins de la roca mineralitzada; no són capes separades. La mina arriba fins al filó.','Secció realista de capes de roca, una mina subterrània i un filó de minerals de coure travessant l’escorça',false,[[72,63,'Filó mineral'],[60,79,'Mena'],[84,80,'Ganga']]);
 plant('thermal',imgs.thermal,'Central tèrmica de cicle combinat · vista interior',[
 'Entrada de gas natural','Turbina de gas','Caldera de recuperació de calor','Turbina de vapor','Alternador','Condensador i refrigeració'
 ],'Vista tècnica realista de turbina de gas, caldera de recuperació, turbina de vapor, alternador i refrigeració',[[4,68,'Entrada de gas natural'],[25,61,'Turbina de gas'],[43,38,'Caldera de recuperació'],[62,57,'Turbina de vapor'],[76,60,'Alternador'],[70,82,'Condensador']]);
 plant('nuclear',imgs.nuclear,'Central nuclear · vista interior',[
 'Reactor: fissió i calor al circuit primari','Generador de vapor: circuit secundari','Turbina de vapor','Alternador: genera electricitat','Condensador','Torre de refrigeració'
 ],'Vista tècnica realista de reactor nuclear, generador de vapor, turbina, alternador, condensador i torre de refrigeració',[[19,57,'Reactor'],[33,53,'Generador de vapor'],[51,49,'Turbina'],[64,49,'Alternador'],[47,76,'Condensador'],[76,22,'Torre de refrigeració']]);
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();install();};
})();
