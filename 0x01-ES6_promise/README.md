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
- Ther code will be analyzed using the linter **[ESLint](https://intranet.hbtn.io/rltoken/SXR8c_xOD3tm6NcBkk09dQ)** 
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

### Installation :computer:
	
- Clone this repository: `https://github.com/Alexoat76/holbertonschool-backend-javascript.git`	
- Access to directory: `cd 0x01-ES6_promise`
- `Compile` accord to `instructions` of each task.

## Files :file_folder:

### Tests :heavy_check_mark:

+ **[tests](./tests)**: Folder of test files. *`Provided by Holberton School`*.
		
---

## Tasks

+ [x] 0\. **Const or let?**

+ **[0-constants.js](./0-constants.js)**


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
