import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class bodyValidatorMiddleware implements NestMiddleware {
  async resolve(...args: any[]): Promise<MiddlewareFunction> {
    return async (req, res, next) => {
      console.log('bodyValidatorMiddleware => ', req.method, req.url);

      if (res.data) console.log('Response...', res.data);
      next();
    };
  }
}
