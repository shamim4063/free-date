import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionListener } from './utils/exception/exception.listener';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setting api Prefix
  app.setGlobalPrefix('api');

  //#region Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Make Friday Order')
    .setDescription('The Make Friday Order API description')
    .setVersion('1.0')
    .setBasePath('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  //#endregion

  //Global Exception Handler
  app.useGlobalFilters(new HttpExceptionListener());

  await app.listen(3000);
}
bootstrap();
