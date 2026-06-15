# Recommendation Systems in E-commerce Using Machine Learning

> **Course report** — full written version of the project.
> A formatted copy of the submitted PDF ([`report.pdf`](report.pdf)).

**Student:** Taha Hamza (Group 108358-1)
**Course / Module:** 10790 Machine Learning
**Lecturer:** Dali Magrakvelidze
**Institution:** Georgian Technical University
**Date of submission:** 13 June 2026

---

## Table of Contents

1. [Abstract](#abstract)
2. [Introduction](#1-introduction)
3. [What is Machine Learning?](#2-what-is-machine-learning)
4. [What are Recommendation Systems?](#3-what-are-recommendation-systems)
5. [Types of Recommendation Systems](#4-types-of-recommendation-systems)
   - [Content-Based Filtering](#41-content-based-filtering)
   - [Collaborative Filtering](#42-collaborative-filtering)
   - [Hybrid Recommendation Systems](#43-hybrid-recommendation-systems)
6. [How Machine Learning Improves Recommendation Systems](#5-how-machine-learning-improves-recommendation-systems)
7. [Real-World Applications](#6-real-world-applications)
8. [Advantages](#7-advantages)
9. [Challenges and Limitations](#8-challenges-and-limitations)
10. [Future Trends](#9-future-trends)
11. [Conclusion](#10-conclusion)
12. [References](#11-references)

---

## Abstract

Online shopping has grown very fast in the last twenty years. Today, websites like Amazon sell millions of different products. This is good for customers because they have many choices. But it also creates a problem. When there are too many products, people cannot look at all of them. They feel lost, and sometimes they leave the website without buying anything.

This report studies how recommendation systems help to solve this problem. A recommendation system is a computer program that suggests products to each user. It tries to guess what the user will like. The report explains how machine learning, which is a part of artificial intelligence, makes these suggestions better. It describes the three main types of recommendation systems: content-based filtering, collaborative filtering, and hybrid systems. It also gives real examples from companies such as Amazon, Netflix, and Spotify. Finally, the report looks at the advantages, the problems, and the future of this technology. The main finding is that recommendation systems are now very important for online shops, both for customers and for businesses.

---

## 1. Introduction

Twenty years ago, most people bought things in physical shops. They walked between the shelves, looked at the products, and asked the shop workers for help. Today, the situation is very different. Many people buy things online from their phone or computer. They can shop at any time, from any place.

Online shopping has many good points. But it also has one big problem: too much choice. A large online shop such as Amazon sells hundreds of millions of products. No human can look at all of these items. If a customer must search through millions of products alone, shopping becomes slow and tiring.

This is where recommendation systems become useful. A recommendation system is a tool that helps each user find products they may like (Aggarwal, 2016). You have probably seen these systems many times. When Amazon shows you a list with the title "Customers who bought this item also bought," that is a recommendation system at work. When Netflix suggests a new film for you, or when YouTube plays a video you did not search for, these are also recommendation systems.

This report explains how recommendation systems work in e-commerce. The word "e-commerce" simply means buying and selling things on the internet. The report focuses on the role of machine learning, which is the technology that makes modern recommendations smart and personal.

The report has several parts. First, it explains what machine learning is. Then it explains what recommendation systems are and how many types exist. After that, it shows how machine learning improves these systems. The report also gives real examples, lists the advantages and the problems, and looks at the future. The goal is to give a clear and simple picture of this important topic.

---

## 2. What is Machine Learning?

Before we talk about recommendation systems, we need to understand machine learning, because it is the engine behind them.

Machine learning is a part of artificial intelligence (AI). Artificial intelligence means making computers do tasks that normally need human thinking (Russell & Norvig, 2021). Machine learning is one way to reach this goal.

In normal programming, a human writes clear rules for the computer. For example, a programmer might write: "If the price is more than 100 dollars, call it expensive." The computer only follows these fixed rules and does nothing more.

Machine learning works in a different way. Instead of giving the computer fixed rules, we give it many examples, which we call data. The computer studies this data and finds patterns by itself. After this learning step, the computer can make decisions about new data that it has never seen before.

Here is a simple example. Imagine we want a computer to tell the difference between a cat and a dog in photos. With machine learning, we do not write rules like "a cat has pointed ears." Instead, we show the computer thousands of cat photos and thousands of dog photos. The computer learns the patterns on its own. Later, when it sees a new photo, it can guess if it is a cat or a dog.

There are three main types of machine learning:

- **Supervised learning:** We give the computer data with the correct answers (these answers are called labels). The computer learns to connect the input to the answer. For example, we show it many emails marked as "spam" or "not spam," and it learns to tell the difference.
- **Unsupervised learning:** We give the computer data without any answers. The computer must find patterns and groups by itself. For example, it might group customers who behave in a similar way.
- **Reinforcement learning:** The computer learns by trial and error. It gets a reward when it does something good and no reward when it does something bad. Over time, it learns the best actions.

Recommendation systems can use all three types, but supervised and unsupervised learning are the most common.

---

## 3. What are Recommendation Systems?

Now that we understand machine learning, we can look at recommendation systems in more detail.

A recommendation system is a computer program that suggests items to a user (Ricci et al., 2015). The items can be products, films, songs, news articles, or even people to follow on social media. The main goal is simple: to show each person the things they are most likely to want.

Recommendation systems are sometimes called "recommender systems" or "recommendation engines." All these names mean the same thing.

To make a good suggestion, the system needs information. This information usually comes from three places:

- **Information about the user:** their age, location, and past behaviour, such as what they bought or clicked before.
- **Information about the items:** the type of product, its price, its brand, and its description.
- **Information about other users:** what similar people liked or bought.

The system takes all this information and tries to predict a score for each item. The score shows how much the user will probably like that item. Then the system shows the items with the highest scores at the top of the page.

Let us look at a real example. When you open Amazon and you are logged in, the home page is not the same for everyone. Amazon shows you products based on your past activity. If you bought running shoes last week, you may see socks, sports clothes, or water bottles today. Amazon does this because it learned that people who buy running shoes often buy these other things too.

This personal experience is the heart of a recommendation system. Two different users can open the same website at the same time and see completely different products.

---

## 4. Types of Recommendation Systems

There is more than one way to build a recommendation system. The three main types are content-based filtering, collaborative filtering, and hybrid systems (Aggarwal, 2016). We will look at each one.

### 4.1 Content-Based Filtering

Content-based filtering looks at the features of the items. The word "content" here means the details or features of a product, such as its category, brand, colour, or price.

The main idea is simple: if you liked one item, you will probably like other items that are similar to it.

For example, imagine you watch a science fiction film on a streaming website. A content-based system looks at the features of that film: its type (science fiction), its actors, and its director. Then it suggests other films with similar features. It does not care what other people watched. It only cares about the item itself and your own history.

The same idea works in online shopping. If you buy a mystery novel on Amazon, a content-based system may suggest other mystery novels, or other books by the same writer.

**Advantages of content-based filtering:**

- It does not need information about other users. It works even if you are the only customer.
- It can recommend new or less popular items, because it only looks at the features.
- It is easy to explain. The system can say, "We suggest this because it is similar to what you liked."

**Problems of content-based filtering:**

- It can only suggest items that are similar to your past choices. This means you always see the same kind of products and rarely discover something new. This problem is sometimes called "over-specialisation."
- It needs good descriptions for every item. If the item details are missing or weak, the system cannot work well.

### 4.2 Collaborative Filtering

Collaborative filtering works in a very different way. Instead of looking at the features of items, it looks at the behaviour of users. The word "collaborative" means working together, and that is the key idea: the system uses the actions of many users together.

The main idea is this: if two people liked the same things in the past, they will probably like the same things in the future.

Let us use an example. Imagine two customers, Sara and Maria. In the past, both of them bought the same five books. Now Sara buys a sixth book that Maria has not seen yet. A collaborative system will suggest this sixth book to Maria, because Sara and Maria have similar taste.

This is exactly the idea behind Amazon's famous line: "Customers who bought this item also bought." Amazon looks at the buying behaviour of millions of users and finds these patterns.

There are two main kinds of collaborative filtering:

- **User-based:** The system finds users who are similar to you and suggests what they liked.
- **Item-based:** The system finds items that are often liked together and suggests them. For example, if many people who buy a phone also buy a phone case, the system will suggest the case.

**Advantages of collaborative filtering:**

- It can help you discover new things outside your usual taste, because it learns from other people.
- It does not need detailed item descriptions. It only needs user behaviour.

**Problems of collaborative filtering:**

- The **"cold start" problem.** When a new user joins, the system knows nothing about them, so it cannot make good suggestions. The same problem happens with a new item that nobody has bought yet.
- The **"sparsity" problem.** In a big shop with millions of products, most users buy only a small number of items. So there is not much data for each user, and finding patterns becomes harder.

### 4.3 Hybrid Recommendation Systems

A hybrid recommendation system mixes two or more methods together. The word "hybrid" means a mix of different things. The goal is to take the good points of each method and reduce the weak points.

For example, a hybrid system might use collaborative filtering most of the time. But when a new user joins (the cold start problem), it can switch to content-based filtering, which does not need other users' data. In this way, the system always has a way to make a suggestion.

Most large companies today use hybrid systems, because no single method is perfect. Netflix is a good example. It mixes information about what you watched, the features of the films, and the behaviour of millions of other users.

**Advantages of hybrid systems:**

- They give better and more accurate suggestions than a single method.
- They reduce common problems such as the cold start problem.

**Problems of hybrid systems:**

- They are more complex to build and to maintain.
- They need more computer power and more data.

The table below compares the three main types.

| Feature | Content-Based | Collaborative | Hybrid |
| --- | --- | --- | --- |
| What it looks at | Item features | User behaviour | Both |
| Needs other users' data? | No | Yes | Sometimes |
| Can discover new tastes? | Weak | Strong | Strong |
| Cold start problem | Smaller | Bigger | Reduced |
| Complexity | Low | Medium | High |
| Typical example | "Similar to what you liked" | "Customers also bought" | Netflix mix |

*Table 1: A comparison of the three main types of recommendation systems.*

---

## 5. How Machine Learning Improves Recommendation Systems

Simple recommendation systems can work with basic maths and fixed rules. But machine learning makes them much more powerful. In this section, we look at the main ways machine learning improves recommendations.

**First, machine learning finds hidden patterns.** Humans cannot study the behaviour of millions of users by hand. Machine learning can study huge amounts of data and find patterns that people would never notice. For example, it might find that people who buy a certain coffee also often buy a certain book. This connection is not obvious, but the data shows it.

**Second, machine learning makes recommendations more personal.** Older systems often put users into a few large groups. Machine learning can treat each user as an individual. It can learn your exact taste, not just the taste of your group.

**Third, machine learning improves over time.** The more you use a website, the more data the system collects about you. With machine learning, the system keeps learning and getting better. Your suggestions this month are usually better than your suggestions last year.

**Fourth, machine learning can handle different kinds of data at the same time.** It can look at your clicks, your purchases, your search words, the time you spend on a page, and even the time of day. By mixing all this information, it makes a stronger guess.

A modern method that machine learning uses is called **"deep learning."** Deep learning uses systems called neural networks, which are loosely inspired by the human brain. These networks are very good at finding complex patterns in large data. Companies such as Netflix and YouTube use deep learning to power their recommendations.

Another useful method is called **"matrix factorisation."** This is a mathematical technique used in collaborative filtering. In simple words, it takes a very large table of users and items and breaks it into smaller parts. These smaller parts help the system find hidden features, such as the fact that a user likes "funny films" or "action films," even if nobody wrote these labels. This method became famous during the Netflix Prize competition in 2009, when teams from around the world competed to improve Netflix's recommendation system (Koren et al., 2009).

| Point | Simple system | Machine learning system |
| --- | --- | --- |
| Patterns | Only obvious ones | Hidden and complex ones |
| Personalisation | By large groups | By individual user |
| Improvement | Stays the same | Learns and improves |
| Data used | Small amount | Large and varied |
| Accuracy | Lower | Higher |

*Table 2: Simple rule-based systems compared with machine learning systems.*

---

## 6. Real-World Applications

Recommendation systems are not just theory. They are used by many of the biggest companies in the world. In this section, we look at some real examples.

**Amazon.** Amazon is one of the most famous users of recommendation systems. The company has said that a large part of its sales comes from recommendations. Amazon mainly uses item-based collaborative filtering (Linden et al., 2003). Its system is behind features such as "Customers who bought this item also bought" and "Recommended for you." It also sends personal emails with product suggestions.

**Netflix.** Netflix is a streaming service for films and series. It uses recommendation systems to keep users watching. The company has reported that most of the content people watch on Netflix comes from its recommendations, not from search (Gomez-Uribe & Hunt, 2015). Netflix even changes the picture (the thumbnail) of a film for different users, to make it more attractive to each person.

**Spotify.** Spotify is a music streaming service. It uses recommendation systems to create playlists for each user. Its well-known "Discover Weekly" playlist gives every user a list of new songs every week, based on their listening history and on the habits of similar users.

**YouTube.** YouTube uses recommendations to decide which videos to show next. When a video plays automatically after another, that choice comes from a recommendation system. YouTube uses deep learning to study what billions of people watch (Covington et al., 2016).

These examples show one clear point. For these companies, recommendation systems are not a small extra feature. They are a central part of the business. Good recommendations keep users on the platform longer, and this brings more sales and more profit.

---

## 7. Advantages

Recommendation systems bring benefits to both customers and businesses. Let us look at both sides.

**Benefits for customers:**

- They save time. Customers do not need to search through millions of products. The system brings useful items to them.
- They give a personal experience. The website feels made for them, not for everyone.
- They help people discover new things. A good system can introduce products that the customer did not know about but really likes.

**Benefits for businesses:**

- They sell more. Good recommendations lead to more purchases. This is sometimes called "cross-selling" (suggesting related products) and "up-selling" (suggesting a better, more expensive product).
- They keep customers loyal. When a website understands a customer well, the customer is more likely to come back.
- They use their stock better. Recommendations can also show less popular products to the right people, so these products still sell.

---

## 8. Challenges and Limitations

Recommendation systems are powerful, but they are not perfect. They face several challenges and problems.

**The cold start problem.** As mentioned before, the system struggles with new users and new items because it has no data about them. This is one of the biggest challenges.

**Data privacy.** To make good recommendations, the system collects a lot of personal data. Many people worry about how companies use this data. Laws such as the GDPR in Europe (the General Data Protection Regulation) now control how companies must protect user data. Companies must balance good recommendations with respect for privacy.

**The filter bubble.** When a system only shows you things similar to your past choices, you may stop seeing new and different ideas. You get trapped in a "bubble" of similar content. This can limit a person's view of the world, especially for news and social media.

**Scalability.** Big companies have millions of users and products. Running a recommendation system for so many people needs a lot of computer power and is expensive. The system must also be fast, because users do not want to wait.

**Wrong or strange recommendations.** Sometimes the system makes a bad guess. For example, if you buy a gift for another person, the system may think you like that product and keep suggesting similar items. This can annoy users.

**Bias.** If the data is not fair, the recommendations can also be unfair. For example, a system might always suggest popular items and ignore smaller brands, which is not always good for customers or for the market.

---

## 9. Future Trends

Recommendation systems keep changing as technology grows. Here are some trends that may shape the future.

- **More use of deep learning.** Deep learning is becoming more common and more powerful. In the future, recommendation systems will understand users even better, using complex neural networks.
- **Real-time recommendations.** Future systems will react faster to what you do right now. For example, the system might change its suggestions during a single shopping session, based on what you click in that moment.
- **More types of data.** Future systems may use images, voice, and video to understand what users want. For example, a customer could take a photo of a product, and the system would find similar items.
- **Explainable recommendations.** Today, many systems are like a "black box," which means users do not know why they got a certain suggestion. In the future, companies will try to explain their recommendations more clearly, so users can trust them more.
- **More focus on privacy.** Because of new laws and growing user worry, future systems will try to give good recommendations while collecting less personal data. One new method is called "federated learning," where the learning happens on the user's own device, so personal data does not need to leave the phone.
- **Help from large language models.** New AI tools, similar to chatbots, may let users describe what they want in normal language. For example, a customer could type, "I need a warm jacket for a cold trip under 100 dollars," and the system would understand and suggest the right products.

---

## 10. Conclusion

Online shopping has given customers more choice than ever before. But too much choice can be a problem. Recommendation systems solve this problem by guiding each user to the products they will probably like.

This report explained how these systems work. We saw that machine learning is the engine behind modern recommendations. Instead of following fixed rules, machine learning learns from data and finds patterns by itself.

We looked at the three main types of recommendation systems. Content-based filtering uses the features of items. Collaborative filtering uses the behaviour of users. Hybrid systems mix both methods, and most big companies use them today.

We also saw real examples from Amazon, Netflix, Spotify, and YouTube. For these companies, recommendations are not a small feature; they are a central part of the business that brings real profit.

Finally, we looked at the advantages, the problems, and the future. Recommendation systems help both customers and businesses, but they also raise concerns about privacy, fairness, and filter bubbles. As technology grows, these systems will become smarter, faster, and hopefully more respectful of user privacy.

In my opinion, recommendation systems are very useful, because they save time and help customers find products that match their interests. At the same time, I think companies should be careful to protect users' privacy and to be honest about the data they collect. If they do both of these things, then the customers and the businesses can benefit together.

In short, recommendation systems have become a key part of modern e-commerce. They make online shopping easier for people and more successful for businesses. With careful and fair use, they will continue to improve the way we shop online.

---

## 11. References

- Aggarwal, C. C. (2016). *Recommender systems: The textbook.* Springer.
- Covington, P., Adams, J., & Sargin, E. (2016). Deep neural networks for YouTube recommendations. In *Proceedings of the 10th ACM Conference on Recommender Systems* (pp. 191–198). ACM.
- Gomez-Uribe, C. A., & Hunt, N. (2015). The Netflix recommender system: Algorithms, business value, and innovation. *ACM Transactions on Management Information Systems, 6*(4), 1–19.
- Koren, Y., Bell, R., & Volinsky, C. (2009). Matrix factorization techniques for recommender systems. *Computer, 42*(8), 30–37.
- Linden, G., Smith, B., & York, J. (2003). Amazon.com recommendations: Item-to-item collaborative filtering. *IEEE Internet Computing, 7*(1), 76–80.
- Ricci, F., Rokach, L., & Shapira, B. (Eds.). (2015). *Recommender systems handbook* (2nd ed.). Springer.
- Russell, S., & Norvig, P. (2021). *Artificial intelligence: A modern approach* (4th ed.). Pearson.
