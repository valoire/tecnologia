/* Tecnologia Rovira · Fotografies contextuals retocades a la web.
   Fotografies lliures de Pexels: reencuadrament, color, contrast, ombrejat
   i anotacions didàctiques són originals de l'aula.
   Es carreguen sota demanda, sense recopilar dades de l'alumnat. */
(function(){
'use strict';
const C={
 plan:[6615196,'Dibuix de plànols amb llapis i regle'],
 blueprint:[4792483,'Plànol arquitectònic sobre una taula'],
 sketch:[6615190,'Esbós a mà amb eines de dibuix'],
 drawing:[13995387,'Dibuix tècnic i estris de traçat'],
 workshop:[19583512,'Taller amb impressora 3D'],
 printing:[31121842,'Impressora 3D treballant en un taller'],
 prototype:[7180484,'Prototip i treball de disseny'],
 machinery:[34222005,'Maquinària de producció en una fàbrica'],
 repair:[38264269,'Tècnic reparant un circuit electrònic'],
 meeting:[3184311,'Equip de treball prenent decisions'],
 conference:[8344905,'Taula de debat i cooperació entre persones'],
 collaboration:[7710139,'Persones treballant i debatent conjuntament'],
 nature:[7944399,'Planta jove sostinguda per unes mans'],
 restoration:[8543598,'Plantació i recuperació vegetal'],
 mining:[29506757,'Explotació minera a cel obert'],
 excavator:[35347743,'Excavadora treballant amb un braç hidràulic'],
 solar:[9875421,'Plaques solars sobre una teulada'],
 installer:[9875419,'Instal·lació de plaques fotovoltaiques'],
 wind:[32975425,'Aerogeneradors en un paisatge agrícola'],
 wind2:[9635533,'Molins de vent en un entorn natural'],
 hydro:[31462132,'Presa amb aigua circulant pel sobreeixidor'],
 geothermal:[14896194,'Aigua termal i vapor geotèrmic'],
 biomass:[6608001,'Troncs de fusta apilats, biomassa'],
 climate:[36898812,'Terra seca afectada per sequera'],
 faucet:[34158878,'Aixeta amb una gota d’aigua'],
 waterplant:[35425762,'Estació de tractament d’aigües vista des de l’aire'],
 waterlab:[8513379,'Anàlisi de mostres en un laboratori'],
 waterpipe:[17882783,'Canonades per transportar aigua'],
 bicycle:[16567159,'Mobilitat urbana amb bicicleta'],
 bikes:[14965512,'Bicicletes en un carrer de Barcelona'],
 tram:[18999121,'Via urbana amb transport col·lectiu'],
 sorting:[7114149,'Separació de residus per reciclar'],
 recycling:[4941852,'Recollida de plàstics per reciclar'],
 house:[9976121,'Habitatge contemporani amb grans finestres'],
 insulation:[5511085,'Edifici en construcció amb aïllament i finestres'],
 construction:[5493658,'Obra i treball de construcció'],
 breadboard:[11447064,'Circuit electrònic muntat sobre placa de proves'],
 wires:[15470540,'Muntatge real de cables i components electrònics'],
 circuits:[6636458,'Placa de circuit amb components'],
 components:[40068134,'Resistències, condensadors i altres components'],
 solder:[9241777,'Reparació d’una placa electrònica'],
 multimeter:[34054464,'Mesura de magnituds elèctriques amb multímetre'],
 microchip:[8033476,'Microprocessador i circuit integrat'],
 code:[5223887,'Programa informàtic amb codi'],
 code2:[34803966,'Ordinador amb codi i depuració'],
 robot:[34207359,'Braç robòtic industrial'],
 factory:[34222005,'Màquines automàtiques en una fàbrica'],
 gauge:[7937300,'Manòmetre que mesura pressió'],
 gauges:[5532838,'Manòmetres industrials'],
 compressor:[9754814,'Compressor d’aire en un taller'],
 airsystem:[31257317,'Instal·lació de compressors i aire comprimit'],
 valves:[8940464,'Canonades, manòmetres i vàlvules industrials'],
 thermal:[9875421,'Plaques solars en una coberta']
};
/* Tria fotogràfica individual per concepte, en l'ordre de la programació actual. */
const PICKS={
1:['meeting','meeting','plan','sketch','drawing','blueprint','prototype','workshop','printing','plan'],
2:[
 'nature','nature','collaboration','meeting','conference',
 'conference','meeting','solar',
 'mining','nature','mining','excavator','restoration','factory',
 'solar','solar','factory','components','solar',
 'wind','solar','installer','wind2','hydro','geothermal','biomass',
 'machinery','thermal','wind','hydro',
 'climate','faucet','waterlab','waterplant','waterplant','waterpipe',
 'tram','tram','climate','bicycle','factory','sorting','repair'
],
3:['house','solar','house','house','insulation','insulation','construction','installer','thermal'],
4:['breadboard','wires','components','breadboard','breadboard','components','components','wires','microchip','circuits','multimeter','solder'],
5:['circuits','microchip','microchip','wires','breadboard','microchip','circuits','code','robot'],
6:['compressor','excavator','gauge','excavator','gauges','airsystem','valves','compressor'],
7:['wires','microchip','robot','robot','code','blueprint','code2','code','factory']
};
const FORMULAS=[
 [/rendiment|eficiència/i,'η = E útil / E consumida'],
 [/potència i consum/i,'P = E / t'],
 [/energia útil/i,'Entrada = útil + dissipada'],
 [/treball mecànic/i,'W = F · d'],
 [/calor sensible/i,'Q = m · c · ΔT'],
 [/velocitat del vent/i,'P ∝ v³'],
 [/energia hidroelèctrica/i,'P ≈ ρ · g · Q · h · η'],
 [/llei d.ohm/i,'V = I · R'],
 [/tensió elèctrica/i,'V · volts'],
 [/intensitat del corrent/i,'I · amperes'],
 [/resistència elèctrica/i,'R · ohms'],
 [/pressió$/i,'p = F / A'],
 [/la força en un actuador/i,'F = p · A'],
 [/sistema binari/i,'0 · 1'],
 [/porta AND/i,'1 ∧ 1 = 1'],
 [/porta OR/i,'0 ∨ 1 = 1'],
 [/porta NOT/i,'¬1 = 0'],
 [/connexions en sèrie/i,'Sèrie ↔ Paral·lel'],
 [/l.aïllament tèrmic/i,'Reduir el flux de calor']
];
const ACCENT=['#f17e00','#e948a1','#8d46db','#00a2b7','#ec6360'];
const icon=['✦','◈','✧','✺','✳'];
function elt(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e}
function assemble(title,photo,index,note){
 const [number,subject]=C[photo]||C.nature;
 const fig=elt('figure','photo-lesson');
 fig.style.setProperty('--photo-accent',ACCENT[index%ACCENT.length]);
 fig.style.setProperty('--photo-shift',String(49+(index%5-2)*5)+'%');
 fig.style.setProperty('--photo-hue',String((index%3-1)*5)+'deg');
 const imageBox=elt('div','photo-lesson-visual');
 const img=elt('img','photo-lesson-image');
 img.loading='lazy';img.decoding='async';img.width=960;img.height=540;
 img.alt='Fotografia de '+subject.toLocaleLowerCase('ca')+'. Exemple visual per al tema '+title+'.';
 img.src='https://images.pexels.com/photos/'+number+'/pexels-photo-'+number+'.jpeg?auto=compress&cs=tinysrgb&w=1200';
 img.addEventListener('error',()=>{fig.classList.add('photo-unavailable');img.remove();});
 imageBox.append(img);
 imageBox.append(elt('div','photo-lesson-tint'));
 imageBox.append(elt('span','photo-lesson-badge',icon[index%icon.length]+' FOTOGRAFIA EXPLICATIVA'));
 const f=FORMULAS.find(([re])=>re.test(title));
 const overlay=elt('div','photo-lesson-overlay');
 overlay.append(elt('span','photo-lesson-topic',title));
 if(f)overlay.append(elt('span','photo-lesson-formula',f[1]));
 imageBox.append(overlay);
 fig.append(imageBox);
 const caption=elt('figcaption','photo-lesson-caption');
 const lead=elt('p');lead.append(elt('strong','','🔎 Què has d’observar? '));
 lead.append(document.createTextNode(subject+'. Relaciona aquesta imatge amb el concepte i identifica’n l’aplicació real.'));
 caption.append(lead);
 if(note){
  const explanatory=elt('p','photo-lesson-key');
  explanatory.append(elt('strong','','Idea clau: '),document.createTextNode(note));
  caption.append(explanatory);
 }
 const credit=elt('a','photo-lesson-credit','Fotografia original: Pexels ↗');
 credit.href='https://www.pexels.com/photo/'+number+'/';
 credit.target='_blank';credit.rel='noopener noreferrer';
 caption.append(credit);
 fig.append(caption);
 return fig;
}
function putPhotos(){
 const ud=Number(new URLSearchParams(location.search).get('ud'))||1;
 const section=document.querySelector('.concept-hub');if(!section)return;
 const targets=[...section.querySelectorAll('.concept-group')];
 const units=[...section.querySelectorAll('.concept-group:not(:last-child) .concept-drop')];
 const own=PICKS[ud]||PICKS[1];
 units.forEach((drop,i)=>{
   const target=drop.querySelector('.concept-reading');
   const title=drop.querySelector('.concept-title strong')?.textContent||'Tecnologia';
   if(!target)return;
   const note=[...target.querySelectorAll(':scope > p')].find(x=>!x.classList.contains('concept-intro'))?.textContent||'';
   const figure=assemble(title,own[i]||own[i%own.length]||'workshop',i,note.slice(0,200));
   const sketch=target.querySelector('.concept-sketch');
   if(sketch)target.insertBefore(figure,sketch);else target.append(figure);
 });
 // Fotografies també per als espais especials de projectes i investigacions.
 const specials=[...section.querySelectorAll('.concept-group:last-of-type > .concept-drop')];
 const sp={2:['printing','nature','conference','solar'],1:['prototype','workshop']};
 (sp[ud]||['workshop']).forEach((key,i)=>{
  if(!specials[i])return;
  const h=specials[i].querySelector('.concept-title strong')?.textContent||'Activitat';
  const dest=specials[i].querySelector('.concept-content');
  if(dest)dest.insertBefore(assemble(h,key,90+i,''),dest.firstChild);
 });
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function'){
 window.preparaUnitatVisual=function(){prev();putPhotos();};
}
})();