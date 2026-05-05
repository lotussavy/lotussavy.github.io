---
layout: article
title: Discovering Symbolic Models from Deep Learning with Inductive Biases
date: '2024-04-09'
categories:
- Neurosymbolic AI
- Machine Learning
reading_time: 8
sitemap: true
robots: index,follow
description: "A practical explanation of how symbolic equations can be extracted from trained deep learning models by using inductive biases, sparse latent spaces, graph networks, and symbolic regression."
image: /assets/blog/discovering-symbolic-models-from-deep-learning-with-inductive-biases/cover.png
source_url: https://medium.com/@lotussavy/discovering-symbolic-models-from-deep-learning-with-inductive-biases-0f286ff29d76
---

Deep learning is powerful, but it often gives us models that are difficult to understand. Symbolic models are the opposite: they can be compact, interpretable, and general, but discovering them from data is hard.

The paper **"Discovering Symbolic Models from Deep Learning with Inductive Biases"** by Cranmer and colleagues tries to combine the strengths of both.

The core idea is elegant:

1. Train a deep learning model with the right inductive biases.
2. Encourage its internal functions to become sparse and low-dimensional.
3. Use symbolic regression to replace those learned internal functions with explicit equations.

Instead of asking symbolic regression to search the full problem from scratch, the neural network first learns a useful decomposition. Symbolic regression is then applied to smaller pieces of the model.

![](/assets/blog/discovering-symbolic-models-from-deep-learning-with-inductive-biases/cover.png)

## Why Symbolic Models Matter

Science often prefers symbolic models because they are concise and reusable.

An equation can do more than predict. It can explain.

For example, Newton's law of gravitation is not just a fitted curve. It captures a relationship between mass, distance, and force. It can be written down, inspected, reused, and applied beyond the exact data from which it was inferred.

This is the attraction of symbolic regression: discover an analytic expression that fits data.

But symbolic regression has a scaling problem. Searching over equations is combinatorial. As the number of variables, operators, and possible expression trees grows, the search space becomes enormous.

Deep learning has the opposite problem. It scales well to high-dimensional data, but the learned model is usually opaque. A neural network may predict accurately without revealing the compact equation behind the phenomenon.

The paper's contribution is to use deep learning as a guide for symbolic discovery.

## The Main Insight

Symbolic regression struggles when it must search a large space all at once.

But many scientific systems have structure. Physical systems, for example, are often compositional. Objects interact through pairwise forces. Global behavior emerges from repeated local interactions.

Graph neural networks are a natural fit for this because they model entities and relations. A body can be a node. An interaction can be an edge. A learned message function can represent the effect of one object on another.

If the neural model is designed with this structure, then the symbolic search becomes easier. Instead of searching for one giant equation that maps the whole system to the next state, we can search for smaller equations inside the network.

That is the key:

**Use inductive bias to make the neural model learn the right internal decomposition, then extract symbolic rules from that decomposition.**

<figure>
  <img src="/assets/blog/discovering-symbolic-models-from-deep-learning-with-inductive-biases/figure-02.png" alt="Extraction of physical equations from a dataset">
  <figcaption>Symbolic equations are extracted by fitting expressions to internal functions learned by a neural model.</figcaption>
</figure>

## What Is an Inductive Bias?

An inductive bias is an assumption built into a model that helps it learn from limited data.

For example, convolutional neural networks assume that local spatial patterns matter in images. Graph neural networks assume that entities interact through relations. Physics-inspired models may assume locality, conservation, pairwise interactions, or low-dimensional latent structure.

Inductive bias does not guarantee correctness, but it narrows the search space.

In this paper, the inductive bias is not just used to improve prediction. It is used to make the model's internal functions easier to interpret and replace with symbolic expressions.

That distinction matters. A model can have good performance and still be impossible to interpret. The goal here is to design the model so that useful symbolic structure appears inside it.

## The Pipeline

The method has five main steps.

1. Design a deep learning model with internal structure that matches the problem.
2. Train it end-to-end on data.
3. Encourage sparse, low-dimensional latent representations.
4. Apply symbolic regression to the learned internal functions.
5. Replace the neural functions with symbolic expressions.

This turns the neural model into a bridge. It learns from data efficiently, then hands over compact internal relationships to symbolic regression.

The final result can be an analytic model that is easier to inspect than the original neural network.

## Why Sparsity Matters

Symbolic regression works best when the target function depends on a small number of variables.

If a learned internal function uses 50 inputs, symbolic regression has a difficult job. It must search over many possible combinations.

If the same function uses only 2 or 3 important inputs, the search becomes much more manageable.

That is why the paper encourages sparse latent representations. Sparsity helps reveal which variables matter. It also makes the symbolic expressions shorter and more interpretable.

This is a common lesson in scientific machine learning: the goal is not merely to fit the data, but to find the right coordinates in which the law becomes simple.

## Graph Neural Networks as the Backbone

The paper uses graph neural networks for physical systems because GNNs match the structure of interacting particles.

<figure>
  <img src="/assets/blog/discovering-symbolic-models-from-deep-learning-with-inductive-biases/figure-03.png" alt="Internal structure of the graph neural network used in experiments">
  <figcaption>The internal GNN structure decomposes a physical system into object states, pairwise messages, and updates.</figcaption>
