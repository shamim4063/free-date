import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './admin/user/user.module';
import dbConfig from 'db/db.config';
import { DataSource } from 'typeorm';
import { ClientModule } from './client/client.module';
import { RedirectMiddleware } from './middlewares/redirect/redirect.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],

    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm')),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
    },
    }),
    UserModule,
    ClientModule
  ],
  providers: [AppService]
})
export class AppModule implements NestModule{

  // If the application hitting by [host:port] only or [host:port/else] in the browser. 
  // It will redirect to /api for API documentation.
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RedirectMiddleware)
      .forRoutes('*');
  }

}
