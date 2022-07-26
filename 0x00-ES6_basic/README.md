<p align="center">
<img src="https://img.shields.io/badge/LINUX-darkgreen.svg"/>
<img src="https://img.shields.io/badge/Shell-ligthgreen.svg"/>
<img src="https://img.shields.io/badge/Emacs-purple.svg"/>
<img src="https://img.shields.io/badge/JavaScript-yellow.svg"/>
<img src="https://img.shields.io/badge/Markdown-black.svg"/><br>	
</p>

---

# 0x00. ES6 Basics

This project contains some tasks for learning how to use and implement  the **`ES6`** Format for Modern Javascript.

<p align="center">
  <img width="500"  
        src="https://soyhorizonte.com/wp-content/uploads/2020/10/JS-by-SoyHorizonte.gif"
  >
</p>

# Getting Started :running:	
<div style="text-align: justify">

## Table of Contents
* [About](#about)
* [Resources](#resources-books)
* [Requirements](#requirements)
* [Files](#files-file_folder)
* [Tasks](#tasks)
* [Credits](#credits)

## About

* [Modern Javascript](https://intranet.hbtn.io/concepts/541) 
* [Software Linter](https://intranet.hbtn.io/concepts/542)

## Resources :books:
Read or watch:
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=es6+javascript&bih=829&biw=1757&hl=en&ei=elPgYtOlDZyGkvQP7fuh2AQ&oq=ES6+&gs_lcp=Cgdnd3Mtd2l6EAEYATIECAAQQzIFCAAQkQIyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEJECMgQIABBDMgQIABBDMgUIABCABEoECEEYAUoECEYYAFD1BVjCCGDqGGgBcAB4AIABjwGIAZECkgEDMC4ymAEAoAEBwAEB&sclient=gws-wiz)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/results?search_query=es6+javascript)

- [ECMAScript 6 - ECMAScript 2015](https://intranet.hbtn.io/rltoken/TCja4539uK-aM7PeJO7b3g) 
- [Statements and declarations](https://intranet.hbtn.io/rltoken/WhZFQkTl7jjHKbolvKMWPQ) 
- [Arrow functions](https://intranet.hbtn.io/rltoken/aOgghxMow79j1NxlaQ6T9g) 
- [Default parameters](https://intranet.hbtn.io/rltoken/5DcDBQM8iItIZFFlVtehTQ) 
- [Rest parameter](https://intranet.hbtn.io/rltoken/e-bvzp0l6c0-dpHMF8zznw) 
- [Javascript ES6 — Iterables and Iterators](https://intranet.hbtn.io/rltoken/ZNKNXIbxKIfocOKDzRgH4Q)

## Requirements
### General
- Allowed editors: `vi`, `vim`, `emacs` 
- All your files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/node` 
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the  **`js`**  extension
- Your code will be tested using the **[Jest Testing Framework](https://intranet.hbtn.io/rltoken/-vHHhukhYFxZrd1G0uD3dw)** 
- Your code will be analyzed using the linter **[ESLint](https://intranet.hbtn.io/rltoken/SXR8c_xOD3tm6NcBkk09dQ)** 
 along with specific rules that we’ll provide
- All of your functions must be exported

## More Info

## Setup
### Install NodeJS 12.11.x
(in your home directory): 
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```
``` 
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint
in your project directory: 
* Install Jest using:  ` npm install --save-dev jest ` 
* Install Babel using:  ` npm install --save-dev babel-jest @babel/core @babel/preset-env ` 
* Install ESLint using:  ` npm install --save-dev eslint `

## Configuration files
### package.json

```bash
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```
### babel.config.js

```bash

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```
### .eslintrc.js

```bash

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```
### Finally…
Don’t forget to run  *` npm install `*  from the terminal of the project folder to install all necessary project dependencies.

### Installation :computer:
	
- Clone this repository: `https://github.com/Alexoat76/holbertonschool-backend-javascript.git`	
- Access to directory: `cd 0x00. ES6 Basics`
- `Compile` accord to `instructions` of each task.

## Files :file_folder:

### Tests :heavy_check_mark:

+ **[tests](./tests)**: Folder of test files. *`Provided by Holberton School`*.
		
---

## Tasks

+ [x] 0\. **Const or let?**

+ **[0-constants.js](./0-constants.js)**

Modify

* function  *` taskFirst `*  to instantiate variables using  *` const `* 
* function  *` taskNext `*  to instantiate variables using  *` let `*

```bash
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

```

Execution example:

```bash
$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

$ 
$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
$ 

```
---

+ [x] 1\. **Block Scope**

+ **[1-block-scoped.js](./1-block-scoped.js)**

Given what you’ve read about  *` var `*  and hoisting, modify the variables inside the function  *` taskBlock `*  so that the variables aren’t overwritten inside the 
conditional block.

```bash
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}

```

Execution:

```bash
$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
$
$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
$

```
---

+ [x] 2\. **Arrow functions**

+ **[2-arrow.js](./2-arrow.js)**

Rewrite the following standard function to use ES6’s arrow syntax of the function   *` add `*   (it will be an anonymous function after)

```bash
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

```

Execution:

```bash
$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
$
$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
$

```
---

+ [x] 3\. **Parameter defaults**

+ **[3-default-parameter.js](./3-default-parameter.js)**

Condense the internals of the following function to 1 line - without changing the name of each function/variable.
 
*Hint*:  The key here to define default parameter values for the function parameters.

```bash
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}

```

Execution:

```bash
$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
$
$ npm run dev 3-main.js 
142
56
41
$

```
---

+ [x] 4\. **Rest parameter syntax for functions**

+ **[4-rest-parameter.js](./4-rest-parameter.js)**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
export default function returnHowManyArguments() {

}
```

Example:

```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

Execution:

```bash
$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
$
$ npm run dev 4-main.js 
1
4
$

```
---

+ [x] 5\. **The wonders of spread syntax**

+ **[5-spread-operator.js](./5-spread-operator.js)**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

``` 
export default function concatArrays(array1, array2, string) {
}
``` 
Execution:

```bash
$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

$
$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
$

```
---

+ [x] 6\. **Take advantage of template literals**

+ **[6-string-interpolation.js](./6-string-interpolation.js)**

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```bash
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}

```

Execution:

```bash
$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

$
$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 
2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
$

```
---

+ [x] 7\. **Object property value shorthand syntax**

+ **[7-getBudgetObject.js](./7-getBudgetObject.js)**

Notice how the keys and the variable names are the same?
Modify the following function’s   *` budget `*   object to simply use the keyname instead.

```bash
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}

```

Execution:

```bash
$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

$
$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
$

```
---

+ [x] 8\. **No need to create empty objects before adding in properties**

+ **[8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)**

Rewrite the   *` getBudgetForCurrentYear `*   function to use ES6 computed property names on the   *` budget `*   object

```bash
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}

```

Execution:

```bash
$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

$
$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
$

```
---

+ [x] 9\. **ES6 method properties**

+ **[9-getFullBudget.js](./9-getFullBudget.js)**

Rewrite   *` getFullBudgetObject `*   to use ES6 method properties in the   *` fullBudget `*   object

```bash
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

```

Execution:

```bash
$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

$
$ npm run dev 9-main.js 
$20
20 euros
$

```
---
+ [x] 10\. **For...of Loops**

+ **[10-loops.js](./10-loops.js)**

Rewrite the function   *` appendToEachArrayValue `*   to use ES6’s   *` for...of `*   operator. And don’t forget that   *` var `*   is not ES6-friendly.
```bash
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}

```
Execution:
```bash
$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

$
$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
$

```
---

+ [x] 11\. **Iterator**

+ **[11-createEmployeesObject.js](./11-createEmployeesObject.js)**

Write a function named   *` createEmployeesObject `*   that will receive two arguments:

*  ` departmentName `  (String)
*  ` employees `  (Array of Strings)

``` 
export default function createEmployeesObject(departmentName, employees) {

}
```

The function should return an object with the following format:

``` 
{
     $departmentName: [
          $employees,
     ],
}

``` 
Execution:

```bash
$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

$
$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
$

```
---

+ [x] 12\. **Let's create a report object**

+ **[12-createReportObject.js](./12-createReportObject.js)**

Write a function named   *` createReportObject `*   whose parameter,   *` employeesList `*  , is the return value of the previous function   *` createEmployeesObject `* .

``` 
export default function createReportObject(employeesList) {

}
```
 
*` createReportObject `*   should return an object containing the key   *` allEmployees `*   and a method property called   *` getNumberOfDepartments `* .

*` allEmployees `*   is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re 
having trouble, use the spread syntax.

The method property receives  *` employeesList `*  and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

```bash
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};

```

Execution:

```bash
$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

$
$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
$

```
---

+ [x] 13\. **Iterating through report objects**

+ **[100-createIteratorObject.js](./100-createIteratorObject.js)**

Write a function named  *` createIteratorObject `*  , that will take into argument a report Object created with the previous function  *` createReportObject `* . 
This function will return an iterator to go through every employee in every department.

```
export default function createIteratorObject(report) {

}
```

Execution:

```bash
$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

$
$ npm run dev 100-main.js 
Bob
Jane
Sylvie
$

```
---


+ [x] 14\. **Iterate through object**

+ **[ 101-iterateThroughObject.js](./ 101-iterateThroughObject.js)**

Finally, write a function named   *` iterateThroughObject `*  . The function’s parameter   *` reportWithIterator `*   is the return value from   *` createIteratorObject `*.

```
export default function iterateThroughObject(reportWithIterator) {

 }

```
It should return every employee name in a string, separated by  ` | `

```bash
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};

```
Should return   *` John Doe | Guillaume Salva `*
 
Reminder - the functions will be  imported  by the test suite.

Full example:

```bash
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> 

```
Execution:

```bash
$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

$
$ npm run dev 101-main.js 
Bob | Jane | Sylvie
$

```
---

## Credits

## Author(s):blue_book:

Work is owned and maintained by 
	**`Alex Orland Arévalo Tribaldos`**  and credits for `group projects` are displayed in the respective `README.md` files.

<3915@holbertonstudents.com>
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/25px-Octicons-mark-github.svg.png)](https://github.com/Alexoat76)
[![M](https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/25px-Twitter_Bird.svg.png)](https://twitter.com/aoarevalot)
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/25px-LinkedIn_logo_initials.png)](https://www.linkedin.com/in/Alexoat76/)

## Acknowledgments :mega: 

### **`Holberton School`** (*providing guidance*)
	
This program was written as part of the curriculum for Holberton School.
Holberton School is a campus-based full-stack software engineering program
that prepares students for careers in the tech industry using project-based
peer learning. For more information,  please visit [this link](https://www.holbertonschool.com/).
![Brand](https://assets.website-files.com/6105315644a26f77912a1ada/610540e8b4cd6969794fe673_Holberton_School_logo-04-04.svg)
