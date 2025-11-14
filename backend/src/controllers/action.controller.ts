import { Request, Response } from 'express';
import { ActionService } from '../services/action.service';
import { createActionSchema } from '../schemas/action.schema';

const actionService = new ActionService();

export const createAction = async (req: Request, res: Response, next: Function) => {
  try {
    const validated = createActionSchema.parse(req.body);
    const action = await actionService.create(validated);
    res.status(201).json(action);
  } catch (error) {
    next(error);
  }
};

export class ActionController {
  private service = new ActionService();

  getAll = async (req: Request, res: Response) => {
    const actions = await this.service.getAll();
    res.json(actions);
  };

  getById = async (req: Request, res: Response) => {
    const action = await this.service.getById(Number(req.params.id));
    res.json(action);
  };

  create = async (req: Request, res: Response) => {
    const action = await this.service.create(req.body);
    res.status(201).json(action);
  };

  update = async (req: Request, res: Response) => {
    const action = await this.service.update(Number(req.params.id), req.body);
    res.json(action);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(Number(req.params.id));
    res.status(204).send();
  };

  getByDemand = async (req: Request, res: Response) => {
    try {
      const { demandId } = req.query;

      if (!demandId) {
        return res.status(400).json({ 
          message: 'Parâmetro demandId é obrigatório' 
        });
      }

      // ✅ Converter para número e validar
      const demandIdNumber = Number(demandId);
      if (isNaN(demandIdNumber)) {
        return res.status(400).json({ 
          message: 'demandId deve ser um número válido' 
        });
      }

      const actions = await this.service.getByDemand(demandIdNumber);
      res.json(actions);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}