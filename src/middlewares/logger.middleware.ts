import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   resolve(...args: any[]): MiddlewareFunction {
//     return (req, res, next) => {
//       console.log('Request...');
//       next();
//     };
//   }
// }

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {
    //await someAsyncJob();

    return async (req, res, next) => {
      //await someAsyncJob();
      //console.log(`[${name}] Request...`); // [ApplicationModule] Request...
      next();
    };
  }
}
