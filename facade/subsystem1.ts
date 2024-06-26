/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */
export class Subsystem1 {
    public operation1(): string{
        return 'Subsystem1: Ready! \n'
    }

    public operation2(): string {
        return 'Subsystem1: Working! \n'
    }

    public operationN(): string {
        return 'Subsystem1: Go! \n'
    }
}