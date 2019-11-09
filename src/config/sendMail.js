const sgMail = require('@sendgrid/mail')

const sendMail = async () => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'zzeris@gmail.com',
        from: 'zzeris@gmail.com',
        subject: 'Erro crítico reportado',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    }

    await sgMail.send(msg)
}

module.exports = sendMail
