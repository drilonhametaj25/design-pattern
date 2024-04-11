import { Abstraction } from "./abstraction";
import { ConcreteImplementationA } from "./concreteImplementationA";
import { ConcreteImplementationB } from "./concreteImplementationB";
import { ExtendedAbstraction } from "./extendedAbstraction";

let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)

console.log(abstraction.operation())

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)

console.log(abstraction.operation())