"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../../../typeorm");
const typeorm_3 = require("typeorm");
let NotesService = exports.NotesService = class NotesService {
    constructor(userRepository, tagRepository) {
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
    }
    async createNote(createNoteDto) {
        const newNote = await this.userRepository.create(createNoteDto.note);
        const result = await this.userRepository.save(newNote);
        createNoteDto.tags.forEach(async (tag) => {
            tag.noteId = result.id;
            await this.tagRepository.create(tag);
            await this.tagRepository.save(tag);
        });
        return result;
    }
    findNote(id) {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async findAllNotes(page, limit, archived) {
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
    async updateNote(id, updateNoteDto) {
        const deletedTags = updateNoteDto.originalTags.filter(originalTag => {
            return !updateNoteDto.tags.some(tag => tag.id === originalTag.id);
        });
        deletedTags.forEach(async (tag) => {
            await this.tagRepository.delete(tag.id);
        });
        const newTags = updateNoteDto.tags.filter(tag => {
            return !updateNoteDto.originalTags.some(originalTag => originalTag.id === tag.id);
        });
        newTags.forEach(async (tag) => {
            tag.noteId = id;
            await this.tagRepository.create(tag);
            await this.tagRepository.save(tag);
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
        updateNoteDto.note.updatedAt = new Date();
        return this.userRepository.update(id, updateNoteDto.note);
    }
    deleteNote(id) {
        return this.userRepository.update(id, { isDeleted: true, deletedAt: new Date() });
    }
};
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Note)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.Tag)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository])
], NotesService);
//# sourceMappingURL=notes.service.js.map