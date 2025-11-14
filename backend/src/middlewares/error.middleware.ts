import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Erro de validação',
      issues: err.issues,
    });
  }

  console.error(err);
  res.status(500).json({
    message: 'Erro interno do servidor',
  });
};