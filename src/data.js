// All demo data lives here: the product catalogues for each engine state,
// the book-cover colour palettes, the control/engine metadata, and the
// plain-English teaching copy shown in the on-page explainer.
//
// Everything is illustrative — made-up product names, prices and reviews.
// There is no real model or user data anywhere in this project.

/* ---------- mystery book-cover palettes [dark, darker, accent] ---------- */
export const PALETTES = {
  navy:     ['#0E1B3A', '#1B2E5A', '#9DB4E0'],
  oxblood:  ['#2A0E12', '#591C25', '#E0A0A8'],
  teal:     ['#06222A', '#0E3B47', '#86D6D0'],
  charcoal: ['#14171A', '#2B3036', '#C2C9D1'],
  plum:     ['#1F0E2A', '#3D1B52', '#CFA6E6'],
  forest:   ['#0C1F16', '#163A28', '#92DBAC'],
  slate:    ['#101620', '#243246', '#A7BBDE'],
  wine:     ['#230B1A', '#4A1536', '#E0A0C9'],
};

/* ---------- COLD START: site-wide bestsellers (same for every new visitor) ---------- */
export const POPULAR = [
  { type:'photo', title:'Orbit Runner Sneakers', category:'Footwear', price:'$129', rating:4.7, reviews:'2.4k',
    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#b23a2e,#7a1f17)', fallbackIcon:'shoe',
    chip:'Trending #1', chipIcon:'flame', chipKind:'cold' },
  { type:'photo', title:'Halo Acetate Sunglasses', category:'Eyewear', price:'$95', rating:4.6, reviews:'1.1k',
    img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#3a3f4a,#1c1f26)', fallbackIcon:'glasses',
    chip:'Bestseller', chipIcon:'flame', chipKind:'cold' },
  { type:'photo', title:'Meridian Classic Watch', category:'Watches', price:'$189', rating:4.8, reviews:'980',
    img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#4a4334,#231f17)', fallbackIcon:'watch',
    chip:'Top rated', chipIcon:'flame', chipKind:'cold' },
  { type:'photo', title:'Carry-All Leather Tote', category:'Bags', price:'$145', rating:4.5, reviews:'1.7k',
    img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#6b4f37,#3a2b1d)', fallbackIcon:'bag',
    chip:'Trending #4', chipIcon:'flame', chipKind:'cold' },
  { type:'photo', title:'Lumen No.5 Eau de Parfum', category:'Fragrance', price:'$78', rating:4.9, reviews:'3.2k',
    img:'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#7a5b66,#3a2730)', fallbackIcon:'bottle',
    chip:'Most loved', chipIcon:'flame', chipKind:'cold' },
  { type:'photo', title:'Terra Ceramic Mug Set', category:'Home', price:'$42', rating:4.4, reviews:'860',
    img:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#8a6a4f,#473327)', fallbackIcon:'mug',
    chip:'Trending #6', chipIcon:'flame', chipKind:'cold' },
];

/* ---------- CONTENT-BASED: more mysteries, matched on item attributes ---------- */
export const MYSTERIES = [
  { type:'book', title:'The Silent Witness', author:'Clara Jensen', palette:'navy', price:'$18.99', rating:4.8, reviews:'5.6k',
    chip:'You viewed this', chipIcon:'sparkle', chipKind:'content' },
  { type:'book', title:'The Last Confession', author:'Marcus Vale', palette:'oxblood', price:'$16.50', rating:4.6, reviews:'3.1k',
    chip:'Genre · Mystery', chipIcon:'tag', chipKind:'content' },
  { type:'book', title:'What the Tide Took', author:'Elena Frost', palette:'teal', price:'$19.99', rating:4.7, reviews:'2.2k',
    chip:'Genre · Mystery', chipIcon:'tag', chipKind:'content' },
  { type:'book', title:'No Witnesses Left', author:'R. K. Doyle', palette:'charcoal', price:'$14.99', rating:4.5, reviews:'1.8k',
    chip:'Genre · Mystery', chipIcon:'tag', chipKind:'content' },
  { type:'book', title:'The Glass Alibi', author:'Nadia Brooks', palette:'plum', price:'$17.25', rating:4.6, reviews:'2.9k',
    chip:'Genre · Mystery', chipIcon:'tag', chipKind:'content' },
  { type:'book', title:'Midnight in Hollow Pine', author:'Theo Hart', palette:'forest', price:'$21.00', rating:4.4, reviews:'1.3k',
    chip:'Genre · Mystery', chipIcon:'tag', chipKind:'content' },
];

/* ---------- "You May Also Like" slider (content-based similarity scores) ---------- */
export const SIMILAR = [
  { title:'Ashes of the Verdict', author:'H. Cole', palette:'wine', price:'$15.99', sim:'0.93' },
  { title:'The Quiet Tenant', author:'Marisa Lund', palette:'slate', price:'$18.50', sim:'0.92' },
  { title:'Cold Harbor Lies', author:'D. Whitmore', palette:'navy', price:'$16.99', sim:'0.90' },
  { title:'The Ninth Testimony', author:'A. Rourke', palette:'charcoal', price:'$20.00', sim:'0.89' },
  { title:'A Study in Cinders', author:'P. Hale', palette:'oxblood', price:'$13.99', sim:'0.87' },
  { title:'The Drowning Hour', author:'Vera Knox', palette:'teal', price:'$19.25', sim:'0.86' },
  { title:'Salt & Silence', author:'Owen Mercer', palette:'plum', price:'$17.99', sim:'0.85' },
];

