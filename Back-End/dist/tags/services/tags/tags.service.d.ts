import { Tag } from 'src/typeorm';
import { Repository } from 'typeorm';
export declare class TagsService {
    private readonly noteRepository;
    constructor(noteRepository: Repository<Tag>);
    createTag(name: string, noteId: number): Promise<Tag>;
    findTag(id: number): Promise<Tag>;
    deleteTag(id: number): Promise<import("typeorm").UpdateResult>;
}
