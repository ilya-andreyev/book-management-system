import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  newBookTitle: string = '';
  newBookAuthor: string = '';

  books: Book[] = [];

  ngOnInit(): void {
    const savedBooks = localStorage.getItem('books');

    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      const newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };
      this.books.push(newBook);

      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
