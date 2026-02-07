import { Context } from 'koa';
import userService from '../services/userService';

class userController {
  // GET /users/:id - Busca um usuário pelo ID
  async show(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const user = await userService.getById(userId);
      
      ctx.body = user;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao buscar usuário", error };
    }
  }

  // POST /users - Cria um novo usuário
  async create(ctx: Context) {
    try {
      const userData = ctx.request.body;
      const newUser = await userService.create(userData);
      
      ctx.body = newUser;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao criar usuário", error };
    }
  }

  // PUT /users/:id - Atualiza um usuário existente
  async update(ctx: Context) {
    try {
      const userId = ctx.params.id;
      const userData = ctx.request.body;
      const updatedUser = await userService.update(userId, userData);
      
      ctx.body = updatedUser;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao atualizar usuário", error };
    }
  }
}

export default new userController();