/* UD2 · Explicació gradual amb el mateix estil de les altres teories. */
(function(){
'use strict';
function install(){
 if(new URLSearchParams(location.search).get('ud')!=='2')return;
 const panel=document.getElementById('ud2-main-panel-3');
 const article=panel?.querySelector('.ud2-solid-article');
 if(!article||article.classList.contains('ud2-energy-basic'))return;
 const oldDiagram=article.querySelector('.ud2-solid-diagram')?.cloneNode(true);
 article.classList.add('ud2-energy-basic');
 article.classList.remove('ud2-energy-steps');
 const head=panel.querySelector('.ud2-main-topic-head');
 if(head){
  const title=head.querySelector('h2');if(title)title.textContent='Energia i rendiment';
  const desc=head.querySelector('p');if(desc)desc.textContent='De l’exemple senzill a la fórmula, amb els càlculs explicats pas a pas.';
 }
 article.innerHTML=`
 <div class="ud2-solid-intro">
  <p class="ud2-solid-lead">Primer entenem l’energia amb exemples quotidians. Després aprenem a multiplicar, dividir, trobar una dada desconeguda i calcular el rendiment.</p>
  <p>En cada problema indicarem les <strong>dades, la fórmula, la substitució, l’operació, les unitats</strong> i el <strong>resultat final emmarcat</strong>.</p>
 </div>
 <section class="ud2-solid-chapter">
  <h3>1. Entenem l’energia i la potència</h3>
  <div class="ud2-solid-section">
   <h4>Què és l’energia?</h4>
   <p>L’<strong>energia</strong> és necessària per produir canvis: encendre un llum, escalfar aigua o moure una màquina. No apareix del no-res: <strong>es transforma</strong>.</p>
   <p><strong>Exemples:</strong> un llum transforma energia elèctrica en llum i calor. Un ventilador transforma energia elèctrica en moviment i calor.</p>
   <h4>Què és la potència?</h4>
   <p>La <strong>potència</strong> indica com de ràpid fa servir energia un aparell. Es mesura en <strong>watts (W)</strong>. L’energia consumida també depèn del <strong>temps</strong> que l’aparell funciona.</p>
   <p class="ud2-solid-application"><strong>Important:</strong> un llum pot tenir una potència de <b>10 W</b>, però si està encès <b>2 h</b> consumeix <b>20 Wh</b> d’energia. <b>W</b> i <b>Wh</b> no signifiquen el mateix.</p>
  </div>
 </section>
 <section class="ud2-solid-chapter">
  <h3>2. Una fórmula que només és una multiplicació</h3>
  <div class="ud2-solid-section">
   <p><strong>E = P × t</strong>, on <b>E</b> és l’energia (Wh), <b>P</b> la potència (W) i <b>t</b> el temps (h).</p>
   <h4>Exemple resolt: llum de 5 W encès durant 3 hores</h4>
   <p><strong>Dades:</strong> P = 5 W; t = 3 h.</p>
   <p><strong>Fórmula:</strong> E = P × t.</p>
   <p><strong>Substitució:</strong> E = 5 W × 3 h.</p>
   <p><strong>Operació:</strong> 5 × 3 = 15.</p>
   <p class="ud2-energy-final"><strong>E = 15 Wh</strong></p>
  </div>
 </section>
 <section class="ud2-solid-chapter">
  <h3>3. Com aïllem una X?</h3>
  <div class="ud2-solid-section">
   <p>La <strong>x</strong> és un nombre que encara no sabem. Si la x està multiplicant, fem l’operació contrària: <strong>dividir</strong>.</p>
   <h4>Primer, sense fórmules</h4>
   <p><strong>3 × x = 12</strong> → x = 12 ÷ 3 → <strong>x = 4</strong>.</p>
   <p>Ho comprovem: 3 × 4 = 12. Correcte!</p>
   <h4>Després, amb la potència i el temps</h4>
   <p>Un llum de <strong>5 W</strong> ha consumit <strong>20 Wh</strong>. Quant de temps ha funcionat?</p>
   <p><strong>Fórmula:</strong> E = P × t.</p>
   <p><strong>Substitució:</strong> 20 = 5 × t.</p>
   <p><strong>Aïllem:</strong> t = 20 ÷ 5.</p>
   <p class="ud2-energy-final"><strong>t = 4 h</strong></p>
   <p><strong>Comprovació:</strong> 5 W × 4 h = 20 Wh.</p>
   <p class="ud2-solid-application"><strong>Abans de continuar:</strong> practica 2 × x = 10, 4 × x = 12 i 5 × x = 25.</p>
  </div>
 </section>
 <section class="ud2-solid-chapter" id="ud2-rendiment-basic">
  <h3>4. Energia útil i rendiment</h3>
  <div class="ud2-solid-section">
   <p>L’<strong>energia útil</strong> és la que aprofitem per a la funció que volem. L’<strong>energia dissipada</strong> no s’aprofita per a aquella funció, sovint perquè s’ha transformat en calor.</p>
   <p>Si una màquina rep <strong>100 J</strong>, n’aprofita <strong>80 J</strong> i en dissipa <strong>20 J</strong>.</p>
   <h4>Calculem el rendiment</h4>
   <p><strong>Rendiment (%) = energia útil ÷ energia aportada × 100</strong>.</p>
   <p><strong>Dades:</strong> útil = 80 J; aportada = 100 J.</p>
   <p><strong>Substitució:</strong> 80 ÷ 100 × 100.</p>
   <p><strong>Operació:</strong> 0,8 × 100 = 80.</p>
   <p class="ud2-energy-final"><strong>Rendiment = 80 %</strong></p>
   <p class="ud2-solid-application"><strong>Interpretació:</strong> de cada 100 J aportats, 80 J serveixen per al resultat que busquem.</p>
  </div>
 </section>
 <section class="ud2-solid-chapter">
  <h3>5. Quan ja ho dominis: de Wh a kWh</h3>
  <div class="ud2-solid-section">
   <p>La factura elèctrica utilitza <strong>kWh</strong>. Com que <strong>1 kWh = 1.000 Wh</strong>, per passar de Wh a kWh <strong>dividim per 1.000</strong>.</p>
   <p><strong>Exemple:</strong> 20 Wh ÷ 1.000 = 0,020 kWh.</p>
   <p class="ud2-solid-application"><strong>Al dossier:</strong> escriu les dades, explica l’operació, posa sempre les unitats i emmarca el resultat. Practica després amb les activitats de sota.</p>
  </div>
 </section>`;
 if(oldDiagram)article.querySelector('#ud2-rendiment-basic')?.append(oldDiagram);
}
const prev=window.preparaUnitatVisual;
if(typeof prev==='function')window.preparaUnitatVisual=function(){prev();install();};
})();
