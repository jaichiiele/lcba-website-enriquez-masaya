const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const SCENARIOS = [
  {
    day:1, tag:'sales', tagLabel:'🛒 Sales', icon:'🍜',
    title:'Day 1 — First Day of Business!',
    desc:'Your store just opened! You bought 50 packs of instant noodles at ₱8.50 each. A customer wants to buy all 50 packs. You want a 20% markup on your cost.',
    math:'<strong>Cost per pack:</strong> ₱8.50 &nbsp;|&nbsp; <strong>Qty:</strong> 50 packs<br><strong>Markup:</strong> 20%<br><br>Formula: <em>Selling Price = Cost × (1 + Markup%)</em><br><em>Total Revenue = SP × Quantity</em><br><br><strong>What is the correct total selling price for all 50 packs?</strong>',
    choices:[
      {l:'A', t:'₱425.00', correct:false},
      {l:'B', t:'₱510.00', correct:true},
      {l:'C', t:'₱467.50', correct:false},
      {l:'D', t:'₱550.00', correct:false},
    ],
    explain:'₱8.50 × 1.20 = ₱10.20 per pack. ₱10.20 × 50 = <strong>₱510.00</strong>. Your markup profit is ₱85.00!',
    hit:  {cash:+510, rev:+510, exp:+425},
    miss: {cash:+400, rev:+400, exp:+425},
  },
  {
    day:2, tag:'expense', tagLabel:'💡 Expenses', icon:'🔌',
    title:'Day 2 — Electricity Bill Arrives',
    desc:'Your store consumed 85 kWh this billing period. The rate is ₱11.50/kWh, with a 12% VAT on the consumption charge.',
    math:'<strong>Consumption:</strong> 85 kWh &nbsp;|&nbsp; <strong>Rate:</strong> ₱11.50/kWh &nbsp;|&nbsp; <strong>VAT:</strong> 12%<br><br>Formula: <em>Charge = kWh × Rate</em><br><em>VAT = Charge × 12%</em><br><em>Total = Charge + VAT</em><br><br><strong>What is the total electricity bill?</strong>',
    choices:[
      {l:'A', t:'₱977.50', correct:false},
      {l:'B', t:'₱1,094.80', correct:true},
      {l:'C', t:'₱1,040.00', correct:false},
      {l:'D', t:'₱1,127.50', correct:false},
    ],
    explain:'Charge: 85 × ₱11.50 = ₱977.50. VAT: ₱977.50 × 0.12 = ₱117.30. Total: <strong>₱1,094.80</strong>. Always budget for VAT!',
    hit:  {cash:-1095, rev:0, exp:+1095},
    miss: {cash:-1200, rev:0, exp:+1200},
  },
  {
    day:3, tag:'opportunity', tagLabel:'📦 Opportunity', icon:'🧴',
    title:'Day 3 — Bulk Buying Deal!',
    desc:'A supplier offers 200 bottles of shampoo at ₱25 each with a 15% trade discount. Calculate how much you actually pay.',
    math:'<strong>Price:</strong> ₱25/bottle &nbsp;|&nbsp; <strong>Qty:</strong> 200 &nbsp;|&nbsp; <strong>Trade Discount:</strong> 15%<br><br>Formula: <em>Gross = Price × Qty</em><br><em>Discount = Gross × 15%</em><br><em>Net = Gross − Discount</em><br><br><strong>How much do you pay after the discount?</strong>',
    choices:[
      {l:'A', t:'₱4,750.00', correct:false},
      {l:'B', t:'₱3,750.00', correct:false},
      {l:'C', t:'₱4,250.00', correct:true},
      {l:'D', t:'₱4,500.00', correct:false},
    ],
    explain:'200 × ₱25 = ₱5,000. Discount: ₱5,000 × 15% = ₱750. Net: ₱5,000 − ₱750 = <strong>₱4,250.00</strong>. Great bulk deal!',
    hit:  {cash:-4250, rev:0, exp:+4250},
    miss: {cash:-5000, rev:0, exp:+5000},
  },
  {
    day:4, tag:'problem', tagLabel:'⚠️ Problem', icon:'😰',
    title:'Day 4 — Near-Expiry Goods!',
    desc:'30 cans of sardines (cost: ₱18 each, SP: ₱24 each) are near expiry. You offer a 25% discount on the selling price to clear them fast.',
    math:'<strong>Original SP:</strong> ₱24/can &nbsp;|&nbsp; <strong>Discount:</strong> 25% &nbsp;|&nbsp; <strong>Cost:</strong> ₱18/can &nbsp;|&nbsp; <strong>Qty:</strong> 30<br><br>Formula: <em>Discounted SP = SP × (1 − 25%)</em><br><em>Profit/Loss per can = Discounted SP − Cost</em><br><br><strong>What is your total profit or loss on all 30 cans?</strong>',
    choices:[
      {l:'A', t:'Loss of ₱90.00', correct:false},
      {l:'B', t:'Profit of ₱90.00', correct:false},
      {l:'C', t:'Loss of ₱180.00', correct:false},
      {l:'D', t:'Break-even (₱0 profit/loss)', correct:true},
    ],
    explain:'Discounted SP: ₱24 × 0.75 = ₱18. Profit per can: ₱18 − ₱18 = <strong>₱0</strong>. You break even — no profit, but no loss either. Better than throwing them away!',
    hit:  {cash:+540, rev:+540, exp:0},
    miss: {cash:+450, rev:+450, exp:0},
  },
  {
    day:5, tag:'sales', tagLabel:'💰 Profit & Loss', icon:'📊',
    title:'Day 5 — Weekly Sales Review',
    desc:'Time to review your books! Total sales revenue this week was ₱12,800. Your cost of goods sold (COGS) was ₱8,200. Operating expenses (rent, utilities, wages) totaled ₱2,100.',
    math:'<strong>Revenue:</strong> ₱12,800 &nbsp;|&nbsp; <strong>COGS:</strong> ₱8,200 &nbsp;|&nbsp; <strong>Operating Expenses:</strong> ₱2,100<br><br>Formula: <em>Gross Profit = Revenue − COGS</em><br><em>Net Profit = Gross Profit − Operating Expenses</em><br><br><strong>What is your net profit for the week?</strong>',
    choices:[
      {l:'A', t:'₱4,600', correct:false},
      {l:'B', t:'₱3,800', correct:false},
      {l:'C', t:'₱2,500', correct:true},
      {l:'D', t:'₱4,100', correct:false},
    ],
    explain:'Gross Profit: ₱12,800 − ₱8,200 = ₱4,600. Net Profit: ₱4,600 − ₱2,100 = <strong>₱2,500</strong>. A solid first week!',
    hit:  {cash:+2500, rev:+2500, exp:0},
    miss: {cash:+1500, rev:+1500, exp:0},
  },
  {
    day:6, tag:'tax', tagLabel:'🧾 Tax', icon:'🏛️',
    title:'Day 6 — BIR Tax Filing!',
    desc:'Quarterly tax time! Your gross sales totaled ₱48,500. Small businesses pay a 3% percentage tax on gross sales. You already paid ₱600 as advance tax.',
    math:'<strong>Gross Sales:</strong> ₱48,500 &nbsp;|&nbsp; <strong>Tax Rate:</strong> 3% &nbsp;|&nbsp; <strong>Advance Paid:</strong> ₱600<br><br>Formula: <em>Tax Due = Gross Sales × 3%</em><br><em>Tax Payable = Tax Due − Advance Tax</em><br><br><strong>How much tax do you still need to pay?</strong>',
    choices:[
      {l:'A', t:'₱1,455.00', correct:false},
      {l:'B', t:'₱945.00',   correct:false},
      {l:'C', t:'₱1,055.00', correct:false},
      {l:'D', t:'₱855.00',   correct:true},
    ],
    explain:'Tax Due: ₱48,500 × 3% = ₱1,455. Tax Payable: ₱1,455 − ₱600 = <strong>₱855.00</strong>. Always file on time to avoid penalties!',
    hit:  {cash:-855, rev:0, exp:+855},
    miss: {cash:-1455, rev:0, exp:+1455},
  },
  {
    day:7, tag:'opportunity', tagLabel:'🏦 Loan & Interest', icon:'💸',
    title:'Day 7 — Business Loan Offer!',
    desc:'A local bank offers a ₱20,000 loan at 8% simple interest per year for 2 years. Before deciding, calculate the total amount you will repay.',
    math:'<strong>Principal (P):</strong> ₱20,000 &nbsp;|&nbsp; <strong>Rate (R):</strong> 8%/year &nbsp;|&nbsp; <strong>Time (T):</strong> 2 years<br><br>Formula: <em>Simple Interest (I) = P × R × T</em><br><em>Total Repayment = P + I</em><br><br><strong>What is the total amount you will repay after 2 years?</strong>',
    choices:[
      {l:'A', t:'₱21,600', correct:false},
      {l:'B', t:'₱22,400', correct:false},
      {l:'C', t:'₱23,200', correct:true},
      {l:'D', t:'₱24,000', correct:false},
    ],
    explain:'I = ₱20,000 × 8% × 2 = ₱3,200. Total: ₱20,000 + ₱3,200 = <strong>₱23,200</strong>. Make sure the loan earns you more than the interest costs!',
    hit:  {cash:+20000, rev:0, exp:0},
    miss: {cash:+18000, rev:0, exp:+2000},
  },
];

