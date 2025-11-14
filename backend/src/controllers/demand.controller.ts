import { Request, Response } from 'express';
import { DemandService } from '../services/demand.service';
import { createDemandSchema, updateDemandSchema } from '../schemas/demand.schema'; // Import atualizado

export class DemandController {
  private service = new DemandService();

  getAll = async (req: Request, res: Response) => {
    try {
      const demands = await this.service.getAll();
      res.json(demands);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const demand = await this.service.getById(Number(req.params.id));
      if (!demand) {
        return res.status(404).json({ message: 'Demanda não encontrada' });
      }
      res.json(demand);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const validated = createDemandSchema.parse(req.body);
      const demand = await this.service.create(validated);
      res.status(201).json(demand);
    } catch (error) {
      res.status(400).json({ message: 'Dados inválidos', error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const validated = updateDemandSchema.parse(req.body);
      const demand = await this.service.update(Number(req.params.id), validated);
      
      if (!demand) {
        return res.status(404).json({ message: 'Demanda não encontrada' });
      }
      
      res.json(demand);
    } catch (error) {
      res.status(400).json({ message: 'Dados inválidos', error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const deleted = await this.service.delete(Number(req.params.id));
      
      if (!deleted) {
        return res.status(404).json({ message: 'Demanda não encontrada' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };

  getWithFilters = async (req: Request, res: Response) => {
    try {
      const { status, providerId } = req.query;
      
      const filters: any = {};
      if (status && typeof status === 'string') filters.status = status;
      if (providerId && !isNaN(Number(providerId))) filters.providerId = Number(providerId);

      const demands = await this.service.getAll(filters);
      res.json(demands);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
}
