import {IsAlpha, IsNotEmpty, MaxLength, MinLength} from "class-validator";
export class ExamenUsuarioCreateDto {

    @IsAlpha()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(60)
    username: string;
}