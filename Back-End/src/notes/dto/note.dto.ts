import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

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
    description: string;

    @IsNotEmpty()
    @IsOptional()
    isArchived: boolean;
}

export class GetNoteDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    isArchived: boolean;

    @IsNotEmpty()
    isDeleted: boolean;

    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    updatedAt: Date;

    @IsNotEmpty()
    deletedAt: Date;
}