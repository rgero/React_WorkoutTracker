import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import exerciseReducer from '../reducers/exercise';
import workoutReducer from '../reducers/workout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      exercise: exerciseReducer,
      workout: workoutReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
