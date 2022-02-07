//https://formation-angular-collegues.herokuapp.com/api/v1/collegues

import fetch from "node-fetch";
const response = await fetch(
  "https://formation-angular-collegues.herokuapp.com/api/v1/collegues"
);

const results = await Promise.all([response.json()]);

console.log(results[0]);
