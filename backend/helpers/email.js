import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { email, name, token } = datos;

    // TODO: Mover a variables de entorno

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "a979a2ad27c5a6",
            pass: "a23593ad4ce055"
        }
    });
    
    // INF correo
    
    const info = await transport.sendMail({
        from: '"Coally - Administrador " <cuentas@coallycorp.com>',
        to: email,
        subject: "Coally - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en Coally",
        html: `<p>Hola: ${name}, Comprueba tu cuenta en Coally </p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguinte enlace:
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
        
        
        `
    })
};

export const emailOlvidePassword = async (datos) => {
    const { email, name, token } = datos;
    
    // TODO: Mover a variables de entorno
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "a979a2ad27c5a6",
            pass: "a23593ad4ce055"
        }
    });
    
    // INF correo
    
    const info = await transport.sendMail({
        from: '"Coally - Administrador " <cuentas@coallycorp.com>',
        to: email,
        subject: "Coally - Reestablece tu password",
        text: "Reestablece tu password",
        html: `<p>Hola: ${name}, Has solicitado Reestablecer tu password </p>
        <p>Sigue el siguinte enlace para generar un nuevo password:
        
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablece tu password</a></p>
        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        
        
        `
    })
};