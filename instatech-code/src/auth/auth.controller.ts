import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

@Post('register')
async register(@Body() body) {
    return this.authService.register(body);
}

@Post('login')
async login(@Body() body) {
    return this.authService.login(body);
}

@Get('protected')
@UseGuards(JwtAuthGuard)
    async protectedRoute() {
        return { message: 'Esta es una ruta protegida' };
    }
}
