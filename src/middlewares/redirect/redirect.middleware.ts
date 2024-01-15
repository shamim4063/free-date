import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    //Write a middleware
    console.log(req.baseUrl);
    next();
  }
}
