import { z } from 'zod';

// USAR MESMOS VALORES DO PRISMA (UPPERCASE, sem acentos)
const demandTypes = ['DIAGNOSTICO', 'MANUTENCAO', 'CONFIGURACAO', 'INSTALACAO', 'OUTRO'] as const;
const demandStatuses = ['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA'] as const;

export const createDemandSchema = z.object({
  title: z.string().min(3, 'Título deve ter pelo menos 3 caracteres'),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  type: z.enum(demandTypes),
  status: z.enum(demandStatuses),
  providerId: z.number().int().positive('ID do provedor é obrigatório'),
});

export const updateDemandSchema = createDemandSchema.partial();

// Tipos para usar no service/repository
export type CreateDemandInput = z.infer<typeof createDemandSchema>;
export type UpdateDemandInput = z.infer<typeof updateDemandSchema>;