---
layout: article
title: Learning Symbolic Physics with Graph Networks
date: '2024-04-09'
categories:
- Neurosymbolic AI
reading_time: 5
sitemap: true
robots: index,follow
description: A readable explanation of how graph networks can learn physical
  interactions, expose force-like messages, and support symbolic law discovery.
image: /assets/blog/learning-symbolic-physics-with-graph-networks/cover.png
source_url: https://medium.com/@lotussavy/learning-symbolic-physics-with-graph-networks-265d74c9ca1c
---

Deep learning can predict many physical systems surprisingly well. But prediction is not the same as understanding.

A neural network might learn how a set of planets move, how particles interact, or how a string vibrates. Yet after training, the knowledge is usually buried inside millions of parameters. The model may work, but it does not hand us a clean law such as Newton's law of gravitation.

The paper *Learning Symbolic Physics with Graph Networks* tackles exactly this gap. It asks whether we can train a neural model to predict physical dynamics and then extract an interpretable symbolic law from what the model learned.

The answer is a hybrid approach:

- use a graph network to learn the dynamics of interacting objects,
- design the model so its internal messages resemble physical forces,
- apply symbolic regression to those learned messages,
- recover compact algebraic expressions that look like real physical laws.

That is the exciting part. The neural network is not treated as the final answer. It is used as a bridge from data to symbolic physics.

## Why Graph Networks Fit Physics

Many physical systems are naturally relational. A planet is affected by other planets. A particle interacts with nearby particles. A point on a string is pulled by neighboring points.

Graph networks are a natural fit for this structure. In a graph, objects become nodes and interactions become edges. The model computes messages along edges, pools incoming messages for each node, and then updates the node's state.

This looks a lot like classical mechanics:

- pairwise messages resemble forces between objects,
- summing incoming messages resembles summing forces,
- updating node states resembles updating velocity or position.

The paper uses this similarity as an inductive bias. Instead of letting the network invent any hidden representation it wants, the architecture encourages the message vectors to live in the same kind of space as physical force vectors.

For example, in a 3D gravitational system, force is represented by a 3-dimensional vector. If the graph network's message space is also 3-dimensional, the model is gently pushed toward learning something force-like. It is still trained from data, but the structure of the model makes a physically meaningful solution easier to find.

<figure>
  <img src="/assets/blog/learning-symbolic-physics-with-graph-networks/cover.png" alt="A schematic depicting how we extract physical knowledge from a GNN">
  <figcaption>A schematic depicting how we extract physical knowledge from a GNN</figcaption>
</figure>

## From Neural Messages to Equations

After training, the authors inspect the messages produced by the graph network. These messages are the model's learned representation of how one object influences another.

If the inductive bias works, those messages should be linearly related to the true physical force. The experiments show that this is what happens in several simulated systems. The graph network's messages become transformations of the true force vectors.

The next step is symbolic regression. Instead of trying to extract a law from the entire neural network at once, the authors fit symbolic equations to the learned message function. This is a much smaller and cleaner problem.

The symbolic regression tool searches over mathematical expressions built from variables such as relative position, distance, and mass. It looks for compact formulas that reproduce the graph network's learned messages.

In the gravitational setting, this process recovers an expression equivalent to the force law. In other words, the model first learns dynamics implicitly, and symbolic regression then translates part of that learned computation into an explicit algebraic rule.

This is the central neurosymbolic idea of the paper: let the neural model learn from data, then use symbolic tools to make the learned structure readable.

## Experiments

The authors tested the approach on simulated physical systems:

- 2D n-body systems with \(1/r\) and \(1/r^2\) force laws,
- 3D n-body systems with a \(1/r^2\) force law,
- a hanging string system with spring-like interactions and gravity.

For the n-body experiments, the training systems used a fixed number of bodies. The authors then tested whether the learned model could generalize to systems with more bodies than it had seen during training.

This matters because real physical laws should scale. Newtonian gravity does not stop working when we add another planet. A model that has truly learned a pairwise interaction rule should be able to apply that rule to larger systems.

<figure>
  <img src="/assets/blog/learning-symbolic-physics-with-graph-networks/figure-02.png" alt="These plots demonstrate the improvement in generalization from minimizing the message passing space">
  <figcaption>These plots demonstrate the improvement in generalization from minimizing the message passing space</figcaption>
</figure>

The results show a clear pattern. Models with message spaces close to the true physical dimension generalized better to larger systems. In the 3D inverse-square-law experiment, message dimensions of 2 or 3 stayed more stable as the number of bodies increased, while larger message spaces such as 10 or 50 performed worse.

The interpretation is important. If the message space is too large, the model has room to "cheat." It can encode training-specific shortcuts that work for the number of bodies it saw during training but break when the system changes. A smaller, physically meaningful message space encourages the model to learn the reusable interaction rule.

This is a useful lesson for scientific machine learning: more capacity is not always better. Sometimes the right constraint helps the model learn the right concept.

## Why It Matters

This paper is valuable because it shows how interpretability can be designed into a model rather than added afterward.

A plain neural network may learn a useful simulator, but extracting a scientific law from it can be extremely difficult. A graph network has more structure. Its messages, pooling operations, and node updates correspond naturally to physical ideas such as force, superposition, and motion updates.

That structure gives symbolic regression something meaningful to work with. Instead of searching for a law in a huge black box, it can focus on a learned interaction function.

The broader implication is that neural networks and symbolic reasoning do not have to compete. A neural model can learn from data at scale. A symbolic method can then convert the learned relationships into equations that scientists can inspect, test, and compare with known theory.

## Limitations

The experiments are controlled simulations, not messy real-world physical measurements. The systems are chosen so the underlying laws have compact symbolic forms, and the architecture is designed with physical knowledge in mind.

That does not weaken the result, but it sets the scope. The method works best when the system can be represented as interacting entities and when the model's internal structure aligns with the kind of law we hope to discover.

Still, that scope covers many important scientific problems. Whenever a system is made of interacting parts, graph networks can provide a useful bridge between data-driven learning and symbolic explanation.

The key message is simple: if we want neural networks to discover laws, we should give them architectures where laws have a place to live.

## References

1. Cranmer, M.D., Xu, R., Battaglia, P. and Ho, S., 2019. Learning symbolic physics with graph networks. *arXiv preprint arXiv:1909.05862*. [PDF](https://arxiv.org/pdf/1909.05862)
