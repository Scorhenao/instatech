import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
) {}

async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
    }
    return null;
}

async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
        access_token: this.jwtService.sign(payload),
    };
}

async register(user: User): Promise<User> {
        return this.usersService.create(user);
    }
}