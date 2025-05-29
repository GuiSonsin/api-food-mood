import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInUserDTO } from './dto/sign-in-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signUp(createUserDto: CreateUserDto) {
    const existsUserEmail = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (existsUserEmail) {
      throw new ConflictException({
        message: 'O e-mail já está em uso',
      });
    }

    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });
    return newUser;
  }

  async signIn(signInDto: SignInUserDTO) {
    const existsUser = await this.prisma.user.findFirst({
      where: {
        email: signInDto.email,
        password: signInDto.password,
      },
    });

    if (!existsUser) {
      throw new NotFoundException({
        message: 'Email ou senha incorretos!',
      });
    }

    return existsUser;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      data: updateUserDto,
      where: {
        id,
      },
    });
    return updatedUser;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
