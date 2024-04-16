import { AbstractClass } from "./abstractClass";

export class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');    
    }

    protected requiredOperations2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2');    
    }
}