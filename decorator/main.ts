import { ConcreteComponent } from "./concreteComponent";
import { ConcreteDecoratorA } from "./concreteDecoratorA";
import { ConcreteDecoratorB } from "./concreteDecoratorB";

const simple = new ConcreteComponent()
console.log('Client: I\'ve got a simple component:');
console.log(simple.operation())
console.log('')

const decorator1 = new ConcreteDecoratorA(simple)
const decorator2 = new ConcreteDecoratorB(decorator1)
console.log('Client: Now I\'ve got a decorated component:');
console.log(decorator2.operation())