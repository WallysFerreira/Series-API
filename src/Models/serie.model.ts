import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class Serie {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    platform: string;

    @IsInt()
    release_year: number;

    @IsInt()
    number_seasons: number;
}