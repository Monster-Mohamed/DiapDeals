require('dotenv').config({ path: `../${process.env.NODE_ENV}.env` });
const express = require('express');

if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads'))); // <-
  await app.listen(5000);
}

bootstrap();
