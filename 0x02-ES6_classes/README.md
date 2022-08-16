<p align="center">
<img src="https://img.shields.io/badge/LINUX-darkgreen.svg"/>
<img src="https://img.shields.io/badge/Shell-ligthgreen.svg"/>
<img src="https://img.shields.io/badge/Vim-green.svg"/>
<img src="https://img.shields.io/badge/JavaScript-yellow.svg"/>
<img src="https://img.shields.io/badge/Markdown-black.svg"/><br>	
</p>

---

# 0x02. ES6 classes

This project contains some tasks for learning how to use and implement **`Classes`** in Javascript language.

<p align="center">
  <img width="300"  
        src="https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=790b7611e182513cfb8be6cde9402da76a5c95a8729a0d9c&rid=giphy.gif&ct=s"
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

- **[Classes](https://intranet.hbtn.io/rltoken/uG2JX6kLxDa-51RPA2WGFA)** 
- **[Metaprogramming](https://intranet.hbtn.io/rltoken/abF17Z3CueKFyVDHoRyqig)** 
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Resources :books:
Read or watch:
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=classes+javascript&source=lnms&sa=X&ved=2ahUKEwiKmaG4u7r5AhV4SzABHUssABYQ_AUoAHoECAEQAg&biw=1920&bih=929&dpr=1)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/results?search_query=classes+javascript+es6)


