const router = require('express').Router()

const WorksheetController = require('./controllers/WorksheetController')

router.get('/', WorksheetController.index)
router.post('/', WorksheetController.store)

module.exports = router