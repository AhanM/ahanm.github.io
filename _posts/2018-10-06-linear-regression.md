
# Linear Regression — Summarised

There are several online resources to teach yourself skills and this is especially true with computer science fields such as machine learning. One such popular resource is the Introduction to Statistical Learning: with Applications in R. It covers many of the modern and widely used statistical learning algorithms.

This ISLR series will cover the key concepts and highlighted summary of each chapter in the book. This should help provide a high-level notion of each algorithm covered and could be useful for anyone that wants to quickly refresh their memory.
> Linear regression provides a “very simple approach to supervised learning” and is “useful for predicting a quantitative response”.

![“selective focus photography of graph” by [M. B. M.](https://unsplash.com/@m_b_m?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12000/0*2debeJjdphnSjA1t)*“selective focus photography of graph” by [M. B. M.](https://unsplash.com/@m_b_m?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

## Simple Linear Regression

As the name suggests, linear regression is a straightforward method of predicting the value ***Y*** based off of a single predictor ***X** *and it assumes an approximately linear relationship between the two represented as follows:

![](https://cdn-images-1.medium.com/max/2000/1*L4fikE5Ewcs3C_I7GlKtQQ@2x.png)

Where β₀ and β₁ are knowns as *coefficients* or *parameters*. Once the model coefficients have been learned from the training data, they can be used to make predictions.

It is useful to assess the accuracy of the model by minimizing the “error” produced. One way to measure this error is the *residual sum of squares (**RSS**) *which is defined as follows:

![](https://cdn-images-1.medium.com/max/2000/1*sb0t8tvOui71c992Iq8T3Q@2x.png)
> The least squares approach chooses coefficients to minimize the RSS. Using some calculus, one can show that the minimizers are:

![](https://cdn-images-1.medium.com/max/2000/1*c325xFdXgneSIElNOaNT0w@2x.png)

![](https://cdn-images-1.medium.com/max/2000/1*L9VLXyf2kCdwaLzMT6jAiA@2x.png)

Where the overline above *x *and *y *represents the [mean](https://en.wikipedia.org/wiki/Mean) of those respective columns.

It’s easy to expand this model to capture multiple predictors and even non-linear predictors such as exponential or polynomial expressions. However, with increasing number of predictors of higher order one needs to be careful about [overfitting](https://en.wikipedia.org/wiki/Bias–variance_tradeoff) the data.

## Assessing Accuracy

Residual Standard Error: The RSE is an estimate of the standard error deviation of ε (unavoidable error or [noise](https://en.wikipedia.org/wiki/Noise_(signal_processing))). This can also be explained as the “average amount that the response will deviate from the true regression line”.

![Residual Standard Error](https://cdn-images-1.medium.com/max/2000/1*1iLAmGkcd6DTXXe9ymL0aw@2x.png)*Residual Standard Error*

![Residual sum of squares](https://cdn-images-1.medium.com/max/2000/1*5D6wteq72dJfV4FsNE2-oQ@2x.png)*Residual sum of squares*

R² Statistic: The R² measure provides more of a “*proportion*” since it always takes a value between 0 and 1 as compared to RSE which is measured in units of *Y.*

![Total sum of squares](https://cdn-images-1.medium.com/max/2000/1*MO7I1GCISjyiockKGR3vjA@2x.png)*Total sum of squares*

![](https://cdn-images-1.medium.com/max/2000/1*PFQxDePEBlW82QsB-WVX8Q@2x.png)

Some important questions to consider while developing a linear regression model:

* Which of the predictors in *X *are* *useful in predicting *Y*?

* How well does the model fit the data?

* Given a set of predictor values, what response values should we predict?

As always for more detailed concepts and examples please refer to the [book](https://www-bcf.usc.edu/~gareth/ISL/). The book also includes lab assignments where you can implement the models you learn in each chapter in [R](https://www.r-project.org).

If this post receives a positive response I will continue to summarize other chapters in ISLR which include other useful machine learning models like: K-means Clustering, SVMs as well as Decision-Trees.
