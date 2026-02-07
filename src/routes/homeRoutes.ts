import Router from 'koa-router';

const homeRoutes = new Router();

homeRoutes.get('/', async (ctx) => {
  ctx.body = { message: "Koa + TS + MongoDB está rodando! 🚀" };
});

export default homeRoutes;