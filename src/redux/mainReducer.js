import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView88908Reducer from '../features/CalendarView88908/redux/reducers';
import EmailAuth68907Reducer from '../features/EmailAuth68907/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView88908: CalendarView88908Reducer,
EmailAuth68907: EmailAuth68907Reducer,

});