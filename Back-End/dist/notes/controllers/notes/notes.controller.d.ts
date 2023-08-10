import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
export declare class NotesController {
    private readonly noteService;
    constructor(noteService: NotesService);
    getUsers(): any;
    findUsersById(id: number): Promise<import("../../../typeorm").Note>;
    createUsers(createNoteDto: CreateNoteDto): Promise<import("../../../typeorm").Note>;
    updateUsers(id: number, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    deleteUsers(id: number): Promise<import("typeorm").UpdateResult>;
}
