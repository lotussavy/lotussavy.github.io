---
layout: article
title: Hybridized neural network and decision tree based classifier for prognostic
  decision making in breast cancers
date: '2024-04-10'
categories:
- Machine Learning
reading_time: 5
sitemap: true
robots: index,follow
description: A readable explanation of a hybrid radial basis function network and
  decision tree approach for supporting breast cancer prognosis.
image: /assets/blog/hybridized-neural-network-and-decision-tree-based-classifier-for-prognostic-decision-making-in-breast-cancers/cover.png
source_url: https://medium.com/@lotussavy/hybridized-neural-network-and-decision-tree-based-classifier-for-prognostic-decision-making-in-breast-cancersg-in-931f3bab3cde
---

Breast cancer diagnosis and prognosis are not only technical problems. They are high-stakes decisions that affect treatment planning, follow-up care, and the emotional lives of patients and families. In this setting, even a small improvement in classification can matter, but only if the model is reliable, understandable, and used as support for clinicians rather than as a replacement for medical judgment.

The paper *Hybridized neural network and decision tree based classifier for prognostic decision making in breast cancers* explores this challenge through a hybrid machine learning model. The authors combine a radial basis function neural network with a decision tree classifier to improve the prediction of malignant breast cancer cases, especially cases that may be misclassified by simpler approaches.

The motivation is straightforward. Mammography is one of the most widely used tools for breast cancer screening, but screening is not perfect. The paper notes that retrospective studies have reported missed breast cancer cases in clinical screening workflows. That creates a natural question for machine learning: can computational models help flag difficult cases more accurately?

The proposed answer is a hybrid classifier that tries to bring together two useful properties:

- the pattern-learning ability of neural networks,
- the interpretability and decision structure of trees.

That combination is valuable because medical AI should not only chase accuracy. It should also help humans understand why a prediction was made.

## Proposed Classifier

The first part of the model is a radial basis function network, or RBF network.

An RBF network is a feed-forward neural network with a single hidden layer. Instead of using the same style of activation as a standard multilayer perceptron, it uses radial basis functions, often Gaussian-like functions, to measure how close an input is to learned centers in feature space.

That makes the model useful for classification problems where examples naturally cluster. If a new case looks similar to known malignant cases, the RBF network can learn that neighborhood. If it looks closer to benign examples, the model can respond differently.

The appeal of RBF networks is practical:

- they can converge faster than some conventional multilayer networks,
- they can handle nonlinear decision boundaries,
- they are often less complex than deeper neural architectures,
- they can be useful when the decision surface is shaped by local patterns.

In the paper, the RBF network is used as the neural component of the hybrid classifier. The authors also discuss using derivative information from the activation function during weight updates and error computation, with the aim of improving learning behavior.

<figure>
  <img src="/assets/blog/hybridized-neural-network-and-decision-tree-based-classifier-for-prognostic-decision-making-in-breast-cancers/cover.png" alt="RBFN">
  <figcaption>RBFN</figcaption>
</figure>

Before classification, the data is normalized using min-max normalization. This rescales feature values into a common range, typically from 0 to 1. For medical data, this step is important because different features may be measured on very different scales. Without normalization, a feature with large numeric values can dominate the learning process even if it is not clinically more important.

![](/assets/blog/hybridized-neural-network-and-decision-tree-based-classifier-for-prognostic-decision-making-in-breast-cancers/figure-02.png)

The second part of the hybrid model is the decision tree.

Decision trees are popular in medical machine learning because they are relatively easy to inspect. A tree breaks a classification problem into a sequence of questions. Each internal node tests a condition, each branch follows the answer, and each leaf gives a final class prediction.

This structure has two advantages. First, it is computationally efficient. Second, it produces a rule-like path that can be examined by humans. A clinician or researcher can trace how a case moved through the tree and see which features influenced the final classification.

Of course, decision trees have their own weakness: they can overfit. A tree that grows too large may memorize the training data instead of learning a pattern that generalizes. That is why tree pruning matters. Pruning removes unnecessary branches so the tree becomes smaller, cleaner, and less likely to make fragile predictions.

## Why Hybridize the Models?

The reason for combining an RBF network and a decision tree is not just to stack two algorithms together. The goal is to balance their strengths.

Neural networks are good at learning nonlinear patterns, but their reasoning can be hard to interpret. Decision trees are easier to understand, but they may struggle with complex boundaries unless they become large and unstable. A hybrid approach tries to use neural learning to capture difficult patterns while preserving some of the structured decision-making behavior of trees.

For breast cancer prognosis, this is a sensible direction. A purely opaque model may be uncomfortable in clinical decision support. A purely simple model may miss complex relationships. A hybrid classifier can offer a middle path: more expressive than a basic tree, but still closer to a rule-based decision process than a fully opaque model.

## Evaluation

![](/assets/blog/hybridized-neural-network-and-decision-tree-based-classifier-for-prognostic-decision-making-in-breast-cancers/figure-03.png)

The paper compares the proposed hybrid classifier with commonly used machine learning methods, including K-nearest neighbors, support vector machines, and Naive Bayes. According to the reported results, the hybrid RBF and decision tree approach achieves higher accuracy than these baseline classifiers.

That result is encouraging, but it should be read carefully. In medical AI, accuracy alone is not enough. A useful clinical support model should also be evaluated for sensitivity, specificity, false negatives, false positives, dataset bias, validation strategy, and performance on external patient populations. A model that performs well on one dataset may not automatically generalize across hospitals, imaging devices, demographics, or clinical workflows.

Still, the study is useful because it points toward a practical design principle: combining learning capacity with interpretable decision structure may be more valuable than relying on either alone.

## Why It Matters

Breast cancer prognosis is a natural place to ask for both prediction and explanation. A model should help identify risk, but it should also support a conversation about evidence. If a system flags a case as malignant or high-risk, doctors need to know what drove that prediction. Was it a particular measurement? A combination of features? A pattern that appears in similar cases?

Hybrid models are interesting because they acknowledge this dual requirement. They are not satisfied with a black-box score, and they are not limited to overly simple rules. They try to learn from data while keeping the decision process closer to something humans can inspect.

The broader lesson is that medical machine learning should be judged by more than leaderboard performance. The strongest systems will be those that combine accuracy, robustness, transparency, and clinical usefulness.

This paper is a small but relevant example of that direction: use AI to assist prognosis, but keep the human decision-maker in the loop.

## References

1. Suresh, A., Udendhran, R. and Balamurgan, M., 2020. Hybridized neural network and decision tree based classifier for prognostic decision making in breast cancers. *Soft Computing*, *24*(11), pp.7947-7953. [ResearchGate](https://www.researchgate.net/publication/333174656_Hybridized_neural_network_and_decision_tree_based_classifier_for_prognostic_decision_making_in_breast_cancers)
2. DOI: [10.1007/s00500-019-04066-4](https://doi.org/10.1007/s00500-019-04066-4)
