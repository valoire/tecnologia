/* Presentació pedagògica progressiva: sense canviar les fórmules originals. */
(function(){
'use strict';
const NS='http://www.w3.org/2000/svg';
function node(tag,cls,html){const el=document.createElement(tag);if(cls)el.className=cls;if(html!==undefined)el.innerHTML=html;return el}
function diagram(kind){
 const drawings={
  movement:'<rect x="67" y="128" width="95" height="54" rx="7" fill="#d4eafa" stroke="#25688f" stroke-width="3"/><circle cx="88" cy="185" r="11" fill="#385c78"/><circle cx="145" cy="185" r="11" fill="#385c78"/><path d="M160 148 H405" stroke="#d77822" stroke-width="7" stroke-linecap="round"/><path d="M405 148 l-24 -14 v28z" fill="#d77822"/><text x="244" y="131" font-size="22">F · d</text><path d="M40 198 H490" stroke="#7aab8c" stroke-width="4"/>',
  height:'<path d="M75 189 H490" stroke="#739dbe" stroke-width="4"/><rect x="275" y="48" width="100" height="62" rx="9" fill="#b8ddec" stroke="#377fa4" stroke-width="3"/><path d="M391 110 V189 M380 119 L391 109 401 119 M380 180 L391 190 401 180" stroke="#ce7924" stroke-width="3" fill="none"/><text x="408" y="157" font-size="22">h</text><path d="M325 110 V160" stroke="#376b93" stroke-width="5"/><path d="M325 160 l-12 -18 h24z" fill="#376b93"/><text x="342" y="148" font-size="20">m · g</text>',
  energy:'<rect x="40" y="80" width="125" height="86" rx="13" fill="#f5d58f"/><text x="74" y="127" font-size="18">Energia</text><path d="M175 123 H325" stroke="#287fb0" stroke-width="8" stroke-linecap="round"/><path d="M325 123 l-22 -13 v26z" fill="#287fb0"/><rect x="337" y="80" width="165" height="86" rx="13" fill="#bde9da"/><text x="358" y="113" font-size="18">Potència</text><text x="374" y="142" font-size="18">i temps</text>',
  heat:'<rect x="26" y="72" width="135" height="100" rx="14" fill="#ffdeb7"/><text x="43" y="111" font-size="17">Focus calent</text><text x="66" y="140" font-size="21">Qc</text><path d="M165 121 H234" stroke="#d87b31" stroke-width="7"/><path d="M234 121 l-18 -13 v26z" fill="#d87b31"/><rect x="238" y="71" width="130" height="101" rx="13" fill="#c1e4f3"/><text x="252" y="110" font-size="17">Màquina</text><text x="252" y="137" font-size="17">tèrmica</text><path d="M368 95 H500" stroke="#2c846d" stroke-width="7"/><path d="M500 95 l-18 -13 v26z" fill="#2c846d"/><text x="423" y="80" font-size="19">W</text><path d="M303 172 V211 H466" stroke="#b86861" stroke-width="6" fill="none"/><path d="M466 211 l-17 -12 v24z" fill="#b86861"/><text x="375" y="200" font-size="18">Qf</text>'
 };
 const titles={movement:'Força i desplaçament',height:'Massa i altura',energy:'Energia, potència i temps',heat:'Balanç entre calor i treball'};
 const fig=node('figure','b2n-visual');
 fig.innerHTML='<svg viewBox="0 0 540 235" role="img" aria-label="'+titles[kind]+'">'+drawings[kind]+'</svg><figcaption>Esquema conceptual · '+titles[kind]+'</figcaption>';
 return fig;
}
function pick(text){
 const s=text.toLowerCase();
 if(/treball mecànic|força|cinètica|velocitat/.test(s))return 'movement';
 if(/altura|potencial|elevació|gravit/.test(s))return 'height';
 if(/rendiment tèrmic|balanç|carnot|calor|motor|frigori|cop/.test(s))return 'heat';
 return 'energy';
}
function separateFinal(el){
 if(!el)return;
 const inner=el.querySelector(':scope > div')||el;
 // Separa igualtats múltiples i fórmules agrupades amb punt i coma; conserva els símbols.
 if(inner.children.length)return;
 const text=inner.textContent.trim();
 const pieces=text.split(/\s*;\s*/).filter(Boolean);
 if(pieces.length>1){inner.replaceChildren(...pieces.map(piece=>node('div','b2n-formula-row',piece)))}
}
function stepsFor(title){
 const t=title.toLowerCase();
 if(t.includes('treball mecànic'))return [['Força paral·lela al moviment','W = F · d'],['Si la força forma un angle α','F paral·lela = F · cos α'],['Substituïm la component','W = F · d · cos α']];
 if(t.includes('energia cinètica')&&!t.includes('canvi'))return [['Partim del treball d’una força','W = F · d'],['Amb F = m · a i v² = 2 · a · d, si parteix del repòs','W = m · (v² / 2)'],['El treball es transforma en energia cinètica','Ec = ½ · m · v²']];
 if(t.includes('potencial gravitatòria'))return [['Força necessària per elevar a velocitat constant','F = m · g'],['Treball necessari per elevar una altura h','W = F · h'],['Energia potencial acumulada','Ep = m · g · h']];
 if(t==='potència')return [['Definició de potència','P = E / t'],['Si l’energia es transfereix com a treball','P = W / t']];
 if(t.includes('energia consumida'))return [['La potència és energia per unitat de temps','P = E / t'],['Multipliquem els dos membres per t','P · t = E'],['Aïllem l’energia','E = P · t']];
 if(t.includes('potència d’elevació'))return [['Energia potencial que guanya la massa','Ep = m · g · h'],['Potència = energia / temps','P = Ep / t'],['Substituïm Ep','P = m · g · h / t']];
 return null;
}
function insertSteps(card,heading,anchor){
 const rows=stepsFor(heading);if(!rows||!anchor)return;
 const wrap=node('div','b2n-explication');
 wrap.innerHTML='<strong>Deducció pas a pas</strong>'+rows.map((entry,i)=>'<div class="b2n-math-stage"><small>Pas '+(i+1)+' · '+entry[0]+'</small><div class="b2n-formula-row">'+entry[1]+'</div></div>').join('<div class="b2n-step-arrow" aria-hidden="true">↓</div>');
 anchor.before(wrap);
}
function enhanceFormulaCards(){
 const cards=[...document.querySelectorAll('.formula-grid .formula-card')];
 cards.forEach((card,i)=>{
  if(card.dataset.b2n)return;card.dataset.b2n='1';
  const name=card.querySelector('h3')?.textContent||'';
  const explanation=card.querySelector(':scope > p');
  const form=card.querySelector('.formula');
  if(!form)return;
  const visualKinds={'Treball mecànic':'movement','Energia potencial gravitatòria':'height','Energia consumida':'energy','Balanç energètic':'heat'};
  const kind=visualKinds[name];
  if(kind){const visual=diagram(kind);if(explanation)explanation.after(visual);else card.querySelector('h3')?.after(visual);}
  const note=node('div','b2n-explication','<strong>Interpretació física</strong><p>'+(explanation?.textContent.trim()||'Relacionem les magnituds físiques que intervenen en el procés.')+'</p>');
  form.before(note);
  insertSteps(card,name,form);
  const body=form.innerHTML;
  if(body.includes(';'))form.innerHTML=body.split(/\\s*;\\s*/).map(p=>'<span class="b2n-formula-row">'+p+'</span>').join('');
 });
 const first=document.querySelector('.formula-grid');
 if(first&&!document.querySelector('.b2n-summary')){
  const summary=node('div','b2n-summary','<span>1 · Comprèn el dibuix</span><span>2 · Entén la fórmula</span><span>3 · Revisa les unitats</span><span>4 · Aplica-la a l’exercici</span>');
  first.before(summary);
 }
}

// Apartat de màquines tèrmiques: deduccions fonamentals amb una operació per línia.
const DEDUCCIONS={
 'Balanç d’energia':[
 ['Conservació de l’energia durant un cicle','Q<sub>c</sub> − Q<sub>f</sub> − W = 0'],
 ['Aïllem el treball obtingut','W = Q<sub>c</sub> − Q<sub>f</sub>'],
 ['O bé aïllem la calor d’entrada','Q<sub>c</sub> = W + Q<sub>f</sub>']
 ],
 'Rendiment tèrmic':[
 ['Definició de rendiment','η = Energia útil / Energia aportada'],
 ['En un motor, el treball és l’energia útil','η = W / Q<sub>c</sub>'],
 ['Substituïm W = Qc − Qf','η = (Q<sub>c</sub> − Q<sub>f</sub>) / Q<sub>c</sub>'],
 ['Separem els dos termes','η = 1 − Q<sub>f</sub> / Q<sub>c</sub>']
 ],
 'Potència mecànica':[
 ['La potència és treball per unitat de temps','P = W / t'],
 ['Si cada cicle produeix Wc i tenim f cicles per segon','W / t = W<sub>c</sub> · f'],
 ['Resultat','P = W<sub>c</sub> · f']
 ],
 'Rendiment màxim de Carnot':[
 ['La temperatura s’expressa sempre en kelvin','T (K) = T (°C) + 273,15'],
 ['Rendiment ideal, entre dos focus','η<sub>max</sub> = 1 − T<sub>f</sub> / T<sub>c</sub>']
 ]
};
function addThermalDeductions(card,heading){
 const rows=DEDUCCIONS[heading];
 if(!rows)return;
 const box=node('div','b2n-derivation');
 box.innerHTML='<h4>Deducció ordenada</h4>'+rows.map((step,i)=>'<div class="b2n-deduction-step"><span class="b2n-step-no">'+String(i+1).padStart(2,'0')+'</span><div><p>'+step[0]+'</p><div class="b2n-equation">'+step[1]+'</div></div></div>').join('');
 const final=card.querySelector('.final-formula');
 if(final)final.before(box);
}
function enhanceThermals(){
 document.querySelectorAll('.derive').forEach((card,i)=>{
  if(card.dataset.b2n)return;card.dataset.b2n='1';
  const heading=card.querySelector('h3')?.textContent||'';
  const math=card.querySelector('.mathline');
  const final=card.querySelector('.final-formula');
  if(i===0){const fig=diagram('heat');card.querySelector('h3')?.after(fig);}
  if(math&&!math.querySelector('.b2n-math-stage')){
    const raw=math.innerHTML.trim();
    math.innerHTML='<div class="b2n-math-stage">'+raw+'</div>';
  }
  const derivation=[...card.querySelectorAll(':scope > p')].find(p=>p.textContent.includes('Desenvolupament matemàtic'));
  if(derivation&&!derivation.dataset.b2n){
    derivation.dataset.b2n='1';
    const orig=derivation.innerHTML;
    // Manté el contingut original però col·loca la part introductòria en un bloc separat.
    derivation.classList.add('b2n-explication');
    derivation.innerHTML=orig.replace(/(Així |Com que |Per tant, |Finalment, )/g,'<strong>$1</strong>');
  }
  addThermalDeductions(card,heading);
  separateFinal(final);
 });
}
function start(){if(document.querySelector('.formula-grid'))enhanceFormulaCards();if(document.querySelector('.derive'))enhanceThermals()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
