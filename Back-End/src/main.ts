import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api')
    app.enableCors()
    await app.listen(PORT, async () => console.log(`Server has been started on PORT: ${PORT}! and at ${await app.getUrl()}`));
  } catch (error) {
    console.log(error)
  }
}
bootstrap();
