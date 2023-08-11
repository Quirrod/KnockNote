import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag) private readonly noteRepository: Repository<Tag>,
    ) { }

    createTag(name: string, noteId: number) {
        const newTag = this.noteRepository.create({ name: name, noteId: noteId });
        return this.noteRepository.save(newTag);
    }

    findTag(id: number) {
        return this.noteRepository.findOne(
            {
                where: {
                    id: id
                }
            }
        );
    }

    deleteTag(id: number) {
        return this.noteRepository.update(
            {
                id: id
            },
            {
                isDeleted: true,
                deletedAt: new Date()
            }
        )
    }
}
