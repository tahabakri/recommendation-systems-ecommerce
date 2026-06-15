// Pure functions that return HTML strings for the storefront UI.
// They read shared constants (icons, palettes) but touch no DOM and hold no
// state apart from a gradient-id counter, so they are easy to reason about.
import { ICON } from './icons.js';
import { PALETTES } from './data.js';

/* ---------- star rating (supports half stars) ---------- */
export function starsHTML(rating) {
  let out = '<span class="stars" aria-hidden="true">';
  for (let i = 1; i <= 5; i++) {
    const fill = rating >= i ? '#C9A227' : (rating >= i - 0.5 ? 'url(#half)' : 'none');
    out += '<svg width="12" height="12" viewBox="0 0 24 24" fill="' + fill + '" stroke="#C9A227" stroke-width="1.3"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.6 3.2L6.7 14l-5-4.8 7-.9z"/></svg>';
  }
  out += '</span>';
  return out;
}

/* ---------- wrap a book title onto up to 3 lines ---------- */
function wrapTitle(title) {
  const words = title.split(' ');
  const lines = [];
  let cur = '';
  words.forEach(w => {
    if ((cur + ' ' + w).trim().length > 13 && cur) { lines.push(cur); cur = w; }
    else { cur = (cur + ' ' + w).trim(); }
  });
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}

/* ---------- designed mystery book covers, drawn as inline SVG (no network) ---------- */
let coverSeq = 0;
function bookCover(title, author, paletteKey) {
  const p = PALETTES[paletteKey] || PALETTES.navy;
  const id = 'cv' + (coverSeq++); // unique gradient ids so covers don't bleed into each other
  const lines = wrapTitle(title.toUpperCase());
  const startY = 168 - (lines.length - 1) * 22;
  const titleTspans = lines.map((ln, i) =>
    '<tspan x="150" dy="' + (i === 0 ? 0 : 44) + '">' + ln + '</tspan>'
  ).join('');
  return '' +
  '<div class="cover"><svg viewBox="0 0 300 375" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
    '<defs>' +
      '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="' + p[0] + '"/>' +
        '<stop offset="1" stop-color="' + p[1] + '"/>' +
      '</linearGradient>' +
      '<radialGradient id="' + id + 'v" cx="0.5" cy="0.32" r="0.85">' +
        '<stop offset="0" stop-color="#ffffff" stop-opacity="0.10"/>' +
        '<stop offset="1" stop-color="#000000" stop-opacity="0.45"/>' +
      '</radialGradient>' +
    '</defs>' +
    '<rect width="300" height="375" fill="url(#' + id + 'g)"/>' +
    '<rect width="300" height="375" fill="url(#' + id + 'v)"/>' +
    '<rect x="14" y="14" width="272" height="347" fill="none" stroke="' + p[2] + '" stroke-opacity="0.45" stroke-width="1"/>' +
    '<text x="150" y="56" text-anchor="middle" fill="' + p[2] + '" font-family="Inter, sans-serif" font-size="11" font-weight="700" letter-spacing="5">MYSTERY</text>' +
    '<line x1="120" y1="68" x2="180" y2="68" stroke="' + p[2] + '" stroke-opacity="0.6" stroke-width="1"/>' +
    '<g transform="translate(150,108)" stroke="' + p[2] + '" stroke-opacity="0.7" fill="none" stroke-width="1.4">' +
      '<circle cx="0" cy="0" r="9"/><path d="M-4 7 L-6 20 H6 L4 7"/>' +
    '</g>' +
    '<text x="150" y="' + startY + '" text-anchor="middle" fill="#FBFAF7" font-family="\'Playfair Display\', serif" font-size="30" font-weight="700">' + titleTspans + '</text>' +
    '<line x1="95" y1="320" x2="205" y2="320" stroke="' + p[2] + '" stroke-opacity="0.5" stroke-width="1"/>' +
    '<text x="150" y="344" text-anchor="middle" fill="' + p[2] + '" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" letter-spacing="3">' + author.toUpperCase() + '</text>' +
  '</svg></div>';
}

