---
title: "Lessons Learned from Twitch"
date: "2024-01-17"
description: "A collection of non-engineering lessons learned from 3 years engineering at Twitch."
---

For the past three years, I was a software engineer at Twitch/AWS working on Video Distribution (Edge and Backbone) and Traffic Management Control for AWS IVS. I started as an intern in the Summer of 2020, received a fulltime return offer for 2021, grew into an early promotion 9 months in, became a domain expert in certain areas of the system and began leading projects. I was constantly seeking feedback and putting myself in new and uncomfortable situations in order to push myself to grow and become a more well-rounded team player. Here are some lessons I learned, in brief.

### Bias For Action
Engineering decisions should be guided by many things; business needs, urgency, data, effort level in relation to impact, etc. But many engineers can get lost in the data collection, ideation discussion, consensus building phase. There is always a more accurate metric you might be able to get, another insight to be gleaned from the data, another counter opinion that the effort level is too high but, at some point you just have to act. Striking a balance between measured data-driven decisions and moving at the same pace of technology itself is a necessity for any engineer. It's possible to think through edge case without falling into the destructive trap of becoming paralyzed in the decision-making process. Get comfortable with ambiguity, get comfortable with risks, get comfortable with knowing only 80% (that's generous, ship knowing barely 60%) of all possible outcomes, and get to work.

### Use Your Voice
By virtue of being young and inexperienced I often did not trust my own opinions on things and was uncomfortable speaking up in meetings let alone putting forward my own proposals. There is a difference between doubting yourself and understanding the limitations of your knowledge and being eager to learn.
> We don't learn from being right, we learn by making mistakes.
Ego should never be part of the equation. You can't be going into a situation thinking you have the correct or perfect interpretation of a problem space or solution. You just must be willing to discuss! Leave notions of correct and right and wrong at the door, leave hubris at the door, and be confident in your own opinions and in your ability to adapt to other peoples perspectives. Approaching discussions with senior colleagues must be done with humbleness but if you do not put yourself in the position to speak how could you ever have an opinion or voice that is values or noticed. 

<br>

You learn to be comfortable being uncomfortable and realize that part of learning is being challenged on your ideas and yes, by being wrong and open to hearing why. The worst leaders in an organization are ones that are not receptive to feedback, develop the skill early so you don't become a tyrant.

### You're in a Team
What really needs to be said. Nothing gets done in isolation. Everything is improved by outside perspective. You don't exist in a vacuum. Communicate with your team. Communicate cross-functionally. Contribute when someone needs an extra opinion. Volunteer to take things on. Bring empathy and respect into all your interactions with others. 

> You are only as good as your team.

<hr>

### Have Ideas
When I returned as a fulltime employee within the first month I proposed a small project to fill a gap in our monitoring system. We had thousands of servers in datacenters across the globe. Very often they'd be taken down for maintenance or upgrades, experience general datacenter disruptions, or have transient issues when being deployed to. These servers wouldn't have received new deployments during the downtime or when experiencing an issue. They'd come back into production running old code and we would never notice. This is called version drift. It became a noisy issue where our team would be paged near constantly for servers erroring when all they needed was a new deploy. We'd continuously try address this by raising the threshold for alarming but would start missing legitimate issues / the number of broken servers would increase. So I decided to fix it. It's always good to propose multiple solutions and explain why you're advocating for the one that you are so, I architected both a push-based and pull-based (are the servers going to communicate their health outwards to a watchful service or will the service try pull health information from the servers) solution, was in favour of pull-based (because we already had a push-based orchestrator that was concerned with the active deployable service used to manage the replication tree and didn't want to put more on the edge), and led design discussions. Some people (my very good friend both then and now so i forgive him) doubted the usefulness of this and up until this time, I doubted my ability to tactfully advocate for my idea in the face of push back. But I did, and very soon we reached consensus that the effort was worth the result. I implemented it and to this day (at time of writing the single remaining member of my team at AWS confirmed this) it runs every Monday + is till used adhoc by operations workers when they get paged.

> Have an idea, disagree + iterate + adapt, commit and get to work.