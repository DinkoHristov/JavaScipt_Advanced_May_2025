
# **Lab: Objects & Composition**
Submit your solutions in the SoftUni judge system at:

` `<https://judge.softuni.org/Contests/2758/Objects-and-Composition-Lab>
1. ## **City Record**
You will receive a city�s **name** (string), **population** (number), and **treasury** (number)** as arguments, which you will need to set as **properties** of an **object** and **return** it.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>'Tortuga',</p><p>7000,</p><p>15000</p>|<p>{</p><p>`  `name: 'Tortuga',</p><p>`  `population: 7000,</p><p>`  `treasury: 15000</p><p>}</p>|
|<p>'Santo Domingo',</p><p>12000,</p><p>23500</p>|<p>{</p><p>`  `name: 'Santo Domingo',</p><p>`  `population: 12000,</p><p>`  `treasury: 23500</p><p>}</p>|
1. ## **Town Population**
You have been tasked to create a registry for different **towns** and their **population**.
### **Input**
The **input** comes as array of strings. Each element will contain data for a town and its population in the following format: **"{townName} <-> {townPopulation}"**

If you receive the same town twice, **you should add** the **given population** to the **current one**.
### **Output**
As **output**, you must print all the towns and their population.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['Sofia <-> 1200000',</p><p>'Montana <-> 20000',</p><p>'New York <-> 10000000',</p><p>'Washington <-> 2345000',</p><p>'Las Vegas <-> 1000000']</p>|<p>Sofia : 1200000</p><p>Montana : 20000</p><p>New York : 10000000</p><p>Washington : 2345000</p><p>Las Vegas : 1000000</p>|
|<p>['Istanbul <-> 100000',</p><p>'Honk Kong <-> 2100004',</p><p>'Jerusalem <-> 2352344',</p><p>'Mexico City <-> 23401925',</p><p>'Istanbul <-> 1000']</p>|<p>Istanbul : 101000</p><p>Honk Kong : 2100004</p><p>Jerusalem : 2352344</p><p>Mexico City : 23401925</p>|
1. ## **City Taxes**
*This task is an extension of Problem 1, you may use your solution from that task as a base.*

You will receive a city�s **name** (string), **population** (number), and **treasury** (number)** as arguments, which you will need to set as **properties** of an **object** and **return** it. In addition to the input parameters, the object must have a property **taxRate** with an initial value of **10**, and three **methods** for managing the city:

- **collectTaxes() -** Increase **treasury** by  **population** \* **taxRate**
- **applyGrowth(percentage) -** Increase population by **given percentage**
- **applyRecession(percentage) -** Decrease treasury by **given percentage**

Round down the values after each calculation.
### **Input**
Your solution will receive three **valid** parameters. The methods that expect parameters will be tested with valid input.
### **Output**
Return an **object** as described above. The methods of the object modify the object and don�t return anything.

|**Input**|**Output**|
| :-: | :-: |
|<p>const city = </p><p>`  `cityTaxes('Tortuga',</p><p>`  `7000,</p><p>`  `15000);</p><p>console.log(city);</p>|<p>{</p><p>`  `name: 'Tortuga',</p><p>`  `population: 7000,</p><p>`  `treasury: 15000,</p><p>`  `taxRate: 10,</p><p>`  `**collectTaxes**: [Function: **collectTaxes**],</p><p>`  `applyGrowth: [Function: applyGrowth],</p><p>`  `applyRecession: [Function: applyRecession]</p><p>}</p>|
|**Testing with code**||
|**Input**|**Output**|
|<p>const city =</p><p>`  `cityTaxes('Tortuga',</p><p>`  `7000,</p><p>`  `15000);</p><p>city.collectTaxes();</p><p>console.log(city.treasury);</p><p>city.applyGrowth(5);</p><p>console.log(city.population);</p>|<p>85000</p><p>7350</p>|
1. ## **Object Factory**
Create a function that can compose objects by copying functions from a given library of functions. You will receive **two** **parameters** � a **library** of functions as an associative array (object) and an **array of orders**, represented as objects**.** You must **return** a new array � the fulfilled orders.

The **first parameter** will be an object where each property is a **function**. You will use this **library of functions** to compose new objects.

The **second parameter** is an **array of orders**. Each order is an **object** with the following shape:

**{**

`  `**template: [Object],**

`  `**parts: string[]**

**}**

A **template** is an object that must be **copied**. The **parts array** contains the names of **required functions** as **strings**.

