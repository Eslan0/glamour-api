import Router from 'koa-router';
import productController from '../controllers/productController';

const productRoutes = new Router();

// Apenas o mapeamento: Rota + Verbo HTTP + Função do Controller
productRoutes.get("/products", productController.index);
productRoutes.get("/products/:id", productController.show);
productRoutes.post("/products", productController.create);
productRoutes.put("/products/:id", productController.update);
productRoutes.delete("/products/:id", productController.delete);

export default productRoutes;