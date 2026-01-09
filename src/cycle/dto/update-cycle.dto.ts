import { PartialType } from '@nestjs/swagger';
import { CreateCycleDto } from './create-cycle.dto';

export class UpdateCycleDto extends PartialType(CreateCycleDto) {}
