const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('../config/bugtracker')
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
                userDate
            })
            
            return res.send('Bug reportado com sucesso!')
        } catch (err) {
            console.log(err)
            return res.send('Erro ao enviar formulário.')
        }
    }
}