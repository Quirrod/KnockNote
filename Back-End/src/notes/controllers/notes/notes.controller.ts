import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from 'src/notes/dto/note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly noteService: NotesService) { }

    @Get()
    getUsers(): any {
        return this.noteService.findAllNotes();
    }

    @Get('/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.findNote(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createUsers(@Body() createNoteDto: CreateNoteDto) {
        return this.noteService.createNote(createNoteDto);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateUsers(@Param('id', ParseIntPipe) id: number, @Body() updateNoteDto: UpdateNoteDto) {
        return this.noteService.updateNote(id, updateNoteDto);
    }

    @Put('/:id/delete')
    deleteUsers(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.deleteNote(id);
    }

}
