import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';
import { GuardModule } from './guard/guard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { password } from './config/password';
import { TestModule } from './test/test.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', //账号
      password, //密码
      host: 'localhost', //host
      port: 3306,
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10, //重试连接数据库的次数
      autoLoadEntities: true, // 如果为true，将自动加载实体，forFeature()方法注册的每个实体都将自动添加到配置对象的实例
    }),
    UserModule,
    ConfigModule.forRoot({ path: '/zifeng' }),
    UploadModule,
    LoginModule,
    SpiderModule,
    GuardModule,
    TestModule,
    ManagerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
