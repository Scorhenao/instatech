import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

@Post('protected-route')
  @UseGuards(JwtAuthGuard)  // Aplicamos JwtAuthGuard a esta ruta
    async protectedRoute() {
        return { message: 'Esta es una ruta protegida' };
    }
}
