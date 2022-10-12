require("dotenv").config({ path: `../${process.env.NODE_ENV}.env` });

if (!process.env.IS_TS_NODE) {
  require("module-alias/register");
}

import { NestFactory } from "@nestjs/core";
import { AppModule } from "@app/app/modules/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000);
}

bootstrap();
