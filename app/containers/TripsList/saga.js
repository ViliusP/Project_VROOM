import { take, call, put, select, takeLatest, combineLatest } from 'redux-saga/effects';
import { LOAD_TRIPS_LIST } from './constants';
import { loadTripsList, tripsListLoaded, tripsListLoadingError } from './actions';

import request from 'utils/request';

// Individual exports for testing

function* getList(action)
{
  const currentUserId = 5;
  const requestURL = 'http://localhost:3001/trips?driver.id=' + currentUserId;
  try {
    const data = yield call(request, requestURL);
    yield put(tripsListLoaded(data));
  } catch(error) {
    yield put(tripsListLoadingError(error));
  }
}

export default function* defaultSaga() {
  yield takeLatest(LOAD_TRIPS_LIST, getList);
}
