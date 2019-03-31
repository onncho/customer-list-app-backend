import { AuthModule } from './auth/auth.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { ErrorsInterceptor } from './interceptors/error';
import { TransformInterceptor } from './Interceptors/transform';
import { TimeoutInterceptor } from './interceptors/timeout';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { LoggingInterceptor } from './interceptors/logging';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { HttpExceptionFilter } from './filters/http.exception.filter';
import { NPN_ENABLED } from 'constants';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://dev:dev123@ds157844.mlab.com:57844/customer-app',
      { useNewUrlParser: true },
    ),
    CustomerModule,
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController, CatsController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
    // consumer
    //   .apply(LoggerMiddleware)
    //   .with('ApplicationModule')
    //   .forRoutes(CatsController);
  }
}
