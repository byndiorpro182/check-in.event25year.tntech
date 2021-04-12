const router = require('express')()

router.use('/check-in', require('./checkIn'))

module.exports = router