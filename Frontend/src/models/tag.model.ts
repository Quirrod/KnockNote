export interface ITag {
    id?: number;
    name: string;
    noteId?: number;
    isDeleted?: boolean;
    createdAt?: Date;
    deletedAt?: Date;
}