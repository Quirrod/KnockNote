import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { Note } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class NotesService {
    private readonly userRepository;
    constructor(userRepository: Repository<Note>);
    createNote(createNoteDto: CreateNoteDto): Promise<Note>;
    findNote(id: number): Promise<Note>;
    findAllNotes(page?: number, limit?: number, archived?: boolean): Promise<[Note[], number]>;
    updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    deleteNote(id: number): Promise<import("typeorm").UpdateResult>;
}
