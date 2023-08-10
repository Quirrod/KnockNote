import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateNoteDto {
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsNotEmpty()
    @MinLength(8)
    description: string;
}

export class UpdateNoteDto {
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsNotEmpty()
    @MinLength(8)
    decription: string;

    @IsNotEmpty()
    isArchived: boolean;
}