import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';
import { GuardModule } from './guard/guard.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot({ path: '/zifeng' }), UploadModule, LoginModule, SpiderModule, GuardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
