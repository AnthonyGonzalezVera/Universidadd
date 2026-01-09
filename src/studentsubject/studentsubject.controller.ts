import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudentsubjectService } from './studentsubject.service';
import { CreateStudentsubjectDto } from './dto/create-studentsubject.dto';
import { UpdateStudentsubjectDto } from './dto/update-studentsubject.dto';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Student Subjects')
@Controller('studentsubject')
export class StudentsubjectController {
  constructor(private readonly studentsubjectService: StudentsubjectService) { }

  @ApiOperation({ summary: 'Enroll a student in a subject' })
  @Post()
  create(@Body() createStudentsubjectDto: CreateStudentsubjectDto) {
    return this.studentsubjectService.create(createStudentsubjectDto);
  }

  @ApiOperation({ summary: 'Get all student subject enrollments' })
  @Get()
  findAll(@Query() findWithPagination: PaginationDto) {
    return this.studentsubjectService.findAll(findWithPagination);
  }

  @ApiOperation({ summary: 'Get a student subject enrollment by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsubjectService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a student subject enrollment' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentsubjectDto: UpdateStudentsubjectDto) {
    return this.studentsubjectService.update(+id, updateStudentsubjectDto);
  }

  @ApiOperation({ summary: 'Delete a student subject enrollment' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsubjectService.remove(+id);
  }
}
