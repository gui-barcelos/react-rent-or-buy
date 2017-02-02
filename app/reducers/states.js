import * as types from '../constants/actionTypes';

const initialState = [];

const states = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_STATES:
            return action.states;
        default:
            return state;
    }
};

export default states;

export const getInitialState = () => initialState;