import { takeLatest, delay, put } from "redux-saga/effects";

export function* onIncrement() {
  yield console.log("I am incremented");
  yield delay(3000);
  yield put({ type: "INCREMENT_FROM_SAGA" });
}

export function* incrementSaga() {
  yield takeLatest("INCREMENT", onIncrement);
}

/*

//In this example, "take" listens the INCREMENT action
//and when it comes it continues to console.log ONCE
//When subsequent INCREMENTs comes it never console logs again
//This is the difference between "take" and "takeEvery".
//"takeEvery" on the other hand, listens for the INCREMENT action,
//And, whenever this action comes, it always creates new saga which 
//depicted in the 2nd parameter. Like a continues while(true) loop.
//Finally, takeLatest, cancel all sagas created for same action cancelled
//and the last one executed only. 

import { take } from 'redux-saga/effects';

export function* onIncrement() {
  yield take('INCREMENT');
  console.log('I am incremented')
);
*/
