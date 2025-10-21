import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // Simulação de banco de dados
  private users = [
    {
      id: 1,
      email: 'admin@test.com',
      password: '$2a$10$rQZ8KjJ8KjJ8KjJ8KjJ8K.8KjJ8KjJ8KjJ8KjJ8KjJ8KjJ8KjJ8K', // '123456'
      name: 'Admin',
    },
  ];

  async validateUser(email: string, password: string): Promise<any> {
    const user = this.users.find(u => u.email === email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  async register(email: string, password: string, name: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = {
      id: this.users.length + 1,
      email,
      password: hashedPassword,
      name,
    };
    
    this.users.push(newUser);
    
    const { password: _, ...result } = newUser;
    return result;
  }
}
