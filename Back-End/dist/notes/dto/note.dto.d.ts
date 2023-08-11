export declare class CreateNoteDto {
    title: string;
    description: string;
}
export declare class UpdateNoteDto {
    title: string;
    description: string;
    isArchived: boolean;
    updatedAt: Date;
}
export declare class GetNoteDto {
    id: number;
    title: string;
    description: string;
    isArchived: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
