import { ITag } from "./tag.model";

export interface INote {
    id?: number;
    title: string;
    description: string;
    isArchived?: boolean;
    isDeleted?: boolean;
    tags?: ITag[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}