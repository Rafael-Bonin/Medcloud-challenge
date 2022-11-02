import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthLoginDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: AuthDto) {
    console.log(data);
    return this.authService.signup(data);
  }

  @Post('signin')
  signin(@Body() data: AuthLoginDto) {
    return this.authService.login(data);
  }
}
