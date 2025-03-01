import { Request, Response } from 'express';

import { AddBookRequestDto } from '../../application/dtos/book/addBookRequestDto';
import { AddBookUseCaseInterface } from '../../application/usecases/book/addBookUseCaseInterface';

export class BookController {
  constructor(private readonly addBookUseCase: AddBookUseCaseInterface) {}

  async add(req: Request, res: Response): Promise<void> {
    try {
      const requestDto: AddBookRequestDto = {
        title: req.body.title,
      };
      const book = await this.addBookUseCase.execute(requestDto);
      res.status(201).json(book);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: '書籍の登録に失敗しました' });
    }
  }
}
