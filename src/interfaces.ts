import {v4 as uuid} from "uuid"

export default interface ITask {
    uuid() : any;
    taskName:string;
}