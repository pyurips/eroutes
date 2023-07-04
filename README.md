![Eroutes logo](https://media.discordapp.net/attachments/971787111470596136/1125580052197810256/eroutes_logo.png)
<br>
A simple library that helps organize routes in [Express](https://expressjs.com)

 **The project is still in an embryonic state, but it is possible to use perfectly the functionalities proposed by EROUTE.**

## How to use
* Install
```bash
  npm i eroutes
```
* Now it's ready to use!

## Examples

### Javascript
```javascript
const express = require('express')
const { Eroutes } = require('eroutes');

const app = express();
const eroutes = new Eroutes();

eroutes.add({
  route: "/my-route", // name of your route
  method: "get", // methods API REST: get | post | delete | put | patch
  middleware: null, // receives null if it has no middleware. If you put middlewares have a look at the next route
  controller: (req, res) => { res.status(201).send("Hello, EROUTES!") } // Add a function that will play the role of the controller
});

const middleware_1 = (req, res, next) => { /* add what you want */ }
const middleware_2 = (req, res, next) => { /* add what you want */ }
const middleware_3 = (req, res, next) => { /* add what you want */ }
// add as many middlewares as you want

eroutes.add({
  route: "/my-route-with-middlewares", 
  method: "get",
  middleware: [middleware_1, middleware_2, middleware_3], // the middlewares will be inside the array
  controller: (req, res) => { res.status(201).send("Hello, EROUTES!") }
});

app.use(eroutes.initializeRoutes()); // use this method to initialize all functions and you're done!

app.listen(3000);
```

### Typescript

```typescript
import express, { Request, Response, NextFunction } from "express";
import { Eroutes } from "eroutes";

const app = express();
const eroutes = new Eroutes();

eroutes.add({
  route: "/my-route", // name of your route
  method: "get", // methods API REST: get | post | delete | put | patch
  middleware: null, // receives null if it has no middleware. If you put middlewares have a look at the next route
  controller: (req: Request, res: Response) => { res.status(201).send("Hello, EROUTES!") } // Add a function that will play the role of the controller
});

const middleware_1 = (req: Request, res: Response, next: NextFunction) => { /* add what you want */ }
const middleware_2 = (req: Request, res: Response, next: NextFunction) => { /* add what you want */ }
const middleware_3 = (req: Request, res: Response, next: NextFunction) => { /* add what you want */ }
// add as many middlewares as you want

eroutes.add({
  route: "/my-route-with-middlewares", 
  method: "get",
  middleware: [middleware_1, middleware_2, middleware_3], // the middlewares will be inside the array
  controller: (req: Request, res: Response) => { res.status(201).send("Hello, EROUTES!") }
});

app.use(eroutes.initializeRoutes()); // use this method to initialize all functions and you're done!

app.listen(3000);
```

## License
[MIT](https://github.com/pyurips/eroutes/blob/main/LICENSE)
