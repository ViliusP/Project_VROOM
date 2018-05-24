import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_TRIP_REQUESTS } from "./constants";
import { fetchTripRequestsSuccess, fetchTripRequestsError } from "./actions";
import request from 'utils/request';


function* fetchRequests(action)
{
  const requestURL = 'http://localhost:3001/requests?trip.tripID=' + action.id;
  try {
    const data = yield call(request, requestURL);
    yield put(fetchTripRequestsSuccess(data));
  } catch(error) {
    yield put(fetchTripRequestsError(error));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FETCH_TRIP_REQUESTS, fetchRequests);
}
