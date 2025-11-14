import { Request, Response } from 'express';
import { ProviderService } from '../services/provider.service';
import { createProviderSchema, updateProviderSchema } from '../schemas/provider.schema'; // Import corrigido

export class ProviderController {
  private service = new ProviderService();

  getAll = async (req: Request, res: Response) => {
    try {
      const providers = await this.service.getAll();
      res.json(providers);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const provider = await this.service.getById(Number(req.params.id));
      if (!provider) {
        return res.status(404).json({ message: 'Provedor não encontrado' });
      }
      res.json(provider);
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const validated = createProviderSchema.parse(req.body);
      const provider = await this.service.create(validated);
      res.status(201).json(provider);
    } catch (error) {
      res.status(400).json({ message: 'Dados inválidos', error });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const validated = updateProviderSchema.parse(req.body);
      const provider = await this.service.update(Number(req.params.id), validated);
      
      if (!provider) {
        return res.status(404).json({ message: 'Provedor não encontrado' });
      }
      
      res.json(provider);
    } catch (error) {
      res.status(400).json({ message: 'Dados inválidos', error });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const deleted = await this.service.delete(Number(req.params.id));
      
      if (!deleted) {
        return res.status(404).json({ message: 'Provedor não encontrado' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  };
}