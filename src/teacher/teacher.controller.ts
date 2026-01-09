import { Controller, Get, Patch, Param, Delete, Query, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Teachers')
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }

  @ApiOperation({ summary: 'Get all teachers' })
  @Get()
  findAll(@Query() findWithPagination: PaginationDto) {
    return this.teacherService.findAll(findWithPagination);
  }

  @ApiOperation({ summary: 'Get a teacher by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a teacher profile' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @ApiOperation({ summary: 'Delete a teacher' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
}
