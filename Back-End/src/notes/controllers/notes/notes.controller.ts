import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto, GetNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
import { CreateTagDto, UpdateTagDto } from 'src/tags/dto/tag.dto';
import { Note } from 'src/typeorm';

@Controller('notes')
export class NotesController {
    constructor(private readonly noteService: NotesService) { }

    @Get()
    getNotes(
        @Query('page', ParseIntPipe) page: number,
        @Query('limit', ParseIntPipe) limit: number,
        @Query('archived', ParseBoolPipe) archived: boolean,
        @Query('search') search: string
    ) {
        return this.noteService.findAllNotes(page, limit, archived, search);

    }

    @Get('/:id')
    findNotesById(@Param('id', ParseIntPipe) id: number): Promise<Note> {
        return this.noteService.findNote(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createNotes(@Body() createNoteDto: { note: CreateNoteDto, tags: CreateTagDto[] }): Promise<Note> {
        return this.noteService.createNote(createNoteDto);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateNotes(@Param('id', ParseIntPipe) id: number, @Body() updateNoteDto: {
        note: UpdateNoteDto
        tags: UpdateTagDto[]
        originalTags: UpdateTagDto[]
    }) {
        return this.noteService.updateNote(id, updateNoteDto);
    }

    @Delete('/:id')
    deleteNotes(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.deleteNote(id);
    }
}
