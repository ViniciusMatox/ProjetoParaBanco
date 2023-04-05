import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta-corrente.js";


const cliente1= new Cliente ('Vinicius', .05404368012);
const contaCorrenteVinicius = new ContaCorrente(1002, cliente1)
contaCorrenteVinicius.cliente = cliente1


const cliente5 = new Cliente ('Joao', 53793501000)
const contaCorrenteCliente5 = new ContaCorrente(1001, cliente5)
// console.log(cliente5)
// console.log(contaCorrenteCliente5)

const contaCorrenteVictor = new ContaCorrente()
const cliente4 = new Cliente()
contaCorrenteVictor.cliente = cliente4
contaCorrenteVictor.agencia = 1002
// cliente4.CPF = '05404368012'
cliente4.nome = 'Victor'
// console.log(contaCorrenteVictor)



const contaCorrenteJoao = new ContaCorrente()
contaCorrenteJoao.cliente = 'Joao'
contaCorrenteJoao.agencia = 1002





const conta2 = new ContaCorrente()
conta2.cliente = cliente1
conta2.agencia = 1001
// conta2.saldo = 200000

const contaDoVini = new Cliente('Vinicius', 12212343)
console.log(ContaCorrente.numeroDeContas)



// PARA ENTENDER COMO FUNCIONA O CODIGO:



// let valor = 100
// console.log(`Seu saldo atual é de ${contaCorrenteVinicius._saldo}`)
// contaCorrenteVinicius.depositar(200)
// console.log(`Seu saldo atual é de ${contaCorrenteVinicius._saldo}`)
// contaCorrenteVinicius.depositar(-100)
// console.log(`Seu saldo atual é de ${contaCorrenteVinicius._saldo}`)
// contaCorrenteVinicius.sacar(4000)

// console.log(valorSacado)
// let valorAtual = (contaCorrenteVinicius.saldo - valor)



// const cliente2 = new Cliente();
// const contaCorrenteGiovana = new ContaCorrente()
// contaCorrenteGiovana.cliente = cliente2
// cliente2.nome = 'Giovana'
// cliente2.CPF = '12083389'
// contaCorrenteGiovana.saldo = 0
// contaCorrenteGiovana.agencia = 1001
// console.log(cliente2)




// console.log(contaDoVini)

// a função transferir precisa de dois parametros... o valor e a conta que vai receber.



// contaCorrenteJoao.depositar(1000)
// contaCorrenteVinicius.depositar(1000)
// console.log(contaCorrenteVinicius._saldo)
// console.log(contaCorrenteJoao._saldo)
// contaCorrenteJoao.transferir(valorTransferido, contaCorrenteVinicius)
// console.log(contaCorrenteVinicius._saldo)
// console.log(contaCorrenteJoao._saldo)



// console.log(`O valor que foi transferido foi de ${valorTransferido} reais da conta de ${contaCorrenteJoao.cliente} para ${cliente1.nome}`)


// console.log(contaCorrenteJoao)
// console.log(contaCorrenteVinicius)