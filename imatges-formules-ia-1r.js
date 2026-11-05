/* Set imatges originals creades amb IA. Només a les fórmules que guanyen claredat visual. */
(() => {
  'use strict';

  // Índexs de les targetes de fórmula, començant per 0.
  const visuals = new Map([
    [1, {
      file: 'cinetica.webp',
      alt: 'Cotxe blau en moviment ràpid per una carretera, amb l’entorn desenfocat.',
      caption: 'La velocitat és decisiva: si es duplica, l’energia cinètica es multiplica per quatre.'
    }],
    [3, {
      file: 'potencial.webp',
      alt: 'Grua que eleva una peça metàl·lica a una determinada altura respecte del terra.',
      caption: 'Com més amunt elevem una massa, més energia potencial gravitatòria acumula.'
    }],
    [9, {
      file: 'calor-latent.webp',
      alt: 'Glaçons que es fonen dins d’un recipient de vidre, amb aigua líquida al fons.',
      caption: 'Durant la fusió, el gel absorbeix calor per canviar d’estat sense augmentar de temperatura.'
    }],
    [12, {
      file: 'llei-ohm.webp',
      alt: 'Circuit elèctric amb una pila, una resistència, una bombeta encesa i un multímetre.',
      caption: 'La tensió impulsa el corrent elèctric, mentre que la resistència en limita la intensitat.'
    }],
    [17, {
      file: 'rendiment.webp',
      alt: 'Motor elèctric que mou una roda, amb part de l’energia transformada en calor.',
      caption: 'No tota l’energia d’entrada es converteix en energia útil: una part es dissipa.'
    }],
    [22, {
      file: 'motor-4-temps.webp',
      alt: 'Motor de combustió seccionat que permet veure el pistó, la biela, les vàlvules i el cigonyal.',
      caption: 'En un motor de quatre temps, un cicle complet requereix dues voltes del cigonyal.'
    }],
    [28, {
      file: 'maquina-termica.webp',
      alt: 'Màquina tèrmica amb entrada d’energia calenta, turbina, generador i sortida de calor residual.',
      caption: 'La màquina transforma una part de la calor rebuda en treball i cedeix la resta al focus fred.'
    }]
  ]);

  const style = document.createElement('style');
  style.textContent = `
    .formula-photo{margin:16px 0 14px;overflow:hidden;border-radius:16px;background:#eaf5fc;border:1px solid #c7e0ef;box-shadow:0 9px 22px rgba(33,93,137,.11)}
    .formula-photo img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover}
    .formula-photo figcaption{padding:12px 15px 14px;font-size:.87rem;line-height:1.52;color:#365d79;background:linear-gradient(125deg,#f7fcff,#e9f4fd);border-top:1px solid #d2e5f1}
    .formula-photo figcaption::before{content:'✦';color:#2782b6;font-size:1rem;font-weight:900;margin-right:8px}
  `;
  document.head.appendChild(style);

  const cards = document.querySelectorAll('article.formula-card');
  visuals.forEach((asset, index) => {
    const card = cards[index];
    const formula = card?.querySelector('.formula');
    if (!formula) return;
    const figure = document.createElement('figure');
    figure.className = 'formula-photo';
    const img = document.createElement('img');
    img.src = 'imatges/formules-1r/' + asset.file;
    img.alt = asset.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 1000;
    img.height = 563;
    const caption = document.createElement('figcaption');
    caption.textContent = asset.caption;
    figure.append(img, caption);
    formula.insertAdjacentElement('afterend', figure);
  });
})();
