import { Command } from "./command";

export class Invoker {
    private onStart: Command;
    private onFinish: Command;

    constructor(onStartCommand: Command, onFinishCommand: Command){
        this.onStart = onStartCommand;
        this.onFinish = onFinishCommand
    }

    public setOnStart(command: Command) : void{
        this.onStart = command
    }

    public setOnFinish(command: Command) : void{
        this.onFinish = command
    }

    public doSomethingImportant():void{
        console.log('Invoker: Does anybody want something done before I begin?');
        if(this.isCommand(this.onStart)){
            this.onStart.execute()
        }
        console.log('Invoker: ...doing something really important...');

        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    public isCommand(object: Command): object is Command {
        return object.execute !== undefined;
    }
}