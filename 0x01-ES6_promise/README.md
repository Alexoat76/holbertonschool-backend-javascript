<p align="center">
<img src="https://img.shields.io/badge/LINUX-darkgreen.svg"/>
<img src="https://img.shields.io/badge/Shell-ligthgreen.svg"/>
<img src="https://img.shields.io/badge/Emacs-purple.svg"/>
<img src="https://img.shields.io/badge/JavaScript-yellow.svg"/>
<img src="https://img.shields.io/badge/Markdown-black.svg"/><br>	
</p>

---

# 0x01. ES6 Promises

This project contains some tasks for learning how to use and implement **`Promises`** in Javascript language.

<p align="center">
  <img width="450"  
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--DZld0c-0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/11vxhn9cun7stpjbdi80.gif"
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

## Resources :books:
Read or watch:
	
[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=javascript+promises+and+async&bih=829&biw=1757&hl=en&ei=mIXhYrzICvmgkPIPtpOrkA8&ved=0ahUKEwi89PSF25n5AhV5EEQIHbbJCvIQ4dUDCA4&uact=5&oq=javascript+promises+and+async&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgUIABCGAzoHCAAQRxCwA0oECEEYAEoECEYYAFDVB1iYE2DpFWgBcAF4AIABrAKIAZMHkgEHMC4yLjEuMZgBAKABAcgBCMABAQ&sclient=gws-wiz)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/results?search_query=javascript+promises+and+async+await)

