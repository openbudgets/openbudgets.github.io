# CSV2OBEU RDF Pipeline Documentation

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image18.png)




## Introduction

LinkedPipes is a lightweight ETL (Extract, Transform, Load) tool that allows advanced users to create individual pipelines for specific use cases in which data needs to be sourced. Find details on the installation process on <a href="https://github.com/linkedpipes/etl">Github</a>. 

### Getting familiar with the Environment of LP
#### Overview

Once you have <a href="https://etl.linkedpipes.com/">LinkedPipes ETL</a> installed and running, it is time to explore. Of course, there is not much to see in an empty instance, but let us go through the basics. The image above is what we call a Pipeline. It is a defined data transformation process which consists of interconnected components. You can add a component to a pipeline by clicking in an empty space and selecting the desired component from the list, or by dragging and edge to an empty space. Each component has a name, green input ports and yellow output ports. The ports represent Data Units, which can contain either RDF data or regular files, according to their type. Ports are connected by edges, which indicate the flow of data. Only ports representing Data Units of the same type can be connected. In addition, component configuration can be shared among pipelines using component templates. 

#### Pipelines

Pipelines, defined data transformation processes consisting of interconnected components, are one of the key concepts in LinkedPipes ETL. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image10.png)

So far, you can name them, display them, edit them and run them. Once you run a Pipeline, you create its Execution. 

#### Executions

An Execution is one run of a Pipeline. It can either succeed or fail. On the Executions page, you can see the currently running executions with their progress as well as finished executions. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image17.png)

You can see the start and end time of an Execution as and the amount of disk space it takes up. You can free that disk space by using the trash icon. You can also re-run the execution or edit its Pipeline, which is useful for debugging.

#### Component compatibility

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image33.png)

The first component is placed the usual way, just click anywhere on the pipeline and a component list will show up. From the second component on, it gets interesting. Place the next component by dragging and edge from an existing one.
The list of components you see is limited only to those actually compatible with the output of the current component. For HTTP Get, you get only those components that can consume files, for components that produce RDF, only those able to consume RDF are offered.

#### Component tags

In addition, we tagged the components so that you can find them not only by their name, which sometimes you would have to guess, but also by what they do and by the formats they process. Let's say you want to unzip a file. For that, we have the Decompress archive component. However, it may be hard to find under that name. Now, you can find it by typing zip.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image07.png)

When you execute a pipeline, you can watch it execute in the graphical overview. When a pipeline fails, you can simply fix what was wrong and resume from the point of failure. And when you are developing your query and need to rerun it over and over again until it is perfect, you can do that too.

#### Resume failed pipeline execution

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image17.png)

When your execution fails, you can see that in the execution list. When you click on the execution, the graphical execution overview opens, where you can see what went wrong. By clicking on a data unit (circle on a component) you can browse its contents. By clicking on a component, you can see details about its execution. Now you need to switch to edit mode, fix the component that failed and click on "execute" to resume the execution of the pipeline.

#### Graphical execution overview

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image09.png)

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image19.png)


#### Component debug controls

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image28.png)

When a component is clicked in the pipeline, its controls show up. The ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image35.png) control invalidates the old and fresh components and all components following it in the execution order. The ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image15.png) control runs the pipeline up to that component and then stops. The ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image31.png) control disables the component. A disabled component behaves as if it is not in the pipeline when a pipeline is executed. However, it keeps all the configuration and can be enabled again at any time. This is useful for debugging queries and configurations of a single component.
    
    
#### Execution detail

Once an Execution is finished, you may want to inspect it in more detail. One way is browsing the intermediary data passed in the pipeline in the graphical overview. Another way is by clicking on Execution detail in the ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image11.png) menu. There, you can inspect messages from the execution in the form of a list.
    
In the Execution detail view, you can see a list of data units attached to executed components. The individual data units are named to reflect their expected content. You can open a data unit and see the files inside via FTP. Soon, we will add the option to directly query RDF data units using SPARQL. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image01.png)

    
#### Sharing options

Pipelines can be shared among colleagues and LP-ETL instances easily. They can be downloaded from one instance, shared as files on the web and finally imported to another instance either as a whole pipeline or as a pipeline fragment.
    
#### Pipeline download

