import { Module } from '@nestjs/common';
import { TagsController } from './controllers/tags/tags.controller';
import { TagsService } from './services/tags/tags.service';
import { Tag } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]),],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
