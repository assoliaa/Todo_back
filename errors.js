const errors =(error, req, res, next)=>{
    return res.status(500).json({msg:error.message})
}

module.exports =errors