---
title: "On Not Being Afraid of Tech Debt"
date: "2023-03-06"
description: "Highly-scaled distributed systems are a sum of moving pieces. A resilient system can't let tech debt be dead weight."
---

I've been working on performance optimizations for a microservice I own at work for some time now. I kind of fell into ownership by chance, one day when investigating an on-call issue I found some logs littered with spam from this service. It had been neglected and the consumer client was patchwork code, anything to just "keep the lights on." Large scale distributed systems are a sum of constantly moving pieces.

<br>

Let's remember, Twitch operates the largest dedicated live video CDN in the world, that's the delivery of over 25Tbps to more than 5MM concurrent viewers. I specifically work on the custom edge software that delivers video on thousands of hosts worldwide and the complex and introspective algorithms that decide what server a user is assigned to when they start playback. The system at large is constantly in flux, traffic patterns are disrupted by large streams, region specific requirements are introduced, and also bare-metal servers can just go down. Sometimes computers are just finicky or someone pulls out the wrong wire in a datacenter.

<br>

There are many reasons variation and changes occur, especially over a longer period of time and when a system scales. It's difficult to scope out a project and forsee all the ways in which it will interact in the larger system by the time it's implemented.

<hr>

I could talk about the need for constant iteration in the design process but I think that topic has been long exhausted. We know that engineering requires flexibility throughout the design, implementation, and productionization process. Instead, I want to say that even with the systems in place to encourage iterative development, tech debt is seemingly inevitable.

<br>

There is always a new feature to implement, a customer request, an exciting new microservice that will be the all-encompassing control plane of our engineering brain's dreams. There are operational tasks constantly arising and bugs that need to be addressed faster than we can find a "perfect" solution. So if tech debt is inevitable, why do we look at with disgust and not embrace it for what it can teach us.

<hr>

When I started the performance optimizations the first thing I did was look at the original design doc. How did we go from that to the patchwork code in front of me? Do these bottlenecks jump out at me in the architecture diagram? Asking questions like that not only helped me with my task but when a few weeks ago a new project proposal was dropped in a neatly formatted google doc and slacked to me, I could immediately see similarities in the architecture to the one I had just decided needed to be severely altered.

<br>

Now we can learn from the past, we can talk about the ways this might scale differently, how this service might take load in a way we can't conceptualize right now, what data might we want to collect this time round so we don't fall into the same traps, etc., etc. To me, the service that I own is not something to be ashamed of or annoyed at, it is an artifact of what our system looked like at the time and it is a learning tool for how to build moving forward.

<hr>

When we look at tech debt as dead weight on an organization or product, we see it as a prison of our own making. Tech debt hold lessons for future work, it reminds us that scoping projects correctly is key to their success, and that while we will have to devote some engineering time to future optimizations and improvements; whatever we build today will always be better than what we built yesterday.