/* ---------- COLLABORATIVE: tech bought by shoppers with similar histories ---------- */
export const TECH = [
  { type:'photo', title:'Aether Audio Headphones', category:'Over-ear · ANC', price:'$349', rating:4.9, reviews:'4.8k',
    img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#2c2f36,#121317)', fallbackIcon:'headphones',
    chip:'92% match', chipIcon:'users', chipKind:'collab' },
  { type:'photo', title:'MacBook Air M3', category:'Laptops · 13"', price:'$1,299', rating:4.8, reviews:'9.1k',
    img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#9aa0a6,#4b4f55)', fallbackIcon:'laptop',
    chip:'89% match', chipIcon:'users', chipKind:'collab' },
  { type:'photo', title:'Luma FitWatch Ultra', category:'Smartwatch', price:'$429', rating:4.7, reviews:'3.6k',
    img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#2a2e3a,#13151c)', fallbackIcon:'watch',
    chip:'Predicted 4.6/5', chipIcon:'sparkle', chipKind:'collab' },
  { type:'photo', title:'Pulse Pro Wireless Earbuds', category:'Earbuds · ANC', price:'$199', rating:4.6, reviews:'5.2k',
    img:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#3a3f4a,#1a1d22)', fallbackIcon:'earbuds',
    chip:'86% match', chipIcon:'users', chipKind:'collab' },
  { type:'photo', title:'Nova Mechanical Keyboard', category:'Peripherals', price:'$159', rating:4.7, reviews:'2.7k',
    img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#33373f,#16181d)', fallbackIcon:'keyboard',
    chip:'Predicted 4.4/5', chipIcon:'sparkle', chipKind:'collab' },
  { type:'photo', title:'Vista Mirrorless Camera', category:'Cameras', price:'$899', rating:4.8, reviews:'1.9k',
    img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80',
    fallbackGrad:'linear-gradient(135deg,#2b2e34,#121317)', fallbackIcon:'camera',
    chip:'84% match', chipIcon:'users', chipKind:'collab' },
];

/* ---------- control buttons (the three engine states) ---------- */
export const CONTROLS = [
  { id:'cold',    n:'01', icon:'snow',  title:'Cold Start Problem',      desc:'Brand-new user · zero history' },
  { id:'content', n:'02', icon:'tag',   title:'Content-Based Filtering', desc:'Match item attributes (genre)' },
  { id:'collab',  n:'03', icon:'users', title:'Collaborative Filtering', desc:'Shoppers with shared history' },
];

/* ---------- per-state storefront labels ---------- */
export const ENGINE_META = {
  cold:    { name:'Hybrid (fallback)',         strategy:'popularity prior',     badge:'Cold start · non-personalised',   badgeIcon:'snow',
             shelfSub:'Popular across the store — shown to every new visitor' },
  content: { name:'Content-Based',             strategy:'cosine similarity',    badge:'Content-based · genre match',     badgeIcon:'tag',
             shelfSub:'Similar to an item you viewed — matched on attributes' },
  collab:  { name:'Collaborative (item-item)', strategy:'matrix factorisation', badge:'Collaborative · shopper overlap', badgeIcon:'users',
             shelfSub:'Bought by shoppers with purchase histories like yours' },
};

/* ---------- plain-English explainer shown on the page per state ----------
   This is the teaching content that used to live in a separate doc — folded
   into the site so the page explains itself. */
export const EXPLAIN = {
  cold: {
    title: 'Why is everyone seeing the same products?',
    what:  'You are a brand-new visitor, so the engine has zero clicks, purchases or ratings to learn from.',
    why:   'With no history, collaborative filtering has nobody to compare you to, and content-based has nothing you have liked to match. So a hybrid system falls back to site-wide bestsellers — identical for everyone — until you interact.',
    takeaway: 'A new user has no data, so we show popular items. This is the cold-start problem.',
  },
  content: {
    title: 'Why these particular mysteries?',
    what:  'You opened a mystery novel, so the engine reads that book’s own attributes — genre, mood, themes, author style.',
    why:   'It turns those features into a vector and uses cosine similarity to find other books whose features sit closest. It never looks at other shoppers — only the item itself and your own history.',
    takeaway: 'We compare the features of items to find similar ones. No other users needed.',
  },
  collab: {
    title: 'Why recommend things you never searched for?',
    what:  'The engine builds a small table of which shoppers bought which products (1 = purchased).',
    why:   'It finds the customers whose buying history overlaps most with yours, then uses matrix factorisation to fill in the blanks — predicting the items similar shoppers bought but you have not seen yet.',
    takeaway: 'We find customers with similar buying history and recommend what they bought.',
  },
};

/* ---------- the three approaches at a glance (from the report, Table 1) ---------- */
export const COMPARE = {
  headers: ['', 'Content-Based', 'Collaborative', 'Hybrid'],
  rows: [
    ['What it looks at',          'Item features',              'User behaviour',          'Both'],
    ["Needs other users' data?",  'No',                         'Yes',                     'Sometimes'],
    ['Can discover new tastes?',  'Weak',                       'Strong',                  'Strong'],
    ['Cold-start problem',        'Smaller',                    'Bigger',                  'Reduced'],
    ['Complexity',                'Low',                        'Medium',                  'High'],
    ['Typical example',           '“Similar to what you liked”','“Customers also bought”', 'Netflix mix'],
  ],
};
