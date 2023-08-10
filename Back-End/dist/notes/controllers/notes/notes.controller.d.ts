import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
import { Note } from 'src/typeorm';
export declare class NotesController {
    private readonly noteService;
    constructor(noteService: NotesService);
    getNotes(page: number, limit: number, archived: boolean): Promise<[Note[], number]>;
    findNotesById(id: number): Promise<Note>;
    createNotes(createNoteDto: CreateNoteDto): Promise<Note>;
    updateNotes(id: number, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    deleteNotes(id: number): Promise<import("typeorm").UpdateResult>;
}
