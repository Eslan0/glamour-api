import { Context } from 'koa';
import orderService from '../services/orderService';

class orderController {
  // GET /orders - Listagem de pedidos
  async index(ctx: Context) {
    try {
      const orders = await orderService.getAllOrders();
      ctx.body = orders;
    }
    catch (error) 
    {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar pedidos" };
    }
  }

  // GET /orders/:id - Busca um pedido pelo ID
  async show(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const order = await orderService.getOrderById(orderId);
      ctx.body = order;
    } 
    catch (error) 
    {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar pedido" };
    }
  }

  // POST /orders - Cria um novo pedido
  async create(ctx: Context) {
    try {
      const orderData = ctx.request.body;
      const newOrder = await orderService.createOrder(orderData);
      ctx.body = newOrder;
    } 
    catch (error) 
    {
      ctx.status = 500;
      ctx.body = { message: "Erro ao criar pedido" };
    }
  }

  // PUT /orders/:id - Atualiza um pedido existente
  async update(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const orderData = ctx.request.body;
      const updatedOrder = await orderService.updateOrder(orderId, orderData);
      ctx.body = updatedOrder;
    } 
    catch (error) 
    {
      ctx.status = 500;
      ctx.body = { message: "Erro ao atualizar pedido" };
    }
  }

  // DELETE /orders/:id - Exclui um pedido existente
  async delete(ctx: Context) {
    try {
      const orderId = ctx.params.id;
      const deletedOrder = await orderService.deleteOrder(orderId);
      ctx.body = deletedOrder;
    } 
    catch (error) 
    {
      ctx.status = 500;
      ctx.body = { message: "Erro ao excluir pedido" };
    }
  }
}

export default new orderController();