You must **create and return a new array**, by fulfilling all orders from the **orders array**. To fulfill an order, create a copy of the object�s template and then add to it all functions, listed in the **parts array** of the order, by taking them from the **function library** (the first parameter to your solution).
### **Input**
You will receive two parameters:

- **library** � an object
- **orders** � an array of objects
### **Output**
Your solution must **return an array** of objects.
### **Example**

|**Input**|
| :-: |
|<p>const **library** = {</p><p>`  `print: function () {</p><p>`    `console.log(`${this.name} is printing a page`);</p><p>`  `},</p><p>`  `scan: function () {</p><p>`    `console.log(`${this.name} is scanning a document`);</p><p>`  `},</p><p>`  `play: function (artist, track) {</p><p>`    `console.log(`${this.name} is playing '${track}' by ${artist}`);</p><p>`  `},</p><p>};</p><p>const **orders** = [</p><p>`  `{</p><p>`    `template: { name: 'ACME Printer'},</p><p>`    `parts: ['print']      </p><p>`  `},</p><p>`  `{</p><p>`    `template: { name: 'Initech Scanner'},</p><p>`    `parts: ['scan']      </p><p>`  `},</p><p>`  `{</p><p>`    `template: { name: 'ComTron Copier'},</p><p>`    `parts: ['scan', 'print']      </p><p>`  `},</p><p>`  `{</p><p>`    `template: { name: 'BoomBox Stereo'},</p><p>`    `parts: ['play']      </p><p>`  `}</p><p>];</p><p>const products = factory(**library**, **orders**);</p><p>console.log(products);</p>|
|**Output**|
|<p>[</p><p>`  `{</p><p>`    `name: 'ACME Printer',</p><p>`    `print: [Function: print]</p><p>`  `},</p><p>`  `{</p><p>`    `name: 'Initech Scanner',</p><p>`    `scan: [Function: scan]</p><p>`  `},</p><p>`  `{</p><p>`    `name: 'ComTron Copier',</p><p>`    `scan: [Function: scan],</p><p>`    `print: [Function: print]</p><p>`  `},</p><p>`  `{</p><p>`    `name: 'BoomBox Stereo',</p><p>`    `play: [Function: play]</p><p>`  `}</p><p>]</p>|
1. ## **Assembly Line**
Create a function that **returns** a **library of decorator functions**. They can be used to **compose** different functionality in a **car object** that they receive as an argument.

Your solution must **return an object**, containing **three decorator functions**:

**hasClima** � compose air conditioning controls into the passed-in object. This function takes an **object as a parameter** and adds to it the following properties:

- **temp** � **number** with default value **21**;
- **tempSettings** � **number** with default value **21**;
- **adjustTemp** � **function** which takes **no arguments**. If **temp** is less than **tempSettings**, this function adds 1 to **temp**. If **temp** is more than **tempSettings**, it decreases **temp** by 1. If **temp** and **tempSettings** are equal, the function does nothing.

**hasAudio** � compose audio player functionality into the passed-in object. This function takes an **object as a parameter** and adds to it the following properties:

- **currentTrack** � **object** with properties **name** (string) and **artist** (string). The default value is **null**;
- **nowPlaying** � **function**, which **prints** on the console the text: 

  `  `**`Now playing '${currentTrack.name}' by ${currentTrack.artist}` ,** where **name** and **artist** are properties of the **currentTrack** object. If **currentTrack** is **null**, this function does nothing.

**hasParktronic** � compose parking aid functionality into the passed in object. This function takes an **object as a parameter** and adds to it the following properties:

- **checkDistance** � **function**, which takes a **single argument** **distance** (number) and **prints** a message on the console, depending on its value:

**distance** < 0.1 � **"Beep! Beep! Beep!"**

0\.1 <= **distance** < 0.25 � **"Beep! Beep!"**

0\.25 <= **distance** < 0.5 � **"Beep!"**

In any other case, print an **empty string**.
### **Input**
Your **solution** will receive **no arguments**. All the methods in the returned library must take an **object as an argument**. Any methods that you compose into this object must meet the input requirements listed in the description above.
### **Output**
Your **solution** must **return an object** containing the **three decorators** described above.
### **Example**

