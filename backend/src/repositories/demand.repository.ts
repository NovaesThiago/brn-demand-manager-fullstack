import { PrismaClient} from '@prisma/client';
import { CreateDemandInput, UpdateDemandInput } from '../schemas/demand.schema';

const prisma = new PrismaClient();
type DemandType = 'DIAGNOSTICO' | 'MANUTENCAO' | 'CONFIGURACAO' | 'INSTALACAO' | 'OUTRO';
type DemandStatus = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'CANCELADA';


export class DemandRepository {
  getAll(filters?: { status?: DemandStatus; providerId?: number }) {
    return prisma.demand.findMany({
      where: {
        ...(filters?.status && { status: filters.status }),
        ...(filters?.providerId && { providerId: filters.providerId }),
      },
      include: { provider: true, actions: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  getById(id: number) {
    return prisma.demand.findUnique({ 
      where: { id }, 
      include: { provider: true, actions: true } 
    });
  }

  create(data: { 
    title: string; 
    description: string; 
    type: DemandType;    // ✅ Tipo correto
    status: DemandStatus; // ✅ Tipo correto
    providerId: number; 
  }) {
    return prisma.demand.create({ data });
  }

  update(id: number, data: { 
    title?: string; 
    description?: string; 
    type?: DemandType;    // ✅ Tipo correto
    status?: DemandStatus; // ✅ Tipo correto
    providerId?: number; 
  }) {
    return prisma.demand.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.demand.delete({ where: { id } });
  }
}