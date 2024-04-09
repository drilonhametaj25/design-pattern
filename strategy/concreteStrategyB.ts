import { Strategy } from "./strategy";

export class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[]{
        return data.reverse();
    }
}