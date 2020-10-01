import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PaisEntity} from "./pais/pais.entity";
import {PaisModule} from "./pais/pais.module";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [PaisModule,
    TypeOrmModule
        .forRoot({
          name: 'default', // nombre conexión
          type: 'mysql', // mysql postgres
          host: 'localhost', // ip
          port: 3306, // puerto
          username: 'root', // usuario
          password: 'root', // password
          database: 'pais', //  Base de Datos
          entities: [  // TODAS LAS ENTIDADES
            PaisEntity,

          ],
          synchronize: true, // Actualiza el esquema de la base de datos
          dropSchema: false, // Eliminar Datos y el Esquema de base de datos
        }),



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
