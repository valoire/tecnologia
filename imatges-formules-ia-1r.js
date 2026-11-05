/* Il·lustracions IA anotades amb dades i substitucions exactes per a set fórmules clau. */
(() => {
  'use strict';

  // Identifiquem cada il·lustració pel títol de la fórmula: no depèn de l’ordre de les targetes.
  const visuals = new Map([
    ["Energia cinètica", {
      file: 'cinetica-aplicada.webp',
      alt: 'Dos cotxes idèntics: el primer circula més lent i el segon, més ràpid.',
      marks: [
        {label:'m = 1.000 kg', x:4, y:6, arrow:'→'},
        {label:'v₁ = 10 m/s', x:4, y:27, arrow:'→'},
        {label:'v₂ = 20 m/s', x:4, y:73, arrow:'→'}
      ],
      calculations: [
        'E<sub>c1</sub> = ½ · 1.000 · 10² = <b>50.000 J</b>',
        'E<sub>c2</sub> = ½ · 1.000 · 20² = <b>200.000 J</b>'
      ],
      explanation: 'Amb la mateixa massa, duplicar la velocitat multiplica per quatre l’energia cinètica: la velocitat està elevada al quadrat.'
    }],
    ["Energia potencial gravitatòria", {
      file: 'potencial-aplicada.webp',
      alt: 'Grua que aixeca una càrrega de 500 quilograms a una altura de 8 metres, amb una guia vertical.',
      marks: [
        {label:'m = 500 kg', x:66, y:10, arrow:'←'},
        {label:'h = 8 m', x:70, y:73, arrow:'←'},
        {label:'g = 9,81 m/s²', x:3, y:13, arrow:'↓'}
      ],
      calculations: [
        'E<sub>p</sub> = 500 · 9,81 · 8 = <b>39.240 J</b>'
      ],
      explanation: 'La massa és la càrrega, h és la distància vertical fins al terra i g és l’acceleració de la gravetat.'
    }],
    ["Calor latent", {
      file: 'calor-latent-aplicat.webp',
      alt: 'Gel que es fon en aigua dins d’un vas de laboratori, amb les dues fases visibles.',
      marks: [
        {label:'m = 0,5 kg', x:4, y:12, arrow:'→'},
        {label:'T = 0 °C', x:69, y:11, arrow:'↓'},
        {label:'L = 334 kJ/kg', x:49, y:76, arrow:'↑'}
      ],
      calculations: [
        'Q = 0,5 · 334 = <b>167 kJ</b>'
      ],
      explanation: 'Durant la fusió del gel a pressió atmosfèrica, la calor s’utilitza per canviar d’estat, no per augmentar la temperatura.'
    }],
    ["Llei d'Ohm", {
      file: 'llei-ohm-aplicada.webp',
      alt: 'Circuit senzill tancat amb pila, amperímetre en sèrie i una resistència.',
      marks: [
        {label:'V = 12 V', x:3, y:77, arrow:'↑'},
        {label:'I = 2 A', x:43, y:8, arrow:'↓'},
        {label:'R = 6 Ω', x:72, y:74, arrow:'↑'}
      ],
      calculations: [
        'I = V / R = 12 / 6 = <b>2 A</b>',
        'Comprovació: <b>12 V = 2 A · 6 Ω</b>'
      ],
      explanation: 'Amb una tensió de 12 V i una resistència total de 6 Ω, pel circuit circulen 2 A. Les tres magnituds estan relacionades.'
    }],
    ["Rendiment energètic", {
      file: 'rendiment-aplicat.webp',
      alt: 'Motor que rep energia, mou una roda i dissipa una part de l’energia en forma de calor.',
      marks: [
        {label:'E entrada = 1.000 J', x:2, y:57, arrow:'→'},
        {label:'E dissipada = 250 J', x:36, y:5, arrow:'↓'},
        {label:'E útil = 750 J', x:69, y:58, arrow:'←'}
      ],
      calculations: [
        'η = 750 / 1.000 = 0,75 = <b>75 %</b>',
        'Pèrdues: 1.000 − 750 = <b>250 J</b>'
      ],
      explanation: 'De cada 1.000 J que entren al motor, 750 J es converteixen en moviment útil i 250 J es dissipen.'
    }],
    ["Freqüència de cicles d'un motor de 4 temps", {
      file: 'motor-cicles-aplicat.webp',
      alt: 'Motor de quatre temps seccionat i representació del gir del cigonyal.',
      marks: [
        {label:'n = 3.000 rpm', x:3, y:8, arrow:'↓'},
        {label:'720° = 2 voltes', x:64, y:8, arrow:'↓'},
        {label:'4 carreres = 1 cicle', x:59, y:78, arrow:'↑'}
      ],
      calculations: [
        'N<sub>cicles/min</sub> = 3.000 / 2 = <b>1.500 cicles/min</b>'
      ],
      explanation: 'En un motor de quatre temps, cada cilindre completa un cicle d’admissió, compressió, expansió i escapament cada dues voltes del cigonyal.'
    }],
    ["Balanç de la màquina tèrmica", {
      file: 'maquina-termica-aplicada.webp',
      alt: 'Turbina tèrmica amb calor d’entrada, treball mecànic a la sortida i calor rebutjada al condensador.',
      marks: [
        {label:'Q calent = 1.000 J', x:2, y:12, arrow:'→'},
        {label:'W útil = 400 J', x:69, y:11, arrow:'↓'},
        {label:'Q fred = 600 J', x:37, y:79, arrow:'↑'}
      ],
      calculations: [
        'W<sub>útil</sub> = 1.000 − 600 = <b>400 J</b>'
      ],
      explanation: 'La màquina rep 1.000 J del focus calent, en transforma 400 J en treball útil i cedeix els altres 600 J al focus fred.'
    }]
  ]);

  const style = document.createElement('style');
  style.textContent = [
    '.formula-grid>.formula-card{align-self:start}',
    '.formula-photo{margin:16px 0 14px;overflow:hidden;border-radius:17px;background:#eaf5fc;border:1px solid #bfddec;box-shadow:0 9px 22px rgba(33,93,137,.11)}',
    '.formula-photo__stage{position:relative;isolation:isolate;overflow:hidden;background:#dbeef8}',
    '.formula-photo__stage img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover}',
    '.formula-photo__mark{position:absolute;left:var(--x);top:var(--y);max-width:53%;display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,.94);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.85);border-left:3px solid #1886b9;box-shadow:0 4px 12px #123a5d44;border-radius:9px;padding:5px 8px;color:#123f62;font-size:clamp(9px,1.1vw,12px);line-height:1.15;font-weight:900;white-space:nowrap}',
    '.formula-photo__arrow{font-weight:900;color:#dc6a22;font-size:1.05em}',
    '.formula-photo figcaption{padding:12px 14px 14px;line-height:1.52;color:#365d79;background:linear-gradient(145deg,#f7fcff,#e8f4fc);border-top:1px solid #cce1ed}',
    '.formula-photo__heading{font-size:.7rem;letter-spacing:.075em;color:#2580ab;font-weight:900;margin:0 0 7px;text-transform:uppercase}',
    '.formula-photo__calcs{display:grid;gap:6px}',
    '.formula-photo__calc{border:1px solid #cce2ef;background:rgba(255,255,255,.92);border-radius:9px;padding:8px 10px;color:#1f587e;font-size:.86rem;font-weight:750;line-height:1.45;overflow-wrap:anywhere}',
    '.formula-photo__calc b{color:#a24d12;font-weight:950}',
    '.formula-photo__explain{margin:9px 1px 0;color:#3b6079;font-size:.84rem;line-height:1.52}',
    '@media(max-width:620px){.formula-photo__mark{padding:4px 6px;border-radius:7px;font-size:9px;max-width:56%}.formula-photo__calc{font-size:.82rem}.formula-photo figcaption{padding:10px}}'
  ].join('');
  document.head.appendChild(style);

  const cards = Array.from(document.querySelectorAll('article.formula-card'));
  visuals.forEach((asset, heading) => {
    const card = cards.find(c => c.querySelector('h3')?.textContent.trim() === heading);
    const formula = card?.querySelector('.formula');
    if (!formula) return;
    const figure = document.createElement('figure');
    figure.className = 'formula-photo';

    const stage = document.createElement('div');
    stage.className = 'formula-photo__stage';
    const img = document.createElement('img');
    img.src = 'imatges/formules-1r/' + asset.file;
    img.alt = asset.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 1000;
    img.height = 563;
    stage.appendChild(img);

    asset.marks.forEach(mark => {
      const label = document.createElement('span');
      label.className = 'formula-photo__mark';
      label.style.setProperty('--x', mark.x + '%');
      label.style.setProperty('--y', mark.y + '%');
      label.textContent = mark.label;
      const arrow = document.createElement('span');
      arrow.className = 'formula-photo__arrow';
      arrow.textContent = mark.arrow;
      arrow.setAttribute('aria-hidden', 'true');
      label.appendChild(arrow);
      stage.appendChild(label);
    });

    const caption = document.createElement('figcaption');
    const heading = document.createElement('div');
    heading.className = 'formula-photo__heading';
    heading.textContent = 'Exemple visual · substituïm les dades';
    const calculations = document.createElement('div');
    calculations.className = 'formula-photo__calcs';
    asset.calculations.forEach(html => {
      const line = document.createElement('div');
      line.className = 'formula-photo__calc';
      line.innerHTML = html; // Fórmules didàctiques constants, definides aquí.
      calculations.appendChild(line);
    });
    const explanation = document.createElement('p');
    explanation.className = 'formula-photo__explain';
    explanation.textContent = asset.explanation;
    caption.append(heading, calculations, explanation);
    figure.append(stage, caption);
    formula.insertAdjacentElement('afterend', figure);
  });
})();
