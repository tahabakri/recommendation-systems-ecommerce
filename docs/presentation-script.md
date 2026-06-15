# Presentation Script — Recommendation Systems Live Demo
**Student:** Taha Hamza (Group 108358-1) · **Course:** Machine Learning · **Lecturer:** Dali Magrakvelidze

Read the normal text out loud. The **[CLICK ...]** lines tell you what to do on screen.

---

## 1. Opening (start here)

"Good morning. My name is Taha Hamza. My topic is **Recommendation Systems in E-commerce**.

A recommendation system is a program that suggests products to each user. It tries to guess what you will like — like Amazon's *'Customers who bought this also bought'*.

I built a small live website to show you how it works. Let me show you."

---

## 2. Explain the screen

"The screen has two sides.

On the **left** is an online shop called **LUNA COLLECTIVE** — this is what the customer sees.

On the **right** is the **backend console** — this is the 'brain' of the system. When I click a button, you will see the shop change on the left, and the system will explain its thinking on the right.

There are three buttons — three different algorithms. Let me show each one."

---

## 3. Button 1 — Cold Start Problem

**[CLICK the first button: "Cold Start Problem"]**

"This is a **brand-new user**. The system knows nothing about them — zero history.

So what can it recommend? On the left, it just shows the **most popular products** — sneakers, sunglasses, a watch. The same for everyone.

On the right, you can read the steps. The system tries collaborative filtering — but it **skips** it, because there are no other users to compare. It tries content-based — it **skips** it too, because the user has not liked anything yet.

So it uses a **hybrid fallback**: it shows popular items until it learns more about you. This solves the famous **cold start problem**."

---

## 4. Button 2 — Content-Based Filtering

**[CLICK the second button: "Content-Based Filtering"]**

"Now imagine the user opened a mystery book — *The Silent Witness* by Clara Jensen.

On the left, the shop now shows **more mystery books**, and a section *'You May Also Like — Similar Mysteries'*.

How? Look at the right side. The system reads the **features** of the book — its genre is *'Mystery'*, its themes are crime and detective. Then it uses **cosine similarity** to find other books with similar features.

The important point: it does **not** need other users. It only looks at the **content** of the item. That is why it is called **content-based filtering**."

---

## 5. Button 3 — Collaborative Filtering

**[CLICK the third button: "Collaborative Filtering"]**

"Now the shop shows tech products — headphones, a MacBook, a smartwatch.

On the right is a **table of customers and products**. A '1' means that customer bought that product.

Look at **Customer 4** — the active user. The system finds other customers with **similar buying history** — Customer 1 and Customer 3 bought almost the same things.

So the system predicts: 'Customer 4 will probably also like the Watch and the Keyboard', because similar people bought them. This is **collaborative filtering** — it learns from the **behaviour of other people**. This is the method Amazon uses."

---

## 6. Closing

"So those are the three main types:
- **Content-based** — looks at the item's features.
- **Collaborative** — looks at other users' behaviour.
- **Hybrid** — mixes both, and solves the cold start problem.

Modern companies like Netflix and Spotify use **hybrid** systems with machine learning.

Thank you. Any questions?"

---

### Tips
- You can press **"re-run"** (top-right of the console) to replay the typing animation if you want to show it again.
- The demo opens on **Cold Start** by default — so click in order: 1 → 2 → 3.
- Speak slowly. Click the button, wait 2 seconds for the screen to update, then talk.
