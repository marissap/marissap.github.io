---
title: "Lessons Learned from Twitch"
date: "2024-05-17"
description: "A collection of non-engineering lessons learned from 3 years engineering at Twitch."
---

For the past three years, I was a software engineer at Twitch/AWS working on Video Distribution (Edge and Backbone) and Traffic Management Control for AWS IVS. I started as an intern in the Summer of 2020, received a fulltime return offer for 2021, grew into an early promotion 9 months in, became a domain expert in certain areas of the system and began leading projects. I was constantly seeking feedback and putting myself in new and uncomfortable situations in order to push myself to grow and become a more well-rounded team player. Here are some lessons I learned, in brief.

### Bias For Action
Engineering decisions should be guided by many things; business needs, urgency, data, effort level in relation to impact, etc. But many engineers can get lost in the data collection, ideation discussion, consensus building phase. There is always a more accurate metric you might be able to get, another insight to be gleaned from the data, another counter opinion that the effort level is too high but, at some point you just have to act. Striking a balance between measured data-driven decisions and moving at the same pace of technology itself is a necessity for any engineer. It is folly to rush into an engineer project and it is equally as destructive to get paralyzed in the decision-making process. Get comfortable with ambiguity, get comfortable with risks, get comfortable with knowing only 80% of all possible outcomes, and get to work.

### Use Your Voice
By virtue of being young and inexperienced I often did not trust my own opinions on things and was uncomfortable speaking up in meetings let alone putting forward my own proposals. There is a difference between doubting yourself and understanding the limitations of your knowledge and being eager to learn.
> We don't learn from being right, we learn by making mistakes.
Ego should never be part of the equation. You can't be going into a situation thinking you have the correct or perfect interpretation of a problem space or solution. You just must be willing to discuss! Leave notions of correct and right and wrong at the door, leave hubris at the door, and be confident in your own opinions and in your ability to adapt to other peoples perspectives. Approaching discussions with senior colleagues must be done with humbleness but if you do not put yourself in the position to speak how could you ever have an opinion or voice that is values or noticed. 

<br>

This was something I primarily dealt with as an intern. When I returned fulltime, I felt much more comfortable with my team and my own knowledge and actively chose to do the scary thing and speak up. I was still wrong all the time, I'm not saying in four short months I had become an expert, not by any stretch of the imagination. I was simply comfortable being uncomfortable and had realized that part of learning is being challenged on your ideas and yes, by being wrong and open to hearing why.

### You're in a Team
What really needs to be said. Nothing gets done in isolation. Everything is improved by outside perspective. You don't exist in a vacuum. Communicate with your team. Communicate cross-functionally. Contribute when someone needs an extra opinion. Volunteer to take things on. Bring empathy and respect into all your interactions with others. 

> You are only as good as your team.

<hr>

#### One of my proudest projects
When I returned as a fulltime employee within the first month I proposed a small project to fill a gap in our monitoring system. We had thousands of servers in datacenters across the globe and very often they'd be taken down for maintenance or upgrades or general datacenter changes. They'd come back into production running old code and we would never notice. This is called version drift. It became a huge issue where my team would be paged near constantly for servers erroring months later and we'd realize it was because this whole time they were not being updated and therefore the code had broke. So I scoped a project and presented the idea to the senior engineers on my team. Upon enthusiastic support, I architected both a push-based and pull-based solution, was pro pull-based, and led design discussions to iterate on the designs. Some people doubted the usefulness of this and never ever before did I think I was capable of logically and strategically advocating for my idea in the face of that. But I did, and very soon we reached consensus that the effort was worth the result. I implemented it and to this day it runs every Monday + is till used adhoc by operations workers when they get paged.

> Have an idea, disagree + iterate + adapt, commit and get to work.