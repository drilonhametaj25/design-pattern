import { Implementation } from "./implementation";

export class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation){
        this.implementation = implementation
    }

    public operation(): string{
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with: \n ${result}`;
    }
}