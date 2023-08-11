import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { CreateTagDto } from 'src/tags/dto/tag.dto';
import { Note, Tag } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note) private readonly userRepository: Repository<Note>,
        @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,

    ) { }

    async createNote(createNoteDto:
        { note: CreateNoteDto, tags: CreateTagDto[] }) {
        const newNote = await this.userRepository.create(createNoteDto.note);
        const result = await this.userRepository.save(newNote);
        createNoteDto.tags.forEach(async tag => {
            tag.noteId = result.id;
            await this.tagRepository.create(tag);
            await this.tagRepository.save(tag);
        });
        console.log("TCL: NotesService -> result", result)
        return result;
    }

    findNote(id: number) {
        return this.userRepository.findOne(
            {
                where: {
                    id: id
                }
            }
        );
    }

    async findAllNotes(
        page: number,
        limit: number,
        archived: boolean,
    ) {
        const data = this.userRepository.findAndCount({
            where: {
                isArchived: archived,
                isDeleted: false
            },
            take: limit,
            skip: (page - 1) * limit,
            order: {
                createdAt: 'DESC'
            }
        });
        return data;
    }

    updateNote(id: number, updateNoteDto: UpdateNoteDto) {
        updateNoteDto.updatedAt = new Date();
        return this.userRepository.update(id, updateNoteDto);
    }

    deleteNote(id: number) {
        return this.userRepository.update(id, { isDeleted: true, deletedAt: new Date() });
    }
}
