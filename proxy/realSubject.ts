import { Subject } from "./subject";

export class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}