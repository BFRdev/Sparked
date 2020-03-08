import {GOAL_UPDATE} from './GoalActions';

// initial values
const INITIAL_STATE = {
    goal: '', 
    category: '', 
    why: '', 
};

export default( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOAL_UPDATE: 
        //adding a key to an object 
        return {...state, [action.payload.prop]: action.payload.value};
        default: return state; 
    }
};