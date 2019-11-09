const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('../config/bugtracker')
const sendMail = require('../config/sendMail')
const { promisify } = require('util')

module.exports = {
    index(_, res) {
        res.render('home')
    },
    async store(req, res) {
        try {
            const {
                name,
                email,
                issueType,
                howToReproduce,
                expetedOuput,
                receivedOuput,
                userAgent,
                userDate
            } = req.body
    
            const doc = new GoogleSpreadsheet('1J5Rjmy__yr6F1q776AS0jgRj4qZRCBuM5GcFIE_6uL0')
    
            await promisify(doc.useServiceAccountAuth)(credentials)
            const info = await promisify(doc.getInfo)()
            const worksheet = info.worksheets[0]
            await promisify(worksheet.addRow)({
                name,
                email,
                issueType,
                howToReproduce,
                expetedOuput,
                receivedOuput,
                userAgent,
                userDate,
                source: req.params.source || 'Direct'
            })

            if (issueType === 'CRITICAL') sendMail(name, email)
            
            return res.render('success')
        } catch (err) {
            console.log(err)
            return res.send('Erro ao enviar formulário.')
        }
    }
}