import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { CreateTagDto } from 'src/tags/dto/tag.dto';
import { Note, Tag } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class NotesService {
    private readonly userRepository;
    private readonly tagRepository;
    constructor(userRepository: Repository<Note>, tagRepository: Repository<Tag>);
    createNote(createNoteDto: {
        note: CreateNoteDto;
        tags: CreateTagDto[];
    }): Promise<Note>;
    findNote(id: number): Promise<Note>;
    findAllNotes(page: number, limit: number, archived: boolean): Promise<[Note[], number]>;
    updateNote(id: number, updateNoteDto: UpdateNoteDto): Promise<import("typeorm").UpdateResult>;
    deleteNote(id: number): Promise<import("typeorm").UpdateResult>;
}
