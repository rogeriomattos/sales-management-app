import { ICliente } from "../contracts/ICliente";

export class mockupService{
    private clientes = [
        new ICliente(1,"Roger"),
        new ICliente(2,"Joao")
    ];

    private debits = [
        {"cliente":new ICliente(1,"Roger")},
        {"cliente":new ICliente(2,"Joao")},
        {"cliente":new ICliente(3,"Maria")}
    ]; 

    public getDebits(){
        return this.debits;
    }
}