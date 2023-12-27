import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'zifeng',
      rolling: true,
      name: 'zifeng.sid',
      cookie: { maxAge: 99999 },
    }),
  );
  await app.listen(3000);
}
bootstrap();
