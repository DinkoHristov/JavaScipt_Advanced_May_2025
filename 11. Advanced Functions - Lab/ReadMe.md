
# **Lab: Advanced Functions**
Submit your solutions in the SoftUni judge system at: 

<https://judge.softuni.org/Contests/2764/Advanced-Functions-Lab>
1. ## **Area and Volume Calculator**
Write a function that **calculates** the **area** and the **volume** of a figure, which is **defined** by its **coordinates** 
(**x**, **y**, **z**).

|**area()**|
| :-: |
|<p>function�area()�{</p><p>`����`return�Math.abs(this.x�\*�this.y);</p><p>};</p>|

|**vol()**|
| :-: |
|<p>function�vol()�{</p><p>`����`return�Math.abs(this.x�\*�this.y�\*�this.z);</p><p>};</p>|

|**solve()**|
| :-: |
|<p>function�solve(area,�vol,�input)�{</p><p>`����`//ToDo....</p><p>}</p>|
### **Input**
You will receive **3** parameters -  the **functions** **area** and **vol** and a **string**, which contains the figures' coordinates. 

**For more information check the examples.**
### **Output**
The output should be **returned** as an **array** **of objects**. Each object has **two** **properties**: the figure's **area** and **volume**.

**[**

`  `**{ area: ${area1}, volume: ${volume1} },**

`  `**{ area: ${area2}, volume: ${volume2} },**

`  `**. . .**

**]**
### **Note:**
**Submit only the solve function.**
### **Examples**

|**Sample Input**|**Output**|
| :-: | :-: |
|<p>area, vol, `[</p><p>{"x":"1","y":"2","z":"10"},</p><p>{"x":"7","y":"7","z":"10"},</p><p>{"x":"5","y":"2","z":"10"}</p><p>]`</p>|<p>[</p><p>`  `{ area: 2, volume: 20 },</p><p>`  `{ area: 49, volume: 490 },</p><p>`  `{ area: 10, volume: 100 }</p><p>]</p>|
|<p>area, vol, `[</p><p>{"x":"10","y":"-22","z":"10"},</p><p>{"x":"47","y":"7","z":"-5"},</p><p>{"x":"55","y":"8","z":"0"},</p><p>{"x":"100","y":"100","z":"100"},</p><p>{"x":"55","y":"80","z":"250"}</p><p>]`</p>|<p>[</p><p>`  `{ area: 220, volume: 2200 },</p><p>`  `{ area: 329, volume: 1645 },</p><p>`  `{ area: 440, volume: 0 },</p><p>`  `{ area: 10000, volume: 1000000 },</p><p>`  `{ area: 4400, volume: 1100000 }</p><p>]</p>|

1. ## **Add**
Write a program that keeps a number **inside its context** and **returns** a new function that **adds** a **given** number to the previous one.
### **Input**
Check the **examples** **below** to see how your code will be executed.
### **Output**
Your function should **return** the final result.
### **Examples**

|**Sample Input**|**Output**|
| :-: | :-: |
|<p>let add5 = solution(5);</p><p>console.log(add5(2));</p><p>console.log(add5(3));</p>|<p>7</p><p>8</p>|
|<p>let add7 = solution(7);</p><p>console.log(add7(2));</p><p>console.log(add7(3));</p>|<p>9</p><p>10</p>|
1. ## **Currency Format**
Write a **higher-order** function **createFormatter** that fixes some of the parameters of another function. Your program will **receive four parameters**: **three values** and a **function** that **takes 4 parameters** and **returns a formatted string** (a monetary value with currency symbol). 

Your task is to **return a partially applied function**, based on the input function that has its **first three** parameters fixed and only **takes one parameter**.

You will receive the following function: 

|**currencyFormatter**|
| :-: |
|<p>function currencyFormatter(separator, symbol, symbolFirst, value) {</p><p>`    `let result = Math.trunc(value) + separator;</p><p>`    `result += value.toFixed(2).substr(-2,2);</p><p>`    `if (symbolFirst) return symbol + ' ' + result;</p><p>`    `else return result + ' ' + symbol;</p><p>}</p>|

Receive and set the following parameters to fixed values:

**separator**

**symbol**

**symbolFirst**

The final parameter **value** is the one that the returned function must receive.
### **Input**
You will receive four parameters:

- **separator** (string)
- **symbol** (string)
- **symbolFirst** (Boolean)
- **formatter** (function)
### **Output**
You need to **return a function** that takes one parameter - **value**
### **Examples**

|**Sample Input**|
| :-: |
|<p>let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);</p><p>console.log(dollarFormatter(5345));   *// $ 5345,00*</p><p>console.log(dollarFormatter(3.1429)); *// $ 3,14*</p><p>console.log(dollarFormatter(2.709));  *// $ 2,71*</p>|
1. ## **Filter Employees**
Write a program that filters the employees of your company. You should print the result in a specific format. You will receive **2** parameters (**data**, **criteria**). You should **parse** the input, find all employees that fulfill the criteria, and print them.
### **Input**
You will receive a **string** with all the employees, and **criteria** by which you should sort the employees. If the criteria are **"all"** print all the employees in the given format.
### **Output**
The output should be **printed** on the console. 

For more information check the examples.
### **Examples**

