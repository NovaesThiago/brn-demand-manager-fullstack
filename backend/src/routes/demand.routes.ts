import { Router } from 'express';
import { DemandController } from '../controllers/demand.controller';

const router = Router();
const controller = new DemandController();

// ✅ ADICIONAR TODAS AS ROTAS FALTANTES:
router.get('/', controller.getWithFilters);
router.get('/:id', controller.getById);     
router.post('/', controller.create);       
router.put('/:id', controller.update);      
router.delete('/:id', controller.delete);   

/**
 * @openapi
 * /demands:
 *   get:
 *     summary: Lista demandas com filtros opcionais
 *     tags: [Demands]
 *     parameters:
 *       - name: status
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [PENDENTE, EM_ANDAMENTO, CONCLUIDA, CANCELADA]
 *       - name: providerId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de demandas filtradas
 */
/**
 * @openapi
 * /demands:
 *   post:
 *     summary: Cria uma nova demanda
 *     tags: [Demands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - type
 *               - status
 *               - providerId
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Diagnóstico de lentidão"
 *               description:
 *                 type: string
 *                 example: "Cliente reporta lentidão na rede durante horário de pico"
 *               type:
 *                 type: string
 *                 enum: [DIAGNOSTICO, MANUTENCAO, CONFIGURACAO, INSTALACAO, OUTRO]
 *                 example: "DIAGNOSTICO"
 *               status:
 *                 type: string
 *                 enum: [PENDENTE, EM_ANDAMENTO, CONCLUIDA, CANCELADA]
 *                 example: "PENDENTE"
 *               providerId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Demanda criada com sucesso
 */

export default router;