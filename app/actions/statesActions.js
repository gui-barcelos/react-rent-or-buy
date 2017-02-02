import * as types from '../constants/actionTypes';
import states from '../../api/states';

export const fetchStates = () => {
    return { type: types.FETCH_STATES, states };
};