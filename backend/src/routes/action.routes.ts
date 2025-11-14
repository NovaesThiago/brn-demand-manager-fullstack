import { Router } from 'express';
import { ActionController } from '../controllers/action.controller';

const router = Router();
const controller = new ActionController();

// Rotas
router.get('/', controller.getAll); // Lista TODAS as ações
router.get('/demand/:demandId', controller.getByDemand); // Ações por demanda
router.get('/:id', controller.getById); // Ação por ID
router.post('/', controller.create); // Criar ação
router.put('/:id', controller.update); // Atualizar ação
router.delete('/:id', controller.delete); // Deletar ação

// Documentação Swagger
/**
 * @openapi
 * /actions:
 *   get:
 *     summary: Lista todas as ações técnicas
 *     tags: [Actions]
 *     responses:
 *       200:
 *         description: Lista de todas as ações
 */
/**
 * @openapi
 * /actions/demand/{demandId}:
 *   get:
 *     summary: Lista ações vinculadas a uma demanda específica
 *     tags: [Actions]
 *     parameters:
 *       - name: demandId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de ações da demanda
 */
/**
 * @openapi
 * /actions/{id}:
 *   get:
 *     summary: Busca uma ação técnica por ID
 *     tags: [Actions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ação encontrada
 *       404:
 *         description: Ação não encontrada
 */
/**
 * @openapi
 * /actions:
 *   post:
 *     summary: Cria uma nova ação técnica
 *     tags: [Actions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - technician
 *               - demandId
 *             properties:
 *               description:
 *                 type: string
 *                 example: "Realizado diagnóstico de lentidão na interface eth1"
 *               technician:
 *                 type: string
 *                 example: "João Silva"
 *               demandId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Ação criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
/**
 * @openapi
 * /actions/{id}:
 *   put:
 *     summary: Atualiza uma ação técnica
 *     tags: [Actions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               technician:
 *                 type: string
 *               demandId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ação atualizada
 *       404:
 *         description: Ação não encontrada
 */
/**
 * @openapi
 * /actions/{id}:
 *   delete:
 *     summary: Remove uma ação técnica
 *     tags: [Actions]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Ação removida com sucesso
 *       404:
 *         description: Ação não encontrada
 */

export default router;