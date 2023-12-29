import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NextFunction, Request } from 'express';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from './common/response';
import { HttpFilter } from './common/filter';
import { ValidationPipe } from '@nestjs/common';

const whileList = ['/user'];

// function MiddlewareAll(req: Request, res: Response, next: NextFunction) {
//   if (whileList.includes(req.originalUrl)) {
//     next();
//   } else {
//     res.send('小黑子漏出鸡脚了吧');
//   }
// }

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'));
  // app.use(cors());
  app.use(
    session({
      secret: 'zifeng',
      rolling: true,
      name: 'zifeng.sid',
      cookie: { maxAge: 99999 },
    }),
  );
  app.useGlobalInterceptors(new Response());
  app.useGlobalFilters(new HttpFilter());
  app.useGlobalPipes(new ValidationPipe());
  // app.use(MiddlewareAll);
  await app.listen(3000);
}
bootstrap();
