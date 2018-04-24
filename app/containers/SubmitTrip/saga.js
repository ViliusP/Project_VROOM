import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { loadTripsList } from 'containers/TripsList/actions';
import { SUBMIT_TRIP } from './constants';
import { resetForm } from 'containers/CreateTripForm/actions';
import { submitTripSuccess, submitTripError } from './actions';
import {   
    makeSelectCityTo,
    makeSelectCityFrom,
    makeSelectDepartureDate,
    makeSelectTimeFrom,
    makeSelectTimeTo,
    makeSelectSpace,
    makeSelectPrice,
    makeSelectInfo, 
} from 'containers/CreateTripForm/selectors';


function* putTrip(action)
{    
    const userName = "Vilius";          //-----------------------------
    const userSurname = "Paliokas";     //Laikini duomenys 
    const userId = 5;                   //-----------------------------
    const DepartureDate = yield select(makeSelectDepartureDate());
    const TimeFrom = yield select(makeSelectTimeFrom());
    const TimeTo = yield select(makeSelectTimeTo());
    const date1 = DepartureDate + "T" + TimeFrom + "Z";
    const date2 = DepartureDate + "T" + TimeTo + "Z";

    const obj = { 
        id: '',
        city: [
            yield select(makeSelectCityFrom()),
            yield select(makeSelectCityTo()),
        ],
        departure_time_from: new Date(date1),
        departure_time_to: new Date(date2),
        space: yield select(makeSelectSpace()),
        cost: yield select(makeSelectPrice()),
        info: yield select(makeSelectInfo()),
        driver: {
            id: userId,
            name: userName,
            surname: userSurname,
        },
    }

    const options = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }

    const requestURL = 'http://localhost:3001/trips/';

    try{
        yield call(request, requestURL, options);
        yield put(submitTripSuccess());
        yield put(resetForm());
        yield put(loadTripsList());
    } catch(error) {
        yield put(submitTripError(error));
    }
   
}

// Individual exports for testing
export default function* defaultSaga() {
    yield takeLatest(SUBMIT_TRIP, putTrip);
}
