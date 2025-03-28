
# **Exercise: Unit Testing and Error Handling**
Submit your solutions in the SoftUni judge system at:

<https://judge.softuni.org/Contests/2767/Unit-Testing-and-Error-Handling-Exercise>
1. ## **Request Validator**
Write a function that **validates** an **HTTP request object**. The object has the properties **method**, **uri**, **version,** and **message**. Your function will receive **the object as a parameter** and has to **verify** that **each property** meets the following **requirements**:

- **method** - can be **GET**, **POST**, **DELETE** or **CONNECT**
- **uri** - must be a valid resource address or an asterisk (**\***); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the **URI** **cannot** be an empty string
- **version** - can be **HTTP/0.9**, **HTTP/1.0**, **HTTP/1.1** or **HTTP/2.0** supplied as a string
- **message** - may contain **any number** of non-special characters (special characters are **<**, **>**, **\**, **&**, **'**, **")**

If a request is **valid**, return it **unchanged**. 

If any part **fails** the check, **throw an Error** with the message "**Invalid request header: Invalid {Method/URI/Version/Message}**". 

Replace the part in curly braces with the relevant word. Note that some of the **properties may be missing**, in which case the request is **invalid**. Check the properties **in the order** in which they are listed above. If **more than** one property is **invalid**, **throw an error** for the **first** encountered.
### **Input / Output**
Your function will receive an **object** as a parameter. **Return** the same object or **throw an Error** as described above as an output.
### **Examples**

|**Input**|**Output**|
| :-: | :-: |
|<p>{</p><p>`  `method: 'GET',</p><p>`  `uri: 'svn.public.catalog',</p><p>`  `version: 'HTTP/1.1',</p><p>`  `message: ''</p><p>}</p>|<p>{</p><p>`  `method: 'GET',</p><p>`  `uri: 'svn.public.catalog',</p><p>`  `version: 'HTTP/1.1',</p><p>`  `message: ''</p><p>}</p>|
|<p>{</p><p>`  `method: 'OPTIONS',</p><p>`  `uri: 'git.master',</p><p>`  `version: 'HTTP/1.1',</p><p>`  `message: '-recursive'</p><p>}</p>|Invalid request header: Invalid Method|

|<p>{</p><p>`  `method: 'POST',</p><p>`  `uri: 'home.bash',</p><p>`  `message: 'rm -rf /\*'</p><p>}</p>|Invalid request header: Invalid Version|
| :- | :- |
### **Hints**
Since validating some of the fields may require the use of **RegExp**, you can check your expressions using the following samples:

|**URI**||
| :-: | :- |
|**Valid**|**Invalid**|
|<p>svn.public.catalog</p><p>git.master</p><p>version1.0</p><p>for..of</p><p>.babelrc</p><p>c</p>|<p>%appdata%</p><p>apt-get</p><p> </p><p>home$</p><p>define apps</p><p>"documents"</p>|

- Note that the **URI** **cannot** be an **empty string**.

|**Message**||
| :-: | :- |
|**Valid**|**Invalid**|
|<p>-recursive</p><p>rm -rf /\*</p><p>hello world</p><p>https://svn.myservice.com/downloads/</p><p>%root%</p>|<p><script>alert("xss vulnerable")</script></p><p>\r\n</p><p>&copy;</p><p>"value"</p><p>'; DROP TABLE</p>|

- Note that the message **may** be an **empty string**, but the property must still be present.
# **Unit Testing**
You are required to **submit only the unit tests** for the **object**/**function** you are testing. 
1. ## **Even or Odd**
You need to write **unit tests** for a function **isOddOrEven()** that checks whether the **length** of a passed **string** is **even** or **odd**.

If the passed parameter is **NOT** a string **return undefined**. If the parameter is a string **return** either **"even"** or **"odd"** based on the **length** of the string.
### **JS Code**
You are provided with an implementation of the **isOddOrEven()** function:

|**isOddOrEven.js**|
| :-: |
|**function** *isOddOrEven*(string) {<br>`    `**if** (**typeof**(string) !== **'string'**) {<br>`        `**return undefined**;<br>`    `}<br>`    `**if** (string.**length** % 2 === 0) {<br>`        `**return "even"**;<br>`    `}<br><br>`    `**return "odd"**;<br>}|
### **Hints**
We can see there are three outcomes for the function:

- Returning **undefined**
- Returning **"even"**
- Returning **"odd"**

Write one or two tests passing parameters that are **NOT** of **type string** to the function and **expecting** it to **return undefined**.

After we have checked the validation it's time to check whether the function works correctly with valid arguments. Write a test for each of the cases:

- One where we pass a string with **even** length;
- And one where we pass a string with an **odd** length;

Finally, make an extra test passing **multiple different strings** in a row to ensure the function works correctly.
1. ## **Char Lookup**
Write **unit tests** for a function that **retrieves a character** at a given **index** from a passed-in **string**.

You are given a function named **lookupChar()**, which has the following functionality:

- **lookupChar(string, index)** - accepts a **string** and an **integer** (the **index** of the char we want to lookup) :
  - If the **first parameter** is **NOT a string** or the **second parameter** is **NOT a number** - **return undefined**.
  - If **both parameters** are of the **correct type** but the value of the **index is incorrect** (bigger than or equal to the string length or a negative number) - **return** **"Incorrect index"**. 
  - If **both parameters** have **correct types** and **values** - **return** the **character at the specified index** in the string.
### **JS Code**
You are provided with an implementation of the **lookupChar()** function:

|**charLookUp.js**|
| :-: |
|**function** *lookupChar*(string, index) {<br>`    `**if** (**typeof**(string) !== **'string'** || !Number.isInteger(index)) {<br>`        `**return undefined**;<br>`    `}<br>`    `**if** (string.**length** <= index || index < 0) {<br>`        `**return "Incorrect index"**;<br>`    `}<br><br>`    `**return** string.charAt(index);<br>}|
### **Hints**
� good first step in testing a method is usually to determine all exit conditions. Reading through the specification or taking a look at the implementation we can easily determine **3 main exit conditions**:

- Returning **undefined**
- Returning an **"Incorrect index"**
- Returning the **char at the specified index**

Now that we have our exit conditions we should start checking in what situations we can reach them. If any of the parameters are of **incorrect type**, **undefined** should be returned. 

If we take a closer look at the implementation, we see that the check uses **Number.isInteger()** instead of **typeof(index === number)** to check the index. While **typeof** would protect us from getting past an index that is a non-number, it won�t protect us from being passed a **floating-point number**. The specification says that the **index** needs to be an **integer**, since floating-point numbers won�t work as indexes.

Moving on to the next **exit condition** - returning an **"Incorrect index"** if we get past an index that is a **negative number** or an index that is **outside of the bounds** of the string.

For the last exit condition - **returning a correct result**. A simple check for the returned value will be enough.
With these last two tests, we have covered the **lookupChar()** function.
1. ## **Math Enforcer**
Your task is to test an object named **mathEnforcer**, which should have the following functionality: 

- **addFive(num)** - A function that accepts a **single** parameter:
  - If the **parameter** is **NOT a number**, the function should return **undefined**.
  - If the **parameter** is a **number**, **add 5** to it, and **return the result**.
- **subtractTen(num)** - A function that accepts a **single** parameter:
  - If the **parameter** is **NOT a number**, the function should return **undefined**.
  - If the **parameter** is a **number**, **subtract 10** from it, and **return the result**.
- **sum(num1, num2)** - A function that accepts **two** parameters:
  - If **any** of the 2 parameters is **NOT a number**, the function should return **undefined**.
  - If **both** parameters are **numbers**, the function should **return their** **sum**. 

### **JS Code**
You are provided with an implementation of the **mathEnforcer** object:

|**mathEnforcer.js**|
| :-: |
|**let** mathEnforcer = {<br>`    `addFive: **function** (num) {<br>`        `**if** (**typeof**(num) !== **'number'**) {<br>`            `**return undefined**;<br>`        `}<br>`        `**return** num + 5;<br>`    `},<br>`    `subtractTen: **function** (num) {<br>`        `**if** (**typeof**(num) !== **'number'**) {<br>`            `**return undefined**;<br>`        `}<br>`        `**return** num - 10;<br>`    `},<br>`    `sum: **function** (num1, num2) {<br>`        `**if** (**typeof**(num1) !== **'number'** || **typeof**(num2) !== **'number'**) {<br>`            `**return undefined**;<br>`        `}<br>`        `**return** num1 + num2;<br>`    `}<br>};|

The methods should function correctly for **positive**, **negative**, and **floating-point** numbers. In the case of **floating-point** numbers, the result should be considered correct if it is **within 0.01** of the correct value. 

### **Screenshots**
When testing a **more complex** object write a **nested description** for each function:

![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.001.png)

Your tests will be supplied with a variable named **"mathEnforcer"** which contains the mentioned above logic. All test cases you write should reference this variable.
### **Hints**
- Test how the program behaves when passing in **negative** values.
- Test the program with floating-point numbers (use Chai�s **closeTo()** method to compare floating-point numbers).


# **DOM Error Handling**
The following problems must be solved using DOM manipulation techniques.

**Environment Specifics**

Please, be aware that every JS environment may **behave differently** when executing code. Certain things that work in the browser are not supported in **Node.js**, which is the environment used by **Judge**.

The following actions are **NOT** supported:

- **.forEach()** with **NodeList** (returned by **querySelector()** and **querySelectorAll()**)
- **.forEach()** with **HTMLCollection** (returned by **getElementsByClassName()** and **element.children**)
- Using the **spread-operator** (**...**) to convert a **NodeList** into an array
- **append()** in Judge (use only **appendChild()**)
- **prepend()**
- **replaceWith()**
- **replaceAll()**
- **closest()**
- **replaceChildren()**
- Always turn the collection into a **JS array** (forEach, forOf, et.)

If you want to perform these operations, you may use **Array.from()** to first convert the collection into an array. 
1. ## **Notification**
Write a JS function that receives a string **message** and **displays** it inside a div with id "**notification**. The div starts **hidden** and when the function is called, **reveal** it. After the user clicks on it, **hide** the div. In the example document, a notification is shown when you click on the button ["**Get�notified**"].
### **Example**
![messagePop](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.002.png)
1. ## **Dynamic Validation**
Write a JS function that dynamically validates an email input field when it is **changed**. If the input is invalid, apply to it the class "**error**". Do not validate on every keystroke, as it is annoying for the user, consider only **change** events.

A valid email will be in format: **<name>@<domain>.<extension>**

Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style.
### **Input/Output**
There will be no input/output, your program should instead **modify** the DOM of the given HTML document.
### **Example**
![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.003.png)? ![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.004.png)
1. ## **Form Validation**
You are given the task to write **validation** for the fields of a simple form.
### **HTML and JavaScript Code**
You are provided a **skeleton** containing the necessary files for your program.

The validations should be as follows:

- The **username** needs to be between **3** and **20** symbols **inclusively** and only **letters** and **numbers** are allowed.
- The **password** and **confirm-password** must be between **5** and **15** **inclusively** symbols and only **word characters** are allowed (**letters**, **numbers,** and **\_**).
- The **inputs** of the **password** and **confirm-password** field **must match**.
- The **email** field must contain the �**@**� symbol and **at least one** "**.**"(**dot**) after it.

If the "**Is company?**" checkbox is **checked**, the **CompanyInfo** fieldset should become **visible** and the **Company Number** field must also be **validated**, if it isn�t checked the **Company** fieldset should have the style **"display: none;"** and the **value** of the **Company Number** field shouldn�t matter. 

- The **Company Number** field must be a number between **1000** and **9999**.
- Use **addEventListener()** function to **attach** an **event listener** for the "**change**" event to the **checkbox**.

Every field with an **incorrect** value when the **[Submit]** button is **pressed** should have the following style applied **border-color: red;**, alternatively, if it�s correct it should have style **border: none;**. If there are **required fields** with an incorrect value when the **[Submit]** button is pressed, the **div** with **id="valid"** should become **hidden** (**"display: none;"**), **alternatively** if all fields are correct the **div** should become **visible**.
### **Constraints**
- **You are NOT allowed to change the HTML or CSS files provided.**
### **Screenshots**
![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.005.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.006.png)

![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.007.png)

![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.008.png)
### **Hints**
- All buttons within an **<form>** automatically work as **submit** buttons, unless their type is **manually** **assigned** to something else, to avoid **reloading** **the page** upon **clicking** the **[Submit]** button you can use **event.preventDefault()**
- The validation for the separate fields can be done using **regex**.




![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.011.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.012.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.013.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.014.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.015.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.016.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.017.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.018.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.019.png)


![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.009.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.010.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.020.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.021.png)![](Aspose.Words.c46256d2-aa00-473b-a1c6-20b2188a8302.022.png)

