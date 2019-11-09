const GoogleSpreadsheet = require('google-spreadsheet')
const credentials = require('../bugtracker.json')

const doc = new GoogleSpreadsheet('1J5Rjmy__yr6F1q776AS0jgRj4qZRCBuM5GcFIE_6uL0')

doc.useServiceAccountAuth(credentials, (err) => {
    if (err) {
        console.log('ERROR: ',err)
    } else {
        console.log('planilha aberta')
        doc.getInfo((err, info) => {
            const worksheet = doc.worksheets[0]
            worksheet.addRow({name: 'ze', email: 'ze@gmail'}, (err) => {
                console.log('linha inserida')
            })
        })
    }
})