const sgMail = require('@sendgrid/mail')

const sendMail = async (name, email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: email,
        cc: 'joselpsantos@outlook.com',
        from: email,
        subject: 'Erro crítico reportado',
        html: `<h1>Verificar!</h1><strong>${name} reportou um erro crítico. (Aguardando resolução)</strong>`
    }

    await sgMail.send(msg)
}

module.exports = sendMail