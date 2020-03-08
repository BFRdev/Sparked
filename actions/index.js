import {combineReducers} from 'redux'; 
import GoalFormReducer from './goalFormReducers';

export default combineReducers({
    goalForm: GoalFormReducer,
});
