export declare class CreateNoteDto {
    title: string;
    description: string;
}
export declare class UpdateNoteDto {
    title: string;
    decription: string;
    isArchived: boolean;
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
