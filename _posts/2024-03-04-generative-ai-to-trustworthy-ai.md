---
layout: article
title: From Generative AI to Trustworthy AI
date: '2024-03-04'
categories:
- Explainable AI
reading_time: 11
sitemap: true
robots: index,follow
description: "Explore what generative AI needs to become trustworthy, including reasoning, provenance, ethics, context, and symbolic knowledge."
image: /assets/blog/generative-ai-to-trustworthy-ai/cover.png
source_url: https://medium.com/@lotussavy/generative-ai-to-trustworthy-ai-a194b0e55748
---

Generative AI has become the public face of modern artificial intelligence. Large language models can write, summarize, translate, code, answer questions, and hold conversations with impressive fluency.

But fluency is not the same as trustworthiness.

An answer can sound confident and still be wrong. A citation can look realistic and still be fabricated. A model can answer correctly today and fail on the same kind of question tomorrow. A system can be aligned in normal settings and still be vulnerable to adversarial prompts.

<figure>
  <img src="/assets/blog/generative-ai-to-trustworthy-ai/cover.png" alt="Challenges associated with large language models" width="352" height="344" loading="eager" decoding="async" fetchpriority="high">
  <figcaption>Large language models are powerful, but trust requires more than fluent generation.</figcaption>
</figure>

This article is based on Doug Lenat and Gary Marcus's paper **"Getting from Generative AI to Trustworthy AI: What LLMs might learn from Cyc"**. The paper argues that trustworthy AI will likely require a hybrid approach: the flexibility of language models plus the explicit knowledge, reasoning, provenance, and auditability of symbolic systems.

## The Core Problem

Large language models are trained to produce plausible continuations of text. That training objective gives them remarkable expressive power, but it does not guarantee truth, reasoning, or reliability.

The paper highlights three recurring weaknesses:

- **Untrustworthy:** LLMs can generate false information, including fabricated references or sources.
- **Unstable:** model behavior can shift across time, versions, prompts, or contexts.
- **Brittle:** models can fail on questions that require common sense, adversarial robustness, or careful reasoning.

The deeper issue is that LLMs do not reliably maintain explicit world models. They contain statistical patterns learned from text, but they do not always know what follows logically, what evidence supports a claim, which assumptions are being used, or when a conclusion should be revised.

Trustworthy AI needs more than plausible language. It needs knowledge, reasoning, context, and accountability.

## What Does Trustworthy AI Require?

Lenat and Marcus describe 16 desiderata for future trustworthy AI. These are not small feature requests. They are the kinds of capabilities that separate fluent response generation from reliable reasoning.

<figure>
  <img src="/assets/blog/generative-ai-to-trustworthy-ai/figure-02.png" alt="Sixteen desiderata for future trustworthy AI" width="647" height="491" loading="lazy" decoding="async">
  <figcaption>Lenat and Marcus outline 16 desiderata for future trustworthy AI.</figcaption>
</figure>

Rather than treating the list as isolated items, it helps to group them into broader themes.

## 1. Explainable Reasoning

A trustworthy AI should be able to explain how it reached an answer.

This does not mean producing a post-hoc story that merely sounds reasonable. It means exposing the actual chain of reasoning, including the evidence, assumptions, rules, and sources used along the way.

For high-stakes domains such as medicine, finance, law, infrastructure, and scientific discovery, explanation must also include provenance:

- Where did this claim come from?
- What rule or fact was used?
- Is the source reliable?
- Which assumptions were made?
- Could the conclusion change with new information?

Current LLMs can generate explanations, but those explanations are not always faithful to the model's internal process. A trustworthy system needs explanations that are auditable, not just articulate.

## 2. Deduction, Induction, Analogy, and Abduction

Trustworthy AI needs multiple forms of reasoning.

**Deduction** is reasoning from rules to necessary conclusions. If Andorra is a country and countries have borders, then Andorra has borders.

**Induction** is reasoning from examples or patterns. If a newly discovered animal species has certain traits across many observed cases, we may infer that those traits are typical of the species.

**Analogy** allows a system to transfer insight from one domain to another. Much human reasoning depends on recognizing structural similarity between situations that look different on the surface.

**Abduction** is inference to the best explanation. If a room contains the same arrangement of chairs as yesterday, the most plausible explanation may be that they are the same chairs, even though this is not logically guaranteed.

Humans use all of these constantly. LLMs can imitate them in language, but they do not always perform them reliably. Trustworthy AI needs reasoning mechanisms that can distinguish between what is proven, what is likely, what is analogous, and what is merely guessed.

## 3. Theory of Mind and Context

Human communication depends heavily on context.

We explain differently to a child, a colleague, a domain expert, or a stranger. We interpret questions based on background knowledge, goals, shared assumptions, culture, time, place, and intent.

A trustworthy AI should model the user's context enough to decide:

- how much detail is appropriate
- whether clarification is needed
- which assumptions are safe
- what the user likely knows already
- what risks may be involved
- whether the answer should be cautious or direct

Theory of mind is related. The system should have some model of what other agents know, believe, intend, or misunderstand. It should also have a model of itself: what it knows, what it does not know, what it can do, and what it should not claim.

Without context, answers can be technically correct but practically wrong.

## 4. Quantifiers, Modals, and Defeasible Knowledge

Natural language contains subtle logical structure.

"Every student has a textbook" does not mean the same thing as "Every student has a question." The first may imply a shared resource policy; the second implies individual questions. Quantifiers matter.

Modal language also matters: phrases such as "believes that," "hopes that," "plans to," "must be," and "might be" change the status of a claim. A trustworthy AI must distinguish facts from beliefs, intentions, possibilities, obligations, and uncertainties.

