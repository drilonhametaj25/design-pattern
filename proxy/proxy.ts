import { RealSubject } from "./realSubject";
import { Subject } from "./subject";

export class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realS: RealSubject){
        this.realSubject = realS
    }
    private checkAccess(): boolean {
        // Some real checks should go here.
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }

    public request(): void {
        if(this.checkAccess()){
            this.realSubject.request();
            this.logAccess()
        }
    }
}