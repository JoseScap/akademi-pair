const router = require("express").Router();
const controller = require('./../controllers/productController')
const myMiddleware = require('./../middleware/productMiddleware')

// /producto
router
  .route("/products")
  .get(controller.getAllProducts)
  .post(myMiddleware.verifyReqBody, controller.createProduct);

// /producto/{id}
router
  .route("/products/:id")
  .get(controller.getProductById)
  .put(myMiddleware.verifyReqBody, controller.updateProduct)
  .delete((req, res) => res.json("delete por id"));

module.exports = router