import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { Note } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note) private readonly userRepository: Repository<Note>,
    ) { }

    createNote(createNoteDto: CreateNoteDto) {
        const newNote = this.userRepository.create(createNoteDto);
        return this.userRepository.save(newNote);
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
