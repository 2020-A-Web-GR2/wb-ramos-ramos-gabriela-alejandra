import {Module} from "@nestjs/common";
import {ExamenController} from "./Examen.controller";



@Module({
    imports:[],
    controllers:[
        ExamenController
    ],
    providers:[],
})

export class ExamenModule{

}