module.exports = (req, res, next) => {
    try{
	res.setHeader('set-cookie', "foo=bar")
	next()
    }
    catch(error){
	res.status(401).json({error: error | 'error' })
    }
}
