import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Aplicar para permitir transformar tipos primitivos
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  //Configuracion de Swagger
  const config = new DocumentBuilder()
    .setTitle('Sgu API')
    .setDescription('API sgu')
    .setVersion('1.0')
    .addTag('careers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Docs: http://localhost:3000/api`);
}
bootstrap();