let G = {};

const $ = id => document.getElementById(id);
const fmt = n => (n < 0 ? '-₱' : '₱') + Math.abs(Math.round(n)).toLocaleString();

function startGame() {
  const name = $('owner-name').value.trim() || 'Juan';
  G = { name, day:0, cash:5000, rev:0, exp:0, score:0, results:[], answered:false };
  show('screen-game');
  render();
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function render() {
  const sc = SCENARIOS[G.day];
  G.answered = false;

  $('day-badge').textContent = `📅 Day ${sc.day} of 7 — ${DAYS[sc.day-1]}`;

  const tag = $('sc-tag');
  tag.textContent = sc.tagLabel;
  tag.className = 'sc-tag tag-' + sc.tag;

  $('sc-icon').textContent  = sc.icon;
  $('sc-title').textContent = sc.title;
  $('sc-desc').textContent  = sc.desc;
  $('sc-math').innerHTML    = sc.math;

  const choicesEl = $('sc-choices');
  choicesEl.innerHTML = '';
  sc.choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="clabel">${c.l}.</span><span>${c.t}</span>`;
    btn.onclick = () => pick(btn, c);
    choicesEl.appendChild(btn);
  });

  $('sc-feedback').className = 'feedback-box';
  $('sc-feedback').innerHTML = '';
  $('next-btn').className = 'next-btn';
  $('next-btn').textContent = G.day < 6 ? `Next Day (Day ${G.day+2}) →` : 'See My Report Card 📊';

  dots();
  hud();
}

function pick(btn, choice) {
  if (G.answered) return;
  G.answered = true;

  const sc = SCENARIOS[G.day];
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);

  if (choice.correct) {
    btn.classList.add('correct');
    G.score += 100;
    apply(sc.hit);
    G.results.push('good');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.choice-btn').forEach(b => {
      if (b.querySelector('.clabel').textContent.replace('.','') === sc.choices.find(x=>x.correct).l)
        b.classList.add('reveal');
    });
    G.score += 20;
    apply(sc.miss);
    G.results.push('bad');
  }

  const fb = $('sc-feedback');
  fb.innerHTML = `<h4>${choice.correct ? '✅ Correct!' : '❌ Not quite!'}</h4>${sc.explain}`;
  fb.className = 'feedback-box show' + (choice.correct ? '' : ' bad');

  dots(); hud();
  $('next-btn').classList.add('show');
}

function apply(e) {
  if (e.cash) G.cash += e.cash;
  if (e.rev)  G.rev  += e.rev;
  if (e.exp)  G.exp  += e.exp;
}

function nextScenario() {
  G.day++;
  if (G.day >= SCENARIOS.length) endGame();
  else { render(); window.scrollTo({top:0,behavior:'smooth'}); }
}

function hud() {
  const c = $('hud-cash');
  c.textContent = fmt(G.cash);
  c.className = 'hud-val' + (G.cash>=5000?' good':G.cash>=2000?' warn':' bad');
  $('hud-rev').textContent   = fmt(G.rev);
  $('hud-exp').textContent   = fmt(G.exp);
  $('hud-score').textContent = G.score;
}

function dots() {
  const el = $('prog-dots');
  el.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = document.createElement('div');
    d.className = 'pdot' +
      (i < G.results.length ? (G.results[i]==='good' ? ' done-good' : ' done-bad') :
       i === G.day ? ' current' : '');
    el.appendChild(d);
  }
}

function endGame() {
  show('screen-end');
  const correct = G.results.filter(r=>r==='good').length;
  const pct = Math.round((correct/7)*100);
  const net = G.rev - G.exp;

  let grade, sub, rank, rStyle;
  if      (pct>=86) { grade='A'; sub='Outstanding Entrepreneur!';   rank='🏆 Top Trader';        rStyle='background:#d4f5e2;color:#005c35'; }
  else if (pct>=71) { grade='B'; sub='Promising Business Mind!';    rank='⭐ Rising Star';        rStyle='background:#e0ecff;color:#002a7a'; }
  else if (pct>=57) { grade='C'; sub='Keep Learning & Growing!';    rank='📚 Apprentice Trader';  rStyle='background:#fff3cc;color:#7a5000'; }
  else              { grade='D'; sub='More Practice Needed!';       rank='💪 Never Give Up!';     rStyle='background:#ffe0e0;color:#7a0000'; }

  $('end-owner').textContent   = `Store Owner: ${G.name}`;
  const fg = $('final-grade');
  fg.textContent = grade;
  fg.style.color = grade==='A'?'var(--green)':grade==='B'?'var(--navy)':grade==='C'?'#f59e0b':'#e04040';
  $('final-sub').textContent = sub;
  const rb = $('rank-badge');
  rb.textContent = rank; rb.style.cssText = rStyle + ';display:inline-block;padding:10px 28px;border-radius:30px;font-size:1.1rem;font-weight:800;margin-bottom:24px;';

  $('final-report').innerHTML = `
    <div class="report-row"><span class="rk">✅ Questions Correct</span><span class="rv pos">${correct} / 7</span></div>
    <div class="report-row"><span class="rk">📊 Accuracy</span><span class="rv">${pct}%</span></div>
    <div class="report-row"><span class="rk">🏆 Final Score</span><span class="rv">${G.score} pts</span></div>
    <div class="report-row"><span class="rk">💵 Ending Cash</span><span class="rv ${G.cash>=5000?'pos':'neg'}">${fmt(G.cash)}</span></div>
    <div class="report-row"><span class="rk">📈 Total Revenue</span><span class="rv pos">${fmt(G.rev)}</span></div>
    <div class="report-row"><span class="rk">📉 Total Expenses</span><span class="rv neg">${fmt(G.exp)}</span></div>
    <div class="report-row"><span class="rk">💰 Net Profit / Loss</span><span class="rv ${net>=0?'pos':'neg'}">${fmt(net)}</span></div>
  `;
  $('owner-name').value = G.name;
}