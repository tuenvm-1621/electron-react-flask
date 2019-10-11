import { createActions } from 'redux-actions';

export const {
  fetchBooks,
  saveDataBooks,
  createBook,
  addBook,
  updateBook,
  editBook,
  deleteBook,
  removeBook,
  getBook,
} = createActions({
  'FETCH BOOKS': undefined,
  'SAVE DATA BOOKS': (data) => ({data}),
  'CREATE BOOK': (data) => ({data}),
  'ADD BOOK': (data) => ({data}),
  'UPDATE BOOK': (data) => ({data}),
  'EDIT BOOK': (data) => ({data}),
  'DELETE BOOK': (data) => ({data}),
  'REMOVE BOOK': (id) => ({id}),
  'GET BOOK': id => ({id})
})