Defeasibility is equally important. Much of what we know is true only by default. Birds usually fly, but penguins do not. A person may own a house today but sell it next year. A security rule may apply generally but have exceptions.

Trustworthy AI must revise conclusions when new evidence appears. It should also know when to alert users that a previous answer has changed.

## 5. Pro and Con Reasoning

Many real-world decisions do not have one clean answer.

Which college should I attend? Which medical treatment should be considered? Which cybersecurity alert should be escalated? Which infrastructure investment is most urgent?

These questions require weighing arguments for and against multiple options. A trustworthy AI should be able to represent competing arguments, compare their strength, and explain why one argument is preferred over another.

This is different from producing a single confident answer. Real reasoning often involves uncertainty, tradeoffs, and competing evidence.

## 6. Meta-Knowledge and Meta-Reasoning

A trustworthy system should reason about its own knowledge.

It should know:

- what it knows
- what it does not know
- how reliable a source is
- whether a conclusion is weak or strong
- whether a problem-solving strategy is working
- when to change tactics
- when to ask for help or clarification

This kind of meta-reasoning is central to trust. A system that cannot distinguish a solid conclusion from a wild guess should not be treated as reliable.

## 7. Ethics, Embodiment, Speed, and Knowledge

The paper also emphasizes several broader capabilities.

A trustworthy AI should have explicit ethical principles. These principles should be inspectable, context-sensitive, and able to handle conflicts. For example, honesty and non-harm are both important, but real situations may require careful balancing.

Speed also matters. Some applications need real-time responses; others can afford deeper reasoning. A trustworthy system should know when fast approximate answers are acceptable and when slower, more careful reasoning is required.

Embodiment and language matter depending on the application. Some systems need only text. Others need perception, physical interaction, sound, vision, or sensor grounding.

Finally, trustworthy AI needs broad and deep knowledge. Not just isolated facts, but common sense, causal models, and structured understanding of how the world works.

## What Cyc Brings to the Discussion

The paper uses Cyc as an example of a very different AI tradition.

Cyc is a long-running symbolic AI project built around explicit knowledge representation and logical inference. Instead of learning only statistical patterns from text, Cyc stores curated knowledge and rules of thumb in a formal language. It can reason over that knowledge and provide step-by-step justifications.

The appeal of this approach is trust and auditability:

- each reasoning step can be inspected
- sources and assumptions can be tracked
- contexts can be represented explicitly
- default knowledge and exceptions can be handled
- pro and con arguments can be compared

The challenge is speed and coverage. Rich symbolic reasoning can be computationally expensive, and building broad knowledge bases requires significant effort.

The paper's point is not that symbolic AI alone solves everything. It is that LLMs and symbolic systems have complementary strengths.

## Why Hybrid AI Is Likely Necessary

LLMs are strong at language, breadth, fluency, summarization, and flexible interaction. Symbolic systems are strong at explicit reasoning, provenance, consistency, context, and auditability.

A hybrid trustworthy AI system could use both.

For example:

- An LLM could generate candidate answers, while a symbolic system checks them for consistency.
- A symbolic knowledge base could provide common-sense facts that are rarely stated explicitly in text.
- An LLM could help translate natural language into formal representations.
- A symbolic reasoner could infer consequences and feed them back to the LLM.
- A symbolic system could provide provenance and explanation for high-stakes answers.

This kind of integration is difficult, but it is promising because it combines the strengths of two AI traditions.

## The Role of Provenance

One of the most important ideas in the paper is provenance.

A trustworthy answer should not simply state a conclusion. It should be able to say where the conclusion came from.

For example, if an AI gives a medical recommendation, legal interpretation, or scientific claim, the user should be able to inspect:

- the source documents
- the assumptions used
- the reasoning chain
- the confidence level
- the exceptions or counterarguments

This is where current generative systems often fall short. They may produce citations, but those citations may be irrelevant, distorted, or fabricated. A trustworthy system needs source-grounded reasoning, not citation-shaped text.

## What This Means for Future AI

The path from generative AI to trustworthy AI is not only about making models larger. It is about giving them better structure.

Future trustworthy systems will likely need:

- retrieval connected to reliable sources
- explicit reasoning over facts and rules
- uncertainty tracking
- context modeling
- ethical constraints
- memory with provenance
- mechanisms for revision and correction
- interfaces that expose explanations clearly

This is closely related to neurosymbolic AI. The neural component provides language fluency and pattern learning. The symbolic component provides structure, reasoning, constraints, and auditability.

## Limitations and Open Questions

Hybrid AI is not easy.

Several difficult questions remain:

- How should natural language be translated into formal representations?
- How can symbolic reasoning scale to broad real-world knowledge?
- How should systems handle contradictions across sources?
- How can explanations remain faithful and concise?
- How should ethical rules be represented and updated?
- How can we evaluate trustworthiness beyond benchmark accuracy?

These are not minor engineering details. They are central research questions.

Still, the paper's argument is important: current LLMs are impressive, but trustworthiness requires capabilities that are not guaranteed by generative fluency.

## Takeaway

Generative AI has given us systems that can produce fluent and useful language. But trustworthy AI requires more than fluency.

It requires reasoning, provenance, context, ethics, revision, explanation, and common sense.

The most realistic path may be hybrid: combine the expressive power of LLMs with the explicit knowledge and reasoning discipline of symbolic systems.

In short:

**Generative AI can produce plausible answers. Trustworthy AI must know why an answer should be believed.**

## Reference

1. Lenat, D., & Marcus, G. (2023). *Getting from Generative AI to Trustworthy AI: What LLMs might learn from Cyc*. arXiv:2308.04445.
