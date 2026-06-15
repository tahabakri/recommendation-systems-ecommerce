# Recommendation Systems in E-commerce — Interactive Demo

A small interactive website I built to *show* how e-commerce recommendation algorithms work, made for my **Machine Learning** course at **Georgian Technical University**.

Instead of just writing a report, I wanted something I could click through during my presentation. So I built a fake online store called **LUNA COLLECTIVE** on the left, and a "backend console" on the right that walks through what the recommendation engine is thinking for three different situations: a brand-new user (cold start), content-based filtering, and collaborative filtering.

🔗 **Live demo:** https://tahabakri.github.io/recommendation-systems-ecommerce/

> **Heads up — it's a teaching demo, not a trained model.** The console traces (similarity scores, the user × item matrix, the predictions) are *scripted* to illustrate how each algorithm reasons. There is no ML model running and no real user data. The whole thing is one self-contained HTML file with vanilla JavaScript. The Python-style console is for show — it makes the logic readable, the way a textbook diagram would. ([more detail here](docs/console-explained.md))

![The demo in its default cold-start state: on the left, the LUNA COLLECTIVE storefront greets a brand-new visitor with site-wide bestsellers; on the right, the backend console traces why — collaborative and content-based filtering are skipped, so it falls back to popularity.](assets/demo.png)

<p align="center"><em>Left: the storefront re-ranks itself live. Right: the console explains every decision. Click the three buttons to switch algorithms.</em></p>

---

## What this project is

This started as a written report (you can read the full thing in [`docs/report.md`](docs/report.md)). The report covers what machine learning is, the three main types of recommendation systems, real examples from Amazon / Netflix / Spotify / YouTube, and the usual problems like the cold-start problem and the filter bubble.

The demo is the part I'm most proud of. The idea: when you click one of the three buttons, **two things happen at once** —

1. **The store re-ranks itself** (left side) — different products, a different hero banner, a different "why you're seeing this" label.
2. **The console explains the decision** (right side) — it types out the steps the algorithm would take to produce that storefront.

The point is to make an abstract idea (*"how does Amazon decide what to show you?"*) something you can actually watch happen.

## The three engine states

| Button | What it shows | The idea |
| --- | --- | --- |
| **01 · Cold Start** | A brand-new visitor with zero history. The store falls back to site-wide bestsellers, the same for everyone. | You can't personalise for someone you know nothing about yet — so a hybrid system shows popular items until it learns more. This is the **cold-start problem**. |
| **02 · Content-Based** | The user opened a mystery novel, so the store fills with similar mysteries and a "You May Also Like" row. | Match items by their **own attributes** (genre, themes, author style) using cosine similarity. No other shoppers needed. |
| **03 · Collaborative** | Tech products, ranked from a small user × item purchase matrix with the active shopper's blanks predicted. | Find shoppers with **overlapping purchase history** and recommend what they bought — Amazon's *"customers who bought this also bought."* |

## What I learned

This was as much a web-dev exercise as a machine-learning one, and honestly the explaining was the hard part. A few things that stuck:

- **The three algorithm families finally clicked when I had to *visualise* them.** Reading "content-based vs collaborative" in a textbook is one thing; deciding what the storefront should literally look like for each one forced me to actually understand the difference. Content-based only needs the item. Collaborative needs other people. Hybrid mixes them to cover each other's weak spots.
- **Cold start is the problem that ties it all together.** Once I understood *why* a brand-new user breaks collaborative filtering (no neighbours, sparse matrix), the reason hybrid systems exist made sense — you need a fallback.
- **Matrix factorisation as "filling in the blanks."** I represented collaborative filtering as a small table of 1s and `?`s, and predicting the `?`s is the whole game. That made the maths feel concrete instead of scary.
- **Explaining a model honestly matters.** I deliberately did *not* call this "AI-powered." It's a scripted visualisation, and saying so clearly is more useful than overselling it. A recommender that can't explain itself is a "black box," and I didn't want my demo to be one either.
- **Plain HTML + a CDN goes a long way.** No build step, no framework, no dependencies to install — one file that runs anywhere and deploys to GitHub Pages for free. Good reminder that you don't always need a toolchain.

## Running it

There's nothing to install. It's one static file.

```bash
# clone, then just open the file
git clone https://github.com/tahabakri/recommendation-systems-ecommerce.git
cd recommendation-systems-ecommerce
# open index.html in any browser (double-click works), or serve it:
python -m http.server 8000   # then visit http://localhost:8000
```

> The demo loads Tailwind, Google Fonts, and a few Unsplash product photos from a CDN, so it looks best with an internet connection. If you're offline, the layout still works — there's a CSS fallback and the book covers are drawn with inline SVG.

## What's in this repo

```
.
├── index.html                    # the live interactive demo (this is what GitHub Pages serves)
├── README.md
├── docs/
│   ├── report.md                 # the full course report, formatted for GitHub
│   ├── report.pdf                # the formal submitted version
│   ├── presentation.pptx         # the slides
│   ├── presentation-script.md    # what I said while demoing, button by button
│   └── console-explained.md      # plain-English walkthrough of every console line
└── assets/                       # screenshot(s)
```

## Tech

Vanilla JavaScript · HTML · [Tailwind CSS](https://tailwindcss.com/) (CDN) · Google Fonts (Inter, Playfair Display, JetBrains Mono). No framework, no build step.

## Credits & sources

The algorithms are presented after the standard references in the field — Aggarwal (2016) for the overview, Linden et al. (2003) for Amazon's item-to-item collaborative filtering, and Koren et al. (2009) for matrix factorisation. Full reference list is in the [report](docs/report.md#11-references). Product photos are from [Unsplash](https://unsplash.com/). Product names, prices, and reviews are made up for the demo.

## Academic context

- **Student:** Taha Hamza (Group 108358-1)
- **Course:** Machine Learning
- **Lecturer:** Dali Magrakvelidze
- **University:** Georgian Technical University
- **Submitted:** June 2026

## License

[MIT](LICENSE) — feel free to learn from it or reuse it. If it's useful for your own study, a star is appreciated.
