import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDTO } from './data-transfer-object/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDTO: CreateItemDTO): string {
    return `Name: ${createItemDTO.name} Description: ${createItemDTO.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDTO: CreateItemDTO, @Param('id') id): string {
    return `Update ${id} - Name: ${updateItemDTO.name}`;
  }
}
