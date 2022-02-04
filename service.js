//https://formation-angular-collegues.herokuapp.com/api/v1/collegues

import fetch from "node-fetch";
const response = await fetch(
  "https://formation-angular-collegues.herokuapp.com/api/v1/collegues"
);

const r1 = await response.clone();

const results = await Promise.all([response.json(), r1.text()]);
console.log(results[0]);

class Service {
  constructor() {}
}
