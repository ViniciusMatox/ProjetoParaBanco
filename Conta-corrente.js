import { Cliente } from "./Cliente.js";

export class ContaCorrente {
   static numeroDeContas = 0
    agencia;
    cliente;
    
    
    _saldo = 0;
    _cliente 


    constructor(agencia, cliente){
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }



    // GETS E SETS
    set cliente(novoValor){
         if(novoCliente instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }


    get saldo(){
        return this._saldo
    }
    




    // FUNÇÔES
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        } else {
            console.log('Não foi possivel sacar')
        }
    }
    
    
    depositar(valor){
        if(valor <= 0 ){
            return
        }
        if(valor > 0) this._saldo += valor
        
    }

    transferir(valorTransferido,conta){
        const valorSacado = this.sacar(valorTransferido)
        conta.depositar(valorSacado)
    }
}
