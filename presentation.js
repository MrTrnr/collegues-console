class Presentation {
  constructor() {}

  demarrer() {
    console.log("1. Lister les collegues\n99. Sortir");
    const readline = require("readline");
    const { stdin: input, stdout: output } = require("process");

    const rl = readline.createInterface({ input, output });
    const Pres = new Presentation();

    rl.question("Votre choix : ", (answer) => {
      // TODO: Log the answer in a database
      //console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.close();
      switch (answer) {
        case "1":
          {
            console.log(">> Liste des clients");
            Pres.demarrer();
          }
          break;
        case "99":
          {
            console.log("Au revoir");
          }
          break;
        default: {
          console.log("code autre que 1 ou 99");
        }
      }
    });
  }
}

exports.Presentation = Presentation;
