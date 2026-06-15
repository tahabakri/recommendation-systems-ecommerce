// The scripted "backend console" traces shown on the right-hand panel.
//
// IMPORTANT: these traces are a *teaching visualisation*, not a running model.
// The similarity scores, the user×item matrix and the predictions are
// hand-written to illustrate how each algorithm reasons. The console is
// styled to look like a Python backend purely so the logic reads clearly.

// ---- token-colour span helpers (map to .tk-* classes in styles.css) ----
const com = t => '<span class="tk-com">' + t + '</span>';
const str = t => '<span class="tk-str">' + t + '</span>';
const num = t => '<span class="tk-num">' + t + '</span>';
const key = t => '<span class="tk-key">' + t + '</span>';
const tag = (t, c) => '<span class="tk-tag ' + c + '">[' + t + ']</span>';

// One log line: { html, delay } — delay (ms) is how long before the next line.
const L = (html, delay) => ({ html, delay: delay == null ? 150 : delay });

// The user × item purchase matrix rendered inside the collaborative trace.
// Declared above LOGS because LOGS.collab calls it while building its array.
function matrixTable() {
  return '' +
    '<table class="cmatrix">' +
      '<thead><tr><th></th><th>Hdph</th><th>Mac</th><th>Watch</th><th>Keyb</th></tr></thead>' +
      '<tbody>' +
        '<tr><td>Cust_1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>' +
        '<tr><td>Cust_2</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>' +
        '<tr><td>Cust_3</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>' +
        '<tr class="active"><td>Cust_4</td><td>1</td><td>1</td><td class="q">?</td><td class="q">?</td></tr>' +
      '</tbody>' +
    '</table>';
}

export const LOGS = {
  cold: [
    L(com('# luna_recsys/engine.py — hybrid recommender'), 60),
    L(tag('engine', 't-eng') + ' new session detected → user_id = ' + str('"guest_8842"')),
    L(tag('profile', 't-eng') + ' history_vector = []   ' + com('# 0 clicks  0 purchases  0 ratings')),
    L(tag('cold-start', 't-warn') + ' insufficient signal for personalisation', 320),
    L(tag('strategy', 't-eng') + ' resolving HYBRID fallback policy …', 260),
    L('  ' + key('if') + ' user.interactions == ' + num('0') + ':'),
    L('      collaborative_filtering()  → <span class="tk-skip">SKIP</span>  ' + com('# no neighbours  sparse matrix')),
    L('      content_based()            → <span class="tk-skip">SKIP</span>  ' + com('# no liked items to match')),
    L('      popularity_prior()         → <span class="tk-ok">ENGAGE</span>', 280),
    L(tag('rank', 't-evt') + ' score = global_popularity × recency × margin'),
    L(tag('output', 't-ok') + ' served ' + num('6') + ' site-wide bestsellers ' + com('(non-personalised)'), 220),
    L(com('# profile personalises after first interactions — Aggarwal (2016)'), 120),
  ],
  content: [
    L(com('# luna_recsys/content_based.py'), 60),
    L(tag('event', 't-evt') + ' user viewed item → ' + str('"The Silent Witness"') + ' · Clara Jensen'),
    L(tag('extract', 't-eng') + ' item.features = {'),
    L('     genre: ' + str('"Mystery"') + ',  mood: ' + str('"slow-burn"') + ','),
    L('     themes: [' + str('"crime"') + ', ' + str('"detective"') + ', ' + str('"small-town"') + '],'),
    L('     author_style: ' + str('"Clara Jensen"') + ' }', 240),
    L(tag('vectorise', 't-eng') + ' tf_idf(genre + author + tags + synopsis) → target_vec'),
    L(key('for') + ' item ' + key('in') + ' catalog:'),
    L('     sim = ' + key('cosine_similarity') + '(target_vec, item.vec)', 260),
    L(tag('match', 't-evt') + ' filter genre == ' + str('"Mystery"') + ' → rank by sim:'),
    L('     ' + str('"Ashes of the Verdict"') + ' ……… sim = ' + num('0.93')),
    L('     ' + str('"The Quiet Tenant"') + ' …… sim = ' + num('0.92')),
    L('     ' + str('"Cold Harbor Lies"') + ' ……… sim = ' + num('0.90')),
    L('     ' + str('"The Ninth Testimony"') + ' ………… sim = ' + num('0.89'), 240),
    L(tag('output', 't-ok') + ' top-N similar items → "You May Also Like"'),
    L(com('# needs no other-user data — works for a single shopper'), 120),
  ],
  collab: [
    L(com('# luna_recsys/collaborative.py — item-to-item (Linden et al. 2003)'), 60),
    L(tag('engine', 't-eng') + ' mode = ' + str('"COLLABORATIVE_FILTERING"')),
    L(tag('matrix', 't-evt') + ' building user × item interaction matrix …  ' + com('1 = purchased'), 240),
    { html: matrixTable(), delay: 420 },
    L(tag('neighbours', 't-evt') + ' cosine(rows) → nearest to Customer_4:', 200),
    L('     Customer_1   sim = ' + num('0.87')),
    L('     Customer_3   sim = ' + num('0.81')),
    L('     Customer_2   sim = ' + num('0.74'), 240),
    L(tag('predict', 't-eng') + ' matrix_factorisation(k=' + num('20') + ') fills blanks  ' + com('# Koren 2009')),
    L('     Watch      → score ' + num('4.6') + '/5'),
    L('     Keyboard   → score ' + num('4.4') + '/5', 240),
    L(tag('output', 't-ok') + ' "Customers who bought this also bought" → ' + num('6') + ' items'),
    L(com('# discovers items the shopper never searched for'), 120),
  ],
};
