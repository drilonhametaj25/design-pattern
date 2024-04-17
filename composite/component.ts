export abstract class Component {
    protected parent!: Component | null;

    public setParent(parent: Component | null){
        this.parent = parent
    }

    public getParent(): Component | null{
        return this.parent
    }

    public add(component: Component): void {}
    public remove(component: Component): void {}

    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}