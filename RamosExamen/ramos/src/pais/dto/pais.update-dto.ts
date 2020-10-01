import {
    IsAlpha,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPositive,
    MaxLength, MinLength
} from 'class-validator';

export class PaisUpdateDto {

    @IsNotEmpty()
    @IsAlpha()
    @MaxLength(60)
    @MinLength(3)
    nombre:string;

    @IsNotEmpty()
    @IsAlpha()
    @MaxLength(30)
    capital:string;

    @IsNotEmpty()
    @IsAlpha()
    poblacion:string;

    @IsOptional()
    @IsAlpha()
    numeroEstaciones:string;


    @IsOptional()
    @IsAlpha()
    fundacion:string;

}
