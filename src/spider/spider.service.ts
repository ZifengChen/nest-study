import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from 'axios';

@Injectable()
export class SpiderService {
  async findAll() {
    const getCosPlay = async () => {
      const body = await axios
        .get('https://www.jpmn5.com/Cosplay/Cosplay10772.html')
        .then((res) => res.data);
      console.log(body);
    };
    getCosPlay();
    return 'cors';
  }
}
