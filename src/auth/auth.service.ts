import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable({})
export class AuthService {
  login() {
    return { message: 'Logged in' };
  }

  signup() {
    return { message: 'Signed up' };
  }
}
