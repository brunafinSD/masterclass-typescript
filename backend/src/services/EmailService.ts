interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO{
    //DTO: Data Transfer Object
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService{
    sendMail(resquest: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({ to, message }: IMessageDTO){
        console.log(`Email enviado para: ${to.name}: ${message.subject}`);
    }
}

export default EmailService;