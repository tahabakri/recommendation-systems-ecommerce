// App wiring: caches DOM nodes, renders the storefront for each engine state,
// streams the console trace, and handles cart/wishlist/slider interactions.
// initApp() is the old IIFE body — main.js calls it once after the module loads
// (module scripts are deferred, so the DOM is ready by then).
import { ICON } from './icons.js';
import { POPULAR, MYSTERIES, TECH, SIMILAR, CONTROLS, ENGINE_META, EXPLAIN, COMPARE } from './data.js';
import { productCard, bookSlide, heroHTML, explainerHTML, compareTableHTML } from './templates.js';
import { LOGS } from './console.js';

export function initApp() {
  const $ = sel => document.querySelector(sel);
  const shelfEl        = $('#shelf');
  const heroEl         = $('#hero');
  const logEl          = $('#console-log');
  const explainerEl    = $('#explainer');
  const similarSection = $('#similar-section');
  const similarSlider  = $('#similar-slider');

  let streamToken = 0; // cancels an in-flight trace when a newer one starts
  let cartCount = 0;

  function setStatus(state) {
    const pill = $('#status-pill');
    if (state === 'running') {
      pill.style.background = 'rgba(227,179,65,.16)';
      pill.style.color = '#E3B341';
      pill.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-[#E3B341] pulse-dot"></span> running';
    } else {
      pill.style.background = 'rgba(84,224,138,.14)';
      pill.style.color = '#54E08A';
      pill.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-[#54E08A]"></span> ready';
    }
  }

  function streamLogs(lines) {
    const myToken = ++streamToken;
    logEl.innerHTML = '';
    setStatus('running');
    let i = 0;
    (function next() {
      if (myToken !== streamToken) return;       // a newer run cancelled this one
      if (i >= lines.length) {
        setStatus('ready');
        const caret = document.createElement('div');
        caret.className = 'log-line';
        caret.innerHTML = '<span class="tk-com">guest@luna</span>:<span class="t-eng">~</span>$ <span class="caret"></span>';
        logEl.appendChild(caret);
        logEl.scrollTop = logEl.scrollHeight;
        return;
      }
      const line = lines[i++];
      const div = document.createElement('div');
      div.className = 'log-line';
      div.innerHTML = line.html;
      logEl.appendChild(div);
      logEl.scrollTop = logEl.scrollHeight;
      setTimeout(next, line.delay);
    })();
  }

  function renderShelf(products) {
    shelfEl.innerHTML = products.map((p, i) => productCard(p, i)).join('');
  }

  function renderSimilar(show) {
    if (show) {
      similarSlider.innerHTML = SIMILAR.map((p, i) => bookSlide(p, i)).join('');
      similarSection.classList.remove('hidden');
    } else {
      similarSection.classList.add('hidden');
      similarSlider.innerHTML = '';
    }
  }

  function setActiveButton(id) {
    document.querySelectorAll('.ctrl').forEach(b => {
      b.classList.toggle('active', b.dataset.id === id);
    });
  }

  function applyState(id) {
    const meta = ENGINE_META[id];

    // storefront
    heroEl.innerHTML = heroHTML(id);
    if (id === 'cold')         renderShelf(POPULAR);
    else if (id === 'content') renderShelf(MYSTERIES);
    else                       renderShelf(TECH);
    renderSimilar(id === 'content');

    // on-page explainer (rides the same animation as the hero/shelf)
    explainerEl.innerHTML = explainerHTML(EXPLAIN[id]);

    // labels
    $('#shelf-sub').textContent = meta.shelfSub;
    $('#engine-badge').innerHTML = (ICON[meta.badgeIcon] || '') + meta.badge;
    $('#engine-name').textContent = meta.name;
    $('#engine-strategy').textContent = meta.strategy;
    $('#console-file').textContent =
      id === 'cold' ? 'luna_recsys/engine.py' :
      id === 'content' ? 'luna_recsys/content_based.py' :
      'luna_recsys/collaborative.py';

    // console
    streamLogs(LOGS[id]);
    setActiveButton(id);
  }

  function buildControls() {
    const wrap = $('#controls');
    wrap.innerHTML = CONTROLS.map(c =>
      '<button class="ctrl text-left rounded-xl px-3.5 py-3 bg-[#0E141B] flex items-center gap-3.5 w-full" data-id="' + c.id + '">' +
        '<span class="ctrl-dot w-2 h-2 rounded-full bg-white/20 shrink-0"></span>' +
        '<span class="w-9 h-9 rounded-lg grid place-items-center bg-white/[0.05] text-accent2 shrink-0">' + ICON[c.icon] + '</span>' +
        '<span class="min-w-0 flex-1">' +
          '<span class="flex items-center gap-2">' +
            '<span class="text-[10px] font-mono text-white/30">' + c.n + '</span>' +
            '<span class="font-semibold text-[13.5px] text-white truncate">' + c.title + '</span>' +
          '</span>' +
          '<span class="block text-[11.5px] text-white/45 mt-0.5">' + c.desc + '</span>' +
        '</span>' +
        '<svg aria-hidden="true" class="shrink-0 text-white/25" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>' +
      '</button>'
    ).join('');

    wrap.querySelectorAll('.ctrl').forEach(btn => {
      btn.addEventListener('click', () => applyState(btn.dataset.id));
    });
  }

  let toastTimer = null;
  function toast(msg) {
    const t = $('#toast');
    $('#toast-text').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  document.addEventListener('click', e => {
    const add = e.target.closest('.add-bag');
    if (add) {
      cartCount++;
      $('#cart-count').textContent = cartCount;
      toast('Added to bag');
      return;
    }
    const wish = e.target.closest('.wish');
    if (wish) {
      wish.classList.toggle('saved');
      const svg = wish.querySelector('svg');
      const saved = wish.classList.contains('saved');
      svg.setAttribute('fill', saved ? '#B0894E' : 'none');
      svg.setAttribute('stroke', saved ? '#B0894E' : '#11151B');
      toast(saved ? 'Saved to wishlist' : 'Removed from wishlist');
      return;
    }
    const arrow = e.target.closest('.slide-arrow');
    if (arrow) {
      const dir = parseInt(arrow.dataset.scroll, 10);
      similarSlider.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  });

  $('#rerun').addEventListener('click', () => {
    const active = document.querySelector('.ctrl.active');
    streamLogs(LOGS[active ? active.dataset.id : 'cold']);
  });

  // ---- init ----
  $('#compare').innerHTML = compareTableHTML(COMPARE);   // static comparison table
  buildControls();
  applyState('cold');   // new-user narrative: open on the cold-start state
}