|**Setup**||
| :-: | :- |
|<p>const **assemblyLine** = createAssemblyLine();</p><p></p><p>const **myCar** = {</p><p>`    `make: 'Toyota',</p><p>`    `model: 'Avensis'</p><p>};</p>||
|**Input**|**Output**|
|<p>**assemblyLine**.hasClima(**myCar**);</p><p>console.log(**myCar**.temp);</p><p>**myCar**.tempSettings = 18;</p><p>**myCar**.adjustTemp();</p><p>console.log(**myCar**.temp);</p>|<p>21</p><p>20</p>|
|<p>**assemblyLine**.hasAudio(**myCar**);</p><p>**myCar**.currentTrack = {</p><p>`    `name: 'Never Gonna Give You Up',</p><p>`    `artist: 'Rick Astley'</p><p>};</p><p>**myCar**.nowPlaying();</p>|Now playing 'Never Gonna Give You Up' by Rick Astley|
|<p>**assemblyLine**.hasParktronic(**myCar**);</p><p>**myCar**.checkDistance(0.4);</p><p>**myCar**.checkDistance(0.2);</p>|<p>Beep!</p><p>Beep! Beep!</p>|
|console.log(**myCar**);|<p>{</p><p>`  `make: 'Toyota',</p><p>`  `model: 'Avensis',</p><p>`  `temp: 20,</p><p>`  `tempSettings: 18,</p><p>`  `adjustTemp: [Function],</p><p>`  `currentTrack: {</p><p>`    `name: 'Never Gonna Give You Up',</p><p>`    `artist: 'Rick Astley'</p><p>`  `},</p><p>`  `nowPlaying: [Function],</p><p>`  `checkDistance: [Function]</p><p>}</p>|
1. ## **From JSON to HTML Table**
You�re tasked with creating an HTML table of students and their scores. You will receive a single string representing an **array of objects**, the **table�s headings** should be equal to the **object�s keys**, while **each object�s values** should be a **new entry** in the table. Any **text values** in an object should be **escaped**, to avoid introducing dangerous code into the HTML. 
### **Input**
The **input** comes with a **single string argument** (the array of objects).
### **Output**
The **output** should be printed on the console � for each **entry** **row** in the input print the **object** **representing** **it**.
### **Note:**
Objects� **keys** will always be the **same.** Check more information for the **HTML Entity [here](https://developer.mozilla.org/en-US/docs/Glossary/Entity).**
### **HTML**
You are provided with an HTML file to test your table in the browser.

|**index.html**|
| :-: |
|<!DOCTYPE **html**><br><**html lang="en"**><br><**head**><br>`    `<**meta charset="UTF-8"**><br>`    `<**title**>FromJSONToHTMLTable</**title**><br>`    `<**style**><br>`        `**table**,**th**{<br>`            `**border**: **groove**;<br>`            `**border-collapse**: **collapse**;<br>`        `}<br>`        `**td**{<br>`            `**border**: 1**px solid black**;<br>`        `}<br>`        `**td**,**th**{<br>`            `**padding**: 5**px**;<br>`        `}<br>`    `</**style**><br></**head**><br><**body**><br>`    `<**div id="wrapper"**><br>`    `</**div**><br>`    `<**script**><br>`        `**function** *fromJSONToHTMLTable*(input){<br>`            `*//Write your code here*<br>`        `}<br>`        `**window**.onload = **function**(){<br>`            `**let** container = **document**.getElementById(**'wrapper'**);<br>`            `container.**innerHTML** = *fromJSONToHTMLTable*([**'[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]'**]);<br>`        `};<br>`    `</**script**><br></**body**><br></**html**>|
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>`[{"Name":"Stamat",</p><p>`    `"Score":5.5},</p><p>`   `{"Name":"Rumen",</p><p>`    `"Score":6}]`</p>|<p><table></p><p>`   `<tr><th>Name</th><th>Score</th></tr></p><p>`   `<tr><td>Stamat</td><td>5.5</td></tr></p><p>`   `<tr><td>Rumen</td><td>6</td></tr></p><p></table></p>|
|<p>`[{"Name":"Pesho",</p><p>`    `"Score":4,</p><p>`    `" Grade":8},<br>`   `{"Name":"Gosho",</p><p>`    `"Score":5,</p><p>`    `" Grade":8},</p><p>`   `{"Name":"Angel",</p><p>`    `"Score":5.50,</p><p>`    `" Grade":10}]`</p>|<p><table></p><p>`   `<tr><th>Name</th><th>Score</th><th>Grade</th></tr></p><p>`   `<tr><td>Pesho</td><td>4</td><td>8</td></tr></p><p>`   `<tr><td>Gosho</td><td>5</td><td>8</td></tr></p><p>`   `<tr><td>Angel</td><td>5.5</td><td>10</td></tr></p><p></table></p>|





![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.003.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.004.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.005.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.006.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.007.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.008.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.009.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.010.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.011.png)


![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.001.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.002.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.012.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.013.png)![](Aspose.Words.284b7dd1-f9e1-4fb6-a61a-d2db805dca1f.014.png)