You can download a pipeline as a JSON-LD file from the pipeline list by clicking on the more_vert menu. There, you can select either Download or Download without credentials, which removes all potentially sensitive information such as user names, passwords, host names and ports from the downloaded pipeline, so that it can be shared safely. In addition, you can copy the selected pipeline IRI to the clipboard and send the link to someone who can use it to import the pipeline to his LP-ETL instance without the need to download and upload the pipeline files.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image13.png)

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image22.png)

The same options for downloading a pipeline are also available from the pipeline editor, again in the ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image11.png) menu. The pipeline IRI is available in the pipeline detail dialog.

#### Pipeline import

Once you get a link to a pipeline or the pipeline itself in the form of a JSON-LD file, you can import it in an LP-ETL instance either as a whole new pipeline, or as a pipeline fragment into an existing pipeline. To import the pipeline as a new pipeline, click on the menu menu and select the file_upload item.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image04.png) 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image02.png)


In the pipeline import dialog, you can either upload the pipeline in a JSON-LD file, or provide a URL of an existing pipeline, which can be both uploaded somewhere on the web, or it can be the pipeline IRI from another LP-ETL instance.

## Uploading the pipeline into LP-ETL

We have created a configurable pipeline in order to transform fiscal data from tabular format (CSV, EXCEL etc) in RDF, using the OpenBudgets.eu Data Model. To start, simply copy the pipeline URL.

https://raw.githubusercontent.com/skarampatakis/pipeline-fragments/csv2rdf/CSV2RDF/pipeline/CSV2OBEURDF-Template.jsonld

Then upload the pipeline on your LinkedPipes instance. LinkedPipes can create a new pipeline either by uploading the pipeline itself, or by pointing to a URL where the pipeline is. Point your mouse over the Orange button on the bottom right corner of the screen and click on the Up arrow button.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image04.png)

A menu will be presented where you will select the “From URL” option.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image30.png)

On the “Pipeline URL” field, copy the link provided above.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image25.png)

And then click on the “UPLOAD” button. After loading the pipeline you will be ready to start editing your pipeline. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image18.png)

On the next steps we will explain every single aspect of the above procedure.

### Legend

In order to have a clear overview of each of the steps required to transform your dataset using this pipeline we have coloured some critical components where you need to edit. Here is the legend of what each color means.
<table>
<thead>
<th>Colour</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td><img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image20.png">
</td>
<td>
Teal coloured components are used to upload datasets, whether they are the actual datasets or external codelists to be used for annotation purposes. In order to work properly, links should point to downloadable files. You can have them uploaded on a server or on Dropbox like services. 
</td>
</tr>
<tr>
<td>
<img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image36.png">
</td>
<td>
Purple coloured components are used to insert data using simple text files. These components contain DSD configurations and basic dataset descriptions.
</td>
</tr>
<tr>
<td><img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image37.png">
</td>
<td>
Deep blue colored components are used to provide metadata specific information. These are mostly simple forms where you have to edit and provide info. The rest are handled by the components.
</td>
</tr>
<tr>
<td><img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image00.png">
</td>
<td>
Yellow components are used to create the observations triples for each budget phase. These require minor edits, to map columns from the original dataset file to properties of the OBEU Data model. More info of the exact procedure you will find on this section.
</td>
</tr>
<tr>
<td><img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image32.png">
</td>
<td>
Strong green components are used to create codelists that are self included implicitly on your dataset. That means that you should have at least two distinct columns containing a notation and a label for the codelist.</td>
</tr>
<tr>
<td><img src="https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image34.png">
</td>
<td>
Orange coloured components are used to annotate datasets with codelists. In general you have to change the condition rule (a simple regex), on how the annotator makes the comparison. 
</td>
</tr>
</tbody>
</table>

## Editing

### Uploading dataset in raw format

Go to ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image20.png) the component and click on the edit button once selected. Here you will have to define the exact URL of your dataset. You can not upload directly a dataset into LP, so your dataset has to be on public webserver or a service like Dropbox. After you copy the URL of your file, paste it at the file URL field.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image16.png)

In case you use Dropbox for your file uploading(recommended), don’t forget to change the “dl” key from “0” to “1”, to get the actual file and not a webpage describing the file. You have also to change the filename. Just give the filename of your file and click on “SAVE CHANGES” button.

