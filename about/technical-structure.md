---
layout: page
title: Technical Structure
---
OpenBudgets is an **open-source software framework and accompanying Software-As-A-Service (SAAS) platform**. 
The platform has an attractive front end, where users can easily upload or export budget and transaction data. The back-end provides access to the different services, such as data analytics and visualizations tools, and the Knowledge Base. 

The Knowledge Base is built upon a Semantic Data Model. It contains all the budget and transaction data uploaded by data providers. Following the *[five-star](http://5stardata.info/)* deployment schema, this data is all structured upon the Semantic Data Model. The repository serves as a hub in the [linked data cloud](http://lod-cloud.net/), where other data repositories can connect to it.

The Knowledge Base is also be accessible via a SPARQL endpoint, so that any external portal would be able to connect and query the standardised budget and transaction data that are available. 

Despite the open data paradigm, the ***data security strategy*** ensures (e.g. using dataset signatures and encryption) that the submitted data is secure, authentic and that ill-intentioned users cannot manipulate it. The ***privacy-by-design architecture*** of the platform ensures that personal information is safeguarded and not revealed unintentionally (e.g. by validation datasets before publication). 



<p><img src="{{site.baseurl}}/img/technical_structure.jpg" alt="Technical Structure"></p>

*<center>Overall OpenBudgets.eu Architecture</center>*


The financial data, coming from different public bodies and different jurisdictions, are integrated by the **Data Collection and Mining services**. Once integrated, the data can be mined and analyzed to discover patterns, trends, and anomalies. 
The platform provides the following services: semantic lifting, data optimisation, data analytics and mining, access and visualisation service, and feedback service. 

* **Semantic Lifting** - Budget and transaction data uploaded by public entities to the OpenBudgets framework do not adhere to the schema as developed in Openbudgets. Semantic lifting will turn the flat data into one format. 
* **Data Optimisation** – These new semantic resources are processed for cleaning and link discovery. Cleaning up of data in resources is required since the uploaded data usually contains inconsistencies and/or non-optimal states (e.g. duplications and contradictions). Moreover, the data will be enriched by linking them to other related semantic resources (in the KB and LOD Cloud). 

* **Data Analytics and Mining services** - The goal of OpenBudgets is to provide its users with easy to use tools for comparative analysis and data mining. Different tools will be built for to perform temporal, spatial, and administrative comparative analysis and data mining operations.

* **Access and Visualisation Services** - The Access service provides a preview of the data directly from the knowledge base. The visualisation service contributes to the analysis and presentation of the data by providing off the shelf visualization tools on the platform. 

* **The Feedback Service** - facilitates discussions on and comments to the data, analysis, and visualizations and let users share these on social media. Finally, the feedback service has an automatic forwarding function to the public administrators concerned, so that they can be immediately informed of the analysis and feedback on the budget and spending data. 