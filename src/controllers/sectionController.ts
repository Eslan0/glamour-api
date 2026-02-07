import { Context } from 'koa';
import sectionService from '../services/sectionService';

class sectionController {
  // GET /sections - Lista todas as seções
  async index(ctx: Context) {
    try {
      const sections = await sectionService.getAllSections();
      ctx.body = sections;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Erro ao buscar seções" };
    }
  }

  // POST /sections - Cria uma nova seção
  async create(ctx: Context) {
    try {
      const sectionData = ctx.request.body;
      const newSection = await sectionService.createSection(sectionData);
      
      ctx.body = newSection;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao criar seção", error };
    }
  }

  // PUT /sections/:id - Atualiza uma seção existente
  async update(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const sectionData = ctx.request.body;
      const updatedSection = await sectionService.updateSection(sectionId, sectionData);
      
      ctx.body = updatedSection;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao atualizar seção", error };
    }
  }

  // DELETE /sections/:id - Exclui uma seção existente
  async delete(ctx: Context) {
    try {
      const sectionId = ctx.params.id;
      const deletedSection = await sectionService.deleteSection(sectionId);
      
      ctx.body = deletedSection;
    } catch (error) {
      ctx.status = 400; // Erro de validação ou dados malformados
      ctx.body = { message: "Erro ao excluir seção", error };
    }
  }
}

export default new sectionController();