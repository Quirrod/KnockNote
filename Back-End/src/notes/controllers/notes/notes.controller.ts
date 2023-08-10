import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto, GetNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
import { Note } from 'src/typeorm';

@Controller('notes')
export class NotesController {
    constructor(private readonly noteService: NotesService) { }

    @Get()
    getNotes(
        @Query('page', ParseIntPipe) page: number,
        @Query('limit', ParseIntPipe) limit: number,
        @Query('archived') archived: boolean,
    ) {
        // send in meta the number if pagination
        return this.noteService.findAllNotes(page, limit, archived);
        
    }

    @Get('/:id')
    findNotesById(@Param('id', ParseIntPipe) id: number): Promise<Note> {
        return this.noteService.findNote(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createNotes(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.noteService.createNote(createNoteDto);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateNotes(@Param('id', ParseIntPipe) id: number, @Body() updateNoteDto: UpdateNoteDto) {
        return this.noteService.updateNote(id, updateNoteDto);
    }

    @Delete('/:id')
    deleteNotes(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.deleteNote(id);
    }
}
