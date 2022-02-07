console.log("** Administration Collegues **");
// const modulePresenter = require("./presentation.js");
const modulePresenter = import("./presentation.js");
const presentation = new modulePresenter.Presentation();
presentation.demarrer();
