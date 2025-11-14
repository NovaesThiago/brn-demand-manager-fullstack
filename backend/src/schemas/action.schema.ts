import { z } from 'zod';

export const createActionSchema = z.object({
  description: z.string().min(5, 'Descrição deve ter pelo menos 5 caracteres'),
  technician: z.string().min(3, 'Nome do técnico deve ter pelo menos 3 caracteres'),
  demandId: z.number().int().positive('ID da demanda é obrigatório'),
});

export const updateActionSchema = createActionSchema.partial();