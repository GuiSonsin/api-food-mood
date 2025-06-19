import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('me')
  findOne(@Request() req) {
    const user = req.user;
    return this.userService.findOne(user.sub);
  }

  @Patch()
  update(@Request() request, @Body() updateUserDto: UpdateUserDto) {
    const user = request.user;
    return this.userService.update(user.sub, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
