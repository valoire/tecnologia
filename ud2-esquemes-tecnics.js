/* UD2 · esquemes tècnics originals que acompanyen la teoria, un per apartat. */
(function(){
'use strict';
const NS='http://www.w3.org/2000/svg';
function E(parent,tag,attrs={},content){
 const el=document.createElementNS(NS,tag);
 Object.entries(attrs).forEach(([name,val])=>el.setAttribute(name,String(val)));
 if(content!==undefined)el.textContent=content;
 parent.append(el);return el;
}
function txt(s,x,y,content,size=19,color='#643577',weight=700,anchor='start'){
 return E(s,'text',{x,y,'font-size':size,'font-weight':weight,fill:color,'text-anchor':anchor,'font-family':'Arial, Helvetica, sans-serif'},content);
}
function box(s,x,y,w,h,fill='#fff',border='#e8c1de',r=17){
 return E(s,'rect',{x,y,width:w,height:h,rx:r,fill,stroke:border,'stroke-width':2.4});
}
function arrow(s,x1,y1,x2,y2,color='#a255a4',width=4){
 E(s,'path',{d:'M '+x1+' '+y1+' L '+x2+' '+y2,fill:'none',stroke:color,'stroke-width':width,'stroke-linecap':'round'});
 const a=Math.atan2(y2-y1,x2-x1),b=11;
 E(s,'path',{d:'M '+x2+' '+y2+' L '+(x2-b*Math.cos(a-.48))+' '+(y2-b*Math.sin(a-.48))+' L '+(x2-b*Math.cos(a+.48))+' '+(y2-b*Math.sin(a+.48))+' Z',fill:color});
}
function centerBox(s,x,y,w,h,title,sub,fill,stroke){
 box(s,x,y,w,h,fill,stroke);
 txt(s,x+w/2,y+33,title,21,'#682b80',850,'middle');
 if(sub)txt(s,x+w/2,y+63,sub,14,'#75537c',650,'middle');
}
function diagram(i){
 const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 960 335');svg.setAttribute('role','img');
 const names=[
 'Triangle de la sostenibilitat: relació entre dimensions ambiental, social i econòmica.',
 'Agenda 2030: els sis ODS més relacionats amb tecnologia, i els indicadors.',
 'Mina a cel obert: mena i ganga, extracció, transformació i restauració.',
 'Rendiment energètic: exemple de 100 J que produeix 80 J útils i 20 J dissipats.',
 'Tractaments de l’aigua: potabilització per al consum i depuració per al retorn.',
 'Mobilitat urbana: espai per a vianants, bicicleta i transport col·lectiu, i criteris.',
 'Economia lineal i circular: extracció, fabricació, ús, reparació, reutilització i reciclatge.'
 ];svg.setAttribute('aria-label',names[i]);
 box(svg,5,5,950,325,'#fffdfa','#efd2e8',22);
 if(i===0){
  txt(svg,42,43,'LES TRES DIMENSIONS',20,'#a24786',900);
  E(svg,'circle',{cx:386,cy:144,r:103,fill:'#ffb95a',opacity:.59,stroke:'#e38c1f','stroke-width':2});
  E(svg,'circle',{cx:550,cy:144,r:103,fill:'#e89fe1',opacity:.54,stroke:'#c348a9','stroke-width':2});
  E(svg,'circle',{cx:468,cy:240,r:92,fill:'#9bcbd6',opacity:.57,stroke:'#3d9ab1','stroke-width':2});
  txt(svg,326,110,'AMBIENTAL',17,'#783c0a',850);
  txt(svg,564,111,'SOCIAL',17,'#743c77',850);
  txt(svg,467,287,'ECONÒMICA',17,'#2e5765',850,'middle');
  box(svg,410,143,118,48,'#fff','#a55caf',13);txt(svg,469,172,'EQUILIBRI',17,'#70278e',900,'middle');
  txt(svg,50,118,'Recursos',17,'#7d526c',750);txt(svg,50,144,'Emissions',17,'#7d526c',750);
  txt(svg,775,118,'Seguretat',17,'#7d526c',750);txt(svg,775,144,'Accés',17,'#7d526c',750);
  txt(svg,471,326,'Cost, durabilitat i manteniment',15,'#775e7d',600,'middle');
 }else if(i===1){
  txt(svg,35,43,'DE L’AGENDA 2030 A LES ACCIONS TECNOLÒGIQUES',20,'#9c4388',900);
  const badges=[['06','Aigua','#25bde1'],['07','Energia','#f5ba22'],['09','Indústria','#f28c40'],['11','Ciutats','#eb9c27'],['12','Consum','#bd8a31'],['13','Clima','#399a5f']];
  badges.forEach((item,j)=>{
   const x=35+(j%3)*310,y=67+Math.floor(j/3)*97;
   box(svg,x,y,285,78,'#fff','#eacfe6',12);
   box(svg,x+9,y+11,56,56,item[2],item[2],9);
   txt(svg,x+37,y+48,item[0],23,'#fff',900,'middle');
   txt(svg,x+80,y+46,item[1],20,'#703080',800);
  });
  arrow(svg,250,294,702,294,'#d45d9e',4);
  txt(svg,195,284,'OBJECTIUS',13,'#9e5b83',850,'middle');
  txt(svg,480,284,'ACTUACIONS',13,'#9e5b83',850,'middle');
  txt(svg,762,284,'INDICADORS',13,'#9e5b83',850,'middle');
 }else if(i===2){
  txt(svg,34,40,'PROCÉS EXTRACTIU I CONTROL AMBIENTAL',20,'#a05b78',900);
  E(svg,'path',{d:'M 30 95 L 105 95 L 145 126 L 200 126 L 238 153 L 285 153 L 329 180 L 360 180 L 360 262 L 30 262 Z',fill:'#e9d5bc',stroke:'#aa8866','stroke-width':2.5});
  for(let j=0;j<4;j++)E(svg,'path',{d:'M '+(40+j*55)+' '+(105+j*30)+' L '+(108+j*55)+' '+(105+j*30),stroke:'#b99a7a','stroke-width':7,'stroke-linecap':'round'});
  E(svg,'path',{d:'M 63 220 L 155 188 L 240 225 L 330 203',stroke:'#d9763d','stroke-width':19,'stroke-linecap':'round',fill:'none'});
  txt(svg,58,287,'Mina a cel obert',16,'#795335',850);
  txt(svg,186,208,'MENA',15,'#fff',900,'middle');
  txt(svg,300,248,'Ganga',15,'#775e4d',700);
  arrow(svg,380,175,430,175,'#e3943e');
  centerBox(svg,440,109,212,126,'Preparació','Separació i tractament','#fff3e1','#efb783');
  arrow(svg,665,175,707,175,'#e3943e');
  centerBox(svg,717,109,206,126,'Components','Materials útils','#f5ebff','#caabe4');
  box(svg,441,262,477,52,'#eff9f2','#a1d6b2',10);
  txt(svg,679,294,'Prevenció · Gestió de residus · Restauració',16,'#2d7759',800,'middle');
 }else if(i===3){
  txt(svg,37,45,'BALANÇ D’ENERGIA EN UNA MÀQUINA (EXEMPLE)',20,'#a34380',900);
  centerBox(svg,44,113,198,97,'100 J','Energia aportada','#fff0d8','#f0a659');
  arrow(svg,246,162,372,162,'#c96f39',9);
  box(svg,380,79,160,172,'#f7f0ff','#bc94df',16);txt(svg,460,148,'MÀQUINA',22,'#7d339c',900,'middle');txt(svg,460,181,'η = 80 %',20,'#7d339c',850,'middle');
  arrow(svg,550,132,632,132,'#31a4a4',14);
  arrow(svg,550,214,632,214,'#e98b57',8);
  centerBox(svg,650,80,257,96,'80 J útils','Resultat que busquem','#e5f8f1','#6ac5a3');
  centerBox(svg,650,189,257,93,'20 J dissipats','Energia transferida','#fff0e6','#eeae8d');
  txt(svg,476,318,'η = E útil / E entrada = 80 / 100 = 0,80 = 80 %',18,'#7b4b82',800,'middle');
 }else if(i===4){
  txt(svg,35,42,'DOS CIRCUITS DE TRACTAMENT: OBJECTIUS DIFERENTS',20,'#a14a83',900);
  txt(svg,39,85,'AIGUA PER A CONSUM',15,'#277d9b',850);
  const top=[['Captació','Riu o embassament'],['Coagulació','Separació de partícules'],['Filtració','Retenció d’impureses'],['Desinfecció','Control microbiològic']];
  top.forEach(([a,b],j)=>{
   const x=24+j*236;
   centerBox(svg,x,107,212,84,a,b,j%2?'#e8f5ff':'#effbff','#9ccedc');
   if(j<3)arrow(svg,x+213,149,x+232,149,'#2c9ebc',3);
  });
  txt(svg,39,231,'AIGUA RESIDUAL',15,'#9d5785',850);
  const bot=[['Recollida','Xarxa de clavegueram'],['Pretractament','Sòlids grossos'],['Tractament biològic','Matèria orgànica'],['Retorn','Amb control de qualitat']];
  bot.forEach(([a,b],j)=>{
   const x=24+j*236;
   centerBox(svg,x,251,212,65,a,b,j%2?'#fff0fb':'#fff7ee','#d3aed5');
   if(j<3)arrow(svg,x+214,283,x+231,283,'#c35ca4',3);
  });
 }else if(i===5){
  txt(svg,38,42,'MOBILITAT: DISSENYAR L’ESPAI PER A DIFERENTS USUARIS',20,'#9f467d',900);
  const lanes=[['Vianants','#fff3d8',20,210],['Bicicletes','#e5faf4',251,205],['Transport públic','#e5efff',477,230],['Altres vehicles','#f8eafa',728,210]];
  lanes.forEach(([title,fill,x,w],j)=>{
   box(svg,x,82,w,150,fill,['#eeb963','#7cc2a8','#95b6df','#cdace0'][j],13);
   txt(svg,x+w/2,112,title,17,'#652c7a',800,'middle');
   if(j===0){
    E(svg,'circle',{cx:x+102,cy:150,r:11,fill:'#d98836'});
    E(svg,'path',{d:'M '+(x+102)+' 164 l -12 31 M '+(x+102)+' 164 l 14 30 M '+(x+102)+' 170 l -18 12 M '+(x+102)+' 170 l 18 9',stroke:'#a86730','stroke-width':5,fill:'none','stroke-linecap':'round'});
   }else if(j===1){
    [x+63,x+143].forEach(cx=>E(svg,'circle',{cx,cy:185,r:27,fill:'none',stroke:'#1d987d','stroke-width':5}));
    E(svg,'path',{d:'M '+(x+63)+' 185 L '+(x+106)+' 140 L '+(x+143)+' 185 L '+(x+91)+' 185 Z',fill:'none',stroke:'#1d987d','stroke-width':5});
   }else if(j===2){
    box(svg,x+44,147,145,59,'#5b8cb9','#3c759f',10);
    for(let w=0;w<3;w++)box(svg,x+57+w*39,157,30,22,'#edf8ff','#c3dbef',4);
    [x+81,x+167].forEach(cx=>E(svg,'circle',{cx,cy:210,r:9,fill:'#344c76'}));
   }else{
    box(svg,x+44,161,128,42,'#a97dba','#8f5ca4',9);
    [x+71,x+146].forEach(cx=>E(svg,'circle',{cx,cy:206,r:10,fill:'#594d6c'}));
   }
  });
  box(svg,25,263,910,48,'#fff','#e6cae3',10);
  txt(svg,480,292,'Per comparar opcions: energia · soroll · accessibilitat · seguretat · ocupació',17,'#734e7c',770,'middle');
 }else if(i===6){
  txt(svg,37,41,'DE L’ECONOMIA LINEAL A UN DISSENY CIRCULAR',20,'#a14f80',900);
  txt(svg,50,94,'LINEAL',18,'#b06843',900);
  ['Extreure','Fabricar','Usar','Llençar'].forEach((name,j)=>{
   const x=169+j*181;box(svg,x,62,148,66,'#fff2e7','#efbb8e',12);txt(svg,x+74,100,name,16,'#a65d2a',850,'middle');
   if(j<3)arrow(svg,x+152,95,x+179,95,'#ce895e',3);
  });
  txt(svg,50,197,'CIRCULAR',18,'#7a40a6',900);
  [['Dissenyar',157],['Utilitzar',345],['Reparar',533],['Reutilitzar',721]].forEach(([name,x],j)=>{
   box(svg,x,164,165,74,['#fff0db','#e9f9f1','#f7e8ff','#e7f1ff'][j],['#efbb89','#8bcaa8','#c2a4e4','#abcce3'][j],14);
   txt(svg,x+82,208,name,17,'#703880',850,'middle');
   if(j<3)arrow(svg,x+168,201,x+185,201,'#a46bba',3);
  });
  E(svg,'path',{d:'M 809 241 L 809 276 L 234 276 L 234 241',fill:'none',stroke:'#a96cc3','stroke-width':3,'stroke-dasharray':'8 6'});
  arrow(svg,234,276,234,242,'#a96cc3',3);
  txt(svg,520,306,'Allargar la vida útil; reciclar quan ja no podem conservar el producte',16,'#81558d',760,'middle');
 }
 return {svg,caption:names[i]};
}
function setup(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const figs=[...document.querySelectorAll('.ud2-solid-panel .ud2-solid-diagram')];
 if(figs.length!==7)return;
 figs.forEach((fig,i)=>{
  const fresh=diagram(i);
  fig.replaceChildren(fresh.svg);
  const caption=document.createElement('figcaption');caption.textContent='Esquema tècnic original · '+fresh.caption;fig.append(caption);
  fig.classList.add('ud2-detailed-diagram');
 });
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();setup()};
})();