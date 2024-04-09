import { ConcreteStrategyA } from "./concreteStrategyA";
import { ConcreteStrategyB } from "./concreteStrategyB";
import { Context } from "./context";

const context = new Context(new ConcreteStrategyA())
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('')
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB())
context.doSomeBusinessLogic()