const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const UserCtrl = require('../controllers/user')

router.get('', async function(req, res) {
    foundProducts = await Product.find({})
    return res.json(foundProducts)
})

router.get('/:productId', UserCtrl.authMiddleware, async function(req, res) {
    const productId = req.params.productId
    try {
        foundProduct = await Product.findById(productId)
        return res.json(foundProduct)
    } catch (e) {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
})

module.exports = router