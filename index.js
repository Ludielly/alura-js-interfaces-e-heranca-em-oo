import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaPoupancaRicardo = new ContaPoupanca(500, cliente1, 1001);

console.log(contaCorrenteRicardo, contaPoupancaRicardo);