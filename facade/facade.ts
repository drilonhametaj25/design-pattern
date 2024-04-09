import { Subsystem1 } from "./subsystem1";
import { Subsystem2 } from "./subsystem2";


/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
export class Facade {
    protected subsystem1: Subsystem1
    protected subsystem2: Subsystem2

    constructor(sub1?: Subsystem1, sub2?: Subsystem2){
        this.subsystem1 = sub1 || new Subsystem1()
        this.subsystem2 = sub2 || new Subsystem2()
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}