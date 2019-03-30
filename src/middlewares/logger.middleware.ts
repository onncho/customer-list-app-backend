import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(...args: any[]): Promise<MiddlewareFunction> {
    return async (req, res, next) => {
      console.log('Request => ', req.method, req.url);

      if (res.data) console.log('Response...', res.data);
      next();
    };
  }
}

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   async resolve(name: string): Promise<MiddlewareFunction> {
//     //await someAsyncJob();

//     return async (req, res, next) => {
//       //await someAsyncJob();
//       //console.log(`[${name}] Request...`); // [ApplicationModule] Request...
//       next();
//     };
//   }
// }
