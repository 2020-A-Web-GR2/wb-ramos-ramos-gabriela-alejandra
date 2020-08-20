import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Put,
  Query,
  Headers,
  Res,
  Delete,
  Req,
  HttpCode, BadRequestException
} from '@nestjs/common';
import { AppService } from './app.service';

//http://localhost:3000/Examen-calculadora/
@Controller('Examen-calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  //http://localhost:3000/Examen-calculadora/suma?numero1=20&numero2=40
  @Get('suma')
  @HttpCode(200)
  parametrosConsulta(
      @Query() parametrosDeConsulta,
      @Req() req,
      @Res() res
  ) {
    if (!this.existeUsuario(req)) {
      throw new BadRequestException('Registre un usuario ');
    } else {
      const numero1: number = parseFloat(parametrosDeConsulta.numero1);
      const numero2: number = parseFloat(parametrosDeConsulta.numero2);
      const suma = numero1 + numero2;
      const puntaje = req.signedCookies["puntaje"]
      const puntajeActualizado = (Number(puntaje) - Math.abs(suma));
      console.log('parametrosDeConsulta', parametrosDeConsulta);
      if (numero1 && numero2) {
        if (Number(puntajeActualizado) <= 0) {
          res.cookie('puntaje', '100', {signed: true});
          const mensaje = {
            Suma: suma,
            Puntaje: String(req.cookies["usuario"]).concat(", terminaste tus puntos, se han restablecido en 100")
          }
          res.send(mensaje)
        } else {
          res.cookie('puntaje', puntajeActualizado, {signed: true});
          const mensaje = {
            Suma: suma,
            Puntaje: puntajeActualizado
          }
          res.send(mensaje)
        }
      }
      res.send('Los datos ingresados deben ser numeros')
    }
  }

  //http://localhost:3000/Examen-calculadora/resta
  @Put('resta')
  @HttpCode(201)
  async parametrosCuerpo(
      @Body() parametrosDeCuerpo,
      @Req() req,
      @Res() res
  ) {
    if (!this.existeUsuario(req)) {
      throw new BadRequestException('Registre un usuario ');
    } else {
      const numero1: number = parseFloat(parametrosDeCuerpo.numero1);
      const numero2: number = parseFloat(parametrosDeCuerpo.numero2);
      const resta = numero1 - numero2;
      const puntaje = req.signedCookies["puntaje"]
      const puntajeActualizado = (Number(puntaje) - Math.abs(resta));

      console.log('parametrosDeCuerpo', parametrosDeCuerpo);
      if (numero1 && numero2) {
        if (Number(puntajeActualizado) <= 0) {
          res.cookie('puntaje', '100', {signed: true});
          const mensaje = {
            Resta: resta,
            Puntaje: String(req.cookies["usuario"]).concat(", terminaste tus puntos, se han restablecido en 100")
          }
          res.send(mensaje)
        } else {
          res.cookie('puntaje', puntajeActualizado, {signed: true});
          const mensaje = {
            Resta: resta,
            Puntaje: puntajeActualizado
          }
          res.send(mensaje)
        }
      }
      res.send('los datos ingresados deben ser numeros')
    }
  }


  //http://localhost:3000/Examen-calculadora/multiplicacion
  @Delete('multiplicacion')
  @HttpCode(200)
  parametrosCabecera(
      @Headers() parametrosDeCabecera,
      @Req() req,
      @Res() res
  ) {
    if (!this.existeUsuario(req)) {
      throw new BadRequestException('Registre un usuario ');
    } else {
      const numero1: number = parseFloat(parametrosDeCabecera.numero1);
      const numero2: number = parseFloat(parametrosDeCabecera.numero2);
      const multiplicacion = numero1 * numero2;
      const puntaje = req.signedCookies["puntaje"]
      const puntajeActualizado = (Number(puntaje) - Math.abs(multiplicacion));
      console.log('parametrosDeCabecera', parametrosDeCabecera);
      if (numero1 && numero2) {
       // console.log('multiplicacion', multiplicacion);
        //return multiplicacion;
        if (Number(puntajeActualizado) <= 0) {
          res.cookie('puntaje', '100', {signed: true});
          const mensaje = {
            Multiplicacion: multiplicacion,
            Puntaje: String(req.cookies["usuario"]).concat(", terminaste tus puntos, se han restablecido en 100")
          }
          res.send(mensaje)
        } else {
          res.cookie('puntaje', puntajeActualizado, {signed: true});
          const mensaje = {
            Multiplicacion: multiplicacion,
            Puntaje: puntajeActualizado
          }
          res.send(mensaje)
        }
      }
      res.send('los datos ingresados deben ser numeros')
    }
  }

//http://localhost:3000/Examen-calculadora/division/n1/XX/n2/YY
  @Post('division/numero1/:numero1/numero2/:numero2')
  @HttpCode(201)
  parametrosRuta(
      @Param() parametrosDeRuta,
      @Req() req,
      @Res() res
  ) {
    if (!this.existeUsuario(req)) {
      throw new BadRequestException('Registre un usuario ');
    } else {
      const numero1: number = parseFloat(parametrosDeRuta.numero1);
      const numero2: number = parseFloat(parametrosDeRuta.numero2);
      console.log('parametrosDeRuta', parametrosDeRuta);
      if (parametrosDeRuta.numero2 == 0) {
        const mensaje = 'el numero 2 no puede ser 0';
        console.log(mensaje);
        res.send(mensaje);
      } else {
        if (numero1 && numero2) {
          const division = numero1 / numero2;
          console.log('division', division);
          const puntaje = req.signedCookies["puntaje"]
          const puntajeActualizado = (Number(puntaje) - Math.abs(division));
          //return division;
          if (Number(puntajeActualizado) <= 0) {
            res.cookie('puntaje', '100', {signed: true});
            const mensaje = {
              Division: division,
              Puntaje: String(req.cookies["usuario"]).concat(", terminaste tus puntos, se han restablecido en 100")
            }
            res.send(mensaje)
          } else {
            res.cookie('puntaje', puntajeActualizado, {signed: true});
            const mensaje = {
              Division: division,
              Puntaje: puntajeActualizado
            }
            res.send(mensaje)
          }
        }
      }
      res.send('los datos ingresados deben ser numeros')
    }
  }

    @Get('mostrarCookies')
  mostrarCookies(
      @Req() req
  ){
    const mensaje={
      sinFirmar: req.cookies,
      firmadas: req.signedCookies
    }
    return mensaje;
  }

  existeUsuario(
      req
  ): boolean{
    const existeCookieUsuario: object = req.cookies;
    return (existeCookieUsuario['usuario'])? true: false;
  }

  //http://localhost:3000/Examen-calculadora/usuario?usuario=
  @Get('usuario')
  @HttpCode(201)
  guardarUsuario(
      @Query() parametrosDeConsulta,
      @Req() req,
      @Res() res
  ) {
    if(parametrosDeConsulta.usuario === undefined  || parametrosDeConsulta.usuario === '') {
      throw new BadRequestException('Registre un usuario');
    }else{
      res.cookie('usuario', parametrosDeConsulta.usuario);
      res.cookie('puntaje', '100', {signed: true});
      res.send({
        mensaje: 'Guardado correctamente'
      });
      console.log('Cookie creada para: ', req.cookies['usuario']);
      console.log('puntaje de usuario : ', req.signedCookies['puntaje']);
    }
  }

}
