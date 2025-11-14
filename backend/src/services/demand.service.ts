import { DemandRepository } from '../repositories/demand.repository';
import { CreateDemandInput, UpdateDemandInput } from '../schemas/demand.schema';

type DemandStatus = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA' | 'CANCELADA';
type DemandType = 'DIAGNOSTICO' | 'MANUTENCAO' | 'CONFIGURACAO' | 'INSTALACAO' | 'OUTRO';

export class DemandService {
  private repo = new DemandRepository();

  getAll(filters?: { status?: DemandStatus; providerId?: number }) { // ✅ Usar DemandStatus
    return this.repo.getAll(filters);
  }

  getById(id: number) {
    return this.repo.getById(id);
  }

  create(data: CreateDemandInput) {
    // ✅ Converter strings do Zod para enums do Prisma
    const prismaData = {
      ...data,
      type: data.type as DemandType,
      status: data.status as DemandStatus
    };
    return this.repo.create(prismaData);
  }

  update(id: number, data: UpdateDemandInput) {
    const prismaData: any = { ...data };
    if (data.type) prismaData.type = data.type as DemandType;
    if (data.status) prismaData.status = data.status as DemandStatus;
    
    return this.repo.update(id, prismaData);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}