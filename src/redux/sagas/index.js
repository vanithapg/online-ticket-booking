import { all } from 'redux-saga/effects'
import foodSaga from './foodSagas'

export default function* rootSaga() {
  yield all([
    foodSaga(),
  ])
}