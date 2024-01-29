const productManager = require("../model/productManager.model")

module.exports.createProduct=(req,res)=>{
    productManager.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err =>console.log({message:'Something went wrong when creating new product',error:err}))
}
module.exports.getAllProducts=(req,resp)=>{
    productManager.find()
    .then(allProducts=>resp.json(allProducts))
    .catch(err=> console.log(err))
}
module.exports.getOneProduct = (request, response) => {
    productManager.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
