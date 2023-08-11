import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { CreateTagDto, UpdateTagDto } from 'src/tags/dto/tag.dto';
import { Note, Tag } from 'src/typeorm';
import { Like, Repository } from 'typeorm';

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
        search: string
    ) {
        if (search) {
            const tags = await this.tagRepository.find({
                where: {
                    name: Like(`%${search}%`)
                }
            });
            if (tags.length > 0) {
                const data = this.userRepository.findAndCount({
                    where: {
                        isArchived: archived,
                        isDeleted: false,
                    },
                    take: limit,
                    skip: (page - 1) * limit,
                    order: {
                        createdAt: 'DESC'
                    },
                    relations: ['tags']

                }
                );
                const filteredData = data.then(async (data) => {
                    const filteredData = await data[0].filter(note => {
                        return note.tags.some(tag => {
                            return tags.some(searchTag => searchTag.id === tag.id);
                        });
                    });

                    return [filteredData, filteredData.length];
                });

                // return filteredData as Promise<[Note[], number]>;
                return filteredData;
            }
        }

        const data = this.userRepository.findAndCount({
            where: {
                isArchived: archived,
                isDeleted: false
            },
            take: limit,
            skip: (page - 1) * limit,
            order: {
                createdAt: 'DESC'
            },
            relations: ['tags']

        });


        return data;
    }


    async updateNote(id: number, updateNoteDto: {
        note: UpdateNoteDto
        tags: UpdateTagDto[]
        originalTags: UpdateTagDto[]
    }) {
        const deletedTags = updateNoteDto.originalTags.filter(originalTag => {
            return !updateNoteDto.tags.some(tag => tag.id === originalTag.id);
        });
        deletedTags.forEach(async tag => {
            await this.tagRepository.delete(tag.id);
        });

        const newTags = updateNoteDto.tags.filter(tag => {
            return !updateNoteDto.originalTags.some(originalTag => originalTag.id === tag.id);
        });
        newTags.forEach(async tag => {
            tag.noteId = id;
            await this.tagRepository.create(tag);
            await this.tagRepository.save(tag);
        });

        await new Promise(resolve => setTimeout(resolve, 2000));

        updateNoteDto.note.updatedAt = new Date();
        return this.userRepository.update(id, updateNoteDto.note);
    }

    deleteNote(id: number) {
        return this.userRepository.update(id, { isDeleted: true, deletedAt: new Date() });
    }
}
