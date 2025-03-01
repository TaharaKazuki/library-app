import { Book } from '../entities/book';

export interface BookRepositoryInterface {
  create(book: Book): Promise<Book>;
}
