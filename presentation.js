class Presentation {
  constructor() {}

  demarrer() {
    console.log("1. Lister les collegues\n99. Sortir");
    // const readline = require("readline");
    const readline = import("readline");
    const { stdin: input, stdout: output } = require("process");

    const rl = readline.createInterface({ input, output });

    rl.question("Votre choix : ", (answer) => {
      rl.close();
      switch (answer) {
        case "1":
          {
            console.log(">> Liste des collègues");
            this.demarrer();
          }
          break;
        case "99":
          {
            console.log("Au revoir");
          }
          break;
        default: {
          console.log("code autre que 1 ou 99");
          this.demarrer();
        }
      }
    });
  }
}

exports.Presentation = Presentation;
