import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SkipAuth } from 'src/decorators/skip-auth.decorator';
import { AuthService } from './auth.service';
import { UserAuthDto, UserSignUpDto } from './dto/user-auth.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  login(@Body() userAuthDto: UserAuthDto) {
    return this.authService.authenticate(userAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() req) {
    return req.user;
  }

  @SkipAuth()
  @Post('/sign-up')
  signUp(@Body() userSignUpDto: UserSignUpDto) {
    return this.authService.signUp(userSignUpDto);
  }
}
