import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';
import {ConfigService} from '@nestjs/config';

import { UserDto } from './dto/user.dto';


@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {

    constructor(private configService : ConfigService ) {

    }

    @Get()
    @ApiOperation({ summary: 'List of registered user' })
    getAll() {
        const envname = this.configService.get<string>('PORT');
        return envname || 'bal';
    }
}


