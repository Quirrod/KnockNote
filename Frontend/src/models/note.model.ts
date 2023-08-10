export interface NoteI {
    id?: number;
    title: string;
    description: string;
    isArchived: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}