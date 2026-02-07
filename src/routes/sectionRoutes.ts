import Router from 'koa-router';
import sectionController from '../controllers/sectionController';

const sectionRoutes = new Router();

// Apenas o mapeamento: Rota + Verbo HTTP + Função do Controller
sectionRoutes.get("/sections", sectionController.index);
sectionRoutes.post("/sections", sectionController.create);
sectionRoutes.put("/sections/:id", sectionController.update);
sectionRoutes.delete("/sections/:id", sectionController.delete);

export default sectionRoutes;