import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateTagDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    noteId: number;
}

export class UpdateTagDto {
    @IsNotEmpty()
    @IsOptional()
    id: number;

    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsOptional()
    isDeleted: boolean;

    @IsNotEmpty()
    @IsOptional()
    updatedAt: Date;

    @IsNotEmpty()
    noteId: number;
}

