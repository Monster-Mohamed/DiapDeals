import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async emailVerification(
    email: string,
    url: string,
    web_domain: string,
    first_name?: string
  ): Promise<void> {
    await this.mailerService.sendMail({
      from: process.env.SENDGRID_EMAIL,
      to: email,
      subject: "Verifying your account",
      template: "verifyAccount",
      context: {
        email: first_name ? first_name : email,
        url,
        web_domain: web_domain,
      },
    });
  }

  async resetAccount(
    email: string,
    url: string,
    support_url: string,
    first_name?: string
  ): Promise<void> {
    await this.mailerService.sendMail({
      from: process.env.SENDGRID_EMAIL,
      to: email,
      subject: "Reset Your Account",
      template: "resetAccount",
      context: {
        email: first_name ? first_name : email,
        url,
        support_url: support_url,
      },
    });
  }
}
