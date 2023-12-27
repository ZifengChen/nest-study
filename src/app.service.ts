import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'zifeng';
  }
  getZifeng(): string {
    return '子丰';
  }
}