### Configuring Tabular
Configure the “Tabular” component to match your own file configuration.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image03.png)

This should be the delimiter, the quote and the number of rows to skip. Leave the rest as is.

### Naming conventions
For OpenBudgets.eu we will use the following RDF prefixes based on a similar approach for
the RDF version of SDMX:


```turtle
obeu: <http://data.openbudgets.eu/ontology/>
obeu-dsd: <http://data.openbudgets.eu/resource/dsd/>
obeu-dimension: <http://data.openbudgets.eu/ontology/dsd/dimension/>
obeu-measure: <http://data.openbudgets.eu/ontology/dsd/measure/>
obeu-attribute: <http://data.openbudgets.eu/ontology/dsd/attribute/>
obeu-codelist: <http://data.openbudgets.eu/resource/codelist/>
obeu-metadata: <http://data.openbudgets.eu/ontology/metadata/>
obeu-currency: <http://publications.europa.eu/resource/authority/currency/>
```

Before we can continue we have to define the naming conventions to be used. We recommend using the following pattern
<p>
http://data.openbudgets.eu/resource/dataset/<b>{continent}</b>/<b>{country}</b>/<b>{division_level}</b>/<b>{year}</b>/budget/
</p>
On each URL segment use lowercase english alphabet letters. Replace any space character “ “ with hyphen “-”. Use the following table as a guide.
<table>
<theader>
<th>Segment</th>
<th>Description</th>
</theader>
<tbody>
<tr>
<td><b>{continent}</b></td>
<td>
Here goes the name of the continent of the organization to describe. Possible values are “europe”,”north-america”,”south-america”, “africa”, “asia”, “oceania”, “antarctica“
</td>
</tr>
<tr>
<td><b>{country}</b></td>
<td>
Use this list to get the official name in english of the country that your organization belongs. http://www.geonames.org/countries/
Remember to use only lowercase english alphabet and hyphens instead of spaces where needed. 
</td>
</tr>
<tr>
<td><b>{division_level}</b></td>
<td>
Division level reflect the division level of your organization. Possible values are “general-government”, “regions”, “municipalities”
</td>
</tr>
<tr>
<td><b>{year}</b></td>
<td>
Use Gregorian calendar year values in “YYYY” format. For instance if the dataset refers to the fiscal year 2017 use this value.
</td>
</tr>
</tbody>
<tfoot>
</tfoot>
</table>

Now it’s time to get to the actual conversion!!

### Changing Column Numbers and prefixes

Usually, each dataset should contain at least one column with amounts in some budget phase. These get handled in the yellow components. Inside the components there are some configurations that need to be changed. These are hinted by the “#INFO:” tag. On the info tag there is a short explanation of what and how should be changed to cover your needs. Let’s start!

1. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image12.png)
   
On this configuration you have to define your dimensions prefixes. Follow the naming convention we have described above. Don’t forget to change also the operation character segment. Possible values are “revenue” and “expenditure”. Leave the rest as is. 

2.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image21.png)
  
On the above settings we have to do the actual mapping of column values. Change the number after “column_” to reflect your tabular file structure. The “?codelist_id” variable is usually an id column, a classification identity. Then, ?value is the column where the value for a specific budget phase exists. Here we see the mapping for the “draft” budget phase. Change the number to match yours. 

3.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image08.png)

Repeat what you have done on step 1. This will be used as the observation’s IRI.

4.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image38.png)

This is the last configuration you have to do. In some countries the ‘,’ (comma) is used as decimal separator whilst in others is used as grouping character. In the SPARQL specification, only the “.” is used as decimal separator. In order to be in par with the official specification, make the appropriate changes. If your dataset file is using the “.” as decimal separator, uncomment the second bind statement. Else uncomment the first. 

Now you have finished modelling your first amount column into RDF DCV observation! Repeat with all different budget phases you may have. In the original pipeline there are 4 different yellow components, one for every standard budget phase in the OBEU Data Model. These are “Draft”, “Approved”, “Revised”, “Executed”. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image05.png)

Edit each of these to match your dataset structure. You can disable a budget phase if it is not present on your dataset.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image23.png)

Disabled components will not be evaluated.

### Annotating Dataset with External Codelists

There are cases where codelists are not included inline with the actual datasets. In some cases there are hinted in other codelists, sometimes only the notation is mentioned and in other only the label or description. 

