import Router from 'koa-router';
import orderController from '../controllers/orderController';

const orderRoutes = new Router();

// Apenas o mapeamento: Rota + Verbo HTTP + Função do Controller
orderRoutes.get("/orders", orderController.index);
orderRoutes.get("/orders/:id", orderController.show);
orderRoutes.post("/orders", orderController.create);
orderRoutes.put("/orders/:id", orderController.update);
orderRoutes.delete("/orders/:id", orderController.delete);

export default orderRoutes;