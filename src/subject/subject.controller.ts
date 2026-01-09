import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Subjects')
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) { }

  @ApiOperation({ summary: 'Create a new subject' })
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto);
  }

  @ApiOperation({ summary: 'Get all subjects' })
  @Get()
  findAll(@Query() findWithPagination: PaginationDto) {
    return this.subjectService.findAll(findWithPagination);
  }

  @ApiOperation({ summary: 'Get a subject by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a subject' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @ApiOperation({ summary: 'Delete a subject' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
