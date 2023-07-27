import { IsArray, IsNumber, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class CreatePersonaUsuarioDto {
    
    @IsString()
    @MinLength(1)
    ci: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @IsOptional()
    paterno: string;

    @IsString()
    @IsOptional()
    materno: string;

    @IsString()
    @MinLength(1)
    @MaxLength(1)
    sexo: string;

    @IsString()
    @IsOptional()
    fotografia: string;

    @IsNumber()
    id_oficina: number;

    @IsNumber()
    id_ciudad: number;

    @IsString({each:true})
    @IsArray()
    roles: string[];

    @IsString()
    @MinLength(1)
    usuario_registro: string;
}
