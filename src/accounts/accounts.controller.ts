import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';

import { UserDto } from './dto/user.dto';


@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {

    constructor() {

    }

    @Get()
    @ApiOperation({ summary: 'List of registered user' })
    getAll(): Array<UserDto> {
        if ((2 + 3) > 4)
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
        return [{ name: 'Shahataj Jahan', username: 'tasmim4063' }]
    }
}


