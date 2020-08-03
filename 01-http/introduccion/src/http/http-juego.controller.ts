import {BadRequestException, Controller, Delete, Get, Header, HttpCode, Param, Post} from "@nestjs/common";
// http://localhost:3001/juegos-http
//juego-http --> segmento de red
//tenemos definido la IP, el puerto y el la parte del url --falta el metodo
//@Controller("juego-http")
@Controller("juegos-http")
export class HttpJuegoController {

//falta el metodo

    @Get("hola")
    @HttpCode(201)
    holaGet(){
        throw new BadRequestException("No envia nada")
        //return "Hola Get! :D";
    }

    @Post("hola")
    @HttpCode(202)
    holaPost(){
        return "Hola POST! :D";
    }

    @Delete("hola")
    @HttpCode(204)
   @Header("cache-control","none")
    @Header("EPN","Probando las cosas")
    holaDelete(){
        return "Hola DELETE! :D";
    }

    // http://localhost:3001/juegos-http/parametros-ruta/10/gestion/15
@Get("/parametros-ruta/:edad/gestion/:altura")
ParametrosRutaEjemplo(
    //@Param() --> decorador que hace la magia
    @Param() parametrosRuta

){
console.log("Parametros", parametrosRuta);
//validar si es un numero
    let altura=0
    let edad=0

   if(isNaN(parametrosRuta.edad) || isNaN(parametrosRuta.altura))
       throw new BadRequestException("No son numeros")
   else
       edad= Number(parametrosRuta.edad);
        altura= Number(parametrosRuta.altura);

    return edad+altura;

}
    @Get('parametros-consulta')
    parametrosConsulta(
        @Query() parametrosDeConsulta //lo que quiero recibir @Query es 
    ) {
        console.log(parametrosDeConsulta.nombre);
        console.log(parametrosDeConsulta.apellido);
        const tieneNombreYApellido = parametrosDeConsulta.nombre != undefined && parametrosDeConsulta.apellido != undefined;
        console.log('parametrosDeConsulta', parametrosDeConsulta);
        if (tieneNombreYApellido) {
            return parametrosDeConsulta.nombre + ' ' + parametrosDeConsulta.apellido;
        } else {
            return '= )';
        }
    }
}