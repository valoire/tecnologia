/* Itinerari: teoria → fórmules → experimenta → exemples resolts → exercicis dossier. */
(() => {
  'use strict';

  const topics = ['treball', 'potencia', 'termica', 'electricitat', 'rendiment', 'motors', 'sistemes', 'maquines'];
  const titles = ['Teoria', 'Fórmules', 'Experimenta', 'Exemples resolts', 'Exercicis dossier'];
  const format = (number, digits = 2) => Number(number).toLocaleString('ca-ES', { maximumFractionDigits: digits });

  const practice = {
    treball: {
      caption: 'Com canvia l’energia cinètica amb la massa i la velocitat?',
      description: 'Imagina un vehicle que parteix del repòs. Canvia les dades i observa per què duplicar la velocitat quadruplica l’energia cinètica.',
      fields: [{name:'massa',label:'Massa del vehicle',unit:'kg',min:500,max:2000,step:100,value:1000},{name:'velocitat',label:'Velocitat final',unit:'km/h',min:18,max:108,step:9,value:36}],
      result: v => { const speed=v.velocitat/3.6, work=.5*v.massa*speed*speed/1000; return {formula:`W = ½ · ${format(v.massa,0)} · (${format(speed)} m/s)² = ${format(work)} kJ`,note:'Primer passa de km/h a m/s. Per trobar el treball del motor, aquí suposem que no hi ha resistències.'}; }
    },
    potencia: {
      caption: 'Quanta energia consumeix un aparell?',
      description: 'Varia la potència i les hores de funcionament. Per veure el cost, suposem una tarifa de 0,25 €/kWh.',
      fields: [{name:'p',label:'Potència',unit:'kW',min:.5,max:3,step:.25,value:1.5},{name:'t',label:'Temps',unit:'h',min:.5,max:5,step:.5,value:2}],
      result: v => { const e=v.p*v.t;return {formula:`E = ${format(v.p)} · ${format(v.t)} = ${format(e)} kWh`,note:`Cost orientatiu = ${format(e)} · 0,25 = ${format(e*.25)} €. El kW és potència; el kWh, energia.`}; }
    },
    termica: {
      caption: 'Quanta calor necessita l’aigua?',
      description: 'La massa d’aigua és aproximadament igual al volum en litres. Fem servir c = 4,18 kJ/(kg·°C).',
      fields: [{name:'litres',label:'Volum d’aigua',unit:'L',min:1,max:20,step:1,value:5},{name:'salt',label:'Augment de temperatura',unit:'°C',min:5,max:70,step:5,value:20}],
      result: v => {const q=v.litres*4.18*v.salt;return {formula:`Q = ${format(v.litres,0)} · 4,18 · ${format(v.salt,0)} = ${format(q)} kJ`,note:`Equivalent a ${format(q/3600,3)} kWh. Si l’aigua es refreda, ΔT és negatiu i cedeix calor.`};}
    },
    electricitat: {
      caption: 'Què passa amb la intensitat i la potència?',
      description: 'Prova diferents tensions i resistències per a un receptor purament resistiu, aplicant la llei d’Ohm.',
      fields: [{name:'tensio',label:'Tensió',unit:'V',min:6,max:230,step:2,value:12},{name:'resistencia',label:'Resistència',unit:'Ω',min:2,max:120,step:2,value:6}],
      result: v => {const i=v.tensio/v.resistencia,p=v.tensio*i;return {formula:`I = ${format(v.tensio,0)} / ${format(v.resistencia,0)} = ${format(i)} A`,note:`P = V · I = ${format(v.tensio,0)} · ${format(i)} = ${format(p)} W. A la mateixa tensió, si baixa la resistència, augmenten la intensitat i la potència.`};}
    },
    rendiment: {
      caption: 'On va l’energia que entra a una màquina?',
      description: 'Modifica l’energia inicial i el rendiment: la part útil més la part dissipada sempre han de sumar l’entrada.',
      fields: [{name:'entrada',label:'Energia d’entrada',unit:'J',min:100,max:1000,step:50,value:400},{name:'eta',label:'Rendiment',unit:'%',min:20,max:95,step:5,value:75}],
      result: v => {const useful=v.entrada*v.eta/100,lost=v.entrada-useful;return {formula:`Eútil = ${format(v.entrada,0)} · ${format(v.eta/100)} = ${format(useful)} J`,note:`Energia dissipada = ${format(v.entrada,0)} − ${format(useful)} = ${format(lost)} J.`,meter:v.eta};}
    },
    sistemes: {
      caption: 'Quin consum de gas cal per escalfar aigua?',
      description: 'Fes variar l’aigua, l’augment de temperatura i el rendiment. Suposem c = 4,18 kJ/(kg·°C) i poder calorífic del gas = 45,8 MJ/kg.',
      fields: [{name:'litres',label:'Aigua',unit:'L',min:1,max:20,step:1,value:10},{name:'salt',label:'Augment de temperatura',unit:'°C',min:5,max:70,step:5,value:30},{name:'eta',label:'Rendiment',unit:'%',min:20,max:100,step:5,value:80}],
      result: v => {const q=v.litres*4.18*v.salt,entry=q/(v.eta/100),grams=entry/45.8;return {formula:`Qútil = ${format(v.litres,0)} · 4,18 · ${format(v.salt,0)} = ${format(q)} kJ`,note:`Energia d’entrada = ${format(q)} / ${format(v.eta/100)} = ${format(entry)} kJ; gas necessari ≈ ${format(grams)} g.`,meter:v.eta};}
    }
  };

  const starters = {
    treball: ['Un objecte de <strong>2 kg</strong> es mou a <strong>3 m/s</strong>. Calcula l’energia cinètica.', 'Fórmula: <strong>Ec = ½ · m · v²</strong>.', 'Substitució: <strong>Ec = ½ · 2 · 3² = 9 J</strong>.'],
    potencia: ['Un aparell de <strong>1 kW</strong> funciona <strong>2 hores</strong>.', 'Fórmula: <strong>E = P · t</strong>.', 'Substitució: <strong>E = 1 · 2 = 2 kWh</strong>.'],
    termica: ['Escalfem <strong>2 kg d’aigua</strong> i la temperatura puja <strong>10 °C</strong>.', 'Fórmula: <strong>Q = m · c · ΔT</strong>, amb c = 4,18 kJ/(kg·°C).', 'Substitució: <strong>Q = 2 · 4,18 · 10 = 83,6 kJ</strong>.'],
    electricitat: ['Tenim una resistència de <strong>6 Ω</strong> connectada a <strong>12 V</strong>.', 'Llei d’Ohm: <strong>I = V / R = 12 / 6 = 2 A</strong>.', 'Potència: <strong>P = V · I = 12 · 2 = 24 W</strong>.'],
    rendiment: ['Una màquina rep <strong>200 J</strong> i n’aprofita <strong>150 J</strong>.', 'Fórmula: <strong>η = Eútil / Eentrada</strong>.', 'Substitució: <strong>η = 150 / 200 = 0,75 = 75 %</strong>.'],
    motors: ['Un motor de <strong>4 temps</strong> gira a <strong>2.000 rpm</strong>.', 'Recorda: en un 4T, cada cicle necessita <strong>2 voltes</strong>.', 'Per cilindre: <strong>2.000 / 2 = 1.000 cicles/min</strong>.'],
    sistemes: ['Escalfem <strong>1 kg d’aigua</strong> amb un augment de <strong>10 °C</strong> i un rendiment del <strong>80 %</strong>.', 'Calor útil: <strong>Q = 1 · 4,18 · 10 = 41,8 kJ</strong>.', 'Energia consumida: <strong>E = 41,8 / 0,80 = 52,25 kJ</strong>.'],
    maquines: ['Una màquina ideal opera entre <strong>600 K</strong> i <strong>300 K</strong>.', 'Fórmula de Carnot: <strong>ηmàx = 1 − Tfred / Tcalent</strong>.', 'Substitució: <strong>ηmàx = 1 − 300 / 600 = 0,50 = 50 %</strong>.']
  };

  function sequence(label, number) {
    const el = document.createElement('h3');
    el.className = 'sequence-title';
    el.innerHTML = `<span>${number}</span> ${label}`;
    return el;
  }

  function makePractice(key) {
    const config = practice[key];
    const panel = document.createElement('div');
    panel.className = 'lesson-practice';
    panel.setAttribute('aria-label', `Experiment interactiu de ${key}`);
    panel.innerHTML = `<p class="lesson-practice-title">🎛️ ${config.caption}</p><p class="lesson-practice-desc">${config.description}</p><div class="lesson-controls"></div><div class="lesson-result" aria-live="polite"></div>`;
    const controls = panel.querySelector('.lesson-controls');
    config.fields.forEach(field => {
      const label = document.createElement('label');
      label.className = 'lesson-control';
      label.innerHTML = `<span class="lesson-control-line"><span>${field.label}</span><output></output></span><input type="range" min="${field.min}" max="${field.max}" step="${field.step}" value="${field.value}" data-field="${field.name}">`;
      controls.append(label);
    });
    const refresh = () => {
      const values = {};
      controls.querySelectorAll('input').forEach(input => {
        values[input.dataset.field] = Number(input.value);
        const field = config.fields.find(item => item.name === input.dataset.field);
        input.parentElement.querySelector('output').textContent = `${format(Number(input.value))} ${field.unit}`;
      });
      const answer = config.result(values);
      const meter = answer.meter == null ? '' : `<div class="lesson-meter" role="img" aria-label="${format(answer.meter,0)} % d'energia útil; ${format(100-answer.meter,0)} % dissipada"><span style="width:${answer.meter}%"></span></div>`;
      panel.querySelector('.lesson-result').innerHTML = `<div class="lesson-math">${answer.formula}</div><div class="lesson-explain">${answer.note}</div>${meter}`;
    };
    controls.addEventListener('input', refresh);
    refresh();
    return panel;
  }

  function makeStarter(key) {
    const example = document.createElement('div');
    example.className = 'worked worked-starter';
    example.innerHTML = `<h3>✅ Exemple fàcil · Pas a pas</h3><ol>${starters[key].map(step => `<li>${step}</li>`).join('')}</ol>`;
    return example;
  }

  function organize(key) {
    const topic = document.getElementById(key);
    if (!topic || topic.dataset.lessonOrganized) return;
    const theory = topic.querySelector(':scope > .theory-block');
    const theoryTitle = theory?.querySelector('.sequence-title');
    const topHeadings = [...topic.querySelectorAll(':scope > h3.sequence-title')];
    const formulaTitle = topHeadings.find(node => node.textContent.includes('REPERTORI DE FÓRMULES'));
    const examplesTitle = topHeadings.find(node => node.textContent.includes('EXEMPLES ·'));
    const dossier = topic.querySelector(':scope > .exercise-section');
    const dossierTitle = dossier?.querySelector('.sequence-title');
    if (!theory || !theoryTitle || !formulaTitle || !examplesTitle || !dossier || !dossierTitle) return;
    const formulaGrid = formulaTitle.nextElementSibling;
    if (!formulaGrid?.classList.contains('formula-grid')) return;

    /* Als motors i a Carnot, les il·lustracions i simulacions ja existeixen:
       conservem els nodes originals (i els seus controls), només els ordenem. */
    if (key === 'motors' || key === 'maquines') theory.after(formulaTitle, formulaGrid);
    theoryTitle.innerHTML = '<span>01</span> TEORIA · Entén el concepte';
    formulaTitle.innerHTML = '<span>02</span> FÓRMULES · Tria la relació correcta';

    const experimentTitle = sequence('EXPERIMENTA · Prova-ho tu mateix', '03');
    if (key === 'motors') {
      const explorationTitles = [...topic.querySelectorAll(':scope > h3.sequence-title')].filter(node => node !== formulaTitle && node !== examplesTitle);
      const firstExploration = explorationTitles[0];
      firstExploration.before(experimentTitle);
      explorationTitles.forEach((heading, index) => {
        heading.classList.add('lesson-substep');
        const num = heading.querySelector('span');
        if (num) num.textContent = String.fromCharCode(65 + index);
      });
    } else if (key === 'maquines') {
      const visualization = topic.querySelector(':scope > .carnot-visual');
      visualization ? visualization.before(experimentTitle) : examplesTitle.before(experimentTitle);
    } else {
      examplesTitle.before(experimentTitle, makePractice(key));
    }

    examplesTitle.innerHTML = '<span>04</span> EXEMPLES RESOLTS · Aprèn pas a pas';
    examplesTitle.after(makeStarter(key));
    dossierTitle.innerHTML = '<span>05</span> EXERCICIS DOSSIER · Per lliurar';

    const steps = [theoryTitle, formulaTitle, experimentTitle, examplesTitle, dossierTitle];
    const nav = document.createElement('nav');
    nav.className = 'lesson-steps';
    nav.setAttribute('aria-label', 'Cinc passos per estudiar aquest bloc');
    steps.forEach((heading, index) => {
      heading.id = `pas-${key}-${index+1}`;
      const link = document.createElement('a');
      link.className = 'lesson-step';
      link.href = '#' + heading.id;
      link.innerHTML = `<b>${String(index+1).padStart(2,'0')}</b><span>${titles[index]}</span>`;
      nav.append(link);
    });
    const intro = topic.querySelector(':scope > p');
    intro ? intro.after(nav) : theory.before(nav);
    topic.dataset.lessonOrganized = 'true';
  }

  function init() { topics.forEach(organize); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
