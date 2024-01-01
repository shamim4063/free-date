import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientUserService } from './client-user.service';
import { CreateClientUserDto } from './dto/create-client-user.dto';
import { UpdateClientUserDto } from './dto/update-client-user.dto';

@Controller('client-user')
export class ClientUserController {
  constructor(private readonly clientUserService: ClientUserService) {}

  @Post()
  create(@Body() createClientUserDto: CreateClientUserDto) {
    return this.clientUserService.create(createClientUserDto);
  }

  @Get()
  findAll() {
    return this.clientUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientUserDto: UpdateClientUserDto) {
    return this.clientUserService.update(+id, updateClientUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientUserService.remove(+id);
  }
}