|**Sample Input**|**Output**|
| :-: | :-: |
|<p>`[{</p><p>`    `"id": "1",</p><p>`    `"first\_name": "Ardine",</p><p>`    `"last\_name": "Bassam",</p><p>`    `"email": "abassam0@cnn.com",</p><p>`    `"gender": "Female"</p><p>`  `}, {</p><p>`    `"id": "2",</p><p>`    `"first\_name": "Kizzee",</p><p>`    `"last\_name": "Jost",</p><p>`    `"email": "kjost1@forbes.com",</p><p>`    `"gender": "Female"</p><p>`  `},  </p><p>{</p><p>`    `"id": "3",</p><p>`    `"first\_name": "Evanne",</p><p>`    `"last\_name": "Maldin",</p><p>`    `"email": "emaldin2@hostgator.com",</p><p>`    `"gender": "Male"</p><p>`  `}]`, </p><p>'gender-Female'</p>|<p>0\. Ardine Bassam - abassam0@cnn.com</p><p>1\. Kizzee Jost - kjost1@forbes.com</p>|
|<p>`[{</p><p>`    `"id": "1",</p><p>`    `"first\_name": "Kaylee",</p><p>`    `"last\_name": "Johnson",</p><p>`    `"email": "k0@cnn.com",</p><p>`    `"gender": "Female"</p><p>`  `}, {</p><p>`    `"id": "2",</p><p>`    `"first\_name": "Kizzee",</p><p>`    `"last\_name": "Johnson",</p><p>`    `"email": "kjost1@forbes.com",</p><p>`    `"gender": "Female"</p><p>`  `}, {</p><p>`    `"id": "3",</p><p>`    `"first\_name": "Evanne",</p><p>`    `"last\_name": "Maldin",</p><p>`    `"email": "emaldin2@hostgator.com",</p><p>`    `"gender": "Male"</p><p>`  `}, {</p><p>`    `"id": "4",</p><p>`    `"first\_name": "Evanne",</p><p>`    `"last\_name": "Johnson",</p><p>`    `"email": "ev2@hostgator.com",</p><p>`    `"gender": "Male"</p><p>`  `}]`,</p><p>` `'last\_name-Johnson'</p><p></p>|<p>0\. Kaylee Johnson - k0@cnn.com</p><p>1\. Kizzee Johnson - kjost1@forbes.com</p><p>2\. Evanne Johnson - ev2@hostgator.com</p>|
1. ## **Command Processor**
Write a program that keeps a string **inside its context** and can execute different **commands** that modify or print the string on the console.

**append(string)** - append the given **string** at the end of the internal string

**removeStart(n)** - **remove** the **first** **n** characters from the string, **n** is an integer

**removeEnd(n)** - **remove** the **last n** characters from the string, **n** is an integer

**print** - **print** the stored string on the **console**
### **Input**
Check the examples below to see how your code will be executed.
### **Output**
Whenever you receive the command **print**, the output should be **printed** on the console.
### **Examples**

|**Sample Input**|**Output**|
| :-: | :-: |
|<p>let firstZeroTest = solution();</p><p></p><p>firstZeroTest.append('hello');</p><p>firstZeroTest.append('again');</p><p>firstZeroTest.removeStart(3);</p><p>firstZeroTest.removeEnd(4);</p><p>firstZeroTest.print();</p>|loa|
|<p>let secondZeroTest = solution();</p><p></p><p>secondZeroTest.append('123');</p><p>secondZeroTest.append('45');</p><p>secondZeroTest.removeStart(2);</p><p>secondZeroTest.removeEnd(1);</p><p>secondZeroTest.print();</p>|34|

1. ## **List Processor**
Using a closure, create an inner object to process list commands. The commands supported should be the following:

- **add** **<string>** - adds the following string in an inner collection.
- **remove** **<string>** - removes all occurrences of the supplied **<string>** from the inner collection.
- **print** - prints all elements of the inner collection joined by **","**.
### **Input**
The **input** will come as an **array of strings** - each string represents a **command** to be executed from the command execution engine.
### **Output**
For every print command - you should print on the console the inner collection joined by **","**.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|['add hello', 'add again', 'remove hello', 'add again', 'print']|again,again|
|['add pesho', 'add george', 'add peter', 'remove peter','print']|pesho,george|

1. ## **Cars**
Write a closure that can create and modify objects. All created objects should be **kept** and be accessible by **name**. You should support the following functionality:

- **create <name>** - creates an object with the supplied **<name>**
- **create <name> inherits <parentName>** - creates an object with the given **<name>**, that inherits from the parent object with the **<parentName>**
- **set <name> <key> <value>** - sets the property with key equal to **<key>** to **<value>** in the object with the supplied **<name>**.
- **print <name>** - prints the object with the supplied **<name>** in the format **"<key1>:<value1>,<key2>:<value2>�"** - the printing should also print all **inherited properties** from parent objects. Inherited properties should come after own properties.
### **Input**
The **input** will come as an **array of strings** - each string represents a **command** to be executed from your closure.
### **Output**
For every **print** command - you should print on the console all properties of the object in the above-mentioned format.
### **Constraints**
- **All commands will always be valid, there will be no nonexistent or incorrect input.**
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>['create c1',</p><p>'create c2 inherit c1',</p><p>'set c1 color red',</p><p>'set c2 model new',</p><p>'print c1',</p><p>'print c2']</p><p></p>|<p>color:red</p><p>model:new,color:red</p><p></p><p></p>|





![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.003.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.004.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.005.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.006.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.007.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.008.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.009.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.010.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.011.png)


![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.001.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.002.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.012.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.013.png)![](Aspose.Words.8732aefb-fdf2-4d90-87ad-7f09a7ff659a.014.png)

