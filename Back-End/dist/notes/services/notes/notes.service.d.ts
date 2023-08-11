import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { CreateTagDto, UpdateTagDto } from 'src/tags/dto/tag.dto';
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
    findAllNotes(page: number, limit: number, archived: boolean, search: string): Promise<(number | Note[])[]>;
    updateNote(id: number, updateNoteDto: {
        note: UpdateNoteDto;
        tags: UpdateTagDto[];
        originalTags: UpdateTagDto[];
    }): Promise<import("typeorm").UpdateResult>;
    deleteNote(id: number): Promise<import("typeorm").UpdateResult>;
}
