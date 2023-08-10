import { Module } from '@nestjs/common';
import { NotesController } from './controllers/notes/notes.controller';
import { NotesService } from './services/notes/notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Note]),],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule { }
