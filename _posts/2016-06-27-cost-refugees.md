---
layout: post
title:  How much does it cost to welcome refugees?
date:   2016-06-28
categories: post
image: ../assets/posts/2016-06/refugees_passau.jpg
excerpt: "This case study shows how journalists can use budget data and other sources of information to answer policy questions."
---

_A post by Nicolas Kayser-Bril of Journalism++_

!["Refugees arrive in Passau, Germany."]({{site.baseurl}}/assets/posts/2016-06/refugees_passau.jpg)

<small>Refugees arrive in Passau, Germany. Picture [CC-BY-SA by Metropolico](https://www.flickr.com/photos/95213174@N08/23067256864/in/photolist-B9nHPf-FtKSXb-BYAjMr-EYqQaJ-FRzsnU-riWq5X-yixTHD-rY9P21-rWq48t-rY9NqS-yA4R7g-sfGhmB-yixSK6-yz7fJL-yANxuT-yANzFX-BWhHSU-rYhWA4-ykanEM-riJXgj-BYArHR-yit1pU-B9nnqQ-sfGh3a-C4zy3m-BWhQgq-C4zrY7-yz7cam-yANu4K-FTSjLp-yxKfLm-yANwjM-EYqSkW-FRznKC-EYqQXW-AgqUPG-FKGzNo-FKGvwC-FRzoyb-FRzuXd-y2RCKm-HJuWWn-HzQ3nA-HzQ1nU-BQmhF-r149HX-sgbQw1-spx1x7-qSAG5E-vhhfkH).</small>

In 2015, the city of Bonn, Germany, welcomed hundreds of men, women and children who were forced to leave their home country. From about 1000 in 2014, the city now hosts close to 4000 people who are waiting for their applications to be processed before they can take a job, rent a house and start their new lives in Germany.

Providing shelter and food to refugees costs money. In theory, the German state (the _Bund_) gives each city €10,000 per year per refugee, so that cities and towns do not have to use their own resources. In practice, much of this cash is delayed and cities have to pay to feed and house the newly arrived men, women and children. Because local taxes (the _Grundsteuer_) increased in Bonn in 2015 ([see on the official website of the city](http://archive.is/Z3qHE)), many locals associated refugees with tax hikes. Nearby Bad-Honnef, for instance, increased local taxes precisely because of unexpected costs to ensure that refugees can stay there ([read in the General Anzeiger](http://archive.is/9pCkN)). Politicians in Oderberg, another neighboring town, on the other hand, claimed that local taxes are not for refugees ([read in Rundschau-Online](http://archive.is/vjvzm)).

Because Bonn is especially forward-thinking when it comes to open data, we set out to find out the truth in their budget: How much do refugees cost the city, and what does that mean for local taxpayers? This is extremely topical as the city of Bonn will present its 2017 budget on June 30.

_This article does not deal with the overall economic impact of welcoming people fleeing wars. There is a rich literature showing that migration in general is a net positive gain for the host country in economic terms. The openness new people from different backgrounds bring to a community cannot be measured in such terms and will be considered positive by some and negative by others. Whatever opinions might be on the issue, this article only deals with the impact of refugees on the finances of the city of Bonn._

### First step: Detailed budget

The city of Bonn published a [170,000-line file](http://archive.is/E6ywD) containing the detailed budget for 2016. It comes with two tomes of explanations. Tome 1 leads to a dead link. Tome 2 is a 600-page, automatically generated PDF, which does not contain any actual explanation how to read the data. We are left with the massive file and its 170,000 budget lines. A quick search leads to a [dictionary of concepts](https://www.govdata.de/daten/-/details/haushalt-profitcenter-metadaten-bn) - on a different data portal, govdata.de - that helps make sense of the initial file. We learn that 'profit center' `150000503` corresponds to all actions of the city taken in light of the local asylum law. Interestingly, the actual account (_Sachkonto_) for disbursements related to this law is `533920`, in another column. Simply understanding the meaning of each column is already hard. 

!["Part of the 2016 Bonn budget viewed in OpenRefine."]({{site.baseurl}}/assets/posts/2016-06/openrefine.png)

<small>Part of the 2016 Bonn budget viewed in OpenRefine.</small>

More importantly, the file itself yields little information. Almost all lines are related to very small (less than 10,000€) amounts that have to do with social contributions of civil servants. Some of the abbreviations can only be deciphered thanks to the glossaries of other cities (the city of Dortmund tells us that _ViLV_, for instance, which appears in the Bonn budget, means "internal transfers", in [their glossary](https://www.dortmund.de/media/p/lokalpolitik/haushalt_2/haushalt/Glossar_Haushalt_Stadt_Dortmund.pdf)). In other words, it is impossible to distinguish noise from signal in the detailed budget.

Simplified versions of the Bonn budget show that the aggregate line for services linked to the local asylum law increased from €4 million in 2014 to €8 million in 2015. This is a fairly modest increase considering that the city's total revenues is about €1.1 _billion_. More importantly, the local asylum law deals with the deportation of illegal aliens, not with the arrival of refugees. From the budget data alone, it is absolutely impossible to answer the research question: What will the impact of the refugee policy be for taxpayers? 

### Second step: Analytical accounting

Not to be defeated, we asked the city of Bonn for an answer. The city provided us with a breakdown of costs for the first quarter of 2016, which they made for internal purposes ([PDF here]({{site.baseurl}}/assets/posts/2016-06/bonn_fluechtlinge.pdf)). The document is remarkable for its clarity and for the fact that it is communicated to journalists. After we analyzed over 100 budgets of various cities, regions and institutions, this is the first time that such a piece of analytical (mission-based) accounting is provided.

The document explains that, considering salaries of civil servants, consumables, rents etc., the city incurred costs of about €14 million in operating expenses and €6.8 million in investment expenses (mostly the construction of new housing in containers). Of the €14 million in operating expenses, €7.6 million are covered, mostly by the cash given by the regional and federal governments as part of the refugees programs, so that the net cost for the city is €7.2 million. Of these calculations, nothing can be checked independently in available budget data - we have to take the city's word for it. Only the detailed spending data of the city, which are not available, would let us verify these costs. (It might be requested with a freedom of information request, but this is unlikely).

The city calculated that the costs it incurred per refugee is about €3,760 in the first quarter (operating expenses only), which adds up to €15,000 per year per refugee, much more than what the €10,000 per year per refugee that the _Bund_ will cover. While it is true that the cost will decrease as families are moved from hotels to other forms of accommodation, the city cannot or does not want to estimate a yearly cost. At this rate, we can estimate that the city will exceed the sum allocated by the _Bund_ by €20 million by the end of the year.

!["This table summarizes the financial costs related to welcoming people fleeing wars according to different scenarios."]({{site.baseurl}}/assets/posts/2016-06/bonn_table.png)

<small>This table summarizes the financial costs related to welcoming people fleeing wars according to different scenarios. Estimates are shown in gray.</small>

The total cost of refugees programs seems to total €6.8 million + €7.2 million, or about €14 million in total for the first quarter of 2016. €14 million of extra costs represent little of the total budget of €1.1 billion, but it would significantly impact the deficit of the city (expected to reach €70 million in 2016) and the deficit reduction plan. Whether or not a tax increase is required to cover it is hard to say.

However, the communication person of the city told us that such an addition was not possible, because the amounts include amortization, i.e a cost which represents the decrease in value of the investments that were made. Amortizations do not require a disbursement of cash, they are just an accounting rule that shows how an asset loses value as it ages. However, in this situation, amortizations amount to €136,000, hardly a significant sum. Why, then, does the city insist that one cannot say that refugees cost €14 million in the first quarter? It is true that some or all of the costs will be borne by the central government, for it is the one responsible for refugees. However, the city did not tell us whether it had the cash reserves required to wait until the Federation finally pays up.

### Third step: Ask the opposition

Because the city refused to give a clear answer, we set out to ask the opposition groups if they could give an answer to the question: Are refugees a financial burden for taxpayers? We asked three opposition parties (the social democratic _SPD_, the Pirate Party and the Socialist-Nationalists of _Alternative für Bonn_), the first two answered.

For the SPD, linking the issue of refugees with local taxes 'misses the point'. Bärbel Richter, head of the SPD fraction at the Bonn city council, says that the €10,000 given by the _Bund_ might or might not suffice to cover costs but that, in any case, the help provided to refugees should remain independent from financial considerations. Which is true. But does not tell us if the local taxes should be increased or not.

The Pirate party was clearer. Jochen Hunold, of the economic committee of the city council, admitted that he had no more information than we did on the topic. However, he did have a plan to alleviate the expenses of the city and pushes for the end of subsidies to the local opera house (€27 million per year) to ensure that the city can fulfill its obligations towards the less well-off, including people who had to flee their country of origin.

### Conclusion

We still do not know if local taxes will increase because of the costs incurred to provide a decent life to refugees in Bonn. Only because the city of Bonn is especially open and keeps a clean accounting (by European standards) can we make the hypothesis that these costs are much higher than planned for and that the city has no plan to handle the issue, torn between its obligation to help people start a new life in Germany and its fear of nationalist-extremists at the next elections, who will doubtless use any possible link between taxes and refugees in their campaign.

This small case studies shows that even in the best possible scenario, journalists cannot answer a fairly simple question about local public finances. The technicalities are too complex and, more importantly, too local. The abbreviations used by the Bonn accountants are not standard, for instance. Only access to detailed spending data would help, and such data cannot, for logistical and privacy reasons, be disclosed in bulk. What does help in this situation is not budget data, it is the ability to understand rapidly the documents (like [this analytical accounting report]({{site.baseurl}}/assets/posts/2016-06/bonn_fluechtlinge.pdf), mentioned above) provided by the administration. This is precisely what OpenBudgets.eu does, in that it will provide a set of tutorials for journalists that will let them decipher budget documents easily.