## Requirements
### General
- Allowed editors: *` vi `* ,  *` vim `* ,  *` emacs `* ,  *` Visual Studio Code `* 
- All files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- The code should use the  **`js`**  extension
- The code will be tested using the **[Jest Testing Framework](https://intranet.hbtn.io/rltoken/-vHHhukhYFxZrd1G0uD3dw)** 
 and the command  *` npm run test `*
- The code will be analyzed using the linter **[ESLint](https://intranet.hbtn.io/rltoken/SXR8c_xOD3tm6NcBkk09dQ)** 
 along with specific rules that we’ll provide
- All functions must be exported
- The code needs to pass all the tests and lint. You can verify the entire project running  *` npm run full-test `*
	
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
* Install Jest using:  *` npm install --save-dev jest `* 
* Install Babel using:  *` npm install --save-dev babel-jest @babel/core @babel/preset-env `* 
* Install ESLint using:  *` npm install --save-dev eslint `*

## Configuration files

<details>
  <summary><h3>package.json :floppy_disk:</h3></summary>

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
</details>

<details>
  <summary><h3>babel.config.js :floppy_disk:</h3></summary>

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
</details>

<details>
  <summary><h3>.eslintrc.js :floppy_disk:</h3></summary>

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
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
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
</details>

### and…

Don’t forget to run   *` $ npm install `*   when you have the   *` package.json `*.

### Installation :computer:
	
- Clone this repository: `https://github.com/Alexoat76/holbertonschool-backend-javascript.git`	
- Access to directory: `cd 0x02-ES6_classes`
- `Compile` accord to `instructions` of each task.

## Files :file_folder:

### Tests :heavy_check_mark:

+ **[tests](./tests)**: Folder of test files. *`Provided by Holberton School`*.
		
---

## Tasks

+ [x] 0\. **You used to attend a place like this at some point**

+ **[0-classroom.js](./0-classroom.js)**

Implement a class named   *` ClassRoom `*  :
* Prototype:  *` export default class ClassRoom `* 
* It should accept one attribute named  *` maxStudentsSize `*  (Number) and assigned to  *` _maxStudentsSize `*

```bash
$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

$ 
$ npm run dev 0-main.js 
10
$ 

```
---

+ [x] 1\. **Let's make some classrooms**

+ **[1-make_classrooms.js](./1-make_classrooms.js)**

Import the   *` ClassRoom `*   class from   *` 0-classroom.js `*. <br>
Implement a function named   *` initializeRooms `*  . It should return an array of 3   *` ClassRoom `*   objects with the sizes 19, 20, and 34 (in this order).

```bash
$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

$ 
$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
$ 

```
---

+ [x] 2\. **A Course, Getters, and Setters**

+ **[2-hbtn_course.js](./2-hbtn_course.js)**

Implement a class named   *` HolbertonCourse `*  :
* Constructor attributes: 
	*  *` name `*  (String)
	*  *` length `*  (Number)
	*  *` students `*  (array of Strings)
* Make sure to verify the type of attributes during object creation
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Implement a getter and setter for each attribute.

```bash
$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

$ 
$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
$ 

```
---

+ [x] 3\. **Methods, static methods, computed methods names..... MONEY**

+ **[3-currency.js](./3-currency.js)**

Implement a class named   *` Currency `*  :
- Constructor attributes: 
	*  *` code `*  (String)
	*  ` name `  (String)

* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Implement a getter and setter for each attribute. 
* Implement a method named  *` displayFullCurrency `*  that will return the attributes in the following format  *` name (code) `*.

```bash
$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

$ 
$ npm run dev 3-main.js 
Dollars ($)
$ 

```
---

+ [x] 4\. **Pricing**

+ **[4-pricing.js](./4-pricing.js)**

Import the class   *` Currency `*   from   *` 3-currency.js `* 
Implement a class named   *` Pricing `*  :
* Constructor attributes: 
	*  *` amount `*  (Number)
	*  *` currency `*  (Currency)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Implement a getter and setter for each attribute. 
* Implement a method named  *` displayFullPrice `*  that returns the attributes in the following format  *` amount currency_name (currency_code) `*.
* Implement a static method named  *` convertPrice `* . It should accept two arguments:  *` amount `*  (Number),  *` conversionRate `*  (Number). The function should return the amount multiplied by the conversion rate.

```bash
$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

$ 
$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
$ 

```
---


+ [x] 5\. **A Building**

+ **[5-building.js](./5-building.js)**

Implement a class named  *` Building `*  :
* Constructor attributes: 
	*  *` sqft `*  (Number)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Implement a getter for each attribute.
* Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named  *` evacuationWarningMessage `*.
	* If a class that extends from it does not have a  *` evacuationWarningMessage `*  method, throw an error with the message <br> *` Class extending Building must override evacuationWarningMessage `* 

```bash
$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

$ 
$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
$ 

```
---

+ [x] 6\. **Inheritance**

+ **[6-sky_high.js](./6-sky_high.js)**

Import *` Building `* from *` 5-building.js `*.
	
Implement a class named *` SkyHighBuilding `* that extends from *` Building `*:
* Constructor attributes: 
	*  *` sqft `*  (Number) (must be assigned to the parent class  *` Building `* )
	*  *` floors `*  (Number)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Implement a getter for each attribute. 
* Override the method named  *` evacuationWarningMessage `*  and return the following string  *` Evacuate slowly the NUMBER_OF_FLOORS floors `*.

```bash
$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

$ 
$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
$ 

```
---

+ [x] 7\. **Airport**

+ **[7-airport.js](./7-airport.js)**

Implement a class named   *` Airport `*:

* Constructor attributes: 
	*  *` name `*  (String)
	*  *` code `*  (String)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* The default string description of the class should return the airport  *` code `*  (example below).

```bash
$ cat 7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

$ 
$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
$ 

```
---

+ [x] 8\. **Primitive - Holberton Class**

+ **[8-hbtn_class.js](./8-hbtn_class.js)**

Implement a class named *` HolbertonClass `*:
* Constructor attributes: 
	*  *` size `*  (Number)
	*  *` location `*  (String)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* When the class is cast into a  *` Number `* , it should return the size. 
* When the class is cast into a  *` String `* , it should return the location.

```bash
$ cat 8-main.js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

$ 
$ npm run dev 8-main.js 
12
Mezzanine
$ 

```
---


+ [x] 9\. **Hoisting**

+ **[9-hoisting.js](./9-hoisting.js)**

Body Fix this code and make it work.

```bash
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];

```

Result:

```bash
$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

$ 
$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
$ 

```
---
 

+ [x] 10\. **Vroom**

+ **[10-car.js](./10-car.js)**

Implement a class named   *` Car `*  :
* Constructor attributes: 
	*  *` brand `*  (String)
	*  *` motor `*  (String)
	*  *` color `*  (String)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* Add a method named  *` cloneCar `* . This method should return a new object of the class.
Hint: Symbols in ES6

```bash
$ cat 10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

$ 
$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
$ 

```
---
	
+ [x] 11\. **EVCar**

+ **[100-evcar.js](./100-evcar.js)**

Import   *` Car `*   from   *` 10-car.js `*.
Implement a class named   *` EVCar `*   that extends the   *` Car `*   class:
* Constructor attributes: 
	*  *` brand `*  (String)
	*  *` motor `*  (String)
	*  *` color `*  (String)
	*  *` range `*  (String)
* Each attribute must be stored in an “underscore” attribute version (ex:  *` name `*  is stored in  *` _name `* )
* For privacy reasons, when  *` cloneCar `*  is called on a EVCar object, the object returned should be an instance of  *` Car `*  instead of  *` EVCar `*.

```bash
$ cat 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

$ 
$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
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
