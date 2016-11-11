---
layout:     post
title:      The OpenBudgets.eu data model
date:       2016-10-31
categories: post
author:     Jindřich Mynarz
author_affiliation: University of Economics, Prague
author_affiliation_link: http://openbudgets.eu/about/partners/vse/
image:      ../assets/posts/2016-10/openbudgets_cube.png
excerpt:    >
  Driven by the use cases of OpenBudgets.eu, we designed a data model for fiscal data published by the public sector, covering both planned budgets and executed transactions. It is expressed primarily in terms of the Data Cube Vocabulary, conceived as a set of reusable component properties that can be composed into dataset-specific data structures. 
---

Driven by the use cases of the OpenBudgets.eu project, we designed a data model for fiscal data published by the public sector, covering both planned budgets and executed transactions. It is expressed in <abbr title="Resource Description Framework">RDF</abbr> primarily in terms of the [Data Cube Vocabulary](https://www.w3.org/TR/vocab-data-cube) (DCV) <abbr title="World Wide Web Consortium">W3C</abbr> standard, conceived as a set of reusable component properties that can be composed into dataset-specific data structures. The data model is described in its [RDF representation](https://github.com/openbudgets/data-model), which is accompanied by a [data modelling guide and reference](http://openbudgets.eu/assets/deliverables/D1.5.pdf).

The design of the data model was informed by a survey of existing vocabularies, interviews with domain experts and prospective users, and a year-long use in the OpenBudgets.eu project, in which it was applied to more than 200 datasets ranging from the EU level to the municipality level. Having ingested all this input, the data model can be considered stable.

The OpenBudgets.eu data model is based on the Data Cube Vocabulary. DCV is a vocabulary for describing multidimensional statistical data. It organizes measures, optionally qualified by attributes, in logical spaces coordinated by dimensions. Fiscal data typically consists of monetary amounts indexed by values of various dimensions, such as the fiscal year or the funded project. Amounts form the measures coordinated by dimensions in fiscal data cubes. 

<img alt="Generic data cube and an example OpenBudgets.eu data cube" src="{{site.baseurl}}/assets/posts/2016-10/cube_combined.svg" width="600"/>

<small>_Generic data cube and an example OpenBudgets.eu data cube_</small>

The world of fiscal datasets is a diverse one. There are hardly any fiscal datasets conforming to the same structure, though many fiscal datasets share common elements. A fixed data schema would therefore find little reuse. Instead, we decided to adopt component properties as the basic units of reuse. Component properties represent dimensions, attributes, or measures (i.e. instances of `qb:ComponentProperty` in DCV). Using the OpenBudgets.eu data model, data structure definitions of specific datasets can be produced by cherry-picking component properties. The core component properties can be either reused directly or extended via subproperties, such as in the case of a local classification. Values of component properties can be constrained by code lists that enumerate their allowed values. The OpenBudgets.eu data model defines several core code lists, such as the one for budget phases.

We used RDF as an enabling technology for semantic grounding of the fiscal domain, allowing us to mint terms describing the domain, and as a way to integrate heterogeneous datasets. Data integration is enabled by the reuse of component properties, which in turn allows to use fiscal datasets in combination and perform comparative analyses. Moreover, RDF makes it straightforward to combine fiscal data with other statistical datasets, such as macroeconomical indicators from Eurostat, which can provide a relevant context. Datasets modelled using the common terms from the data model are self-describing. Since definitions of the terms describing the data can be found by following their links, it is possible to use the data without prior knowledge. Not needing to ask for explanation of the data thus removes a barrier to use the data. 

DCV defines cardinality restrictions for its component properties. While values of dimensions must be provided for each observation to be able to locate it in the space of the data cube, attributes may be optional. Since we encountered many properties with missing values that did not match the semantics of attributes as measure's qualifiers, we created `obeu:OptionalProperty` as a new subclass of `qb:ComponentProperty` to represent optional properties. Although an arbitrary RDF property may be used to achieve the same goal, an `obeu:OptionalProperty` may be included in a dataset's data structure definition and guide the consumption of the dataset. An example of an optional property is `location`, which is applicable only to monetary amounts tied to a particular place.

The following table lists the core dimensions, attributes, optional properties, and measures defined by the OpenBudgets.eu data model.

<table>
  <caption><small>OpenBudgets.eu component properties</small></caption>
  <thead>
    <tr>
      <th scope="col">Dimensions</th>
      <th scope="col">Attributes</th>
      <th scope="col">Optional properties</th>
      <th scope="col">Measures</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><tt title="Link to an accounting record (e.g., invoice, credit note) associated with expenditure or revenue.">accounting&shy;Record</tt></td>
      <td><tt title="Currency of a financial amount.">currency</tt></td>
      <td><tt title="Public contract for which the payment is made.">contract</tt></td>
      <td><tt title="Monetary amount.">amount</tt></td>
    </tr>
    <tr>
      <td><tt title="Identifies the entity responsible for managing the public funds concerned.">administrative&shy;Classification</tt></td>
      <td><tt title="Indicates whether the reported amount includes taxes.">taxes&shy;Included</tt></td>
      <td><tt title="Physical location affected by a payment.">location</tt></td>
    </tr>
    <tr>
      <td><tt title="Budget line from which the payment draws its funds.">budget&shy;Line</tt></td>
    </tr>
    <tr>
      <td><tt title="Major event or stage in the budget cycle.">budget&shy;Phase</tt></td>
    </tr>
    <tr>
      <td><tt title="Category to which the observation belongs.">classification</tt></td>
    </tr>
    <tr>
      <td><tt title="Currency of a financial amount.">currency</tt></td>
    </tr>
    <tr>
      <td><tt title="Date when expense was paid or revenue received.">date</tt></td>
    </tr>
    <tr>
      <td><tt title="Groups revenue according to its source and expenditure according to the type of the economic activity the government undertakes. For example, economic classification may include compensation of employees or subsidies for expenditure and tax revenue or property income for revenue.">economic&shy;Classification</tt></td>
    </tr>
    <tr>
      <td><tt title="The period of time reflected in financial statements.">fiscal&shy;Period</tt></td>
    </tr>
    <tr>
      <td><tt title="The year reflected in financial statements.">fiscal&shy;Year</tt></td>
    </tr>
    <tr>
      <td><tt title="Classifies expenditure or revenue by general government sector and by its purpose.">functional&shy;Classification</tt></td>
    </tr>
    <tr>
      <td><tt title="Distinguishes among expenditure and revenue.">operation&shy;Character</tt></td>
    </tr>
    <tr>
      <td><tt title="An economic entity that is capable, in its own right, of owning assets, incurring liabilities, and engaging in economic activities and in transactions with other entities.">organization</tt></td>
    </tr>
    <tr>
      <td><tt title="The entity to which the payment was made or from which the revenue was collected.">partner</tt></td>
    </tr>
    <tr>
      <td><tt title="Indicates the phase of payment.">payment&shy;Phase</tt></td>
    </tr>
    <tr>
      <td><tt title="Grouping of expenditure or revenue by common objective.">programme&shy;Classification</tt></td>
    </tr>
    <tr>
      <td><tt title="Project associated with a payment.">project</tt></td>
    </tr>
    <tr>
      <td><tt title="Indicates whether the reported amount includes taxes.">taxes&shy;Included</tt></td>
    </tr>
  </tbody>
</table>

The data model is linked to other vocabularies, including the [Payments Ontology](https://data.gov.uk/resources/payments) or the [SDMX statistical data model](https://sdmx.org). Links support interoperability with datasets described by the linked vocabularies and guide data migrations when such datasets are integrated.

<img alt="Links of the OpenBudgets.eu to other vocabularies" src="{{site.baseurl}}/assets/posts/2016-10/links_d1.8.svg" width="600"/> 

<small>_Links of the OpenBudgets.eu to other vocabularies_</small>

Since the data model was designed to cater for a large variety of fiscal datasets in the scope of the OpenBudgets.eu project, you may find it applicable to a wide range of datasets beyond what we use it for. So far, it has served us well in the project, so it may do the same for other efforts that require modelling of fiscal data. The data model is released under the terms of an open licence, so you may take it, reuse it, and build on it. 
