/* UD2 · Energia i rendiment explicats pas a pas per a 4t d'ESO. */
(function () {
'use strict';
function install(){
  if(new URLSearchParams(location.search).get('ud')!=='2')return;
  const panel=document.getElementById('ud2-main-panel-3');
  const article=panel?.querySelector('.ud2-solid-article');
  if(!article || article.classList.contains('ud2-energy-steps'))return;
  article.classList.add('ud2-energy-steps');
  const top=panel.querySelector('.ud2-main-topic-head');
  if(top){
    const title=top.querySelector('h2'); if(title)title.textContent='Energia i rendiment · pas a pas';
    const subtitle=top.querySelector('p'); if(subtitle)subtitle.textContent='Comencem amb exemples fàcils. Després aprendrem a fer càlculs i a trobar una incògnita.';
  }
  article.innerHTML=`
    <header class="uds-energy-lead">
      <span class="uds-energy-eyebrow">⚡ TEORIA 4 · COMENCEM DE ZERO</span>
      <h3>Què hem d’entendre abans de calcular?</h3>
      <p>No cal saber fer fórmules difícils per començar. Primer entendrem què passa, després farem multiplicacions i divisions senzilles, i finalment calcularem el rendiment.</p>
      <div class="uds-energy-target"><strong>Objectiu:</strong> identificar les dades, escollir l’operació, substituir els nombres, posar les unitats i <strong>emmarcar el resultat final</strong>.</div>
    </header>

    <section class="uds-energy-step" aria-labelledby="uds-en-1">
      <div class="uds-energy-heading"><span>PAS 01</span><h3 id="uds-en-1">Què és l’energia?</h3></div>
      <p>L’<strong>energia</strong> és allò que permet produir canvis: encendre un llum, escalfar aigua o moure una bicicleta. No apareix del no-res: <strong>es transforma</strong>.</p>
      <div class="uds-energy-examples">
        <div><span aria-hidden="true">💡</span><strong>Llum</strong><p>Energia elèctrica → llum i calor.</p></div>
        <div><span aria-hidden="true">🧺</span><strong>Rentadora</strong><p>Energia elèctrica → moviment i calor.</p></div>
        <div><span aria-hidden="true">🚴</span><strong>Bicicleta</strong><p>Energia química dels aliments → moviment.</p></div>
      </div>
      <p class="uds-energy-remind">Recorda: l’energia es pot mesurar en <strong>joules (J)</strong>. Per parlar del consum elèctric utilitzarem sobretot <strong>Wh</strong> i <strong>kWh</strong>.</p>
    </section>

    <section class="uds-energy-step" aria-labelledby="uds-en-2">
      <div class="uds-energy-heading"><span>PAS 02</span><h3 id="uds-en-2">Potència i energia no són el mateix</h3></div>
      <p>La <strong>potència</strong> indica com de ràpid utilitza energia un aparell. La seva unitat és el <strong>watt (W)</strong>. El consum d’energia depèn de la potència <strong>i del temps</strong> de funcionament.</p>
      <div class="uds-energy-compare">
        <div><b>10 W</b><span>Potència del llum</span><small>És una característica de l’aparell.</small></div>
        <div class="uds-energy-compare-mark">×</div>
        <div><b>2 h</b><span>Temps encès</span><small>Quant de temps funciona.</small></div>
        <div class="uds-energy-compare-mark">=</div>
        <div><b>20 Wh</b><span>Energia consumida</span><small>És el que volem calcular.</small></div>
      </div>
      <p class="uds-energy-remind"><strong>Important:</strong> 10 W <strong>no</strong> és el mateix que 10 Wh. La <strong>h</strong> significa hores.</p>
    </section>

    <section class="uds-energy-step" aria-labelledby="uds-en-3">
      <div class="uds-energy-heading"><span>PAS 03</span><h3 id="uds-en-3">La nostra primera fórmula: multiplicar</h3></div>
      <p>Quan sabem la potència i el temps, fem una multiplicació. <strong>No cal aïllar cap lletra.</strong></p>
      <div class="uds-energy-formula" role="math" aria-label="Energia igual a potència multiplicada pel temps">E = P × t</div>
      <p><strong>E</strong> = energia consumida (Wh) · <strong>P</strong> = potència (W) · <strong>t</strong> = temps (h)</p>
      <div class="uds-energy-worked">
        <h4>Exemple resolt · Una làmpada de 5 W funciona 3 hores</h4>
        <ol>
          <li><strong>Dades:</strong> P = 5 W; t = 3 h.</li>
          <li><strong>Fórmula:</strong> E = P × t.</li>
          <li><strong>Substitució:</strong> E = 5 W × 3 h.</li>
          <li><strong>Càlcul:</strong> 5 × 3 = 15.</li>
        </ol>
        <p class="uds-energy-result">E = 15 Wh</p>
      </div>
      <p class="uds-energy-remind">En tots els exercicis: <strong>dades → fórmula → substitució → operació → resultat emmarcat</strong>.</p>
    </section>

    <section class="uds-energy-step" aria-labelledby="uds-en-4">
      <div class="uds-energy-heading"><span>PAS 04</span><h3 id="uds-en-4">Què fem quan no sabem una dada? Aïllem la x</h3></div>
      <p>Una <strong>x</strong> és simplement un nombre que encara no sabem. Per trobar-lo, fem l’<strong>operació contrària</strong>: el contrari de multiplicar és dividir.</p>
      <div class="uds-energy-worked">
        <h4>Primer, sense electricitat</h4>
        <div class="uds-energy-chalk">3 × x = 12 <span aria-hidden="true">→</span> x = 12 ÷ 3 <span aria-hidden="true">→</span> <strong>x = 4</strong></div>
        <p>Ho comprovem: 3 × 4 = 12. Funciona!</p>
      </div>
      <div class="uds-energy-worked">
        <h4>Ara, amb energia · Quant de temps ha funcionat?</h4>
        <p>Un llum de <strong>5 W</strong> ha consumit <strong>20 Wh</strong>.</p>
        <ol>
          <li><strong>Fórmula:</strong> E = P × t.</li>
          <li><strong>Posem les dades:</strong> 20 = 5 × t.</li>
          <li><strong>Per trobar t, dividim:</strong> t = 20 ÷ 5.</li>
        </ol>
        <p class="uds-energy-result">t = 4 h</p>
        <p><strong>Comprovació:</strong> 5 W × 4 h = 20 Wh.</p>
      </div>
      <p class="uds-energy-remind">Si encara et costa trobar la x, practica primer amb nombres petits. <strong>No avancis fins que entenguis aquest pas.</strong></p>
    </section>

    <section class="uds-energy-step" aria-labelledby="uds-en-5">
      <div class="uds-energy-heading"><span>PAS 05</span><h3 id="uds-en-5">Què és el rendiment?</h3></div>
      <p>Una màquina no acostuma a aprofitar tota l’energia que rep per a la funció que volem. Una part és <strong>energia útil</strong> i una altra es <strong>dissipa</strong>, per exemple en forma de calor.</p>
      <div class="uds-energy-meter" role="img" aria-label="De 100 joules aportats, 80 joules són útils i 20 joules es dissipen. Rendiment del 80 per cent.">
        <div class="uds-energy-meter-use">80 J útils · 80 %</div>
        <div class="uds-energy-meter-loss">20 J · 20 %</div>
      </div>
      <p class="uds-energy-remind"><strong>Exemple:</strong> de cada 100 J d’entrada, la màquina aprofita 80 J. Els altres 20 J no desapareixen, però no són útils per a la funció prevista.</p>
      <div class="uds-energy-worked">
        <h4>Calculem el percentatge, sense aïllar cap lletra</h4>
        <p><strong>Rendiment (%) = energia útil ÷ energia aportada × 100</strong></p>
        <ol>
          <li><strong>Dades:</strong> útil = 80 J; aportada = 100 J.</li>
          <li><strong>Substituïm:</strong> 80 ÷ 100 × 100.</li>
          <li><strong>Calculem:</strong> 0,8 × 100 = 80.</li>
        </ol>
        <p class="uds-energy-result">Rendiment = 80 %</p>
      </div>
      <p class="uds-energy-remind">Si a una làmpada ens interessa la llum, la calor és energia no útil per a aquella funció. En una estufa, en canvi, la calor és el que ens interessa.</p>
    </section>

    <section class="uds-energy-step" aria-labelledby="uds-en-6">
      <div class="uds-energy-heading"><span>PAS 06</span><h3 id="uds-en-6">Quan dominis això: de Wh a kWh</h3></div>
      <p>Les factures elèctriques utilitzen <strong>kWh</strong>. Com que <strong>1 kWh = 1.000 Wh</strong>, per passar de Wh a kWh dividim per 1.000.</p>
      <div class="uds-energy-worked">
        <p><strong>Exemple:</strong> 1.000 Wh ÷ 1.000 = <strong>1 kWh</strong>.</p>
        <p><strong>Exemple:</strong> 20 Wh ÷ 1.000 = <strong>0,020 kWh</strong>.</p>
      </div>
      <p class="uds-energy-remind">És una ampliació. Primer has de saber calcular en Wh i trobar una x senzilla.</p>
    </section>

    <section class="uds-energy-step uds-energy-practice" aria-labelledby="uds-en-7">
      <div class="uds-energy-heading"><span>COMPROVA-HO</span><h3 id="uds-en-7">Tres exercicis per començar</h3></div>
      <div class="uds-energy-practice-items">
        <div><strong>1. Sense fórmula</strong><p>Un llum rep electricitat i fa llum i calor. Quina energia és útil si el volem per il·luminar?</p><small>Solució per comprovar: la llum.</small></div>
        <div><strong>2. Multiplica</strong><p>Una bombeta de 4 W funciona 3 h. Quants Wh consumeix?</p><small>Dades: 4 W i 3 h · 4 × 3 = 12 Wh.</small></div>
        <div><strong>3. Troba la x</strong><p>5 × x = 25. Quin nombre és x?</p><small>x = 25 ÷ 5 = 5.</small></div>
      </div>
      <p>Després fes les <strong>ACTIVITATS</strong> de sota. En el dossier, anota els procediments, posa les unitats i emmarca sempre la resposta final.</p>
    </section>`;
}
const previous=window.preparaUnitatVisual;
if(typeof previous==='function')window.preparaUnitatVisual=function(){previous();install();};
})();
