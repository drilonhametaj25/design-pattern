import { ConcreteClass1 } from "./concreteClass1";
import { ConcreteClass2 } from "./concreteClass2";

console.log('Same client code can work with different subclasses:');
console.log(new ConcreteClass1())
console.log('Same client code can work with different subclasses:');
console.log(new ConcreteClass2())