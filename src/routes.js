const router = require('express').Router()

router.get('/', (_, res) => {
    res.render('home')
})

router.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = router