import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {
  UserAuthDto,
  UserAuthResult,
  UserSignInDto,
} from './dto/user-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate({
    email,
    password,
  }: UserAuthDto): Promise<UserAuthResult> {
    const user = await this.validateUser({ email, password });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas!');
    }

    return this.signIn(user);
  }

  async validateUser({
    email,
    password,
  }: UserAuthDto): Promise<UserSignInDto | null> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      return {
        userId: user.id,
        email: user.email,
      };
    }

    return null;
  }

  async signIn({ email, userId }: UserSignInDto): Promise<UserAuthResult> {
    const tokenPayload = {
      sub: userId,
      email: email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      userId,
      email,
    };
  }
}
