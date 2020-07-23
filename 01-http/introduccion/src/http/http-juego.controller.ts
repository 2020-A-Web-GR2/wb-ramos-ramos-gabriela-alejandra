import {Controller, Get} from "@nestjs/common";
// htt://localhost:3001/juego-http
//juego-http --> segmento de red
//tenemos definido la IP, el puerto y el protocolo;http
//@Controller("juego-http")
@Controller("juego-http")
export class HttpJuegoController {

//falta el metodo
    @Get("hola")

    hola(){
return "Hola mundo! :D"
    }
}