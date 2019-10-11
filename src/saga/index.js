import { all, fork } from 'redux-saga/effects'

import bookSaga from './bookSaga'

export default function* () {
  yield all([
    fork(bookSaga)
  ])
}