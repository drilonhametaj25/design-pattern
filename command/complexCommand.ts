import { Command } from "./command";
import { Receiver } from "./receiver";

export class ComplexCommand implements Command {
    private receiver: Receiver;

    private a: string;
    private b: string;

    constructor(receiver: Receiver, a:string, b: string){
        this.receiver = receiver;
        this.a = a
        this.b = b
    }
    
    execute(): void {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    }
    
}