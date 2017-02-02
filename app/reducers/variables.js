import * as types from '../constants/actionTypes';

const initialState = {
    rentValue: 3000,
    buyValue: 100000,
    liveTimeValue: 10,
    annualTaxValue: 11.5
};

const updateState = (state, modification) => Object.assign({}, state, modification);

const variaveis = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_RENT_VALUE:
            return updateState(state, { rentValue: action.value });
        case types.CHANGE_BUY_VALUE:
            return updateState(state, { buyValue: action.value });
        case types.CHANGE_LIVE_TIME_VALUE:
            return updateState(state, { liveTimeValue: action.value });
        case types.CHANGE_ANNUAL_TAX_VALUE:
            return updateState(state, { annualTaxValue: action.value });
        default:
            return state;
    }
};

export default variaveis;

export const getInitialState = () => initialState;