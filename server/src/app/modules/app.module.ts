import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AppController } from "@app/app/controllers/app/app.controller";
import { AppService } from "@app/app/services/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormConfig from "@app/ormconfig";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user.module";
import { AuthMiddleware } from "../../security/middlewares/auth.middleware";
import { PointModule } from "./point.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from "path";
import { ImageModule } from "./image.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.SENDGRID_HOST,
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      },
      template: {
        dir: join(process.cwd(), "src/app/mails"),
        adapter: new HandlebarsAdapter(),
      },
    }),
    UserModule,
    PointModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: "*",
      method: RequestMethod.ALL,
    });
  }
}
