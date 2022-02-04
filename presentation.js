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

      switch (answer) {
        case "1":
          {
            console.log(">> Liste des clients");
            rl.close();
            Pres.demarrer();
          }
          break;
        case "99":
          {
            rl.close();
          }
          break;
        default: {
          rl.close();
          console.log("code autre que 1 ou 99");
        }
      }
    });
  }
}

exports.Presentation = Presentation;
