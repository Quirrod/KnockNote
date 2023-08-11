import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
import { CreateTagDto, UpdateTagDto } from 'src/tags/dto/tag.dto';
import { Note } from 'src/typeorm';
export declare class NotesController {
    private readonly noteService;
    constructor(noteService: NotesService);
    getNotes(page: number, limit: number, archived: boolean): Promise<[Note[], number]>;
    findNotesById(id: number): Promise<Note>;
    createNotes(createNoteDto: {
        note: CreateNoteDto;
        tags: CreateTagDto[];
    }): Promise<Note>;
    updateNotes(id: number, updateNoteDto: {
        note: UpdateNoteDto;
        tags: UpdateTagDto[];
        originalTags: UpdateTagDto[];
    }): Promise<import("typeorm").UpdateResult>;
    deleteNotes(id: number): Promise<import("typeorm").UpdateResult>;
}
