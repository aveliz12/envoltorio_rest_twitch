import {
  casoPrueba1Cache,
  casoPrueba2Cache,
  casoPrueba3Cache,
  casoPrueba4Cache,
  casoPrueba5Cache,
} from "./GraphQLCache.js";
import Storage from "node-storage";
const store = new Storage("./store");

import pkg from "../../Menu/inquirerMenu.cjs";
const { inquirerMenu } = pkg;

const token = store.get("token");
const id = "";

export const casoPruebaGraphQLCache = async () => {
  console.log("*******************ENVOLTORIO GRAPHQL TWITCH CON CACHE*******************".bgMagenta.bold);

  if (token === "") {
    console.log("Genere un token porfavor");
    return;
  } else {
    let opt = "";
    console.log(`Su token generado es: ${token}`.bold);

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case "1":
          try {
            await casoPrueba1Cache();
          } catch (error) {
            console.log(error);
          }
          break;
        case "2":
          await casoPrueba2Cache();
          break;
        case "3":
          await casoPrueba3Cache();
          break;
        case "4":
          await casoPrueba4Cache();
          break;
        case "5":
          await casoPrueba5Cache();
          break;
        default:
          break;
      }
    } while (opt !== "0");
  }
};
