import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Conchayoro Backend - Tudo certo! / Vale 10 pontos kkkk';
  }
}
