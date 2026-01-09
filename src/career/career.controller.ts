import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CareerService } from './career.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Careers')
@Controller('career')
export class CareerController {
  constructor(private readonly careerService: CareerService) { }

  @ApiOperation({ summary: 'Create a new career' })
  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careerService.create(createCareerDto);
  }

  @ApiOperation({ summary: 'Get all careers' })
  @Get()
  findAll(@Query() findWithPagination: PaginationDto) {
    return this.careerService.findAll(findWithPagination);
  }

  @ApiOperation({ summary: 'Get a career by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a career' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careerService.update(+id, updateCareerDto);
  }

  @ApiOperation({ summary: 'Delete a career' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerService.remove(+id);
  }
}
