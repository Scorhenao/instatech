import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
) {}

async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
        const { password, ...result } = user;
        return result;
    }
    return null;
}

async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
        access_token: this.jwtService.sign(payload),
    };
}

async register(user: any) {
    user.password = await bcrypt.hash(user.password, 10);
        return this.usersService.create(user);
    }
}
