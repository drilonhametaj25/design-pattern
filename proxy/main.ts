import { RealSubject } from './realSubject'
import { Proxy } from './proxy'

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
console.log(realSubject.request());

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
console.log(proxy.request());