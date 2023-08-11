import { Tag } from './tag.entity';
export declare class Note {
    id: number;
    title: string;
    description: string;
    isArchived: boolean;
    isDeleted: boolean;
    tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
