import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { correo, nombre, token } = datos;

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
        to: correo,
        subject: "Coally - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en Coally",
        html: `<p>Hola: ${nombre}, Comprueba tu cuenta en Coally </p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguinte enlace:
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
        
        
        `
    })
};

export const emailOlvidePassword = async (datos) => {
    const { correo, nombre, token } = datos;

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
        to: correo,
        subject: "Coally - Cmprueba tu cuenta",
        text: "Comprueba tu cuenta en Coally",
        html: `<p>Hola: ${nombre}, Comprueba tu cuenta en Coally </p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguinte enlace:
        
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
        
        
        `
    })
};