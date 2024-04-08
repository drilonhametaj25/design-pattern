import { SimpleCommand } from "./SimpleCommand";
import { Invoker } from "./invoker";
import { Receiver } from "./receiver";
import {ComplexCommand} from "./complexCommand"
const receiver = new Receiver()
const invoker = new Invoker(new SimpleCommand("Say Hi!"),new ComplexCommand(receiver, "Send email", "Save report"))
invoker.doSomethingImportant()