/* ---------- product photo with a graceful icon/gradient fallback ---------- */
function photoMedia(p) {
  const grad = p.fallbackGrad || 'linear-gradient(135deg,#2b2b33,#15151a)';
  return '' +
  '<div class="media" style="background:' + grad + '">' +
    '<div class="media-fallback">' + (ICON[p.fallbackIcon] || ICON.box) +
      '<span class="text-[12px] leading-tight">' + p.title + '</span></div>' +
    '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display=\'none\'" />' +
  '</div>';
}

/* ---------- full product card (grid item) ---------- */
export function productCard(p, idx) {
  const media = p.type === 'book' ? bookCover(p.title, p.author, p.palette) : photoMedia(p);
  const chipColor =
    p.chipKind === 'cold' ? 'background:#FBF1DC;color:#8A6A1E;' :
    p.chipKind === 'content' ? 'background:#E9E8FB;color:#4B47B8;' :
    'background:#E2F4EA;color:#2C7A4E;';
  const priceBlock = p.compare
    ? '<span class="text-ink font-bold">' + p.price + '</span> <span class="text-ink/35 line-through text-[12px] ml-1">' + p.compare + '</span>'
    : '<span class="text-ink font-bold">' + p.price + '</span>';
  const subtitle = p.type === 'book' ? p.author : p.category;

  return '' +
  '<div class="group reveal" style="animation-delay:' + (idx * 65) + 'ms">' +
    '<div class="relative rounded-xl overflow-hidden bg-white ring-1 ring-black/[0.05] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-18px_rgba(17,21,27,0.28)]">' +
      media +
      '<span class="chip absolute top-2.5 left-2.5 shadow-sm" style="' + chipColor + '">' + (p.chipIcon ? ICON[p.chipIcon] : '') + p.chip + '</span>' +
      '<button class="wish absolute top-2.5 right-2.5 w-8 h-8 grid place-items-center rounded-full bg-white/85 backdrop-blur hover:bg-white transition" aria-label="Save">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#11151B" stroke-width="1.7"><path d="M12 20s-7-4.6-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.4 12 20 12 20z"/></svg>' +
      '</button>' +
    '</div>' +
    '<div class="pt-3">' +
      '<div class="flex items-start justify-between gap-2">' +
        '<h3 class="font-semibold text-[13.5px] sm:text-[14px] text-ink leading-snug">' + p.title + '</h3>' +
      '</div>' +
      '<p class="text-ink/50 text-[12px] mt-0.5">' + subtitle + '</p>' +
      '<div class="flex items-center gap-1.5 mt-1.5">' + starsHTML(p.rating) +
        '<span class="text-[11px] text-ink/45">' + p.rating.toFixed(1) + ' · ' + p.reviews + '</span></div>' +
      '<div class="flex items-center justify-between mt-2.5">' +
        '<div class="text-[14px]">' + priceBlock + '</div>' +
        '<button class="add-bag text-[12px] font-semibold text-white bg-ink hover:bg-accent active:scale-95 transition px-3 py-1.5 rounded-full" aria-label="Add ' + p.title + ' to bag">Add</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/* ---------- compact slide for the "You May Also Like" row ---------- */
export function bookSlide(p, idx) {
  return '' +
  '<div class="slide reveal w-[140px] sm:w-[160px]" style="animation-delay:' + (idx * 55) + 'ms">' +
    '<div class="rounded-lg overflow-hidden ring-1 ring-black/[0.06] shadow-sm">' + bookCover(p.title, p.author, p.palette) + '</div>' +
    '<h4 class="font-semibold text-[12.5px] text-ink mt-2 leading-snug">' + p.title + '</h4>' +
    '<p class="text-ink/50 text-[11px]">' + p.author + '</p>' +
    '<div class="flex items-center justify-between mt-1">' +
      '<span class="text-[12.5px] font-bold text-ink">' + p.price + '</span>' +
      '<span class="chip text-[10px] py-0.5" style="background:#E9E8FB;color:#4B47B8;">sim ' + p.sim + '</span>' +
    '</div>' +
  '</div>';
}

/* ---------- dynamic hero banner per engine state ---------- */
export function heroHTML(state) {
  if (state === 'cold') {
    return '<div class="hero-in" style="background:linear-gradient(120deg,#11151B 0%,#2c2466 100%);color:#fff;border-radius:1rem;padding:1.6rem 1.75rem;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);">' +
      '<span class="chip" style="background:rgba(255,255,255,.12);color:#fff;">' + ICON.snow + 'New visitor</span>' +
      '<h1 class="font-display font-bold text-2xl sm:text-[32px] leading-tight mt-3">Welcome to LUNA COLLECTIVE</h1>' +
      '<p class="text-white/70 text-sm sm:text-[15px] mt-2 max-w-xl">We don’t know your taste yet — so here’s what everyone is loving right now. Your storefront will personalise after your first few clicks.</p>' +
    '</div>';
  }
  if (state === 'content') {
    return '<div class="hero-in" style="background:linear-gradient(120deg,#1c1b3a 0%,#4b47b8 100%);color:#fff;border-radius:1rem;padding:1.6rem 1.75rem;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);">' +
      '<span class="chip" style="background:rgba(255,255,255,.14);color:#fff;">' + ICON.sparkle + 'Because you viewed The Silent Witness</span>' +
      '<h1 class="font-display font-bold text-2xl sm:text-[32px] leading-tight mt-3">More mysteries like the one you opened</h1>' +
      '<p class="text-white/75 text-sm sm:text-[15px] mt-2 max-w-xl">Matched on <strong>genre</strong>, author style and themes — using only the item’s own attributes. No other-shopper data required.</p>' +
    '</div>';
  }
  return '<div class="hero-in" style="background:linear-gradient(120deg,#0c2a1d 0%,#1f7a4e 100%);color:#fff;border-radius:1rem;padding:1.6rem 1.75rem;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);">' +
    '<span class="chip" style="background:rgba(255,255,255,.16);color:#fff;">' + ICON.users + 'Shoppers like you</span>' +
    '<h1 class="font-display font-bold text-2xl sm:text-[32px] leading-tight mt-3">Customers who bought this also bought</h1>' +
    '<p class="text-white/80 text-sm sm:text-[15px] mt-2 max-w-xl">Predicted from <strong>3 shoppers</strong> with overlapping purchase histories — you don’t need to have viewed these items first.</p>' +
  '</div>';
}

/* ---------- on-page explainer card (folds in the old explainer doc) ---------- */
export function explainerHTML(item) {
  return '' +
  '<div class="hero-in rounded-xl border border-black/[0.07] bg-white/70 backdrop-blur px-4 sm:px-5 py-4">' +
    '<div class="flex items-center gap-2 mb-2">' +
      '<span class="w-1.5 h-1.5 rounded-full bg-accent"></span>' +
      '<h3 class="font-semibold text-[13.5px] text-ink">' + item.title + '</h3>' +
    '</div>' +
    '<p class="text-ink/65 text-[12.5px] leading-relaxed">' + item.what + '</p>' +
    '<p class="text-ink/65 text-[12.5px] leading-relaxed mt-1.5">' + item.why + '</p>' +
    '<p class="text-accent text-[12.5px] font-semibold leading-relaxed mt-2.5">' + item.takeaway + '</p>' +
  '</div>';
}

/* ---------- the three-approach comparison table ---------- */
export function compareTableHTML(c) {
  const head = '<thead><tr>' +
    c.headers.map((h, i) => '<th' + (i === 0 ? ' class="rowhead"' : '') + '>' + h + '</th>').join('') +
    '</tr></thead>';
  const body = '<tbody>' +
    c.rows.map(r => '<tr>' +
      r.map((cell, i) => i === 0 ? '<th class="rowhead">' + cell + '</th>' : '<td>' + cell + '</td>').join('') +
    '</tr>').join('') +
    '</tbody>';
  return '<table class="compare-table">' + head + body + '</table>';
}
