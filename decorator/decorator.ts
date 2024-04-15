import { Component } from "./component";

export class Decorator implements Component {
    protected component: Component;

    constructor(comp: Component){
        this.component = comp
    }

    public operation(): string {
        return this.component.operation()
    }
}