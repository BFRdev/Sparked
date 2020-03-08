const GOAL_UPDATE = 'goal_update'

export  const goalUpdate = ({prop, value}) => {
    return{
        type: GOAL_UPDATE,
        payload: {prop, value}
    };
};