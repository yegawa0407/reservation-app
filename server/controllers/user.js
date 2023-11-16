const jwt = require('jsonwebtoken')
const User = require('../model/user')
const config = require('../config/dev')



function notAuthorized(res) {
    return res.status(401).send({errors: [{title: 'Not Aurhorized', detail: 'You need to login!'}]})

}

exports.authMiddleware = function(req, res, next) {
    const token = req.headers.authorization

    if(!token) {
        return notAuthorized(res)
    }

    jwt.verify(token.split(' ')[1], config.SECRET, async function(err, decodedToken) {
        if(err)  {
            return res.status(401).send({errors: [{title: 'Not Aurhorized', detail: 'Invalid token!'}]})
        }

        try {
            foundUser = await User.findById(decodedToken.userId)

            if(!foundUser) {
                return res.status(401).send({errors: [{title: 'Not Aurhorized', detail: 'Invalid token!'}]})
            }
        } catch(err) {
            return res.status(401).send({errors: [{title: 'Not Aurhorized', detail: 'Invalid token!'}]})
        }
        
        next()
    })
}