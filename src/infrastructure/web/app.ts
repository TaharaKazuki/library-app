import { PrismaClient } from '@prisma/client';
import express from 'express';

import { BookController } from '../../adapter/controllers/bookController';
import { PrismaBookRepository } from '../../adapter/repositories/prismaBookRepository';
import { UuidGenerator } from '../../adapter/utils/uuidGenerator';
import { AddBookUseCase } from '../../application/usecases/book/addBookUseCase';

import { bookRoutes } from './routers/bookRouter';

const app = express();

app.use(express.json());

const prisma = new PrismaClient();
const uuidGenerator = new UuidGenerator();

const bookRepository = new PrismaBookRepository(prisma);
const addBookUseCase = new AddBookUseCase(bookRepository, uuidGenerator);

const bookController = new BookController(addBookUseCase);

app.use('/books', bookRoutes(bookController));

const POST = process.env.PORT || 3000;

app.listen(POST, () => {
  console.log(`Server is running on port ${POST}`);
});