Additionally, some use cases may require annotating the dataset with external resources, based on some criteria. That is the role of the annotating components we have designed within the pipeline. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image24.png)
 
First we need to define where to get the external codelist from. Change the URL in the “Codelist Import” Component.

Then, change the configuration on the “Annotate Dataset” component. This is a SPARQL construct component. 

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image26.png)

Next go to the handle missing value component and define the missing value entity.

![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image27.png)

### Configuring the Dataset description

Next, we have to create the dataset description. Go to the ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image36.png)  component and make the appropriate changes.
```turtle
#INFO: change the URL below to match your dataset regarding the naming conventions
<http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thessaloniki/2016/budget/revenue> a qb:DataSet ;
#INFO: change the URL below to match your dataset regarding the naming conventions
  qb:structure <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thessaloniki/2016/budget/revenue/dsd/> ;
#INFO: change the URL below to match your dataset regarding the naming conventions
  rdfs:label "Municipality of Thessaloniki, Greece Revenue Budget for the fiscal year 2016"@en ;
#INFO: change below the currency to match your dataset using ISO 4217 3 letter codes
  obeu-attribute:currency  obeu-currency:EUR;
#INFO: change below the date to match your dataset 
  obeu-dimension:fiscalYear <http://reference.data.gov.uk/id/year/2016> ;
#INFO: change below the operation character to match your dataset. Possible values :”expenditure”, “revenue”
  obeu-dimension:operationCharacter obeu-operation:revenue;
#INFO: change below the organization to match your own. Use an instance from GeoNames or DBpedia  
obeu-dimension:organization <http://el.dbpedia.org/resource/Δήμος_Θεσσαλονίκης> ;
  dc:publisher <http://openbudgets.eu> .
```

