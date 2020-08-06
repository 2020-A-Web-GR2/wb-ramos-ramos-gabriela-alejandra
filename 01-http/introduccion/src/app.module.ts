import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpJuegoModule} from "./http/http-juego.module";
import {ExamenModule} from "./ExamenRamos/Examen.module";


@Module({
  imports: [
      //AQUI OTROS MODULOS
    HttpJuegoModule,
      ExamenModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
