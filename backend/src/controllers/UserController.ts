import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Fulano", email: "fulano@hotmail.com" },
  { name: "Ciclano", email: "ciclano@hotmail.com" },
  { name: "Beltrano", email: "beltrano@hotmail.com" },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Bruna",
        email: "bruna.f.n@hotmail.com",
      },
      message: {
        subject: "Teste de envio de email ",
        body: "Bem vindo ao sistema",
      },
    });

    return res.send("sucesso");
  },
};
