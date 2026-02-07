import Router from 'koa-router';
import userController from '../controllers/userController';

const userRoutes = new Router();

// Apenas o mapeamento: Rota + Verbo HTTP + Função do Controller
userRoutes.get("/users:id", userController.show);
userRoutes.post("/users", userController.create);
userRoutes.put("/users/:id", userController.update);

export default userRoutes;