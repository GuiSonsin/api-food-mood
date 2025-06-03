export class UserAuthDto {
  email: string;
  password: string;
}

export class UserSignInDto {
  userId: string;
  email: string;
}

export class UserSignUpDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export class UserAuthResult {
  accessToken: string;
  userId: string;
  email: string;
}
