import { Target } from "./target";

export function clientCode(target: Target){
    console.log(target.request())
}