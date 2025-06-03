export class UserAuthDto {
  email: string;
  password: string;
}

export class UserSignInDto {
  userId: string;
  email: string;
}

export class UserAuthResult {
  accessToken: string;
  userId: string;
  email: string;
}
