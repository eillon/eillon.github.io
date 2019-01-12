---
layout: post
title: "Latex 符号汇总"
date: 2018-12-30 10:00:00 +0800 
categories: 实用技术
tags: [latex]
---
* content
{:toc}

> 本文转载自[Latex各种命令符号 - CSDN博客](https://blog.csdn.net/garfielder007/article/details/51646604)

<!-- more -->
### 上标

|   语法    |    效果     |   语法    |    效果     |   语法    |    效果     |
| :-------: | :---------: | :-------: | :---------: | :-------: | :---------: |
|  \bar{x}  |  $\bar{x}$  | \acute{x} | $\acute{x}$ | \check{x} | $\check{x}$ |
| \grave{x} | $\grave{x}$ | \breve{x} | $\breve{x}$ | \ddot{x}  | $\ddot{x}$  |
|  \dot{x}  |  $\dot{x}$  |  \hat{x}  |  $\hat{x}$  | \tilde{x} | $\tilde{x}$ |

### 函数

|  语法   |   效果    |  语法   |   效果    |  语法   |   效果    |
| :-----: | :-------: | :-----: | :-------: | :-----: | :-------: |
|  \sin   |  $\sin$   |  \cos   |  $\cos$   |  \tan   |  $\tan$   |
| \arcsin | $\arcsin$ | \arccos | $\arccos$ | \arctan | $\arctan$ |
|  \sinh  |  $\sinh$  |  \cosh  |  $\cosh$  |  \tanh  |  $\tanh$  |

> 注：其他函数操作可使用罗马体显示：`\operatorname{}`，如$\operatorname{func}$

### 希腊字母
|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|\Alpha|$\Alpha$|\Beta|$\Beta$|\Gamma|$\Gamma$|\Delta|$\Delta$|\Epsilon|$\Epsilon$|\Zeta|$\Zeta$|\Eta|$\Eta$|\Theta|$\Theta$|
|\Iota|$\Iota$|\Kappa|$\Kappa$|\Lambda|$\Lambda$|\Mu|$\Mu$|\Nu|$\Nu$|\Xi|$\Xi$|\Omicron|$\Omicron$|\Pi|$\Pi$|
|\Rho|$\Rho$|\Sigma|$\Sigma$|\Tau|$\Tau$|\Upsilon|$\Upsilon$|\Phi|$\Phi$|\Chi|$\Chi$|\Psi|$\Psi$|\Omega|$\Omega$|


|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|\alpha|$\alpha$|\beta|$\beta$|\gamma|$\gamma$|\delta|$\delta$|\epsilon|$\epsilon$|\zeta|$\zeta$|\eta|$\eta$|\theta|$\theta$|
|\iota|$\iota$|\kappa|$\kappa$|\lambda|$\lambda$|\mu|$\mu$|\nu|$\nu$|\xi|$\xi$|\omicron|$\omicron$|\pi|$\pi$|
|\rho|$\rho$|\sigma|$\sigma$|\tau|$\tau$|\upsilon|$\upsilon$|\phi|$\phi$|\chi|$\chi$|\psi|$\psi$|\omega|$\omega$|

|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|语法|效果|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|\varepsilon|$\varepsilon$|\vartheta|$\vartheta$|\varkappa|$\varkappa$|\varpi|$\varpi$|\varrho|$\varrho$|\varsigma|$\varsigma$|\varphi|$\varphi$|
|\varDelta|$\varDelta$|\varTheta|$\varTheta$|\varGamma|$\varGamma$|\varPi|$\varPi$|\varLambda|$\varLambda$|\varSigma|$\varSigma$|\varPhi|$\varPhi$|

> 希腊字母的大小写是一一对应的；下面的异形体是在基本大小写前加了`var`。

### 字体变形
|效果|语法|示例|备注|
|:---:|:---:|:---:|:---:|
|正常字体||$ABCabc0123$|与下面做对比|
|(斜)粗体|\boldsymbol{}|$\boldsymbol{ABCabc0123}$|可加粗所有合法符号|
|黑板粗体|\mathbb{}|$\mathbb{ABCabc0123}$|适用于大写|
|正粗体|\mathbf{}|$\mathbf{ABCabc0123}$|适用于数字和拉丁字母|
|斜体数字|\mathit{}|$\mathit{ABCabc0123}$|适用于数字|
|罗马体|\mathrm{}或\mbox{}或\operatorname{}|$\operatorname{ABCabc0123}$|适用于数字和拉丁字母|
|哥特体|\mathfrak{}|$\mathfrak{ABCabc0123}$|适用于数字和拉丁字母|
|手写体|\mathcal{}|$\mathcal{ABCabc0123}$|适用于大写和数字|

### 数学符号
|名称|语法|示例|备注|
|:---:|:---:|:---:|:---:|
|根号|\sqrt[n]{x}|$\sqrt[n]{x}$|省略[]，默认为开平方|
|同余|\pmod{m}|$\pmod{m}$||
|微分|\partial{x}|$\partial{x}$||
