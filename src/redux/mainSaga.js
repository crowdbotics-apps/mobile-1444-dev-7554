import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView88908Saga from '../features/CalendarView88908/redux/sagas';
import EmailAuth68907Saga from '../features/EmailAuth68907/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView88908Saga,
EmailAuth68907Saga,
    
  ]);
}