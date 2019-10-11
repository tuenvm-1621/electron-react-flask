import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { addBook, createBook, deleteBook, editBook, fetchBooks, getBook, removeBook, saveDataBooks, updateBook } from '../actions/bookAction'

function* fetchBookSaga() {
  try {
    const response = yield call(axios.get, `http://localhost:5000/api/book`)
    yield put(saveDataBooks(response.data))
  } catch (e) {
    //
  }
}

export default function* () {
  yield takeEvery(fetchBooks, fetchBookSaga)
}