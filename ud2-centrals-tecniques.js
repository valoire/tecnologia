/* Esquemes de maquinària per a 4t d'ESO. */
(function(){
'use strict';
const configs={
 hydro:{
  label:'Central hidroelèctrica',
  parts:[['PRESA I EMBASSAMENT','Aigua acumulada','dam'],['CANONADA FORÇADA','Aigua a pressió','pipe'],['TURBINA HIDRÀULICA','Rotació de l’eix','turbine'],['ALTERNADOR','Genera electricitat','generator']],
  note:'L’aigua baixa per la canonada, fa girar la turbina i torna al riu. No hi ha caldera.'
 },
 thermal:{
  label:'Central tèrmica de cicle combinat',
  parts:[['COMBUSTIÓ','Gas natural i aire','flame'],['TURBINA DE GAS','Gasos a alta temperatura','turbine'],['CALDERA DE RECUPERACIÓ','Aprofita la calor residual','boiler'],['TURBINA DE VAPOR','Vapor a pressió','turbine'],['ALTERNADOR','Moviment → electricitat','generator']],
  note:'La caldera de recuperació produeix vapor sense cremar un segon combustible: aprofita els gasos d’escapament. La turbina de gas i la de vapor mouen generadors.'
 },
 nuclear:{
  label:'Central nuclear de reactor d’aigua a pressió',
  parts:[['REACTOR NUCLEAR','Fissió de l’urani','reactor'],['GENERADOR DE VAPOR','Intercanvia calor','boiler'],['TURBINA DE VAPOR','Expansió del vapor','turbine'],['ALTERNADOR','Genera electricitat','generator'],['CONDENSADOR','Refreda i recupera aigua','condenser']],
  note:'El reactor escalfa el circuit primari, que transfereix calor al generador de vapor. El vapor del circuit secundari mou la turbina i després es condensa. Els circuits no es barregen.'
 }
};
function shape(type,x){
 const t={
 dam:'<path d="M12 20 H105 V88 H82 V45 H40 V88 H12 Z" fill="#a8bbcf" stroke="#57758d" stroke-width="2"/><path d="M14 59 Q34 49 54 59 T105 59 V86 H14Z" fill="#58b1d9" opacity=".8"/>',
 pipe:'<path d="M15 28 H60 V70 H103" fill="none" stroke="#4c9fc9" stroke-width="16" stroke-linejoin="round"/><path d="M15 28 H60 V70 H103" fill="none" stroke="#dcf4ff" stroke-width="6"/>',
 turbine:'<circle cx="59" cy="55" r="35" fill="#e5eff3" stroke="#5e879f" stroke-width="4"/><path d="M59 55 L44 25 Q80 28 59 55 L92 48 Q81 78 59 55 L47 87 Q28 62 59 55Z" fill="#6f9cba"/><circle cx="59" cy="55" r="8" fill="#fff" stroke="#4d748c" stroke-width="3"/>',
 generator:'<rect x="12" y="29" width="93" height="58" rx="14" fill="#fff0ca" stroke="#c5a156" stroke-width="3"/><circle cx="57" cy="58" r="21" fill="#fff" stroke="#b9964c" stroke-width="3"/><text x="57" y="66" font-size="24" font-weight="800" text-anchor="middle" fill="#8a6933">G</text>',
 flame:'<path d="M59 14 Q32 44 43 62 Q53 53 54 43 Q79 61 60 89 Q27 88 25 59 Q25 33 59 14Z" fill="#f18b42" stroke="#d16e2b" stroke-width="2"/>',
 boiler:'<rect x="15" y="17" width="88" height="83" rx="11" fill="#fcead9" stroke="#bc7857" stroke-width="3"/><path d="M33 29 V82 Q48 94 57 82 V35 Q70 22 82 35 V84" fill="none" stroke="#d07c51" stroke-width="8" stroke-linecap="round"/>',
 reactor:'<rect x="22" y="12" width="73" height="94" rx="22" fill="#e3dff2" stroke="#8374a9" stroke-width="4"/><path d="M42 33 V85 M58 33 V85 M74 33 V85" stroke="#79669d" stroke-width="8"/><path d="M28 94 H89" stroke="#638caf" stroke-width="6"/>',
 condenser:'<rect x="12" y="30" width="94" height="60" rx="12" fill="#e2f3fb" stroke="#71a5c1" stroke-width="3"/><path d="M23 50 Q37 36 51 50 T79 50 T101 50 M23 70 Q37 56 51 70 T79 70 T101 70" fill="none" stroke="#4e9ac0" stroke-width="5"/>'
 };
 return '<g transform="translate('+x+' 78)">'+t[type]+'</g>';
}
function diagram(kind){
 const data=configs[kind],count=data.parts.length,step=940/count;
 const width=count===5?162:210;
 let contents='';
 data.parts.forEach(([name,sub,type],i)=>{
  const x=30+i*step;
  contents+='<rect x="'+x+'" y="45" width="'+width+'" height="235" rx="16" fill="'+(i%2?'#f8effc':'#f0f7fa')+'" stroke="#d7c8df" stroke-width="2"/>';
  contents+=shape(type,x+(width-118)/2);
  contents+='<text x="'+(x+width/2)+'" y="197" text-anchor="middle" font-size="'+(count===5?14:16)+'" font-weight="800" fill="#663477">'+name+'</text>';
  contents+='<text x="'+(x+width/2)+'" y="221" text-anchor="middle" font-size="12" fill="#5d5367">'+sub+'</text>';
  if(i<count-1)contents+='<path d="M'+(x+width+5)+' 162 H'+(x+step-7)+'" stroke="#8a6998" stroke-width="3" marker-end="url(#plant-arrow)"/>';
 });
 const figure=document.createElement('figure');
 figure.className='ud2-plant-machine-diagram';
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox','0 0 1000 300');
 svg.setAttribute('role','img');
 svg.setAttribute('aria-label',data.label+': '+data.parts.map(p=>p[0]).join(', '));
 svg.innerHTML='<defs><marker id="plant-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill="#8a6998"/></marker></defs>'+contents;
 const caption=document.createElement('figcaption');
 caption.textContent=data.note;
 figure.append(svg,caption);
 return figure;
}
function install(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 Object.keys(configs).forEach(kind=>{
  const card=document.querySelector('.ud2-plant-card.'+kind);
  const flow=card?.querySelector('.ud2-plant-flow');
  if(flow&&!card.querySelector('.ud2-plant-machine-diagram'))flow.replaceWith(diagram(kind));
 });
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();install();};
})();