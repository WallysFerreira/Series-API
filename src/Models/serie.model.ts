import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class Serie {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    platform: string;

    @IsInt()
    @IsOptional()
    release_year: number;

    @IsInt()
    @IsOptional()
    number_seasons: number;
}