### Configuring the Data Structure Definition
Next, we have to create the Data Structure Definition of the Dataset. Go to ![](https://github.com/openbudgets/pipeline-fragments/raw/master/CSV2RDF/documentation/images/image14.png) and make the appropriate changes. 

```turtle
# -----DSD-specific namespaces
#INFO: change the URL below to match your dataset regarding the naming conventions
@prefix mydimension: <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thessaloniki/2016/budget/revenue/dsd/dimension/> .
# -----External Codelists namespaces
@prefix gr-codelist: <http://data.openbudgets.eu/resource/codelist/europe/greece/> .
@prefix my: <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thessaloniki/2016/budget/revenue/> .
# -----OpenBudgets.eu namespaces -----
@prefix obeu:             <http://data.openbudgets.eu/ontology/> .
@prefix obeu-attribute:   <http://data.openbudgets.eu/ontology/dsd/attribute/> .
@prefix obeu-dimension:   <http://data.openbudgets.eu/ontology/dsd/dimension/>.
@prefix obeu-measure:     <http://data.openbudgets.eu/ontology/dsd/measure/> .
@prefix obeu-budgetphase: <http://data.openbudgets.eu/resource/codelist/budget-phase/> .
@prefix obeu-codelist:    <http://data.openbudgets.eu/resource/codelist/> .
# -----Generic namespaces ------
@prefix qb:               <http://purl.org/linked-data/cube#> .
@prefix rdf:              <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:             <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos:             <http://www.w3.org/2004/02/skos/core#> .
@prefix xsd:              <http://www.w3.org/2001/XMLSchema#> .


# DSD
#INFO: change the URL below to match your dataset regarding the naming conventions
<http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thessaloniki/2016/budget/revenue/dsd/> a
  qb:DataStructureDefinition ;
    rdfs:label "Data structure definition for the revenue budget of Thessaloniki Municipality, Greece for the fiscal year 2016"@en ;
  qb:component
    [ qb:dimension obeu-dimension:organization ;
        qb:componentAttachment qb:DataSet ],
    [ qb:dimension obeu-dimension:operationCharacter ;
        qb:componentAttachment qb:DataSet ],
    [ qb:dimension obeu-dimension:fiscalYear;
        qb:componentAttachment qb:DataSet ],
    [ qb:dimension mydimension:administrativeClassification ],
    [ qb:dimension mydimension:economicClassification ],
    [ qb:dimension mydimension:functionalClassification ],
    [ qb:dimension mydimension:budgetphase],
    [ qb:attribute obeu-attribute:currency ;
      qb:componentRequired "true"^^xsd:boolean ;
      qb:componentAttachment qb:DataSet ],
    [ qb:measure obeu-measure:amount ] .

#dimension definition    
mydimension:economicClassification a rdf:Property, qb:CodedProperty, qb:DimensionProperty ;
    rdfs:label "KA of Expenditure"@en ;
    rdfs:comment "Budget expenditure codes (KAE) for greek municipalities"@en ;
    rdfs:subPropertyOf obeu-dimension:economicClassification ;
    qb:codeList gr-codelist:kae-ota-esodwn-2014 ;
    rdfs:range skos:Concept ;
    rdfs:isDefinedBy <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thesssaloniki/2016/revenue/dsd> .

mydimension:administrativeClassification a rdf:Property, qb:CodedProperty, qb:DimensionProperty ;
    rdfs:label "Municipality Office"@en ;
    rdfs:comment "The organization unit (office) of the municipalities in Greece that is responsible for the budget amount."@en ;
    rdfs:subPropertyOf obeu-dimension:administrativeClassification ;
    qb:codeList gr-codelist:administrations ;
    rdfs:range skos:Concept ;
    rdfs:isDefinedBy <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thesssaloniki/2016/revenue/dsd> .
    
mydimension:functionalClassification a rdf:Property, qb:CodedProperty, qb:DimensionProperty ;
    rdfs:label "Municipality Office - KAE Programme"@en ;
    rdfs:comment "Specific function of expenditure budget per office for Municipality of Thessaloniki revenue Budget of year 2016"@en ;
    rdfs:subPropertyOf obeu-dimension:functionalClassification ;
    qb:codeList my:codelist ;
    rdfs:range skos:Concept ;
    rdfs:isDefinedBy <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thesssaloniki/2016/revenue/dsd> .

mydimension:budgetphase a rdf:Property, qb:CodedProperty, qb:DimensionProperty ;
    rdfs:label "Budget Phase"@en, "Φάση Προϋπολογισμού"@el ;
    rdfs:comment "Budget Phase"@en, "Φάση Προϋπολογισμού"@el ;
    rdfs:subPropertyOf obeu-dimension:budgetPhase ;
    qb:codeList obeu-codelist:budget-phase ;
    rdfs:range skos:Concept ;
    rdfs:isDefinedBy <http://data.openbudgets.eu/resource/dataset/europe/greece/municipalities/thesssaloniki/2016/revenue/dsd> . 
```

### Configuring Metadata

Within the OpenBudgets.eu project we work with data modelled according to the Data Cube Vocabulary (DCV). To comply with DCAT-AP v1.1 and to structure the data and metadata in a uniform way, we follow the following guidelines:

1. The qb:DataSet instance complies with the IRI pattern
http://data.openbudgets.eu/resource/dataset/DATASETID

2. The named graph containing the data complies with the same IRI pattern
http://data.openbudgets.eu/resource/dataset/DATASETID

3. The dcat:Dataset instance complies with the IRI pattern
http://data.openbudgets.eu/resource/dataset/DATASETID/metadata

4. There is a dcterms:subject property linking the dcat:Dataset to the
qb:DataSet instance that is describes.

5. The named graph containing the metadata complies with the same IRI pattern
http://data.openbudgets.eu/resource/dataset/DATASETID/metadata

6. The dcat:Distribution instance complies with the IRI pattern
http://data.openbudgets.eu/resource/dataset/DATASETID/metadata/DISTRIBUTIONID, where DISTRIBUTIONID is different for every distribution of this Dataset (i.e. rdf-
trig, csv, sparql, etc.)

7. The dataset publisher is the project partner responsible for that dataset.

8. The author of the dataset is the person responsible for that dataset.

9. Access URL and Download URL for file distributions must both point to the data
dump.

10. For the SPARQL endpoint distribution, the Access URL points to the endpoint. The additional metadata items are not to be used for this type of distribution.

Note that DCAT-AP v1.1 is supported in LinkedPipes ETL - the tool used to produce RDF 
datasets in OpenBudgets.eu - by two specific components: DCAT-AP Dataset and DCAT-
AP Distribution. Nevertheless, this is an open specification and compliant metadata can be
also produced in other ways.
