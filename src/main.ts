import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NextFunction, Request, Response } from 'express';
import * as cors from 'cors';

const whileList = ['/user'];

function MiddlewareAll(req: Request, res: Response, next: NextFunction) {
  console.log(req.originalUrl);
  if (whileList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('小黑子漏出鸡脚了吧');
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cors());
  app.use(
    session({
      secret: 'zifeng',
      rolling: true,
      name: 'zifeng.sid',
      cookie: { maxAge: 99999 },
    }),
  );
  app.use(MiddlewareAll);
  await app.listen(3000);
}
bootstrap();
