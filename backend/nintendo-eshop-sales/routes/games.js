const express = require('express')
const router = express.Router()
const {
    getGamesAmerica
} = require('nintendo-switch-eshop');

router.get('/eshop-sales', (req, res) => {
    var id = 0
    let array = []
    let url = 'https://www.nintendo.com'

    getGamesAmerica(['all']).then((result) => {
        result.forEach((element) => {
            if (element.salePrice != null) {
                let company = element.developers == null ? element.publishers : element.developers

                var game = {
                    id: id,
                    url: url + element.url,
                    title: element.title,
                    boxart: element.boxart == null ? null : url + element.boxart,
                    releaseDate: element.releaseDateDisplay,
                    company: company == null ? [""] : company,
                    price: element.msrp,
                    salePrice: element.salePrice,
                    lowestPrice: element.lowestPrice
                }

                array.push(game)
                id = id + 1
            }
        });

        let dataEnvelope = {}
        dataEnvelope.data = array

        res.send(dataEnvelope)
    }).catch((error) => {
        res.sendStatus(400)
    })
})

module.exports = router