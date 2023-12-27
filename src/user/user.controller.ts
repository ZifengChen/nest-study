import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
  Request,
  Query,
  Delete,
  HttpCode,
  Res,
  Req,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get()
  // myfindAll(@Query() query) {
  //   return {
  //     code: 200,
  //     message: query.name,
  //   };
  // }

  @Post()
  create(@Body('age') body) {
    return {
      code: 200,
      message: body.name,
    };
  }

  // @Get(':id')
  // findId(@Param('id') id, @Headers() headers) {
  //   return {
  //     code: 200,
  //   };
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }

  @Get('code')
  createCode(@Request() req, @Res() res, @Session() session) {
    const captcha = this.userService.createCaptcha();
    req.session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('create')
  createUser(@Req() req, @Body() body) {
    console.log(req.session.code, body);
    if (
      req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()
    ) {
      return {
        message: '验证码正确',
      };
    } else {
      return {
        message: '验证码错误',
      };
    }
  }
}
