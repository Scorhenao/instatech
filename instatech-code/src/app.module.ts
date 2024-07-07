import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { ProvidersModule } from './providers/providers.module';
import { TechniciansModule } from './technicians/technicians.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'instatech',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ProvidersModule,
    TechniciansModule,
    AdministratorsModule,
    ProductsModule,
  ],
})
export class AppModule {}
