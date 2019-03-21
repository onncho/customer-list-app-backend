import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http.exception.filter';
import { CreateCatsDTO } from './dto/create-cats.dto';
import { Roles } from '../decorators/roles.decorator';

@Controller('cats')
//@UseFilters(HttpExceptionFilter)
export class CatsController {
  // constructor(private ServiceGoesHERE: ServiceFromImport) {}

  @Get()
  async test(@Res() res) {
    return res.status(HttpStatus.OK).json('***Cats Controller***');
  }

  @Get('testRoles')
  @Roles('admin')
  async testRoles(@Res() res) {
    return res.status(HttpStatus.OK).json('WWWWWWWWWW');
  }

  @Post()
  async create(@Body() createCatDto: CreateCatsDTO) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom messag111e',
      },
      403,
    );
  }
}