- [Promise](https://intranet.hbtn.io/rltoken/Xxx-3X2c-AjtJxO8kRApVA) 
- [JavaScript Promise: An introduction](https://intranet.hbtn.io/rltoken/nnHc3vzCBk8CyUStyZ43rQ) 
- [Await](https://intranet.hbtn.io/rltoken/5cSi-fnU40xJC1QAsIS8Yg) 
- [Async](https://intranet.hbtn.io/rltoken/wv9a_s80XdhLhHPflgq-1A) 
- [Throw / Try](https://intranet.hbtn.io/rltoken/OX831VVL2ucwMlM2NT8Iwg) 

* Promises (how, why, and what)
* How to use the  *` then `* ,  *` resolve `* ,  *` catch `*  methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an  *` async `*  function

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
### utils.js

Use when you get to tasks requiring   *` uploadPhoto `*   and   *` createUser `*.

```bash

export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

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
### and…

Don’t forget to run   *` $ npm install `*   when you have the   *` package.json `*.

## Response Data Format

 *` uploadPhoto `*   returns a response with the format
``` 
{
  status: 200,
  body: 'photo-profile-1',
}
```  

*` createUser `*   returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
``` 

### Installation :computer:
	
- Clone this repository: `https://github.com/Alexoat76/holbertonschool-backend-javascript.git`	
- Access to directory: `cd 0x01-ES6_promise`
- `Compile` accord to `instructions` of each task.

## Files :file_folder:

### Tests :heavy_check_mark:

+ **[tests](./tests)**: Folder of test files. *`Provided by Holberton School`*.
		
---

## Tasks

+ [x] 0\. **Keep every promise you make and only make promises you can keep**

+ **[0-promise.js](./0-promise.js)**

Return a Promise using this prototype  *` function getResponseFromAPI() `*
 
```bash
$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

$ 
$ npm run dev 0-main.js 
true
$ 

```
---

+ [x] 1\. **Don't make a promise...if you know you can't keep it**

+ **[1-promise.js](./1-promise.js)**

Using the prototype below, return a   *` promise `*  . The parameter is a   *` boolean `* .
```
getFullResponseFromAPI(success)
```
When the argument is:
*  ` true ` 
	* resolve the promise by passing an object with 2 attributes:
		*  ` status ` :  ` 200 ` 
		*  ` body ` :  ` 'Success' ` 
*  ` false ` * reject the promise with an error object with the message  ` The fake API is not working currently ` 

Try testing it out for yourself

```bash
$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

$ 
$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
$ 

```
---
 
+ [x] 2\. **Catch me if you can!**

+ **[2-then.js](./2-then.js)**

Using the function prototype below
```
function handleResponseFromAPI(promise)
```
Append three handlers to the function:
* When the Promise resolves, return an object with the following attributes
	*  ` status ` :  ` 200 ` 
	*  ` body ` :  ` success ` 
* When the Promise rejects, return an empty  ` Error `  object
* For every resolution, log  ` Got a response from the API `  to the console

```bash
$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

$ 
$ npm run dev 2-main.js 
Got a response from the API
$ 

```
---
+ [x] 3\. **Handle multiple successful promises**

+ **[3-all.js](./3-all.js)**

In this file, import   *` uploadPhoto `*   and   *` createUser `*   from   *` utils.js `* 
Knowing that the functions in   *` utils.js `*  return promises, use the prototype below to collectively resolve all promises and log   *` body firstName lastName `*  
to the console.

```
function handleProfileSignup()
```
In the event of an error, log   *` Signup system offline `*   to the console

```bash
$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

$ 
$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
$ 

```
---

+ [x] 4\. **Simple promise**

+ **[4-user-promise.js](./4-user-promise.js)**

Using the following prototype

```
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
``` 
{
  firstName: value,
  lastName: value,
}
```
```bash
$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

$ 
$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
$ 

```
---
 
+ [x] 5\. **Reject the promises**

+ **[5-photo-reject.js](./5-photo-reject.js)**

Write and export a function named   *` uploadPhoto `*  . It should accept one argument   *` fileName `*   (string). 
The function should return a Promise rejecting with an Error and the string   *` $fileName cannot be processed ` *
```
export default function uploadPhoto(filename) {
}
```
```bash
$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

$ 
$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
  ..
$ 

```
---

+ [x] 6\. **Handle multiple promises**

+ **[6-final-user.js](./6-final-user.js)**

Import   *` signUpUser `*   from   *` 4-user-promise.js `*   and   *` uploadPhoto `*   from   *` 5-photo-reject.js `* .
Write and export a function named  *` handleProfileSignup `*. It should accept three arguments  *` firstName `*  (string), *` lastName `* (string), and  *` fileName `* (string). 
The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
```bash
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]

```
```bash
$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

$ 
$ npm run dev 6-main.js 
Promise { <pending> }
$ 

```
---
 
+ [x] 7\. **Load balancer**

+ **[7-load_balancer.js](./7-load_balancer.js)**

Write and export a function named   *` loadBalancer `*  . It should accept two arguments *` chinaDownload `*  (Promise) and  *` USDownload `*  (Promise).
The function should return the value returned by the promise that resolved the first.

```
export default function loadBalancer(chinaDownload, USDownload) {
}
```
```bash
$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

$ 
$ npm run dev 7-main.js 
Downloading from UK is faster
Downloading from FR is faster
$ 

```
---

+ [x] 8\. **Throw error / try catch**

+ **[8-try.js](./8-try.js)**

Write a function named   *` divideFunction `*   that will accept two arguments: *` numerator `* (Number) and  *` denominator `* (Number).
When the   *` denominator `*   argument is equal to 0, the function should throw a new error with the message *` cannot divide by 0 `*. Otherwise it should 
return the numerator divided by the denominator.

```
export default function divideFunction(numerator, denominator) {
}
```
```bash
$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

$ 
$ npm run dev 8-main.js 
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
.....

$ 

```
---

 
+ [x] 9\. **Throw an error**

+ **[9-try.js](./9-try.js)**

Write a function named   *` guardrail `*   that will accept one argument *` mathFunction `* (Function).
This function should create and return an array named  *` queue `*.

When the  *` mathFunction `*  function is executed, the value returned by the function should be appended to the queue. If this function throws an error, 
the error message should be appended to the queue. In every case, the message   *` Guardrail was processed `*   should be added to the queue.

Example:

```
[
  1000,
  'Guardrail was processed',
]
```
```bash
$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

$ 
$ npm run dev 9-main.js 
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
$ 

```
---

+ [x] 10\. **Await / Async**

+ **[100-await.js](./100-await.js)**

Import  *` uploadPhoto `*  and  *` createUser `*  from  *` utils.js `*
Write an async function named  *` asyncUploadUser `* that will call these two functions and return an object with the following format:

```
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```
If one of the async function fails, return an empty object. Example:
```
{
  photo: null,
  user: null,
}
```
```bash
$ cat 100-main.js
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

$ 
$ npm run dev 100-main.js 
{
  photo: { status: 200, body: 'photo-profile-1' },
  user: { firstName: 'Guillaume', lastName: 'Salva' }
}
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
