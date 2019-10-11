import { handleActions } from 'redux-actions';

import { addBook, createBook, deleteBook, editBook, fetchBooks, getBook, removeBook, saveDataBooks, updateBook} from '../actions/bookAction'

export default handleActions({
  [saveDataBooks]: (state, { payload }) => {
    const { objects: books = []} = payload.data;
    return {
      ...state,
      books,
    }
  }
}, {})