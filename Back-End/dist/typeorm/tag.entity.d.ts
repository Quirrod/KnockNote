import { Note } from './note.entity';
export declare class Tag {
    id: number;
    name: string;
    isDeleted: boolean;
    note: Note;
    noteId: number;
    createdAt: Date;
    deletedAt: Date;
}
