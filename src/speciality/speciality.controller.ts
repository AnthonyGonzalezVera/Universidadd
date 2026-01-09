import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Specialities')
@Controller('speciality')
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) { }

  @ApiOperation({ summary: 'Create a new speciality' })
  @Post()
  create(@Body() createSpecialityDto: CreateSpecialityDto) {
    return this.specialityService.create(createSpecialityDto);
  }

  @ApiOperation({ summary: 'Get all specialities' })
  @Get()
  findAll(@Query() findWithPagination: PaginationDto) {
    return this.specialityService.findAll(findWithPagination);
  }

  @ApiOperation({ summary: 'Get a speciality by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialityService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a speciality' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialityService.update(+id, updateSpecialityDto);
  }

  @ApiOperation({ summary: 'Delete a speciality' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialityService.remove(+id);
  }
}
