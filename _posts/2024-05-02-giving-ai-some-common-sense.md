---
layout: article
title: Giving AI Some Common Sense
date: '2024-05-02'
categories:
- Technical Articles
reading_time: 7
sitemap: true
robots: index,follow
description: A readable reflection on Ron Brachman's Northeastern lecture about why AI systems need common sense before they can be trusted to act autonomously.
image: /assets/blog/giving-ai-some-common-sense/cover.png
source_url: https://ai.northeastern.edu/event/giving-ai-some-common-sense
---

Modern AI can write fluent paragraphs, generate code, summarize long documents, identify objects in images, and outperform humans on many narrow benchmarks. Yet it can still fail in ways that feel deeply strange. It may miss an obvious implication, misunderstand a simple physical situation, invent a confident answer, or behave as if the world is only a pattern in text rather than a place with causes, goals, constraints, and consequences.

That gap is what Ron Brachman's Northeastern University lecture, "Giving AI Some Common Sense," is about. The talk asks a question that has followed artificial intelligence for decades: what would it take for machines to understand enough about the everyday world to act sensibly when something unexpected happens?

![](/assets/blog/giving-ai-some-common-sense/cover.png)

## Why Common Sense Matters

Common sense is easy to underestimate because humans use it constantly without noticing. We know that a glass can break if dropped, that a person standing in the rain may want shelter, that a locked door blocks entry, that a promise creates an expectation, and that a red traffic light stuck forever is probably malfunctioning.

An AI system without this kind of background understanding can still look impressive in controlled settings. It can optimize, classify, imitate, and predict. But when the situation shifts outside its training distribution, it may not know what is normal, what is dangerous, what matters, or what should be questioned.

![](/assets/blog/giving-ai-some-common-sense/figure-02.png)

This is why common sense is not a decorative feature. It is part of trust. If an AI system is going to act in the real world, especially with autonomy, it needs more than pattern recognition. It needs enough everyday understanding to avoid absurd actions, explain its behavior, and adapt when the obvious script breaks.

## The Problem with Narrow Intelligence

Much of AI progress has come from building systems that are excellent at specific tasks. A model can play a game, recognize a face, translate text, recommend a product, or navigate a lane. These abilities are useful, but they do not automatically add up to general understanding.

![](/assets/blog/giving-ai-some-common-sense/figure-03.png)

Narrow systems can be brittle. They succeed when the world behaves like the examples they were trained on, then fail when the situation requires broader knowledge. A self-driving system may detect lanes and obstacles, but still struggle with a bizarre road condition. A chatbot may produce a polished response while missing the practical meaning of the question.

Common sense is what helps humans bridge that gap. We use background knowledge to infer missing details, notice contradictions, and choose reasonable actions even when no one has given us an exact rule for the situation.

![](/assets/blog/giving-ai-some-common-sense/figure-04.png)

## What Counts as Common Sense?

Common sense is not one single database of facts. It is a mix of knowledge, expectations, reasoning habits, and social understanding.

Some of it is physical: objects fall, liquids spill, fire burns, roads have traffic, and people cannot be in two places at once. Some of it is psychological: people have beliefs, goals, preferences, plans, and emotions. Some of it is social: promises, permissions, obligations, politeness, trust, and responsibility shape behavior.

![](/assets/blog/giving-ai-some-common-sense/figure-05.png)

It also includes knowing what is relevant. Humans do not reason about every possible fact at once. We focus on the few things that matter in context. If a person says, "I dropped my phone in the sink," we immediately understand water damage, urgency, and the likely next step. We do not need a formal lecture on electronics, plumbing, gravity, and regret.

![](/assets/blog/giving-ai-some-common-sense/figure-06.png)

This ability to bring the right background knowledge to the right moment is one of the hardest parts of building common-sense AI.

## Why Data Alone Is Not Enough

Large language models contain a surprising amount of implicit world knowledge because they are trained on enormous text collections. They can answer many common-sense questions correctly, and they often sound reasonable. But fluency is not the same as grounded understanding.

![](/assets/blog/giving-ai-some-common-sense/figure-07.png)

Text describes the world; it is not the world. A model can learn that people say "ice melts in the sun" without having a robust causal model of heat, materials, time, and physical change. It can imitate explanations without always knowing when an explanation is actually justified.

That does not make language models useless. It means they are incomplete. They need mechanisms for reasoning, memory, grounding, uncertainty, causality, and advice-taking if they are going to operate reliably outside text-based tasks.

![](/assets/blog/giving-ai-some-common-sense/figure-08.png)

## The Role of Knowledge Representation

Brachman's career is deeply connected to knowledge representation and reasoning, the part of AI that studies how machines can represent facts, concepts, relationships, rules, and inferences.

Symbolic systems have an advantage: they can make knowledge explicit. If a system knows that a closed container can hold objects, that keys can unlock doors, or that a person cannot be both asleep and actively driving, those assumptions can be inspected and reasoned over.

![](/assets/blog/giving-ai-some-common-sense/figure-09.png)

The challenge is scale and flexibility. The real world contains too much knowledge to write down by hand in a brittle rulebook. Common sense requires structure, but it also requires adaptability. This is where modern AI research increasingly looks toward hybrid systems that combine learned models with explicit reasoning.

