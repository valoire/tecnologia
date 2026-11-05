/* Simulador comparatiu de 2T gasolina, 4T gasolina i 4T dièsel.
   Representació simplificada i didàctica d'un sol cilindre.
   Els instants exactes d'obertura de llueres o vàlvules varien segons el motor. */
(() => {
  'use strict';
  const sim=document.getElementById('simulador-motor');
  if(!sim)return;
  const part=id=>document.getElementById(id);
  const modes={
    petrol2:{
      visual:'GASOLINA · 2 TEMPS',
      total:360,
      note:"<strong>Gasolina 2T:</strong> té <strong>bugia</strong> i, en aquest disseny habitual, <strong>llueres laterals</strong>, no vàlvules a la culata. La mescla fresca passa pel càrter i entra al cilindre quan el pistó descobreix el trànsfer. <strong>1 volta (360°) = 1 cicle.</strong>",
      reminder:'Motor 2T: el pistó puja i baixa una vegada per cicle. El cigonyal gira 360° (una volta) i, teòricament, cada cilindre té una combustió per volta.',
      phases:[
        {name:'Expansió, escapament i escombratge ↓',label:'Expansió + gasos ↓',desc:'La bugia encén la mescla al punt mort superior. El pistó baixa; prop del punt mort inferior descobreix primer l’escapament i després el trànsfer: surten gasos cremats i entra mescla fresca del càrter.',stroke:'Baixada ↓',gas:'url(#sim-gas-power)'},
        {name:'Compressió i admissió al càrter ↑',label:'Compressió + admissió ↑',desc:'El pistó puja, tapa les llueres i comprimeix la mescla fresca dins el cilindre. Alhora, una nova mescla d’aire i gasolina entra al càrter. A dalt, la bugia tornarà a produir l’espurna.',stroke:'Pujada ↑',gas:'url(#sim-gas-compress)'}
      ]
    },
    petrol4:{
      visual:'GASOLINA · 4 TEMPS',
      total:720,
      note:"<strong>Gasolina 4T:</strong> entra una <strong>mescla d’aire i gasolina</strong> per la vàlvula d’admissió. Es comprimeix i una <strong>bugia</strong> provoca l’espurna que inicia la combustió. Hi ha una expansió útil cada <strong>2 voltes (720°)</strong>.",
      reminder:'Motor de gasolina 4T: quatre carreres del pistó = 720° = dues voltes del cigonyal. A 3.000 rpm, cada cilindre completa 1.500 cicles per minut.',
      phases:[
        {name:'Admissió ↓',label:'Admissió ↓',desc:'S’obre la vàlvula d’admissió; el pistó baixa i entra la mescla d’aire i gasolina.',stroke:'Baixada ↓',gas:'url(#sim-gas-air)'},
        {name:'Compressió ↑',label:'Compressió ↑',desc:'Les vàlvules es tanquen. El pistó puja i comprimeix la mescla de combustible i aire.',stroke:'Pujada ↑',gas:'url(#sim-gas-compress)'},
        {name:'Expansió ↓',label:'Expansió ↓',desc:'La bugia fa saltar una espurna i encén la mescla comprimida. La combustió empeny el pistó cap avall i fa girar el cigonyal.',stroke:'Baixada ↓',gas:'url(#sim-gas-power)'},
        {name:'Escapament ↑',label:'Escapament ↑',desc:'S’obre la vàlvula d’escapament. El pistó puja i expulsa els gasos cremats.',stroke:'Pujada ↑',gas:'url(#sim-gas-exhaust)'}
      ]
    },
    diesel4:{
      visual:'DIÈSEL · 4 TEMPS',
      total:720,
      note:"<strong>Dièsel 4T:</strong> durant l’admissió hi entra <strong>només aire</strong>. La compressió l’escalfa molt i l’<strong>injector</strong> hi polvoritza gasoil al final de la compressió. El combustible s’encén per <strong>autoignició, sense espurna de bugia</strong>. Alguns dièsel tenen bugies d’incandescència per facilitar l’arrencada en fred, però no encenen cada combustió.",
      reminder:'Motor dièsel 4T: quatre carreres = 720° = dues voltes. Té el mateix nombre de cicles per volta que un gasolina 4T; canvia sobretot com es prepara i s’encén el combustible.',
      phases:[
        {name:'Admissió d’aire ↓',label:'Admissió d’aire ↓',desc:'La vàlvula d’admissió s’obre i el pistó baixa. Entra aire, sense barrejar-hi gasolina ni gasoil en aquesta etapa.',stroke:'Baixada ↓',gas:'url(#sim-gas-air)'},
        {name:'Compressió d’aire ↑',label:'Compressió d’aire ↑',desc:'Les vàlvules es tanquen. El pistó comprimeix intensament l’aire i n’eleva molt la temperatura.',stroke:'Pujada ↑',gas:'url(#sim-gas-compress)'},
        {name:'Injecció i expansió ↓',label:'Injecció + expansió ↓',desc:'L’injector polvoritza gasoil dins l’aire molt calent. El combustible s’autoencén per compressió, sense espurna de bugia, i empeny el pistó cap avall.',stroke:'Baixada ↓',gas:'url(#sim-gas-power)'},
        {name:'Escapament ↑',label:'Escapament ↑',desc:'La vàlvula d’escapament s’obre. El pistó puja i expulsa els gasos cremats.',stroke:'Pujada ↑',gas:'url(#sim-gas-exhaust)'}
      ]
    }
  };
  const stages=[...sim.querySelectorAll('[data-phase]')];
  const tabs=[...sim.querySelectorAll('[data-engine-mode]')];
  const toggle=part('sim-toggle'),speed=part('sim-speed');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mode='petrol4',degrees=0,running=!reduced,lastStamp=null,lastPhase=-1;
  const fixed=n=>Number(n.toFixed(2));
  function setRunning(value){
    running=value;sim.dataset.running=String(running);toggle.textContent=running?'⏸ Pausa':'▶ Reprodueix';
    toggle.setAttribute('aria-pressed',String(running));lastStamp=null;
  }
  function render(){
    const model=modes[mode],total=model.total;
    const at=((degrees%total)+total)%total;
    const phase=Math.min(model.phases.length-1,Math.floor(at/180));
    const spec=model.phases[phase];
    const angle=at*Math.PI/180;
    const r=46,l=132,cx=230,cy=361;
    const pinX=cx+r*Math.sin(angle),pinY=cy-r*Math.cos(angle);
    const pistonY=pinY-Math.sqrt(l*l-(pinX-cx)*(pinX-cx));
    const pistonTop=pistonY-22;
    part('sim-piston').setAttribute('transform','translate(0 '+fixed(pistonY-183)+')');
    part('sim-rod').setAttribute('x1',fixed(pinX));
    part('sim-rod').setAttribute('y1',fixed(pinY));
    part('sim-rod').setAttribute('x2',cx);
    part('sim-rod').setAttribute('y2',fixed(pistonY));
    part('sim-crank').setAttribute('x2',fixed(pinX));
    part('sim-crank').setAttribute('y2',fixed(pinY));
    part('sim-crank-pin').setAttribute('cx',fixed(pinX));
    part('sim-crank-pin').setAttribute('cy',fixed(pinY));
    part('sim-gas').setAttribute('height',Math.max(2,fixed(pistonTop-106)));
    const two=mode==='petrol2';
    const exhaust2=two&&at>112&&at<248;
    const transfer2=two&&at>140&&at<220;
    const intake2=two&&at>248&&at<358;
    const twoGas=transfer2?'url(#sim-gas-air)':exhaust2?'url(#sim-gas-exhaust)':at<112?'url(#sim-gas-power)':'url(#sim-gas-compress)';
    part('sim-gas').setAttribute('fill',two?twoGas:spec.gas);
    part('sim-inlet-valve').setAttribute('transform','translate(0 '+(phase===0&&mode!=='petrol2'?14:0)+')');
    part('sim-outlet-valve').setAttribute('transform','translate(0 '+(phase===3&&mode!=='petrol2'?14:0)+')');
    const four=mode!=='petrol2';
    for(const id of ['sim-intake-arrow','sim-intake-tip'])part(id).style.opacity=four&&phase===0?'1':'0';
    for(const id of ['sim-exhaust-arrow','sim-exhaust-tip'])part(id).style.opacity=four&&phase===3?'1':'0';
    const twoArrows={transfer:transfer2,exhaust:exhaust2,intake:intake2};
    part('sim-transfer-arrow').style.opacity=transfer2?'1':'0';
    part('sim-port-exhaust-arrow').style.opacity=exhaust2?'1':'0';
    part('sim-two-transfer-flow').setAttribute('opacity',transfer2?'1':'0');
    part('sim-two-exhaust-flow').setAttribute('opacity',exhaust2?'1':'0');
    part('sim-two-intake-flow').setAttribute('opacity',intake2?'1':'0');
    part('sim-reed').setAttribute('transform','rotate('+(intake2?-23:0)+' 336 356)');
    part('sim-crankcase-charge').setAttribute('opacity',two?(at<180?'.6':'.38'):'0');
    for(const [kind,active] of Object.entries(twoArrows)){
      const status=sim.querySelector('[data-two-flow="'+kind+'"]');
      if(status)status.dataset.active=String(active);
    }
    const spark=mode!=='diesel4' && ((mode==='petrol2'&&at<48)||(mode==='petrol4'&&phase===2&&at<405));
    part('sim-spark').setAttribute('opacity',spark?'1':'0');
    const injection=mode==='diesel4'&&phase===2&&at<408;
    part('sim-injection-spray').setAttribute('opacity',injection?'1':'0');
    const flame=(mode==='petrol2'&&at<50)||(four&&phase===2&&at<421);
    part('sim-flame').setAttribute('opacity',flame?'0.95':'0');
    part('sim-degrees').textContent=Math.round(at)+'° / '+total+'°';
    part('sim-turns').textContent=(at/360).toLocaleString('ca-ES',{maximumFractionDigits:2})+' / '+(total/360);
    if(phase!==lastPhase){
      lastPhase=phase;
      part('sim-kicker').textContent='FASE '+(phase+1)+' DE '+model.phases.length;
      part('sim-phase-name').textContent=spec.name;
      part('sim-phase-desc').textContent=spec.desc;
      part('sim-stroke').textContent=spec.stroke;
      stages.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===phase)));
    }
  }
  function selectMode(next){
    if(!modes[next])return;
    mode=next;degrees=0;lastPhase=-1;lastStamp=null;
    sim.dataset.engine=mode;
    const model=modes[mode];
    tabs.forEach(tab=>{
      const on=tab.dataset.engineMode===mode;
      tab.setAttribute('aria-selected',String(on));
      tab.tabIndex=on?0:-1;
    });
    stages.forEach((stage,index)=>{
      const spec=model.phases[index];
      stage.hidden=!spec;
      if(!spec)return;
      stage.innerHTML=(index+1)+' · '+spec.label+'<small>'+(index*180)+'°–'+((index+1)*180)+'°</small>';
    });
    part('sim-mode-visual').textContent=model.visual;
    part('motor-svg-title').textContent=mode==='petrol2'?'Motor de gasolina de dos temps: càrter, llueres, pistó i cigonyal':'Motor de quatre temps: vàlvules, pistó i cigonyal';
    part('motor-svg-desc').textContent=mode==='petrol2'
      ?'Tall animat d’un motor de gasolina de dos temps amb mescla que entra al càrter quan el pistó puja, conducte de trànsfer cap al cilindre quan baixa, escapament lateral, bugia i una volta per cicle.'
      :'Tall animat d’un motor de quatre temps amb les vàlvules d’admissió i escapament, bugia o injector, i dues voltes del cigonyal per completar el cicle.';
    part('sim-ignition-note').innerHTML=model.note;
    sim.querySelector('.sim-reminder').textContent=model.reminder;
    render();
  }
  function frame(now){
    if(running){
      if(lastStamp!==null){
        degrees+=Math.min(64,now-lastStamp)*.09*Number(speed.value);
        if(degrees>=modes[mode].total)degrees%=modes[mode].total;
      }
      render();
    }
    lastStamp=now;
    requestAnimationFrame(frame);
  }
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>selectMode(tab.dataset.engineMode));
    tab.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
      e.preventDefault();
      const current=tabs.indexOf(tab);
      const next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(current+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      selectMode(tabs[next].dataset.engineMode);
      tabs[next].focus();
    });
  });
  toggle.addEventListener('click',()=>setRunning(!running));
  part('sim-restart').addEventListener('click',()=>{degrees=0;lastPhase=-1;render();setRunning(true);});
  stages.forEach((button,index)=>button.addEventListener('click',()=>{
    degrees=index*180+90;lastPhase=-1;render();setRunning(false);
  }));
  document.addEventListener('visibilitychange',()=>{lastStamp=null;});
  selectMode(mode);
  setRunning(running);
  requestAnimationFrame(frame);
})();