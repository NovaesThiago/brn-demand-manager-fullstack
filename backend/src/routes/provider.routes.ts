import { Router } from 'express';
import { ProviderController } from '../controllers/provider.controller';

const router = Router();
const controller = new ProviderController();

/**
 * @openapi
 * /providers:
 *   get:
 *     summary: Lista todos os provedores
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: Lista de provedores retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @openapi
 * /providers/{id}:
 *   get:
 *     summary: Busca um provedor pelo ID
 *     tags: [Providers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Provedor encontrado
 *       404:
 *         description: Provedor não encontrado
 */
router.get('/:id', controller.getById);

/**
 * @openapi
 * /providers:
 *   post:
 *     summary: Cria um novo provedor
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - contact
 *               - responsible
 *             properties:
 *               name:
 *                 type: string
 *                 example: "BRNX Fibra"
 *               email:
 *                 type: string
 *                 example: "contato@brnxfibra.com.br"
 *               contact:
 *                 type: string
 *                 example: "contato@brnxfibra.com.br"
 *               responsible:
 *                 type: string
 *                 example: "João Silva"
 *     responses:
 *       201:
 *         description: Provedor criado com sucesso
 */
router.post('/', controller.create);

/**
 * @openapi
 * /providers/{id}:
 *   put:
 *     summary: Atualiza um provedor existente
 *     tags: [Providers]
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
 *               name:
 *                 type: string
 *               contact:
 *                 type: string
 *               responsible:
 *                 type: string
 *     responses:
 *       200:
 *         description: Provedor atualizado com sucesso
 *       404:
 *         description: Provedor não encontrado
 */
router.put('/:id', controller.update);

/**
 * @openapi
 * /providers/{id}:
 *   delete:
 *     summary: Remove um provedor
 *     tags: [Providers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Provedor removido com sucesso
 *       404:
 *         description: Provedor não encontrado
 */
router.delete('/:id', controller.delete);

export default router;