![](/assets/blog/giving-ai-some-common-sense/figure-10.png)

## Reasons, Explanations, and Trust

One of the strongest ideas from Brachman's argument is that trustworthy autonomous systems need reasons for what they do. A system that acts without being able to explain its action is hard to supervise. A system that produces an explanation after the fact, without that explanation being connected to its actual decision process, is also not enough.

![](/assets/blog/giving-ai-some-common-sense/figure-11.png)

Common sense supports meaningful explanation. If an AI assistant refuses an unsafe instruction, reroutes around a hazard, or asks for clarification, it should be able to connect that action to understandable reasons. Those reasons should make sense to the human relying on the system.

This matters most in high-stakes settings: autonomous vehicles, healthcare, aviation, finance, legal support, robotics, and public services. In those domains, "the model predicted it" is not a satisfying answer.

![](/assets/blog/giving-ai-some-common-sense/figure-12.png)

## The Ability to Take Advice

Brachman also emphasizes advice-taking. This sounds simple, but it is a deep capability.

If a human tells an AI system, "Do not drive through that neighborhood after the bridge closes," the system should not treat the sentence as a temporary string. It should understand the advice, connect it to its map and planning model, remember it when relevant, and act on it appropriately. If the advice conflicts with something else it knows, it should notice the conflict and ask.

![](/assets/blog/giving-ai-some-common-sense/figure-13.png)

Advice-taking requires language understanding, memory, reasoning, context, and goals. It also requires common sense because advice is rarely complete. Humans leave things unsaid. We rely on shared background knowledge to fill in the gaps.

![](/assets/blog/giving-ai-some-common-sense/figure-14.png)

An AI system that cannot take advice is difficult to correct. That makes autonomy risky. The more freedom a system has to act, the more important it becomes that people can guide it without retraining it from scratch.

## Why Autonomous AI Raises the Stakes

Common-sense failures are annoying in chatbots. They can be dangerous in autonomous systems.

![](/assets/blog/giving-ai-some-common-sense/figure-15.png)

An AI that recommends a strange movie is not a major problem. An AI that controls a vehicle, a medical workflow, a trading system, a robot, or a security process has real consequences. It must handle unusual cases, incomplete instructions, conflicting goals, and shifting environments.

Brachman's point is direct: AI systems without common sense should not be given broad autonomy in the world. They may be useful as tools, assistants, or components, but independent action requires a deeper level of understanding and accountability.

![](/assets/blog/giving-ai-some-common-sense/figure-16.png)

## What a Common-Sense Architecture Might Need

A common-sense AI system would likely need several pieces working together.

It needs perception to observe the world. It needs memory to retain facts, experiences, advice, and context. It needs a knowledge base or structured representation of everyday concepts. It needs reasoning to draw conclusions and identify contradictions. It needs planning to choose actions. It needs uncertainty handling because the world is incomplete and noisy. It needs language so people can explain, question, and correct it.

![](/assets/blog/giving-ai-some-common-sense/figure-17.png)

Most importantly, these pieces need to be integrated. A language model alone is not enough. A rule engine alone is not enough. A perception system alone is not enough. Common sense emerges from the ability to connect knowledge, perception, goals, and action.

![](/assets/blog/giving-ai-some-common-sense/figure-18.png)

## Why This Is Still an Open Research Problem

AI research has not ignored common sense. There have been decades of work on knowledge bases, ontologies, logic, frames, scripts, planning, cognitive architectures, and commonsense reasoning benchmarks. More recently, large language models have renewed interest in extracting, testing, and structuring commonsense knowledge.

![](/assets/blog/giving-ai-some-common-sense/figure-19.png)

But the problem is not solved. We still do not have AI systems that reliably combine broad everyday knowledge, causal reasoning, grounded perception, advice-taking, and action in open environments. Current systems are powerful, but they often lack the stable understanding that humans bring to ordinary situations.

That is why common sense remains one of the most important unfinished problems in AI.

![](/assets/blog/giving-ai-some-common-sense/figure-20.png)

## Final Thoughts

"Giving AI Some Common Sense" is a useful reminder that intelligence is not only about performance on benchmarks. Real intelligence includes knowing what usually happens, what could go wrong, what people mean, when to ask for help, and how to act reasonably when the world does something unexpected.

Common sense is also central to trust. If AI systems cannot explain their actions, accept advice, or recognize obvious abnormalities, they should not be granted broad autonomy.

The path forward is not to abandon modern machine learning. It is to build systems that combine learning with reasoning, language with grounded knowledge, and autonomy with human-correctable behavior. That is harder than making a chatbot sound fluent, but it is much closer to the kind of AI we can safely rely on.

## References

1. Northeastern University Institute for Experiential AI, 2024. Giving AI Some Common Sense. https://ai.northeastern.edu/event/giving-ai-some-common-sense
2. Brachman, R.J. and Levesque, H.J., 2022. *Machines like Us: Toward AI with Common Sense*. MIT Press. https://mitpress.mit.edu/9780262547321/machines-like-us/
