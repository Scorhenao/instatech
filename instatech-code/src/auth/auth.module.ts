import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy'; // Aún necesitaremos crear esta estrategia

@Module({
imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Cambiar a una clave más segura
      signOptions: { expiresIn: '60m' }, // Tiempo de expiración del token
    }),
],
    providers: [AuthService, JwtStrategy], // Añadimos JwtStrategy como proveedor
    controllers: [AuthController],
})
export class AuthModule {}
