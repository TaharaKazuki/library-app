import { Router } from 'express';

import { BookController } from '../../../adapter/controllers/bookController';

export function bookRoutes(bookController: BookController): Router {
  const router = Router();

  router.post('/', bookController.add.bind(bookController));

  return router;
}
