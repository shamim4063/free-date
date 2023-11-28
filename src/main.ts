import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionListener } from './utils/exception/exception.listener';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //#region Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Free Date')
    .setDescription('The Free Date API description')
    .setVersion('1.0')
    .addTag('accounts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //#endregion

  //Global Exception Handler
  app.useGlobalFilters(new HttpExceptionListener());

  await app.listen(3000);
}
bootstrap();