</figure>

In a physical system:

- nodes can represent objects or particles
- edges can represent interactions between objects
- messages can represent pairwise effects
- node updates can represent changes in state

This structure is important because many laws of physics are local and reusable. The same force law can apply between many pairs of bodies.

If the GNN learns a message function that maps relative position and mass to an interaction, symbolic regression can be applied directly to that message function. That is much easier than trying to infer the entire system dynamics at once.

This connects naturally with [Graph Neural Networks]({{ '/blog/2024/04/08/graph-neural-networks/' | relative_url }}), where message passing and relational inductive bias are discussed in more detail.

## From Neural Function to Symbolic Equation

Once the GNN is trained, the researchers inspect internal functions such as message functions or update functions.

They collect input-output samples from those functions and fit symbolic expressions to them.

For example, if the learned message function has discovered something close to an inverse-square relation, symbolic regression may recover an equation resembling gravitational force.

The symbolic expression is then substituted back into the model. If the symbolic version preserves predictive performance, that is evidence that the extracted equation captures what the neural model learned.

This replacement step is important. It is not enough to produce a plausible equation after the fact. The equation should functionally replace part of the model.

## Implementation of the Inductive Bias

<figure>
  <img src="/assets/blog/discovering-symbolic-models-from-deep-learning-with-inductive-biases/figure-04.png" alt="Implementation and exploitation of inductive bias on GNNs">
  <figcaption>The method uses architectural bias and sparse representations to make symbolic extraction easier.</figcaption>
</figure>

The paper's approach can be understood as two phases.

In the learning phase, the neural model is trained with structural assumptions that match the domain. For physical systems, this means using graph networks so the model learns interactions between entities.

In the extraction phase, symbolic regression is applied to parts of the learned model. Because the model's internal computations are decomposed and sparse, symbolic regression has a much smaller and cleaner problem to solve.

This differs from ordinary symbolic regression. The symbolic search is not blind. It is guided by what the neural network has already learned.

## Why This Is Neurosymbolic

This work is a strong example of neuro-symbolic AI.

The neural part learns from data and handles optimization in a high-dimensional setting. The symbolic part produces human-readable equations. The inductive bias connects them by shaping the neural model so that symbolic extraction becomes possible.

The result is not just an explanation attached to a black box. It is a process for converting pieces of the black box into explicit symbolic structure.

That makes the method especially interesting for scientific discovery, where the desired output is often not only a prediction, but a law, equation, or mechanism.

## Strengths

The approach has several advantages.

It can make symbolic regression more scalable by breaking a hard problem into smaller pieces.

It can produce interpretable equations from trained models instead of leaving the result as a dense neural network.

It can improve generalization when the extracted equation captures the true underlying structure.

It can help scientists inspect what the model learned, not only how well it predicts.

And because the symbolic expressions can replace neural components, the final model may become smaller, faster, and easier to analyze.

## Limitations

The method depends heavily on choosing the right inductive bias.

If the architecture decomposes the problem in the wrong way, symbolic regression may extract equations that are simple but not meaningful. If the latent space is not sparse enough, symbolic search may still be difficult. If the data is noisy or incomplete, the extracted expression may fit artifacts rather than the true law.

There is also a risk of over-interpreting equations. A symbolic expression that matches a learned neural function is not automatically a law of nature. It must still be validated against data, theory, and out-of-distribution behavior.

Finally, the approach is easier to apply in domains where useful structure is known in advance. Physics is a natural fit. Messier social, biological, or economic systems may be harder because the right decomposition is less obvious.

## Takeaway

The paper shows a practical route from deep learning to symbolic models.

Instead of treating neural networks and symbolic regression as competing tools, it uses them sequentially. The neural network learns a structured decomposition from data. Symbolic regression then extracts compact equations from the learned internal functions.

The central lesson is:

**Deep learning can help discover symbolic laws when the model is built with the right inductive biases.**

This is one of the most promising directions in scientific machine learning: not just predicting what happens, but recovering the equations that explain why it happens.

## References

1. Cranmer, M., Sanchez-Gonzalez, A., Battaglia, P., Xu, R., Cranmer, K., Spergel, D., and Ho, S. (2020). *Discovering symbolic models from deep learning with inductive biases*. Advances in Neural Information Processing Systems, 33, 17429-17442.
2. Code repository: [https://github.com/MilesCranmer/symbolic_deep_learning](https://github.com/MilesCranmer/symbolic_deep_learning)
3. Project page: [https://astroautomata.com/paper/symbolic-neural-nets/](https://astroautomata.com/paper/symbolic-neural-nets/)
4. Talk: [https://www.youtube.com/watch?v=wmQIcTOzH0k](https://www.youtube.com/watch?v=wmQIcTOzH0k)

## Related Articles

1. [Graph Neural Networks]({{ '/blog/2024/04/08/graph-neural-networks/' | relative_url }})
2. [Learning Symbolic Physics with Graph Networks]({{ '/blog/2024/04/09/learning-symbolic-physics-with-graph-networks/' | relative_url }})
3. [Symbolic Regression Enhanced Decision Tree]({{ '/blog/2024/04/08/symbolic-regression-enhanced-decision-tree/' | relative_url }})
