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
function largeView(src,title){
 const layer=el('div','ud2-real-lightbox');
 layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-label','Imatge ampliada: '+title);
 const shell=el('div','ud2-real-lightbox-panel');
 const bar=el('div','ud2-real-lightbox-bar');
 bar.append(el('strong','',title));
 const close=el('button','ud2-real-lightbox-close','Tancar ×');
 close.type='button';bar.append(close);shell.append(bar);
 const body=el('div','ud2-real-lightbox-scroll');
 const img=el('img');img.src=src;img.alt=title;body.append(img);
 shell.append(body);layer.append(shell);document.body.append(layer);
 const oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
 const escape=e=>{if(e.key==='Escape')end();};
 function end(){layer.remove();document.body.style.overflow=oldOverflow;document.removeEventListener('keydown',escape);}
 close.addEventListener('click',end);
 layer.addEventListener('click',e=>{if(e.target===layer)end();});
 document.addEventListener('keydown',escape);
 close.focus();
}
function graphic(figure,image,title,items,note,alt,dark){
 figure.replaceChildren();
 figure.classList.add('ud2-realistic-figure');
 if(dark)figure.classList.add('ud2-realistic-earth');
 figure.append(el('h4','ud2-realistic-title',title));
 const holder=el('div','ud2-realistic-art');
 const photo=el('img');
 photo.src=image;photo.alt=alt;photo.loading='lazy';photo.decoding='async';
 holder.append(photo);figure.append(holder);
 const caption=el('figcaption','ud2-realistic-caption');
 const pills=el('div','ud2-realistic-legend');
 items.forEach((t,i)=>{const p=el('div','ud2-realistic-legend-item');p.append(el('span','ud2-realistic-key',''+(i+1)),el('span','',t));pills.append(p);});
 caption.append(pills,el('p','ud2-realistic-note',note));
 const zoom=el('button','ud2-realistic-zoom','Ampliar la il·lustració');
 zoom.type='button';zoom.addEventListener('click',()=>largeView(image,title));caption.append(zoom);
 figure.append(caption);
}
function plant(kind,image,title,items,alt){
 const figure=document.querySelector('.ud2-topic-redesign .ud2-plant-card.'+kind+' .ud2-plant-full-scheme');
 if(!figure)return;
 figure.classList.add('ud2-realistic-figure','ud2-realistic-power');
 figure.replaceChildren();
 figure.append(el('h5','ud2-realistic-title',title));
 const holder=el('div','ud2-realistic-art');
 const photo=el('img');photo.src=image;photo.alt=alt;photo.loading='lazy';photo.decoding='async';
 holder.append(photo);figure.append(holder);
 const caption=el('figcaption','ud2-realistic-caption');
 caption.append(el('p','ud2-realistic-note','Vista interior il·lustrada per entendre les peces principals; no és un plànol constructiu ni està a escala.'));
 const parts=el('ol','ud2-realistic-parts');items.forEach(t=>parts.append(el('li','',t)));caption.append(parts);
 const zoom=el('button','ud2-realistic-zoom','Ampliar la il·lustració');
 zoom.type='button';zoom.addEventListener('click',()=>largeView(image,title));caption.append(zoom);
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
 ],'Els jaciments aprofitables són a l’escorça, no al nucli. Il·lustració conceptual, no a escala.','Secció de la Terra amb escorça prima, mantell, nucli extern i nucli intern representats amb textures realistes',true);
 const mine=root.querySelector('.ud2-crust-figure');
 if(mine)graphic(mine,imgs.mine,'Un filó mineral dins de l’escorça',[
 'FILÓ · zona de roca que conté una concentració de minerals.',
 'MENA · minerals dels quals volem obtenir el metall útil.',
 'GANGA · minerals sense interès en aquella extracció que acompanyen la mena.'
 ],'La mena i la ganga acostumen a estar barrejades dins de la roca mineralitzada; no són capes separades. La mina arriba fins al filó.','Secció realista de capes de roca, una mina subterrània i un filó de minerals de coure travessant l’escorça',false);
 plant('thermal',imgs.thermal,'Central tèrmica de cicle combinat · vista interior',[
 'Entrada de gas natural i turbina de gas','Caldera de recuperació: aprofita la calor','Turbina de vapor i alternador','Condensador, refrigeració i xarxa elèctrica'
 ],'Vista tècnica realista de turbina de gas, caldera de recuperació, turbina de vapor, alternador i refrigeració');
 plant('nuclear',imgs.nuclear,'Central nuclear · vista interior',[
 'Reactor: la fissió escalfa el circuit primari','Generador de vapor: cedeix calor al circuit secundari','Turbina i alternador: produeixen electricitat','Condensador i circuit de refrigeració'
 ],'Vista tècnica realista de reactor nuclear, generador de vapor, turbina, alternador, condensador i torre de refrigeració');
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();install();};
})();
